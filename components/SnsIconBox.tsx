import Image from 'next/image';
import {LOGIN_FORM_WIDTH} from 'pages/login';
import {HTMLAttributes} from 'react';

const SNS = [
  {
    name: 'facebook',
    icon: '',
  },
  {
    name: 'kakao',
    icon: '',
  },
  {
    name: 'naver',
    icon: '',
  },
];

interface SnsIconBoxProps {
  className?: string;
}

function SnsIconBox({className}: SnsIconBoxProps) {
  const onClickSnsJoin = (name: string) => {
    // TODO: SNS 회원가입
    alert(name);
  };

  return (
    <section className={`SnsIconBox ${className}`}>
      <h4 className="desc">SNS 계정으로 간편하게 회원가입</h4>
      <ul className="icon-box">
        {SNS.map((sns, i) => (
          <li
            key={sns.name + i}
            className="icon"
            onClick={() => onClickSnsJoin(sns.name)}
          >
            <Image src="/img/sample_empty.png" width={60} height={60} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .SnsIconBox {
          width: ${LOGIN_FORM_WIDTH}px;
          .desc {
            text-align: center;
            color: var(--gray-1);
            font-size: 15px;
          }
        }
        .icon-box {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          .icon {
            margin: 0 15px;
            cursor: pointer;
          }
        }
        .bottom-text {
          margin-top: 70px;
          font-size: 12px;
          color: var(--gray-1);
        }
      `}</style>
    </section>
  );
}

export default SnsIconBox;
