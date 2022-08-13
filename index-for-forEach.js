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
        age: 26,
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


// for (let i = 0 ; i < students.length ; i++ ){
//     console.log(students[1])
// }

// students.forEach(function(student, index, students){
//     console.log(student)
//     console.log(index)
//     console.log(students)
// })

students.forEach((student) => {console.log(student.name + ' '+ student.lastname)}) // noretorna nada

const fullname = [] 
students.forEach((student) => {
    fullname.push(student.name + ' '+ student.lastname)
}) 
console.log(fullname)