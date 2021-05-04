import React from 'react';
import gallery1 from './gallery1.jfif';
import gallery2 from './gallery2.jfif';
import gallery3 from './gallery3.jfif';
function Divider(){
    return(
        <>
        <hr class="featurette-divider"/>

<div class="row featurette d-flex justify-content-center align-items-center">
  <div class="col-md-7">
    <h2 class="featurette-heading">Create anything, for anyone. </h2>
    <p class="lead">WordPress.com allows you to build a website that meets your unique needs. Start a blog, business site, portfolio, online store, or anything else you can imagine.

        With built-in optimization and responsive, mobile-ready themes, there’s no limit to who you can reach with your new website. Create a simple website for your family or sell products around the world—it’s up to you.
        
        </p>
  </div>
  <div class="col-md-5">
   <img src={gallery1} alt="..." srcset=""/>

  </div>
</div>

<hr class="featurette-divider "/>

<div class="row featurette d-flex justify-content-center align-items-center">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading">Plans that fit your needs. </h2>
    <p class="lead">No matter the size of your budget, CMS has a plan that’s right for you. Create a free website and get access to professional themes, 3 GB of storage space, community support, and more.

        If you need more features, you can choose from one of three affordable plans. With each plan you’ll get a custom domain name, more space for your files, and priority support. Some plans also include advanced design customization, monetization tools, and the ability to upload custom CMS plugins or themes</p>
  </div>
  <div class="col-md-5 order-md-1">
    <img src={gallery2} alt="..." srcset=""/>
  </div>
</div>

<hr class="featurette-divider"/>

<div class="row featurette d-flex justify-content-center align-items-center">
  <div class="col-md-7">
    <h2 class="featurette-heading">Powerful advanced settings </h2>
    <p class="lead">Our powerful and easy to use tools make domain management effortless. Everything you need in a simple interface.Grab your domain name now so you don't have to compromise later. Every domain includes a beautiful temporary placeholder page, that you can replace with a full site whenever you're ready.</p>
  </div>
  <div class="col-md-5">
    <img src={gallery3} alt="..." srcset=""/>
  </div>
</div>

<hr class="featurette-divider"/>
    </>
    );
    }
    export default Divider