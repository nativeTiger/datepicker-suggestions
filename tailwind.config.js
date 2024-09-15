/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        background: "#F9FAFB",
        transparent: "transparent",
        white: "#ffffff",
        tan: "#94674C",
        primary: {
          50: "#f7f0f4",
          100: "#f2e4ec",
          200: "#debdce",
          300: "#c997ae",
          400: "#a35d74",
          500: "#7b2f3f",
          600: "#6e2534",
          700: "#5c1a26",
          800: "#4a111a",
          900: "#380a11",
          950: "#240408",
        },
        yellow: {
          50: "#fffdf2",
          100: "#fffce8",
          200: "#fcf2c2",
          300: "#fceaa2",
          400: "#fad55a",
          500: "#F8B717",
          600: "#de9d12",
          700: "#ba7b0d",
          800: "#945707",
          900: "#703c04",
          950: "#472202 ",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712 ",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
  },
  plugins: [],
};