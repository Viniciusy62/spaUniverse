export const Routes = {
  "/": "./src/pages/home.html",
  "/universe": "./src/pages/universe.html",
  "/exploration": "./src/pages/exploration.html",

  route(e) {
    e.target.preventDefault()
    console.log("router")
  }
}

