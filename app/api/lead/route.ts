import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schema";
import { success } from "zod";

const rateLimitMap = new Map<string, number>();
const TEN_MINUTES = 10 * 60 * 1000;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsedData = leadSchema.safeParse(body);

        if(!parsedData.success) {
            return NextResponse.json({ error: "Неверные данные формы" }, { status: 400 });
        }

        const { phone } = parsedData.data;

        const lastSubmission = rateLimitMap.get(phone);
        if (lastSubmission && Date.now() - lastSubmission < TEN_MINUTES) {
            return NextResponse.json(
                { error: "Вы уже оставляли заявку. Пожалуйста, подождите 10 минут." },
                { status: 429 }
            );
        }

        rateLimitMap.set(phone, Date.now());

        // Здесь будет логика сохранения в БД или файл
        console.log("Новая заявка:", { ...parsedData.data, utm: body.utm });

        return NextResponse.json({ success: true, message: "Заявка принята" });
    } catch (error) {
        return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}