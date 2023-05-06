import React from "react";
import {CiInstagram, CiMail, CiTwitter} from "react-icons/ci";


export default function Footer() {
    return (
        <div className="py-5">
            <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-2">
                    <div className="flex justify-center flex-col p-8  ">
                        <span className='font-semibold text-md'>Contact</span>
                        <div className="text-md pt-3">
                            pfund@gmail.com
                        </div>
                        <div className="text-md pt-3 ">
                            #177A/bleecker street
                        </div>
                    </div>
                <div className="flex justify-center flex-col p-8  ">
                    <span className='font-semibold text-md'>Follow us</span>
                    <div className="flex gap-3  text-md pt-3">
                        <CiMail size={22}/>
                        <CiInstagram size={22}/>
                        <CiTwitter size={22}/>
                    </div>
                    <div className="text-md pt-3 ">
                        __BlankFunds__.org
                    </div>
                </div>
            </div>
        </div>
    );
}
