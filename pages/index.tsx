import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="Home">
        <style jsx>{`
          .Home {
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;
