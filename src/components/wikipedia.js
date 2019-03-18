

  const  wikipedia = {

        searchWikipedia:  (query) => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&list=search&srsearch=${query}&utf8=&format=json`)
            .then(response => response.text())
            .then(entry => ({entries: entry}))
        }
    }
    
export default wikipedia