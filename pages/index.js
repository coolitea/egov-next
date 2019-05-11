import Head from 'next/head';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div>
    <Head>
      <title>Home | eGov Service</title>
    </Head>
    <h1>Hello from the index</h1>
  </div>
);

export default withLayout(Index);
