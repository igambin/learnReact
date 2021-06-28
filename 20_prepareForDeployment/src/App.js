import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import QuoteDetail from "./pages/QuoteDetail";
import QuoteNew from "./pages/QuoteNew";
import QuoteIndex from "./pages/QuoteIndex";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
