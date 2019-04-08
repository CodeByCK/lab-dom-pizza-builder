// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()


  renderPrice()
}

function renderPepperonni() {
  $('.pep').each(function () {
    if (state.pepperonni) {
      this.style.visibility = "visible"
    } else {
      $(this).css({ visibility: "hidden" })
    }
  })

}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`


  $('.mushroom').each(function () {
    if (state.mushrooms) {
      this.style.visibility = "visible"
    } else {
      $(this).css({ visibility: "hidden" })
    }
  })


}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  $(`.green-pepper`).each(function () {
    if (state.greenPeppers) {
      this.style.visibility = "visible"
    } else {
      $(this).css({ visibility: "hidden" })
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  $(`.sauce-white`).each(function () {
    if (state.whiteSauce) {
      this.style.visibility = "visible"
    } else {
      $(this).css({ visibility: "hidden" })
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  $(`.crust-gluten-free`).each(function () {
    if (state.glutenFreeCrust) {
      // this.style.visibility = "visible"
      $(this).css({ visibility: "visible" })
    } else {
      $(this).css({ visibility: "hidden" })
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  $('.btn-pepperonni, .btn-mushrooms, .btn-green-peppers,.btn-sauce, .btn-crust').click(function (e) {
    $(this).toggleClass('active')
  })
}

function renderPrice() {
  let totalPrice = basePrice;

  for (let i in state) {
    if (state[i] == true) {
      totalPrice += ingredients[i].price;
    }
    $('.total').text('$' + totalPrice)
  }
}

renderEverything()

renderButtons()
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

