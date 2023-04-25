function Header() {
  return (
    <>
      <div id="header">
        <div className="left-part">
          <span>Alexandre Tison</span>
        </div>
        <div className="right-part">
          <ul className="weight500">
            <a href="index.html">
              <li className="currentSelected">Home</li>
            </a>
            <a href="src/about.html">
              <li>About</li>
            </a>
            <a href="src/projects.html">
              <li>Projects</li>
            </a>
            <a href="mailto:alextison@icloud.com?subject=Mail from alextison Website">
              <li>Contact</li>
            </a>
          </ul>
          <table></table>
        </div>
      </div>
    </>
  );
}

export default Header;
