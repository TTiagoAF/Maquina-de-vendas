import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = () => {
  const apiUrl = 'https://localhost:7117';
  const [rowData, setRowData] = useState([]); // Estado para armazenar os dados da tabela
  const [columnDefs, setColumnDefs] = useState([]); // Estado para armazenar as definições das colunas

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
      const data = await response.json();
      setRowData(data); // Atualiza o estado com os dados obtidos da API

      if (data.length > 0) {
        setColumnDefs(getColumnDefsFromData(data)); // Se houver dados, atualiza o estado com as definições das colunas
      }
    } catch (error) {
      console.error('Erro ao obter os dados da API:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função fetchData quando o componente é montado

    const interval = setInterval(fetchData, 5000); // Verifica as atualizações a cada 5 segundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  const getColumnDefsFromData = (data) => {
    return Object.keys(data[0]).map((key) => {
      return { headerName: key, field: key }; // Cria um objeto com as propriedades headerName e field para cada chave dos dados
    });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} /> {/* Componente AgGridReact para exibir a tabela */}
    </div>
  );
};

export default Tabela;