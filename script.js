const detailButtons = document.querySelectorAll(".detail-button");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);

    if (!content) {
      return;
    }

    const isExpanded =
      button.getAttribute("aria-expanded") === "true";

    button.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    content.hidden = isExpanded;
  });
});