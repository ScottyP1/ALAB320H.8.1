const StarShipsCard = ({ starship }) => {
    if (!starship) return null;

    return (
        <article className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{starship.name}</h2>
                    <p className="mt-1 text-sm text-slate-300">
                        {starship.model} • {starship.starship_class}
                    </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-slate-200">
                    {starship.manufacturer}
                </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Cost</div>
                    <div className="mt-1 text-slate-100">{starship.cost_in_credits}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Length</div>
                    <div className="mt-1 text-slate-100">{starship.length}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Speed</div>
                    <div className="mt-1 text-slate-100">{starship.max_atmosphering_speed}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Crew</div>
                    <div className="mt-1 text-slate-100">{starship.crew}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Passengers</div>
                    <div className="mt-1 text-slate-100">{starship.passengers}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Cargo</div>
                    <div className="mt-1 text-slate-100">{starship.cargo_capacity}</div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Consumables</div>
                    <div className="mt-1 text-slate-100">{starship.consumables}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Hyperdrive</div>
                    <div className="mt-1 text-slate-100">{starship.hyperdrive_rating}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">MGLT</div>
                    <div className="mt-1 text-slate-100">{starship.MGLT}</div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
                <span>Pilots: {starship.pilots?.length ?? 0}</span>
                <span>Films: {starship.films?.length ?? 0}</span>
            </div>

            <div className="mt-4 text-xs text-slate-400">
                <div className="break-all">URL: {starship.url}</div>
                <div>Created: {starship.created}</div>
                <div>Edited: {starship.edited}</div>
            </div>
        </article>
    );
};

export default StarShipsCard;
