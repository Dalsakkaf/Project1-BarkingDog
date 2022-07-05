var calendarArray;
var fav = document.querySelector("#favoritesList");
calendarArray = document.querySelector(".table");
var meals = ["Meatball Sub", "Chicken Tikka Masala", "Chicken Alfredo", "Grilled Chicken", "Grilled Shrimp", "Chicken Strips", "Spaghetti and Meatballs", "Turkey Club", "Baked Ziti", "Meatloaf", "Chicken Stirfry", "Eggs Benedict", "Sausage and Spinach Omelette", "Chicken Fried Steak", "Fish Tacos", "Grilled Salmon", "Fish and Chips", "Mushroom Soup", "Chocolate Cake", "Apple Pie", "Cherry Pie", "Pecan Pie", "Strawberry Shortcake", "Lemon Squares", "Cinnamon Rolls", "Tri-Tip Steak"]
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }


  function getmealsAPI() { //Recipes - Food - Nutrition API
    user = 'soup';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    var requestURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/suggest?query=&number=10';
    fetch(requestURL, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
return response
}

autocomplete(document.getElementById("autocomplete-input"), meals);
fav.addEventListener("keydown", function () {
    localStorage.setItem("individualMeals", document.getElementById("favoritesList").textContent);
})

document.getElementById("favoritesList").innerHTML = localStorage.getItem("individualMeals");



const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById("meal");
getMealBtn.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    })
});
function createMeal(meal) {
    mealContainer.innerHTML = `
    <div class="row">
    <div class="column five">
    <img src="${meal.strMealThumb}" alt="Meal Img" />
    </div>
    </div>
    `;
}