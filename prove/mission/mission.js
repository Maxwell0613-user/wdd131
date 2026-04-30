
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        content.style.color = "white";
        document.body.style.backgroundColor = "black";
        logo.src = "byui-logo-white.png"
        
        // code for changes to colors and logo
        
    } else {
        content.style.color = "black";
        document.body.style.backgroundColor = "white";
        logo.src = "byui.png"
        // code for changes to colors and logo
    }
}           
                    