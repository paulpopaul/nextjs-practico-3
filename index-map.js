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

// students.map(function(student){
//     console.log(student)
// })

// const result = students.map(function(student){
//     return student.name
// })
// console.log(result)

// const nameAll = students.map(student => {
//     return {
//         fullname: student.name + '' + student.lastname,
//         age: student.age,
//         course: student.course
//     }
// })
// console.log(nameAll)


// const nameAll = students.map(student => {
//     return {
//         name: student.name,
//         lastname: student.lastname,
//         age: student.age,
//         course: student.course,
//         title: `${student.name} ${student.course}`
//     }
// })
// console.log(nameAll)

// const nameAll = students.map(student => {
//     return {
//         ...student,
//         title: `${student.name} ${student.course}`
//     }
// })
// console.log(nameAll)

// const nameAll = students.map(student => {
//     return {
//         ...student,
//         course: 'programming'
//     }
// })
// console.log(nameAll)

// const nameAll = students.map(student => ({...student, course: 'programming'}))
// console.log(nameAll)

// const newCourse = students.map(student => ({
//     ...student, 
//     course: 'programming'
// }))

// // const doubleAge = newCourse.map(student => student.age * 2 )
// // console.log(doubleAge)

// const doubleAge = newCourse.map(student => ({
//     ...student,
//     age: student.age * 2
// }))
// console.log(doubleAge)


const doubleAge = students.map(student => ({
    ...student, 
    course: 'programming'
})).map(student => ({
    ...student,
    age: student.age * 2
}))
console.log(doubleAge)