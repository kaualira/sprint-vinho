import './vinhos.css';
// import Cabecalho from './components/Cabecalho';
import NavBarP from './components/NavBarP';

function Vin () {
    return (
        <div>
            <NavBarP />
            <div className='bannervinhos'>
                <div className='linhabannervinhos'></div>
                <div className='txtbannervinhos'>
                    <p>VINHOS</p>
                </div>
                <div className='linhabannervinhos'></div>
                
            </div>
        </div>
    )
}

export default Vin;