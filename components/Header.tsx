function Header() {
  return (
    <header className="Header">
      <h1 className="title">쿠킹</h1>
      <style jsx>{`
        .Header {
          display: flex;
          align-items: center;
          height: 50px;
          padding: 0 20px;
          box-shadow: 0 0 10px 0 gray;
        }

        .title {
          font-size: 26px;
        }
      `}</style>
    </header>
  );
}

export default Header;
