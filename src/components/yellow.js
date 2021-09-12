const { useState } = require("react");

function Yellow() {
  const [pic, setPic] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [titlePic, setTitlePic] = useState(null);
  //const [desc, setDesc] = useState(null);
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
        setPic(
          <img
            src={`https://api.allorigins.win/raw?url=${data[0].url}`}
            crossOrigin="true"
          />
        );
        setCopyright(data[0].copyright);
        setTitlePic(data[0].title);
        //setDesc(data[0].explanation);
        setDate(data[0].date);
        setNasa("NASA");
        setMark("|");
      });
  }
  return (
    <div id="yellow">
      <h2>Space-gazing</h2>
      <button onClick={click}>Click to Open</button>
      <h5>
        {titlePic} {mark} {date} {mark} {copyright} {mark} {nasa}
      </h5>
      {pic}
    </div>
  );
}

module.exports = Yellow;
