"use client"
import Image from 'next/image'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '@/Components/ProductCard';
import { Product } from '@/Models/apiInterfaces';

export default function Home() {
    const [data, setData] = useState<Product[] | null>(null);



    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://fakestoreapi.com/products');
            const data = await res.data;
            setData(data);
            console.log(data)
        }
        fetchData();
    }, []);



    const ProductsCardsList= (productsData : Product[])=> {
        return <div className="mt-16">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4">
                
                {productsData.map(prompt => {
                console.log(prompt);
                
                return<>
                <ProductCard
                    key={prompt.id}
                    title='hii'
                /></>
            })}
            </div>
            
        </div>
    }


    return (

        <main className="dark:bg-gray-800 bg-white relative overflow-hidden min-h-screen">

            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Be on
                            <span className="text-5xl sm:text-7xl">
                                Time
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img alt='applewatch' src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
            <div className="flex">
                <ProductCard key="helloji123" title='Shubhi Khemka' />
               {/* {data && <ProductsCardsList productsData={data} /> }  */}
                {data && ProductsCardsList(data)}
              

            </div>

        </main>

    )
}
