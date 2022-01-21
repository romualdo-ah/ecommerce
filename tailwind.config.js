module.exports = {
	content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				// 'varela-round': [ 'Varela Round', 'sans-serif' ],
				montserrat: [ 'Montserrat', 'sans-serif' ]
			},
			keyframes: {
				'bounce-short': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			}
		}
	},
	plugins: [ require('@tailwindcss/line-clamp'), require('tailwindcss-filters') ]
};
