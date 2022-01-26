import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopLoader } from "../shared/loader";
import { DASHBOARD, LOGIN, NOT_FOUND } from "./constants";

const Login = React.lazy(() => import("../pages/authentication"));
const Layout = React.lazy(() => import("../shared/layout"));
const HandleNotFound = React.lazy(() => import("../pages/404"));

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={TopLoader()}>
          <Switch>
            <Route component={Login} path={LOGIN} exact />
            {/* handle 404s */}
            <Route exact={true} component={HandleNotFound} path={NOT_FOUND} />
            <Route component={Layout} path={DASHBOARD} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RouterConfig;
