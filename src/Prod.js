import NavBarP from './components/NavBarP';
import './produtos.css'; 

function Prod() {


    return (
        <div>
            <NavBarP />
            <div className="Julia"></div>
            <div className="bobona">
                <div className="linhajulia"></div>
                <div className="textojulia">
                    <p>VINHOS</p>
                </div>
                <div className="linhajulia"></div>
            </div>
        </div>
    );
}

export default Prod;