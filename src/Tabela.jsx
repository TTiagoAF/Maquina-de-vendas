import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = () => {
   const [rowData] = useState([
       {Brinquedo: "HotWheels", Vendas: JSON.parse(localStorage.getItem("HotWheel")), PreçoDoProduto: JSON.parse(localStorage.getItem('HotWheels')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("HotWheel")) * JSON.parse(localStorage.getItem('HotWheels')).preco + "€"},
       {Brinquedo: "Peluches", Vendas: JSON.parse(localStorage.getItem("Peluche")), PreçoDoProduto: JSON.parse(localStorage.getItem('Peluches')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Peluche")) * JSON.parse(localStorage.getItem('Peluches')).preco + "€"},
       {Brinquedo: "Puzzle", Vendas: JSON.parse(localStorage.getItem("Puzzles")), PreçoDoProduto: JSON.parse(localStorage.getItem('Puzzle')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Puzzles")) * JSON.parse(localStorage.getItem('Puzzle')).preco + "€"},
       {Brinquedo: "Piões", Vendas: JSON.parse(localStorage.getItem("Pião")), PreçoDoProduto: JSON.parse(localStorage.getItem('Piões')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Pião")) * JSON.parse(localStorage.getItem('Piões')).preco + "€"},
       {Brinquedo: "Lego", Vendas: JSON.parse(localStorage.getItem("Legos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Lego')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Legos")) * JSON.parse(localStorage.getItem('Lego')).preco + "€"},
       {Brinquedo: "Comboio", Vendas: JSON.parse(localStorage.getItem("Comboios")), PreçoDoProduto: JSON.parse(localStorage.getItem('Comboio')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Comboios")) * JSON.parse(localStorage.getItem('Comboio')).preco + "€"},
       {Brinquedo: "Nenuco", Vendas: JSON.parse(localStorage.getItem("Nenucos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Nenuco')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Nenucos")) * JSON.parse(localStorage.getItem('Nenuco')).preco + "€"},
       {Brinquedo: "Nerf", Vendas: JSON.parse(localStorage.getItem("Nerfs")), PreçoDoProduto: JSON.parse(localStorage.getItem('Nerf')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Nerfs")) * JSON.parse(localStorage.getItem('Nerf')).preco + "€"},
       {Brinquedo: "Barbie", Vendas: JSON.parse(localStorage.getItem("Barbies")), PreçoDoProduto: JSON.parse(localStorage.getItem('Barbie')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Barbies")) * JSON.parse(localStorage.getItem('Barbie')).preco + "€"},
       {Brinquedo: "Cubo", Vendas: JSON.parse(localStorage.getItem("Cubos")), PreçoDoProduto: JSON.parse(localStorage.getItem('Cubo')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Cubos")) * JSON.parse(localStorage.getItem('Cubo')).preco + "€"},
       {Brinquedo: "Berlindes", Vendas: JSON.parse(localStorage.getItem("Berlinde")), PreçoDoProduto: JSON.parse(localStorage.getItem('Berlindes')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Berlinde")) * JSON.parse(localStorage.getItem('Berlindes')).preco + "€"},
       {Brinquedo: "Pops", Vendas: JSON.parse(localStorage.getItem("Pop")), PreçoDoProduto: JSON.parse(localStorage.getItem('Pops')).preco + "€", TotalGanho: JSON.parse(localStorage.getItem("Pop")) * JSON.parse(localStorage.getItem('Pops')).preco + "€"},
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