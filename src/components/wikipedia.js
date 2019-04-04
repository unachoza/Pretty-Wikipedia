

  const  wikipedia = {

        searchWikipedia:  (query) => {
            return fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`)
            .then(response => response.json())
            .then(entry => ({entries: entry.query.search}))
        }
    }
    
export default wikipedia