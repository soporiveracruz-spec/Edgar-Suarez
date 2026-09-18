"use client";

import { useState, useMemo } from "react";
import { Share2, Download, TrendingUp, Users, CalendarDays, Wallet } from "lucide-react";
import { Client, CallRecord, PaymentRecord } from "@/types";

interface Props {
  clients: Client[];
  calls: CallRecord[];
  payments: PaymentRecord[];
}

export function AuditoriaView({ clients, calls, payments }: Props) {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-corp-navy">Panel de Auditoría</h2>
        <div className="flex gap-2">
          <button className="p-2 bg-corp-navy text-white rounded-xl shadow-md"><Share2 size={20} /></button>
          <button className="p-2 bg-corp-green text-white rounded-xl shadow-md"><Download size={20} /></button>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          label="Total Cobrado" 
          value={`$${payments.reduce((acc, p) => acc + p.monto, 0)}`} 
          icon={<Wallet className="text-corp-green" size={20} />}
          color="border-l-corp-green"
        />
        <StatCard 
          label="Clientes" 
          value={clients.length} 
          icon={<Users className="text-corp-navy" size={20} />}
          color="border-l-corp-navy"
        />
        <StatCard 
          label="Efectividad" 
          value={`${Math.round((payments.length / clients.length) * 100)}%`} 
          icon={<TrendingUp className="text-corp-orange" size={20} />}
          color="border-l-corp-orange"
        />
        <StatCard 
          label="Gestiones" 
          value={calls.length} 
          icon={<CalendarDays className="text-corp-violet" size={20} />}
          color="border-l-corp-violet"
        />
      </div>

      {/* Indicators List */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-corp-navy opacity-60 text-sm uppercase tracking-widest">Indicadores de Gestión</h3>
        <IndicatorItem label="Pendientes de Cobro" count={clients.filter(c => !c.yaPagoEstaSemana).length} color="bg-corp-navy" />
        <IndicatorItem label="Cobrados Hoy" count={payments.length} color="bg-corp-green" />
        <IndicatorItem label="Promesas de Pago" count={0} color="bg-corp-orange" />
        <IndicatorItem label="Sin Gestión" count={clients.length - calls.length} color="bg-corp-slate" />
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: any) {
  return (
    <div className={`bg-white p-4 rounded-2xl shadow-sm border-l-4 ${color} flex flex-col gap-1`}>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase">{label}</span>
        {icon}
      </div>
      <span className="text-xl font-black text-corp-navy">{value}</span>
    </div>
  );
}

function IndicatorItem({ label, count, color }: any) {
  return (
    <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group active:scale-95 transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${color}`} />
        <span className="font-bold text-corp-navy">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-black text-corp-navy">{count}</span>
        <div className="w-6 h-6 bg-gray-50 rounded-lg flex items-center justify-center text-gray-300">
          <TrendingUp size={14} />
        </div>
      </div>
    </button>
  );
}
