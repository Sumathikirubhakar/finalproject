import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Experience from '../Experience/Experience';

export default function Home() {
    const local = localStorage.getItem("user")
    console.log(local);
    
    return (
        <div className='homepage'>
            <div class="food position-relative top-0">
                <img src="restaurant.png " alt="noimage" className='img-fluid' />
            </div>
            <div class="contents">
                <h1 class="d">Welcome to SK Foods and Snacks: Feels the taste</h1>
                <p>“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”</p>
            </div>
           
            <Carousel>
                <Carousel.Item>
                    <img src="southtraditionalfood.png" alt="noimage" height={600} width={'100%'} />
                    <Carousel.Caption>
                        <h3>SOUTH INDIAN FOOD</h3>
                        <p>South Indian cuisine's focus on fermented foods, whole grains, and probiotics, along with spices like turmeric and cumin, makes it a delicious and nutritious choice...!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="northtraditionalfood.png" alt="noimage" height={600} width={'100%'} />
                    <Carousel.Caption>
                        <h3>NORTH INDIAN FOOD</h3>
                        <p> North Indian food, while sometimes higher in fat, provides robust flavors and a wealth of protein and fibers....!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="tandooritraditional.png" alt="noimage" height={600} width={'100%'} />
                    <Carousel.Caption>
                        <h3>TANDOORI & DELIGHTS</h3>
                        <p>Chutney and chill? Forget Netflix, my kind of night involves dipping into something spicy. 🎥🌶️...!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="teateasnacks.png" alt="noimage" height={600} width={'100%'} />
                    <Carousel.Caption>
                        <h3>REFRESH AND CHATS</h3>
                        <p>Chai or coffee? Start the debate in the comments while I sip on my favorite ☕.....!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="juices.png" alt="noimage" height={600} width={'100%'} />
                    <Carousel.Caption>
                        <h3>HOT AND CHILL DRINKS</h3>
                        <p>Cheers to the perfect cold drink!....</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Experience />

        </div>
    )
}
