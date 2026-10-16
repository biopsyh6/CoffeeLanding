"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { leadSchema, type LeadFormValues } from "@/lib/schema";

export default function LeadForm() {
    const [utmParams, setUtmParams] = useState<Record<string, string>>({});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<LeadFormValues>({
        resolver: zodResolver(leadSchema),
        defaultValues: { interest: "" }
    });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utms = {
            source: params.get("utm_source") || "direct",
            medium: params.get("utm_medium") || "",
            campaign: params.get("utm_campaign") || "",
        };
        setUtmParams(utms);
    }, []);

    const onSubmit = async (data: LeadFormValues) => {
        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, utm: utmParams }),
            });

            const result = await response.json();

            if(!response.ok) {
                toast.error(result.error || "Произошла ошибка при отправке");
                return;
            }

            toast.success("Заявка успешно отправлена! Вам скоро позвонят.");
            reset();
        } catch (error) {
            toast.error("Не удалось отправить заявку. Проверьте интернет-соединение.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md w-full bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-medium text-stone-800">Оставить заявку</h3>

            <div>
                <input
                    {...register("name")}
                    placeholder="Ваше имя"
                    className="w-full p-3 border border-stone-200 rounded-lg outline-none focus:border-stone-400 transition-colors placeholder:text-stone-500 text-stone-800"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <input
                    {...register("phone")}
                    placeholder="+375 (__) ___-__-__"
                    className="w-full p-3 border border-stone-200 rounded-lg outline-none focus:border-stone-400 transition-colors placeholder:text-stone-500 text-stone-800"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
                <select {...register("interest")} className="w-full p-3 border border-stone-200 rounded-lg outline-none focus:border-stone-400 bg-white text-stone-800">
                    <option value="" disabled hidden>Что интересует</option>
                    <option value="Подписка">Подписка</option>
                    <option value="Эфиопия Иргачеффе">Эфиопия Иргачеффе</option>
                    <option value="Колумбия Уила">Колумбия Уила</option>
                    <option value="Бразилия Серрадо">Бразилия Серрадо</option>
                    <option value="Дрип-пакеты">Дрип-пакеты, ассорти</option>
                    <option value="Вопрос">Задать вопрос</option>
                </select>
                {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>}
            </div>

            <div>
                <textarea
                    {...register("comment")}
                    placeholder="Комментарий (необязательно)"
                    rows={3}
                    className="w-full p-3 border border-stone-200 rounded-lg outline-none focus:border-stone-400 transition-colors placeholder:text-stone-500 text-stone-800 resize-none"
                />
                {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-800 text-white p-3 rounded-lg hover:bg-stone-700 transition-colors disabled:bg-stone-400"
            >
                {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
        </form>
    );
}