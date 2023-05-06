import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const SideInfoCard = ({ org }) => {
    return (
        <div className="flex flex-col h-screen p-8 bg-primary text-background max-w-lg space-y-7 ">
            <div>
                <h3 className="text-3xl mb-4">{org.name}</h3>
                <div className="max-h-[250px] overflow-clip line-clamp-6 mb-4">
                    <p>{org.details}</p>
                </div>
                <div className="flex flex-col space-y-3 mb-4">
                    <div className="flex flex-row items-center">
                        <BsTelephone />
                        <p className="px-3">{org.phone}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <FiMail />
                        <p className="px-3">{org.email}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="w-full bg-primary border-background border-2 rounded-full">
                        <div
                            className="bg-tertiary text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
                            style={{ width: "45%" }}
                        >
                            {" "}
                            45%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-primary font-medium w-fit py-3 px-5 bg-background text-primary cursor-pointer hover:shadow-lg">
                        Donate
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideInfoCard;