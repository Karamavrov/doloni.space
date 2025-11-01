// Main JavaScript for Doloni Space

// Generate Table of Contents from H2 headings
function generateTOC() {
  const tocContainer = document.getElementById("toc-list");
  if (!tocContainer) return;

  const headings = document.querySelectorAll(".content-section h2");
  if (headings.length === 0) {
    document.querySelector(".toc")?.remove();
    return;
  }

  headings.forEach((heading, index) => {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    // Create TOC item
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocContainer.appendChild(li);
  });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Handle redirect URL parameter
function handleRedirectParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectValue = urlParams.get("redirect");

  // Check if redirect parameter is set to consumer-info
  if (redirectValue === "consumer-info") {
    const currentPath = window.location.pathname;

    // Check if current page is already consumer-info
    if (currentPath.includes("consumer-info")) {
      return; // Already on consumer-info page, no redirect needed
    }

    // Determine language based on current path
    const isEnglish = currentPath.startsWith("/en/");
    const redirectPath = isEnglish ? "/en/consumer-info" : "/consumer-info";

    // Redirect to consumer-info page
    window.location.href = redirectPath;
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Handle redirect parameter (check before other operations)
  handleRedirectParam();

  // Generate TOC for legal pages
  generateTOC();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Add print button functionality
  const printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  // Add fade-in animation to main content
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.add("fade-in");
  }
});
