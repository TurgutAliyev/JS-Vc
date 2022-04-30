let cedvel = document.getElementById('cedvel');
let text = " ";

for(let i = 1; i <= 10; i ++){

    for(let a = 1; a <= 10; a ++){
    text += (i + "x" +  a  +  '=' + (i*a) + '</br>' + '</br>');
    }
}
cedvel.innerHTML = text;