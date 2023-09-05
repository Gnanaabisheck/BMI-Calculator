function display(){
    let h=Number(document.getElementById("height").value)
    let weight=Number(document.getElementById("weight").value)
    let text =document.querySelector(".text")
    let name= (document.getElementById("name").value)
    let age = (document.getElementById("age").value)
    let u="Under weight"
    let he= "healthy weight keep it up"
    let o="over weight"
    let oo="obese"
    let gogym
    let gym=" request you to go to gym"
    let height=h/100
    let bmi=(weight/(height*height)).toFixed(1)
    
    if(bmi < 18.5 )
    { result=u
      gogym=gym}
      else if( bmi >=18.5 && bmi <=24.9)
      {
        result=he
        gogym=gym
      }
      else if( bmi > 24.9 && bmi <= 29.9)
      {
         result = o
         gogym=gym
      }
      else if (bmi > 29.9){
        result=oo
        gogym=gym
      }
      else{
        
      }

    text.innerHTML=`Hello ${name} your body mass index value is ${bmi} which is ${result} and ${gogym} and eat protein rich food to live a healthy life thanks for visting our site you are always welcome `


}