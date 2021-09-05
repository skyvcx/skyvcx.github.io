

const loginNum=document.getElementById("dDay")
const greeting2=document.querySelector("#greeting2")




const HIDDEN_CONST2 ="hidden"
const setNum = localStorage.getItem("num")
const setNumber= setNum.replace(/(\d{4})(\d{2})(\d)/, "$1-$2-$3");
 







  function enterkey2(){
    if(window.event.keyCode==13)
    { const userNum=loginNum.value; 
      if(userNum.length >= 9){
      alert("D`Day설정을 다시 입력해주세요.")
      }else if(setNum===null){
      loginNum.classList.add(HIDDEN_CONST2)
      localStorage.setItem("num",userNum)
      alert("새로고침 해주세요.")
     }
  }
  

}


      
function rememberNum(){    
       if(setNum===null){
        loginNum.classList.remove(HIDDEN_CONST2)
          } else {
            loginNum.classList.add(HIDDEN_CONST2)
            greeting2.classList.remove(HIDDEN_CONST2)
       
            }
}

 


function getClock() {
  const date = new Date();
  const target = new Date(setNumber);
  const dDay = target - date;

  

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;

  const days = String(parseInt(Math.ceil(dDay / day)))
    .padStart(3, "0")
    .padEnd(4, "일");

  const hours = String(parseInt(Math.ceil(dDay % day) / hour))
    .padStart(2, "0")
    .padEnd(3, "시간");
  const min = String(parseInt(Math.ceil((dDay % day) % hour) / minute))
    .padStart(2, "0")
    .padEnd(3, "분");
  const sec = String(
    parseInt((Math.ceil((dDay % day) % hour) % minute) / second)
  )
    .padStart(2, "0")
    .padEnd(3, "초");

    greeting2.innerText = `${days} ${hours} ${min} ${sec}`;

}

rememberNum();
getClock();
setInterval(getClock,1000);
