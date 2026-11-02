const dropdown = document.querySelector(".dropdown");
const dropButton = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropButton.addEventListener("click", function (event) {
  event.stopPropagation();

  const isOpen = dropdown.classList.toggle("active");

  dropButton.setAttribute("aria-expanded", isOpen);
});

dropdownMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
    dropButton.focus();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mainCard = document.getElementById("mainCard");
  const thumbnails = document.querySelectorAll(".thumbnail");

  const images = ["assets/UTS.png", "assets/ferson2.png", "assets/SKD.jpg"];

  function selectPhoto(index) {
    const order = [
      images[index],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
    ];

    mainCard.querySelector(".layer-1").src = order[0];
    mainCard.querySelector(".layer-2").src = order[1];
    mainCard.querySelector(".layer-3").src = order[2];

    thumbnails.forEach(function (thumbnail, i) {
      thumbnail.classList.toggle("active", i === index);
    });
  }

  thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("mouseenter", function () {
      mainCard.classList.add("preview-active");
    });

    thumbnail.addEventListener("click", function () {
      selectPhoto(index);
      mainCard.classList.remove("preview-active");
    });
  });

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      selectPhoto(Number(thumbnail.dataset.index));
    });
  });

  mainCard.addEventListener("mouseenter", function () {
    mainCard.closest(".gallery-wrapper").classList.add("show-thumbnails");
  });

  const galleryWrapper = mainCard.closest(".gallery-wrapper");

  galleryWrapper.addEventListener("mouseleave", function () {
    galleryWrapper.classList.remove("show-thumbnails");
  });

  thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      selectPhoto(index);
    });
  });

  selectPhoto(0);
});

const projectTrack = document.getElementById("projectTrack");
const projectCards = document.querySelectorAll(".project-card");

const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");

const projectCounter = document.getElementById("projectCounter");
const projectDots = document.getElementById("projectDots");

let currentProject = 0;
const totalProjects = projectCards.length;

projectCards.forEach((card, index) => {
  const dot = document.createElement("span");

  dot.classList.add("project-dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  projectDots.appendChild(dot);
});

function updateProject() {
  projectTrack.style.transform = `translateX(-${currentProject * 100}%)`;

  projectCounter.textContent = `${currentProject + 1} / ${totalProjects}`;

  prevProject.disabled = currentProject === 0;
  nextProject.disabled = currentProject === totalProjects - 1;

  document.querySelectorAll(".project-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentProject);
  });
}

nextProject.addEventListener("click", () => {
  if (currentProject < totalProjects - 1) {
    currentProject++;
    updateProject();
  }
});

prevProject.addEventListener("click", () => {
  if (currentProject > 0) {
    currentProject--;
    updateProject();
  }
});

updateProject();

function checkInfo() {
  const infoInput = document.getElementById("txtInfo").value;
  const infoResult = document.getElementById("infoResult");
  const description = document.getElementById("Description");
  if (infoInput === "Name") {
    infoResult.textContent = "Kirby Isaah Tubo.";
    infoResult.style.color = "white";
  } else if (infoInput === "Age") {
    infoResult.textContent = "20 years old.";
    infoResult.style.color = "white";
  } else if (infoInput === "Birthplace") {
    infoResult.textContent = "lipa, batangas.";
    infoResult.style.color = "white";
  } else if (infoInput === "Address") {
    infoResult.textContent = "Candelaria, Quezon, MaryLand Homes.";
    infoResult.style.color = "white";
  } else if (infoInput === "School") {
    infoResult.textContent = "Sariaya, CSTC.";
    infoResult.style.color = "white";
  } else if (infoInput === "Email") {
    infoResult.textContent = "tubokirbyisaiah@gmail.com";
    infoResult.style.color = "white";
  } else if (infoInput === "Year") {
    infoResult.textContent = "2nd Year.";
    infoResult.style.color = "white";
  } else if (infoInput === "Course") {
    infoResult.textContent = "Bachelor of Science in Computer Science";
    infoResult.style.color = "white";
  } else if (infoInput === "Interest") {
    infoResult.textContent =
      "Web Development, Game Development, and Software Development.";
    infoResult.style.color = "white";
  } else if (infoInput === "Country") {
    infoResult.textContent = "Philippines";
    infoResult.style.color = "white";
  } else if (infoInput === "Info") {
    description.textContent =
      "You can enter: Name, Age, Birthplace, Address, School, Email, Year, Course, Interest, Country, Infoall.";
    description.style.color = "black";
    description.innerHTML = `
      <span style="color: white;">You can enter:</span>
    <span style="color: black;">
        Name, Age, Birthplace, Address, School, Email, Year, Course, Interest, Country,
    </span>
    <span style="color: red; font-weight: bold;">Infoall.</span>`;
    description.style.backgroundColor = "#a5b4c88c";
    description.style.padding = "10px";
    description.style.borderRadius = "5px";
    description.style.width = "300px";
    description.style.margin = "0 auto";
    description.style.textAlign = "center";
  } else if (infoInput === "Infoall") {
    let name = "Kirby Isaah Tubo.";
    let age = "20 years old.";
    let birthplace = "lipa, batangas.";
    let address = "Candelaria, Quezon, MaryLand Homes.";
    let school = "Sariaya, CSTC.";
    let email = "tubokirbyisaiah@gmail.com";
    let year = "2nd Year.";
    let course = "Bachelor of Science in Computer Science";
    let interest =
      "Web Development, Game Development, and Software Development.";
    let country = "Philippines";
    let table = document.createElement("table");
    table.id = "infoTable";
    table.innerHTML = `
        <tr>
          <th style="color: lightgray;">Name</th>
          <td style="color: white;">${name}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Age</th>
          <td style="color: white;">${age}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Birthplace</th>
          <td style="color: white;">${birthplace}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Address</th>
          <td style="color: white;">${address}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">School</th>
          <td style="color: white;">${school}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Email</th>
          <td style="color: white;">${email}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Year</th>
          <td style="color: white;">${year}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Course</th>
          <td style="color: white;">${course}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Interest</th>
          <td style="color: white;">${interest}</td>
        </tr>
        <tr>
          <th style="color: lightgray;">Country</th>
          <td style="color: white;">${country}</td>
        </tr>
      `;
    const description = document.getElementById("Description");
    const infotable = document.getElementById("infoTable");

    description.innerHTML = "";
    description.appendChild(table);
    description.style.backgroundColor = "#a5b4c88c";
    description.style.padding = "10px";
    description.style.borderRadius = "5px";
    description.style.width = "100%";
    description.style.maxWidth = "680px";
    description.style.boxSizing = "border-box";
    description.style.margin = "0 auto";
    description.style.textAlign = "center";
  } else {
    infoResult.textContent = "Please enter some information.";
    infoResult.style.color = "red";
  }

  const displayInfo = document.getElementById("Display-Info");
  displayInfo.innerHTML = `
    <span style="color: white;">Enter The:"</span>
    <span style="color: red;">Info</span>
    <span style="color: white;">"Displaying Information</span>
  `;
  displayInfo.style.backgroundColor = "#a5b4c88c";
  displayInfo.style.padding = "10px";
  displayInfo.style.borderRadius = "15px";
  displayInfo.style.width = "300px";
  displayInfo.style.margin = "0 auto";
  displayInfo.style.textAlign = "center";

  if (infoInput === "Info" || infoInput === "Infoall") {
    displayInfo.textContent = "";
    displayInfo.style.background = "";
  }
}
