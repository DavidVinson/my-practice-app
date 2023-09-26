import Button from "../ui/button";

function Header(props) {
  return (
    <>
      <div>
        <Button link="/">MY AWESOME APP</Button>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Button link="/person">Person Page</Button>
          </li>
          <li>
            {" "}
            <Button link="/safety-docs">Safety Docs Page</Button>
          </li>
          <li>
            {" "}
            <Button link="/training">Training Page</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
