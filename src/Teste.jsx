import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

// Guarda o mês e a quantidade vendas de cada mês de cada produto
function BrinquedoObjeto(NomeBrinquedo) {
  return [
    { time: 'Janeiro', Vendas: 0 },
    { time: 'Fevereiro', Vendas: 0 },
    { time: 'Março', Vendas: 0 },
    { time: 'Abril', Vendas: 0 },
    { time: 'Maio', Vendas: JSON.parse(localStorage.getItem(`${NomeBrinquedo}May`)) },
    { time: 'Junho', Vendas: 0 },
    { time: 'Julho', Vendas: 0 },
    { time: 'Agosto', Vendas: 0 },
    { time: 'Setembro', Vendas: 0 },
    { time: 'Outubro', Vendas: 0 },
    { time: 'Novembro', Vendas: 0 },
    { time: 'Dezembro', Vendas: 0 },
  ];
}
// Guarda o nome de cada brinquedo
var data = {
  ho: BrinquedoObjeto('HotWheels'),
  pe: BrinquedoObjeto('Peluche'),
  pu: BrinquedoObjeto('Puzzles'),
  pi: BrinquedoObjeto('Pião'),
  Le: BrinquedoObjeto('Legos'),
  Co: BrinquedoObjeto('Comboios'),
  Ne: BrinquedoObjeto('Nenucos'),
  Nerf: BrinquedoObjeto('Nerfs'),
  Ba: BrinquedoObjeto('Barbies'),
  Cubo: BrinquedoObjeto('Cubos'),
  Be: BrinquedoObjeto('Berlinde'),
  Po: BrinquedoObjeto('Pop'),
};
  // Escolha de cores para cada produto
const ChartExample = () => {
  const [options,] = useState({
    theme: {
      palette: {
        fills: [
          '#5BC0EB',
          '#FDE74C',
          '#9BC53D',
          '#E55934',
          '#FA7921',
          '#fa3081',
          '#000000',
          '#ef1414',
          '#13ff13',
          '#1340ff',
          '#bd00ff',
          '#54024d',
        ],
        strokes: [
          '#5BC0EB',
          '#FDE74C',
          '#9BC53D',
          '#E55934',
          '#FA7921',
          '#fa3081',
          '#000000',
          '#ef1414',
          '#13ff13',
          '#1340ff',
          '#bd00ff',
          '#54024d',
        ],
      },
      overrides: {
        line: { series: { strokeWidth: 3, marker: { enabled: false } } },
      },
    },
    autoSize: true,
    title: {
      text: 'Vendas dos Produtos',
      fontSize: 18,
      spacing: 25,
    },
    footnote: {
      text: 'Meses',
    },
    padding: {
      left: 40,
      right: 40,
    },
    // Mostra as linhas no gráfico de cada Brinquedo
    series: [
      {
        data: data.ho,
        type: 'line',
        title: 'HotWheels',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.pe,
        type: 'line',
        title: 'Peluche',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.pu,
        type: 'line',
        title: 'Puzzle',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.pi,
        type: 'line',
        title: 'Pião',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Le,
        type: 'line',
        title: 'Lego',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Co,
        type: 'line',
        title: 'Comboio',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Ne,
        type: 'line',
        title: 'Nenuco',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Nerf,
        type: 'line',
        title: 'Nerf',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Ba,
        type: 'line',
        title: 'Barbie',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Cubo,
        type: 'line',
        title: 'Cubo',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Be,
        type: 'line',
        title: 'Berlinde',
        xKey: 'time',
        yKey: 'Vendas',
      },
      {
        data: data.Po,
        type: 'line',
        title: 'Pop',
        xKey: 'time',
        yKey: 'Vendas',
      },
    ],
    axes: [
      
      {
        type: 'number',
        position: 'left',
        title: {
          text: "N produtos",
        },
      },
      {
        position: 'bottom',
        type: 'text',
        title: {
          text: "Mêses",
        },
        
      },
    ],
    legend: {
      position: 'bottom',
      item: {
        marker: {
          strokeWidth: 0,
        },
      },
    },
  });

  return <AgChartsReact options={options} />;
};
export default ChartExample;