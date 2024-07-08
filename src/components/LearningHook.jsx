import { useState } from 'react';
import { useEffect } from 'react';

const LearningHook = () => {
    // USE STATE
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    // USE EFFECT
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(setIntervalId);
        }
    }, []);

    const timeFormat = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const day = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${day}`;
    }

    const addZero = (num) => {
        return (num < 10 ? "0" : "") + num;
    }

    return (
        <>
            <div className="container mt-12 pb-12">
                <h1 className="text-center text-3xl">Learning Hook</h1>

                {/* USE STATE */}
                <div className="content items-center flex flex-col">
                    <div className="color-box w-96 h-56 mt-12 mx-auto flex justify-center items-center rounded-lg" style={{ backgroundColor: color }}>
                        <p className='text-white'>{ color }</p>
                    </div>

                    <p className='mt-8'>Color :</p>
                    <input type="color" className='border-2 border-black' value={ color } onChange={handleColorChange}/>
                </div>

                {/* USE EFFECT */}
                <div className="content w-full h-full mt-12">
                    <h1 className='text-3xl text-center'>Digital Clock</h1>

                    <p className='text-center text-6xl mt-6'>{timeFormat()}</p>
                </div>
            </div>
        </>
    )
}
export default LearningHook;