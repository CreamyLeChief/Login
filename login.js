const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        window.location.href = "index.html"
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "admin" && password === "2648"){
        return true
    }else if (username === "hehehehawampro" && password === "7698"){
        return true
	
    } else {
	    return false
    }
}
