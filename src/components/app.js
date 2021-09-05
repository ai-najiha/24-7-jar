const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const Jar = require("./jar");
const HowToPlay = require("./howto");
const Credit = require("./credit");
const Magenta = require("./magenta");
const Orange = require("./orange");
const Yellow = require("./yellow");
const Pink = require("./pink");
const Red = require("./red");

function App() {
  let pageTitle = "The 24/7 Jar";
  return (
    <main>
      <BrowserRouter>
        <Nav title={pageTitle} />
        <Switch>
          <Route exact={true} path="/">
            <Jar />
          </Route>
          <Route path="/magenta">
            <Magenta />
          </Route>
          <Route path="/pink">
            <Pink />
          </Route>
          <Route path="/red">
            <Red />
          </Route>
          <Route path="/orange">
            <Orange />
          </Route>
          <Route path="/yellow">
            <Yellow />
          </Route>
          <Route path="/howto">
            <HowToPlay />
          </Route>
          <Route path="/credit">
            <Credit />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

module.exports = App;
