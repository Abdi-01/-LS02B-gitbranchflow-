import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiTwotonePhone, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <div className='bg-light d-flex justify-content-between' >
                <p className='p-1 px-4 fw-bold text-navy'>Follow us: <AiFillFacebook /> <AiFillTwitterSquare /> <AiFillInstagram /> <AiFillYoutube /></p>
                <p className='p-1 px-4 text-navy'><AiTwotonePhone /> (818) 919-5679</p>
            </div>
            
            <div className='d-flex p-1 px-4'>
                <div className='col-4 d-flex justify-content-between'>
                    <h5 className='text-newsreader text-navy'>News Reporting</h5>
                    <p className='mt-1 text-navy'>Stories</p>
                    <p className='mt-1 text-navy'>Forum</p>
                    <p className='mt-1 text-navy'>Store</p>
                    <p className='mt-1 text-navy'>Contact</p>
                </div>

                <div className='col-7'>

                </div>

                <div className='col-1 ps-5 ms-4 d-flex justify-content-evenly'>
                    <p><AiOutlineSearch/></p>
                    <p><AiOutlineShopping/></p>
                </div>
            </div>

            <div className='bg-mutedyellow px-4'>
                <p className='p-1 fw-bold text-navy px-5'>Create free account to join discussion <span className='text-muted fw-light'>x</span></p>
            </div>

        </div>
    )
}

export default Navbar;

