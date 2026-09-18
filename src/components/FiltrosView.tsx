"use client";

import { useState } from "react";
import { Filter, RotateCcw, ChevronDown } from "lucide-react";
import { Client } from "@/types";

interface Props {
  clients: Client[];
}

export function FiltrosView({ clients }: Props) {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-corp-navy">Filtros de Cartera</h2>
        <button className="flex items-center gap-2 text-corp-navy text-sm font-bold border border-corp-navy/20 px-3 py-1.5 rounded-xl hover:bg-corp-navy/5">
          <RotateCcw size={16} />
          Limpiar Filtro
        </button>
      </div>

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <h3 className="font-black text-corp-navy text-sm">Tipo de Cartera</h3>
        
        <FilterSelect label="ZC (Zona de Cobro):" value="TODAS" />
        <FilterSelect label="ZV (Zona de Venta):" value="TODAS" />
        <FilterSelect label="CLIENTE TIPO:" value="TODOS" />
        <FilterSelect label="AÑO DE CARTERA:" value="TODOS" />
      </section>

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <h3 className="font-black text-corp-navy text-sm">Vigencia de cartera</h3>
        
        <BinaryFilter label="PP (Primer Pago):" />
        <BinaryFilter label="CN (Cuenta Nueva):" />
        <BinaryFilter label="CNV (Cuenta Nueva Vencida):" />
      </section>

      <div className="sticky bottom-4 bg-corp-navy/10 p-4 rounded-2xl border border-corp-navy/20 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-corp-navy">Clientas coincidentes:</span>
          <span className="text-lg font-black text-corp-orange">{clients.length} clientas</span>
        </div>
        <button className="w-full bg-corp-orange text-white py-3 rounded-xl font-bold shadow-lg shadow-corp-orange/20 active:scale-95 transition-all">
          Aplicar Filtro
        </button>
      </div>
    </div>
  );
}

function FilterSelect({ label, value }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <button className="w-full flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl text-sm font-bold text-corp-navy border border-gray-100">
        {value}
        <ChevronDown size={18} className="text-gray-400" />
      </button>
    </div>
  );
}

function BinaryFilter({ label }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <div className="flex gap-2">
        {["TODOS", "SI", "NO"].map(opt => (
          <button 
            key={opt}
            className={`flex-1 py-2 rounded-xl text-[10px] font-black tracking-widest ${opt === "TODOS" ? "bg-corp-navy text-white shadow-md" : "bg-gray-50 text-gray-400"}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
