//
//
//  Object Destructuring
//
// console.log('es6---destructuring')
// const person = {
//     name: 'Mike',
//     age: 26,
//     location: {
//         city: 'Bangalore',
//         temp: 35
//     }
// }
// const { name:firstName='Mr Unknown', age } = person;
// const { city, temp:temperature } = person.location;
// console.log(`${firstName} is ${age}`)
// if (city && temperature)
//     console.log(`It's ${temperature} in ${city}`)

// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//      //   name:undefined
//     }
// }
// const {title,author}=book;
// const {name:publisherName='self-publisher'}=book.publisher
// ///console.log(``);
// console.log(publisherName);//Penguin,self-publisher



//
//
// Array Destructuring
//
//



const address=['1299 $ Juniper Street','Philadelphia','Pennsylvania','2020'];
const [street='NewYork',,state,zip]=address;//skip a name in address array use empty name

console.log(`Your in ${address[1]} in ${address[2]} `)
console.log(`Your in ${street}`)


//const item =['coffee(hot)','$2.00','$2.50','$2.75']

const item = ['coffee(cold)', '$3.00', '$3.50', '$3.75']
const [itemName,small,medium,large]=item
console.log(`A medium coffee(hot) costs $2.50 `)

console.log(`A medium ${itemName} costs ${medium}`)
console.log(`A medium `,itemName, ` costs`,medium)//both are same 
