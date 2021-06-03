import React from 'react';
import { Img } from 'react-image';
import { MovieProp } from './Types'

const VideoDetails = ({movie}:MovieProp) => {
    if (!movie) {
        return (
            <div className="ui container" >
                <div className="ui active inverted dimmer" style={{padding: '45px 0'}}>
                    <div className="ui large inline indeterminate text loader">Loading...</div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="ui segment">
            <Img
                    className="ui centered medium image"
                    alt={movie.title}
                    src={[`https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
                        `https://via.placeholder.com/200x300.png?text=No+Poster`]} />
                <h4 className="ui header">{movie.title}</h4>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default VideoDetails