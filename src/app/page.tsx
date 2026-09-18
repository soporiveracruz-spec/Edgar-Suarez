"use client";

import { useState } from "react";
import { Phone, BarChart3, Filter, TableProperties } from "lucide-react";
import { TelevendedoraView } from "@/components/TelevendedoraView";
import { AuditoriaView } from "@/components/AuditoriaView";
import { FiltrosView } from "@/components/FiltrosView";
import { SheetsView } from "@/components/SheetsView";
import { mockClients, mockCalls, mockPayments } from "@/lib/store";
import { AppRole } from "@/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"llamadas" | "filtros" | "auditoria" | "sheets">("llamadas");
  const [role, setRole] = useState<"TELEVENDEDORA" | "GERENTE" | "OPERACIONES">("GERENTE");

  return (
    <main className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-xl relative overflow-hidden">
      {/* Header */}
      <header className="bg-corp-navy p-4 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">Cobranza Telefónica Integral</h1>
            <p className="text-xs opacity-80">Rol: {role === "GERENTE" ? "Gerencia de Cobranza" : role}</p>
          </div>
          <div className="bg-white/10 p-2 rounded-lg">
            <div className="w-6 h-6 bg-corp-orange rounded-full" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === "llamadas" && <TelevendedoraView clients={mockClients} calls={mockCalls} role={role} />}
        {activeTab === "filtros" && <FiltrosView clients={mockClients} />}
        {activeTab === "auditoria" && <AuditoriaView clients={mockClients} calls={mockCalls} payments={mockPayments} />}
        {activeTab === "sheets" && <SheetsView />}
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 pb-6">
        <button 
          onClick={() => setActiveTab("llamadas")}
          className={`flex flex-col items-center gap-1 ${activeTab === "llamadas" ? "text-corp-navy" : "text-gray-400"}`}
        >
          <div className={`p-1 rounded-xl ${activeTab === "llamadas" ? "bg-blue-50" : ""}`}>
            <Phone size={24} />
          </div>
          <span className="text-[10px] font-medium">Llamadas</span>
        </button>
        <button 
          onClick={() => setActiveTab("filtros")}
          className={`flex flex-col items-center gap-1 ${activeTab === "filtros" ? "text-corp-navy" : "text-gray-400"}`}
        >
          <div className={`p-1 rounded-xl ${activeTab === "filtros" ? "bg-blue-50" : ""}`}>
            <Filter size={24} />
          </div>
          <span className="text-[10px] font-medium">Filtros</span>
        </button>
        <button 
          onClick={() => setActiveTab("auditoria")}
          className={`flex flex-col items-center gap-1 ${activeTab === "auditoria" ? "text-corp-navy" : "text-gray-400"}`}
        >
          <div className={`p-1 rounded-xl ${activeTab === "auditoria" ? "bg-blue-50" : ""}`}>
            <BarChart3 size={24} />
          </div>
          <span className="text-[10px] font-medium">Auditoría</span>
        </button>
        <button 
          onClick={() => setActiveTab("sheets")}
          className={`flex flex-col items-center gap-1 ${activeTab === "sheets" ? "text-corp-navy" : "text-gray-400"}`}
        >
          <div className={`p-1 rounded-xl ${activeTab === "sheets" ? "bg-blue-50" : ""}`}>
            <TableProperties size={24} />
          </div>
          <span className="text-[10px] font-medium">Sheets</span>
        </button>
      </nav>
    </main>
  );
}
