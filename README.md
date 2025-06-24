
# 🚀 Next.js 15.3.3 + React 19 + TypeScript + Tailwind + Redux Toolkit Starter

This is a modern web application starter built with:

- ⚡ **Next.js 15.3.3** (App Router)
- ⚛️ **React 19**
- 🧠 **TypeScript** for type safety
- 💨 **Tailwind CSS** for styling
- 🛠 **Redux Toolkit (RTK)** for state management
- 📦 **pnpm** for fast and efficient package installation

---

## 📁 Project Structure

```

.
├── app/                  # App directory using Next.js App Router
├── components/           # Reusable React components
├── features/             # Redux Toolkit slices
├── hooks/                # Custom React hooks
├── store/                # Redux store configuration
├── styles/               # Global Tailwind CSS styles
├── types/                # Global TypeScript types
├── public/               # Static assets
├── utils/                # Utility functions
├── pnpm-lock.yaml        # pnpm lock file
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration with path aliases

````

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/next15_ts_tailwind_redux_toolkit.git
cd next15_ts_tailwind_redux_toolkit
````

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

The app will be running at: [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts

| Script        | Description                 |
| ------------- | --------------------------- |
| `pnpm dev`    | Run in development mode     |
| `pnpm build`  | Build for production        |
| `pnpm start`  | Start the production server |
| `pnpm lint`   | Run ESLint                  |
| `pnpm format` | Format code with Prettier   |

---

## 🎨 Styling with Tailwind

Tailwind is preconfigured. You can start using utility classes right away:

```html
<div className="text-center text-xl font-bold text-blue-500">
  Hello Tailwind!
</div>
```

---

## 🧠 State Management with Redux Toolkit

Redux Toolkit is set up using the `@reduxjs/toolkit` package. Add new slices in the `features/` folder and register them in `store/index.ts`.

Example slice:

```ts
// features/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## ✅ Tech Stack Summary

* **Framework**: [Next.js](https://nextjs.org/)
* **UI Library**: [React](https://react.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
* **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
* **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📌 Requirements

* Node.js v18+
* pnpm v8+

