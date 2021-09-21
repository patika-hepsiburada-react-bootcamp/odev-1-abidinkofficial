// Importing libraries
import axios from "axios"

// async getData() takes a userId(Number)
// and returns an object containing user's data and posts, if it resolves
const getData = async (userId) => {
  try {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return { ...user.data, posts: [...posts.data] }
  } catch (err) {
    console.error(err.message)
  }
}

// Exporting services
export default getData