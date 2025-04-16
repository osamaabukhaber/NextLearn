document.addEventListener("DOMContentLoaded", function () {
  console.log("session.js loaded");
  document.getElementById("year").textContent = new Date().getFullYear();
  let selectedCourse = JSON.parse(localStorage.getItem("selectedCourse"));
  if (!selectedCourse) {
    console.log("No data in localStorage, using fallback data");
    selectedCourse = {
      name: "Sample Course",
      groupName: "Group:Sample",
      instructor: "Sample Instructor",
      startDate: "2024-01-01",
      endDate: "2024-06-01",
      numStudents: 3,
      price: "100 $",
    };
  }
  const sessionDetails = document.getElementById("sessionDetails");
  if (!sessionDetails) {
    console.error("sessionDetails element not found");
    return;
  }
  if (selectedCourse) {
    const sessionHeader = document.createElement("header");
    sessionHeader.innerHTML = `<h1>${selectedCourse.name}</h1>`;
    document.body.insertBefore(
      sessionHeader,
      document.querySelector(".container")
    );
    const groupName = document.createElement("p");
    groupName.textContent = `Group Name: ${selectedCourse.groupName}`;
    groupName.className = "session-card";

    const examsContainer = document.createElement("div");
    examsContainer.className = "session-card";
    const examsLabel = document.createElement("p");
    examsLabel.textContent = "Exams";
    examsLabel.style.margin = "0 10px 0 0";
    examsLabel.style.fontSize = "16px";
    examsLabel.style.color = "#333";
    const viewExamsButton = document.createElement("button");
    viewExamsButton.textContent = "View Exams";
    viewExamsButton.className = "session-button";
    viewExamsButton.addEventListener("click", () => {
      localStorage.setItem("examCourse", selectedCourse.name);
      window.location.href = "./exam.html";
    });

    examsContainer.appendChild(examsLabel);
    examsContainer.appendChild(viewExamsButton);

    const startDate = document.createElement("p");
    startDate.textContent = `Start Date: ${selectedCourse.startDate}`;
    startDate.className = "session-card";
    const endDate = document.createElement("p");
    endDate.textContent = `End Date: ${selectedCourse.endDate}`;
    endDate.className = "session-card";
    const onlineVideo = document.createElement("p");
    onlineVideo.textContent = "Online Video:";
    onlineVideo.className = "session-card";
    const videoPlaceholder = document.createElement("div");
    videoPlaceholder.style.width = "100%";
    videoPlaceholder.style.height = "200px";
    videoPlaceholder.style.backgroundColor = "#000";
    videoPlaceholder.style.color = "Black";
    videoPlaceholder.style.display = "flex";
    videoPlaceholder.style.alignItems = "center";
    videoPlaceholder.style.justifyContent = "center";
    videoPlaceholder.style.margin = "10px 0";
    videoPlaceholder.className = "session-card";
    videoPlaceholder.setAttribute("title", "Video placeholder");

    const youtubeIframe = document.createElement("iframe");
    youtubeIframe.width = "100%";
    youtubeIframe.height = "200";
    youtubeIframe.src = "https://www.youtube.com/embed/W6NZfCO5SIk?si=itc1IsYaBfjqJqnc";
    youtubeIframe.title = "YouTube video player";
    youtubeIframe.allowFullscreen = true;

    videoPlaceholder.appendChild(youtubeIframe);

    sessionDetails.appendChild(groupName);
    sessionDetails.appendChild(examsContainer);
    sessionDetails.appendChild(startDate);
    sessionDetails.appendChild(endDate);
    sessionDetails.appendChild(onlineVideo);
    sessionDetails.appendChild(videoPlaceholder);

    
    const feedbackButton = document.createElement("button");
    feedbackButton.textContent = "Give Feedback";
    feedbackButton.className = "session-button";
    feedbackButton.addEventListener("click", () => {
      window.location.href = "../feedback-form/feedback.html";
    });

    sessionDetails.appendChild(feedbackButton);
  } else {
    const fallback = document.createElement("p");
    fallback.textContent =
      "No course selected. Please go back and select a course.";
    sessionDetails.appendChild(fallback);
  }

  function applyCardStyles(element) {
    element.style.background = "#F9F9F9";
    element.style.border = "1px solid #036AFF";
    element.style.borderRadius = "8px";
    element.style.padding = "15px";
    element.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    element.style.transition = "transform 0.3s, box-shadow 0.3s";
    element.addEventListener("mouseover", () => {
      element.style.transform = "scale(1.05)";
      element.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    });
    element.addEventListener("mouseout", () => {
      element.style.transform = "scale(1)";
      element.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  }

  function applyButtonStyles(button) {
    button.style.backgroundColor = "#036AFF";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    button.style.transition =
      "background-color 0.3s, transform 0.2s, box-shadow 0.2s";
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#024DBA";
      button.style.transform = "scale(1.05)";
      button.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#036AFF";
      button.style.transform = "scale(1)";
      button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  }

  const sessionCards = document.querySelectorAll(".session-card");
  sessionCards.forEach(applyCardStyles);

  const sessionButtons = document.querySelectorAll(".session-button");
  sessionButtons.forEach(applyButtonStyles);
  document.body.style.fontFamily = "'Circular Std', sans-serif";
  document.body.style.color = "#191818";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.minHeight = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.position = "relative";

  const backgroundLayer = document.querySelector(".background-layer");
  backgroundLayer.style.position = "fixed";
  backgroundLayer.style.top = "0";
  backgroundLayer.style.left = "0";
  backgroundLayer.style.width = "100%";
  backgroundLayer.style.height = "100%";
  backgroundLayer.style.backgroundImage =
    "url('https://identity.iti.gov.eg/images/ITI%20logo.png')";
  backgroundLayer.style.backgroundRepeat = "no-repeat";
  backgroundLayer.style.backgroundPosition = "center";
  backgroundLayer.style.backgroundSize = "contain";
  backgroundLayer.style.opacity = "0.1";
  backgroundLayer.style.zIndex = "-1";

  const container = document.querySelector(".container");
  container.style.maxWidth = "600px";
  container.style.width = "90%";
  container.style.margin = "40px auto";
  container.style.padding = "20px";
  container.style.textAlign = "center";
  container.style.flex = "1";
  container.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";

  const sessionDetailsContainer = document.getElementById("sessionDetails");
  sessionDetailsContainer.style.display = "grid";
  sessionDetailsContainer.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(250px, 1fr))";
  sessionDetailsContainer.style.gap = "20px";
  sessionDetailsContainer.style.marginTop = "30px";
  sessionDetailsContainer.style.padding = "20px";
  sessionDetailsContainer.style.transition = "opacity 0.5s ease-in-out";
  sessionDetailsContainer.style.opacity = "0";
  setTimeout(() => {
    sessionDetailsContainer.style.opacity = "1";
  }, 300);

  const footer = document.querySelector("footer");
  footer.style.textAlign = "center";
  footer.style.padding = "20px";
  footer.style.backgroundColor = "rgba(25, 24, 24, 0.95)";
  footer.style.color = "white";
  footer.style.marginTop = "auto";
  footer.style.fontSize = "14px";
  footer.style.boxShadow = "0 -2px 6px rgba(0, 0, 0, 0.1)";

  const header = document.querySelector('header');
  header.style.backgroundImage = 'linear-gradient(120deg, #ed10de 0%, #9405e7 100%)';
  header.style.color = 'white';
  header.style.padding = '20px';
  header.style.textAlign = 'center';
  header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

});
const navbar = document.querySelector(".navbar");
const navbarContainer = document.querySelector(".navbar-container");
const navbarLogo = document.querySelector(".navbar-logo");
const navbarLinks = document.querySelector(".navbar-links");
const navLinks = document.querySelectorAll(".nav-link");

navbar.style.backgroundColor = "rgba(3, 106, 255, 0.9)";
navbar.style.color = "white";
navbar.style.padding = "10px 0";
navbar.style.position = "sticky";
navbar.style.top = "0";
navbar.style.zIndex = "1000";
navbar.style.fontFamily = "'Circular Std', sans-serif";

navbarContainer.style.maxWidth = "1200px";
navbarContainer.style.margin = "0 auto";
navbarContainer.style.display = "flex";
navbarContainer.style.alignItems = "center";
navbarContainer.style.justifyContent = "space-between";
navbarContainer.style.padding = "0 20px";

navbarLogo.style.fontSize = "20px";
navbarLogo.style.fontWeight = "bold";
navbarLogo.style.color = "white";
navbarLogo.style.textDecoration = "none";

navbarLinks.style.display = "flex";
navbarLinks.style.gap = "15px";

navLinks.forEach((link) => {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontSize = "16px";
    link.style.padding = "8px 12px";
    link.style.borderRadius = "5px";
});