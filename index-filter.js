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

// for (let i = 0; i < students.length ; i++) {
//     if (students[i].course === 'Math'){
//         console.log(students[i])
//     }
// }

// const result = students.filter(function(student){
//     if(student.course === 'Math'){
//         return true
//     }
// })

// const result = students.filter(student => student.course === 'Math' ) 
// const result = students.filter(student => student.course !== 'Math' ) 
const result = students.filter(student => student.age <= 20 ) 

console.log(result)