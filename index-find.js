students = [
    {
        name: "Paul",
        lastname: "Pineda",
        age: 33,
        course: "AI"
    },
    {
        name: "Camila",
        lastname: "Perez",
        age: 20,
        course: "Design"
    },
    {
        name: "Robert",
        lastname: "Aros",
        age: 50,
        course: "Math"
    },
    {
        name: "Rosa",
        lastname: "Figeroa",
        age:43,
        course: "Data Bases"
    }
]

// const newStud = students.find(function (student){
//     if (student.name === 'Rosa'){
//         return 1
//     }
// })

// const newStud = students.find(function (student){
//     if (student.age === 20){
//         return 1
//     }
// })


const newStud = students.find((student) => student.name === 'Paul')
console.log(newStud)