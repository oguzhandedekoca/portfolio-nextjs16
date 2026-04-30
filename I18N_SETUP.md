# i18n Kurulum Dokümantasyonu

## 📦 Kurulum

Projeye `next-intl` kütüphanesi eklendi:

```bash
npm install next-intl
```

## 🗂 Dosya Yapısı

```
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx       # Locale-aware layout
│   │       ├── page.tsx         # Ana sayfa (i18n entegre)
│   │       ├── globals.css
│   │       └── ScrollToTopButton.tsx
│   ├── components/
│   │   └── LanguageSwitcher.tsx # Dil değiştirici component
│   ├── i18n/
│   │   ├── routing.ts           # Routing konfigürasyonu
│   │   └── request.ts           # Request handler
│   └── middleware.ts            # Next.js middleware
├── messages/
│   ├── tr.json                  # Türkçe çeviriler
│   └── en.json                  # İngilizce çeviriler
└── next.config.ts               # next-intl plugin eklendi
```

## 🌍 Desteklenen Diller

- **Türkçe (tr)** - Varsayılan dil
- **İngilizce (en)**

## 🔧 Konfigürasyon

### 1. Routing (`src/i18n/routing.ts`)

```typescript
export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
});
```

- `localePrefix: 'as-needed'` - Varsayılan dil (TR) için URL'de `/tr` prefix'i gösterilmez
- Örnek URL'ler:
  - Türkçe: `https://example.com/` veya `https://example.com/tr`
  - İngilizce: `https://example.com/en`

### 2. Middleware (`src/middleware.ts`)

```typescript
export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
```

Middleware, gelen istekleri otomatik olarak doğru dile yönlendirir.

## 📝 Çeviri Dosyaları

### Yapı

Çeviri dosyaları `messages/` klasöründe JSON formatında:

```json
{
  "nav": {
    "name": "Oğuzhan DEDEKOCA",
    "projects": "Projeler",
    "skills": "Yetkinlikler"
  },
  "hero": {
    "title": "Modern, sürdürülebilir...",
    "description": "Ben Oğuzhan Dedekoca..."
  }
}
```

### Kullanım

```typescript
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  
  return <h1>{t('hero.title')}</h1>;
}
```

### Nested Object Çevirileri

```typescript
// Object olarak çeviri almak için t.raw() kullanın
const projectT = t.raw(`projects.${project.key}`) as { 
  title: string; 
  type: string; 
  summary: string 
};

return <h3>{projectT.title}</h3>;
```

## 🎨 Dil Değiştirici Component

`LanguageSwitcher` component'i navigation bar'a eklendi:

```typescript
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

<nav>
  {/* ... diğer nav itemlar */}
  <LanguageSwitcher />
</nav>
```

Component, mevcut sayfada kalarak dili değiştirir (client-side navigation).

## 🔄 Yeni Dil Ekleme

1. `src/i18n/routing.ts` dosyasına yeni dili ekleyin:
```typescript
locales: ['tr', 'en', 'de'], // Almanca eklendi
```

2. `messages/de.json` dosyası oluşturun

3. `src/middleware.ts` matcher'ı güncelleyin:
```typescript
matcher: ['/', '/(tr|en|de)/:path*', ...],
```

4. `LanguageSwitcher` component'ine yeni dil butonunu ekleyin

## 📄 Metadata i18n

Layout'ta metadata dinamik olarak çevrilir:

```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
```

## 🚀 Geliştirme

```bash
npm run dev
```

- Türkçe: http://localhost:3000
- İngilizce: http://localhost:3000/en

## 📦 Build

```bash
npm run build
npm start
```

Build sırasında tüm diller için static sayfalar oluşturulur.

## ✅ Özellikler

- ✅ URL-based dil seçimi
- ✅ Client-side dil değiştirme
- ✅ SEO-friendly (her dil için ayrı metadata)
- ✅ Type-safe çeviriler
- ✅ Varsayılan dil için temiz URL'ler
- ✅ Static generation desteği
- ✅ Middleware ile otomatik yönlendirme

## 🔍 Notlar

- Çeviri dosyalarında eksik key olması durumunda development'ta uyarı alırsınız
- Production build'de tüm çeviriler kontrol edilir
- `t.raw()` kullanırken TypeScript type assertion gereklidir
- Middleware, Next.js 16.2.4'te "proxy" olarak değiştirilecek (deprecation warning)
