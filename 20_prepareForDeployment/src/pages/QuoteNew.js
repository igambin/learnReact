import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const QuoteNew = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push(`/quotes`);
    }
  }, [status, history]);

  const onAddQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default QuoteNew;
