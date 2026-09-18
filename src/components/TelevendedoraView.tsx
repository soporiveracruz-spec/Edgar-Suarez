"use client";

import { useState, useMemo } from "react";
import { Search, Calendar, Phone, MessageSquare, CreditCard, Info } from "lucide-react";
import { Client, CallRecord } from "@/types";

interface Props {
  clients: Client[];
  calls: CallRecord[];
  role: string;
}

export function TelevendedoraView({ clients, calls, role }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"PENDIENTE" | "COBRADOS" | "COMPROMISO" | "LLAMADAS">("PENDIENTE");

  const counts = useMemo(() => {
    return {
      pendiente: clients.filter(c => !c.yaPagoEstaSemana).length,
      cobrados: clients.filter(c => c.yaPagoEstaSemana).length,
      compromiso: 0, // Mock for now
      llamadas: calls.length
    };
  }, [clients, calls]);

  const filteredClients = useMemo(() => {
    let base = clients;
    if (activeTab === "PENDIENTE") base = clients.filter(c => !c.yaPagoEstaSemana);
    if (activeTab === "COBRADOS") base = clients.filter(c => c.yaPagoEstaSemana);
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      base = base.filter(c => 
        c.cliente.toLowerCase().includes(q) || 
        c.pagare.includes(q)
      );
    }
    return base;
  }, [clients, activeTab, searchQuery]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold text-corp-navy">Resumen de Llamadas</h2>

      {/* Search and Date */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-corp-navy/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="p-2 border border-gray-200 rounded-xl bg-white text-corp-navy">
          <Calendar size={24} />
        </button>
      </div>

      {/* Quick Filters */}
      <div className="grid grid-cols-2 gap-3">
        <QuickFilterCard 
          label="Pendientes" 
          count={counts.pendiente} 
          active={activeTab === "PENDIENTE"} 
          onClick={() => setActiveTab("PENDIENTE")}
          color="bg-corp-navy"
        />
        <QuickFilterCard 
          label="Cobrados" 
          count={counts.cobrados} 
          active={activeTab === "COBRADOS"} 
          onClick={() => setActiveTab("COBRADOS")}
          color="bg-corp-green"
        />
        <QuickFilterCard 
          label="Compromisos" 
          count={counts.compromiso} 
          active={activeTab === "COMPROMISO"} 
          onClick={() => setActiveTab("COMPROMISO")}
          color="bg-corp-orange"
        />
        <QuickFilterCard 
          label="Llamadas" 
          count={counts.llamadas} 
          active={activeTab === "LLAMADAS"} 
          onClick={() => setActiveTab("LLAMADAS")}
          color="bg-corp-violet"
        />
      </div>

      {/* Client List */}
      <div className="flex flex-col gap-3">
        {filteredClients.map(client => (
          <ClientCard key={client.pagare} client={client} />
        ))}
      </div>
    </div>
  );
}

function QuickFilterCard({ label, count, active, onClick, color }: any) {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all ${active ? color + " text-white shadow-lg scale-105" : "bg-white border border-gray-100 text-gray-600 shadow-sm"}`}
    >
      <span className="text-2xl font-black">{count}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-sm font-black text-corp-navy">{client.pagare}</span>
          <h3 className="font-bold text-corp-navy leading-tight">{client.cliente}</h3>
          <p className="text-[10px] text-gray-400 uppercase">{client.domicilio}</p>
        </div>
        {client.yaPagoEstaSemana && (
          <span className="bg-corp-green text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase">
            Cobro Registrado
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 py-2 border-y border-gray-50">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400">Abono Semanal:</span>
          <span className="font-bold text-corp-orange">${client.abonoSemanal}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[10px] text-gray-400">Saldo Pendiente:</span>
          <span className="font-bold text-corp-navy">${client.saldo}</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-1">
        <div className="flex gap-2">
          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Info size={20} /></button>
          <button className="p-2 bg-green-50 text-green-600 rounded-xl"><Phone size={20} /></button>
          <button className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><MessageSquare size={20} /></button>
        </div>
        <button className="flex items-center gap-2 bg-corp-navy text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
          <CreditCard size={16} />
          Cobro
        </button>
      </div>
    </div>
  );
}
