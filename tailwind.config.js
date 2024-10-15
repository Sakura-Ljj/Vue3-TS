/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: {
					800: '#001529'
				}
			}
		}
	},
	plugins: [],
	prefix: 'tw-'
}
