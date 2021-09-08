const { useState } = require("react");

function Pink() {
  let randomArr = Math.floor(Math.random() * 19);
  const [data, setData] = useState(null);
  const [poster, setPoster] = useState(null);
  const [desc, setDesc] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);
  //const [img, setImg] = useState(null);

  function click(event) {
    event.preventDefault();
    let randomTag = Math.floor(Math.random() * 34) + 1;
    let url = `https://api.themoviedb.org/3/tv/popular?api_key=`;
    let api_key = process.env.REACT_APP_TVMOVIE_API;
    let query = `&page=${randomTag}`;

    let endpoint = url + api_key + query;
    fetch(endpoint, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data.results[randomArr].name);
        setPoster(data.results[randomArr].poster_path);
        setDesc(data.results[randomArr].overview);
        setPosterUrl("https://www.themoviedb.org/t/p/w300_and_h450_bestv2");
        //setImg();
        //setPosterUrl(<img src={`${poster}`} crossOrigin="true" />);
      });
  }
  return (
    <div id="pink">
      <h2>TV Show</h2>
      <button onClick={click}>Click to Open</button>
      <br />
      <br />
      <img src={`${posterUrl}${poster}`} crossOrigin="true" />
      <h3>{data}</h3>
      <p>{desc}</p>
    </div>
  );
}

module.exports = Pink;
//
