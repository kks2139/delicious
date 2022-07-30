import Button from 'components/Button';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

interface ErrorProps {
  errorMsg: string;
  statusCode: number;
}

function Error({errorMsg, statusCode}: ErrorProps) {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <div className="Error">
      <h1 className="title">{errorMsg}</h1>
      <Button className="back" onClick={onClickBack}>
        뒤로가기
      </Button>
      <style jsx>{`
        .Error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: rgb(58, 58, 58);
          color: white;
          > :global(.back) {
            width: 300px;
            height: 40px;
            font-size: 17px;
          }
        }
        .title {
          font-size: 24px;
          transform: translateY(-100px);
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let errorMsg = '알 수 없는 에러가 발생했습니다.';
  const {statusCode} = ctx.res;

  switch (statusCode) {
    case 404:
      errorMsg = '찾을 수 없는 페이지에요...';
      break;
    case 500:
      errorMsg = `일시적인 오류가 발생했습니다.${'\n'}잠시 후 다시 시도해 주세요.`;
      break;
  }

  return {
    props: {
      errorMsg,
      statusCode,
    },
  };
};

export default Error;
