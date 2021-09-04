const { useState } = require("react");

function Magenta() {
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);
  const [dash, setDash] = useState(null);

  function click(event) {
    event.preventDefault();
    let endpoint = "https://api.quotable.io/random?tags=famous-quotes";
    fetch(endpoint, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data.content);
        setAuthor(data.author);
        setDash("-");
      });
  }
  return (
    <div id="magenta">
      <button onClick={click}>Click Here</button>
      <p>{data}</p>
      <p>
        {dash} {author}
      </p>
    </div>
  );
}

module.exports = Magenta;
