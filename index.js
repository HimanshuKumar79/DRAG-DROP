//Get all the elements from the html
let items = document.getElementsByClassName("item");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");
let popup = document.querySelector(".alert");

// Arrow Function to reset the divs and set all the elements to default div
const resetHandler = () => {
  for (item of items) {
    leftbox.appendChild(item);
  }
};

//Show the popup when drag and drop is completed
const alertHandler = () => {
  popup.classList.remove("alert");
  popup.classList.add("popup");
  setTimeout(() => {
    popup.classList.remove("popup");
    popup.classList.add("alert");
  }, 1000);
};

// for loop to do the drag and drop functionality to all the elements
for (item of items) {
  // When starting the dragging of the element
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;

    // Enable drag and drop on the containers
    rightbox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // When deopping the elements on the container then append it
    rightbox.addEventListener("drop", (e) => {
      rightbox.appendChild(selected);
      selected.className = "item";
      selected = null;
      alertHandler();
    });

    // Enable drag and drop on the containers
    leftbox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    // When deopping the elements on the container then append it
    leftbox.addEventListener("drop", (e) => {
      e.preventDefault();
      leftbox.appendChild(selected);
      selected.className = "item";
      selected = null;
      alertHandler();
    });
  });
}
