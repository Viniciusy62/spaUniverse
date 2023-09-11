import { app } from '../js/app.js'

export function exploration() {
  return app.innerHTML = `
  <section id="app">
    <h1>O Universo</h1>
    <p>A palavra Universo deriva do latim universum. A palavra latina foi usada por Cícero e posteriormente por outros autores com o mesmo sentido que é empregada atualmente. A palavra latina é derivada da contração poética unvorsum — utilizada primeiramente por Lucrécio no Livro IV de seu “Sobre a Natureza das coisas” — que conecta un, uni (um) com vorsum, versum (que significa "algo rodado, rolado ou mudado").</p>
  </section>`
}

export const explorationLink = document.querySelector('#exploration');