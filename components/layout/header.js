import Button from "../ui/button";

function Header(props) {
  return (
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <Button link="/">NEXTJS</Button>
        </div>
      </div>

      <div class="navbar-menu p-5">
        <div class="navbar-start">
          <div class="navbar-item">
            <Button link="/">Home</Button>
          </div>

          <div class="navbar-item">
            <Button link="/person">Person</Button>
          </div>
          <div class="navbar-item">
            <Button link="/training">Training</Button>
          </div>
          <div class="navbar-item">
            <Button link="/safety-docs">Safety Documentation</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
