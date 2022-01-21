import '../styles/globals.css';
import '../styles/Lazy.modules.css';

import Layout from '../components/Layout';
import {CartProvider} from '../hooks/useCart';

function MyApp({ Component, pageProps }) {

	return (
		<CartProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</CartProvider>
	);
}

export default MyApp;
