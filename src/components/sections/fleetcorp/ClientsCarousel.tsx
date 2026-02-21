const clients = [
  { name: "GE", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM880deKuHGn23FHSbj7uEISo550NiEUkkflsUE-a1kXI1zuSjhJ1Gv4X32Kk9EqQegIPJ_uofGSVuSHYewDXE9cRI1TF22F83BB2roOdDms7c_3bkOX6YFL2UIYarcjPiS08z8m_0SkdEeMd1SXfp8VnDwBuo8VDfCU-vYUhEetvdHSfaP3MJUI50osxmZDYejATN6jqf4UHYE8n8aHHNVoz1ezS75cOOB1_7lqi6QwXwrY-PytMSgdRX3c1s75jxoztDDNzfzFw" },
  { name: "Nike", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzPEZ7VTc7i9eSLDvaUgnr_qAsvqUmTOkxAriCwbYsHvItXyonDiMAnvemuDQwtJe7Xk2t9ZFk4MB70FFDsAd8OL0jRVheuqriSoeNbm7kRWTaxG4YI41Ta4bu2pJ_2DJykp44xV7Oxwk00n_S1cv-FkygFWintZpCPJyUNWo5nwxJYXMV0Teopngg0_1pghvlGKwV5eknowt0y7V3frIxj_u0UvCPwm807Chk_56NroCnzCq5AzJn4uchlDnxTrPDt7ZeHS6idPQ" },
  { name: "Adidas", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE609gCEe7ZXkiEAJKhI90J-B4ysoFQtSmU-A7l07smOgA6EYbyBi9uq1qzTEhei1PE4xtSbi516QJvEqARww4CBdgKj2X3okZDz5eUxa43-NiI3RcWUih8clSzBXSLS56Oh_LY0MS421mP3cyQScYOGvzP7d2aJ2NH7SIfBkSYiA1gBfczCq_w3g8NTUNtuhuT_S7AKDuGN0WJAEqLqHi2UR4a3IWfYLXMicCl9mFDZ325ImWGu1CfpyT8pOJw8XKthJTJu6KTyU" },
  { name: "H&M", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqc_u2DRi6dD0MjvrJX7-tXgmIL2rCvuSo-CurrXF_XbIu__wIHZwaMfUR_WIlQ8ZTIY-83di0yWzp0Qw5hL8G3BUn6HteOUzfk-4ueqAHcZfK94G6RRgwtTCWuXr0HmkXkY8Cc4CZ0AwdqVOn-q3jzzEYwpuRNFp5IAfuchKUT5BxBafrclEMQcTGIj4wFdaGRcvuo7lJaZu4hF6R_RwHAuci3cX1AcZjnTBma1d_YSHEh9_yWdM8FKKHOAS1tOIvbKJaxbgZB4g" },
  { name: "Amazon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIE4mlinWGJmR4qkN4ZZF_EZEskkmeE4E9xAfWWc-xlAL-BqVFCi7PdN6XrvD49z_yz5cRPpnXMJbGzFK2J17on_VAHiAh4VwmY4LRxFcfcNYcD_lD4gnXJis2qsox3bZvYRJSfjTfbfJQEVR--SMmeAN2vpMMKv4vokTLQtuPbICIL-ElleMTg1jS0L2uTKpJ9LEsu-gIRaqdAl7EnqKrynzxWG0Sf0a6Ea0MOocVkNDeG2MF8cJCqXe4z21g4nTiMHHx93JvjAU" },
  { name: "Google", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcaS2Z1lt0PwUzaMHQ26WZdJMKq3SZQc2p_7wLZEYYVqg728dGonmi0h5CvMhea1KYDs-h8io3SMRJ_UtVq87j4kdDzEH2c9-vYE-iocI-_Xy6TTh2R1rZb0p-rbGO3Z9ceZVxcyDAjI5KMt46h8BW3A76g9D4ubSBum6U_QzLlL0Zv8HC2AF4mhIrgNQubMOEcuLpfckRWTNyvphg5QsbU1-W_RsjCdcqMvHWsybm_VFF4Ego1gm_ke-lsodWAdsEbnFfoenzwnI" },
  { name: "IBM", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJeteyUzkJGmmRv_xMdNoQrlLbjiqXb1tO3mgH_T6DJ0qExicx1_DnFR6PcMKajBBrOqQsq3bSBDFpoXwb6gShyc19T94EN5XEbXoN_NTrf6AZrvRmVIYk1l_1YgEsbJvWemQ8sG5cAVD9UN_Tjl5PUC8v8bFddXm2aQwnA78ZdIR0_elCz--Fv23lHPNZ7geXZa6-shaJeus9GVP9AQZsY4LQANH9qfxK2KDhRRwaw8M9PKPnmDHDKf63XPbo3wxnT693W3smfI" },
  { name: "Cisco", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3daXVMyscibTN1BsryXhlrZXcCsPhx64m1cCZQsl7F5_56s_D6FjmpnMk9fOq9E08z7gVDDZpgI2lrag14dsnELveQuhjG4uKxOkYiZjQL8gKnVwwvjahN4FeQuc_bMyO8yynuGIcsBdQJqkTMCdL_qEgrfvYavPHID3VHUFX6eZ2T4sX-Dvl1TK3nab0dkqFiH52P9_2GREjhZo5316mOqBpxt0v5L2Z_GKbCiqjG-FYSjEyn6Ar2FIgYMOKj5OqmdEWit-igo" },
  { name: "Bayer", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKLCLFTHdmlk8qrIL1tkHf2kmrALF5zqLeb41VViMQqwikZITkBKH7NT_YYoUJZjjEVxows-btAPcTT6Gdf6aRk0cUmc45Pl8ZZMRLX_75qZ0EKkAH8OPor8h2H1-7mLCV2w7s1q32idMqokeM7sISMLz6017zU9ISmuYdEeftgxZb9sADiHH1_HvGqewTvmbAEl1ASllegjXfRKtsjjlOoApEuq-MDtDrDUFSZXgRZCcrtsGse_Fs8-VEE0C6RG_QiWsjTYtLn4" },
  { name: "Sony", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAkOQkQxp-296Pda9Z2sAYUeRaKz90bPrX34ELBVPMf4ii48l5RaXLZgxAKK62U2QwFZpYfM1cYFg4KHhr1XFjqqyZoRw1Ejir6NzlJ3gR93NR5gZDDPqqRlBI482wJZ7oSUI9-O4WzxS_zB3h6MLElD_pKzJojobDJhRHzrwswb25sgS8KQQFAyndoRwoXF2iiY5d7IEtBVrkgbxxPAAhaS5pMtTT8LUkXaL4I8tLlV0q_5TPSQgUTDkTLrOsSFXcN5-gXglhfRQ" },
];

export default function ClientsCarousel() {
  // Дублируем логотипы для бесшовной прокрутки
  const allClients = [...clients, ...clients];

  return (
    <section className="w-full border-b border-[#1e293b] bg-background-dark py-10 overflow-hidden">
      <div className="mb-6 px-6 lg:px-10 text-center">
        <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
          Trusted By Industry Leaders
        </p>
      </div>
      <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {allClients.map((client, index) => (
            <li key={`${client.name}-${index}`} aria-hidden={index >= clients.length} className="flex flex-col items-center gap-2">
              <img
                alt={client.name}
                className="h-8 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 brightness-200 contrast-0 invert"
                src={client.src}
              />
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
