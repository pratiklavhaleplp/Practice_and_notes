let timerArray = [];
function afterDebounce(fun) {
  fun();
  timerArray = [];
}
const defaultFunc = () => {
  console.log('default function..');
}
const defaultTimer = 1000;
function debounce(fun = defaultFunc, timer = defaultTimer) {
  let obj = {
    timerId: '',
    currentTime: Date.now()
  }
  obj.timerId = setTimeout(() => afterDebounce(fun), timer);
  timerArray.push(obj);
  if ((timerArray[1]) && (timerArray[1].currentTime - timerArray[0].currentTime) < timer) {
    clearTimeout(timerArray[0].tId);
    timerArray.splice(0, 1);
  }
}

export default debounce;


