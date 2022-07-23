import {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
}

function Button({children, ...props}: ButtonProps) {
  return (
    <>
      <button {...props}>{children}</button>
      <style jsx>{`
        button {
          background-color: var(--main-color-1);
          border: 1px solid var(--main-color-1);
          border-radius: 8px;
          padding: 6px 20px;
          cursor: pointer;
          color: white;
          font-weight: bold;
          transition: 0.2s;
          &:hover {
            background-color: white;
            color: var(--main-color-1);
            border-color: var(--main-color1);
          }
          &:active {
            background-color: var(--main-color-4);
          }
        }
      `}</style>
    </>
  );
}

export default Button;
