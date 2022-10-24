// When keyboard is pressed, do this:
document.addEventListener('keydown', (event) => {

  // Remove old title
  const oldTitle = document.querySelectorAll("h1")[0];
  oldTitle.remove();

  // Add new title
  // Step 1: store element in variable
  const h1Element = document.createElement("h1");
  // Step 2: add text to element
  h1Element.append("Webpage Recreation Practice");

  // Add variable for HTML body
  // Step 1: store container element in variable
  const pageBody = document.querySelector("body");
  // Step 2: add child element to container
  pageBody.append(h1Element);

  // Add paragraph
  const newParagraph = document.createElement("p");
  newParagraph.append("The HTML of this webpage was created with JavaScript.");
  pageBody.append(newParagraph);
  
});
