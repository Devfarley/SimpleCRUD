import React from 'react'
import Band from './Band'


export default class Music extends React.Component{
    state = {
        music: []
    }
    
    getMusic = () => {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/music`)
            .then(response => response.json())
            .then(data => this.setState({music:data}))
            // .then(console.log)
    }

    componentDidMount(){
        this.getMusic();
    } 

    render(){
        const displayMusic = this.state.music.map(band => <Band key={band._id} band={band.artist}/>) 
        return (
            <div>
                <ul>
                    {displayMusic}
                </ul>
            </div>    
        );
    }

}

