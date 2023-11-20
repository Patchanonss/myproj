let correct_user,correct_pass;
correct_user = 'Real Username';
correct_pass = '1q2w3e4r5t';

function submitform(){
    let f1 = document.getElementById('signupform');
    let user,pass;
    user = document.getElementById('tempuser1').value;
    pass = document.getElementById('temppass1').value;
    let temp1 = document.getElementById('incorrectcase');
    var realtemp = document.querySelector('.tempo')
    if (user != correct_user){
        temp1.innerHTML = 'Invalid Username'
    }
    else if (pass != correct_pass){
        temp1.innerHTML = 'Invalid Password'
    }
    else {
        temp1.innerHTML = 'successfully log In'
    realtemp.style.visibility = 'visible';
    }
}
function closepopup() {
    document.querySelector('.tempo').style.visibility = 'hidden';
}
