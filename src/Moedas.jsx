import React from 'react';

const todasmoedas = [
  { nome: '0.10', valor:0.10 },
  { nome: '0.20', valor:0.20 },
  { nome: '0.50', valor:0.50 },
  { nome: '1', valor: 1 },
  { nome: '2', valor:2 },
];

const MoedasList = () => {
  return (
    <div>
      {todasmoedas.map((moeda) => (
        <div key={moeda.valor}>
          <span>{moeda.name}</span>
          <span>{moeda.valor}</span>
        </div>
      ))}
    </div>
  );
};

export default MoedasList;






