import React, { useContext } from 'react'
import MovieContext from '../../MovieRecContext';
import SingleMoviePoster from '../moviePoster/singleMoviePoster';

const Favorites = () => {
    const { MovieFavoritesPoster } = useContext(MovieContext);
    return (
        <section id="iq-favorites">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between rtl">
                            <h4 class="main-title">نزدیک به سلیقه شما</h4>
                            <a href="movie-category.html" class="text-primary">دیدن همه</a>
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

export default Favorites;