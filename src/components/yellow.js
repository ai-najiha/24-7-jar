const { useState } = require("react");

function Yellow() {
  const [pic, setPic] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [titlePic, setTitlePic] = useState(null);
  const [desc, setDesc] = useState(null);
  const [date, setDate] = useState(null);
  const [nasa, setNasa] = useState(null);
  const [mark, setMark] = useState(null);

  function click(event) {
    event.preventDefault();
    let NASA_KEY = process.env.REACT_APP_NASA_API;
    let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=1`;
    fetch(endpoint, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPic(data[0].url);
        setCopyright(data[0].copyright);
        setTitlePic(data[0].title);
        setDesc(data[0].explanation);
        setDate(data[0].date);
        setNasa("NASA");
        setMark("|");
      });
  }
  return (
    <div id="yellow">
      <button onClick={click}>Click Here</button>
      <h3>{titlePic}</h3>
      <p>{desc}</p>
      <h5>
        {date} {mark} {copyright} {mark} {nasa}
      </h5>
    </div>
  );
}

module.exports = Yellow;

//<img src="{pic}"> is not working
