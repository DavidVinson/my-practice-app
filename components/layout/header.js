import Link from "next/link";

function Header(props) {
  return (
    <>
      <div>
        <Link href="/">MY AWESOME APP</Link>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href="/person">Person Page</Link>
          </li>
          <li>
            {" "}
            <Link href="/safety-docs">Safety Docs Page</Link>
          </li>
          <li>
            {" "}
            <Link href="/training">Training Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
