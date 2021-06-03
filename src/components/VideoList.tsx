import React from 'react';
import VideoItem from './VideoItem'
import { MovieProp } from './Types'

const VideoList = ({ movies, onMovieSelect }: MovieProp) => {
    const renderedList = movies.map((movie:any) => {
        return <VideoItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect}/>
    })
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList