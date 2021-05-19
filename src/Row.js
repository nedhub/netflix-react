import React, { useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);


    useEffect(() => { 



        async function fetchData() {

            const request = await axios.get(fetchUrl); // KEY HERE. YOU HAVE TO PUT THIS IN THE ARRAY BELOW FOR IT TO WORK
            // "https://api.themovuedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213",
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData(); 



    }, [fetchUrl]); // FETCHURL IN THE ARRAY FOR IT TO WORK.


    

    
    return (
        <div className = "row">
            <h2>{title}</h2> 

            <div className="row_posters">

                {}

                {movies.map(movie => (

                    <img 
                    key={movie.id}

                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}


            </div>



            {/* */}
        </div>
    )
}

export default Row
