import React, { Component } from 'react'; 

class GifSearch extends Component {
    //use the shorthand
    state = {
        query: ""
    }

    //use arrow function to get appropriate function context
    handleSubmit = event => {
        event.preventDefault()
        this.props.submit(this.state.query) //using function passed as props
        event.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label><h1>Search for Gifs! Press enter to update...</h1></label>
                    <input className="form-control" type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </div>
            </form>
        )
    }
}

export default GifSearch; 