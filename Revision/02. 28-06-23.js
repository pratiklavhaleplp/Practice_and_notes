let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10, 11, 12];

function mapImp() {
  let mapOutput = arr1.map(ele => ele * 10);
  console.log('map output : ', mapOutput);
}


function forEachImp() {
  arr1.forEach(ele => console.log(ele * 10));
}

function filterImp() {
  let filteredArr = arr1.filter(ele => {
    return (ele === 4 || ele === 2)
  });
  console.log("filtered array is : ", filteredArr);
}

function findImp() {
  let findOutput = arr1.find(ele => ele > 2);
  console.log("find output is : ", findOutput);
}

function sliceImp() {
  let sliceOutput = arr1.slice(2, 4);
  console.log(sliceOutput);
}

function spliceImp() {
  let spliceOutput = arr1.splice(3, 2);
  console.log(spliceOutput);
  console.log("actual array : ", arr1);
}

// mapImp();
// forEachImp();
// filterImp();
// findImp();
// sliceImp();
spliceImp();