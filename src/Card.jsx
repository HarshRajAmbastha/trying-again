import React from 'react';
import passion from './passion.jpg';
import imaze from './imaze.webp';
import past from './past.jfif';
function Card(){
    return(
        <>
        <div class="card-group my-4">
        <div class="card">
            <img src={passion} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">Follow Your Passions</h3>
                <p class="card-text">Content Management System provides you  the best place to relax and recharge yourself.With your
                    passion in WebD ,you will discover a new intrest by joining this group</p>
               
            </div>
        </div>
        <div class="card">
            <img src={past} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">Glorious Past</h3>
                <p class="card-text">CMS started off with a group of dedicated members committing to bring out a
                    system that would reinvigorate the love for WebD among common people.Today it gives you everything you need to start your website  from Free hosting, your own domain, a world-class support team, and so much more.
                </p>
               
            </div>
        </div>
        <div class="card">
            <img src={imaze} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">A Dedicated Team</h3>
                <p class="card-text">CMS continues to work as a platform for promoting and nurturing the WebD
                    talent of the  community , while remaining one of the most dynamic and active
                    student groups acrss the globe.</p>
               
            </div>
        </div>
    </div>
    </>
    );
    }
    export default Card