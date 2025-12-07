import { Router } from "express";
import { fetchPosts } from "../utils/api.js";
import { getPost, setPost, clearPost } from "../services/store.js";

const postRouter = Router();

//here i import post from jsonplaceholder and store in memory
postRouter.post("/import", async (req, res) => {
  try {
    const posts = await fetchPosts();

    const formatted = posts.map((p) => ({
      id: p.id,
      title: p.title,
      body: p.body,
      userId: p.userId,
    }));

    clearPost();
    setPost(formatted);

    console.log(formatted.slice(0, 5));

    return res.json({
      message: "Data imported successfully",
      count: formatted.length,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

postRouter.get("/", (req, res) => {
  try {
    const {  search } = req.query;

    let data = getPost();

    //Filter
    if (search) {
      const s = search.toLowerCase();
      data = data.filter((item) => item.title.toLowerCase().includes(s));
    }

    return res.json({
      total: data.length,
      data: data,
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch " });
  }
});

//Single  item view
postRouter.get("/:id", (req, res) => {
  try {
    let data = getPost();
    const item = data.find((i) => i.id == req.params.id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    return res.json(item);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch item" });
  }
});

export default postRouter;
