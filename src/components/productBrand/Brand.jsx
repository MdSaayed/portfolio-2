import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { brandname, barndimgUrl } = brand;
    return (
        <Link to={`/products/${brandname}`}>

            <div className="shadow hover:shadow-md rounded">
                <div className="h-[250px] flex justify-center">
                    <img className="w-full" src={barndimgUrl} alt="" />
                </div>
                <div className="text-center p-4">
                    <h2 className="font-blod text-2xl">{brandname}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;