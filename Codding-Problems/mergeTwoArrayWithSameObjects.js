
const arr1 = [
    { name: 'Joe Brown', goals: 0, assists: 0, points: 0 },
    { name: 'Jim Bob', goals: 2, assists: 1, points: 3 },
    { name: 'Harry Styles', goals: 1, assists: 1, points: 2 },
    { name: 'Craig Mack', goals: 5, assists: 7, points: 12 },
    { name: 'DOG', bones: 100000 },
];
const arr2 = [
    { name: 'Craig Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0, },
    { name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
    { name: 'Joe Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
    { name: 'Harry Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
    { name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 }
];

function mergeObj(...param) {
    let flatternArr = param.flat();
    for (let i = 0; i < flatternArr.length; i++) {
        for (let j = i + 1; j < flatternArr.length; j++) {
            if (flatternArr[i].name === flatternArr[j].name) {
                for (ele in flatternArr[i]) {
                    if (flatternArr[j].hasOwnProperty(ele) && ele !== 'name') {
                        flatternArr[i][ele] = flatternArr[i][ele] + flatternArr[j][ele];
                        console.log(flatternArr[i].name, ele, flatternArr[i][ele]);
                    }
                }
                flatternArr[i] = {
                    ...flatternArr[j],
                    ...flatternArr[i]
                };
                flatternArr.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log('output array is : ', flatternArr);
}

[
    {
        "name": "Joe Brown",
        "goals": 0,
        "assists": 0,
        "points": 0,
        "ppg": 0,
        "ppa": 0,
        "pims": 0,
        "test": "pratik"
    },
    {
        "name": "Jim Bob",
        "goals": 5,
        "assists": 13,
        "points": 18,
        "ppg": 0,
        "ppa": 3,
        "pims": 0
    },
    {
        "name": "Harry Styles",
        "goals": 1,
        "assists": 1,
        "points": 2,
        "ppg": 0,
        "ppa": 0,
        "pims": 0
    },
    {
        "name": "Craig Mack",
        "goals": 8,
        "assists": 10,
        "points": 18,
        "ppg": 0,
        "ppa": 0,
        "pims": 0
    },
    {
        "name": "DOG",
        "bones": 100000
    }
]