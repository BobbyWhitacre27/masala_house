/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html", './src/App.jsx', './src/**/*.{js,jsx,ts,tsx}', "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
	theme: {
		extend: {

			animation: {
				fade: 'fadeOut 1.5s ease-in-out',
			  },
			  keyframes: theme => ({
				fadeOut: {
					
				  '0%': { backgroundColor: theme('colors.red.700') },
				  '100%': { backgroundColor: theme('colors.transparent') },
				},
			  }),
		},
	},
	plugins: [require("@tailwindcss/forms")({
		strategy: 'class',
	}), require('daisyui')],

	daisyui: {
		themes: false,
	},
}

