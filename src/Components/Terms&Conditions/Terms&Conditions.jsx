import React from 'react'
import './Terms&Conditions.css'
import Footer from '../Footer/Footer'

export default function TermsConditions() {
    return (
        <div >
            <div className='termsimage'>
                <h1 className="head-tc">
                    STANDARD TERMS AND CONDITIONS
                </h1>
            </div>
            <div className='terms-useh3'>
                <h3>STANDARD TERMS AND CONDITIONS</h3>
                <p>All customers are subject to the terms and conditions mentioned below. The below conditions are terms of legal contract between SK Foods and the customer under The Indian Contract Act 1872.</p>
            </div>
            <div className='terms-ol-li'>
                <ol>
                    <li>The customers are free to make their own menu from our exciting menu options or we also have some special packages for the customer convenience.</li>
                    <li> The customers can request our quotation free of cost by mailing us at query@SKfoods.online / whatsapp at 089832 02110 (11:00 AM to 7:00 PM IST Mon-Sun).</li>
                    <li>Any service(s) is not available will not be provided.</li>
                    <li>Order once placed will not be cancelled.</li>
                    <li>Dishes will be served only if they are ready.</li>
                    <li>Patrons are requested to wait for minimum 20 minutes after placing order.</li>
                    <li>Patrons are requested to record their complaints or suggestions at the counter.</li>
                    <li>Your cordial co-operation is solicited.</li>
                    <li>We are not responsible for your precious things, so please keep it safe.</li>
                    <li>Parking at owners risk & responsibility.</li>
                    <li>GST tax applicable.</li>
                    <li>We are a drug/alcohol free hotel and do not allow the usage of any kind of drugs or narcotics in our Restaurant.</li>
                </ol>
            </div>

            <Footer />
        </div>
    )
}
