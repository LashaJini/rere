import React from "react";

const StopWatch = () => {
  const timer = React.useRef(0);
  const [count, setCount] = React.useState(0);

  const start = () => {
    if (timer.current) return;

    timer.current = setInterval(() => setCount((prev) => prev + 1), 1000);
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = 0;
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  React.useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default StopWatch;
