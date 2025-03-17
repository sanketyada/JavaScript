// let yellow=document.getElementById('yellow')
// yellow.addEventListener('click',()=>{
//     document.body.style.backgroundColor='yellow'
//     console.log("List")
// })
// let teal=document.getElementById('Teal')
// teal.addEventListener('click',()=>{
//     document.body.style.backgroundColor='teal'
//     console.log("List")
// })
// let Red=document.getElementById('Red')
// Red.addEventListener('click',()=>{
//     document.body.style.backgroundColor='red'
//     console.log("List")
// })
// let Blue=document.getElementById('Blue')
// Blue.addEventListener('click',()=>{
//     document.body.style.backgroundColor='blue'
//     console.log("List")
// })

let button=document.querySelectorAll('.button')
let body=document.querySelector('body')
button.forEach((item)=>{
    // item.addEventListener('click',(e)=>{
    //    if(e.target.id=='yellow'){
    //     body.style.backgroundColor=e.target.id
    //    }
    // })
    // item.addEventListener('click',(e)=>{
    //     if(e.target.id=='teal'){
    //      body.style.backgroundColor=e.target.id
    //     }
    // })
    // item.addEventListener('click',(e)=>{
    //     if(e.target.id=='red'){
    //      body.style.backgroundColor=e.target.id
    //     }
    // })
    // item.addEventListener('click',(e)=>{
    //     if(e.target.id=='blue'){
    //      body.style.backgroundColor=e.target.id
    //     }
    //  })
    item.addEventListener('click',(e)=>{
    console.log(e.target.id)
    switch (e.target.id) {
        case 'yellow':
            body.style.backgroundColor=e.target.id
            break;
        case 'red':
            body.style.backgroundColor=e.target.id
            break;               
        case 'teal':
            body.style.backgroundColor=e.target.id
            break;               
        case 'blue':
            body.style.backgroundColor=e.target.id
            break;               
        case 'pink':
            body.style.backgroundColor=e.target.id
            break;               
            
    
        default:
            break;
    }
     })
    
});