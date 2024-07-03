import "../app.css";
import Land from "../../src/assets/Land.png";

const Hero = () => {
    return (
        <>
            <div className="container w-full">
                <div className="content flex items-center mt-32">
                    <div className="text w-1/2 text-end">
                        <h1 className="text-4xl font-bold ms-10">Learning React</h1>
                        <p className="ms-10">Welcome to my first website i build using React Js</p>
                    </div>
                    <div className="image">
                        <img src={Land} alt="" className="hero-img w-96 " />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;