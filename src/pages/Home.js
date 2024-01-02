import React, { useEffect, useRef, useState } from "react";
import Uncontrolled from "../components/uncontrolled inputs/Uncontrolled";
import CustomHooks from "../components/custom hook/CustomHooks";
import Memoization from "../components/memoization/Memoization";
import MemoizeValues from "../components/memoization/MemoizeValues";

const Home = () => {
  return (
    <>
      <Uncontrolled />
      {/* <CustomHooks /> */}
      <Memoization />
      <MemoizeValues />
    </>
  );
};

export default Home;

/**
 *  1. Custom Hook
 *  2. memo, useMemo, useCallback
 *  3. Code splitting
 *  4. React suspence
 *  5. Lazy loading
 *  6. ref, useref, forwardRef
 */
