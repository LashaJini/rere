import React from "react";

/**
 * @author 109149
 * @time Fri 02 Apr 2021 14:35:48 +04
 *
 * Hook for handling event listener on element.
 * Add event listener on user input element. Listen for changes. Clean up.
 *
 * @usage
 * useEventListener("mousemove", (event) => console.log(event.pageX));
 *
 * @param {string} eventName is the event to listen to.
 * @param {function(event): void} eventHandler is function to dispatch when even occurs.
 * @param {EventTarget} element is the target element to add event on.
 * @param {Array} deps is the dependency array.
 */
const useEventListener = (
  eventName,
  eventHandler,
  element = window,
  deps = []
) => {
  const handlerRef = React.useRef();

  React.useEffect(() => {
    handlerRef.current = eventHandler;
  }, [eventHandler]);

  React.useEffect(() => {
    const valid = element && element.addEventListener;
    if (!valid) return;

    const _eventHandler = (event) => handlerRef.current(event);

    element.addEventListener(eventName, _eventHandler);

    return () => element.removeEventListener(eventName, _eventHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, element, ...deps]);
};

export default useEventListener;
