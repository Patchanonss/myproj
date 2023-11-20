let correct_user,correct_pass;
correct_user = 'Real Username';
correct_pass = '1q2w3e4r5t';

function submitform(){
    // alert('button is clickled')
    let f1 = document.getElementById('signupform');
    let user,pass;
    user = document.getElementById('user1').value;
    pass = document.getElementById('pass1').value;
    let temp1 = document.getElementById('incorrectcase');
    if (user != correct_user){
        temp1.innerHTML = 'Invalid Username'
    }
    else if (pass != correct_pass){
        temp1.innerHTML = 'Invalid Password'
    }
    else {
        temp1.innerHTML = 'successfully log In'
    }
    // document.getElementById('showuser').innerHTML = user;
    // document.getElementById('showpass').innerHTML = pass;

}