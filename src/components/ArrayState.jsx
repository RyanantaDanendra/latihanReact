import { useState } from "react";

const ArrayState = () => {
    const [cars, setCars] = useState(['Lamborghini', 'Ferrari', 'Jeep']);

    // const listCars = cars.map(car => {
    //     return (
    //         <>
    //         <div className="content flex">
    //             <li className="list-disc">{ car }</li>
    //             <button className="list-button font-bold ms-auto" onClick={removeList}>X</button>
    //         </div>
    //         </>
    //     )
    // });

    const addList = () => {
        const listValue = document.getElementById("list-input").value;
        document.getElementById("list-input").value = "";

        setCars(c => [...c, listValue]);
    }

    const removeList = (index) => {
        setCars(cars.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="container w-full py-12">
                <h1 className="text-center text-3xl">Array State</h1>

                <div className="content flex flex-col items-center">
                    <ul className="text-lg mt-8">
                        {cars.map((car, index) => 
                        <>
                        <div className="content flex">                            
                            <li className="list-disc" key={index}>{car}</li>
                            <button className="list-button font-bold ms-auto" onClick={() => removeList(index)}>X</button>
                        </div>                        
                        </>
                        )};
                    </ul>
                    <div className="">
                        <input id="list-input" type="text" className="border-2 mt-8 border-black"/>
                        <button className="ms-3 border-2 border-black px-5 py-1" onClick={addList}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ArrayState;