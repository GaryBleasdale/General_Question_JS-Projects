let openQuestion = document.body.querySelectorAll(".fa-square-plus")
let answer = document.body.querySelectorAll(".answer")
let closeQuestion = document.body.querySelectorAll(".fa-square-minus")


openQuestion.forEach(function(element, index){
  openQuestion[index].addEventListener("click", function(){
    answer[index].style.display = "block"
    closeQuestion[index].style.display = "inline"
    openQuestion[index].style.display = "none"
 
})})

closeQuestion.forEach(function(element, index){
  closeQuestion[index].addEventListener("click", function(){
    answer[index].style.display = "none"
    closeQuestion[index].style.display = "none"
    openQuestion[index].style.display = "inline"
 
 })
})

