/* eslint-disable prettier/prettier */
import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Petre';
const APP_DESCRIPTION = "I'm a Front End Developer that specializes in building products for the web using current best practices in web development.";

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    
                    <meta name="title" content="Peter Awotola: Front End Developer" />
                    <meta name="description" content={APP_DESCRIPTION} />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://metatags.io/" />
                    <meta property="og:title" content="Peter Awotola: Front End Developer" />
                    <meta property="og:description" content={APP_DESCRIPTION} />
                    <meta
                        property="og:image"
                        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Peter Awotola: Front End Developer" />
                    <meta property="twitter:description" content={APP_DESCRIPTION} />
                    <meta
                        property="twitter:image"
                        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    />

                    <meta name="application-name" content={APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#22543D" />
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#22543D" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
                    {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
                    <link rel="apple-touch-icon" sizes="192x192" href="/icons/pwa192x192.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
