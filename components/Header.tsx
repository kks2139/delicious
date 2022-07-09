import Link from 'next/link';

const MENUS = [
  {path: '/', name: '메뉴1'},
  {path: '/', name: '메뉴2'},
  {path: '/', name: '메뉴3'},
];

interface HeaderProps {
  height?: number;
}

function Header({height}: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="title">쿠킹 이즈 마이 라이프~</h1>
      <ul className="menu-box">
        {MENUS.map((menu, i) => (
          <li key={menu.path + i} className="link">
            <Link href={menu.path}>
              <>
                <a>{menu.name}</a>
                <div className="bar"></div>
              </>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .Header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${height}px;
          padding: 0 20px;
          box-shadow: 0 0 30px 0 rgb(207, 207, 207);
        }
        .title {
          font-size: 21px;
          color: rgb(255, 129, 129);
        }
        .menu-box {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          margin: 0 5px;
          padding: 0 10px;
          font-weight: bold;
          cursor: pointer;
          &:hover {
            .bar {
              width: 100%;
            }
          }
          .bar {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 4px;
            border-radius: 10px;
            background-color: red;
            transition: 0.2s;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
