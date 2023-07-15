/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-p": "#10172B",
				"dark-s": "#20293C",
				"dark-text": "#798499",
				"light-p": "#fff",
				"light-s": "#20293C",
				"light-text": "#3C4252",
				"text-active": "#49A5DB",
				"light-gray": "#dddddd",
			},
		},
	},
	plugins: [],
};
