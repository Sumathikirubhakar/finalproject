import React from 'react'
import Footer from '../Footer/Footer'
import "./Restaurant.css"
import { Link } from 'react-router-dom'


export default function Restaurant() {
  return (
    <div className='restpage'>
      <div class="Res">
        <img src="https://banner2.cleanpng.com/20180704/ikt/kisspng-gia-nina-s-pizza-italian-cuisine-restaurant-menu-w-welcome-man-5b3cbc3e9d92f9.0140877115307070066454.jpg" alt="#" height="800" width="100%" />
      </div>
      <div class="Res11">
        <h2 class="Resh2">Welcome to SK Foods::::Feels the Taste</h2>
        <p class="Resp">SK Foods is a traditional and delicious restaurant where the taste meets a happiness moments in your life..</p>
      </div>

      <div id="example1">
        <h1>EAT HEALTHY</h1><h1> STAY LONGER</h1>
      </div>
      <div class="container text-center">
        <br />
        <h1>VEGETERIAN FOODS</h1>
        <div class="row">
          <div class="col-md-6">
            <div className="card text-center">
              <h2>SOUTH INDIAN FOOD</h2>
              <Link to='/Southindianfood'>
                <img src="https://external-preview.redd.it/UFSf8C-0VMlZoUFN0xrnuB6VAMWUlpQlIBvM6O0F4uU.jpg?auto=webp&s=d48cb010a38d2a65c71c4d5ac342d0f05f0800f0" alt="#" height="250" width="500" /></Link>
              <p>South-Indian food is a combination of spicy and non spicy dishes. People generally consume non vegetarian curries with steamed rice. The food is majorly Saiva (vegetarian food) and Asaiva (non- vegetarian food). </p>
            </div>
          </div>
          <div class="col-md-6">
            <div className="card text-center">
              <h2>NORTH INDIAN WITH TANDOORIES</h2>
              <Link to='/Northindianfood'>
                <img src="https://singaporeorchard.holidayinn.com/sites/orchard/files/styles/home_offer_highlight_big/public/2022-03/1.%20Tandoor%20dinner%20highlights.jpg?itok=fpQAPm2A" alt="#" height="250" width="500" />
              </Link>
              <p>Flatbreads like roti or paratha are baked on a tawa (griddle), and naan and kulcha are baked in a tandoor (a huge, cylindrical oven heated by charcoal). The tandoor is also used to cook main dishes like tandoori chicken.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div className="card text-center">
              <h2>KERELA FOODS</h2>
              <Link to='/kerelafoods'>
                <img src="https://www.holidify.com/images/cmsuploads/compressed/1024px-Sadhya_DSW_20200107182950.jpg" alt="#" height="250" width="500" />
              </Link>
              <p>Kerala Foods is not just in the region but all across the country. The favourite ingredient of Kerala is coconut and they use it in all their dishes either in the form of oil or milk or whole. Seafood is also very popular in this region.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div className='card text-center'>
              <h2>KARNATAKA FOODS</h2>
              <Link to='/Karnatakafoods'>
              <img src="https://i0.wp.com/thestrongtraveller.com/wp-content/uploads/2020/10/mysore-bonda-min.jpg?resize=640%2C480&ssl=1" alt="#" height="250" width="500" />
              </Link>
              <p>Karnataka has a diverse cuisine but the food in all is considered to be the mildest when it comes to spiciness. They use chilli, jaggery and palm sugar generously. Here the food has several subcategories- </p>
            </div>
          </div>
          <br />
          <h1>NON - VEGETARIAN FOODS</h1>
          <div class="col">
            <h2>ANDHRA - HYDERABAD BIRIYANI</h2>
            <img src="https://static.wixstatic.com/media/91e241_26dce2c484624aa28541e732e2b763c2~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85,enc_auto/91e241_26dce2c484624aa28541e732e2b763c2~mv2.jpg" alt="#" height="250" width="500" />
            <p> From the Royal Mughal Kitchen now stands as the legacy food for all food lovers. Even though the exact origin of this aromatic dish is unknown it is credited to the kitchen of Nizam-ul-Mulk, Asaf Jah- the first Nizam of Hyderabad. Passing the test of time and tide, Biryani not only became popular but the face of Indian food.</p>
          </div>
          <div class="col">
            <h2>TN- DINDIGUL BIRIYANI</h2>
            <img src="https://static.wixstatic.com/media/91e241_06fe88a0d6ce42bda1ddce75234ea3a9~mv2.jpg/v1/fill/w_925,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/91e241_06fe88a0d6ce42bda1ddce75234ea3a9~mv2.jpg" alt="#" height="250" width="500" />
            <p>One of the biryanis of India is the signature biryani from Tamil Nadu. Dindigul Biryani is a spicy variant of biryani one can ever lay his hands on! This biryani uses the standard biryani masala but is topped with a lot of pepper, offering a tempting orangish hue. This biryani uses jeera sambar rice instead of the usual basmati rice, giving it a unique taste.</p>
          </div>
          <div class="col">
            <h2>TN - AMBUR BIRIYANI</h2>
            <img src="https://static.wixstatic.com/media/91e241_5d2f50985db645d4828ba0c82698d584~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/91e241_5d2f50985db645d4828ba0c82698d584~mv2.jpg" alt="#" height="250" width="500" />
            <p>Originating from a quaint town in Tamil Nadu, Ambur is famous for its biryani. If you have taken a road trip from Chennai to Bangalore, chances are you have probably seen several biryani outlets dotting the highway. Ambur Biryani has a super tangy flavour due to its marinating style and ingredients. Typically, chefs soak the meat in curd and coat it with mint and coriander chutney before adding it to the rice.</p>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
