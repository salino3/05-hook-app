import { useCallback,useEffect,useState } from "react"
import {ShowIncrement} from './ShowIncrement'


export const CallbackHook = () => {

const [counter, setCounter] = useState(10)

  const increment2 = useCallback(
    (value) => {
    console.log('tocado botón')
    setCounter(counter => counter + value);
  }, []);

//  const increment2 = () => {
//     setCounter(counter + 1)
//  }


useEffect(() => {
 // increment2(5);
}, [increment2]);


  return (
    <>
    <h1>useCallback Hook: {counter}</h1>
    <hr/>

  <ShowIncrement increment={increment2} />

 </>
  )
}

