const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const request = require("request");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let articleArr = [];

  JSON.parse(body).data.children.forEach(item => {
    articleArr.push({
      title: item.data.title,
      author: item.data.author,
      url: item.data.url
    });
    let articles = JSON.stringify(articleArr);
    fs.writeFileSync('popular-articles.json', articles);  });
});