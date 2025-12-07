import { Router } from "express";
import { getUser, setUser, clearUser } from "../services/store.js";
import { fetchUsers } from "../utils/api.js";

const usersRouter = Router();

//here i import user from jsonplaceholder and store in memory
usersRouter.post("/import", async (req, res) => {
  try {
    const users = await fetchUsers();
    console.log(users.slice(0, 5));

    clearUser();
    setUser(users);
    res
      .status(200)
      .json({
        success: true,
        message: "Users imported successfully",
        count: users.length,
      });
  } catch (err) {
    console.error("Error importing users:", err);
    res
      .status(500)
      .json({ message: "Error importing users", error: err.message });
  }
});

//here i applied search user by name and  by Id single item view aslo be achieved
usersRouter.get("/", async (req, res) => {
  try {
    const { id, searchName } = req.query;

    let users = getUser();
    console.log(getUser());

    if (id) {
      users = users.filter((user) => user.id == id);
    }

    //Filter
    if (searchName) {
      let s = searchName.toLowerCase();
      users = users.filter((user) => user.name.toLowerCase().includes(s));
    }

    return res.json({
      success: true,
      total: users.length,
      users: users,
    });
  } catch (err) {
    console.error("Error in get users:", err);
    res
      .status(500)
      .json({ message: "Error importing users", error: err.message });
  }
});

export default usersRouter;
