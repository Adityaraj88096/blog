import React, {useEffect} from 'react'

 const Adsense = () => {
    const loadAds = () => {
        try {
            if (typeof window !== "undefined") {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.log("adsense error", error.message);
        }
    }
    useEffect(() => {
        loadAds();
    }, []);
  return (
    <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-7225853903466495"
    data-ad-slot="2999068085"
    data-ad-format="auto"
    data-full-width-responsive="true"
    >
    </ins>
  )
}

export default Adsense;