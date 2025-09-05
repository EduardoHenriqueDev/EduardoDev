// src/contexts/LanguageContext.tsx
import React, { createContext, useState, ReactNode, FC } from 'react';
import { translations } from '../translations';

type Language = 'pt' | 'en';

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations.pt;
}

export const LanguageContext = createContext<LanguageContextProps>({
    language: 'pt',
    toggleLanguage: () => { },
    t: translations.pt,
});

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};
