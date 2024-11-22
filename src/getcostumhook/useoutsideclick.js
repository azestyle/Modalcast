import { useEffect, useRef } from "react";

function useOutsideclick(callback) {
  const ref = useRef();

  useEffect(() => {
    console.log("ise dus");

    document.addEventListener("mousedown", (ev) => {
      if (ref.current && !ref.current.contains(ev.target)) {
        callback();
        
        console.log('serti yoxla');
      }
      console.log("hadise elave et");
    });

  }, [callback]);

  return ref;
}

export default useOutsideclick;
