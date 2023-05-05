import React from 'react';

export default function AboutSection() {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-row bg-background drop-shadow-3xl'>
                <div className='w-1/2 flex flex-col py-20 pl-20'>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-5xl'>Food</span><span className='font-bold text-7xl'>Farming</span>
                        <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} className='pt-5 ml-2'/>
                        <div className='p-10'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-10 flex justify-center items-center'>
                    <img src='/assets/kids_looking_up.png' alt='kids' width={500} height={500} />
                </div>
            </div>
            <div className='flex flex-row bg-background drop-shadow-3xl'>
                <div className='w-1/2 flex flex-col py-20 pl-20'>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-5xl'>Food</span><span className='font-bold text-7xl'>Farming</span>
                        <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} className='pt-5 ml-2'/>
                        <div className='p-10'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-10 flex justify-center items-center'>
                    <img src='/assets/kids_looking_up.png' alt='kids' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}
