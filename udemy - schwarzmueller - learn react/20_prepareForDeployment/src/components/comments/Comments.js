import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../../lib/api";

import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [isAddingComment, quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {
    setIsAddingComment(false);
  };

  let comments = "";

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    if (loadedComments && loadedComments.length > 0) {
      comments = <CommentsList comments={loadedComments} />;
    } else {
      comments = <p className="centered">No Comments entered yet.</p>;
    }
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
