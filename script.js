const oldImg = document.querySelector("#oldImg");

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results[0].picture);
    oldImg.src = `${data.results[0].picture.large}`;
  });
