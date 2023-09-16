const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, crptography, network

    setTimeout(() => {
        // console.log('async task is complete')
        a = 5;
        b = 15;
        resolve()
    }, 1000);
});

promiseOne.then(() => {
    // console.log('resolved')
    console.log(a + b)
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
}).then(() => {
    console.log('Async 2 resolved')
})

const promisThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Chai", email: "chai@example.com" })
    }, 1000);
})
promisThree.then((user) => {
    console.log(user.userName)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: "Prashant", age: 23 })

        } else {
            reject('something went wrong')
        }
    }, 1000);
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((name) => {
        console.log(name)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log('The promise is either resolved or rejected'));


const promisFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "JavaScript", password: 123 })
    }, 1000);
})

async function consumePromisFive() {
    try {
        const responce = await promisFive
        console.log(responce)
    } catch (error) {
        console.log(error)
    }
}

consumePromisFive()


// async function getAlluser() {
//  try {
//     const responce = await fetch('https://randomuser.me/api/')
//     const data = await responce.json()
//     console.log(data)
//  } catch (error) {
//     console.log('E: ',error)
//  }
// }
// getAlluser()

fetch('https://randomuser.me/api/')
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))