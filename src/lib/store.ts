import { Client, CallRecord, PaymentRecord } from "@/types";

// Mock data for initial development
export const mockClients: Client[] = [
  {
    pagare: "125110",
    cliente: "MARTINEZ GARCIA SONIA ANGELICA",
    zc: "Z-01",
    zv: "V-01",
    diaCobSemAnt: "JUE",
    abonoSemanal: 500,
    saldo: 20500,
    yaPagoEstaSemana: true,
    ac: 0,
    pv: 0,
    st: 10,
    abPend: 41,
    clienteTipo: "NORMAL",
    anioCartera: 2024,
    celular: "2291234567",
    telefono: "",
    domicilio: "13 DE SEPTIEMBRE 447 NINOS HEROES",
    colonia: "NINOS HEROES"
  },
  {
    pagare: "128913",
    cliente: "LOPEZ MARTINEZ ESMIRNA GUADALUPE",
    zc: "Z-02",
    zv: "V-02",
    diaCobSemAnt: "JUE",
    abonoSemanal: 450,
    saldo: 22950,
    yaPagoEstaSemana: true,
    ac: 1,
    pv: 2,
    st: 52,
    abPend: 51,
    clienteTipo: "REESTRUCTURA",
    anioCartera: 2023,
    celular: "2299876543",
    telefono: "2291112233",
    domicilio: "AMATZINAC 237 LOS TORRENTES",
    colonia: "LOS TORRENTES"
  }
];

export const mockCalls: CallRecord[] = [];
export const mockPayments: PaymentRecord[] = [
  {
    id: "p1",
    pagare: "125110",
    cliente: "MARTINEZ GARCIA SONIA ANGELICA",
    timestamp: 1726584000000, // 2024-09-17 09:40
    monto: 500,
    agente: "Cobrador",
    numeroRecibo: "2471368",
    metodoPago: "Cobrador"
  },
  {
    id: "p2",
    pagare: "128913",
    cliente: "LOPEZ MARTINEZ ESMIRNA GUADALUPE",
    timestamp: 1726584540000, // 2024-09-17 09:49
    monto: 450,
    agente: "Cobrador",
    numeroRecibo: "2471800",
    metodoPago: "Cobrador"
  }
];
