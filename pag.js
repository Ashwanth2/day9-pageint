next = document.querySelector('[for="Next"]')
next.addEventListener('click',()=>{
    arr = [1,2,3]
    for (let i of arr){
        element=document.querySelector(`[for="${i}"]`)
        element.innerText=Number(element.innerText) + 3

        console.log(element);
    }
})


previous = document.querySelector('[for="previous"]')
previous.addEventListener('click',()=>{
    arr = [1,2,3]
    for (let i of arr){
        element=document.querySelector(`[for="${i}"]`)
        element.innerText=Number(element.innerText) - 3
        console.log(element);
    }
})



