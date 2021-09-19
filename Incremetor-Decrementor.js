// const add = document.querySelector('.add');
// const subtract = document.querySelector('.subtract');
// const reset = document.querySelector('.reset');
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons')

// NOTE: 
/*
1. We can use the function .getElementByClass() also but the return value of the class is HTMLCollction
    that is an array of the value having nodelist for all the class with that name.

2. We need to use loop to access element of nodelist returned by .getElementByClass() function.

3. .querySelector() return the first value that it gets in the DOM with that given class name.
*/

// console.log(count);
// console.log(add);
// console.log(subtract);
// console.log(reset);
// console.log(buttons);


// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// subtract.addEventListener('click', () => {
//     count.innerHTML--;
// });

// reset.addEventListener('click', () => {
//     count.innerHTML = 0;
// });


// NOTE: 
/*
1. Above approach is okay but the below approach is best for these scenarios. Below, we are using
    evenListner only but with the concept of eventDeligation. 

2. Here, we are selecting the parent div which is having all the buttons as its children.
    And we are putting evenlistener directly on the parent div that has all the direct child buttons.

3. This approach is more professional and readable.

*/

buttons.addEventListener('click', (event_param) => {
    console.log(event_param)
    if(event_param.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
    }
    if(event_param.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor()
    }
    if(event_param.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor()
    }
});


function setColor(){
    if(count.innerHTML >= 0){
        count.style.color = 'white';
    }
    else{
        count.style.color = 'orangered'
    }
}
