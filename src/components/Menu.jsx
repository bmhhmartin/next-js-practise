import React from 'react';
import Link from "next/link";

const menu = () => {
    return (
        <div>
            <ul className="flex bg-green-400 border-amber-800 pb-2">
                <li className="mr-6">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="mr-6">
                    <Link href={"/product"}>Product</Link>
                </li>
                <li className="mr-6">
                    <Link href={"/blog"}>Blog</Link>
                </li>
            </ul>
        </div>
    );
};

export default menu;