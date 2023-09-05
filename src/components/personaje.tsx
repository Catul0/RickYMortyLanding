import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Personaje = () => {
    type location={
        name:string,
        url:string,
    }
    interface Personaje {
        image: string;
        name:string,
        species:string,
        status:string,
        location:location,
        
        // Otras propiedades de los personajes
    }

    const [personaje, setPersonaje] = useState<Personaje | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setPersonaje(data)
                console.log(data)
            }) // Aquí asignamos un objeto, no un array
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    return (
        <div>
            {personaje === null ? (
                <p>Cargando...</p>
            ) : (
                <div className='w-[400px]'>
                    <img src={personaje.image} alt="" />
                    <p>Nombre: {personaje.name}</p>
                    <p>Especie: {personaje.species}</p>
                    <p>Estado: {personaje.status}</p>
                    <p>Localizacion: {personaje.location?.name}</p>
                    <img src={personaje.location?.url} alt="" />
                    
                </div>
            )}
        </div>
    );
}

export default Personaje;
