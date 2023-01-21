function T(){
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 

  const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results");
const paginationContainer = document.getElementById("pagination");

const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let filteredResults = [];

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  search();
});

function search() {
  // get the search query from the input field
  const query = searchInput.value;

  // fetch the text file containing the data
  fetch("sick.txt")
    .then(response => response.text())
    .then(data => {
      // split the data into an array of lines
      const lines = data.split("\n");

      // filter the lines that start with the search query
      filteredResults = lines.filter(line => line.startsWith(query));

      // display the results
      displayResults();
    });
}

function displayResults() {
  // clear the previous results
  resultsContainer.innerHTML = "";

  // determine the start and end index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // loop through the results for the current page
  for (let i = startIndex; i < endIndex; i++) {
    if (filteredResults[i]) {
      // create a new element to display the result
      const resultElement = document.createElement("div");
      resultElement.innerText = filteredResults[i];
      // add the result to the results container
      resultsContainer.appendChild(resultElement);
    }
  }

  // create and display the pagination buttons
  createPaginationButtons();
}
function createPaginationButtons() {
  // clear the previous pagination buttons
  paginationContainer.innerHTML = "";

  // calculate the number of pages
  const numberOfPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);

  // create a button for each page
  for (let i = 1; i <= numberOfPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.classList.add("pagination-button");
    button.addEventListener("click", function() {
      currentPage = i;
      displayResults();
    });
    paginationContainer.appendChild(button);
  }
}

function f(){
  const dataList = document.getElementById("users-list");
  const searchInput = document.getElementById("searchBar");
  
  // Retrieve data from file
  fetch("sick.txt")
    .then(response => response.text())
    .then(data => {
      const dataArray = data.split("\n");
  
      // Filter data based on search input
      searchInput.addEventListener("input", event => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = dataArray.filter(item => item.toLowerCase().startsWith(searchTerm));
  
        // Populate data list with filtered data
        dataList.innerHTML = "";
        filteredData.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          dataList.appendChild(listItem);
        });
      });
    });
}