import Link from 'next/link';
import {useRouter} from 'next/router';
import Menus from './Menus';

interface HeaderProps {
  height?: number;
}

function Header({height = 60}: HeaderProps) {
  const {pathname} = useRouter();
  const isPost = pathname.includes('/post');

  return (
    <header className="Header">
      <Link href="/">
        <a>
          <h1 className="title">Cookking</h1>
        </a>
      </Link>
      <div className="section">
        <Menus height={height} />
        <div className="info-box">
          <div className="user-box">
            <Link href="/login">
              <a className="link">로그인</a>
            </Link>
            <Link href="/join">
              <a className="link">회원가입</a>
            </Link>
          </div>
          {!isPost && (
            <Link href="/post">
              <a>
                <button className="common-button post">글쓰기</button>
              </a>
            </Link>
          )}
        </div>
      </div>
      <style jsx>{`
        .Header {
          z-index: 5;
          position: fixed;
          top: 0;
          display: flex;
          align-items: center;
          width: 100%;
          height: ${height}px;
          padding: 0 20px;
          box-shadow: 0 0 30px 0 rgb(207, 207, 207);
        }
        .section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .title {
          font-size: 21px;
          color: var(--main-color);
          margin-right: 30px;
        }
        .info-box {
          display: flex;
        }
        .user-box {
          display: flex;
          align-items: center;
          .link {
            margin: 0 8px;
            cursor: pointer;
          }
        }
        .post {
          margin-left: 20px;
        }
      `}</style>
    </header>
  );
}

export default Header;
