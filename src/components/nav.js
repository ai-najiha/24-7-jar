const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header>
      <h1 id="title">{title}</h1>
      <nav>
        <Link to="/">Jar </Link> ||
        <Link to="/howto"> How to Play </Link> ||
        <Link to="/credit"> Credit </Link>
      </nav>
    </header>
  );
}

module.exports = Nav;
