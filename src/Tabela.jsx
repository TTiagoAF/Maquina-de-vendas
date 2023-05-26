import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = () => {
    // Guarda o preço
    let HotWheels = JSON.parse(localStorage.getItem('HotWheel1')).preco;
    let Peluches = JSON.parse(localStorage.getItem('Peluche1')).preco;
    let Puzzle = JSON.parse(localStorage.getItem('Puzzles1')).preco;
    let Piões = JSON.parse(localStorage.getItem('Pião1')).preco;
    let Lego = JSON.parse(localStorage.getItem('Legos1')).preco;
    let Comboio = JSON.parse(localStorage.getItem('Comboios1')).preco;
    let Nenuco = JSON.parse(localStorage.getItem('Nenucos1')).preco;
    let Nerf = JSON.parse(localStorage.getItem('Nerfs1')).preco;
    let Barbie = JSON.parse(localStorage.getItem('Barbies1')).preco;
    let Cubo = JSON.parse(localStorage.getItem('Cubos1')).preco;
    let Berlindes = JSON.parse(localStorage.getItem('Berlinde1')).preco;
    let Pops = JSON.parse(localStorage.getItem('Pop1')).preco;

    // Guarda a quantidade de vendas totais de cada brinquedo
    let HotWheel = JSON.parse(localStorage.getItem('HotWheel'));
    let Peluche = JSON.parse(localStorage.getItem('Peluche'));
    let Puzzles = JSON.parse(localStorage.getItem('Puzzles'));
    let Pião = JSON.parse(localStorage.getItem('Pião'));
    let Legos = JSON.parse(localStorage.getItem('Legos'));
    let Comboios = JSON.parse(localStorage.getItem('Comboios'));
    let Nenucos = JSON.parse(localStorage.getItem('Nenucos'));
    let Nerfs = JSON.parse(localStorage.getItem('Nerfs'));
    let Barbies = JSON.parse(localStorage.getItem('Barbies'));
    let Cubos = JSON.parse(localStorage.getItem('Cubos'));
    let Berlinde = JSON.parse(localStorage.getItem('Berlinde'));
    let Pop = JSON.parse(localStorage.getItem('Pop'));

    // Guarda a quantidade de vendas com o preço atual de cada brinquedo
    let HotWheel2 = JSON.parse(localStorage.getItem('HotWheel2'));
    let Peluche2 = JSON.parse(localStorage.getItem('Peluche2'));
    let Puzzles2 = JSON.parse(localStorage.getItem('Puzzles2'));
    let Pião2 = JSON.parse(localStorage.getItem('Pião2'));
    let Legos2 = JSON.parse(localStorage.getItem('Legos2'));
    let Comboios2 = JSON.parse(localStorage.getItem('Comboios2'));
    let Nenucos2 = JSON.parse(localStorage.getItem('Nenucos2'));
    let Nerfs2 = JSON.parse(localStorage.getItem('Nerfs2'));
    let Barbies2 = JSON.parse(localStorage.getItem('Barbies2'));
    let Cubos2 = JSON.parse(localStorage.getItem('Cubos2'));
    let Berlinde2 = JSON.parse(localStorage.getItem('Berlinde2'));
    let Pop2 = JSON.parse(localStorage.getItem('Pop2'));

    //Preço do produto + quantidade de vendas atuais
    let Total = HotWheels * HotWheel2 + Peluches * Peluche2 + Puzzle * Puzzles2 + Piões * Pião2 + Lego * Legos2 + Comboio * Comboios2 + Nenuco * Nenucos2 + Nerf * Nerfs2 + Barbie * Barbies2 + Cubo * Cubos2 + Berlindes * Berlinde2 + Pops * Pop2;

    // Temos uma linha para cada Brinquedo e uma para o Total e temos 5 colunas. 1ª coluna mostra o nome de cada brinquedo, 2ª coluna mostra as vendas totais de cada produto e na linha total mostra o total de vendas, 3ª coluna mostra as vendas com o preço atual de cada brinquedo e na linha do total o total de vendas com o preço atual, 4ª coluna mostra o preço de cada brinquedo e na 5ª coluna mostra o total ganho de cada brinquedo com o preço atual e na linha total mostra o total angariado
   const [rowData] = useState([
       {Brinquedo: "HotWheels", VendasTotais: HotWheel, VendasAtuais: HotWheel2, PreçoDoProduto: HotWheels + "€",  TotalGanho: parseFloat(HotWheel2 * HotWheels).toFixed(2) + "€"},
       {Brinquedo: "Peluches", VendasTotais: Peluche, VendasAtuais: Peluche2, PreçoDoProduto: Peluches + "€", TotalGanho: parseFloat(Peluche2 * Peluches).toFixed(2) + "€"},
       {Brinquedo: "Puzzle", VendasTotais: Puzzles, VendasAtuais: Puzzles2, PreçoDoProduto: Puzzle + "€", TotalGanho: parseFloat(Puzzles2 * Puzzle).toFixed(2) + "€"},
       {Brinquedo: "Piões", VendasTotais: Pião, VendasAtuais: Pião2, PreçoDoProduto: Piões + "€", TotalGanho: parseFloat(Pião2 * Piões).toFixed(2) + "€"},
       {Brinquedo: "Lego", VendasTotais: Legos, VendasAtuais: Legos2, PreçoDoProduto: Lego + "€", TotalGanho: parseFloat(Legos2 * Lego).toFixed(2) + "€"},
       {Brinquedo: "Comboio", VendasTotais: Comboios, VendasAtuais: Comboios2, PreçoDoProduto: Comboio + "€", TotalGanho: parseFloat(Comboios2 * Comboio).toFixed(2) + "€"},
       {Brinquedo: "Nenuco", VendasTotais: Nenucos, VendasAtuais: Nenucos2, PreçoDoProduto: Nenuco + "€", TotalGanho: parseFloat(Nenucos2 * Nenuco).toFixed(2) + "€"},
       {Brinquedo: "Nerf", VendasTotais: Nerfs, VendasAtuais: Nerfs2, PreçoDoProduto: Nerf + "€", TotalGanho: parseFloat(Nerfs2 * Nerf).toFixed(2) + "€"},
       {Brinquedo: "Barbie", VendasTotais: Barbies, VendasAtuais: Barbies2, PreçoDoProduto: Barbie + "€", TotalGanho: parseFloat(Barbies2 * Barbie).toFixed(2) + "€"},
       {Brinquedo: "Cubo", VendasTotais: Cubos, VendasAtuais: Cubos2, PreçoDoProduto: Cubo + "€", TotalGanho: parseFloat(Cubos2 * Cubo).toFixed(2) + "€"},
       {Brinquedo: "Berlindes", VendasTotais: Berlinde, VendasAtuais: Berlinde2, PreçoDoProduto: Berlindes + "€", TotalGanho: parseFloat(Berlinde2 * Berlindes).toFixed(2) + "€"},
       {Brinquedo: "Pops", VendasTotais: Pop, VendasAtuais: Pop2, PreçoDoProduto: Pops + "€", TotalGanho: parseFloat(Pop2 * Pops).toFixed(2) + "€"},
       {Brinquedo: "Total", VendasTotais: Pop + HotWheel + Peluche + Puzzles + Pião + Legos + Comboios + Nenucos + Nerfs + Barbies + Cubos + Berlinde, VendasAtuais: Pop2 + HotWheel2 + Peluche2 + Puzzles2 + Pião2 + Legos2 + Comboios2 + Nenucos2 + Nerfs2 + Barbies2 + Cubos2 + Berlinde2, PreçoDoProduto: "€", TotalGanho: parseFloat(Total).toFixed(2) + "€"},
    ]);
   const [columnDefs] = useState([
       { field: 'Brinquedo' },
       { field: 'VendasTotais' },
       { field: 'VendasAtuais' },
       { field: 'PreçoDoProduto' },
       { field: 'TotalGanho' }
   ])
   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};
export default Tabela;