

let users = [];  // memory store for users
let posts = [];  // memory store for posts

const setUser = (newUsers) => {
    return users  = newUsers
}
const getUser = () => {
    return users  
}
const clearUser = () => {
    return users  = [] 
}

const setPost = (newPosts) => {
    return posts  = newPosts
}

const getPost = () => {
    return posts  
}
const clearPost = () => {
    return posts  = [] 
}

export { setUser, getUser, clearUser, setPost, getPost, clearPost };

