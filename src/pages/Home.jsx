import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-12 text-white">
            <h1 className="text-8xl font-bold tracking-[10px]">Star Wars</h1>
            <div className="flex justify-evenly gap-12">
                <Link to="/people">
                    <div className="bg-black/50 rounded-full p-4 h-24 w-24 flex justify-center items-center hover:bg-black/30">
                        <span>People</span>
                    </div>
                </Link>
                <Link to="/planets">
                    <div className="bg-black/50 rounded-full p-4 h-24 w-24 flex justify-center items-center hover:bg-black/30">
                        <span>Planets</span>
                    </div>
                </Link>
                <Link to="/starships">
                    <div className="bg-black/50 rounded-full p-4 h-24 w-24 flex justify-center items-center hover:bg-black/30">
                        <span>Starships</span>
                    </div>
                </Link>
            </div>
        </div >
    )
};