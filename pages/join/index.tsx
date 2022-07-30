import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Layout from 'components/Layout';
import SnsIconBox from 'components/SnsIconBox';
import {LOGIN_FORM_WIDTH} from 'pages/login';
import {useForm} from 'react-hook-form';

function Join() {
  const {register, handleSubmit} = useForm();

  const onSubmit = () => {};

  const onClickVerifyEmail = () => {};

  return (
    <Layout documentTitle="회원가입">
      <div className="Join">
        <h1 className="title">회원가입</h1>
        <SnsIconBox className="sns-box" />
        <div className="line"></div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="label">이메일</div>
          <div className="email-box">
            <Input {...(register('email_1'), {placeholder: '이메일'})} />
            <span>@</span>
            <Input {...(register('email_2'), {placeholder: '선택해주세요.'})} />
          </div>
          <Button className="btn-full" onClick={onClickVerifyEmail}>
            이메일 인증하기
          </Button>
          <div className="label">비밀번호</div>
          <div className="txt-small">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </div>
          <Input {...(register('pw'), {placeholder: '비밀번호'})} />
          <div className="label">비밀번호 확인</div>
          <Input
            {...(register('pw-confirm'), {placeholder: '비밀번호 확인'})}
          />
          <div className="label">닉네임</div>
          <div className="txt-small">
            다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
          </div>
          <Input {...(register('nickname'), {placeholder: '별명 (2~15자)'})} />
          <div className="label">약관동의</div>
          <div className="term-box">
            <CheckBox label="전체동의" />
          </div>
        </form>
        <style jsx>{`
          .Join {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            > :global(.sns-box) {
              margin: 30px 0 0 0;
            }
          }
          .title {
            font-size: 32px;
            font-weight: normal;
            margin-bottom: 20px;
          }
          .line {
            width: 400px;
            height: 1px;
            background-color: var(--gray-3);
            margin: 40px 0 10px 0;
          }
          .label {
            font-weight: bold;
            font-size: 20px;
            color: var(--gray-1);
            margin: 20px 0 5px 0;
          }
          .txt-small {
            color: var(--gray-1);
            font-size: 11px;
            margin-bottom: 10px;
          }
          .form {
            border: 1px solid red;
            width: ${LOGIN_FORM_WIDTH}px;
            > :global(input) {
              width: 100%;
            }
            .email-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 11px;
              > span {
                color: var(--gray-2);
                font-size: 22px;
              }
              > :global(input:first-of-type) {
                width: 110px;
              }
              > :global(input:last-of-type) {
                width: 150px;
              }
            }
            > :global(.btn-full) {
              width: 100%;
              height: 40px;
            }
          }
          .term-box {
            width: 100%;
            border: 1px solid var(--gray-2);
            padding: 8px;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default Join;
