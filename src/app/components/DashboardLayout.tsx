import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  User, 
  Settings, 
  History,
  Menu,
  X,
  LogOut,
  Bell,
  Search
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Orders", href: "/dashboard/orders", icon: History },
    { name: "Browse Meals", href: "/products", icon: ShoppingBag },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans">
      {/* Organic Background Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/3 organic-shape blur-3xl -z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-accent/3 organic-shape blur-3xl -z-0"></div>

      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
        className="fixed top-0 left-0 h-full w-72 bg-white/80 backdrop-blur-xl border-r border-border/50 z-50 lg:translate-x-0 lg:static lg:z-auto"
      >
        <div className="p-8 border-b border-border/50 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[1rem] bg-primary flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-2xl text-foreground font-display tracking-tight">Habite</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 relative group ${
                  active
                    ? "text-primary px-6"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/5 rounded-2xl border border-primary/10 -z-10"
                  />
                )}
                <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${active ? "text-primary" : ""}`} />
                <span className={`font-semibold tracking-wide ${active ? "text-primary" : ""}`}>{item.name}</span>
                {active && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50 bg-gradient-to-t from-white to-transparent">
          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl w-full text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-secondary group-hover:bg-red-100 flex items-center justify-center transition-colors">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-semibold">Sign Out</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="lg:ml-auto flex-1 min-h-screen relative z-10 lg:w-[calc(100%-18rem)]">
        {/* Top Bar */}
        <header className="sticky top-0 bg-white/60 backdrop-blur-md border-b border-border/50 z-30 px-6 lg:px-10 py-6">
          <div className="flex items-center justify-between mx-auto">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-white shadow-sm border border-border/50 text-foreground"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="hidden md:block relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="Search meals, plans..."
                  className="pl-12 pr-6 w-80 lg:w-[400px] h-12 rounded-2xl border-border/50 bg-white/50 focus:bg-white focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-xl bg-white shadow-sm border border-border/50 text-muted-foreground hover:text-primary transition-all"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white"></span>
              </motion.button>

              <div className="h-8 w-px bg-border/50"></div>

              <Link to="/dashboard/profile">
                <motion.div
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white shadow-sm border border-border/50 hover:border-primary/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-bold text-foreground">John Doe</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Premium</div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-12 max-w-[1600px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
