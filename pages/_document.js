import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          {/* <title>eGov Service</title> */}
          <meta name="author" content={'coolitea'} />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
            rel="stylesheet"
          />
          <style>{`body { background-color: #EFF2F5!important}`}</style>
          <meta name="theme-color" content="black" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="This is eGov Service" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
