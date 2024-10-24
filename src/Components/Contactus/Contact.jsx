import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'


export default function Contact() {
    return (
        <div>
            
            <div>
                <img src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" alt="no-image" height="800" width="1750" />
            </div>
            <div>
                <form className='card w-80 p-3 mx-auto mt-5' id='form' action="">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" name="" id="" className="form-control" />
                    <label htmlFor="" className="form-label">E-MAIL ID</label>
                    <input type="text" name="" id="" className="form-control" />
                    <label htmlFor="" className="form-label">PHONE NUMBER</label>
                    <input type="text" name="" id="" className="form-control" />
                    <label htmlFor="" className="form-label">YOUR COMMENTS / MESSAGE</label>
                    <input type="text" name="" id="" className="form-control" />
                    <br />
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" /> Keep In Touch
                        </label>
                    </div>
                    <hr />
                    <button className="btn btn-primary w-50 mt-3 mx-auto">Submit</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}
