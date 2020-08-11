import React from 'react'; 

// Only a functional component was necessary.
// Simply displaying info passed as props
const GifList = (props) => {
    if (props) {
        let listGifs = props.gifs.map((itm, index) => {
            return (
                <div>
                    <img className="card-img-top" key={index} src={itm.url} alt="gif"/>
                </div>
            )
        })
        return (
            <div>{listGifs}</div>
        )
    }
    return (
        <h1>Still Loading!</h1>
    )
}
export default GifList; 