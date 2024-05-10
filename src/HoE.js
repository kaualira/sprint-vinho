// import React from 'react';
// import Cabecalho from './components/Cabecalho';  
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './homeE.css';
import NavBarE from './components/NavbarE';



function HoE () {
    const images = [
        {
          id: "1",
          author: "Author 1",
          src: require("../src/Carrossel1.png"), // Importa a imagem do arquivo local
          alt: "Image 1"
        },
        {
            id: "2",
            author: "Author 2",
            src: require("../src/Carrossel2.jpg"), // Importa outra imagem do arquivo local
            alt: "Image 2"
        }
    ];
    return (
        <div>
            <NavBarE />
            <section id='home'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className='bemvindo2'>
                <p>BEM VINDO!</p>
            </div>
            <div className='vinhos'>
            <Link to="/Produtos"><p>Nossos Vinhos</p></Link>
            </div>
            
            </section>
            <Carousel
            autoPlay
            infiniteLoop
            centerMode
            interval={2000}
            showThumbs={false}
            showIndicators={false}
            showArrows={false} // Esta propriedade remove as miniaturas
            
          >
            {images.map((image) => (
              <div key={image.id}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Estilo para preencher completamente o carousel
                />
              </div>
            ))}
          </Carousel>
          <div className='bemvindo2'>
                <p>BEM VINDO!</p>
            </div>
            <div className='bemvindo2'>
                <p>BEM VINDO!</p>
            </div>
            <div className='vinhos'>
            <Link to="/Produtos"><p>Nossos Vinhos</p></Link>
            </div>
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
            <section id='nossosservicos'>
                <div className='espacobranco'></div>
            </section>
            <section id='sobrenos'>
            <div className='espacobranco'></div>
            <div className='sobrenoscima'>
                <p>SOBRE NÓS</p>
            </div>
            <div className='sobrenosfundo'>
                <div className='logosobrenos'>
                    <img src='Imagens/Pagina_5/sobreNos00.png' alt="#" className="linhadeponto"></img>
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
            </section>
            <section id='nossocontato'>
            <div className='espacobranco'></div>
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
            </section>
            <div className='nossotrabalhofundo'>
                <p>Veja mais sobre nosso trabalho</p>
            </div>
            <div className='nossotrabalhoimgs'>
                <img src='Imagens/Pagina_5/NossosTrabalhos1.jpg' alt="#" className=""></img>
                <img src='Imagens/Pagina_5/NossosTrabalhos2.jpg' alt="#" className=""></img>
                <img src='Imagens/Pagina_5/NossosTrabalhos3.jpeg' alt="#" className=""></img>
            </div>
            <div className='blocoavaliacoes'>
                <div className='blocoavaliacao1'>
                    <div className='blococonteudo'>
                        <div className='blocoestrela'>
                            <img src='Imagens/Pagina_5/5_estrelas.png' alt="#" className=""></img>
                        </div>
                        <div className='blocotexto'>
                            <div className='bloquinhotexto'>
                                <div className='bloquinhoinhotexto'>
                                    <p>Os vinhos da vinícola Vallée D'or são verdadeiras joias enológicas que 
                                        capturam a essência e a beleza das suas origens. Cada gole é uma jornada 
                                        sensorial que revela o cuidado meticuloso e a paixão pela produção de vinhos excepcionais.
                                        Os vinhos desta vinícola são caracterizados por uma qualidade notável, 
                                        refletindo o terroir único das suas vinhas e o talento dos seus enólogos. 
                                        Desde os seus tintos encorpados até os frescos e vibrantes rosés, cada 
                                        garrafa é uma celebração da diversidade e da riqueza do mundo do vinho. </p>
                                        <div className='bloquinhoespaço'>

                                        </div>
                                        <div className='bloquinhoass'>
                                            <h1>Ass: Renato Brasil</h1>
                                        </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blocoavaliacao2'>
                    <div className='blococonteudo'>
                        <div className='blocoestrela'>
                            <img src='Imagens/Pagina_5/5_estrelas.png' alt="#" className=""></img>
                        </div>
                        <div className='blocotexto'>
                            <div className='bloquinhotexto'>
                                <div className='bloquinhoinhotexto'>
                                    <p>Os vinhos da Vallée D'or são mais do que simplesmente bebidas; são obras de 
                                        arte engarrafadas, destinadas a serem apreciadas em momentos especiais e 
                                        compartilhadas com aqueles que apreciam o melhor que a vida tem a oferecer. 
                                        Seja para uma ocasião íntima ou uma celebração festiva.  O Rosé Vallée D'or 
                                        Naturelle é um exemplo impressionante da maestria da vinícola. Com sua cor 
                                        rosada radiante e aromas sedutores de frutas vermelhas frescas, este vinho 
                                        cativa os sentidos desde o primeiro momento.</p>
                                        <div className='bloquinhoespaço'>

                                        </div>
                                        <div className='bloquinhoass'>
                                            <h1>Ass: Wallace Neves</h1>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HoE;