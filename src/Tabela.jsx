import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const Tabela = () => {
  
    const apiUrl = 'https://localhost:7117';
    const [precoprodutos, setPrecoProduto] = useState({});
    const [vendastotaiss, setVendasTotais] = useState({});
useEffect(() => {
  const fetchBrinquedos = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
      const api = await response.json();
      console.log(api);

      if (api) {
        console.log('Entrou no if');
        // Mapear os objetos de brinquedo e atualizar os estados precoprodutos e vendastotais
        // eslint-disable-next-line no-debugger
        debugger
        const preco = api;
        setPrecoProduto(preco);
        // eslint-disable-next-line no-debugger
        const vendastotais = api;
        setVendasTotais(vendastotais);
      } else {
        console.log('Não entrou no if');
      }

    } catch (error) {
      console.error('Erro ao obter os brinquedos da API:', error);
    }
  };

  fetchBrinquedos();
}, []);

console.log(vendastotaiss[0], precoprodutos[0]);
    // Guarda o preço
    let HotWheels = precoprodutos[0].preco;
    // eslint-disable-next-line no-debugger
    debugger;
    let Peluches = precoprodutos[1];
    let Puzzle = precoprodutos[2];
    let Piões = precoprodutos[3];
    let Lego = precoprodutos[4];
    let Comboio = precoprodutos[5];
    let Nenuco = precoprodutos[6];
    let Nerf = precoprodutos[7];
    let Barbie = precoprodutos[8];
    let Cubo = precoprodutos[9];
    let Berlindes = precoprodutos[10];
    let Pops = precoprodutos[11];

    // Guarda a quantidade de vendas totais de cada brinquedo
    let HotWheel = vendastotaiss[0].vendastotais;
    let Peluche = vendastotaiss[1];
    let Puzzles = vendastotaiss[2];
    let Pião = vendastotaiss[3];
    let Legos = vendastotaiss[4];
    let Comboios = vendastotaiss[5];
    let Nenucos = vendastotaiss[6];
    let Nerfs = vendastotaiss[7];
    let Barbies = vendastotaiss[8];
    let Cubos = vendastotaiss[9];
    let Berlinde = vendastotaiss[10];
    let Pop = vendastotaiss[11];

    // Guarda a quantidade de vendas com o preço atual de cada brinquedo
    let HotWheel2 = JSON.parse(localStorage.getItem('02'));
    let Peluche2 = JSON.parse(localStorage.getItem('12'));
    let Puzzles2 = JSON.parse(localStorage.getItem('22'));
    let Pião2 = JSON.parse(localStorage.getItem('32'));
    let Legos2 = JSON.parse(localStorage.getItem('42'));
    let Comboios2 = JSON.parse(localStorage.getItem('52'));
    let Nenucos2 = JSON.parse(localStorage.getItem('62'));
    let Nerfs2 = JSON.parse(localStorage.getItem('72'));
    let Barbies2 = JSON.parse(localStorage.getItem('82'));
    let Cubos2 = JSON.parse(localStorage.getItem('92'));
    let Berlinde2 = JSON.parse(localStorage.getItem('102'));
    let Pop2 = JSON.parse(localStorage.getItem('112'));

    //Preço do produto * quantidade de vendas atuais
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