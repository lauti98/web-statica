const register = document.querySelector('#signupform')
register.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya está registrado!')
        window.location.href = 'index.html'
    }
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Regisro exitoso')
    window.location.href = 'index.html'
});