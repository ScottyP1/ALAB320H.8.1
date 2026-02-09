const PeopleCard = ({ person }) => {
    if (!person) return null;

    return (
        <article className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{person.name}</h2>
                    <p className="mt-1 text-sm text-slate-300">
                        {person.birth_year} • {person.gender}
                    </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-slate-200">
                    {person.skin_color}
                </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Height</div>
                    <div className="mt-1 text-slate-100">{person.height}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Mass</div>
                    <div className="mt-1 text-slate-100">{person.mass}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Hair</div>
                    <div className="mt-1 text-slate-100">{person.hair_color}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Eyes</div>
                    <div className="mt-1 text-slate-100">{person.eye_color}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Skin</div>
                    <div className="mt-1 text-slate-100">{person.skin_color}</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3">
                    <div className="text-xs uppercase tracking-widest text-slate-400">Homeworld</div>
                    <div className="mt-1 break-all text-slate-100">{person.homeworld}</div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
                <span>Films: {person.films?.length ?? 0}</span>
                <span>Species: {person.species?.length ?? 0}</span>
                <span>Starships: {person.starships?.length ?? 0}</span>
                <span>Vehicles: {person.vehicles?.length ?? 0}</span>
            </div>

            <div className="mt-4 text-xs text-slate-400">
                <div className="break-all">URL: {person.url}</div>
                <div>Created: {person.created}</div>
                <div>Edited: {person.edited}</div>
            </div>
        </article>
    );
};

export default PeopleCard;
