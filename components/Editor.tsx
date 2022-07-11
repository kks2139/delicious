import dynamic from 'next/dynamic';
import {useLayoutEffect, useRef, useState} from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const MODULES = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{size: ['small', false, 'large', 'huge']}, {color: []}],
      [
        {list: 'ordered'},
        {list: 'bullet'},
        {indent: '-1'},
        {indent: '+1'},
        {align: []},
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
  clipboard: {matchVisual: false},
};

function Editor() {
  const container = useRef<HTMLDivElement>(null);
  const timerId = useRef(0);
  const [editorValue, setEditorValue] = useState('');

  const onChangeEditor = (content: string) => {
    // setEditorValue(content);
  };

  useLayoutEffect(() => {
    timerId.current = window.setInterval(() => {
      console.log(timerId.current);
      const toolbars = container.current?.querySelectorAll(
        '.quill > .ql-toolbar',
      );
      if (toolbars && toolbars?.length > 1) {
        const bar = toolbars[0] as HTMLElement;
        bar.style.display = 'none';
        clearInterval(timerId.current);
      }
    }, 100);
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div ref={container}>
      <ReactQuill
        theme="snow"
        value={editorValue}
        modules={MODULES}
        onChange={onChangeEditor}
      />
    </div>
  );
}

export default Editor;
