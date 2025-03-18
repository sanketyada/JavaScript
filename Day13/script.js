function bimshower(text){
    let h3=document.querySelector('#bmiinfo')
    h3.innerHTML=text
}
let p=document.querySelector('.bmi')
function show(val){
    if(val < 18.5){
        p.innerHTML=val
        bimshower("Underweight")
    }
    else if(val>=18.5 && val<=24.9){
        p.innerHTML=val
        bimshower("Normal Weight")
    }
    else if(val>=25 && val<=29.9){
        p.innerHTML=val
        bimshower("Overweight")
    }
    else{
        p.innerHTML=val
        bimshower("Obasity")
    }
}

let form=document.querySelector('form')
form.addEventListener('submit',(item)=>{
    item.preventDefault();
    let weight=parseInt(document.querySelector('#weight').value)
    let height=parseInt(document.querySelector('#height').value)

    if(weight==="" || weight <=0 ||isNaN(weight)){
        console.log("Weight issue")
    }
    else if(height==="" || height <=0 ||isNaN(height)){
        console.log("height iss")
    }
    else{
        let heightMeters = height * 0.3048;
        let bmi = weight / (heightMeters * heightMeters);
        console.log(weight)
        console.log(height)
        console.log(bmi)
        show(bmi)
    }
})