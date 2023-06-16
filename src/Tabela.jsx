import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tabela = ({ products }) => {
  const apiUrl = 'https://localhost:7117';
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setRowData(products);
      // eslint-disable-next-line no-debugger
      debugger;
    } else {
      fetchDadosDaAPI();
      // eslint-disable-next-line no-debugger
      debugger;
    }
  }, [products]);

  const fetchDadosDaAPI = async () => {
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
      const data = await response.json();
      setRowData(data);
      // eslint-disable-next-line no-debugger
      debugger;

      if (data.length > 0) {
        setColumnDefs(getColumnDefsFromData(data));
      }
    } catch (error) {
      console.error('Erro ao obter os dados da API:', error);
    }
  };

  const getColumnDefsFromData = (data) => {
    return Object.keys(data[0]).map((key) => {
      return { headerName: key, field: key };
    });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Tabela;