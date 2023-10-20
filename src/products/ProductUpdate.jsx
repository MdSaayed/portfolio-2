import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const ProductUpdate = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const loadedData = useLoaderData();
    const ratig = [1, 2, 3, 4, 5];


    useEffect(() => {
        fetch('https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBrands(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productImgUrl = form.productImgUrl.value;
        const brandName = form.brand.value;
        const category = form.category.value;
        const productPrice = form.productPrice.value;
        const shortDescription = form.shortDescription.value;
        const ratig = form.ratig.value;

        const updateProduct = {
            productName,
            productImgUrl,
            brandName,
            category,
            productPrice,
            shortDescription,
            ratig
        }

        fetch(`https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/products/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => {
                toast.success('Product update successfully.');
            })
            .then(data => console.log(data))

    }

    return (
        <div className="max-w-6xl mx-auto py-16">
            <div>
                <h2 className="bg-blue-700 p-2 text-center text-3xl text-white">Update product</h2>
            </div>
            <div className="my-16 border p-4">
                <form onSubmit={handleAddProduct}>
                    <label className="font-bold" htmlFor="productName">Product name:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" type="text" name='productName' placeholder="Product name" defaultValue={loadedData.productName} /> <br />
                    <label className="font-bold" htmlFor="productImgUrl">Product image url:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" type="text" name='productImgUrl' placeholder="Product image url" defaultValue={loadedData.productImgUrl} /> <br />
                    <label className="font-bold" htmlFor="brand">Brand Name:</label><br />
                    <select id="brand" name="brand" className="p-1 mb-4 rounded border w-full">
                        <option value="">Select a brand</option>
                        {brands?.map((brand, index) => (
                            <option key={index} value={brand.brandname} selected={loadedData?.brandName === brand?.brandname}>{brand?.brandname}</option>
                        ))}
                    </select>
                    <br />
                    <label className="font-bold" htmlFor="category">Category:</label><br />
                    <select id="category" name="category" className="p-1 mb-4 rounded border w-full">
                        <option value="">Select a category</option>
                        {categories.map((ctg, index) => (
                            <option key={index} value={ctg.name} selected={loadedData?.category === ctg.name}>{ctg.name}</option>
                        ))}
                    </select><br />
                    <label className="font-bold" htmlFor="rating">Rating:</label><br />
                    <select id="rating" name="rating" className="p-1 mb-4 rounded border w-full">
                        <option value="">Select a rating</option>
                        {ratig.map((rtg, index) => (
                            <option key={index} value={rtg} selected={loadedData?.ratig == rtg}>{rtg}</option>
                        ))}
                    </select><br />


                    <label className="font-bold" htmlFor="price">Product price:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" type="number" name='productPrice' placeholder="Product price" defaultValue={loadedData.productPrice} /> <br />
                    <label className="font-bold" htmlFor="description">Product short description:</label><br />
                    <textarea className="h-44 p-1 mb-4 rounded border w-full" type="text" name='shortDescription' placeholder="Product short description" defaultValue={loadedData.shortDescription} /> <br />

                    <input className="p-1 mb-4 rounded bg-blue-700 w-full text-white" type="submit" value={'Update product'} />
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;