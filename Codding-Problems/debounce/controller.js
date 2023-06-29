let timerIDArr = [];
function debounceImplementation() {
  let name = document.getElementById("name");
  let obj = {
    tId: '',
    currentTime: Date.now()
  }
  obj.tId = setTimeout(() => callThisAfterOnceSec(name), 1000);
  timerIDArr.push(obj);
  if ((timerIDArr[1]) && (timerIDArr[1].currentTime - timerIDArr[0].currentTime) < 1000) {
    clearTimeout(timerIDArr[0].tId);
    timerIDArr.splice(0, 1);
  }
}

function callThisAfterOnceSec(name) {
  console.log(name.value);
  timerIDArr = [];
}
