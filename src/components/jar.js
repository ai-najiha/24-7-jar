const { Link } = require("react-router-dom");

function Jar({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/jar/magenta">#1 </Link> ||
        <Link to="/jar/pink"> #2 </Link> ||
        <Link to="/jar/red"> #3 </Link> ||
        <Link to="/jar/orange"> #4 </Link> ||
        <Link to="/jar/yellow"> #5 </Link>
      </nav>
    </header>
  );
}

module.exports = Jar;
