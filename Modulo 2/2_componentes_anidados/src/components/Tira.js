import Tarjeta from './Tarjeta';


function Tira() {
    return (
        <ul>
           <Tarjeta /> 
           {/* Pasar informacion a la tarjeta */}
           <Tarjeta />
           <Tarjeta />
           
        </ul>
    );
}

export default Tira;