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

// Print functionality
function printPage() {
  window.print();
}

// Download as PDF functionality (triggers browser's print dialog with Save as PDF option)
function downloadPDF() {
  // Show a helpful message
  const lang = document.documentElement.lang;
  const message =
    lang === "uk"
      ? 'У діалозі друку оберіть "Зберегти як PDF"'
      : 'In the print dialog, select "Save as PDF"';

  alert(message);
  window.print();
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

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Generate TOC for legal pages
  generateTOC();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Add print button functionality
  const printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", printPage);
  }

  // Add PDF download button functionality
  const pdfBtn = document.getElementById("pdf-btn");
  if (pdfBtn) {
    pdfBtn.addEventListener("click", downloadPDF);
  }

  // Add fade-in animation to main content
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.add("fade-in");
  }
});

// Export functions for potential external use
export { printPage, downloadPDF, generateTOC };
