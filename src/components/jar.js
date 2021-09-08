const { Link } = require("react-router-dom");

function Jar() {
  return (
    <div id="jar">
      <h1>The Jar</h1>
      <div id="notesinthejar">
        <hr />
        <Link id="linkmagenta" to="/magenta">
          Words of Wisdom{" "}
        </Link>{" "}
        <br></br>
        <Link id="linkpink" to="/pink">
          {" "}
          TV Show{" "}
        </Link>{" "}
        <br></br>
        <Link id="linkred" to="/red">
          {" "}
          Movie{" "}
        </Link>{" "}
        <br></br>
        <Link id="linkorange" to="/orange">
          {" "}
          Happiness Vibes{" "}
        </Link>{" "}
        <br></br>
        <Link id="linkyellow" to="/yellow">
          {" "}
          Space-gazing{" "}
        </Link>
        <hr />
      </div>
    </div>
  );
}

module.exports = Jar;
