import { toast } from "react-toastify";


const AddBrands = () => {
    const handleAddBrand = (e) => {
        e.preventDefault();
        const form = e.target;

        const brandname = form.brandname.value;
        const barndimgUrl = form.barndimgUrl.value;
        const brandDesc = form.brandDesc.value;

        const brand = {
            brandname,
            barndimgUrl,
            brandDesc,
        }

        fetch('http://localhost:3000/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brand)
        })
            .then(res => toast.success('Brand added successfully.'))
            .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleAddBrand}>
                <label className="font-bold" htmlFor="brandName">Brand name:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Adde your brand name" name="brandname" required />
                <label className="font-bold" htmlFor="brandName">Brand image url:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Brand img url" name="barndimgUrl" required />
                <label className="font-bold" htmlFor="brandName">Brand description:</label>
                <textarea className="p-1 mb-4 rounded border w-full" type="text" placeholder="Brand description" name="brandDesc" />
                <input className="bg-blue-700 px-4 py-1 text-white rounded-sm" type="submit" value={'Add Brand'} />
            </form>
        </div>
    );
};

export default AddBrands;