import React from 'react'
import Footer from '../Footer/Footer'
import "./Restaurant.css"
import { Link } from 'react-router-dom'


export default function Restaurant() {
  return (
    <div>
      <div class="Res">
        <img src="https://png.pngtree.com/png-vector/20240519/ourlarge/pngtree-onam-festival-banana-leaf-and-plate-with-various-indian-food-on-png-image_12378500.png" alt="#" height="800" width="1600" />
      </div>
      <div class="Res11">
        <h2 class="Resh2">Welcome to SK Foods::::Feels the Taste</h2>
        <p class="Resp">SK Foods is a traditional and delicious restaurant where the taste meets a happiness moments in your life..</p>
      </div>

      <div id="example1">
        <h1>EAT HEALTHY</h1><h1> STAY LONGER</h1>
      </div>
      <div class="container text-center">
        <h1>VEGETERIAN FOODS</h1>
        <div class="row">
          <div class="col-md-6">
            <div className="card text-center">
              <h2>SOUTH INDIAN FOOD</h2>
              <Link to='/Southindianfood'>
              <img src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/378203i90DCF0DFBFDC6833/image-size/large?v=v2&px=999" alt="#" height="250" width="635" /></Link>
              <p>South-Indian food is a combination of spicy and non spicy dishes. People generally consume non vegetarian curries with steamed rice. The food is majorly Saiva (vegetarian food) and Asaiva (non- vegetarian food). They also have various snacks like Medu Vada and popular desserts like Payasam, to their credit. Chettinad cuisine is a famous subdivision of the Tamil Nadu cuisine that is known for its spicy and aromatic dishes. The hot, pungent dishes are sprinkled with ground spices</p>
            </div>
          </div>
          <div class="col-md-6">
            <div className="card text-center">
              <h2>NORTH INDIAN WITH TANDOORIES</h2>
              <Link to='/Northindianfood'>
              <img src="https://singaporeorchard.holidayinn.com/sites/orchard/files/styles/home_offer_highlight_big/public/2022-03/1.%20Tandoor%20dinner%20highlights.jpg?itok=fpQAPm2A" alt="#" height="250" width="635" />
              </Link>
              <p>Flatbreads like roti or paratha are baked on a tawa (griddle), and naan and kulcha are baked in a tandoor (a huge, cylindrical oven heated by charcoal). The tandoor is also used to cook main dishes like tandoori chicken. Puri and bhatura are other popular breads that are deep-fried in oil.</p>
            </div>
          </div>
          <div class="col">
            <h2>KERELA FOODS</h2>
            <img src="https://www.holidify.com/images/cmsuploads/compressed/1024px-Sadhya_DSW_20200107182950.jpg" alt="#" height="250" width="500" />
            <p>Kerala Foods is not just in the region but all across the country. The favourite ingredient of Kerala is coconut and they use it in all their dishes either in the form of oil or milk or whole. Seafood is also very popular in this region.</p>
          </div>
          <div class="col">
            <h2>KARNATAKA FOODS</h2>
            <img src="https://i0.wp.com/thestrongtraveller.com/wp-content/uploads/2020/10/mysore-bonda-min.jpg?resize=640%2C480&ssl=1" alt="#" height="250" width="500" />
            <p>Karnataka has a diverse cuisine but the food in all is considered to be the mildest when it comes to spiciness. They use chilli, jaggery and palm sugar generously. Here the food has several subcategories- </p>
          </div><div class="col">
            <h2>TELUGU FOODS</h2>
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Vegetarian_Andhra_Meal_20200107182616.jpg" alt="#" height="250" width="500" />
            <p>Telugu and Andhra food is the spiciest amongst all cuisines. They use tamarind and chilli generously, hence, making the food really hot and tangy. They majorly use lentils and coconuts in their recipe. Other popular items include pesarattu (mung bean pancake), pulihaara (tamarind and lemon rice), thotakura (amaranth–pigeon pea stew) pappu, dosakaya (yellow cucumber – pigeon pea stew), sakinalu, rawa laddu etc.</p>
          </div>
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
          <div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div><div class="col">
            Column
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
