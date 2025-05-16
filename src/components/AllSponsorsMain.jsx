import { useEffect, useState } from "react";
import { getAllSponsors } from "../utilities/getData";
import './AllSponsorsMain.scss';

export default function AllSponsorsMain() {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        getAllSponsors()
        .then(data => {
            setData(data);
            //console.log(data);
        })
    }, []);

    (2500).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })


    return (
        <main>
            <h2>Børnelejren takker</h2>
            <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer, virksomhedssponsorer og donationer fra fonde.</p>
            {data.results && <h3>En særlig tak til:</h3>}
            <ul className="all-sponsors__list">
                {data.results && data?.results.map(sponsor => {

                    return (
                        <li className="all-sponsors__list-item" key={sponsor?.id}>
                            <p>{sponsor?.firmanavn}
                                <span className="line-break padding-top align-center align-self-bottom">{sponsor.belob.toLocaleString('da-DK', {
                                    style: 'currency',
                                    currency: 'DKK'
                                })}</span>
                            </p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}