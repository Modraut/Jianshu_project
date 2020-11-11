import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store/index.js";
import { GlobalStyle } from "./style.js";
import { IconStyle } from "./common/statics/iconfont/iconfont.js";

import Header from "./Header/index.js";
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login/index.js";
import essayWriting from "./pages/essayWriting/index.js";

const App = (
  <Provider store={store}>
    <div>
      <GlobalStyle />
      <IconStyle />
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/essaywriting" exact component={essayWriting} />
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
