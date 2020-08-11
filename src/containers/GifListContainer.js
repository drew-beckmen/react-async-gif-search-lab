import React from 'react'; 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super(); 
        this.state = {
            gifs: []
        }
        this.fetchGifs = this.fetchGifs.bind(this) //ensure function context is correct
    }


    //this function is passed as props to child component GifSearch
    fetchGifs(query = "dolphins") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        //need to extract the urls out because that is what should be displayed
        .then(({data}) => this.setState({gifs: data.slice(0, 3).map(gif => ({url: gif.images.original.url}))}))
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return (
            <div>
                <GifSearch submit={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer; 