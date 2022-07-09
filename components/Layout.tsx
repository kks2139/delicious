import Head from 'next/head';
import Header from './Header';

const appTitle = '쿠킹';

interface LayoutProps {
  children: React.ReactNode;
  documentTitle?: string;
}

function Layout({children, documentTitle = ''}: LayoutProps) {
  return (
    <div className="Layout">
      <Head>
        <title>
          {documentTitle ? `${appTitle} | ${documentTitle}` : appTitle}
        </title>
      </Head>
      <Header />
      <div className="content-box">{children}</div>
      <style jsx>{`
        .Layout {
        }
      `}</style>
    </div>
  );
}

export default Layout;
