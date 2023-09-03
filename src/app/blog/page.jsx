import React from 'react';
import getPostData from "@/libs/getPostData";
import Link from "next/link";



const Page = async () => {

    const data = await getPostData();


    return (
        <div>
            <h1 className="font-bold py-5 text-red-400 text-5xl">All Posts</h1>
            {
                data.map((post, index)=>(
                    <Link href={`/blog/${post.id}`} key={index}>
                        <h2>{post.id} - {post.title}</h2>
                    </Link>
                ))
            }
        </div>
    );
};

export default Page;