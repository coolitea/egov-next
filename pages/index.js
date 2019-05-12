import Head from 'next/head';
import Header from '../components/Header';
import Button from '../components/Button';
import { Layout } from 'antd';
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | eGov Service</title>
    </Head>
    <Header
      leftColumn={<h1>eGov Service</h1>}
      centerColumn={<Button href="/search" text="Search" btnIcon={'search'} />}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={'shopping-cart'} />
      }
    />
    <Content style={{ padding: '0 50px' }}>
      <div
        style={{
          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          width: '100%'
        }}>
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'Men'}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'Women'}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'Shoes'}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'Suits'}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={'Dresses'}
        />
      </div>
    </Content>
  </>
);
