import React from 'react';
import { toast } from 'react-toastify';

const AddCategories = () => {
    const handleAddCatergory = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const img = form.img.value;
        const desc = form.desc.value;

        const category = {
            name,
            img,
            desc,
        }

        fetch('http://localhost:3000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => toast.success('Category added successfully.'))
            .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleAddCatergory}>
                <label className="font-bold" htmlFor="brandName">Category name:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Adde your category name" name="name" required />
                <label className="font-bold" htmlFor="brandName">Category image url:</label>
                <input className="p-1 mb-4 rounded border w-full" type="text" placeholder="Category img url" name="img" required />
                <label className="font-bold" htmlFor="brandName">Category description:</label>
                <textarea className="p-1 mb-4 rounded border w-full" type="text" placeholder="Category description" name="desc" />
                <input className="bg-blue-700 px-4 py-1 text-white rounded-sm" type="submit" value={'Add Category'} />
            </form>
        </div>
    );
};

export default AddCategories;