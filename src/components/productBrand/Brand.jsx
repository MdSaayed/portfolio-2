import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { productName, brandName } = brand;
    return (
        <Link to={`/products/${brandName}`}>

            <div className="border p-4">
                <div className="h-[250px] flex justify-center">
                    <img src="https://i.ibb.co/9p4MbPq/hero-ecv967jz1y82-medium.jpg" alt="" />
                </div>
                <div className="text-center">
                    <h2 className="font-blod text-2xl">{productName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;