const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header>
      <h1 id="title">{title}</h1>

      <nav>
        {" "}
        <hr />{" "}
        <Link id="nav" to="/">
          {" "}
          Jar{" "}
        </Link>{" "}
        ||
        <Link id="nav" to="/howto">
          {" "}
          How to Play{" "}
        </Link>{" "}
        ||
        <Link id="nav" to="/credit">
          {" "}
          Credit{" "}
        </Link>{" "}
        <hr />
      </nav>
    </header>
  );
}

module.exports = Nav;
