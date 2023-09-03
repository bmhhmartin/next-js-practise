"use client"

import React from 'react';
import getSinglePost from "@/libs/getSinglePost";

const Page = async ({params}) => {

    const id = params.id;

    const singleBlog = await getSinglePost(id)

    return (
        <div>
            <h3 className="font-bold text-green-600">{singleBlog.title}</h3>
            <p className="text-green-950">{singleBlog.body}</p>
        </div>
    );
};

export default Page;