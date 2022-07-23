import {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({...props}: InputProps) {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          padding: 10px 10px;
          border: 1px solid rgb(182, 182, 182);
          border-radius: 6px;
          transition: 0.3s;
          &:focus {
            border-color: var(--main-color);
            box-shadow: 0 0 0 2px var(--main-color-1);
          }
        }
      `}</style>
    </>
  );
}

export default Input;
