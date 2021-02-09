export type HeaderTable = {
  ativo: TitleType;
  velocidade: TitleType;
  trajeto: TitleType;
  aderencia: TitleType;
  temperatura: TitleType;
  umidade: TitleType;
  bateria: TitleType;
  entregas: TitleType;
  detalhe: TitleType;
};

export type BodyData = {
  ativo: string;
  velocidade: number;
  trajeto: number;
  aderencia: number;
  temperatura: number;
  umidade: number;
  dispositivo: Dispositivo;
  entregas: Entrega[];
};

type Dispositivo = {
  bateria: number;
};

type Entrega = {
  status: number;
  ordem: number;
  cliente: string;
};

type TitleType = {
  name: string;
  sorted: boolean;
  iconStatus: string;
};
