const { Link } = require("react-router-dom");

function Jar() {
  return (
    <div id="jar">
      <h1>The Jar</h1>
      <div id="notesinthejar">
        <Link to="/magenta">Word of Wisdom </Link> ||
        <Link to="/orange"> Happy Vibes </Link> ||
        <Link to="/yellow"> Space-gazing </Link>
      </div>
    </div>
  );
}

module.exports = Jar;
