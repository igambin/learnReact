import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { sortQuotes } from "./sortQuotes";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const sortAscending = params.get("sort") === "asc";

  const quotes = sortQuotes(props.quotes, sortAscending);

  const changeSortingHandler = () => {
    history.push({
      pathName: location.path,
      search: `sort=${sortAscending ? "desc" : "asc"}`,
    });
    //history.push(`${match.path}?`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {sortAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            quoteId={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
