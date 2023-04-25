import Link from "next/link";

function Header() {
  return (
    <>
      <div id="header">
        <div className="left-part">
          <span>Alexandre Tison</span>
        </div>
        <div className="right-part">
          <ul className="weight500">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
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
