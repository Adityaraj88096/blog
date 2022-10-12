import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx);
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
                </Head>
                <Body>
                    <Main />
                    <NextScript />
                </Body>
            </Html>
        )
    }
}

export default MyDocument;