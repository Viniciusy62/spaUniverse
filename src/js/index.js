// import { app } from '../js/app.js';
// import { routes } from './routes.js'

// Pages
import * as Home from '../pages/home.js';
import * as Universe from '../pages/universe.js'
import * as Exploration from '../pages/exploration.js'



// 
const routes = {
  "/": "./src/pages/home.html",
  "/universe": "./src/pages/universe.html",
  "/exploration": "./src/pages/exploration.html",
  404: "./src/pages/404.html",
}
// 


window.onload = Home.home()


function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)
  
  // console.log(event.target.href)

  // handle()
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route).then(data => data.text()).then(html => {
    document.querySelector("#app").innerHTML = html
  })
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route).then(data => data.text()).then(html => {
    document.querySelector("#app").innerHTML = html
  })
}

Home.homeLink.addEventListener('click', route)
Universe.universeLink.addEventListener('click', route)
Exploration.explorationLink.addEventListener('click', route)

