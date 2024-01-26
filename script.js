// 1) sending the request from the client -fetch 
// 2) capturing the equest at the server - app.get
// 3) sending response from the server - response.status(200).json()
// 4) getting the response at the 

/*const button = document.getElementById('button')
const loginButton = document.getElementById('login-button')
const username = document.getElementById('username')
const password = document.getElementById('password')

button.addEventListener('click', async function() {
    // Sending a request from the client - get request
    // const respObj = await fetch('/get-data')
    // // response object -> json data
    // const data = await respObj.json()
    // console.log(data)

    // post request
})

loginButton.addEventListener('click', async function() {
    // sending a post request
    const respObj = await fetch('/verify-user', {
        method : 'POST',
        body : JSON.stringify({
            "username" : username.value,
            "password" : password.value
        }),
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const data = await respObj.json()
    console.log(data)
})*/

/*
const category =document.getElementById('category')
const date = document.getElementById('date')
const amount = document.getElementById('amount')
const addbtn =document.getElementById('add-entry')
/*addBtn.addEventListener('click', async function(){
    console.log('expense details')
    demo.innerHTML='Added successfully'
    const respobj = await fetch('/expense-details',{
        method : 'POST',
        body : JSON.stringify({
            'category' :category.value,
            'date' : date.value,
             'amount' :amount.value
        }),
        headers:{
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const postData = await respobj.json()
    console.log(postData)
})
addEntry.addEventListener('click', async function() {
    const respObj = await fetch('/add-entry', {
        method : 'POST',
        body : JSON.stringify({
            "category" : category.value,
            "amount" : amount.value,
            "date" : date.value
        }),
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const data = await respObj.json()
})
*/

// DOM elements
const addEntry = document.getElementById('add-entry')
const category = document.getElementById('category')
const amount = document.getElementById('amount')
const date = document.getElementById('date')

addEntry.addEventListener('click', async function() {
    const respObj = await fetch('/add-entry', {
        method : 'POST',
        body : JSON.stringify({
            "category" : category.value,
            "amount" : amount.value,
            "date" : date.value
        }),
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const data = await respObj.json()
})