function generateRandomPassword(length) {
    const characters = [
        "A","B","C","D","E","F","G","H","I",
        "J","K","L","M","N","O","P","Q","R",
        "S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i",
        "j","k","l","m","n","o","p","q","r",
        "s","t","u","v","w","x","y","z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","[","}","]",",","|",":",";","<",">",
        ".","?","/"
    ];
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}


document.getElementById("generate-password").addEventListener("click", function() {
    const password1 = generateRandomPassword(12);
    const password2 = generateRandomPassword(12);

    const passwordButton1 = document.getElementById("password1");
    const passwordButton2 = document.getElementById("password2");

    passwordButton1.classList.remove("hidden");
    passwordButton2.classList.remove("hidden");

    passwordButton1.textContent = password1;
    passwordButton2.textContent = password2;

    passwordButton1.classList.remove("fade-in");
    passwordButton2.classList.remove("fade-in");

    void passwordButton1.offsetWidth; // Trigger reflow to restart animation
    void passwordButton2.offsetWidth; // Trigger reflow to restart animation

    passwordButton1.classList.add("fade-in");
    passwordButton2.classList.add("fade-in");
});