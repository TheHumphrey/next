import { BodyData, HeaderTable } from '@app/interfaces/TableData';
import { ETableSorting } from '@app/interfaces/TableDataSorting';

export function sortTable(array: BodyData[], column: string, ascOrDesc: boolean): BodyData[] {
  const key = ETableSorting[column];
  const typeColumn = keyVerify(key, array);
  console.log(typeColumn);
  if (ascOrDesc === true) {
    switch (typeColumn) {
      case 'dispositivo':
        array.sort((a, b) => {
          if (a[key].bateria < b[key].bateria) {
            return -1;
          }
          if (a[key].bateria > b[key].bateria) {
            return 1;
          }
          return 0;
        });
        break;

      case 'entregas':
        array.sort((a, b) => {
          if (a['entregas'].length < b['entregas'].length) {
            return -1;
          }
          if (a['entregas'].length > b['entregas'].length) {
            return 1;
          }
          return 0;
        });
        break;

      case 'number':
        array.sort((a, b) => {
          if (a[key] < b[key]) {
            return -1;
          }
          if (a[key] > b[key]) {
            return 1;
          }
          return 0;
        });
        break;

      case 'string':
        array.sort((a, b) => {
          if (a[key].toLocaleLowerCase() < b[key].toLocaleLowerCase()) {
            return -1;
          }
          if (a[key].toLocaleLowerCase() > b[key].toLocaleLowerCase()) {
            return 1;
          }
          return 0;
        });
        break;
    }
    return array;
  } else {
    switch (typeColumn) {
      case 'dispositivo':
        array.sort((a, b) => {
          if (a[key].bateria < b[key].bateria) {
            return 1;
          }
          if (a[key].bateria > b[key].bateria) {
            return -1;
          }
          return 0;
        });
        break;

      case 'entregas':
        array.sort((a, b) => {
          if (a['entregas'].length < b['entregas'].length) {
            return 1;
          }
          if (a['entregas'].length > b['entregas'].length) {
            return -1;
          }
          return 0;
        });
        break;

      case 'number':
        array.sort((a, b) => {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0;
        });
        break;

      case 'string':
        array.sort((a, b) => {
          if (a[key].toLocaleLowerCase() < b[key].toLocaleLowerCase()) {
            return 1;
          }
          if (a[key].toLocaleLowerCase() > b[key].toLocaleLowerCase()) {
            return -1;
          }
          return 0;
        });
        break;
    }
    return array;
  }
}

export function setIconHeader(header: HeaderTable, ascOrDesc: boolean, title: string): HeaderTable {
  const data: HeaderTable = resetHeader(header);
  if (ascOrDesc == false) {
    data[title].iconStatus = 'up';
    return data;
  } else {
    data[title].iconStatus = 'down';
    return data;
  }
}

function resetHeader(data: HeaderTable): HeaderTable {
  data.ativo.iconStatus = 'default';
  data.aderencia.iconStatus = 'default';
  data.bateria.iconStatus = 'default';
  data.entregas.iconStatus = 'default';
  data.temperatura.iconStatus = 'default';
  data.trajeto.iconStatus = 'default';
  data.umidade.iconStatus = 'default';
  data.velocidade.iconStatus = 'default';

  return data;
}

function keyVerify(key: string, array: BodyData[]) {
  if (key == 'dispositivo') {
    return 'dispositivo';
  }
  if (key == 'entregas') {
    return 'entregas';
  }
  return typeof array[1][key];
}
