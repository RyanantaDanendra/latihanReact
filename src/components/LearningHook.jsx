import { useState } from 'react';

const LearningHook = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <div className="container mt-12 pb-12">
                <h1 className="text-center text-3xl">Learning Hook</h1>

                <div className="content items-center flex flex-col">
                    <div className="color-box w-96 h-56 mt-12 mx-auto flex justify-center items-center rounded-lg" style={{ backgroundColor: color }}>
                        <p className='text-white'>{ color }</p>
                    </div>

                    <p className='mt-8'>Color :</p>
                    <input type="color" className='border-2 border-black' value={ color } onChange={handleColorChange}/>
                </div>
            </div>
        </>
    )
}
export default LearningHook;