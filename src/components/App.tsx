import { Link } from 'react-router-dom';
import useGetData from '../hooks/use-get-data';

function App() {
  /*cargado de custom hook aca */
  const {personaje} = useGetData()

  const renderPersonajes = () => {
    if (!personaje) {
      return <p>Cargando...</p>;
    }

    // Dividir la lista de personajes en grupos de 5
    const grupos = [];
    for (let i = 0; i < personaje.length; i += 5) {
      grupos.push(personaje.slice(i, i + 5));
    }

    return grupos.map((grupo, index) => (
      <div key={index} className="flex px-24 2xl:px-[350px]">
        {grupo.map((personaje) => (
          <div key={personaje.id} className="w-1/5 p-2">
            <Link to={`/personaje/${personaje.id}`}>
              <img src={personaje.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    ));
  };

  return <div className="bg-black">{renderPersonajes()}</div>;
}

export default App;
