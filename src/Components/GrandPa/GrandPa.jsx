import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css';

const GrandPa = () => {
    const asset='diamond';
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;