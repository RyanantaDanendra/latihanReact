import { useRef, useState } from 'react';
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

    // USE REF
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);

                return () => {
                    clearInterval(intervalIdRef.current);
                }

            }, 10)
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop2 = () => {
        setIsRunning(false);
    }

    const reset2 = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime2 = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor(elapsedTime % 1000 / 10);

        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(2, "0")

        return `${minutes} : ${seconds} : ${miliseconds}`;
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

                {/* USE REF */}
                <div className="content w-full h-full mt-12">
                    <h1 className='text-3xl text-center'>Stopwatch</h1>

                    <div className="content flex flex-col items-center">
                        <p className='text-6xl text-center'>{formatTime2()}</p>

                        <div className="buttons mt-5 flex gap-8">
                            <button onClick={start} className='start-btn px-5 py-2 bg-green-400'>START</button>
                            <button onClick={stop2} className='stop-btn px-5 py-2 bg-red-400'>STOP</button>
                            <button onClick={reset2} className='reset-btn px-5 py-2'>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningHook;