function sleep(amount) {
    return new Promise((res, rej) => {
        if (amount < 300) {
            return rej('that is too fast,cool it down!');
        }
        setTimeout(() => res(`slept for ${amount}`), amount);
    })
}
// sleep(500)
//     .then(res => {
//         console.log(res)
//         return sleep(600);
//     })
//     .then(res => {
//         console.log(res);
//         return sleep(700);
//     }).then(res => {
//         console.log(res);
//         console.log('done');
//     })
//     .catch(rej => console.log(`Error: ${rej}`));
var i = 0;
async function sleepp(amount) {
    if (amount <= 5000) {
        let time1 = new Date().getTime();
        await setTimeout(() => {


            i++;
            let time2 = new Date().getTime();
            console.log(`slept for ${amount}  time elapsed= ${time2-time1}ms`);

            return sleepp(amount + 1000);
        }, amount / i);
    } else {
        return console.log('that is enough wake up');
    }
}
sleepp(0);




// const posts = [{
//         title: 'Post One',
//         body: 'this is post one'
//     },
//     {
//         title: 'Post Two',
//         body: 'this is post Two'
//     },

// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPosts(post) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 res();
//             } else {
//                 rej('Error : something went wrong');
//             }
//         }, 0)
//     })
// }
// // createPosts({
// //         title: 'Post three',
// //         body: 'this is post three'
// //     })
// //     .then(getPosts)
// //     .catch(err => console.log(err));



// // async function init() {
// //     await createPosts({
// //         title: 'Post three',
// //         body: 'this is post three'
// //     });
// //     getPosts();
// // }
// // init();
// // for (let i = 0; i < 10; i++) {
// //     console.log(`${i}. zeez`);
// // }


// // const promise1 = Promise.resolve('Hello world');
// // const promise2 = 10;
// // const promise3 = new Promise((res, rej) => {
// //     setTimeout(res, 1000, 'GoodBye');
// // })
// // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// // Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
// // for (let i = 0; i < 10; i++) {
// //     console.log(`${i}. zeez`);
// // }

// async function fetchUsers(api) {
//     let time1 = new Date().getTime();
//     const res = await fetch(api);
//     const data = await res.json();
//     console.log(data);
//     let time2 = new Date().getTime();
//     console.log(`Time elapsed: ${time2-time1}ms`);

// }
// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log(`this is human no: ${i}`);
//     }
// }, 100);
// fetchUsers('https://jsonplaceholder.typicode.com/posts');

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log(`this is Rose no: ${i}`);
//     }
// }, 90);