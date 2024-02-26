import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  const handleClickToogle = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    setLike(!like);
  };
  return (
    <Link key={movie.id} to={`/movie-details/${movie.id}`}>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-105 duration-300'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          className='w-full h-auto block'
        />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center text-wrap'>
            {movie.title}
          </p>
          <p>
            <div>
              <button
                className='absolute top-4 left-4 text-gray-300'
                onClick={handleClickToogle}
              >
                {like ? (
                  <FaHeart className=' text-red-500' />
                ) : (
                  <FaRegHeart className=' text-gray-300' />
                )}
              </button>
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
