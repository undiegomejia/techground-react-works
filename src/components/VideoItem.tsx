import React from 'react'
import { MovieProp } from './Types'
import {Img} from 'react-image'

const VideoItem = ({ movie, onMovieSelect }: MovieProp) => {

    return (
        <div className="item" onClick={() => onMovieSelect(movie)} style={{cursor:'pointer'}}>
            <div className="content">
                <Img
                    className="ui centered small image"
                    alt={movie.title}
                    src={[`https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
                        `https://via.placeholder.com/200x300.png?text=No+Poster`]} />
                <div className="header">{movie.title}</div>
                <p className="description">{movie.overview}</p>
            </div>
        </div>
    )
}

export default VideoItem