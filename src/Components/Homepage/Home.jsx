import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

export default function Home() {
    return (
        <div className='homepage'>
            <div class="food position-relative top-0">
                <img src="restaurant.png " alt="no image" className='img-fluid' />
            </div>
            <div class="contents">
                <h1 class="d">Welcome to SK Foods and Snacks: Feels the taste</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, rem?</p>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img src="southtraditionalfood.png" alt="no image" height={600} width={1550} />
                    <Carousel.Caption>
                        <h3>SOUTH INDIAN FOOD</h3>
                        <p>South Indian cuisine's focus on fermented foods, whole grains, and probiotics, along with spices like turmeric and cumin, makes it a delicious and nutritious choice...!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="northtraditionalfood.png" alt="no image" height={600} width={1550} />
                    <Carousel.Caption>
                        <h3>NORTH INDIAN FOOD</h3>
                        <p> North Indian food, while sometimes higher in fat, provides robust flavors and a wealth of protein and fibers....!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="tandooritraditional.png" alt="no image" height={600} width={1550} />
                    <Carousel.Caption>
                        <h3>TANDOORI & DELIGHTS</h3>
                        <p>The Tandoor is constructed, is an art and to perfect this art it takes years of experience. Tandoor can be used for homemade purposes while it could be used for commercials...!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="teateasnacks.png" alt="no image" height={600} width={1550} />
                    <Carousel.Caption>
                        <h3>REFRESH AND CHATS</h3>
                        <p>The Tandoor is constructed, is an art and to perfect this art it takes years of experience. Tandoor can be used for homemade purposes while it could be used for commercials...!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="juices.png" alt="no image" height={600} width={1550} />
                    <Carousel.Caption>
                        <h3>HOT AND CHILL DRINKS</h3>
                        <p>Consuming energy drinks before exercise is thought to improve mental focus, alertness, anaerobic performance, and/or endurance performance....</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
