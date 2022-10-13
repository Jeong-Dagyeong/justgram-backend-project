const postListData = (req, res) => {
  res.json({
    data: [
      {
        userID: 1,
        userName: "Rebekah Johnson",
        postingId: 1,
        postingTitle: "간단한 HTTP API 개발 시작!",
        postingContent:
          "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
      },
      {
        userID: 2,
        userName: "Fabian Predovic",
        postingId: 2,
        postingTitle: "HTTP의 특성",
        postingContent: "Request/Response와 Stateless!!",
      },
      {
        userID: 3,
        userName: "new user 1",
        postingId: 3,
        postingTitle: "내용 1",
        postingContent: "sampleContent3",
      },
      {
        userID: 4,
        userName: "new user 2",
        postingId: 4,
        postingTitle: "내용 2",
        postingContent: "sampleContent4",
      },
    ],
  });
};

module.exports = { postListData };
