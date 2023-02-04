// dark and pink theme code

// Here it reads what the theme currently is, it reads from the localstorage.
const currentTheme = localStorage.getItem("theme");

// Changes the theme when the page loads
if (currentTheme === "pink") {
    document.body.classList.add("pink");
    document.getElementById("pink-theme-btn").classList.add("underline");
    document.getElementById("dark-theme-btn").classList.remove("underline");
}
else {
    document.body.classList.remove("pink");
    document.getElementById("dark-theme-btn").classList.add("underline");
    document.getElementById("pink-theme-btn").classList.remove("underline");
};

// Changes the theme of the site to pink when user clicks button, and saves theme to localstorage
function theme_btn_pink() {
    document.body.classList.add("pink");
    document.getElementById("pink-theme-btn").classList.add("underline");
    document.getElementById("dark-theme-btn").classList.remove("underline");

    let theme = "pink";
    localStorage.setItem("theme", theme);
};

// Changes the theme of the site to dark when user clicks button, and saves theme to localstorage
function theme_btn_dark() {
    document.body.classList.remove("pink");
    document.getElementById("dark-theme-btn").classList.add("underline");
    document.getElementById("pink-theme-btn").classList.remove("underline");

    let theme = "dark";
    localStorage.setItem("theme", theme);
};

// End of dark / pink mode code


// Navbar
const overlay = document.querySelector('.overlay');

const appearance_btn = document.querySelector('.appearance');
const appearance_drop = document.querySelector('.appearance-drop')

overlay.addEventListener('click', function () {
    appearance_drop.classList.add('hidden');
    overlay.classList.add('hidden');
});

appearance_btn.addEventListener('click', () => {
    appearance_drop.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

// End of navbar



// Love calculator code

// Getting the elements
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const submit = document.querySelector('#submit');

function submit_btn() {
    // Making all the letters lowercase
    input1.value = input1.value.toLowerCase();
    input2.value = input2.value.toLowerCase();

    // Making the first letter uppercase
    var person1 = input1.value.slice(0, 1).toUpperCase() + input1.value.slice(1);
    var person2 = input2.value.slice(0, 1).toUpperCase() + input2.value.slice(1);

    // Generate number between 0 and 100
    var n = Math.floor(Math.random() * 101);

    // Default message
    var d = `The probability of ${person1} and ${person2} fitting together is ${n}%.`;

    // checks if user has inputed value in both inputs, if user has, then give calculation to user
    if (person1 === "" || person2 === "") {
        alert('You must fill in all the fields. Please try again.');
    }
    else {
        if (person1 === "Chess" || person2 === "Chess") {
            alert(`The probability of ${person1} and ${person2} fitting together is 100%. Chess is the perfect match for everyone`);
        }
        else {
            if (n === 0) {
                alert(`${d} Sorry, this match won't work at all.`);
            }
            else if (n <= 25) {
                alert(`${d} This match isn't exactly the best.`);
            }
            else if (n <= 50) {
                alert(`${d} This isn't looking very good.`);
            }
            else if (n <= 75) {
                alert(`${d} Close, but not enough.`);
            }
            else if (n < 100) {
                alert(`${d} So close to perfect, but this is enough.`);
            }
            else if (n === 100) {
                alert(`${d} Excellent, this is a perfect match!`);
            }
        }
        // Resets the value of the inputs
        input1.value = input2.value = "";
    }
}

// End of love calculator code



// Checks if screen width is 350px or less and then removes is-active from menu_btn and removes flex class from navigation.
var vw = window.matchMedia("(max-width: 260px)");
vw.addEventListener('change', vwFunct);
vwFunct(vw);

function vwFunct(vw) {
    if (vw.matches) {
        document.querySelector('#title').innerHTML = "Calculator";
    }
    else {
        document.querySelector('#title').innerHTML = "Love Calculator";
    }
}