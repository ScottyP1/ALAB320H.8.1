import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStarShips } from "../services/sw-api";
import StarShipsCard from "../components/StarShipsCard";

export default function StarShipsPage() {
    const [starships, setStarships] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await getStarShips();
                setStarships(res);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) return <h1>Loading</h1>;

    return (
        <div className="p-12">
            <Link to="/" className="text-white text-2xl">Return</Link>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                {starships?.results?.map((item) => (
                    <StarShipsCard key={item.url || item.name} starship={item} />
                ))}
            </div>

            {starships.next ? <button>Load more</button> : <span>End of results</span>}
        </div>
    );
}
