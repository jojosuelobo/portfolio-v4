"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Globe } from "lucide-react";
import { Button } from "./button";

export function LanguageSelector() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                className="flex items-center gap-1 text-slate-700 hover:text-cyan-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t("language")}
            >
                <Globe className="h-5 w-5" />
            </Button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="py-1">
                        <button
                            onClick={() => {
                                setLanguage("pt");
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm cursor-pointer ${language === "pt" ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                } hover:bg-gray-100 transition-colors`}
                        >
                            {t("portuguese")}
                        </button>
                        <button
                            onClick={() => {
                                setLanguage("en");
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm cursor-pointer ${language === "en" ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                } hover:bg-gray-100 transition-colors`}
                        >
                            {t("english")}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
} 