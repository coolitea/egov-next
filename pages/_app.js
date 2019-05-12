import App, { Container } from 'next/app';
import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(result => console.log('SW Registered: ', result))
        .catch(error => console.log("Can't register SW: ", error));
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
          <Footer>This is important footer</Footer>
        </Layout>
      </Container>
    );
  }
}
