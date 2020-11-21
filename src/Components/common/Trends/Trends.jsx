import React, { useContext } from 'react'
import MovieContext from '../../MovieRecContext';
import { Link } from 'react-router-dom';
import SingleMoviePoster from './../moviePoster/singleMoviePoster';

const Trends = () => {
    const { MovieFavoritesPoster } = useContext(MovieContext);
    return (
        <section id="iq-favorites">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between rtl">
                            <h4 class="main-title rtl">بیشترین بازدید های تازه</h4>
                            <Link to="movie-category.html" class="text-primary rtl">دیدن همه</Link>
                        </div>
                        <div class="favorites-contens">
                            <ul class="favorites-slider list-inline row p-0 mb-0">
                                
                                    {
                                        MovieFavoritesPoster.map(movie => (
                                            <SingleMoviePoster name={movie.name} key={movie.id}
                                                id={movie.id} imgURL={movie.imgURL}
                                                releaseDate={movie.releaseDate} genre={movie.genre} />
                                        ))
                                    }

                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trends;