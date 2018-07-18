import React from 'react';
import axios from 'axios';
const apiClient = axios.create()

class Shark extends React.Component {
    state = {
        giph:"",
        loading: true
    }

    componentDidMount() {
        apiClient({ method: 'get', url: 'https://api.giphy.com/v1/gifs/random?api_key=sVKd0nLiHlGAaZfEJa1gexxloQid2BwQ&tag=shark&rating=G' })
        .then((apiResponse) => {
            console.log(apiResponse.data.data.image_url)
            const randomGiph = apiResponse.data.data.image_url
            this.setState({ giph: randomGiph, loading: false })
        })
    }

    render() {
        // if(this.state.loading) return <h2>Loading...</h2>
        return (
            <div className="Home">
                <h1>SHARK PAGE</h1>
                {this.state.loading
                ? <h4>Loading...</h4>
                : <img src={this.state.giph} alt=""/>
                }
                
            </div>
        )
    }
}

export default Shark