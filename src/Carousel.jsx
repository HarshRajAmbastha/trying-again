import React from 'react';
import kshitiz1 from './kshitiz1.jfif';
import kshitiz2 from './kshitiz2.jfif';
import kshitiz3 from './kshitiz3.jfif';

function Carousel(){
    return(
<>


    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={kshitiz1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>CMS-A Heaven for Developers</h1>
                    <p>One of the best system of learning</p>
                </div>
            </div>

            <div class="carousel-item">
                <img src={kshitiz2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>CMS-A Heaven for Developers</h1>
                    <p>An effective tool for web develoment</p>
                </div>
            </div>

            <div class="carousel-item">
                <img src={kshitiz3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>CMS-A Heaven for Developers</h1>
                    <p>platform for promoting and nurturing the WebD talent of the  community worldwide.</p>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </>
    );
}
export default Carousel