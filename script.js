  // Get the photo modal area
  var modal = document.getElementById("photo-modal");
  // Get the expanded image
  var modalImg = document.getElementById("image");
  // Get the image text
  var captionText = document.getElementById("caption");

// Display the photo modal with caption when clicked
function showModal(imgs) {
  modal.style.display = "block";
  modalImg.src = imgs.src;
  captionText.innerHTML = imgs.alt;
}

// Turn off the photo modal when click outside the photo
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


// Form elements validation


// Form elements validation
function validateForm(){
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email= document.getElementById("email");
  var phoneNumber= document.getElementById("phoneNumber");
  var numbers = /^[0-9]+$/;
  var letters = /^[A-Za-z]+$/;

  var error = document.getElementById("error");
  var status=true;
  error.innerHTML = "";

  // ES6 Feature: Template String 
  /*First name length validation */
  if (firstName.value.length < 2) {
    error.innerHTML += `Your first name must contain 2 or more characters. "${firstName.value}" is not valid.<br>`;
    status=false;
}

/*First name letters validation */
if(firstName.value!=null && !firstName.value.match(letters)){
    error.innerHTML+=`Your first name must contain alpha characters only. "${firstName.value}" is not valid. <br>`;
    status=false;
}

/*Last name length validation */
if (lastName.value.length < 2) {
    error.innerHTML+=`Your last name must contain 2 or more characters. "${lastName.value}" is not valid. <br>`;
    status=false;
}

/*Last name letters validation */
if(lastName.value!=null && !lastName.value.match(letters)){
    error.innerHTML+=`Your last name must contain alpha characters only. "${lastName.value}" is not valid. <br>`;
    status=false;
}

//Email validation
if(!email.value.includes("@")){
  error.innerHTML+= `Your Email address "${email.value}" is not valid. <br>`;
  status=false;
}

//Phone number validation
if(!phoneNumber.value.match(numbers)){
  error.innerHTML+=`Your phone number must contain numbers only."${phoneNumber.value}" is not valid. <br>`;
  status=false;
}

//Phone number length validation
if(phoneNumber.value.length<4){
  error.innerHTML+=`Your phone number must have at least 4 numbers."${phoneNumber.value}" is not valid. <br>`;
  status=false;
}

return status;
}


// Course Class in Transcript
class Course {

  //course number, course name, course grade
  constructor(code, name, grade) {
    this.code=code;
    this.name=name;
    this.grade=grade;
  }
}

// Transcript Vue App  
var app=new Vue({
  el:'#app',
  data: {

    //search v-model
    search:'',

    transcripts:
    [
      {
        //transcript display status
        showTranscript:false,

        level:"Under-Graduate",
        school:"Nanjing University of Aeronautics and Astronautics",
        program:"Air Transportation",
        type:"BS",
        year:2016,
        courses:[
          new Course(
            'CCA301',
            'Air Traffic Management',
            3.7
          ),
          new Course(
            'CCA325',
            'Civil Aviation Safety',
            3.6
          ),
          new Course(
            'CCA411',
            'Aeronautical Information Service',
            3.5
          ),
          new Course(
            'CCA501',
            'Aircraft System',
            4.0
          ),
          new Course(
            'CCA526',
            'Aviation Chart',
            3.5
          ),
          new Course(
            'CCA611',
            'Aviation Regulations',
            3.4
          ),
          new Course(
            'CCA680',
            'Aeronautical Meterology',
            3.9
          ),
        ]
      },
      {
        //transcript display status
        showTranscript:false,

        level:"Post-Graduate",
        school:"Boston University",
        program:"Software Development",
        type:"MS",
        year:2022,
        courses:[
          new Course(
            'METCS521',
            'Information System with Python',
            4.0
          ),
          new Course(
            'METCS526',
            'Data Structure & Algorithm',
            4.0
          ),
          new Course(
            'METCS664',
            'Artificial Intelligence',
            3.7
          ),
          new Course(
            'METCS625',
            'Advanced Programming',
            4.0
          )
        ]
      }   
  ]
},

methods:{

    // Reverse the transcript display status
    toggleShowTranscript:function(i){
      this.transcripts[i].showTranscript = !this.transcripts[i].showTranscript
    },

    // Calculate the average GPA
    calculateGPA:function(transcript){

      /* ES6 Feature: Let */
      let sum = 0;
      let length = transcript.courses.length;

      /* ES6 Feature: Iterator, Const */
      for( const course of transcript.courses) {
          sum +=parseFloat(course.grade)
      }
      // Keep one decimal place
      return (sum/length).toFixed(1);
    },

    // Filter the course list
    filteredList:function(transcript) {

      // ES6 Feature: Arrow Function
      return transcript.courses.filter(course => {

        //Only show the course number or course name includes the search term
        return course.name.toLowerCase().includes(this.search.toLowerCase()) || 
        course.code.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})

