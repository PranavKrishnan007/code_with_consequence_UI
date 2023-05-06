import React from "react";


const BLOCK = [
    {
        title: "Inspirational Text",
        text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
    },
    {
        title: "Inspirational Text",
        text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
    },
]

export default function Block() {
    return (
        <div className="py-5">
            <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-2">
                {BLOCK.map((block) => (
                    <div className="flex justify-center flex-col p-8  ">
                        <span className='font-semibold text-5xl'>Food</span>
                        <span className='font-bold text-7xl'>Farming</span>
                        <div className="text-2xl font-semibold">
                            {block.title}
                        </div>
                        <div className="text-xl pt-3">
                            {block.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
