import { type NextPage } from 'next';
import { Layout, Header } from '~/components';

const Home: NextPage = () => {
  return (
    <Layout title="Vidyo.ai">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="text-white">Hello, World!</div>{' '}
      </main>
    </Layout>
  );
};

export default Home;
