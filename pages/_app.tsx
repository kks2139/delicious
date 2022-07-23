import '../styles/globals.css';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --main-color: rgb(255, 0, 149);
          --main-color-1: rgb(255, 168, 219);
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
        .common-button {
          background-color: rgb(0, 140, 255);
          border-radius: 8px;
          padding: 6px 20px;
          border: 0;
          cursor: pointer;
          color: white;
          font-weight: bold;
          transition: 0.2s;
          &:hover {
            background-color: rgb(44, 160, 255);
          }
          &:active {
            background-color: rgb(0, 118, 214);
          }
        }
      `}</style>
    </>
  );
}

export default MyApp;
