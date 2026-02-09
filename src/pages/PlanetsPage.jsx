import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlanets } from "../services/sw-api";
import PlanetsCard from "../components/PlanetsCard";

export default function PlanetsPage() {
    const [planets, setPlanets] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await getPlanets();
                setPlanets(res);
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
                {planets?.results?.map((item) => (
                    <PlanetsCard key={item.url || item.name} planet={item} />
                ))}
            </div>

            {planets.next ? <button>Load more</button> : <span>End of results</span>}
        </div>
    );
}
