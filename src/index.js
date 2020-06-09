import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import Links from "./components/links/Links";
import Cebola from "./components/links/Cebola";
import Global from "components/global/Global";
import Weather from "components/global/Weather";
import Youtube from "components/global/Youtube";
import News from "components/global/News";
import Songs from "components/songs/Songs";
import Streams from "components/streams/Streams";
import Hermicraft from "components/streams/Hermicraft";
import StreamsGirls from "components/streams/StreamsGirls";
import Tft from "components/games/Tft";
import Search from "components/search/Search"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={props => <Signup {...props} />} />
        <Route path="/feature" component={props => <Feature {...props} />} />
        <Route path="/signout" component={props => <Signout {...props} />} />
        <Route path="/signin" component={props => <Signin {...props} />} />
        <Route path="/links" component={props => <Links {...props} />} />
        <Route path="/global" component={props => <Global {...props} />} />
        <Route
          path="/global/weather/:lat/:long"
          exact
          component={props => <Weather {...props} />}
        />
        <Route
          path="/global/youtube/:rc"
          exact
          component={props => <Youtube {...props} />}
        />
        <Route
          path="/global/news/:rc"
          exact
          component={props => <News {...props} />}
        />
        <Route path="/songs" component={props => <Songs {...props} />} />
        <Route path="/search" component={props => <Search {...props} />} />
        <Route path="/streams" component={props => <Streams {...props} />} />
        <Route path="/slrig" component={props => <StreamsGirls {...props} />} />
        <Route path="/cebola" component={props => <Cebola {...props} />} />
        <Route path="/tft" component={props => <Tft {...props} />} />
        <Route
          path="/hermicraft"
          component={props => <Hermicraft {...props} />}
        />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
