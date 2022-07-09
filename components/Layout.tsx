import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className="Layout">
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
