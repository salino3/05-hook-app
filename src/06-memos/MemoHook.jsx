import { useMemo, useState } from "react";
import { useCounter } from "../hook";


const heavyStuff = (iterationNumber = 100) => {
  for( let  i = 0; i < iterationNumber; i++) {
    console.log('vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {

   const { counter, increment } = useCounter(4000);

 const [show, setShow] = useState(true);
 //se memoriza el valor de esa función, lo reprocesa si las dependencias cambian[]
  const messageValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{messageValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}

