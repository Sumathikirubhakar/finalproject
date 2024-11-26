import React from 'react'
import Footer from '../Footer/Footer'
import "./Brandstory.css"

export default function Brandstory() {
    return (
        <div>
            <div>
                <img src="https://www.nh-hotels.com/nhpro/assets/uploads/2024/08/20132457/nhow_Frankfurt_Lobby_and_reception_empty_lamps_counter_flowers-8256x5504-1-1920x1280.jpg" alt="noimage" height="500" width="1600" />
            </div>
            <div class="brandh3">
                <h3>Our brands are agile, responsive, and go the
                    extra mile to create memorable experiences
                    for our patrons.
                    When a brand establishes new
                    promises to serve its patrons better, its story
                    needs to be told.</h3>
                <ul>
                    <li>Our iconic brand, SK, continues to grow from strength
                        to strength every year. Additionally, our endeavour is
                        to take our other brands to new heights, not just in
                        accommodations, but across our array of service offerings.
                        Our objective is to maximise the potential of each brand,
                        including those nested under the services segment
                    </li>
                    <li>We constantly revisit and fine-tune the purpose and
                        performance of our brands. Not just that, we explore
                        prospects to monetise these brands, once they reach a
                        critical mass.</li>
                    <li>This is critical to achieve sustainable growth
                        and profitability for our Company. Our approach is to keep
                        an alert eye on evolving market dynamics and course-correct
                        our branding approach to suit different market segments and
                        not leave any space unexplored.</li>
                    <li>Our brand strategy is paying rich dividends as reflected in our
                        dominating positioning across all segments.</li>
                </ul>
            </div>
            <div class="card-group">
                <div class="card bg-primary">
                    <div class="card-body">
                        <img src="https://openclipart.org/download/217481/Walking-to-the-future.svg" alt="noimage" height="100" width="200" />
                        <h2>FUTURE STRATEGY</h2>
                        <p class="card-text">SK Trails & Stays will add two more
                            heritage residences in Foreign and state countries by mid next
                            year and continue to integrate within its
                            fold differentiated stay experiences across
                            distinct locations in different states and foreign countries adding upto 100
                            hotels by 2030.</p>
                    </div>
                </div>
                <div class="card bg-warning">
                    <div class="card-body">
                        <img src="https://www.pngplay.com/wp-content/uploads/8/Vision-PNG-Free-File-Download.png" alt="noimage" height="100" width="200" />
                        <h2>OUR VISSION</h2>
                        <p class="card-text">“To profitably operate the largest
                            kitchen capacity in India while
                            staying on the forefront of food
                            production technologies.” </p>
                    </div>
                </div>
                <div class="card bg-success">
                    <div class="card-body">
                        <img src="https://www.pngplay.com/wp-content/uploads/7/Mission-Target-Transparent-File.png" alt="noimage" height="100" width="200" />
                        <h2>OUR MISSION</h2>
                        <p class="card-text">Our mission is to create experiences by embracing and empowering a diverse collective of team members, collaborators, and guests, who chose to call The Standard home.</p>
                    </div>
                </div>
                <div class="card bg-danger">
                    <div class="card-body">
                        <img src="https://www.cdnlogo.com/logos/q/11/quality-hotel.svg" alt="noimage" height="100" width="200" />
                        <h2>SK's BRAND QUALITY</h2>
                        {/* <p class="card-text">Some text inside the fourth card</p> */}
                        <ul>
                            <li>Sincerity: honest, genuine, cheerful, down-to-earth.</li>
                            <li>Excitement: daring, spirited, imaginative, up-to-date.</li>
                            <li>Competence: reliable, intelligent, successful, efficient.</li>
                            <li>Sophistication: glamorous, charming, romantic, upper class.</li>
                            <li>Ruggedness: outdoorsy, tough, strong, rugged.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
