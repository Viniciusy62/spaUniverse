import { app } from '../js/app.js'

export function home() {

  return app.innerHTML = `
    <section id="app">
      <h1>Explore o universo</h1>
      <a href="https://www.youtube.com/watch?v=nGnX6GkrOgk" target="_blank">
        <button>QUERO SABER MAIS</button>
      </a>
    </section>`;
}

