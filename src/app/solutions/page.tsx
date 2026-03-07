import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "FleetCorp - Solutions",
    description: "Enterprise fleet management solutions for high-demand sectors.",
};

export default function SolutionsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-white overflow-x-hidden">
            <HeaderScroll />
            <main className="flex-grow flex flex-col items-center">
                <section className="w-full border-b border-border-dark bg-[#0f1116] py-10 overflow-hidden">
                    <div className="mb-6 px-6 lg:px-10 text-center">
                        <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                            Trusted By Industry Leaders
                        </p>
                    </div>
                    <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <img
                                    alt="GE"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM880deKuHGn23FHSbj7uEISo550NiEUkkflsUE-a1kXI1zuSjhJ1Gv4X32Kk9EqQegIPJ_uofGSVuSHYewDXE9cRI1TF22F83BB2roOdDms7c_3bkOX6YFL2UIYarcjPiS08z8m_0SkdEeMd1SXfp8VnDwBuo8VDfCU-vYUhEetvdHSfaP3MJUI50osxmZDYejATN6jqf4UHYE8n8aHHNVoz1ezS75cOOB1_7lqi6QwXwrY-PytMSgdRX3c1s75jxoztDDNzfzFw"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Nike"
                                    className="h-6 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzPEZ7VTc7i9eSLDvaUgnr_qAsvqUmTOkxAriCwbYsHvItXyonDiMAnvemuDQwtJe7Xk2t9ZFk4MB70FFDsAd8OL0jRVheuqriSoeNbm7kRWTaxG4YI41Ta4bu2pJ_2DJykp44xV7Oxwk00n_S1cv-FkygFWintZpCPJyUNWo5nwxJYXMV0Teopngg0_1pghvlGKwV5eknowt0y7V3frIxj_u0UvCPwm807Chk_56NroCnzCq5AzJn4uchlDnxTrPDt7ZeHS6idPQ"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Adidas"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE609gCEe7ZXkiEAJKhI90J-B4ysoFQtSmU-A7l07smOgA6EYbyBi9uq1qzTEhei1PE4xtSbi516QJvEqARww4CBdgKj2X3okZDz5eUxa43-NiI3RcWUih8clSzBXSLS56Oh_LY0MS421mP3cyQScYOGvzP7d2aJ2NH7SIfBkSYiA1gBfczCq_w3g8NTUNtuhuT_S7AKDuGN0WJAEqLqHi2UR4a3IWfYLXMicCl9mFDZ325ImWGu1CfpyT8pOJw8XKthJTJu6KTyU"
                                />
                            </li>
                            <li>
                                <img
                                    alt="H&M"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqc_u2DRi6dD0MjvrJX7-tXgmIL2rCvuSo-CurrXF_XbIu__wIHZwaMfUR_WIlQ8ZTIY-83di0yWzp0Qw5hL8G3BUn6HteOUzfk-4ueqAHcZfK94G6RRgwtTCWuXr0HmkXkY8Cc4CZ0AwdqVOn-q3jzzEYwpuRNFp5IAfuchKUT5BxBafrclEMQcTGIj4wFdaGRcvuo7lJaZu4hF6R_RwHAuci3cX1AcZjnTBma1d_YSHEh9_yWdM8FKKHOAS1tOIvbKJaxbgZB4g"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Amazon"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIE4mlinWGJmR4qkN4ZZF_EZEskkmeE4E9xAfWWc-xlAL-BqVFCi7PdN6XrvD49z_yz5cRPpnXMJbGzFK2J17on_VAHiAh4VwmY4LRxFcfcNYcD_lD4gnXJis2qsox3bZvYRJSfjTfbfJQEVR--SMmeAN2vpMMKv4vokTLQtuPbICIL-ElleMTg1jS0L2uTKpJ9LEsu-gIRaqdAl7EnqKrynzxWG0Sf0a6Ea0MOocVkNDeG2MF8cJCqXe4z21g4nTiMHHx93JvjAU"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Google"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcaS2Z1lt0PwUzaMHQ26WZdJMKq3SZQc2p_7wLZEYYVqg728dGonmi0h5CvMhea1KYDs-h8io3SMRJ_UtVq87j4kdDzEH2c9-vYE-iocI-_Xy6TTh2R1rZb0p-rbGO3Z9ceZVxcyDAjI5KMt46h8BW3A76g9D4ubSBum6U_QzLlL0Zv8HC2AF4mhIrgNQubMOEcuLpfckRWTNyvphg5QsbU1-W_RsjCdcqMvHWsybm_VFF4Ego1gm_ke-lsodWAdsEbnFfoenzwnI"
                                />
                            </li>
                            <li>
                                <img
                                    alt="IBM"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCJeteyUzkJGmmRv_xMdNoQrlLbjiqXb1tO3mgH_T6DJ0qExicx1_DnFR6PcMKajBBrOqQsq3bSBDFpoXwb6gShyc19T94EN5XEbXoN_NTrf6AZrvRmVIYk1l_1YgEsbJvWemQ8sG5cAVD9UN_Tjl5PUC8v8bFddXm2aQwnA78ZdIR0_elCz--Fv23lHPNZ7geXZa6-shaJeus9GVP9AQZsY4LQANH9qfxK2KDhRRwaw8M9PKPnmDHDKf63XPbo3wxnT693W3smfI"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Cisco"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3daXVMyscibTN1BsryXhlrZXcCsPhx64m1cCZQsl7F5_56s_D6FjmpnMk9fOq9E08z7gVDDZpgI2lrag14dsnELveQuhjG4uKxOkYiZjQL8gKnVwwvjahN4FeQuc_bMyO8yynuGIcsBdQJqkTMCdL_qEgrfvYavPHID3VHUFX6eZ2T4sX-Dvl1TK3nab0dkqFiH52P9_2GREjhZo5316mOqBpxt0v5L2Z_GKbCiqjG-FYSjEyn6Ar2FIgYMOKj5OqmdEWit-igo"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Bayer"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKLCLFTHdmlk8qrIL1tkHf2kmrALF5zqLeb41VViMQqwikZITkBKH7NT_YYoUJZjjEVxows-btAPcTT6Gdf6aRk0cUmc45Pl8ZZMRLX_75qZ0EKkAH8OPor8h2H1-7mLCV2w7s1q32idMqokeM7sISMLz6017zU9ISmuYdEeftgxZb9sADiHH1_HvGqewTvmbAEl1ASllegjXfRKtsjjlOoApEuq-MDtDrDUFSZXgRZCcrtsGse_Fs8-VEE0C6RG_QiWsjTYtLn4"
                                />
                            </li>
                            <li>
                                <img
                                    alt="Sony"
                                    className="h-6 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAkOQkQxp-296Pda9Z2sAYUeRaKz90bPrX34ELBVPMf4ii48l5RaXLZgxAKK62U2QwFZpYfM1cYFg4KHhr1XFjqqyZoRw1Ejir6NzlJ3gR93NR5gZDDPqqRlBI482wJZ7oSUI9-O4WzxS_zB3h6MLElD_pKzJojobDJhRHzrwswb25sgS8KQQFAyndoRwoXF2iiY5d7IEtBVrkgbxxPAAhaS5pMtTT8LUkXaL4I8tLlV0q_5TPSQgUTDkTLrOsSFXcN5-gXglhfRQ"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="GE"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1UxdkyPI9dTDbEGIFZOJa7A1UWwDkB4Iq06gPsktG0paw8_dUoLozasCrZLrOTqd8olbNHzDnpGlknA9jB4KwCRu10g4i0edIigf1TB1M_5S1Ovhx62lruboe6iSzaK5H_aoLzr57mjg1Q8_ggGSxogsDHeiPRFUepycKpYP7aQR-t3u-7iyPzoO_JM_ol-GrvHwHO7XcTWAhK-V44YKNYVUj6tQmHsoZ-bJ3SeqSq0y_md2nNZlWll0fmejbS0f5Xw10QvlSP04"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Nike"
                                    className="h-6 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiF6oKnHoaD3MUTZyr_we6EWaCzSDX9eAIeIl5rV8jhkOjvNela_BDOUy2hxnRi6ymFBO8IHM2SAiD2MIuwh0GhRPvTBuZB-pvkMtN8iBfCQHbUNnI_sNK0eRKBx1okvLpDDmHDeQEUfwl3oodARay8BePETU77FKlrRdjrSOB3mKZIIzYWt5VN7JbFv1n7EUVWgir9Hmae4l8MIn9Ty0wBoW_DV0u65X4BcrWtTeHUN9fmNFh2FriOWqRLM0fsvR43gG3JSMyn1Q"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Adidas"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL7pA-Mab18AfuT4hrRtT2BlpcKO_6HrHYsbU2sdTB15C-6sA2lCSXAs8Uo7xgw2jynnI0tSfmMmpproRrfsP4Kc4Si3FoLz5LeRfNHPzOyN4XA-NTFYhrGynWV5lq4fGjifeMMmb27Wm9lwL2Yh1L-dqhboWCk0NxmwAHLBAiiHvbA54rGfHyEYP8ohvoSyCRCmGcOiU7_1RFUnEpjj7UDIVFy7DNAEk3XpaeKnWuFLGu01xmgzvKHdgGUIhdHqkgFV3XQZBZDVY"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="H&M"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYDBDLLEDSLZP3ofErfjWniB0rCEvCiiFbSGgwPVj0kKgHWOF-RDwgY4WZC17IjM5uovwkeGkbTKi3VotShc29YE7w4wjb77VR1ZN5dYPV2kmaMfn0IwrYhDse9lvpdsJyQCCYGfRNCR4Eak876-GYEThNmdfkdXUhGw838wqdwYLcBLNW5LxzOBmfJ1RcgOKbJIHmNljUfIJliWh6isOrqHKsxhtLf3e-Ijj8r9ZQU1By4nV9wAiOHmujDtrcupNRjbSFFN7gmxY"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Amazon"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexI7NNOveSL1PEmizCyrwvUoplTTwm9seLIHiapcpCyNt4uof-QoJdhXx7lnFOcoFcnDJIhc5iDRwQXnuLdf6rJ7IhcznI_COqig6NW0EPsFfaFC7q9zoZJwY5rCxnPIJRsSDkltF6k0QXt2KVxdK14YzB67kwR9hZK1c8-bYoZnC-KDsL4awsayZ6ECfr1e7eJmebkLy5YbyAvKIHynXIAbwpxjm4E19ZhkhlcniUxKkMTpOq843kq4xqbdJTzSLGgLdZtoCQ-g"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Google"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNk_kPUiXtS7DqbP_5gFbvtJwyvFx6PvPXWi1zO50UQ1VLGPSMK9BZUvHqjKndSy53nOxtadY7OH3BvIarhle6L9Pz6os6mP80zFZkDiGTufswijxSTiFCWg_QQO0cbZvXAx7Hgj181MxUvArvdk_mxjjrA0y_ZtmyHr65ICE8QZM-9W4z4YJI4ilm4Es3rMeH7apRUC2DzxeimZXGk2asEJXrbiZ8VYL8FPhKzgaDK9VXyWunYyOWAMy1iaWYDKR8L9T2oWm7NYg"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="IBM"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5jkd7fTWU377INZoPy4QXHckNHXP_qkHu5k11ntQHVXXvvbAwkP72qVR8pOSk0oXrBqNVn8L8TRon2Hb3Ex4A1W9OboUkzUEEWrRO1gbJjuQNhB79sWbtW_6HAsUA12er6p8zJuc3lZgDdrVhG1qLDFOvobM6uVzVhQF5aNK6Yqp89HCBZDAos7IfiUOgrkoWUBWQmLz8Wopgp_41K-BDnCDs3eR_qmPqBg2wmO-DoKxfknLO1JZtOyNQ9mAwnCNlqkSBcWDfu9E"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Cisco"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyOs4Ripdu0XizPAru5UnCcbITeQhYXrj5_8WtsIQ2W9UXjN1YrHYri9kUj1dAywpqeldQ9AQXZ4s6Xtg4b55FdwyrCYMXkpK3NYN0NH8SJZ-Cb--uhdS0ibyJf0vw5y-cvCaZa6Yj-DYUF81TSn-fDcoIqyq2_uwGeX6u4vlXKY-z9azWgdYZxzTyHO-qAOpu0HyeT056KUcoxvX3pZXfnI4nM76hVFfqdWxfUZsSuo0b39ig37CMi9noYsgSzTe4-AffG_t2h3g"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Bayer"
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMD7W7VSyuhLz0ekq3KbQe_CxtZ0UwflBZoNrqNWA-5lN_NNtZPwHdXnkmE11eXmcF8R2o12Kox_VOfCGfxwczM_hWPZkUtAuVDwAoufLuq6Du95ufhWkOFGm28FoUrx6ATxsudVp-uhV6Tyz5au2h5dIJALtFSdVBscMIX2h3Ir7sPvsq_gpg1RvWca_VqelhVJBAXiIR0n8F8nX7v0JfYNmEbWHc8aCFbqR_UxTLt4QSjqrK052rNTIbIG8ZvRkMn3-U0S7wArI"
                                />
                            </li>
                            <li aria-hidden="true">
                                <img
                                    alt="Sony"
                                    className="h-6 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxm8WWHPjzBQj-Qd0UdpVXbLqvqfigvZLP9DRVrMVX74bp56FKBmJFAmTsfnkw6dIyaY1AsA-iDBpVtjyAlxJMRkLhDjtiCgkK4KZe9V0GQkSvGW5t4PMzXSoR-WZd5_YDnOWBb1IC7TVFYIKiB2t_nkwbqUAT8Xcpar_mEsp1FfzBPMiYmfG7c2k5H7JMpf9N7Hepk-qMdFAYSvuy8AOV-9E_HdZEKjdfuXwQRp72qOdTQbSpLsGQYgrjdX8STGNi69zq-7AVUhQ"
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full max-w-7xl px-6 py-16 lg:px-10">
                    <div className="mb-10 flex flex-col gap-2">
                        <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
                            Industries
                        </h2>
                        <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                            FOR WHOM WE WORK
                        </h3>
                        <p className="text-slate-400 max-w-2xl mt-2 text-lg">
                            Tailored logistics ecosystems for high-demand sectors requiring
                            precision and reliability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
                        <div className="group relative overflow-hidden rounded-xl border border-border-dark lg:col-span-3 lg:row-span-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4zqRSCXEPrLkuLYB9rVnJkf12wYLdxqAASwL2E-MaLxm1sv_pbyVoewaGSMOJYOONrvVq4C35XLPovevtEbZQjbKnlnM3B7Nmbuf89-hvEiKU4br8VYuvyICCQq2bioxdEURZ99p5bvAtNirexRPoc2fsnAJjhOPg-5sZHFj_wVnFztPBxLYLVTNzcpq0SyutzIN1ZvTbfC2i5tPTjYkMPQwml28q26m7RSQb3hqge5huRO5Q0an6ArHO4dYYoulXQwxUz13dh7g')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        factory
                                    </span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">
                                    Industrial Manufacturing
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                                    Optimized heavy machinery logistics and raw material transport
                                    streams.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-border-dark lg:col-span-3 lg:row-span-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        oil_barrel
                                    </span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">Oil & Gas</h4>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                                    Mission-critical reliability for remote extraction sites and
                                    pipeline maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-border-dark lg:col-span-2 lg:row-span-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9msAiXUgFzCvAhKAJkZPshoLks_kCFrslC_b6DQCsinCCRIISR-a0mPtDkAJrJteP5L4bc136EtPDGPNki9_Tg8kgXyZh2jIsyYNf5geeXgRhx9TWuXmyZmTmT3_hirMkKUyL-S8q--fvp4BA74p6M4gWvs0xbf6RrMxtfpxZzKvDZk97Gq_cbdYED3SumN5q_d9981WawPDgr5FYJNd-PuG8bvBox66WPT76YJhvt_wKOritWWCch6-69bhPUTSi8-wdOtizHc')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        construction
                                    </span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">
                                    Construction
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Real-time equipment tracking across multiple job sites.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-border-dark lg:col-span-2 lg:row-span-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNpmIH5Y_cYtvakivcrHzviBvZHC873pt3O1OCK-9Lck3vb_AstApImXHUKzDNS1U51_V6W8NTStd3WPSorVZaGlDIoCH8Zjk0qF6XHJNiJ21oJb2V_LPwE_nI9k8bwSyXvODGUnHslTL1tqDFt0b9SNilZTfwVrTyBU1FSEJkIpHOfCdDS0rwzYNFzKwTDE88lJz79J9Z_pR_bAMvI6A30Q6XXXdTX3_50O5FeOhixO3E3B5SiPMRGf0PNLw-N19THvkPf47qe4Q')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        account_balance
                                    </span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">
                                    Government
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Secure, compliant public sector transport protocols.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl border border-border-dark lg:col-span-2 lg:row-span-1">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsaYOWa_7zF0GXU1idnpTlAJdbypQWtLSpGhL8y2ta-EuFYeom3SgLLQela9_8bKJQQwfjN1MXSrmXlTfccUC8ZP7Ogts_7qigN_fxaxdg4HmaMFBN3OFo9_hNJJC2ET3UXIcf9qWtSS35j7UPaaGtVkWSf_Hq8csskqdZXywPEDovZ524f88uJDW2L62kq36DLzJLPViiENg7-9zjXhxEoreoIJEmxpgwQtnhSzPgaq2II-WFvlGUjhFXKpLqvQRZhRWEpShS_AI')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        local_shipping
                                    </span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">Logistics</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Global supply chain efficiency and route optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-surface-dark border-t border-border-dark py-20 px-6 lg:px-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-red-500">
                                    <span className="material-symbols-outlined">warning</span>
                                    <span className="text-xs font-bold tracking-[0.15em] uppercase">
                                        Challenges
                                    </span>
                                </div>
                                <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                                    NAVIGATING <br /> COMPLEXITY
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                                    Managing enterprise fleets without a unified system leads to
                                    bleeding costs and operational friction.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="flex gap-5 group">
                                    <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                        <span className="material-symbols-outlined">
                                            trending_up
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">
                                            Rising Costs
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            Unpredictable maintenance spikes and fuel inefficiency
                                            draining budgets.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                        <span className="material-symbols-outlined">
                                            visibility_off
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">
                                            Opaque Control
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            Lack of real-time data creating blind spots in daily
                                            operations.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                        <span className="material-symbols-outlined">
                                            group_off
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">
                                            Staffing Complexities
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            High turnover rates and costly training cycles for new
                                            drivers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                        <span className="material-symbols-outlined">
                                            timer_off
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">
                                            Downtime Risks
                                        </h4>
                                        <p className="text-slate-400 text-sm">
                                            Unexpected failures halting critical supply lines and
                                            revenue.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="glass-panel-solutions rounded-2xl p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="size-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined text-white text-4xl">
                                            hub
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                                            Full-Cycle Management
                                        </h3>
                                        <p className="text-slate-300 text-base leading-relaxed">
                                            Our comprehensive ecosystem transforms fleet operations
                                            from a cost center into a strategic asset. We unify
                                            acquisition, maintenance, staffing, and disposal into a
                                            single, transparent dashboard.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">
                                                check_circle
                                            </span>
                                            <span className="text-slate-200 text-sm font-medium">
                                                Predictive Maintenance AI
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">
                                                check_circle
                                            </span>
                                            <span className="text-slate-200 text-sm font-medium">
                                                Real-time Global Tracking
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">
                                                check_circle
                                            </span>
                                            <span className="text-slate-200 text-sm font-medium">
                                                Certified Driver Pool
                                            </span>
                                        </div>
                                    </div>
                                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 px-6 text-white font-bold tracking-wide hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/25">
                                        <span>LEARN ABOUT THE SOLUTION</span>
                                        <span className="material-symbols-outlined text-lg">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-border-dark bg-[#111318]"></div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-border-dark bg-[#0f1116] py-12 px-10 text-center">
                <p className="text-slate-500 text-sm">
                    © 2023 FleetCorp Enterprise Solutions. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
