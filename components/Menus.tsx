import Link from 'next/link';
import React, {useState} from 'react';

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
  const [linkLeft, setLinkLeft] = useState(0);

  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const left = e.currentTarget.offsetLeft;
    setLinkLeft(left);
  };

  return (
    <ul className="Menus">
      {MENUS.map((cate, i) => (
        <li
          key={cate.name + i}
          className="category"
          onMouseEnter={onMouseEnter}
        >
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
            align-items: center;
            flex-wrap: wrap;
            color: black;
            height: 0;
            width: 100%;
            overflow: auto;
            cursor: default;
            background-color: var(--main-color-4);
            box-shadow: inset 0 3px 5px 0 rgb(223, 223, 223);
            transition: 0.2s;

            .link {
              position: relative;
              left: ${linkLeft}px;
              display: flex;
              align-items: center;
              margin: 0 20px;
              height: 100%;
              color: transparent;
              font-weight: normal;
              cursor: pointer;
              transition: color 0.8s;
            }
          }

          .bar {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 4px;
            border-radius: 10px;
            background-color: var(--main-color-1);
            transition: 0.2s;
          }
        }
      `}</style>
    </ul>
  );
}

export default Menus;
