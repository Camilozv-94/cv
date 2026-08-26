"use client";
import Button from "../ui/Button";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";

export default function Header() {
    const t = useTranslations('Header');
    const router = useRouter();

    const changeLocale = () => {
        const currentLocale = document.cookie.match(/locale=(.+?)(;|$)/)?.[1] || 'en';
        const newLocale = currentLocale === 'en' ? 'es' : 'en';
        document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
        router.refresh();
    }
    return (
        <header className="flex flex-row items-center justify-between  w-full h-16 px-8">
            <div>
                <h1 className="text-lg font-semibold">Camilo Zulauaga <span className="text-secondary">Software Engineer </span> = Sr. Full Stack Developer;  </h1>
            </div>
            <nav>
                <ul className="flex flex-row items-center gap-4 text-tertiary divide-x divide-gray-300 [&>li]:pr-3">
                    <li>
                        <a href="#">{t('nav.howIBuild')}</a>
                    </li>
                    <li>
                        <a href="#">{t('nav.experience')}</a>
                    </li>
                    <li>
                        <a href="#">{t('nav.about')}</a>
                    </li>
                    <li>
                        <Button title={t('nav.letsTalk')} variant="neon" url="#" />
                    </li>
                    <li>
                        <button className="bg-background text-primary p-2  rounded-sm border-1 border-tertiary" onClick={changeLocale}>EN / ES</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}