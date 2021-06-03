import React from 'react';

export type QueryState = {
    query: string;
}

export type SearchProps = {
    onFormSubmit(query:any):void
}

export type MovieProp = {
    movies?:any,
    movie?:any,
    onMovieSelect?:any
}