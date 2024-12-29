/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				otgogreen: {
					light: '#b4d55f',
					medium: '#4c9342',
					dark: '#3f421b',
				},
				otgopurple: {
					light: '#692f65',
					dark: '#4e2688',
				},
			}
		},
	},
	plugins: [],
}
