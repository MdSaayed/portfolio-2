import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";


const ProductBrands = () => {
    const loadedBrand = useLoaderData();

    return (
        <div className=" max-w-6xl mx-auto my-16">
            <div>
                <h1 className="text-4xl font-bold text-center">Our Brands</h1>
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