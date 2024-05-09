import React, { useState, useRef } from 'react';
import './produtos.css';
import Footer from './components/Footer';

const vinhoJson = [
  {
    id: 1,
    name: 'Vinho Rosé Vallée D’or Naturelle',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'O Vinho Rosé Vallée D or Naturelle é um vinho rosé natural que encapsula a elegância e o frescor da tradição vinícola. Produzido com uvas selecionadas manualmente, exibe uma cor rosada vibrante e um aroma sedutor de frutas vermelhas frescas, complementadas por notas florais sutis.  O Vinho Rosé Vallée D or Naturelle oferece uma experiência sensorial que eleva qualquer ocasião com seu charme e sofisticação.'    
  },
  {
    id: 2,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 3,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 4,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 5,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 6,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 7,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 8,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 9,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 10,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 11,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 12,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 13,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 14,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
  {
    id: 15,
    name: 'Mussarela',
    img: 'Imagens/Pagina_7/1.png',
    price: 20.00,
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  },
];

function Prod() {
  const [cart, setCart] = useState([]);
  const [modalKey, setModalKey] = useState(0);
  const [quantvinhos, setQuantvinhos] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSizeIndex] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [menuAberto, setMenuAberto] = useState(false);
  const menuAsideRef = useRef(null);

  const formatoReal = (valor) => {
    if (valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return 'Valor não disponível';
  };

  const abrirModal = (key) => {
    setModalKey(key);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  const adicionarNoCarrinho = () => {
    const vinho = vinhoJson[modalKey];
    const price = vinho.price;
    const identificador = `${vinho.id}t${selectedSizeIndex}`;
    const novavinho = {
      identificador,
      id: vinho.id,
      qt: quantvinhos,
      price: price * quantvinhos
    };

    setCart([...cart, novavinho]);
    setQuantvinhos(1);
    setSubtotal(subtotal + novavinho.price);
    setMenuAberto(true);
    fecharModal();
  };

  const aumentarQuantidadevinho = (id) => {
    const novavinho = cart.map((item) =>
      item.id === id ? { ...item, qt: item.qt + 1, price: item.price + item.price / item.qt } : item
    );
    setCart(novavinho);
    setSubtotal(subtotal + vinhoJson[id - 1].price);
  };

  const diminuirQuantidadevinho = (id) => {
    const novavinho = cart.map((item) =>
      item.id === id && item.qt > 0
        ? { ...item, qt: item.qt - 1, price: item.price / item.qt * (item.qt - 1) } // Atualiza o preço proporcionalmente
        : item
    );
  
    setCart(novavinho);
  
    const subtotalCalculado = novavinho.reduce((total, item) => total + item.price, 0);
    setSubtotal(subtotalCalculado);
  
    if (novavinho.find((item) => item.id === id && item.qt === 0)) {
      const novoCarrinho = novavinho.filter((item) => item.qt !== 0);
      setCart(novoCarrinho);
  
      if (novoCarrinho.length === 0) {
        setMenuAberto(false);
      }
    }
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const limparCarrinho = () => {
    setCart([]);
    setSubtotal(0);
  };

  return (
    <div className="App">
      <header>
        <a href="#home"><img src='Imagens/NavBar pessoa/Site.jpg' alt='#' className='logonav'/></a>
        <a href="#home"><p>HOME</p></a>
        <a href="#nossosservicos"><p>NOSSOS SERVIÇOS</p></a>
        <a href="#sobrenos"><p>SOBRE NÓS</p></a>
        <a href="#nossocontato"><p>CONTATO DA EMPRESA</p></a>
        <div className="menu-openner" onClick={toggleMenu}>
          <img src='Imagens/NavBar pessoa/carrinhonav.png' alt="#"></img>
          <span>{cart.length}</span>
        </div>
        <img src='Imagens/NavBar pessoa/usuarionav.png' alt="#" width={50}></img>
      </header>
      <div className='vinhosheader'>
        <div className='vinhosheaderlinha'></div>
        <div className='vinhosheaderfrase'><p>VINHOS</p></div>
        <div className='vinhosheaderlinha'></div>
      </div>
      <main>
        <div className="vinho-area five-per-row">
          <div className="vinho-area">
            {vinhoJson.map((vinho, index) => (
              <div className="vinho-item" key={index} onClick={() => abrirModal(index)}>
                <img src={vinho.img} alt={vinho.name} />
                <button>Ver Mais</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <aside className={menuAberto && cart.length > 0 ? 'show' : ''} ref={menuAsideRef}>
        <div className="cart--area">
          <div className="menu-closer" onClick={fecharMenu}>✖️</div>
          <div className='carrinhotitulo'>
          <h1>CARRINHO</h1>
          </div>
          <div className="cart">
            <div className='barraprodutospreco'>
              <div className='barraproduto'>
                <p>Produtos</p>
              </div>
              <div className='barratotal'>
                <p>Total</p>
              </div>
            </div>
            {/* <div className='barradosprodutosetotal'>
              <div className='barradosprodutos' key={index}>
                <img src={vinhoJson[item.id - 1].img} alt={vinhoJson[item.id - 1].name} />
                <div className="cart--item-nome">{vinhoJson[item.id - 1].name}</div>
              </div>
            </div> */}
            {cart.map((item, index) => (
              <div className="cart--item" key={index}>
                <div className='blocoprodutocarrinho'>
                  <img src={vinhoJson[item.id - 1].img} alt={vinhoJson[item.id - 1].name} />
                  <div className="cart--item-nome"><p>{vinhoJson[item.id - 1].name}</p></div>
                </div>
                <div className="cart--item--qtarea">
                  <button onClick={() => diminuirQuantidadevinho(item.id)}>-</button>
                  <div className="cart--item--qt">{item.qt}</div>
                  <button onClick={() => aumentarQuantidadevinho(item.id)}>+</button>
                </div>
                <div className="cart--item--details">
                  <span>{formatoReal(item.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart--details">
            <div className="cart--totalitem">
              <span>Subtotal: </span>
              <span> {formatoReal(subtotal)}</span>
            </div>
            <div className='botoesfinalizarcarrinho'>
            <div className="cart--finalizar" onClick={limparCarrinho}>Limpar Carrinho</div>
            <div className="cart--finalizar">Finalizar a compra</div>
            </div>
          </div>
        </div>
      </aside>
      {modalOpen && (
        <div className="vinhoWindowArea">
          <div className="vinhoWindowBody">
            <div className='campotextoefoto'>
              <div className='campofotoproduto'>
                <img src={vinhoJson[modalKey].img} alt={vinhoJson[modalKey].name} className='fotoproduto'/>
              </div>
              <div className='campotitulotextoproduto'>
                <div className='campotituloproduto'>
                  <h1>{vinhoJson[modalKey].name}</h1>
                </div>
                <div className='campotextoproduto'>
                  <div className="vinhoInfo--desc">{vinhoJson[modalKey].description}</div>
                </div>
              </div>
            </div>
            <div className='campobotoesgeral'>
              <div className='campobotaocancelar'>
                <div className="vinhoInfo--cancelMobileButton" onClick={() => fecharModal()}>Voltar</div>
              </div>
              <div className='campobotaoficha'>
                
              </div>
              <div className='campobotaopreco'>
                <div className="vinhoInfo--actualPrice">
                  {formatoReal(vinhoJson[modalKey].price)}
                </div>
              </div>
              <div className='campobotaoaddcarrinho'>
                <button className="vinhoInfo--addButton" onClick={() => adicionarNoCarrinho()}>Adicionar ao carrinho</button>
              </div>
            </div>

            {/* <div className="vinhoInfo--cancelMobileButton" onClick={() => fecharModal()}>Voltar</div>
            <button className="vinhoInfo--addButton" onClick={() => adicionarNoCarrinho()}>Adicionar ao carrinho</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Prod;

// <div className="vinhoWindowArea">
//           <div className="vinhoWindowBody">
//             <div className="vinhoInfo--cancelMobileButton" onClick={() => fecharModal()}>Voltar</div>
//             <div className="vinhoBig">
//               <img src={vinhoJson[modalKey].img} alt={vinhoJson[modalKey].name} />
//             </div>
//             <div className="vinhoInfo">
//               <h1>{vinhoJson[modalKey].name}</h1>
//               <div className="vinhoInfo--desc">{vinhoJson[modalKey].description}</div>
//               <div className="vinhoInfo--sizearea">
//               </div>
//               <div className="vinhoInfo--pricearea">
//                 <div className="vinhoInfo--sector">Preço</div>
//                 <div className="vinhoInfo--price">
//                   <div className="vinhoInfo--actualPrice">
//                     {formatoReal(vinhoJson[modalKey].price[selectedSizeIndex])}
//                   </div>
//                 </div>
//               </div>
//               <button className="vinhoInfo--addButton" onClick={() => adicionarNoCarrinho()}>Adicionar ao carrinho</button>
//               <button className="vinhoInfo--cancelButton" onClick={() => fecharModal()}>Cancelar</button>
//             </div>
//           </div>
//         </div>

{/* <div className='barrabotoesproduto'>
            <div className='barrabotaocancelar'>
            <div className="vinhoInfo--cancelMobileButton" onClick={() => fecharModal()}>Voltar</div>
            </div>
            <div className='barrabotaocancelar'>
            
            </div>
              <div className='barrabotoesproduto2'>
                <div className='barraprecoproduto'>
                <div className="vinhoInfo--actualPrice">
                     {formatoReal(vinhoJson[modalKey].price)}
                  </div>
                </div> 
                <div className='barraaddcartproduto'>
                  <button className="vinhoInfo--addButton" onClick={() => adicionarNoCarrinho()}>Adicionar ao carrinho</button>
                  
                </div>
              </div>
            </div> */}
