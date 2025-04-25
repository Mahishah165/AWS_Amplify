function login() {
    const name = document.getElementById("studentName").value;
    if (name) {
      localStorage.setItem("studentName", name);
      localStorage.setItem("subjects", JSON.stringify([])); // reset on login
      window.location.href = "profile.html";
    } else {
      alert("Please enter your name");
    }
  }
  
  function addSubject() {
    const subject = document.getElementById("subject").value;
    const marks = document.getElementById("marks").value;
  
    if (subject && marks) {
      const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
      subjects.push({ subject, marks });
      localStorage.setItem("subjects", JSON.stringify(subjects));
      displaySubjects();
      document.getElementById("subject").value = '';
      document.getElementById("marks").value = '';
    }
  }
  
  function displaySubjects() {
    const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
    const list = document.getElementById("subjectList");
    list.innerHTML = '';
    subjects.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.subject}: ${item.marks}`;
      list.appendChild(li);
    });
  }
  
  window.onload = function () {
    const welcome = document.getElementById("welcome");
    if (welcome) {
      const name = localStorage.getItem("studentName");
      welcome.textContent = `Welcome, ${name}`;
      displaySubjects();
    }
  }
  