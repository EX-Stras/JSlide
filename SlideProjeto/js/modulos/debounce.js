export default function Debounce(callback1, delay1) {
  let timer;
  return (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      callback1(...args);
      timer = null;
    }, delay1);
  };
}
