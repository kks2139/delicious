import Link from 'next/link';

const MENUS = [
  {
    name: '커뮤니티',
    menus: [
      {path: '/', name: '모아보기'},
      {path: '/', name: '둘러보기'},
      {path: '/', name: '우리끼리'},
    ],
  },
  {
    name: '스토어',
    menus: [{path: '/', name: '스토어'}],
  },
];

interface MenusProps {
  height?: number;
}

function Menus({height = 60}: MenusProps) {
  return (
    <ul className="Menus">
      {MENUS.map((cate, i) => (
        <li key={cate.name + i} className="category">
          <div className="cate">{cate.name}</div>
          <ul className="link-box">
            {cate.menus &&
              cate.menus.map((menu, k) => (
                <li key={menu.path + k} className="link">
                  <Link href={menu.path}>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="bar"></div>
        </li>
      ))}
      <style jsx>{`
        .Menus {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .category {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 20px;
          font-weight: bold;
          cursor: pointer;
          &:hover {
            .link-box {
              height: ${height}px;
              .link {
                color: black;
              }
            }
            .bar {
              width: 100%;
            }
          }
          .link-box {
            position: fixed;
            left: 0;
            top: ${height}px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            color: black;
            height: 0px;
            width: 100%;
            overflow: auto;
            cursor: default;
            background-color: rgb(255, 243, 188);
            box-shadow: inset 0 3px 5px 0 rgb(223, 223, 223);
            transition: 0.2s;

            .link {
              display: flex;
              align-items: center;
              margin: 0 20px;
              height: 100%;
              color: transparent;
              font-weight: normal;
              cursor: pointer;
              transition: 0.5s;
            }
          }

          .bar {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 4px;
            border-radius: 10px;
            background-color: rgb(255, 187, 0);
            transition: 0.2s;
          }
        }
      `}</style>
    </ul>
  );
}

export default Menus;
