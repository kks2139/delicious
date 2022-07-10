import type {NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout documentTitle="홈">
      <div className="Home">
        <h1>이곳은 쿠킹의 홈입니다.</h1>
        <Link href="/post">
          <button>글을 써보자</button>
        </Link>
        <div className="img-box common-img-contain">
          <Image src="/img/sample_empty.png" layout="fill" />
        </div>
        <p>설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명</p>
        <style jsx>{`
          .Home {
            padding: 40px 20px 0 20px;
          }
          .img-box {
            position: relative;
            width: 100%;
            height: 250px;
            margin: 20px 0;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;
