import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schema";
import { supabase } from "@/lib/supabase";
import { success } from "zod";

const TEN_MINUTES = 10 * 60 * 1000;

async function sendToTelegram(data: { name: string, phone: string, interest: string, comment?: string | null, utm?: any }) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.warn("Telegram токены не настроены. Уведомление не отправлено.");
        return;
    }

    const utmStr = data.utm && Object.keys(data.utm).length > 0
        ? `\n\n📊 *UTM Метки:*\nИсточник: ${data.utm.source || '-'}\nМедиум: ${data.utm.medium || '-'}\nКампания: ${data.utm.campaign || '-'}`
        : '';

    const text = `☕️ *Новая заявка «Кварта»!*\n\n👤 *Имя:* ${data.name}\n📞 *Телефон:* ${data.phone}\n🛒 *Интересует:* ${data.interest}\n💬 *Комментарий:* ${data.comment || '—'}${utmStr}`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(tgUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            console.error("Ошибка Telegram API:", await response.text());
        }
    } catch (error) {
        console.error("Сетевая ошибка при отправке в Telegram:", error);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsedData = leadSchema.safeParse(body);

        if(!parsedData.success) {
            return NextResponse.json({ error: "Неверные данные формы" }, { status: 400 });
        }

        const { name, phone, interest, comment } = parsedData.data;

        const tenMinutesAgo = new Date(Date.now() - TEN_MINUTES).toISOString();

        const { data: recentLeads, error: checkError } = await supabase
            .from('leads')
            .select('id, created_at')
            .eq('phone', phone)
            .gte('created_at', tenMinutesAgo)
            .limit(1);

        if (checkError) {
            console.error("Ошибка при проверке лимита:", checkError);
            return NextResponse.json({ error: "Ошибка базы данных" }, { status: 500 });
        }

        if (recentLeads && recentLeads.length > 0) {
            return NextResponse.json(
                { error: "Вы уже оставляли заявку. Пожалуйста, подождите 10 минут." },
                { status: 429 }
            );
        }

        const { error: insertError } = await supabase
            .from('leads')
            .insert([
                { 
                    name: name, 
                    phone: phone, 
                    interest: interest, 
                    comment: comment || null,
                    utm: body.utm || null
                }
            ]);

        if (insertError) {
            console.error("Ошибка при сохранении в Supabase:", insertError);
            return NextResponse.json({ error: "Не удалось сохранить заявку" }, { status: 500 });
        }

        sendToTelegram({ name, phone, interest, comment, utm: body.utm });

        return NextResponse.json({ success: true, message: "Заявка принята" });

    } catch (error) {
        console.error("Непредвиденная ошибка сервера:", error);
        return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}