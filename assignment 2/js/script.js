// --------- Fake Database (Simulating SQL Table) ---------

const books = [
    {
        id:1,
        name:"The Alchemist",
        price:299,
        description:"Inspirational novel",
        image:"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
        id:2,
        name:"Atomic Habits",
        price:450,
        description:"Self improvement guide",
        image:"https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg"
    },
    {
        id:3,
        name:"Rich Dad Poor Dad",
        price:399,
        description:"Finance & money mindset",
        image:"https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    }
];

// --------- REGISTER ---------

function registerUser(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirm").value;

    if(pass !== cpass){
        alert("Passwords do not match");
        return;
    }

    let user = {name,email,pass};
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
    window.location.href="login.html";
}

// --------- LOGIN ---------

function loginUser(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && email === storedUser.email && pass === storedUser.pass){
        localStorage.setItem("loggedIn", "true");
        window.location.href="home.html";
    }else{
        alert("Invalid Credentials");
    }
}

// --------- DISPLAY BOOKS ---------

function loadBooks(){
    let container = document.getElementById("bookContainer");

    books.forEach(book => {
        container.innerHTML += `
            <div class="card">
                <img src="${book.image}">
                <h4>${book.name}</h4>
                <p>${book.description}</p>
                <strong>₹${book.price}</strong>
            </div>
        `;
    });
}