const inputs = document.querySelector(".inputs");
const output = document.querySelector(".output");

let inputShow = true;

let workexpDetails;
let eduDetails;
let projectsDetails;
let ADetails;
let LDetails;
let aboutDetails;
let CDetails;
let SDetails;

ClassicEditor
        .create( inputs["workexp"] )
        .then(newEditor =>{
          workexpDetails= newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["edu"] )
        .then(newEditor=>{
          eduDetails=newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["projects"] )
        .then(newEditor =>{
          projectsDetails= newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["achivements"] )
        .then(newEditor=>{
          aDetails=newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["contact"] )
        .then(newEditor=>{
          CDetails=newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["about"] )
        .then(newEditor =>{
          aboutDetails= newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

ClassicEditor
        .create( inputs["links"] )
        .then(newEditor=>{
          LDetails=newEditor;
        })
        .catch( error => {
            console.error( error );
        } );
ClassicEditor
        .create( inputs["skills"] )
        .then(newEditor=>{
          SDetails=newEditor;
        })
        .catch( error => {
            console.error( error );
        } );

function preview() {
  if (inputShow) {
    inputs.style.display = "none";

    inputShow = false;

    output.innerHTML = `
    <div class="after_preview">
      <div class="hero">
          <div class="unique">
          <h1>${inputs["ename"].value}</h1>
          <h3>${inputs["title"].value}<h3>
      </div>
        <div id="ct">
          <h2>CONTACT</h2>
              <p>${CDetails.getData()}</p>
        </div>
      </div>
        
        <div class="main">
            <div>
                  <h2>ABOUT ME</h2>
                  ${aboutDetails.getData()}

                  <h2>EDUCATION</h2>
                  ${eduDetails.getData()}

                  <h2>SKILLS</h2>
                  ${SDetails.getData()}

                  <h2>LINKS</h2>
                  ${LDetails.getData()}

            </div>
                
            <div>
              <h2>PROJECTS</h2>
              ${projectsDetails.getData()}

              <h2>WORK EXPERIENCE</h2>
              ${workexpDetails.getData()}

              <h2>ACHIVEMENTS AND CERTIFICATES</h2>
              ${aDetails.getData()}

            
            </div>
        
    </div>
      

        `;
  }
}
function edit() {
  inputs.style.display = "block";
  inputShow = true;
  output.innerHTML = "";
}
