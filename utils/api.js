import axios from "axios";

 export const fetchUsers = async() => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users" , {timeout: 5000});
  return res.data;
}

 export const fetchPosts = async() => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts` , {timeout: 5000});
  return res.data;
}