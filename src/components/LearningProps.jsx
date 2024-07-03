import Land from "../assets/land.png";
import Mountain from "../assets/mountain.png";
import "../App.css";

const LearningProps = (Props) => {
    const cardsList = Props.items;
    const listCards = cardsList.map((cardList) => {
        return (
            <div className="card" key={cardList.id}>
                <img src={cardList.image} alt="" className="card-image"/>
                <h1 className="text-center font-bold text-4xl">{cardList.name}</h1>
            </div>
        )
    })
    
    return (
        <>
            <div className="container mt-12">
                <h1 className="text-center text-3xl">Learning Props</h1>
                <div className="content w-full">
                    <div className="cards flex gap-8 justify-center flex-wrap mt-10">
                            {listCards}
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningProps;