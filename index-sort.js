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


// const sortEstu = students.sort(function(first, second){
//     if(first.age < second.age){
//         return 1
//     } else {
//         return -1
//     }
// })

// const sortStu = students.sort((a, b) => a.age > b.age ? 1 : -1)
const sortStu = students.sort((a, b) => a.age > b.age)
console.log(sortStu)

const numbers = [10, 20, 40, 1000, 2000, 100000]
console.log(numbers.sort())