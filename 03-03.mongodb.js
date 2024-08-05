db.employees.insertOne({
    name: "lake",
    age: 21,
    dept: "Database",
    joinDate: new ISODate("2024-07-23"),
    salary: 400000,
    bonus: null
})

db.employees.insertMany([{
        name: "고윤정",
        age: 21,
        dept: "Network",
        joinDate: new ISODate("2020-07-23"),
        salary: 100000,
        resignationDate: new ISODate("2024-07-23"),
        bonus: null
    },
    {
        name: "카라나",
        age: 21,
        dept: "Database",
        isNegotiating: true
    },
])


db.employees.updateOne({ name: "카라나" }, {
    $set: {
        name: "카리나",
        salary: 350000,
        dept: "Software",
        joinDate: new ISODate("2024-07-23")
    },
    $unset: {
        isNegotiating: ""
    }
})

db.employees.updateMany({ resignationDate: { $exists: false }, joinDate: { $exists: true } }, { $mul: { salary: Decimal128("1.1") } })

db.employees.deleteOne({ name: "lake" })

// 전체 삭제
db.employees.deleteMany({})

// show collections 후에 실행
db.employees.drop()

// sample_guides
db.planets.findOne({ name: "Mars" })

db.planets.find({ hasRings: true, orderFromSun: { $lte: 6 } })

db.planets.find({
    $and: [
        { hasRings: true }, { orderFromSun: { $lte: 6 } }
    ]
})

db.planets.find({
    $or: [
        { hasRings: { $ne: false } }, { orderFromSun: { $gt: 6 } }
    ]
})

db.planets.find({
    mainAtmosphere: { $in: ['O2'] }
})



// 속도 확인
for (i = 0; i < 300; i++) {
    db.insertTest2.insertOne({ a: i })
}


var docs = [];
for (i = 0; i < 300; i++) {
    docs.push({ a: i })
}

db.insertTest2.insertMany(docs);