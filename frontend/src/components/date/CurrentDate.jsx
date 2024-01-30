import './CurrentDate.css'
import { useState, useEffect } from 'react';

export const CurrentDate = () => {
    const [fechaActual, setFechaActual] = useState('');
    
    useEffect(() => {
        const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
        const fechaActual = new Date().toLocaleDateString('es-ES', options);
        const fechaFormateada = PrimeraMayuscula(fechaActual);
        setFechaActual(fechaFormateada);
    }, []);

    const PrimeraMayuscula = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className='currentDate'>
            {fechaActual}
        </div>
    )
}
