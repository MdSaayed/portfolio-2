import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useEffect, useState } from "react";


const ProductBrands = () => {
    const [loadedBrand, setLoadedBrand] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/brands')
            .then(res => res.json())
            .then(data => setLoadedBrand(data))
    },[])

    return (
        <div className=" max-w-6xl mx-auto my-16 px-2 md:px-0">
            <div>
                <h1 className="text-4xl font-bold text-center">Product Brands</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
                {
                    loadedBrand?.map((brand) => <Brand key={brand._id} brand={brand} />)
                }
            </div>
        </div>
    );
};

export default ProductBrands;