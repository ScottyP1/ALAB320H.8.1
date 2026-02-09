const PlanetsCard = ({ planet }) => {
    if (!planet) return null;

    return (
        <article className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{planet.name}</h2>
                    <p className="mt-1 text-sm text-slate-300">
                        {planet.climate} • {planet.terrain}
                    </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-slate-200">
                    {planet.gravity}
                </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Diameter</div>
                    <div className="mt-1 text-slate-100">{planet.diameter}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Rotation</div>
                    <div className="mt-1 text-slate-100">{planet.rotation_period}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Orbital</div>
                    <div className="mt-1 text-slate-100">{planet.orbital_period}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Surface Water</div>
                    <div className="mt-1 text-slate-100">{planet.surface_water}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Population</div>
                    <div className="mt-1 text-slate-100">{planet.population}</div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
                <span>Residents: {planet.residents?.length ?? 0}</span>
                <span>Films: {planet.films?.length ?? 0}</span>
            </div>

            <div className="mt-4 text-xs text-slate-400">
                <div className="break-all">URL: {planet.url}</div>
                <div>Created: {planet.created}</div>
                <div>Edited: {planet.edited}</div>
            </div>
        </article>
    );
};

export default PlanetsCard;
