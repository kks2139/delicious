import {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({...props}: InputProps) {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          padding: 10px 10px;
          border: 1px solid var(--gray-1);
          border-radius: 6px;
          transition: 0.3s;
          &:focus {
            border-color: var(--main-color-1);
            box-shadow: 0 0 0 3px var(--main-color-2);
          }
        }
      `}</style>
    </>
  );
}

export default Input;
