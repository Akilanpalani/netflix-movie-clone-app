import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../common/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const key = '8085c9023af895ec062417662f953e0e';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error: ', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
          <img
            className='w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
            alt={movies?.title}
          />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movies?.title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Play
              </button>
              <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm'>
              Released: {movies?.release_date}
            </p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
              {movies?.overview}
              {/* {truncateString(movie?.overview, 150)} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
