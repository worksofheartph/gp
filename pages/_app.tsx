import Head from 'next/head';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>Galing Probinsya</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
