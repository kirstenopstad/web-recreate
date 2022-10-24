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

  // Add img element
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  newImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  newImg.setAttribute("style", "width:50%");
  pageBody.append(newImg);

  // Add second h1 element
  h1Element2 = document.createElement("h1");
  h1Element2.append("Facts about the Multicolored Tanager");
  pageBody.append(h1Element2);

  // Add ul element
  const newList = document.createElement("ul");
  // Add list items
  const item1 = document.createElement("li");
  item1.append("It is endemic to the mountains of Colombia.");
  const item2 = document.createElement("li");
  item2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  // Add items to new list
  newList.append(item1, item2);
  // Add list to body
  pageBody.append(newList);
  
});
