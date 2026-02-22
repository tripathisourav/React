
// localStorage.clear() to clear local storage

// localStorage.setItem('user', 'sorv')  // will override user to sorv if user is already present

// localStorage.setItem('age', '21')

// var user = localStorage.getItem('user')
// console.log(user);

// localStorage.removeItem('age')


// let arr = [10, 20, 30]

// localStorage.setItem('arr', arr) // saved in local storage as string arr 10,20,30


// console.log(localStorage.getItem('arr')); //10,20,30 data saves in form of string


// let obj = {
//     user: 'sorv',
//     age: 21
// }


// localStorage.setItem('obj', obj);  // obj	

// console.log(localStorage.getItem('obj'));  //  [object Object]



// var newObj = JSON.stringify(obj);

// localStorage.setItem('obj', newObj); 

// console.log(newObj);  // {"user":"sorv","age":21}


// const obj2 = localStorage.getItem('obj')

// let realObj = JSON.parse(obj2);

// console.log(realObj);
// {user: 'sorv', age: 21} age :  21 user :  "sorv" [[Prototype]] :  Object



// JSON.stringify : Array/Object -> String
// JSON.parse : String -> Array/Object


sessionStorage.setItem('user', 'sorv') // jb tk tab open tb tk session storage rhegi