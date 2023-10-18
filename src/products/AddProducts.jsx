import { toast } from "react-toastify";

const AddProducts = () => {
    const brands = ["Apple", "Samsung", "Sony", "LG", "Microsoft", "Google"];
    const categories = ["Phone", "Headphone", "Watch", "Tablet", "Laptop", "Smart Home"];

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productImgUrl = form.productImgUrl.value;
        const brandName = form.brand.value;
        const category = form.category.value;
        const productPrice = form.productPrice.value;
        const shortDescription = form.shortDescription.value;

        const product = {
            productName,
            productImgUrl,
            brandName,
            category,
            productPrice,
            shortDescription
        }

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => toast.success('Product added successfully.'))
            .then(data => console.log(data))

    }

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="bg-blue-700 p-2 text-center text-3xl text-white">Add new product</h2>
            </div>
            <div className="my-16 border p-4">
                <form onSubmit={handleAddProduct}>
                    <label className="font-bold" htmlFor=" productName">Product name:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" required type="text" name='productName' placeholder="Product name" /> <br />
                    <label className="font-bold" htmlFor=" productImgUrl">Product image url:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" required type="text" name='productImgUrl' placeholder="Product image url" /> <br />
                    <label className="font-bold" htmlFor=" brand">Brand Name:</label><br />
                    <select id="brand" name="brand" required className="p-1 mb-4 rounded border w-full">
                        <option value="">Select a brand</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select> <br />
                    <label className="font-bold" htmlFor=" category">Category:</label><br />
                    <select id="category" name="category" required className="p-1 mb-4 rounded border w-full">
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select> <br />
                    <label className="font-bold" htmlFor=" price">Product price:</label><br />
                    <input className="p-1 mb-4 rounded border w-full" required type="number" name='productPrice' placeholder="Product price" /> <br />
                    <label className="font-bold" htmlFor=" description">Product short description:</label><br />
                    <textarea className="h-44 p-1 mb-4 rounded border w-full" type="text" name='shortDescription' placeholder="Product short description" /> <br />

                    <input className="p-1 mb-4 rounded bg-blue-700 w-full text-white" type="submit" value={'Add product'} />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
