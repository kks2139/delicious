interface CheckBoxProps {
  className?: string;
  label?: string;
}

function CheckBox({className, label = ''}: CheckBoxProps) {
  // TODO: react-hook-form - Controller 사용해서 체크박스 구현하기

  const onClick = () => {};

  return (
    <div className={`CheckBox ${className}`} onClick={onClick}>
      <div className="box"></div>
      <span className="label no-drag">{label}</span>
      <style jsx>{`
        .CheckBox {
          display: flex;
          align-items: center;
        }
        .box {
          background-color: white;
          width: 23px;
          height: 23px;
          border: 1px solid var(--gray-1);
          border-radius: 5px;
          margin-right: 10px;
        }
        .label {
          font-size: 16px;
          color: var(--gray-1);
        }
      `}</style>
    </div>
  );
}

export default CheckBox;
