const loginForm=document.getElementById("#login")
const loginName=document.querySelector( "#login input")
const greeting=document.querySelector("#greeting")

const HIDDEN_CONST = "hidden"

function enterkey(){
    if(window.event.keyCode==13){         
            const username=loginName.value;
            localStorage.setItem("name",username)
            loginName.classList.add(HIDDEN_CONST);
            remember();
        }            
    }

function remember(){    
    const saveName = localStorage.getItem("name")

        if(saveName===null){
            loginName.classList.remove(HIDDEN_CONST);
    
            } else {
                loginName.classList.add(HIDDEN_CONST);
                greeting.innerText = `Hello ${saveName}!!`;
                greeting.classList.remove(HIDDEN_CONST);
    
    }
}

remember();
