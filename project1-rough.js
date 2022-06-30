var dataArray;
var meals;
var randomDisplay;
var calendarMAINARRAY;
var dropdownbuttonCALEN = document.querySelector(""); //Need to be filled
var searchkeysCALEN = document.querySelector("");
var dropdownbuttonFAV = document.querySelector("");
var dropdownSelector = document.querySelector("");
var randomRecipe = document.querySelector("");
var backButton = document.querySelector("");
var favoritesLT = document.querySelector("");
var clearfavoritesLT = document.querySelector("");

function getmealsAPI(user) { //Recipes - Food - Nutrition API
    user = 'soup';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    var requestURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/suggest?query=' + user + '&number=10';
    fetch(requestURL, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}


function randomrecipesAPI () { //Random recipe generator
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
    };
    
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/apple', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}



function myFunctionCALEN() { //Opens the dropdown menu for the food database
    document.getElementById("").classList.toggle("");
}

function filterFunctionCALEN(displayData) { //filter function for the dropdown food database menu
    var input, filter, a, i;
    input = document.getElementById("");
    filter = input.value.toUpperCase();
    a = displayData;
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function myFunctionFAV(displayData) { //Display and creation of the dropdown for the favorites list
    var ddFAV;
    for (var i = 0; i <= displayData.length; i++) {
        ddFAV[i] = document.createElement("div" + i);
        document.dropdown.appendChild(ddFAV[i]); //Change element to fit the doc
        ddFAV[i].setAttribute("", "", "", ""); //add attributes
        ddFAV.textContent[i] = displayData[i];
        addEventListener("click", addfavoritesList(ddFAV[i]));
    }
}



function mainCalendarARRAY (input) { //Creation of the calendar array
    var calenderMeals;
    for (var i = 0; i < calenderMeals.length + 1; i++) {
        if(calenderMeals[i] !== null) {
            return;
        }
        else {
            calenderMeals[i] = input;
        }
    }
    displayCalender(calenderMeals);
    calendarMAINARRAY = displayCalender(calenderMeals); //Main variable for the calendar

}

function displayCalender (input) { //display function for the calendar
    var tag;
    for (var i = 0; i < input.length; i++) {
        tag = document.createElement("div" + i);
        document.calendar.appendChild(tag); //Change HTML element name to fit the doc
        tag[i].textContent = input[i];
        tag[i].setAttribute("", "", "", ""); //add atributes
    }
    return tag;

}


function deleteMeals (input) { //delete meals from the calendar function
    for(var i = 0; i <= input.length; i++) {
        if(input[i + 1] !== null) {
            return
        }
        else {
            input[i] = "";
        }
    }
}

function addfavoritesList(input) { //function that adds to the favorites list
    favoritesLT.textContent = favoritesLT.textContent + "\n" + input;
    dropdown.removeChild();
} 

function deletefavoritesList() { //clears the favorites list
    favoritesLT.textContent = "";
}

//Event Listeners

dropdownbuttonCALEN.addEventListener("click", myFunctionCALEN); 

searchkeysCALEN.addEventListener("onkeyup", function () {
    var database = getmealsAPI(KeyboardEvent);
    meals = filterFunctionCALEN(database);
    
});

dropdownSelector.addEventListener("click", function () {
    mainCalendarARRAY(meals);
})

randomRecipe.addEventListener("click", function () {
    document.calendar.random.appendChild(randomDisplay); //Change HTML element name to fit the doc
    randomDisplay.textContent = randomrecipesAPI();
})

backButton.addEventListener("click", deleteMeals(calendarMAINARRAY));

dropdownbuttonFAV.addEventListener("click", myFunctionFAV(calendarMAINARRAY));

clearfavoritesLT.addEventListener("click", deletefavoritesList);