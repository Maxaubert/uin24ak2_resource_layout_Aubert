const resources = [
  {
    category: 'HTML',
    text: 'HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.',
    sources: [
      {
        title: 'W3Schools',
        url: 'https://www.w3schools.com/html/',
      },
      {
        title: 'HTML Living standard',
        url: 'https://html.spec.whatwg.org/multipage/',
      },
      {
        title: 'HTML.com Tutorials',
        url: 'https://html.com/',
      },
    ],
  },
  {
    category: 'CSS',
    text: 'CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.',
    sources: [
      {
        title: 'W3Schools',
        url: 'https://www.w3schools.com/css/',
      },
      {
        title: 'W3C HTML & CSS Standards',
        url: 'https://www.w3.org/standards/webdesign/htmlcss.html',
      },
      {
        title: 'W3C CSS Validator',
        url: 'https://jigsaw.w3.org/css-validator/',
      },
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/',
      },
    ],
  },
  {
    category: 'JavaScript',
    text: 'JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.',
    sources: [
      {
        title: 'W3Schools',
        url: 'https://www.w3schools.com/js/',
      },
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        title: 'How to read JavaScript Documentation',
        url: 'https://www.youtube.com/watch?v=O3iR-CIufKM',
      },
    ],
  },
  {
    category: 'React',
    text: 'React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.',
    sources: [
      {
        title: 'React documentation',
        url: 'https://reactjs.org/docs/getting-started.html',
      },
      {
        title: 'W3Schools',
        url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
      },
      {
        title: 'How to read JavaScript Documentation',
        url: 'https://www.youtube.com/watch?v=O3iR-CIufKM',
      },
    ],
  },
  {
    category: 'Sanity and headless CMS',
    text: 'Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.',
    sources: [
      {
        title: 'Sanity documentation',
        url: 'https://www.sanity.io/docs',
      },
      {
        title: 'OnCrawl: a beginners guide to headless CMS',
        url: 'https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/',
      },
      {
        title: 'Section.io: Getting started with Sanity CMS',
        url: 'https://www.section.io/engineering-education/getting-started-with-sanity-cms/',
      },
    ],
  },
]
// ID'er
const menu = document.getElementById('menu')
const content = document.getElementById('content')

//mapper ut hvert element i arrayen
resources.map((element) => {
  const menuItem = document.createElement('button')
  //Inne i denne knappen setter den teksten til å være = elementets kategori
  menuItem.innerText = element.category
  //En onclick arrow-funksjon som kjører displayContent funksjonen når kanppen er trykket
  menuItem.onclick = () => displayContent()
  //Etter HTML elementet er ferdig definert blir det lagt til i menyen
  menu.appendChild(menuItem)
  //Denne funksjonen kjører ved en click event, og viser spesifik informasjon tilknyttet knappen man trykket på
  function displayContent() {
    content.innerHTML = `<h2>${element.category}</h2><p>${element.text}</p>`
    // SOURCES
    const links = document.getElementById('links')
    //oppretter liste og nullstiller liste
    links.innerHTML = `<ul>`
    //Mapper ut listeelementer for hver kilde
    element.sources.map(
      (source) => (links.innerHTML += `<li><a href="${source.url}">${source.title}</a></li>`)
    )
    //Avslutter liste
    links.innerHTML += `</ul>`
  }
})
