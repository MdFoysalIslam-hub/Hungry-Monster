

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res => res.json())
.then(data => displayCategory(data));


const displayCategory = category => {
    const categoryDiv = document.getElementById('category');
   for (let i = 0; i < category.length; i++) {
       const food = category[i];
       const singleDiv = document.createElement('div');
       li.innerText = category.name;
   categoryDiv.className = 'country';
   const countryInfo = `
   <h3 class="country name"></h3>`
      
   } 
}

const displayCategoryDetails = strCategory => {
const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${idCategory}`
fetch(url)
.then(res => res.json())
.then(data => renderCategoryInfo(data[0]))
}

const renderCategoryInfo = category => {
    const countryDiv.innerHTML = `
    <h1>${category}</h1>`
}

// Sorry for this disturbing code. i fall this assignment many problem in my code please ignor it
