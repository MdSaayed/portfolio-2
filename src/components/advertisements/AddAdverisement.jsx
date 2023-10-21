import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddAdverisement = () => {
    const [brands, setBrands] = useState([]);

    // fetch brands
    useEffect(() => {
        fetch('https://brand-server-pi.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBrands(data);
            })
    }, [])

    const handleAdvertisements = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.title.value;
        const advertisementsImg = form.advertisementsImg.value;
        const advertisementsDesc = form.advertisementsDesc.value;
        const brand = form.brand.value;

        const advertisement = {
            name,
            advertisementsImg,
            advertisementsDesc,
            brand
        }

        fetch('https://brand-server-pi.vercel.app/advertisement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisement)
        })
            .then(res => toast.success("Advertisement added successfully."))
            .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleAdvertisements}>
                <label className="font-bold" htmlFor="advertisements">Advertisements title:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Adde your advertisements title" name="title" required />
                <label className="font-bold" htmlFor=" brand">Brand Name there will be show:</label><br />
                <select id="brand" name="brand" required className="p-1 mb-4 rounded border w-full">
                    <option value="">Select a brand</option>
                    {brands.map((brand, index) => (
                        <option key={index} value={brand?.brandname}>{brand?.brandname}</option>
                    ))}
                </select> <br />
                <label className="font-bold" htmlFor="advertisementsImg">Brand image url:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Advertisements img url" name="advertisementsImg" required />
                <label className="font-bold" htmlFor="advertisementsDesc">Advertisements description:</label>
                <textarea className="p-1 mb-4 rounded border w-full" type="text" placeholder="Advertisements description" name="advertisementsDesc" />
                <input className="bg-blue-700 px-4 py-1 text-white rounded-sm" type="submit" value={'Add Advertisements'} />
            </form>
        </div>
    );
};

export default AddAdverisement;