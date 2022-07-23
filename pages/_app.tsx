import '../styles/globals.css';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --main-color-1: #ffbc00;
          --main-color-2: #ffdb77;
          --main-color-3: #c59100;
          --main-color-4: #ffebb5;
          --gray-1: #999999;
          --gray-2: #cccccc;
          --gray-3: #e9e9e9;
        }
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
        *,
        *:focus,
        *:hover {
          outline: none;
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
