const http = require("http");
const express = require("express");
const { postListData } = require("./postListData");

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const app = express();

app.use(express.json()); // app에 json을 사용할 수 있도록

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});
// 회원가입
// 1. app에 회원가입하는 url 등록
app.post("/join", (req, res) => {
  console.log("join url well done");
  console.log(req.body);

  // 2. users id는 개발자가 주는 것
  // 3. name, email, password received from 요청(request)
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // const { email, password, name } = req.body; // 구조분해 할당 20,21,22 줄과 같은 말
  // 4. users 배열에 고객추가
  const userData = {
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  };

  // console.log("USER_DATA: ", userData);

  // js에서 키값과 value값이 같을 땐 한개만 써도 된다.
  // const userData = {
  //   id: users.length + 1;
  //   name,
  //   email,
  //   password,
  // };

  users.push(userData);
  console.log(users);

  // 5. 클라이언트(프론트엔드)에게 알려준다. => response to client
  res.json({ message: "USER_CREATED" });
});

// 게시글 등록
app.post("/post", (req, res) => {
  console.log("post url well done");

  const title = req.body.title;
  const content = req.body.content;
  const userId = req.body.userId;

  const postData = {
    id: posts.length + 1,
    title: title,
    content: content,
    userId: userId,
  };

  posts.push(postData);
  console.log(posts);

  res.json({ message: "POST_CREATED" });
});

// 게시글 목록 조회
app.get("/postList", postListData);

app.patch;

const server = http.createServer(app);

try {
  server.listen(8000, () => {
    console.log("server is listening on PORT 8000");
  });
} catch (err) {
  console.log(err);
}
