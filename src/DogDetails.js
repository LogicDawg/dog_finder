import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DogDetails = () => {
    const {name} =useParams();

    return (
        <>
        <h1>Here is: {name} </h1>
        </>
    )
};

export default DogDetails;