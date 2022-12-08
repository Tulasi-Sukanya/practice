const posts = [
    {id: 1, name: 'Post One', desc: 'Post One Desc'},
    {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
    {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
    {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
    {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
]
const addPosts = (post,callback) =>{
    setTimeout(() =>{
        posts.push(post)
        callback()
    },2000)
}
const showposts=(posts)=>{
    setTimeout(()=>{
        console.log(post.name)
    },1000)
}
addPosts({id: 6, name: 'Post six', desc: 'Post six Desc'},callback);