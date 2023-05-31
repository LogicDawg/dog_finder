import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DogList = () => {

    const {dogs} = useParams();

        return (
            <>
            <h1>Here are the available Dogs!</h1>
            </>
        )

}

export default DogList;
