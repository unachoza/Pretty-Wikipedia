const wikipedia = {

    searchWikipedia(query){
        return fetch(`https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&list=search&srsearch=${query}&utf8=&format=json`)
        .then(response => response.json())
        .then(entry => this.setState({entries: entries}))
    }
}

export default wikipedia