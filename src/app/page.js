import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <h1 className="text-5xl">Homepage</h1>
            <h2>{process.env.API_KEY}</h2>
            <h2>{process.env.API_SECRET}</h2>
            <Image className='my-10' src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg"
                 height={300}
                 width={500} layout="fixed" placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896' alt="nature"/>

        </div>
    );
};

export default Page;