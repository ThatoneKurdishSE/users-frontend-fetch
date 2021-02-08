const USERS_URL = 'http://localhost:3000/users'
const addUserSection = document.querySelector('#add-user')

addUserSection.appendChild(createUserForm('add-user-form'))

function createUserForm(id, user = null){
  const userForm = document.createElement('form')
  const nameField = document.createElement('input')
  const emailField = document.createElement('input')
  const passwordField = document.createElement('input')
  const submitButton = document.createElement('input')

  userForm.id = id
  nameField.name = 'name'
  emailField.name = 'email'
  passwordField.name = 'password'
  nameField.placeholder =  'Enter name'
  emailField.placeholder = 'Enter email'
  passwordField.placeholder = 'Enter password'
  nameField.value = user && user.name
  emailField.value = user && user.email
  passwordField.value = user && user.password
  submitButton.type = 'submit'

  userForm.append(nameField, emailField, passwordField, submitButton)
  
  return userForm
}

getUsers()

function getUsers(){
  fetch(USERS_URL)
      .then(response => response.json())
      .then(displayUsers)
}

function displayUsers(users){
  const usersContainer = document.querySelector('#users')

  users.forEach(user => {
    const card = document.createElement('div')
    const name = document.createElement('p')
    const editUserForm = createUserForm(`edit-user-form-${user.id}`, user)

    card.className = 'card'
    name.textContent = user.name

    card.append(name, editUserForm)
    usersContainer.appendChild(card)
  })
}

const addUserForm = document.querySelector('#add-user-form')
addUserForm.addEventListener('submit', createUser)

function createUser(event){

}