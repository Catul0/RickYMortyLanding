import { useCallback, useEffect, useState } from 'react';

type location = {
    name: string,
    url: string,
}
interface Personaje {
    id: number;
    image: string;
    name: string,
    species: string,
    status: string,
    location: location,
}
const useGetData = () => {
    const [personaje, setPersonaje] = useState<Personaje[] | null>(null);

    const handleGetData = useCallback(async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character`);
            const data = await response.json();
            setPersonaje(data.results);
        } catch (err) {
            console.log(err)
        }
    }
        , []);

    useEffect(() => {
        handleGetData()
    }, []);

    return {
        personaje
    }
}
export default useGetData;