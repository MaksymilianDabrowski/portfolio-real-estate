"use client";

import React, { useState } from "react";
import Container from "./Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
    name: z.string().min(2, "Imię jest za krótkie"),
    email: z.email("Nieprawidłowy adres e-mail"),
    comp_name: z.string().optional(),
    message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type FormFields = z.infer<typeof validationSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormFields>({
        resolver: zodResolver(validationSchema),
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        // reusable submition form
        /*
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    ...data, // Przekazujemy dane z formularza
                }),
            });
    
            const result = await response.json();
    
            if (result.success) {
                setFeedbackMessage("Wiadomość została wysłana pomyślnie!");
                reset(); // Czyścimy formularz
            } else {
                setFeedbackMessage("Wystąpił błąd. Spróbuj ponownie.");
            }
        */

        setFeedbackMessage("To jest formularz demonstracyjny. Twoje dane nie zostały wysłane.");
        reset();

        setTimeout(() => {
            setFeedbackMessage('');
        }, 5000);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Imię i nazwisko</label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name")}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="comp_name" className="leading-7 text-sm text-gray-600">Nazwa firmy (opcjonalnie)</label>
                                <input
                                    id="comp_name"
                                    type="text"
                                    {...register("comp_name")}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Wiadomość</label>
                                <textarea
                                    id="message"
                                    {...register("message")}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                className="flex mx-auto text-white border-2 py-2 px-8 focus:outline-none text-lg bg-[#1E1E1F] rounded-xl hover:bg-white hover:text-[#1E1E1F] hover:border-[#1E1E1F] active:scale-95 transition-all"
                            >
                                Wyślij wiadomość
                            </button>
                        </div>

                        {feedbackMessage && (
                            <div className="p-2 w-full text-center text-blue-600 font-medium">
                                {feedbackMessage}
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </Container>
    );
}