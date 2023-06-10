const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, '../temp/index.html'));
  res.render("home");
});
router.get("/blog", (req, res) => {
  // blogs.forEach(element => {
  //     console.log(element.title)
  // });
  // res.sendFile(path.join(__dirname, '../temp/blogHome.html'));
  res.render("blogHome", {
    blogs: blogs,
  });
});
router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  console.log(myBlog);

  res.render("blogPage", {
    title: myblog[0].title,
    content:myblog[0].content
  });

//   res.sendFile(path.join(__dirname, "../temp/blogPage.html"));
});

module.exports = router;
