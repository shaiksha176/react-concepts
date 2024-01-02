import React, { useEffect, useState } from "react";

const TestComponentWithProps = React.memo(({ input }) => {
  // console.log("re-rendering");
  return (
    <div>
      <p>Entered Text : {input}</p>
    </div>
  );
});

const TestComponent = React.memo(() => {
  //   useEffect(() => {
  //     console.log("component mounted");
  //     return () => {
  //       console.log("component unmounted");
  //     };
  //   });

  // console.log("re-rendering");

  return (
    <div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
      <p>Testing Re-rendering </p>
      <strong>check the console log to view the needless re-rendering</strong>
      <br />
      <strong>check the w3schools for React.memo. It has better example</strong>

      {/* <p>Typed Input : {input}</p> */}
    </div>
  );
});

const Memoization = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2 style={{ marginBottom: "10px" }}>Memoization</h2>
      <div className="inner__container">
        <div className="form__container">
          <div>
            <label>Test Re-render without props</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          <div>
            <label>Test Re-render with props</label>
            <button onClick={() => setCount(count + 1)}>+</button> | {count}
          </div>
        </div>
        <TestComponent />
        <TestComponentWithProps input={input} />
      </div>
    </div>
  );
};

export default Memoization;
