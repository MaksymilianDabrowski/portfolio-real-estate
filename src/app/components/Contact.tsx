"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";

export default function Contact() {
    const [formData, setFormData] = useState({
        comp_name: '',
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                comp_name: formData.comp_name,
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }),
        });

        const result = await response.json();
        if (result.success) {
            setSuccessMessage("Wiadomość została wysłana pomyślnie!");
            setFormData({ comp_name: '', name: '', email: '', message: '' });
        }
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Imię i nazwisko
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Nazwa firmy
                                    </label>
                                    <input
                                        name="comp_name"
                                        value={formData.comp_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Wiadomość
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#1E1E1F] focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    className="flex mx-auto text-white border-2 py-2 px-8 focus:outline-none text-lg m-10 bg-[#1E1E1F] rounded-xl hover:bg-white hover:text-[#1E1E1F] hover:border-[#1E1E1F] active:scale-95"
                                >
                                    Wyślij wiadomość
                                </button>
                            </div>
                            {successMessage && (
                                <div className="p-2 w-full text-center text-green-600">
                                    {successMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}
