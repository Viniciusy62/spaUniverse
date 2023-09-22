import { app } from "./app.js";
import { routes } from "./routes.js"
import "./links.js"

export function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)
  
  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route).then(data => data.text()).then(html => {
    app.innerHTML = html
  })
}

home.addEventListener('click', route)
universe.addEventListener('click', route)
exploration.addEventListener('click', route)