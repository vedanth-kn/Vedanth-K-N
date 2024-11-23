// function add(a, b) {
//     return a+b;
// }

// let add = (a,b ) => {
//     return a+b;
// };

// let result = add(10, 5);

// console.log(result);

// let a=4, b=4, c=5, d=6;

// if (a === b && c === d) {
//     console.log("If block is exicuted")
// }
// else {
//     console.log("else block is exicuted")
// }

// console.log(a === b ? "Succes" : "False")

// let a = {
//     name: "Vedanth",
//     branch: "CSE",
//     address: {
//         pincode: 577002,
//     },
// }

// let {
//     name,
//     branch,
//     address: { pincode },
// } = a

// console.log(a.name)
// console.log(a.address)
// console.log(a.address.pincode)


// let arr = [10, 20, 30, 40, 50]
// let [first, , , , last] = arr
// console.log(arr[0], arr[2])
// console.log(first, last)

// for (let i=0; i<arr.length; i++) {
//     console.log(i, arr[i])
// }

// for (let i in arr) {
//     console.log(i, arr[i])
// }


// let i = 0
// while(i<arr.length) {
//     console.log(i, arr[i])
//     i++
// }

// do {
//     console.log(i, arr[i])
//     i++
// } while (i<arr.length)

// let day = new Date().getDate
// console.log(day)
// // let day = 0
// let value = ""
// switch(day) {
//     case 0:
//         value = "Sunday"
//         break
//     default:
//         value = "Monday"    
//         break
// }

// console.log(value)

// var a = [10, 20, 30, 40, 50]
// a.push(60)
// console.log(a)

// // for (let i in a) {
// //     console.log(i, a[i], a[i]*2)
// // }

// let c = a.map((values) => values*2)
// let d = a.filter((values) => values>20)

// console.log(c)
// console.log(d)

var a = [1, 2, 3, 4, 5]
console.log(a.indexOf(3) != -1)
console.log(a.includes(8))