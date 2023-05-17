import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = () => {
   const [rowData] = useState([
       {Brinquedo: "HotWheels", qtd: JSON.parse(localStorage.getItem("HotWheel")), preco: JSON.parse(localStorage.getItem('HotWheels')).preco},
       {Brinquedo: "Peluches", qtd: JSON.parse(localStorage.getItem("Peluche")), preco: JSON.parse(localStorage.getItem('Peluches')).preco},
       {Brinquedo: "Puzzle", qtd: JSON.parse(localStorage.getItem("Puzzles")), preco: JSON.parse(localStorage.getItem('Puzzle')).preco},
       {Brinquedo: "Piões", qtd: JSON.parse(localStorage.getItem("Pião")), preco: JSON.parse(localStorage.getItem('Piões')).preco},
       {Brinquedo: "Lego", qtd: JSON.parse(localStorage.getItem("Legos")), preco: JSON.parse(localStorage.getItem('Lego')).preco},
       {Brinquedo: "Comboio", qtd: JSON.parse(localStorage.getItem("Comboios")), preco: JSON.parse(localStorage.getItem('Comboio')).preco},
       {Brinquedo: "Nenuco", qtd: JSON.parse(localStorage.getItem("Nenucos")), preco: JSON.parse(localStorage.getItem('Nenuco')).preco},
       {Brinquedo: "Nerf", qtd: JSON.parse(localStorage.getItem("Nerfs")), preco: JSON.parse(localStorage.getItem('Nerf')).preco},
       {Brinquedo: "Barbie", qtd: JSON.parse(localStorage.getItem("Barbies")), preco: JSON.parse(localStorage.getItem('Barbie')).preco},
       {Brinquedo: "Cubo", qtd: JSON.parse(localStorage.getItem("Cubos")), preco: JSON.parse(localStorage.getItem('Cubo')).preco},
       {Brinquedo: "Berlindes", qtd: JSON.parse(localStorage.getItem("Berlinde")), preco: JSON.parse(localStorage.getItem('Berlindes')).preco},
       {Brinquedo: "Pops", qtd: JSON.parse(localStorage.getItem("Pop")), preco: JSON.parse(localStorage.getItem('Pops')).preco},
   ]);
   
   const [columnDefs] = useState([
       { field: 'Brinquedo' },
       { field: 'qtd' },
       { field: 'preco' }
   ])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};
export default Tabela;