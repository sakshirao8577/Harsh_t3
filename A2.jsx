import axios from 'axios';
import { useEffect, useState } from 'react';
export default function A2() {
    const [image, setimage] = useState("");
    function getimage() {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((r) => setimage(r.data))
            .catch((e) => console.log(e))
    }
    useEffect(getimage, [])
    return (<>
        <button onClick={getimage}>Get Image</button>
        <img src={image.message} alt='test' height='300' width='300' />
    </>)
}