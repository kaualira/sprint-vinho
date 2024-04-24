// import React from 'react';
// import Cabecalho from './components/Cabecalho';  
import NavBarP from './components/NavBarP';
import Carousel from './components/Carousel';
import './homep.css';


function HoP () {
    return (
        <div>
            <NavBarP />
            <div className='bemvindo2'>
                <p>BEM VINDO!</p>
            </div>
            <div className='vinhos'>
                <p>Nossos Vinhos</p>
            </div>
            <Carousel />
            <div className='vantagens'>
                <div className='bloquinhos'>
                    <img src='Imagens/Pagina_5/avião.png' alt="#" className="imgbloquinho"></img>
                        <div className='textobloquinhos'>
                            <p className='pnegrito'>ENVIAMOS</p>
                            <p className='pnormal'>para todo o Brasil</p>
                        </div>
                </div>
                <div className='bloquinhos'>
                    <img src='Imagens/Pagina_5/relógio.png' alt="#" className="imgbloquinho"></img>
                        <div className='textobloquinhos'>
                            <p className='pnegrito'>AGILIDADE &</p>
                            <p className='pnormal'>Segurança na entrega</p>
                        </div>
                </div>
                <div className='bloquinhos'>
                    <img src='Imagens/Pagina_5/dinheiro.png' alt="#" className="imgbloquinho"></img>
                        <div className='textobloquinhos'>
                            <p className='pnegrito'>PRODUTOS DE</p>
                            <p className='pnegrito'>ALTA QUALIDADE</p>
                        </div>
                </div>
                <div className='bloquinhos'>
                    <img src='Imagens/Pagina_5/cartão.png' alt="#" className="imgbloquinho"></img>
                        <div className='textobloquinhos'>
                            <p className='pnegrito'>PARCELAMOS EM</p>
                            <p className='pnormal'>em até sem juros</p>
                        </div>
                </div>
            </div>
            <div className='nossosservicos'>
                <p className='pnossosservicos'>NOSSOS SERVIÇOS</p>
            </div>
            <div className='servicosfundo'>
                <img src='Imagens/Pagina_5/Assinatura.png' alt="#" className="imgbloquinho"></img>
                <img src='Imagens/Pagina_5/Kit.jpg' alt="#" className="imgbloquinho"></img>
            </div>
            <div className='sobrenoscima'>
                <p>SOBRE NÓS</p>
            </div>
            <div className='sobrenosfundo'>
                <div className='logosobrenos'>
                    <img src='Imagens/Pagina_5/Linha_de_pontinho1.jpg' alt="#" className="linhadeponto"></img>
                    {/* <img src='Imagens/Pagina_5/Sobre.png' alt="#" className="sobreimg"></img> */}
                </div>
                <div className='sobrenostexto'>
                    <p>Bem-vindo ao Vallée d’Or, o seu destino online para apreciadores de cachaça e vinho! Nós, da Vallée d’Or, 
                    estamos apaixonados por oferecer uma seleção cuidadosamente curada dos melhores vinhos do Brasil. Nosso compromisso com a 
                    qualidade é evidente em cada garrafa que oferecemos, refletindo a riqueza da terra e a dedicação artesanal dos nossos 
                    produtores parceiros, estamos há anos no mercado, a Vallée d’Or se estabeleceu como uma referência confiável e respeitada 
                    no mundo dos vinhos. Com uma trajetória sólida e uma reputação de excelência</p>
                </div>
            </div>
            <div className='nossocontatofundo'>
                <div className='bloquinhosdados'>
                    <p>Nosso contato</p>
                </div>
                <div className='bloquinhosdados2'>
                    <p>E-mail:</p>
                    <p>valledor@gmail.com</p>
                    <p>Tell:(11) 99999-9999</p>
                </div>
                <div className='bloquinhosdados2'>
                    <p>Disponíveis de:</p>
                    <p>segunda a sexta - 8h às 19h</p>
                    <p>sábado - 8h às 13h</p>
                </div>
            </div>
        </div>
    )
}

export default HoP;