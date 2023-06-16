import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import QuoteIndex from "./pages/QuoteIndex";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const QuoteNew = React.lazy(() => import("./pages/QuoteNew"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <QuoteIndex />
          </Route>
          <Route path="/quotes/new" exact>
            <QuoteNew />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
