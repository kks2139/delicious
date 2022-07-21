import Editor from 'components/Editor';
import Layout from 'components/Layout';

function Post() {
  return (
    <Layout>
      <div className="Post">
        <h1 className="title">이곳은 글쓰는 페이지</h1>
        <Editor />
        <style jsx>{`
          .Post {
          }
          .title {
            margin: 20px 0 20px 10px;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default Post;
