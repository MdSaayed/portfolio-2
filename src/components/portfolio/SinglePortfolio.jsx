import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";


const SinglePortfolio = () => {
    const { _id, name, description, image, url, features, technologies, liveLink, clientCode, serverCode } = useLoaderData();
    const { data } = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto mb-16">
            <div>
                <img className="h-[500px] w-full" src={image} />
            </div>
            <div className="my-4 space-y-3">
                <h1 className="text-3xl font-semibold">{name}</h1>
                <p>{description}</p>
            </div>
            <div>
                <h2 className="text-2xl mb-2">Features</h2>
                <div>
                    {
                        features?.map((item, idx) => <li key={idx}>{item}</li>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-2xl mt-4">Technologies</h2>
                <div>
                    {
                        technologies?.map((item, idx) => <li key={idx}>{item}</li>)
                    }
                </div>
            </div>
            <div className="my-8">
                <Link className="bg-blue-700 text-white rounded-sm py-1 px-4 mr-2" to={liveLink}>Live site</Link>
                <Link className="bg-blue-700 text-white rounded-sm py-1 px-4 mr-2" to={clientCode}>Client code</Link>
                <Link className="bg-blue-700 text-white rounded-sm py-1 px-4 mr-2" to={serverCode}>Server code</Link>
            </div>
        </div>
    );
};

export default SinglePortfolio;

