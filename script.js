
const data = {
  users: [
    {
      username: "juelfa",
      password: "jelek123",
      name: "Juelfa Hasanah Pacar Pikar Ganteng",
      class: "Staff Biro Internal",
      grades: {
        q1: { Keaktifan: 85, Kontribusi: 90, Kehadiran: 89 },
        q2: { Keaktifan: 100, Kontribusi: 85, Kehadiran: 95 },
        q3: { Keaktifan: 89, Kontribusi: 95, Kehadiran: 98 }
      }
    },
     {
      username: "itofikrin",
      password: "pikarganteng",
      name: "Hasna pacar siapa ya? Pacar PIKAR bukan ALVIN",
      class: "Staff Biro Internal",
      grades: {
        q1: { Keaktifan: 100, Kontribusi: 90, Kehadiran: 89 },
        q2: { Keaktifan: 100, Kontribusi: 85, Kehadiran: 95 },
        q3: { Keaktifan: 89, Kontribusi: 95, Kehadiran: 1000 }
      }
    },
     {
      username: "rismada",
      password: "datuljelek",
      name: "Rismadatul Amalia Sofa",
      class: "Staff Biro Internal",
      grades: {
        q1: { Keaktifan: 100, Kontribusi: 90, Kehadiran: 89 },
        q2: { Keaktifan: 100, Kontribusi: 85, Kehadiran: 95 },
        q3: { Keaktifan: 200, Kontribusi: 95, Kehadiran: 98 }
      }
    }
  ]
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = data.users.find(u => u.username === username && u.password === password);
  if (user) {
    showReport(user);
  } else {
    alert("kamu belum ada akun nya ya wkwkkwk!");
  }
});

function showReport(user) {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("report").classList.remove("hidden");
  document.getElementById("studentName").textContent = `Selamat datang, ${user.name}`;
  document.getElementById("studentFullName").textContent = user.name;
  document.getElementById("studentClass").textContent = user.class;

  const viewReportBtn = document.getElementById("viewReportBtn");
  const personalDataBtn = document.getElementById("personalDataBtn");

  personalDataBtn.addEventListener("click", () => {
    document.getElementById("personalData").classList.remove("hidden");
    document.getElementById("gradesReport").classList.add("hidden");
  });

  viewReportBtn.addEventListener("click", () => {
    const quarter = document.getElementById("quarterSelect").value;
    const subjectsList = document.getElementById("subjects");
    subjectsList.innerHTML = "";

    for (const [subject, grade] of Object.entries(user.grades[quarter])) {
      const li = document.createElement("li");
      li.textContent = `${subject}: ${grade}`;
      subjectsList.appendChild(li);
    }

    document.getElementById("gradesReport").classList.remove("hidden");
    document.getElementById("personalData").classList.add("hidden");
  });
}

function logout() {
  document.getElementById("report").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
