function displayContent(){
var faq = document.getElementsByClassName("guide-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* To highlight the button that controls the panel */
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


function filterData(){
  //////////////////////////////////////////////////////////////////////////////
  const dataList = document.getElementById("data");
  const searchInput = document.getElementById("search");
  const pagination = document.getElementById("pagination");
  const itemsPerPage = 20;
  
  let filteredData = [];
  let currentPage = 1;
 try { 
    
   
  // Retrieve data from file
  fetch("sick.txt")
    .then(response => response.text())
    .then(data => {
      const dataArray = data.split("\n");
    
      // Filter data based on search input
      searchInput.addEventListener("input", event => {
        const searchTerm = event.target.value.toLowerCase();
        filteredData = dataArray.filter(item => item.toLowerCase().startsWith(searchTerm));
        currentPage = 1;
        updateDataList();
        updatePagination();
      });
  
      updateDataList();
      updatePagination();
    });
  }catch(error){
    if (error.code === "ENOENT") {
        console.error("File not found!");
      } else {
        throw error;
      }
  }
  
  function updateDataList() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    dataList.innerHTML = "";
    filteredData.slice(startIndex, endIndex).forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      dataList.appendChild(listItem);
    });
  }
  
  function updatePagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    let startPage = currentPage;
    let endPage = currentPage + 3;

       if(endPage > pageCount){
        endPage = pageCount;
        startPage = endPage - 4;
    }

    if(startPage < 1){
        startPage = 1;
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", event => {
            currentPage = i;
            updateDataList();
            updatePagination();
        });

        pagination.appendChild(button);
    }

    if(currentPage > 1){
        const prevButton = document.createElement("button");
        prevButton.textContent = "<<";
        prevButton.addEventListener("click", event => {
            currentPage--;
            updateDataList();
            updatePagination();
        });
        pagination.insertBefore(prevButton, pagination.firstChild);
    }
    if(currentPage < pageCount){
        const nextButton = document.createElement("button");
        nextButton.textContent = ">>";
        nextButton.addEventListener("click", event => {
            currentPage++;
            updateDataList();
            updatePagination();
        });
        pagination.appendChild(nextButton);
    }
}

}

  ///////////////////////////////////////////////
