// Project Details Data Structure
const projectsData = {
  "chaat-anna": {
    title: "Chaat Anna Feedback App",
    type: "Flutter - Cross Platform (Android, iOS, Web)",
    duration: "4 weeks (3 Iterations)",
    description: `This is a comprehensive feedback collection application developed in Flutter that works seamlessly across Android, iOS, and web platforms. Built for a snacks shop chain (evening snacks shop), the app enables multiple branch management where each branch can display products based on customizable categories.

The application provides an intuitive user experience where customers can browse products with images, names, and descriptions. When users tap on a product, they're presented with detailed product information and a rating system (1-5 stars) with configurable rating images unique to each store. After selecting a rating level, users can provide detailed feedback and select from pre-defined menu options, all of which are sent to Firebase in real-time.

One of the standout features is the offline-first architecture with auto-sync capabilities. The app maintains a local database and continues to function seamlessly even without internet connectivity. Once the internet connection returns, all data automatically syncs to Firebase without user intervention.

The admin functionality is cleverly hidden behind a long-press gesture on the app logo in the header. The admin panel provides comprehensive insights including user product reviews, local database refresh options, data deletion capabilities, and logout functionality.`,
    banner: "./assets/images/projects/chaat-anna/chaat_anna_banner.jpg",
    features: [
      "Multi-branch shop management system",
      "Product categorization with rich media (images, descriptions)",
      "1-5 star rating system with configurable rating images per store",
      "Comprehensive feedback collection with predefined menu options",
      "Firebase real-time synchronization",
      "Offline-first architecture with automatic data sync",
      "Hidden admin panel with long-press gesture recognition",
      "User product review logs and analytics",
      "Advanced product search functionality",
      "Shop listing with dynamic status management",
      "Crash reporting with Firebase Crashlytics",
      "App analytics with Firebase Analytics",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "SQLite",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Crashlytics",
      "Analytics",
    ],
    screenshots: {
      mobile: [
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_1.png",
          alt: "Home Screen with Shop Selection",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_2.png",
          alt: "Product List by Category",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_3.png",
          alt: "Product Rating Screen",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_4.png",
          alt: "Admin UI for sync and logout",
        },
      ],
      tablet: [
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_5.png",
          alt: "Home Screen with Shop Selection",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_6.png",
          alt: "Product List by Category",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_7.png",
          alt: "Product Rating Screen",
        },
        {
          src: "./assets/images/projects/chaat-anna/chaat_anna_8.png",
          alt: "Admin UI for sync and logout",
        },
      ],
    },
    videos: [
      // {
      //   title: "App Demo - Full Walkthrough",
      //   embedUrl:
      //     "https://drive.google.com/file/d/1bB9uERAahmR_aSQG8KGteS5QswXpis9E/preview",
      // },
    ],
    challenges: [
      {
        title: "Scope Creep and Changing Requirements",
        description:
          "The project encountered significant scope changes throughout development. The initial requirements differed substantially from the final delivered product. This taught me the critical importance of thorough upfront requirement analysis and establishing clear communication channels with clients from day one.",
      },
      {
        title: "Dynamic Client Requests During Development",
        description:
          "While development was ongoing, the client continued to request new features and modifications. Managing these dynamic requirements while maintaining project momentum and code quality required careful prioritization and transparent communication about timeline impacts.",
      },
      {
        title: "Distinguishing Bugs from Feature Requests",
        description:
          'Post-launch, the client reported numerous "bugs" that were actually feature requests. This highlighted the importance of comprehensive documentation and clear specification of delivered features. It taught me to maintain detailed changelogs and get explicit sign-off on features.',
      },
    ],
    learnings: [
      {
        title: "Ask Questions Upfront",
        description:
          "The biggest learning was the critical importance of conducting thorough requirement gathering meetings at the project's start. Detailed clarification of expectations, user stories, and edge cases early on saves significant rework later.",
      },
      {
        title: "Client Communication is Key",
        description:
          "Clear, regular communication with clients throughout the project lifecycle is essential. Weekly updates, documented decisions, and sign-offs on major features prevent misunderstandings and scope creep.",
      },
      {
        title: "Technical Documentation Matters",
        description:
          "Maintaining detailed documentation of implemented features, APIs, and usage patterns helps manage post-launch discussions about what was delivered versus what was requested.",
      },
      {
        title: "Business Viability Assessment",
        description:
          "This project taught me to evaluate the business terms upfront, including compensation, payment schedules, and support expectations. Building strong relationships requires mutual respect and fair agreements.",
      },
    ],
  },
};

// Function to get URL parameter
function getUrlParameter(name) {
  const url = new URL(window.location);
  return url.searchParams.get(name);
}

// Function to load project details
function loadProjectDetails() {
  const projectId = getUrlParameter("id");

  if (!projectId || !projectsData[projectId]) {
    console.error("Project not found:", projectId);
    document.body.innerHTML =
      '<main><div class="main-content"><article class="about active"><header><h2 class="h2 article-title">Project Not Found</h2></header><p>The project you\'re looking for doesn\'t exist. <a href="./index.html">Back to Portfolio</a></p></article></div></main>';
    return;
  }

  const project = projectsData[projectId];
  console.log("Project loaded:", project.title);

  // Set title
  document.title = `${project.title} - Thulasi Rajan`;
  document.getElementById("projectTitle").textContent = project.title;

  // Set banner
  document.getElementById("projectBanner").src = project.banner;
  document.getElementById("projectBanner").alt = project.title;

  // Set meta info
  document.getElementById("projectType").textContent = project.type;
  document.getElementById("projectDuration").textContent = project.duration;

  // Set tech stack
  const techStackContainer = document.getElementById("projectTechStack");
  techStackContainer.innerHTML = project.techStack
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  // Set description
  document.getElementById("projectDescription").innerHTML = project.description
    .split("\n\n")
    .map((para) => `<p class="section-text">${para}</p>`)
    .join("");

  // Set features
  const featuresList = document.getElementById("projectFeatures");
  featuresList.innerHTML = project.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  // Set screenshots
  loadScreenshots(project.screenshots);

  // Set videos if available
  if (project.videos.length > 0) {
    loadVideos(project.videos);
  }

  // Set challenges if available
  if (project.challenges.length > 0) {
    loadChallenges(project.challenges);
  }

  // Set learnings if available
  if (project.learnings.length > 0) {
    loadLearnings(project.learnings);
  }
}

// Function to load screenshots
function loadScreenshots(screenshots) {
  const mobileContainer = document.getElementById("mobileScreenshots");
  const tabletContainer = document.getElementById("tabletScreenshots");

  // Load mobile screenshots
  if (screenshots.mobile && screenshots.mobile.length > 0) {
    mobileContainer.innerHTML = screenshots.mobile
      .map(
        (screenshot, index) => `
                <div class="screenshot-item" onclick="openImageModal(this)">
                    <img src="${screenshot.src}" alt="${screenshot.alt}" loading="lazy">
                    <div class="screenshot-overlay">
                        <ion-icon name="expand-outline"></ion-icon>
                    </div>
                </div>
            `
      )
      .join("");
  }

  // Load tablet screenshots
  if (screenshots.tablet && screenshots.tablet.length > 0) {
    tabletContainer.innerHTML = screenshots.tablet
      .map(
        (screenshot, index) => `
                <div class="screenshot-item" onclick="openImageModal(this)">
                    <img src="${screenshot.src}" alt="${screenshot.alt}" loading="lazy">
                    <div class="screenshot-overlay">
                        <ion-icon name="expand-outline"></ion-icon>
                    </div>
                </div>
            `
      )
      .join("");
  }
}

// Function to load videos
function loadVideos(videos) {
  const videosSection = document.getElementById("videosSection");
  const videosContainer = document.getElementById("projectVideos");

  videosContainer.innerHTML = videos
    .map(
      (video) => `
            <div class="video-item">
                <div class="video-wrapper">
                    <iframe src="${
                      video.embedUrl
                    }" allowfullscreen="" loading="lazy"></iframe>
                </div>
                ${
                  video.title
                    ? `<div class="video-title">${video.title}</div>`
                    : ""
                }
            </div>
        `
    )
    .join("");

  videosSection.style.display = "block";
}

// Function to load challenges
function loadChallenges(challenges) {
  const challengesSection = document.getElementById("challengesSection");
  const challengesContainer = document.getElementById("projectChallenges");

  challengesContainer.innerHTML = challenges
    .map(
      (challenge) => `
            <div class="challenges-item">
                <h4 class="challenge-title">${challenge.title}</h4>
                <p class="challenge-description">${challenge.description}</p>
            </div>
        `
    )
    .join("");

  challengesSection.style.display = "block";
}

// Function to load learnings
function loadLearnings(learnings) {
  const learningsSection = document.getElementById("learningsSection");
  const learningsContainer = document.getElementById("projectLearnings");

  learningsContainer.innerHTML = learnings
    .map(
      (learning) => `
            <div class="learnings-item">
                <h4 class="learning-title">${learning.title}</h4>
                <p class="learning-description">${learning.description}</p>
            </div>
        `
    )
    .join("");

  learningsSection.style.display = "block";
}

// Image Modal Functions
function openImageModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const img = element.querySelector("img");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.textContent = img.alt;
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const closeBtn = document.querySelector(".close");

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Load project details when page loads
  loadProjectDetails();
});
