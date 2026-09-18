"use client";

import { useState } from "react";
import { Database, Link2, ExternalLink, ShieldCheck, RefreshCcw } from "lucide-react";

export function SheetsView() {
  const [spreadsheetId, setSpreadsheetId] = useState("");

  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-xl font-bold text-corp-navy">Configuración de Google Sheets</h2>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
            <Database size={24} />
          </div>
          <div>
            <h3 className="font-bold text-corp-navy">Base de Datos en Tiempo Real</h3>
            <p className="text-[10px] text-gray-400">La aplicación se sincroniza automáticamente con tu hoja de cálculo.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ID de la Hoja de Cálculo (Spreadsheet ID):</label>
          <div className="relative">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Ej: 1A2b3C4d5E6f7G8h9I0j..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-corp-navy/10"
              value={spreadsheetId}
              onChange={(e) => setSpreadsheetId(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <div className="flex items-center gap-3 text-[10px] text-gray-500 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
            <ShieldCheck className="text-blue-600 shrink-0" size={20} />
            <p>Asegúrate de compartir la hoja de cálculo con el correo de servicio de la aplicación con permisos de <strong>Editor</strong>.</p>
          </div>

          <button className="w-full bg-corp-navy text-white py-4 rounded-2xl font-bold shadow-lg shadow-corp-navy/20 flex items-center justify-center gap-2 active:scale-95 transition-all">
            <RefreshCcw size={18} />
            Vincular y Sincronizar
          </button>

          <button className="w-full text-corp-navy py-4 rounded-2xl font-bold border border-corp-navy/20 flex items-center justify-center gap-2 hover:bg-corp-navy/5 transition-all">
            <ExternalLink size={18} />
            Ver Tutorial de Configuración
          </button>
        </div>
      </div>
    </div>
  );
}
