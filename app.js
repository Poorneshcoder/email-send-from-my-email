

const name = document.getElementById('name');
const eamil = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementById('submit');



submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h3>Name: ${name.value}</h3>
    <br>
    <h3>Email: ${eamil.value}</h3>
    <br>
    <h3>Phone number: ${phone.value}</h3>
    <br>
    <h3>Message: ${message.value}</h3>
    `;

    function validForm(){

      const user = document.forms.RegForm.name.value;
      const email = document.forms.RegForm.email.value;
      const phone = document.forms.RegForm.phno.value;
      const message = document.forms.RegForm.message.value;
  
  
      
        //Javascript reGex for Email Validation.
        const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
        // Javascript reGex for Phone Number validation.
        const regPhone=/^\d{10}$/;                       
        // Javascript reGex for Name validation
        const regName = /\d+$/g;  
      
        if (user == '' || regName.test(user)){
          alert('Please enter your name')
          user.focus();
          return false;
        }
        if(email =='' || !regEmail.test(email)){
          alert('please enter your valid e-mail address')
          email.focus();
          return false;
        }
      
        if(phone == '' || !regPhone.test(phone)){
          alert('please enter valid phone number')
          phone.focus()
          return false
        }
        if(message == ''){
          alert('please enter message')
          message.focus()
          return false
        }
  
        alert('your form is submitted successfully')
        return true;
      
      }

     

  if(validForm()==true){
    
    Email.send({
        SecureToken : "512ed4bb-0276-47f5-a87b-d9f7e636d11c", //add your token here
        To : 'eswar.poorna234@gmail.com', 
        From : "eswar.chinni354@gmail.com",
        Subject : "Someone Submit Your Form!",
        Body : ebody
    }).then(
      message => alert(message),
      
      
    );
  

    
  }

  if(submit.addEventListener() == true){
    function sucessPage(){
      return window.location = "sucess.html"
    }
    sucessPage()
  }


   
  
  
});










submit.addEventListener()




    

    