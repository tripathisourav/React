// Destructuring

// var arr = [10, 20, 30, 40, 50, 60, 70]

// var arr2 = [arr[0], arr[1], arr[2], ...arr]

// arr2.pop();


// spread

// var arr = [10, 20, 30, 40, 50, 60, 70]

// var arr2 = [...arr]



// var arr = [10, 20, 30, 40, 50, 60, 70]

// var arr2 = [arr[0], arr[3]]

// console.log(arr2)  // [10, 40]



// var arr = [10, 20, 30, 40, 50, 60, 70]

// var [p, q, r, ...s] = arr;

// console.log(p, q, r, s)    // 10 20 30 (4) [40, 50, 60, 70]





// var [p, q, r, ...s, t] = arr;   //error




// var obj = {
//     user: 'sarthak',
//     age: 29,
//     city: 'Gwalior'
// }

// var {...obj2} = obj;

// console.log(obj2);

// var {user, age} = obj;

// console.log(user, age);    // sarthak 29



// var {user, ...obj2} = obj;

// console.log(user, obj2);   // sarthak {age: 29, city: 'Gwalior'}



// var {usera} = obj;

// console.log(usera);   // undefined


// var{age, user} = obj;

// console.log(age, user);    // values ka order change nhi hoga







// default export     export


// import king from './app.js'

// console.log(king);   // sorv




// import king from './app.js'

// console.log(king);   // {name: 'sorv', age: 21, century: 0, inForm: 'anyDoubt'}



// import skills from './test.js'

// console.log(skills);   // ['react', 'next', 'js']



// import {username} from './test.js'  // curly braces + shi naam se recieve kr skte hai named export

// console.log(username);


// import king, {maths, english} from './app.js'

// console.log(king, maths, english);










// React js -> Library


// framework jismein pura ecosystem bna aata hai library jismein ek feature ke liye ek cheeze hoti hai 

// gsap.to('#box',{
//     x: 500,
//     duration: 2,
//     delay: 1
// })





// console.log(React)
// console.log(ReactDOM)


// React - UI
// ReactDOM - React and Dom ko ek saath connect krna 



// var h1 = document.createElement('h1')
// h1.innerHTML = 'Hello from js'

// document.body.appendChild(h1)



// var h1 = React.createElement('h1', {id: 'h11'}, 'Mai Gian Hoon')
// var h2 = React.createElement('h2', {class: 'h22'}, 'Mai h2 hoon')


// var div = React.createElement('div', {id: 'parent', class: 'elem'}, [h1, h2])

// var root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h1)
// root.render(h1, h2) // h2 doensn't comes


// root.render(div)



import h1 from './app.js'

import circle from './test.js'


var root = ReactDOM.createRoot(document.querySelector('#root'))

const parent = React.createElement('div', null, [h1(), circle()])

// root.render([h1(), circle()]) // render() expects a single React element, and passing an array directly is discouraged unless you intentionally want a list.

root.render(parent)



// js -> javascript

// jsx -> javascript + html