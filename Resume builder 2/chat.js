// Add a function to toggle the top navigation bar on small screens
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // Add a function to add a new job to the work experience section
  function addJob() {
    // Get the job details
    var title = document.getElementById("job-title").value;
    var dates = document.getElementById("job-dates").value;
    var description = document.getElementById("job-description").value;
  
    // Create a new list item for the job
    var job = document.createElement("li");
    job.classList.add("job");
    job.innerHTML = `
      <div class="title">${title}</div>
      <div class="dates">${dates}</div>
      <p class="description">${description}</p>
    `;
  
    // Add the job to the work experience section
    var workExperience = document.querySelector(".resume .section:first-of-type .section-content");
    workExperience.appendChild(job);
  
    // Clear the form fields
    document.getElementById("job-form").reset();
  }
  
  // Add a function to add a new education item to the education section
  function addEducation() {
    // Get the education details
    var degree = document.getElementById("education-degree").value;
    var dates = document.getElementById("education-dates").value;
    var school = document.getElementById("education-school").value;
  
    // Create a new list item for the education
    var education = document.createElement("li");
    education.classList.add("education");
    education.innerHTML = `
      <div class="degree">${degree}</div>
      <div class="dates">${dates}</div>
      <div class="school">${school}</div>
    `;
  
    // Add the education to the education section
    var educationSection = document.querySelector(".resume .section:nth-of-type(2) .section-content");
    educationSection.appendChild(education);
  
    // Clear the form fields
    document.getElementById("education-form").reset();
  }
  
  // Add a function to add a new skill to the skills section
  function addSkill() {
    // Get the skill details
    var name = document.getElementById("skill-name").value;
    var percentage = document.getElementById("skill-percentage").value;
  
    // Create a new div for the skill
    var skill = document.createElement("div");
    skill.classList.add("skill");
    skill.innerHTML = `
      <div class="name">${name}</div>
      <div class="percentage">${percentage}%</div>
    `;
  
    // Add the skill to the skills section
    var skillsSection = document.querySelector(".resume .section:nth-of-type(3) .skills");
   
  }  