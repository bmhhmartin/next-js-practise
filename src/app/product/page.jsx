
import React from 'react';

async function getData(){
    const res = await fetch('https://dummyjson.com/products/1');
    return res.json();
}

const page = async () => {

    const data = await getData();

    return (
        <div>
            <h1 className="text-5xl">Product Page</h1>

            {JSON.stringify(data)}

        </div>
    );
};

export default page;