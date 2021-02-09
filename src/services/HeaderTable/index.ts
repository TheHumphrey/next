import { HeaderTable } from '@app/interfaces/TableData';

export function getHeaderTable(): HeaderTable {
  const headerTable: HeaderTable = {
    ativo: {
      name: 'Alerta',
      sorted: false,
      iconStatus: 'default',
    },
    velocidade: {
      name: 'Velocidade',
      sorted: true,
      iconStatus: 'default',
    },
    trajeto: {
      name: 'trajeto',
      sorted: true,
      iconStatus: 'default',
    },
    aderencia: {
      name: 'aderencia',
      sorted: true,
      iconStatus: 'default',
    },
    temperatura: {
      name: 'temperatura',
      sorted: true,
      iconStatus: 'default',
    },
    umidade: {
      name: 'umidade',
      sorted: true,
      iconStatus: 'default',
    },
    bateria: {
      name: 'dispositivo',
      sorted: true,
      iconStatus: 'default',
    },
    entregas: {
      name: 'dispositivo',
      sorted: true,
      iconStatus: 'default',
    },
    detalhe: {
      name: 'dispositivo',
      sorted: false,
      iconStatus: 'default',
    },
  };

  return headerTable;
}
