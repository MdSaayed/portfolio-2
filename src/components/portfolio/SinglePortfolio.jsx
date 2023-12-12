import { useLoaderData, useRouteLoaderData } from "react-router-dom";


const SinglePortfolio = () => {
    const { _id, name, description, image, url, features, technologies } = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <img className="h-[500px] w-full" src={image}  />
            </div>
            <div className="my-4 space-y-3">
                <h1 className="text-3xl font-semibold">{name}</h1>
                <p>{description}</p>
            </div>
            <div>
                <h2 className="text-2xl mb-2">Features</h2>
                <div>
                    {
                        features?.map((item,idx) => <li key={idx}>{item}</li>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-2xl mt-4">Technologies</h2>
                <div>
                    {
                        technologies?.map((item,idx) => <li key={idx}>{item}</li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolio;

// {
//     "_id": "65783179d22ea5564c793060",
//     "name": "Project 1",
//     "description": "A description of your first project. Highlight key features and technologies used.",
//     "image": "https://i.ibb.co/Z8Y6DZW/Image.png",
//     "url": "https://www.project1.com",
//     "features": [
//         "Feature 1",
//         "Feature 2",
//         "Feature 3"
//     ],
//     "technologies": [
//         "Technology 1",
//         "Technology 2",
//         "Technology 3"
//     ]
// }