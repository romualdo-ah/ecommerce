module.exports = {
	content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				// 'varela-round': [ 'Varela Round', 'sans-serif' ],
				montserrat: [ 'Montserrat', 'sans-serif' ]
			}
			// backdropFilter: {
			// 	none: 'none',
			// 	blur: 'blur(10px)'
			// }
		}
	},
	plugins: [ require('@tailwindcss/line-clamp'), require('tailwindcss-filters') ]
};
