const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const Jar = require("./jar");
const HowToPlay = require("./howto");
const Credit = require("./credit");

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
