
var sub = document.getElementById("sub")

sub.addEventListener("click", function() {
  document.querySelector("#personal").classList.add("active")
  document.querySelector("#field1").style.display = "none"
  document.querySelector("#field2").style.display = "block"
})


var sub1 = document.getElementById("sub1")

sub1.addEventListener("click", function() {
  document.querySelector("#professional").classList.add("active")
  document.querySelector("#field2").style.display = "none"
  document.querySelector("#field3").style.display = "block"
})

var sub2 = document.getElementById("sub2")

sub2.addEventListener("click", function() {
  document.querySelector("#confirm").classList.add("active")
  document.querySelector(".title").style.display = "none"
  document.querySelector("#field3").style.display = "none"
  document.querySelector("#field4").style.display = "block"
})


// Go to back


var back1 = document.getElementById("back1")

back1.addEventListener("click", function() {
  document.querySelector("#personal").classList.remove("active")
  document.querySelector("#field1").style.display = "block"
  document.querySelector("#field2").style.display = "none"
})

var back2 = document.getElementById("back2")

back2.addEventListener("click", function() {
  document.querySelector("#professional").classList.remove("active")
  document.querySelector("#field3").style.display = "none"
  document.querySelector("#field2").style.display = "block"
})

// form value print in console


function form1(){
  var form = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      }
     
  console.log("Account Information ", form)
}
  sub.addEventListener('click' , form1)

  function form2(){
    var form = {
        office: document.getElementById('office').value,
        address1: document.getElementById('address1').value,
        address2: document.getElementById('address2').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        postCode: document.getElementById('postCode').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        }
       
    console.log("Personal Information ", form)
  }
    sub1.addEventListener('click' , form2)

    function form3(){
      var form = {
          job: document.getElementById('job').value,
          address1: document.getElementById('jobTitle').value,
          address2: document.getElementById('experience').value,
          city: document.getElementById('dob').value,
          state: document.getElementById('age').value,
          country: document.getElementById('file').value,
          }
         
      console.log("Professional Information ", form)
    }
      sub2.addEventListener('click' , form3)