// CALL BACKS //
const posts = [
    {id: 1, name: 'Post One', desc: 'Post One Desc'},
    {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
    {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
    {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
    {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
]

// JS is interpreted lang
// JS is a single-threaded language

// Function which writes some data in the DB
// Side-Effect -> function which takes longer to execute
const addPost = (post, callback1) => {
    setTimeout( () => {
        posts.push(post)
        callback1()
    }, 3000 )
    // myFunction()
}

// Function which print some data from the DB
// callback()
const showPosts = ( ) => {
    setTimeout( () => {
        posts.forEach( post => console.log(post.name) )
    }, 5000 )
}

const fun = () => {
    console.log('Print Completed...')
}

// Driver Code
// addPost( {id: 6, name: 'Post Six', desc: 'Post Six Desc'} )
// showPosts()

// Total amount of time taken -> 5 seconds 
addPost( {id: 6, name: 'Post Six', desc: 'Post Six Desc'}, showPosts )

// const handleInput = (event) => {
//     console.log(event.target.value)
// }

// document.querySelector('#my-text').addEventListener('keyup', handleInput)

//  PROMISES  //
// const posts = [
//     {id: 1, name: 'Post One', desc: 'Post One Desc'},
//     {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
//     {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
//     {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
//     {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
// ]

// // Promises are a advance callback which accepts two more callbacks -> resolve() & reject() -> ERROR HANDLING

// // Side-Effect
// const createPost = (post) => {
//     return new Promise( (resolve, reject) => {
//         const error = false
//         if(error) {
//             console.log('Soething went wrong')
//             reject()
//         } else {
//             setTimeout( () => {
//                 posts.push(post)
//                 resolve()
//             }, 3000 )
//         }
//     } )
// }

// const showposts = ( ) => {
//     setTimeout( () => {
//         posts.forEach( post => console.log(post.name) )
//     }, 5000 )
// }

// // Execute / Handle a promise
// createPost( {id: 6, name: 'Post Six', desc: 'Post Six Desc'} )
//     // .then( reolve() )
//     .then( () => showposts() )
//     // .catch( reject )
//     .catch( () => console.log('Error Occured.') )