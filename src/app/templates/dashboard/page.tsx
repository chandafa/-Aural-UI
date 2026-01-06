"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { DollarSign, Users, CreditCard, Activity, Search, Bell } from "lucide-react";

export default function DashboardTemplatePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans p-4 flex gap-4 overflow-hidden">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black" />
          <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Glass Sidebar */}
      <aside className="relative z-10 hidden md:flex flex-col w-64 h-[calc(100vh-2rem)] rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20" />
            <span className="text-xl font-bold tracking-tight">Nexus</span>
        </div>

        <div className="space-y-2 flex-1">
            <SidebarItem icon={Activity} label="Overview" active />
            <SidebarItem icon={Users} label="Customers" />
            <SidebarItem icon={CreditCard} label="Transactions" />
            <SidebarItem icon={DollarSign} label="Revenue" />
        </div>

        <div className="mt-auto">
             <div className="p-4 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-center">
                <p className="text-sm font-semibold mb-2">Upgrade to Pro</p>
                <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-medium transition-colors">
                    View Plans
                </button>
             </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col h-[calc(100vh-2rem)] rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl overflow-hidden">
        
        {/* Header */}
        <header className="h-20 px-8 border-b border-white/5 flex items-center justify-between shrink-0">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            
            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="h-10 w-64 pl-10 pr-4 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:bg-white/10 transition-colors placeholder:text-white/30"
                    />
                </div>
                <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
                    <Bell className="h-5 w-5 text-white/70" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                </button>
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 border border-white/10" />
            </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" icon={DollarSign} />
                <StatCard title="Subscriptions" value="+2350" change="+180.1%" trend="up" icon={Users} />
                <StatCard title="Sales" value="+12,234" change="+19%" trend="up" icon={CreditCard} />
                <StatCard title="Active Now" value="+573" change="+201" trend="up" icon={Activity} />
            </div>

            {/* Charts Section Placeholder */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <GlassCard intensity="low" className="lg:col-span-2 p-6 rounded-[2rem] border-white/10 bg-white/5 h-[400px]">
                    <h3 className="text-lg font-semibold mb-6">Revenue Over Time</h3>
                    <div className="w-full h-[300px] flex items-end justify-between gap-2 px-4 pb-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="w-full bg-blue-500/20 hover:bg-blue-500/40 rounded-t-lg transition-all" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </GlassCard>
                <GlassCard intensity="low" className="p-6 rounded-[2rem] border-white/10 bg-white/5 h-[400px]">
                    <h3 className="text-lg font-semibold mb-6">Traffic Sources</h3>
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                            <span className="text-sm font-medium">Direct</span>
                            <span className="text-sm text-white/60">40%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                            <span className="text-sm font-medium">Social</span>
                            <span className="text-sm text-white/60">32%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                            <span className="text-sm font-medium">Referral</span>
                            <span className="text-sm text-white/60">28%</span>
                        </div>
                     </div>
                </GlassCard>
            </div>

            {/* Recent Activity */}
            <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
            <GlassCard intensity="low" className="rounded-[2rem] border-white/10 bg-white/5 overflow-hidden">
                <div className="p-6 space-y-4">
                    <TransactionItem name="Olivia Martin" email="olivia.martin@email.com" amount="+$1,999.00" status="Success" />
                    <TransactionItem name="Jackson Lee" email="jackson.lee@email.com" amount="+$39.00" status="Processing" />
                    <TransactionItem name="Isabella Nguyen" email="isabella.nguyen@email.com" amount="+$299.00" status="Success" />
                    <TransactionItem name="William Kim" email="will@email.com" amount="+$99.00" status="Success" />
                    <TransactionItem name="Sofia Davis" email="sofia.davis@email.com" amount="+$39.00" status="Failed" />
                </div>
            </GlassCard>

        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-[1.25rem] transition-all duration-200 group",
            active 
                ? "bg-white text-black shadow-lg shadow-white/10 font-medium" 
                : "text-white/60 hover:bg-white/10 hover:text-white"
        )}>
            <Icon className={cn("h-5 w-5", active ? "text-black" : "text-white/60 group-hover:text-white")} />
            <span>{label}</span>
        </button>
    )
}

function StatCard({ title, value, change, trend, icon: Icon }: { title: string, value: string, change: string, trend: "up" | "down", icon: any }) {
    return (
        <GlassCard intensity="low" className="p-6 rounded-[2rem] border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-white/60">{title}</h3>
                <Icon className="h-4 w-4 text-white/40" />
            </div>
            <div className="space-y-1">
                <div className="text-2xl font-bold tracking-tight">{value}</div>
                <p className="text-xs text-green-400 font-medium">{change} from last month</p>
            </div>
        </GlassCard>
    )
}

function TransactionItem({ name, email, amount, status }: { name: string, email: string, amount: string, status: string }) {
    return (
         <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-xl transition-colors">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800" />
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-white/40">{email}</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                 <span className={cn(
                    "text-xs px-2.5 py-1 rounded-full border",
                    status === "Success" ? "border-green-500/20 bg-green-500/10 text-green-400" :
                    status === "Processing" ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400" :
                    "border-red-500/20 bg-red-500/10 text-red-400"
                 )}>{status}</span>
                <span className="text-sm font-medium w-20 text-right">{amount}</span>
            </div>
        </div>
    )
}
