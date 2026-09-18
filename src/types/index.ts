export interface Client {
  pagare: string;
  cliente: string;
  zc: string;
  zv: string;
  diaCobSemAnt: string;
  abonoSemanal: number;
  saldo: number;
  yaPagoEstaSemana: boolean;
  ac: number;
  pv: number;
  st: number;
  abPend: number;
  clienteTipo: string;
  anioCartera: number;
  celular: string;
  telefono: string;
  domicilio: string;
  colonia: string;
}

export interface CallRecord {
  id: string;
  pagare: string;
  cliente: string;
  timestamp: number;
  resultado: string;
  agente: string;
  observaciones: string;
  fechaPromesa?: string;
  montoPromesa?: number;
  destinatario: string;
  telefonoMarcado: string;
}

export interface PaymentRecord {
  id: string;
  pagare: string;
  cliente: string;
  timestamp: number;
  monto: number;
  agente: string;
  numeroRecibo: string;
  metodoPago: string;
}

export type IndicatorType = 
  | "PENDIENTE"
  | "COBRADOS"
  | "COMPROMISO"
  | "LLAMADAS"
  | "LLAMADAS_AVAL"
  | "WA_IMG_CLIENTA"
  | "WA_TXT_CLIENTA"
  | "WA_AVAL"
  | "SMS_CLIENTA"
  | "SMS_AVAL"
  | "RES_GERENTE"
  | "RES_NEGATIVA"
  | "RES_NO_CONTESTA"
  | "RES_NUM_EQUIVOCADO"
  | "RES_YA_PAGO";

export type AppRole = "TELEVENDEDORA" | "GERENTE" | "OPERACIONES";

export interface IndicatorClientDetail {
  client: Client;
  detailTag: string;
  tagColor: string;
  mainDetail: string;
  secondaryDetail?: string;
  paymentRecord?: PaymentRecord;
  callRecord?: CallRecord;
}
