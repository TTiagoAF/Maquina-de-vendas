import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = () => {
   const [rowData] = useState([
       {Brinquedo: "HotWheels", Vendas: JSON.parse(localStorage.getItem("HotWheel")), PreçoDoProduto: JSON.parse(localStorage.getItem('HotWheels')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("HotWheel")) * JSON.parse(localStorage.getItem('HotWheels')).preco).toFixed(2) + "€"},
       {Brinquedo: "Peluches", Vendas: JSON.parse(localStorage.getItem("Peluche")), PreçoDoProduto: JSON.parse(localStorage.getItem('Peluches')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Peluche")) * JSON.parse(localStorage.getItem('Peluches')).preco).toFixed(2) + "€"},
       {Brinquedo: "Puzzle", Vendas: JSON.parse(localStorage.getItem("Puzzles")), PreçoDoProduto: JSON.parse(localStorage.getItem('Puzzle')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Puzzles")) * JSON.parse(localStorage.getItem('Puzzle')).preco).toFixed(2) + "€"},
       {Brinquedo: "Piões", Vendas: JSON.parse(localStorage.getItem("Pião")), PreçoDoProduto: JSON.parse(localStorage.getItem('Piões')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Pião")) * JSON.parse(localStorage.getItem('Piões')).preco).toFixed(2) + "€"},
       {Brinquedo: "Lego", Vendas: JSON.parse(localStorage.getItem("Legos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Lego')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Legos")) * JSON.parse(localStorage.getItem('Lego')).preco).toFixed(2) + "€"},
       {Brinquedo: "Comboio", Vendas: JSON.parse(localStorage.getItem("Comboios")), PreçoDoProduto: JSON.parse(localStorage.getItem('Comboio')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Comboios")) * JSON.parse(localStorage.getItem('Comboio')).preco).toFixed(2) + "€"},
       {Brinquedo: "Nenuco", Vendas: JSON.parse(localStorage.getItem("Nenucos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Nenuco')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Nenucos")) * JSON.parse(localStorage.getItem('Nenuco')).preco).toFixed(2) + "€"},
       {Brinquedo: "Nerf", Vendas: JSON.parse(localStorage.getItem("Nerfs")), PreçoDoProduto: JSON.parse(localStorage.getItem('Nerf')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Nerfs")) * JSON.parse(localStorage.getItem('Nerf')).preco).toFixed(2) + "€"},
       {Brinquedo: "Barbie", Vendas: JSON.parse(localStorage.getItem("Barbies")), PreçoDoProduto: JSON.parse(localStorage.getItem('Barbie')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Barbies")) * JSON.parse(localStorage.getItem('Barbie')).preco).toFixed(2) + "€"},
       {Brinquedo: "Cubo", Vendas: JSON.parse(localStorage.getItem("Cubos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Cubo')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Cubos")) * JSON.parse(localStorage.getItem('Cubo')).preco).toFixed(2) + "€"},
       {Brinquedo: "Berlindes", Vendas: JSON.parse(localStorage.getItem("Berlinde")), PreçoDoProduto: JSON.parse(localStorage.getItem('Berlindes')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Berlinde")) * JSON.parse(localStorage.getItem('Berlindes')).preco).toFixed(2) + "€"},
       {Brinquedo: "Pops", Vendas: JSON.parse(localStorage.getItem("Pop")), PreçoDoProduto: JSON.parse(localStorage.getItem('Pops')).preco + "€", TotalGanho: parseFloat(JSON.parse(localStorage.getItem("Pop")) * JSON.parse(localStorage.getItem('Pops')).preco).toFixed(2) + "€"},
   ]);
   
   const [columnDefs] = useState([
       { field: 'Brinquedo' },
       { field: 'Vendas' },
       { field: 'PreçoDoProduto' },
       { field: 'TotalGanho' }
   ])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};
export default Tabela;