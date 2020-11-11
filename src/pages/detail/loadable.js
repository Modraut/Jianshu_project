import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"), //import index.js
  loading() {
    return <div>Now loading</div>;
  }
});

export default () => <LoadableComponent />;
