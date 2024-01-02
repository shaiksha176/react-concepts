import React, { useEffect, useRef, useState } from "react";

const Uncontrolled = () => {
  const [controlledInput, setControlledInput] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    // console.log("home component mounted");
    // return () => {
    //   console.log("home component unmounted");
    // };
  }, []);

  const handleUncontrolledInput = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    setTimeout(() => {
      inputRef.current.style.backgroundColor = "";
    }, 500);
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "10px" }}>Controlled vs. Uncontrolled</h2>
      <div className="form__container inner__container">
        <div>
          <label>Controlled Input</label>{" "}
          <input
            value={controlledInput}
            onChange={(e) => setControlledInput(e.target.value)}
          />
        </div>
        <div>
          <label>Uncontrolled Input</label>
          <input ref={inputRef} />
          <button onClick={handleUncontrolledInput}>
            Log Uncontrolled Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uncontrolled;

/**
 *  1. Custom Hook
 *  2. memo, useMemo, useCallback
 *  3. Code splitting
 *  4. React suspence
 *  5. Lazy loading
 *  6. ref, useref, forwardRef
 */
