module.exports = {
	reactStrictMode: true,
	//export API_URL
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: [ 'http://lorempixel.com.br' ]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		];
	}
};
