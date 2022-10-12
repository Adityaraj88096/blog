import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225853903466495"
                        crossorigin="anonymous"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            (adsbygoogle = window.adsbygoogle || []).push({
                                google_ad_client: "ca-pub-7225853903466495",
                                enable_page_level_ads: true
                                });
                                `,
                    }} />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YE682ERZGC" />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){
                        window.dataLayer.push(arguments);
                        }
                        gtag('js', new Date());

                        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
                        `
                    }
                    }
                    />
                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;