/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'bg-color': '#F2F6FE',
      'text-primary':'#3175FE',
      'body-black':'#111111',
      'body-grey':'#E1E1E1',
      'body-white':'#FFFFFF',
    },
  },
  plugins: [],
};
