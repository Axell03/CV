<<<<<<< HEAD
# Axell Baez — Portfolio

Portfolio personal construido con **Next.js 14**, **Framer Motion** y **TailwindCSS**.

## Requisitos

- Node.js 18+
- npm o yarn

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu browser.

## Deploy en Vercel

1. Sube este proyecto a un repo de GitHub
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa el repo → Vercel detecta Next.js automáticamente
4. Click **Deploy** — listo ✓

## Personalizar antes del deploy

Abre `src/lib/data.ts` y reemplaza:

```ts
linkedin: 'YOUR_LINKEDIN_URL',  // ← tu perfil de LinkedIn
email: 'YOUR_EMAIL',            // ← tu email
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx     # root layout + metadata
│   ├── page.tsx       # página principal
│   └── globals.css    # estilos base + fuentes
├── components/
│   ├── Cursor.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Specialties.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FadeIn.tsx     # wrapper de animación reutilizable
└── lib/
    └── data.ts        # ← TODOS tus datos aquí
```
