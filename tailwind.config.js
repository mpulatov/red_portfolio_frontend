const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/**/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem'
		},
		extend: {
			colors: {
				primary: 'rgb(36, 36, 36)',
				purple: '#6C5ECF',
				'light-blue': '#32A8E2',
				gray: {
					400: '#9898ad',
					500: '#6B6B7B',
					600: '#5B5B6B',
					800: '#353340',
					900: '#272532'
				}
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '350ms'
			},
			boxShadow: {
				DEFAULT: '0 3px 12 px rgba(0, 0, 0, 0.03)',
				md: '0 3px 12px rgba(0, 0, 0, 0.1)'
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				},
				'.flex-center-row': {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center'
				},

				'.shadow-purple': {
					boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)'
				}
			})
		})
	]
}
