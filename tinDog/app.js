const hamburger = document.getElementById('hamburger') 
const navUl =  document.getElementById('navbarList')

hamburger.addEventListener('click', ()=> {
   navUl.classList.toggle('show')
})

function validateForm() {
   let input = document.forms['theForm']['firstName'].value;
   let invalidChoice = document.getElementById('invalidChoice')
   if (input == '') {
      invalidChoice.innerHTML = "Your name cannot be blank."
      return false;
   } else {
      invalidChoice.innerHTML = "Good for you."
      return false;
   }
}
