import express from 'express';
import usersRouter from './routes/users.js';
import postRouter from './routes/posts.js';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());



app.use("/api/user" , usersRouter)
app.use("/api/post" , postRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});