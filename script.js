const oldImg = document.querySelector("#oldImg");
const oldName = document.querySelector("#oldName");
const oldEmail = document.querySelector("#oldEmail");
const oldPhone = document.querySelector("#oldPhone");
const oldLocation = document.querySelector("#oldLocation");
const oldAge = document.querySelector("#oldAge");
const genBtn = document.querySelector("#generate");

const getDataAndUpdateDOM = () => {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const info = data.results[0];

      hideSpinner();

      oldImg.src = `${info.picture.large}`;

      oldName.firstChild.replaceWith(
        document.createTextNode(
          `Name: ${info.name.title}. ${info.name.first} ${info.name.last}`
        )
      );

      oldEmail.firstChild.replaceWith(
        document.createTextNode(`Email: ${info.email}`)
      );

      oldPhone.firstChild.replaceWith(
        document.createTextNode(`Phone: ${info.phone}`)
      );

      oldEmail.firstChild.replaceWith(
        document.createTextNode(`Name: ${info.email}`)
      );

      oldLocation.firstChild.replaceWith(
        document.createTextNode(
          `Location: ${info.location.city}, ${info.location.state}, ${info.location.country}`
        )
      );

      oldAge.firstChild.replaceWith(
        document.createTextNode(`Age: ${info.dob.age}`)
      );
    });
};

const showSpinner = () => {
  document.querySelector(".spinner").style.display = "block";
};

const hideSpinner = () => {
  document.querySelector(".spinner").style.display = "none";
};

genBtn.addEventListener("click", getDataAndUpdateDOM);

getDataAndUpdateDOM();
