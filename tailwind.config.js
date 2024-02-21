/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1440px",
			"3xl": "1536px",
		},
		extend: {},
	},
	plugins: [],
};
