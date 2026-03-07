const clients = [
    { name: "GE", icon: "electric_bolt" },
    { name: "Nike", icon: "checkroom" },
    { name: "Adidas", icon: "sports_soccer" },
    { name: "H&M", icon: "storefront" },
    { name: "Amazon", icon: "shopping_cart" },
    { name: "Google", icon: "search" },
    { name: "IBM", icon: "computer" },
    { name: "Cisco", icon: "router" },
    { name: "Bayer", icon: "medication" },
    { name: "Sony", icon: "tv" },
];

export default function TrustedBy() {
    return (
        <section className="w-full border-y border-white/5 bg-[#0a0c10] py-12 overflow-hidden">
            <div className="mb-8 px-6 lg:px-10 text-center">
                <p className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase opacity-60">
                    Trusted By Industry Leaders
                </p>
            </div>
            <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 animate-infinite-scroll">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center">
                            {clients.map((client) => (
                                <li key={client.name} className="flex flex-col items-center gap-3 group shrink-0">
                                    <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-white/10 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(37,106,244,0.2)]">
                                        <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-primary transition-colors duration-500">
                                            {client.icon}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-500">
                                        {client.name}
                                    </span>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
}
