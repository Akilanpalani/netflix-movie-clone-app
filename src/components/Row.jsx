import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRef } from 'react';

import Movie from './Movie';
import Loader from '../common/Loader';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const [isloading, SetIsLoading] = useState(true);

  useEffect(() => {
    SetIsLoading(true);
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        console.log('Error: ', err);
        SetIsLoading(false);
      });
  }, [fetchUrl]);
  // console.log('movies', movies);

  const sliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const sliderRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      {isloading ? (
        <Loader />
      ) : (
        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={sliderLeft}
            color='black'
            className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
          <div
            id='slider'
            ref={sliderRef}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
          >
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
          <MdChevronRight
            onClick={sliderRight}
            color='black'
            className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
        </div>
      )}
    </>
  );
};

export default Row;
