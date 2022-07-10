import '../styles/globals.css';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
        ul,
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
          font-family: 'Gothic A1', sans-serif;
        }
        .common-img-contain {
          img {
            object-fit: contain;
          }
        }
        .quill {
          .ql-container {
          }
          .ql-editor {
          }
        }
      `}</style>
    </>
  );
}

export default MyApp;
