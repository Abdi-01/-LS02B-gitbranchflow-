import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from "react-icons/ai";


const Footer = () => {
    return (
        <div>
            <div className='bg-image' style={{ height: '25vh' }}>
                <h3 className='text-white text-center py-4'>Subsrcibe to get the latest stories!</h3>
                <div class="input-group mb-3 w-25  mx-auto">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-warning input-group-text fw-bold text-white" id="basic-addon2">Get Free Book</button>
                    </div>
                </div>
            </div>

            <div className='container p-5'>
                <div className='d-flex justify-content-between'>
                    <div id='logo'>
                        <p className='fw-bold text-navy'>Logo</p>
                        <p className=''>F1 456 Caron Town </p>
                        <p>Office No 3456</p>
                        <p>info@example</p>
                        <p>234-5825852753</p>
                        <p className='p-1 fw-bold text-navy'><AiFillFacebook /> <AiFillTwitterSquare /> <AiFillInstagram /> <AiFillYoutube /></p>
               
                    </div>

                    <div id='department'>
                        <p className='fw-bold text-navy'>Our Departements</p>
                        <p>Home Care </p>
                        <p>Medical & Surgarical</p>
                        <p>Mental Health</p>
                        <p>Hounlare & Intensive Care</p>
                        <p>Diagnosis & investigation</p>
                    </div>

                    <div id='links'>
                        <p className='fw-bold text-navy'>Helpful Links</p>
                        <p>Who We Are </p>
                        <p>Our Team Mission History</p>
                        <p>Award since 1990-2021</p>
                        <p>Experience Purpose</p>
                        <p>Success Story</p>
                    </div>

                    <div id='subscribe'>
                        <p className='fw-bold text-navy'>Subscribe Newsletter</p>
                        <p>Value proposition advisor </p>
                        <p>Management, Buyer success</p>
                        <div class="input-group mb-3 mx-auto">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-warning input-group-text fw-bold text-white" id="basic-addon2">Send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;

