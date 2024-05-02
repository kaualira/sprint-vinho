import React, { useState } from 'react';
import './produtos.css';

const pizzaJson = [
  {
    id: 1,
    name: 'Mussarela',
    img: 'images/pizza.png',
    price: [20.00, 23.00, 25.00],
    sizes: ['6 fatias', '8 fatias', '12 fatias'],
    description: 'Molho de tomate, camada dupla de mussarela e orégano'
  }
];

function Prod() {
  const [cart, setCart] = useState([]);
  const [modalKey, setModalKey] = useState(0);
  const [quantPizzas, setQuantPizzas] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [subtotal, setSubtotal] = useState(0); // Novo estado para o subtotal

  const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const abrirModal = (key) => {
    setModalKey(key);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  const adicionarNoCarrinho = () => {
    const pizza = pizzaJson[modalKey];
    const price = pizza.price[selectedSizeIndex];
    const identificador = `${pizza.id}t${selectedSizeIndex}`;
    const novaPizza = {
      identificador,
      id: pizza.id,
      size: pizza.sizes[selectedSizeIndex],
      qt: quantPizzas,
      price: price // Apenas o preço da pizza, sem multiplicar pela quantidade
    };
  
    setCart([...cart, novaPizza]);
    setCarrinhoAberto(true);
    fecharModal();
    setQuantPizzas(1); // Definir quantPizzas de volta para 1 para a próxima adição
    setSubtotal(subtotal + price); // Adicionar o preço da pizza ao subtotal existente
  };

  const aumentarQuantidadePizza = (id) => {
    const novaPizza = cart.map((item) =>
      item.id === id ? { ...item, qt: item.qt + 1, price: item.price + item.price / item.qt } : item
    );
    setCart(novaPizza);
    setSubtotal(subtotal + pizzaJson[id - 1].price[selectedSizeIndex]); // Adicionar o preço da pizza ao subtotal
  };

  const diminuirQuantidadePizza = (id) => {
    const novaPizza = cart.map((item) =>
      item.id === id && item.qt > 1 ? { ...item, qt: item.qt - 1, price: item.price - item.price / item.qt } : item
    );
    setCart(novaPizza);
    setSubtotal(subtotal - pizzaJson[id - 1].price[selectedSizeIndex]); // Subtrair o preço da pizza do subtotal
  };

  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  const atualizarCarrinho = () => {
    const subtotalCalculado = cart.reduce((total, item) => total + (item.price * item.qt), 0);
    setSubtotal(subtotalCalculado);
  };

  return (
    <div className="App">
      <header>
        <h1>Pizzaria da Nonna</h1>
        <div className="menu-openner">
          <span>{cart.length}</span>🛒
        </div>
      </header>
      <main>
        <h2>Pizzas</h2>
        <div className="pizza-area">
          {pizzaJson.map((pizza, index) => (
            <div className="pizza-item" key={index} onClick={() => abrirModal(index)}>
              <img src={pizza.img} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
              <button>Ver Mais</button>
            </div>
          ))}
        </div>
      </main>
      <aside className={carrinhoAberto ? 'show' : ''}>
        <div className="cart--area">
          <div className="menu-closer" onClick={() => fecharCarrinho()}>❌</div>
          <h1>Suas Pizzas</h1>
          <div className="cart">
            {cart.map((item, index) => (
              <div className="cart--item" key={index}>
                <img src={pizzaJson[item.id - 1].img} alt={pizzaJson[item.id - 1].name} />
                <div className="cart--item-nome">{pizzaJson[item.id - 1].name}</div>
                <div className="cart--item--qtarea">
                  <button onClick={() => diminuirQuantidadePizza(item.id)}>-</button>
                  <div className="cart--item--qt">{item.qt}</div>
                  <button onClick={() => aumentarQuantidadePizza(item.id)}>+</button>
                </div>
                <div className="cart--item--details">
                  <span>Tamanho: {item.size}</span>
                  <span>Preço: {formatoReal(item.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart--details">
            <div className="cart--totalitem">
              <span>Subtotal</span>
              <span>{formatoReal(subtotal)}</span> {/* Mostra o subtotal atualizado */}
            </div>
            <div className="cart--finalizar">Finalizar a compra</div>
          </div>
        </div>
      </aside>
      {modalOpen && (
        <div className="pizzaWindowArea">
          <div className="pizzaWindowBody">
            <div className="pizzaInfo--cancelMobileButton" onClick={() => fecharModal()}>Voltar</div>
            <div className="pizzaBig">
              <img src={pizzaJson[modalKey].img} alt={pizzaJson[modalKey].name} />
            </div>
            <div className="pizzaInfo">
              <h1>{pizzaJson[modalKey].name}</h1>
              <div className="pizzaInfo--desc">{pizzaJson[modalKey].description}</div>
              <div className="pizzaInfo--sizearea">
                <div className="pizzaInfo--sector">Tamanho</div>
                <div className="pizzaInfo--sizes">
                  {pizzaJson[modalKey].sizes.map((size, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      className={`pizzaInfo--size ${selectedSizeIndex === sizeIndex ? 'selected' : ''}`}
                      onClick={() => setSelectedSizeIndex(sizeIndex)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pizzaInfo--pricearea">
                <div className="pizzaInfo--sector">Preço</div>
                <div className="pizzaInfo--price">
                  <div className="pizzaInfo--actualPrice">
                    {formatoReal(pizzaJson[modalKey].price[selectedSizeIndex])}
                  </div>
                </div>
              </div>
              <button className="pizzaInfo--addButton" onClick={() => adicionarNoCarrinho()}>Adicionar ao carrinho</button>
              <button className="pizzaInfo--cancelButton" onClick={() => fecharModal()}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prod;  