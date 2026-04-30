"use client";

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLanguage = (locale: 'tr' | 'en') => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 backdrop-blur-sm">
      <button
        onClick={() => switchLanguage('tr')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
          currentLocale === 'tr'
            ? 'bg-[#ffcf86] text-zinc-950'
            : 'text-white/66 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
          currentLocale === 'en'
            ? 'bg-[#ffcf86] text-zinc-950'
            : 'text-white/66 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
