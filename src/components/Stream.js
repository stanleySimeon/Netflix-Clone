/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { getMovie } from '../redux/reducers/moviesReducer';
import { saveFeatured } from '../redux/reducers/featuredMovieReducer';
import Navigation from './Navigation';
import MovieCard from './MovieCard';
import FeaturedMovie from './FeaturedMovie';

export default function Stream() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0] || []);
  const featured = useSelector((state) => state.featured);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const saveFeaturedMovie = (movie) => {
    dispatch(saveFeatured(movie));
  };

  return (
    <>
      <Navigation />
      <div className="w-full">
        {
          featured && (
            <FeaturedMovie
              movie={featured}
              summary={featured.summary}
              saveFeaturedMovie={saveFeaturedMovie}
            />
          )
        }
      </div>
      <div className="relative flex flex-col bg-netflix-black px-3 md:px-8">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-full h-full flex mt-8 lg:mt-12 z-10"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 639,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="flex flex-wrap -mx-4">
            <h2 className="text-2xl font-bold mb-8">Popular Movies</h2>
            {movies.slice().map((movie) => (
              <MovieCard movie={movie} key={movie.id} saveFeaturedMovie={saveFeaturedMovie} />
            ))}
          </div>
        </Carousel>
      </div>
    </>
  );
}
