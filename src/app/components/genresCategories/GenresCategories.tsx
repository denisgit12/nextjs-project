import React from 'react';
import {movieServer} from "@/app/services/movie";
import ImageSlider from "@/app/components/trendingSlider/TrendingSlider";

const GenresCategories = async () => {
    const genres = await movieServer.getAllGenre()
    console.log(genres)
    return (
        <main>
            <section>
                <div>
                    <h2>
                        Explore our wide variety of categories
                    </h2>
                    <p>
                        Whether you are looking for a comedy to make you laugh, a drama to make you think, or a
                        documentary
                        to learn something new

                    </p>
                </div>
                <div>

                </div>

            </section>
            <ImageSlider/>
            <section>

            </section>
        </main>
    );
};

export default GenresCategories;