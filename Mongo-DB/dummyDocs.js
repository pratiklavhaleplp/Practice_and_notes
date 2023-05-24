[
    {
        userName: "pratik",
        age: 27,
        address: "Gadge Nagar",
        deleteMany: "true"
    },
    {
        userName: "ankita",
        age: 29,
        address: "Gadge Nagar",
        deleteMany: "true",
        baking: {
            balance: 50000,
            bankAddr: 'Gadge Nagar'
        }
    },
    {
        userName: "rutvik",
        age: 23,
        address: "Gadge Nagar",
        deleteMany: "true"
    }
]

db.userInfo.updateOne({ age: 23 }, { $set: { current: "writing pappers" } });

[
    {
        userName: "pratik",
        age: 27,
        address: "Gadge Nagar",
        deleteMany: "true"
    },
    {
        userName: "ankita",
        age: 29,
        address: "Gadge Nagar",
        deleteMany: "true"
    },
    {
        userName: "rutvik",
        age: 23,
        address: "Gadge Nagar",
        deleteMany: "true",
        current: "writing pappers"
    }
]


db.first.updateOne({ userName: 'ankita' }, {
    $set: {
        userName: "ankita",
        age: 29,
        address: "Gadge Nagar",
        deleteMany: "true",
        baking: {
            balance: 50000,
            bankAddr: 'Gadge Nagar'
        }
    }
});



[
    {
        userName: 'pratik',
        age: 27,
        departmentID: 'cse'
    },
    {
        userName: 'sanket',
        age: 27,
        departmentID: 'mech'
    },
    {
        userName: 'vipin',
        age: 24,
        departmentID: 'inst'
    }
]
[
    {
        departmentID: 'cse',
        fullName: 'computer science and engineering'
    },
    {
        departmentID: 'mech',
        fullName: 'mechanical engineering'
    },
    {
        departmentID: 'inst',
        fullName: 'instrumentation engineering'
    }
]


db.departments.findOne({
    departmentID: db.students.findOne(
        {
            userName: 'pratik'
        }
    ).departmentID
})

let func = ()=>{
    if(1){
        console.log('hello world');
        return {...departmentDetails, ...studentDetails};
    }else{
        return{}
    }
}

[
    {
        userName: 'pratik lavhale',
        address: 'gadge Nagar',
        bikes: [
            {
                twoWheeler: ['unicorn', 'bullet'],
                fourWheeler: ['baleno']
            }
        ]
    },
    {
        userName: 'prabhudas lavhale',
        address: 'gadge Nagar',
        bikes: [
            {
                twoWheeler: ['unicorn', 'bullet', 'activa'],
                fourWheeler: ['baleno']
            }
        ]
    }
]



db.ordIssue.insertMany(
    [
        {
            _id: 'z',
            name: 'pratik'
        },
        {
            _id: 'a',
            name: 'rutvik'
        },
        {
            _id: 'b',
            name: 'baba'
        }
    ]
);

db.embeddedArrEleMatch.insertMany([
    {
        userName: "pratik",
        hobbies: [
            {
                name: 'workout',
                freq: 6
            },
            {
                name: 'sports',
                freq: 4
            }
        ]
    },
    {
        userName: "rutvik",
        hobbies: [
            {
                name: 'workout',
                freq: 3
            },
            {
                name: 'matargashti',
                freq: 4
            }
        ]
    },
    {
        userName: "ankita",
        hobbies: [
            {
                name: 'workout',
                freq: 4
            },
            {
                name: 'yoga',
                freq: 6
            }
        ]
    }
]);


db.embeddedArrEleMatch.find({
    hobbies: {
        $elemMatch: {
            name: 'workout',
            freq: {
                $gte: 5
            }
        }
    }
});

cur.forEach(doc => printjson(doc));

db.movies.find({
    genres: {
        $all: ["Drama", "Horror"]
    }
    }, 
    {
    "genres$1": 1
    }
);

db.movies.find({
    genres: "Drama"
},
{
    "genres.$": 3,
    _id: 0
});

db.movies.find({genres: "Drama"}, {
    genres: {
        $elemMatch: {$eq: "Horror"}
    },
    _id: 0
});