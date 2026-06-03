import { useEffect, useState } from 'react';
import axios from 'axios';
export default function A1() {
    const [image, setimage] = useState("");
    useEffect(() => {
        setInterval(() => {
            axios
                .get("https://randomfox.ca/floof")
                .then((r) => {
                    console.log(r.data);
                    setimage(r.data);
                })
                .catch((e) => { console.log(e) })
        }, 2000)
    }, [])
    return (<>
        <img src={image.image} alt='test' height='300' width='300' />
        <a href={image.link} target='_blank'>Click here</a>
    </>)
}