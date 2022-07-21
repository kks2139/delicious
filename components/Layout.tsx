import Head from 'next/head';
import Header from './Header';

const APP_TITLE = '쿠킹';
const HEADER_HEIGHT = 60;

interface LayoutProps {
  children: React.ReactNode;
  documentTitle?: string;
}

function Layout({children, documentTitle = ''}: LayoutProps) {
  return (
    <div className="Layout">
      <Head>
        <title>
          {documentTitle ? `${APP_TITLE} | ${documentTitle}` : APP_TITLE}
        </title>
      </Head>
      <Header height={HEADER_HEIGHT} />
      <div className="content-box">{children}</div>
      <style jsx>{`
        .Layout {
          padding-top: ${HEADER_HEIGHT}px;
          > .content-box {
            /* border: 1px solid red; */
            height: calc(100vh - ${HEADER_HEIGHT}px);
            overflow: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
