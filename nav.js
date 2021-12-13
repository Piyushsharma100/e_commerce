var isLoggedIn = window.localStorage.getItem("loggedIn");

if (isLoggedIn) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('profile').style.display = '';
    document.getElementById('name').innerHTML = "Hi, " + window.localStorage.getItem('username');
} else {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('login').style.display = '';

}


function logOut() {
    window.localStorage.removeItem('loggedIn');
    window.localStorage.removeItem('username');
}