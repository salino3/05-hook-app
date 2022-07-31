import PropTypes from "prop-types";
import { useLayoutEffect,  useRef, useState } from "react";


export const QuoteOtravez = ({authorx, quotex}) => {

const pRef = useRef()
const [boxSize, setBoxSize] = useState({width: 0, height: 0})
// posible tambien con useEffect()
   useLayoutEffect(() => {
   console.log(pRef.current.getBoundingClientRect())
   const { height, width } = pRef.current.getBoundingClientRect();
   setBoxSize({height, width})
    
   }, [])


   return (
     <>
       <blockquote className="blockquote text-end" style={{ display: "flex" }}>
         <p ref={pRef} className="mb-1">
           {quotex}
         </p>
         <footer className="blackquote-footer">- {authorx}</footer>
       </blockquote>
       <code>{JSON.stringify(boxSize)}</code>
     </>
   );
}


QuoteOtravez.propTypes = {
  quotex: PropTypes.string,
  authorx: PropTypes.string,
};


