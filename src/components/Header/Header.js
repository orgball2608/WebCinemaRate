import "./Header.css";
function Header() {
  return (
    <span className="header" onClick={() => window.scroll(0, 0)}>
      Cinema Rate
    </span>
  );
}

export default Header;
