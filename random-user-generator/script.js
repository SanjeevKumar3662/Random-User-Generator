const generateUserBtn = document.querySelector('#generate');
const oldUser = document.querySelector('#user');

//getting elemnts that will change, (from here to) 
const oldName = document.querySelector('#oldName');
const oldEmail = document.querySelector('#oldEmail');
const oldPhone = document.querySelector('#oldPhone');
const oldLocation = document.querySelector('#oldLocation');
const oldAge = document.querySelector('#oldAge');
//all of the above will change, (here)


const parentOfImg = oldUser.querySelector('#parentOfImg');
console.log(oldImg);
console.log(parentOfImg);

function fetchUser() {
    fetch('https://randomuser.me/api')
        .then((object) => { return object.json() })
        .then((data) => {
            changeUser(data.results[0]);
            console.log(data.results[0]);
        });
}


//this function will change all of the user details 
function changeUser(user) {

    if (user.gender === 'male') {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = 'lightpurple';
    }

    changeOldImg(user);
    changePersonalDetails(user);
}


function changeOldImg(user) {
    const oldImg = oldUser.querySelector('#oldImg');
    oldImg.remove();

    
    const imgTag = document.createElement('img');
    imgTag.id = 'oldImg';
    imgTag.className = "w-48 h-48 rounded-full mr-8";
    imgTag.src = `${user.picture.large}`;
    
    parentOfImg.appendChild(imgTag);
   
}

function changePersonalDetails(user) {
    oldName.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
    oldEmail.innerText = `Email: ${user.email}`;
    oldPhone.innerText = `Phone: ${user.phone} `;
    oldLocation.innerText = `Location: ${user.location.city} ${user.location.state}  ${user.location.country}`;
    oldAge.innerText = `Age: ${user.dob.age}`;

}



fetchUser();

generateUserBtn.addEventListener('click', fetchUser);