import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(-1, 500);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
