function Produto({ nome, preco, estoque, onSelecionar }) {
  return (
    <li className={nome}>
      {nome} - {preco}€ <br /> {estoque} unidades restantes{" "}
      <button className="produtos-button" onClick={onSelecionar}>
        Selecionar
      </button>
    </li>
  );
}

export default Produto