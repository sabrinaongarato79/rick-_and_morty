import { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res)=> {
                return res.json()
            })
            .then((data) => {
                setResident(data)
            })

    }, [url]);

    return <>
        {
            (resident.id != null) && <>
                <div className="resident-info">
                    <img src={resident.image}/>
                    <div className="info-detail">
                        <h3>{resident.name}</h3>
                        <span> {resident.status} - {resident.species}</span>
                        <span className="mute">origin</span>
                        <span>{resident.origin.name}</span>
                        <span className="mute">episodes where appear</span>
                        <span>{resident.episode.length}</span>
                    </div>
                </div>
            </>
        }
    </>
}

export default ResidentInfo;