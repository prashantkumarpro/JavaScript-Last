

// singleton - jb bhi ham literal ke trah use karte hai to singleton nahi banta hai

// objct literals
const JsUser = {
    name: "prashnt",
    "full name": "Prashant Kumar",
    age: 23,
    location: "Bihar",
    email: "prshant@google.com",
    isLoggedIn: false,
    lstLoggedIn: ['Monday', 'Saturday']
};

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser."full name");


// constructor
// Object.create
// isi ke anadar singleton  banta hai


const course = {
    conrsename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

// const { courseInstructor } = course;
// console.log(courseInstructor);// Hitesh

// const { courseInstructor: instructor } = course;
// console.log(instructor);// Hitesh



const mySym = Symbol('key1');

const jsUser = {
    name: "prashant",
    "full name": "Prashatn Kumar",
    age: 23,
    [mySym]: "mykey1",
    location: "Bihar",
    email: "prashant@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]); // mykey1


jsUser.email = "prashantsako@gmial.com";
// Object.freeze(jsUser);
jsUser.email = "prashant@g.com"
// console.log(jsUser)


jsUser.greeting = function () {
    console.log("Hello JS User")
};



// console.log(jsUser.greeting)// undefined
// console.log(jsUser.greeting())// Hello JS User

jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`)
}


// console.log(jsUser.greeting());//Hello JS User
// console.log(jsUser.greetingTwo());//Hello JS user, prashant

jsUser.greetingTwo = () => {
    console.log(`Hello JS user, ${this.name}`)
}
// this keyword is not working on fat arrow function 
// console.log(jsUser.greetingTwo());//Hello JS user, undefined


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false;

console.log(tinderUser);//{ id: '123abc', name: 'samy', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "kumer"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//Prashant

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// console.log(tinderUser);//{ id: '123abc', name: 'samy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '123abc', 'samy', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));// true




