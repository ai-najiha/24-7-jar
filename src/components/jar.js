const { Link } = require("react-router-dom");

function Jar() {
  return (
    <div id="jar">
      <h1>The Jar</h1>
      <div id="notesinthejar">
        <hr />
        <Link to="/magenta">Word of Wisdom </Link> <br></br>
        <Link to="/pink"> TV Show </Link> <br></br>
        <Link to="/red"> Movie </Link> <br></br>
        <Link to="/orange"> Happy Vibes </Link> <br></br>
        <Link to="/yellow"> Space-gazing </Link>
        <hr />
      </div>
    </div>
  );
}

module.exports = Jar;
