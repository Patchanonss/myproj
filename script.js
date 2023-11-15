// Function to be executed when the element is clicked
var currturn = 'X'
var nextturn = 'O'
var button_state = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
function handleDivClick(element1,brow,bcol) {
    element1.classList.add('unclickable');
    element1.style.backgroundColor = "#99AACC"
    element1.innerHTML = currturn;
    element1.style.fontSize = '50px'
    document.getElementById('turnshow').innerHTML = `"${nextturn}" turn`
    if (currturn == 'X'){
        button_state[brow][bcol] = 1;
        currturn = 'O';
        nextturn = 'X'
    }
    else{
        button_state[brow][bcol] = -1;
        currturn = 'X';
        nextturn = 'O';
    }
    console.log(button_state);
    for (let i = 0;i<3;i++){
        const sum1 = button_state[i].reduce((a, b) => a + b, 0);
        if ((sum1 === 3) ||
        (button_state[0][i] + button_state[1][i] + button_state[2][i] === 3) 
        || (button_state[0][0] + button_state[1][1] + button_state[2][2] === 3)
        || (button_state[1][1] + button_state[0][2] + button_state[2][0] === 3)){
            alert('X wins!');
            document.body.innerHTML = "X wins"
            let a = document.createElement('button');
            a.textContent = 'Restart Game!';
            a.id = 'hidden';
            a.onclick = function(){
                location.reload();
            }
            document.body.appendChild(a);
            break;
    }
        else if ((sum1 === -3) ||
        (button_state[0][i] + button_state[1][i] + button_state[2][i] === -3) 
        || (button_state[0][0] + button_state[1][1] + button_state[2][2] === -3)
        || (button_state[1][1] + button_state[0][2] + button_state[2][0] === -3)){
            alert('O wins!');
            document.body.innerHTML = "O wins"
            let a = document.createElement('button');
            a.textContent = 'Restart Game!';
            a.id = 'hidden';
            a.onclick = function(){
                location.reload();
            }
            document.body.appendChild(a);
            break;
        }
}
};

// document.getElementById('temp123').addEventListener('click', handleDivClick);
// console.log("ajhsbdvjasd a");


function toImage(element){
    var img = document.createElement('img');
    img.src = 'path/to/your/image.jpg';
    element.innerHTML = '';
    element.appendChild(img); 
}