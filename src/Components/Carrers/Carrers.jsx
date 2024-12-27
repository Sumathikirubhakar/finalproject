import React from 'react'
import './Carrers.css'
import Footer from '../Footer/Footer'

export default function Carrers() {
    return (
        <div className='carrer'>
            <div>
                <img src="https://dpmiindia.com/blog/wp-content/uploads/2024/04/hotel-management-courses.jpg" alt="noimage" height="800" width="100%" />
            </div>

            <div class="skcarrers">
                <h2>Join our Team @ SK FOODS and SNACKS..</h2>
                <p>Welcome to SK Careers page. We're delighted that you're considering joining our team. Explore the exciting career opportunities below and become a part of our SK family.</p>
            </div>

            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item my-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            SENIOR CHEF
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <h3>JOB DESCRIPTION:</h3>
                            <p>Your role is to assist the Head Chef and Sous Chef to achieve the highest standards of
                                food production and customer satisfaction, contribute to the achievement of Gross Profit
                                targets, maintain a safe and hygienic kitchen environment, work effectively with other
                                colleagues, kitchen and other departments, and provide effective internal service.</p>
                            <h4>ELIGIBILITY CRITERIA:</h4>
                            <ul>
                                <li> Five years as a chef de cuisine, executive sous chef or chef in charge of food production in a foodservice operation.</li>
                                <li> Must have supervised at least five fulltime people in the preparation of food.</li>
                                <li> Experience must be within the past ten years.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item my-4">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            HOTEL DIRECTOR
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <h3>JOB DESCRIPTION:</h3>
                            <p>The primary responsibilities of a Hotel Director include managing hotel staff, ensuring guest satisfaction, overseeing financial performance, implementing marketing strategies, maintaining quality standards, and handling day-to-day hotel operations.</p>
                            <h4>ELIGIBILITY CRITERIA:</h4>
                            <ul>
                                <li>The Director of Hotel operations is in-charrge of maintaining and improving sevice standards. </li>
                                <li>Maitaining Brand standards.</li>
                                <li>Develop cost-cutting strategies and procedures.</li>
                                <li>Assisting Executive Leadership with developement and implementation of revenue-generating initiatives.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item my-4">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            EVENT MANAGER
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <h3>JOB DESCRIPTION:</h3>
                            <p>Responsible for all of the hotel's events spaces including dining rooms, conference rooms, large ballrooms, and sometimes even concert venues. That means you need to understand the particular features and possibilities that are unique each room.</p>
                            <h4>ELIGIBILITY CRITERIA:</h4>
                            <ul>
                                <li>Plan and execute events for internal and external purposes.</li>
                                <li>Keep event plans under budget and on schedule.</li>
                                <li>Maintain accurate records of all expenditures.</li>
                                <li>Ensure events are carried out successfully.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
