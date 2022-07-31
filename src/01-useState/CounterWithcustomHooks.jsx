import React, { Fragment } from "react";
import { useCounter } from "../hook/useCounter";

 const CounterWithcustomHooks = () => {

const { counter, increment, decrement, reset } = useCounter();

  return (
    <Fragment>
      <h1>Counter con Hook: {counter}</h1>
      <hr />
      <button onClick={() => reset()} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement()} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
    </Fragment>
  );
}

export default CounterWithcustomHooks;



