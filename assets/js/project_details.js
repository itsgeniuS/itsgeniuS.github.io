// Project Details Data Structure
const projectsData = {
  juansmart: {
    title: "Juansmart E-commerce App",
    type: "Flutter - Cross Platform (Android, iOS)",
    duration: "Completed",
    storeLinks: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.huewine.juansmart.shop",
      appStore: "https://apps.apple.com/app/6759216444",
    },
    description: `A scalable, modular e-commerce mobile application built using Flutter with clean architecture principles. The app follows MVVM architecture with Riverpod for state management and GoRouter for navigation, ensuring maintainability and testability across the codebase.

The project is structured with a clear separation of concerns — featuring a core layer for API communication (Dio with custom interceptors), routing, and base classes, a features layer organized by domain (e.g., login with data sources, repositories, use cases, and presentation), and a shared layer for reusable components, models, and extensions.

The app supports multiple environments (Development, Staging, Production) with dedicated entry points, enabling seamless switching between API endpoints during development and release cycles. Code generation is leveraged through Freezed for immutable state classes and JSON serialization, reducing boilerplate and improving type safety.

The application has been submitted to both the Google Play Store and Apple App Store and is set to go live soon.`,
    banner: "./assets/images/projects/juansmart/juansmart_thumbnail_2.webp",
    features: [
      "Clean MVVM architecture with clear separation of concerns",
      "Riverpod state management for reactive and testable UI",
      "GoRouter for declarative, type-safe navigation",
      "Dio HTTP client with custom header and logging interceptors",
      "Multi-environment support (Dev, Stage, Production)",
      "Freezed for immutable state and model classes with code generation",
      "Feature-based modular folder structure",
      "Base view and viewmodel abstractions for consistent patterns",
      "Use case pattern for business logic encapsulation",
      "Global progress and message providers for unified UX",
      "Localization support with Flutter gen-l10n",
      "Automated build scripts for Android AAB and iOS IPA releases",
      "Version management with configuration-driven build numbers",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Dio",
      "Freezed",
      "Build Runner",
      "Google Play Store",
      "Apple App Store",
      "Push Notifications (Firebase Cloud Messaging)",
      "Crash Reporting (Firebase Crashlytics)",
      "Social Login - Google",
      "Clean architechture principles (MVVM, Use Cases, Repositories)",
    ],
    screenshots: {
      mobile: [
        {
          src: "./assets/images/projects/juansmart/ios/juansmart_home.webp",
          alt: "iOS - Home Screen",
        },
        {
          src: "./assets/images/projects/juansmart/ios/juansmart_categories.webp",
          alt: "iOS - Categories Screen",
        },
        {
          src: "./assets/images/projects/juansmart/ios/juansmart_login.webp",
          alt: "iOS - Login Screen",
        },
        {
          src: "./assets/images/projects/juansmart/android/juansmart_home.webp",
          alt: "Android - Home Screen",
        },
        {
          src: "./assets/images/projects/juansmart/android/juansmart_login.webp",
          alt: "Android - Login Screen",
        },
        {
          src: "./assets/images/projects/juansmart/android/juansmart_account.webp",
          alt: "Android - Account Screen",
        },
      ],
    },
    videos: [],
    challenges: [
      {
        title: "Scalable Architecture Design",
        description:
          "Designing a modular architecture that scales well as new features are added was critical. Implementing MVVM with Riverpod required careful planning of provider scoping, dependency injection, and state flow to avoid tight coupling between features while maintaining a consistent development pattern across the team.",
      },
      {
        title: "Multi-Environment Configuration",
        description:
          "Setting up separate entry points for Dev, Stage, and Production environments with different API endpoints, configurations, and build settings required a well-thought-out approach. Each environment needed its own Dio client configuration, interceptors, and error handling strategies.",
      },
      {
        title: "App Store Submission Process",
        description:
          "Navigating the submission requirements for both Google Play Store and Apple App Store simultaneously involved managing different signing configurations, build pipelines, version numbering strategies, and compliance requirements for each platform.",
      },
    ],
    learnings: [
      {
        title: "MVVM with Riverpod is Powerful",
        description:
          "Combining MVVM architecture with Riverpod provides excellent separation of concerns and testability. The provider-based dependency injection makes it easy to swap implementations and write unit tests for viewmodels and use cases independently.",
      },
      {
        title: "Code Generation Saves Time",
        description:
          "Using Freezed and build_runner for generating immutable state classes, union types, and JSON serialization code significantly reduces boilerplate and eliminates entire categories of bugs related to mutable state and manual serialization.",
      },
      {
        title: "Build Scripts are Essential for Release Management",
        description:
          "Automating the build process with custom shell scripts for version bumping, building AABs and IPAs, and managing platform-specific configurations streamlines the release workflow and reduces human error during deployments.",
      },
    ],
    clientRequirements: [
      "Cross-platform mobile app for Android and iOS",
      "Scalable architecture supporting future feature additions",
      "Multi-environment support for development workflow",
      "Play Store and App Store distribution",
      "Clean, maintainable codebase following industry best practices",
    ],
    keyAccomplishments: [
      "Built a production-ready e-commerce app with clean MVVM architecture",
      "Implemented comprehensive multi-environment setup with separate entry points",
      "Established automated build and release pipeline for both platforms",
      "Successfully submitted to Google Play Store and Apple App Store",
      "Created reusable base classes and patterns for rapid feature development",
      "Implemented robust API layer with Dio interceptors for logging and authentication",
    ],
  },
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
  "remote-sensing-system": {
    title: "Industrial Fire Suppression & Wildfire Defense System",
    type: "Flutter - Industrial IoT (iOS, Android, Web)",
    duration: "4 weeks",
    description: `A sophisticated industrial IoT mobile application developed in Flutter that enables real-time remote monitoring and control of fire suppression and wildfire defense systems. Built as a proof-of-concept and production system for government demonstrations, the application communicates bidirectionally with Unitronics UCR (Universal Cellular Router) industrial gateway devices via Modbus TCP protocol.

The system architecture consists of a Flutter mobile app acting as a Modbus master, UCR routers serving as industrial gateways managing local WiFi networks and cellular connectivity, and PLC (Programmable Logic Controller) devices functioning as slave devices. This enables comprehensive control of critical fire safety infrastructure including water pumps, pressure valves, zone control systems, and distributed sensor arrays from a mobile device.

A key architectural innovation is the hybrid connectivity solution that automatically switches between direct local WiFi connections (for sub-second response times) and remote internet-based relay servers (for off-site monitoring). This eliminates the traditional trade-off between local responsiveness and remote accessibility, enabling emergency responders to monitor and control systems from anywhere while maintaining industrial-grade reliability.`,
    banner: "./assets/images/projects/iautomatia/iautomatia_banner.webp",
    features: [
      "Bidirectional Modbus TCP communication with industrial gateway devices",
      "Real-time sensor monitoring (temperature, pressure, digital inputs, analog sensors)",
      "Output control capabilities (pumps, valves, zone switches with instant feedback)",
      "Hybrid connectivity architecture - local WiFi + remote internet relay",
      "Automatic network mode switching based on connectivity availability",
      "UCR device configuration and discovery",
      "Service status monitoring and remote service restart capabilities",
      "Zone-based fire suppression control system",
      "System uptime tracking and connection health metrics",
      "Comprehensive activity logging with verbose debugging options",
      "File-based persistent logging for troubleshooting",
      "Professional UI with connection status indicators and data refresh controls",
      "Configuration-driven device profile system",
      "Socket-based communication manager with operation queuing",
      "Error recovery with automatic reconnection mechanisms",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Modbus TCP Protocol",
      "Socket Programming (dart:io)",
      "Unitronics UCR Gateway",
      "TestFlight (iOS distribution)",
      "App Store Connect",
      "RustDesk (Remote troubleshooting)",
      "Tailscale VPN (Secure remote access)",
    ],
    screenshots: {
      mobile: [
        {
          src: "./assets/images/projects/iautomatia/iautomatia_app_screen.jpeg",
          alt: "Connection Configuration Screen",
        },
      ],
      tablet: [],
    },
    videos: [
      {
        title: "System Demo - Custom registry updates",
        embedUrl:
          "https://drive.google.com/file/d/1_HkSnC5FNCPdJjN0PgOZYhRqAfzrERbt/preview",
      },
      {
        title: "POC Demo",
        embedUrl:
          "https://drive.google.com/file/d/13FHYEWYnxPCDOmRyixE1tcIDaKVlFbhX/preview",
      },
    ],
    challenges: [
      {
        title: "Industrial Hardware Communication Protocol Mastery",
        description:
          "Implementing Modbus TCP protocol from scratch required deep understanding of binary packet construction, endianness handling, and precise register addressing. The gateway device used non-persistent connection patterns (single-shot connections rather than persistent sockets) which is standard for industrial equipment but required adapting typical mobile app patterns. Register addressing discrepancies between different tools (Flutter vs QModMaster) revealed critical importance of understanding protocol offsets.",
      },
      {
        title: "Performance Optimization in IoT Communication",
        description:
          "Initial implementation achieved 1-5 second response times due to sequential register reading with artificial delays between requests. Optimizing to 400-600ms required batch register reading, cached state management, and reducing polling cycles. The challenge was maintaining reliability while improving performance, as industrial fire safety systems cannot tolerate dropped commands.",
      },
      {
        title: "Hybrid Connectivity Architecture Design",
        description:
          "Balancing local WiFi responsiveness with remote internet accessibility required designing an intelligent network mode switcher that automatically selects between direct connection (for sub-second latency) and relay server operation (for remote access). This involved coordinating between Flutter client, UCR gateway, and Node.js backend server while maintaining state consistency.",
      },
      {
        title: "Industrial Safety and Reliability Requirements",
        description:
          "Fire suppression systems must never fail silently or provide false feedback. Implementing read-modify-write patterns for register updates to preserve unused bits, comprehensive error handling, connection retry mechanisms, and activity logging for audit trails required thinking differently about mobile app development where occasional errors are tolerable.",
      },
      {
        title: "Network Connectivity in Diverse Environments",
        description:
          "The application must work in various network scenarios: direct WiFi connection to gateway hotspots, WiFi through standard routers, and cellular/internet connectivity. Each scenario required different connection strategies and fallback mechanisms, with careful attention to which mode is actually providing connectivity at any moment.",
      },
    ],
    learnings: [
      {
        title:
          "Industrial Protocol Implementation is Specialized Domain Knowledge",
        description:
          "Modbus TCP isn't just a network protocol - it requires understanding binary packet construction, two's complement arithmetic, register addressing conventions, and error handling patterns specific to industrial equipment. This knowledge gap initially caused significant debugging challenges but became clear once the protocol was truly understood at a low level.",
      },
      {
        title:
          "Single-Shot Connection Pattern is Standard in Industrial Equipment",
        description:
          "UCR devices don't maintain persistent connections like typical servers. Each operation opens a connection, sends a request, receives a response, then closes. This is normal and optimal for industrial devices managing limited resources. Mobile apps are usually built assuming persistent connections, so this required significant architectural adjustment.",
      },
      {
        title: "Register Addressing Conventions Matter Critically",
        description:
          "Tools like QModMaster and Flutter implementations may use different addressing conventions. What's register 1001 in one tool might be address 1000 in another. Understanding the specification completely rather than relying on convention prevented hours of debugging.",
      },
      {
        title:
          "State Synchronization Between Hardware and Mobile UI is Non-Trivial",
        description:
          "Hardware responds instantly to commands (buzzers beep, lights turn on immediately), but status updates lag due to polling cycles. Users see immediate physical feedback but delayed UI feedback, creating confusion about whether commands succeeded. Designing UIs that accurately reflect both intended state and actual state requires careful thought.",
      },
      {
        title: "Read-Modify-Write is Essential for Safety-Critical Systems",
        description:
          "Writing to a register without reading current state first can overwrite critical bits you didn't intend to change. For fire suppression systems, this could disable unrelated safety features. This pattern became foundational to all register write operations.",
      },
      {
        title: "Activity Logging is Invaluable for Industrial Systems",
        description:
          "When systems fail or behave unexpectedly, detailed logs become more valuable than the application itself. Implementing comprehensive logging from the start, with both in-memory and file-based persistence, proved critical for both development and post-deployment troubleshooting.",
      },
      {
        title: "Direct WiFi Connection to Gateway Hotspots Works Best",
        description:
          "Initial attempts to connect through standard routers created isolation and latency issues. Connecting directly to the UCR's WiFi hotspot eliminated these problems entirely, though it means the mobile device isn't connected to the internet during local monitoring sessions.",
      },
      {
        title: "Clear Distinction Between MVP and Phase 2 Prevents Scope Creep",
        description:
          "Rigorous separation of Phase 1 (proof-of-concept with core bidirectional communication) and Phase 2 (hybrid connectivity, performance optimization, multi-device support) prevented feature creep and maintained focus on proving the core concept first.",
      },
    ],
    clientRequirements: [
      "Real-time control of fire suppression equipment via mobile device",
      "Proof-of-concept suitable for government demonstrations",
      "Bidirectional communication with industrial gateway devices",
      "Support for both iOS and Android platforms",
      "Immediate feedback on control actions",
      "Remote monitoring capability for emergency response coordination",
      "Professional-grade reliability and error handling",
      "Detailed activity logging for regulatory compliance",
    ],
    keyAccomplishments: [
      "Successfully implemented Modbus TCP protocol from first principles without external Modbus libraries initially",
      "Achieved instant feedback on hardware control (buzzer beeps, light activation within milliseconds of app tap)",
      "Demonstrated seamless bidirectional synchronization between mobile app and gateway web interface",
      "Designed hybrid connectivity architecture enabling both local responsiveness and remote accessibility",
      "Delivered iOS application through TestFlight with enterprise-grade reliability requirements",
      "Built comprehensive debug/logging system for industrial troubleshooting",
      "Successfully navigated complex register addressing and state management for safety-critical system",
      "Validated proof-of-concept and have successfully given demonstration sessions",
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

  // Set store links if available
  if (project.storeLinks) {
    loadStoreLinks(project.storeLinks);
  }
}

// Function to load store links
function loadStoreLinks(storeLinks) {
  const storeLinksSection = document.getElementById("storeLinksSection");
  const storeLinksContainer = document.getElementById("storeLinksContainer");

  const links = [];

  if (storeLinks.playStore) {
    links.push(`
      <a href="${storeLinks.playStore}" target="_blank" class="store-badge-link">
        <img src="./assets/images/badges/google_play.webp" alt="Get it on Google Play" class="store-badge">
      </a>
    `);
  }

  if (storeLinks.appStore) {
    links.push(`
      <a href="${storeLinks.appStore}" target="_blank" class="store-badge-link">
        <img src="./assets/images/badges/app_store.webp" alt="Download on the App Store" class="store-badge">
      </a>
    `);
  }

  if (storeLinks.medium) {
    links.push(`
      <a href="${storeLinks.medium}" target="_blank" class="store-badge-link">
        <img src="./assets/images/badges/medium.webp" alt="Read on Medium" class="store-badge">
      </a>
    `);
  }

  if (links.length > 0) {
    storeLinksContainer.innerHTML = links.join("");
    storeLinksSection.style.display = "block";
  }
}

// Function to load screenshots
function loadScreenshots(screenshots) {
  const mobileContainer = document.getElementById("mobileScreenshots");
  const tabletContainer = document.getElementById("tabletScreenshots");
  const tabletSection = tabletContainer.closest(".screenshot-section");

  // Hide tablet section if no tablet screenshots
  if (!screenshots.tablet || screenshots.tablet.length === 0) {
    tabletSection.style.display = "none";
  }

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
            `,
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
            `,
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
                    }" allowfullscreen="" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
                ${
                  video.title
                    ? `<div class="video-title">${video.title}</div>`
                    : ""
                }
            </div>
        `,
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
        `,
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
        `,
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

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
