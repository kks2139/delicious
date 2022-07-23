import Input from 'components/Input';
import Layout from 'components/Layout';
import Link from 'next/link';
import {useForm} from 'react-hook-form';

function Login() {
  const {register, handleSubmit} = useForm();

  const onSubmit = () => {};

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
          <button className="btn-login">로그인</button>
        </form>
        <div className="line"></div>
        <div className="find-box">
          <Link href="pw-reset">
            <a>비밀번호 재설정</a>
          </Link>
          <Link href="join">
            <a>회원가입</a>
          </Link>
        </div>
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
          }
          .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
            > :global(input) {
              margin: 0 0 15px 0;
            }
          }
          .btn-login {
            text-align: center;
            background-color: black;
            color: white;
            padding: 15px;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 20px;
            transition: 0.2s;
            &:hover {
              background-color: rgb(53, 53, 53);
            }
          }
          .line {
            height: 1px;
            width: 100%;
            margin: 30px 0 10px 0;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default Login;
