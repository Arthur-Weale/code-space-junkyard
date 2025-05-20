// function sayHi(phrase, who){
//     window.alert(phrase+ " " + who)
// }

//setTimeout(sayHi, 1000, "hELLo", "John")


//setTimeout(() => alert(1+1), 1000)

// let timerId = setTimeout(()=> alert("never happens"), 1000)
// alert(timerId);

// clearTimeout(timerId)
// alert(timerId)

// let timerId = setInterval(()=> alert(`tick`), 2000)

// setTimeout(() => {
//     clearInterval(timerId);
//     alert(`stop`);
// }, 5000)

//Loop

// let timerId = setTimeout(function tick(){
//     alert("tick")
//     timerId = setTimeout(tick, 2000)
// }, 2000)

const countDisplay = document.getElementById("countdown");
const start = document.getElementById("startButton");
const stop = document.getElementById("stopButton");


let startTime = 10

start.addEventListener("click", () =>{
    setInterval(()=>{
        if(startTime >=0){
            countDisplay.textContent = startTime
            startTime--
        }
        else{
            countDisplay.textContent = "Time Up"
        }
    }, 1000)
})


