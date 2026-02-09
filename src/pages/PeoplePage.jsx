import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getPeople } from "../services/sw-api";
import PeopleCard from "../components/PeopleCard";


export default function PeoplePage() {
    const [people, setpeople] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const data = async () => {
                const res = await getPeople();
                return setpeople(res);
            }
            data();
        } catch (e) {
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }, []);

    if (loading) return <h1>Loading</h1>;

    return (
        <div className="p-12 ">
            <Link to='/' className='text-white text-2xl'>Return</Link>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                {people?.results?.map((item) => <PeopleCard person={item} />)}

            </div>

            {people.next ? <button>Load more</button> : <span>End of results</span>}
        </div>
    )
}