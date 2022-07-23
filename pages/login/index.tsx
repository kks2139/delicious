import Button from 'components/Button';
import Input from 'components/Input';
import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import {useForm} from 'react-hook-form';

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

const FORM_WIDTH = 300;

function Login() {
  const {register, handleSubmit} = useForm();

  const onSubmit = () => {
    // TODO: validation 체크 + 로그인 수행
    alert('로그인');
  };

  const onClickSnsJoin = (name: string) => {
    // TODO: SNS 회원가입
    alert(name);
  };

  return (
    <Layout documentTitle="로그인">
      <div className="Login">
        <h1 className="title">로그인</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="space"
            {...(register('email'), {placeholder: '이메일'})}
          />
          <Input {...(register('password'), {placeholder: '비밀번호'})} />
          <Button className="btn-login">로그인</Button>
        </form>
        <div className="line"></div>
        <div className="bottom">
          <Link href="pw-reset">
            <a>비밀번호 재설정</a>
          </Link>
          <Link href="join">
            <a>회원가입</a>
          </Link>
        </div>
        <div className="sns-box">
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
        </div>
        <div className="line long"></div>
        <span className="bottom-text">
          © HamPotato, Co., Ltd.. All Rights Reserved
        </span>
        <style jsx>{`
          .Login {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .title {
            margin-bottom: 30px;
            transform: translateY(-50px);
            font-weight: normal;
          }
          .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: ${FORM_WIDTH}px;
            > :global(input) {
              margin: 0 0 15px 0;
            }
            > :global(.btn-login) {
              padding: 10px;
              margin-top: 15px;
              font-size: 18px;
            }
          }
          .line {
            height: 1px;
            background-color: var(--gray-2);
            width: 120px;
            margin: 30px 0 10px 0;
            &.long {
              width: ${FORM_WIDTH + 200}px;
              background-color: var(--gray-3);
            }
          }
          .bottom {
            font-size: 14px;
            a {
              color: var(--gray-1);
              &:not(:last-child)::after {
                content: '|';
                margin: 0 14px;
                color: var(--gray-2);
                font-size: 14px;
              }
            }
          }
          .sns-box {
            width: ${FORM_WIDTH}px;
            margin: 60px 0 10px 0;
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
      </div>
    </Layout>
  );
}

export default Login;
