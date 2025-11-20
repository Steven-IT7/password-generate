const password = document.getElementById("password");
const pseudo = document.getElementById("pseudo");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}";
    let result = "";

    for (let i = 0; i < 20; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    password.value = result;
}

function generatePseudo() {
    const prefix = ["Dark", "Ultra", "Mega", "Shadow", "Fire", "Ghost", "Cyber", "Storm"];
    const suffix = ["Wolf", "X", "Pro", "King", "Master", "Tech", "Player"];
    const number = Math.floor(Math.random() * 999);

    pseudo.value = prefix[Math.floor(Math.random() * prefix.length)]
                 + suffix[Math.floor(Math.random() * suffix.length)]
                 + number;
}

function search() {
    const text = searchInput.value.trim();

    if (text === "") {
        searchResult.innerText = "Veuillez entrer un texte.";
    } else {
        searchResult.innerText = "Result : " + text;
    }
}

function showTab(tabName) {

    document.querySelectorAll(".tabContent").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");

    const buttons = document.querySelectorAll(".tab");
    if (tabName === "passwordTab") buttons[0].classList.add("active");
    if (tabName === "pseudoTab") buttons[1].classList.add("active");
    if (tabName === "searchTab") buttons[2].classList.add("active");
}



