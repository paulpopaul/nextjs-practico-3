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

// const resultado = students.some(function(student){
//     if(student.lastname === 'Pineda'){
//         return true
//     }
// })


const resultado = students.some((student) => student.lastname === 'Pineda')
console.log(resultado)