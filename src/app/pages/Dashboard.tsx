import { DashboardLayout } from "../components/DashboardLayout";
import { motion } from "motion/react";
import { TrendingUp, Package, Star, Clock, ArrowRight, Flame, Drumstick, Apple, Target, Zap, Waves } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Dashboard() {
  const stats = [
    { 
      label: "Personalized Plan", 
      value: "Weight Loss", 
      icon: Target, 
      color: "bg-emerald-500/10 text-emerald-600",
      trend: "Day 12 of 30"
    },
    { 
      label: "Plan Deliveries", 
      value: "12 / 90", 
      icon: Package, 
      color: "bg-orange-500/10 text-orange-600",
      trend: "Next: Tomorrow 1 PM"
    },
    { 
      label: "Calories Today", 
      value: "1,450", 
      icon: Flame, 
      color: "bg-red-500/10 text-red-600",
      subtext: "Goal: 2,100 kcal"
    },
    { 
      label: "Protein Goal", 
      value: "85%", 
      icon: Drumstick, 
      color: "bg-sky-500/10 text-sky-600",
      subtext: "42g / 85g remaining"
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      name: "Protein Power Bowl",
      date: "Today, 12:30 PM",
      status: "Delivered",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      calories: 520
    },
    {
      id: "ORD-002",
      name: "Green Detox Bowl",
      date: "Yesterday, 1:15 PM",
      status: "Delivered",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
      calories: 380
    },
    {
      id: "ORD-003",
      name: "Mediterranean Feast",
      date: "Mar 17, 2:00 PM",
      status: "Delivered",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
      calories: 640
    },
  ];

  const upcomingMeals = [
    {
      name: "Grilled Salmon Bowl",
      time: "Tomorrow, 1:00 PM",
      calories: 520,
      protein: 42,
    },
    {
      name: "Chicken Teriyaki Bowl",
      time: "Mar 21, 1:00 PM",
      calories: 580,
      protein: 38,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <DashboardLayout>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-10 pb-16"
      >
        {/* Welcome Section */}
        <div className="relative group">
          <motion.div
            variants={item}
            className="relative z-10"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display">
              Welcome back, <span className="text-primary italic">John!</span> 👋
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Your health journey is progressing beautifully. You're just <span className="text-foreground font-semibold">3 meals away</span> from hitting your weekly protein target.
            </p>
          </motion.div>
          {/* Decorative Background Blob */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 organic-shape blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -top-10 right-20 w-48 h-48 bg-accent/10 organic-shape blur-3xl -z-10 animate-pulse delay-1000"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-3xl p-6 shadow-sm border border-border/50 group cursor-default"
              >
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {stat.trend && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-lg">
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground font-display">{stat.value}</p>
                    {stat.subtext && (
                      <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Recent Orders - Taking more space for impact */}
          <motion.div
            variants={item}
            className="lg:col-span-8 glass rounded-[2.5rem] p-8 lg:p-10 shadow-sm border border-border/50"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-display">Plan History</h2>
                <p className="text-muted-foreground mt-1">Your recent bowl deliveries</p>
              </div>
              <Link to="/dashboard/orders">
                <Button variant="ghost" size="sm" className="rounded-2xl hover:bg-primary/5 text-primary">
                  View full history
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {recentOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  variants={item}
                  whileHover={{ x: 10, backgroundColor: "rgba(0,0,0,0.02)" }}
                  className="flex flex-col sm:flex-row sm:items-center gap-6 p-4 rounded-3xl transition-all border border-transparent hover:border-border/50"
                >
                  <div className="w-full sm:w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-inner group-hover:rotate-2 transition-transform duration-500">
                    <ImageWithFallback
                      src={order.image}
                      alt={order.name}
                      className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-xl text-foreground truncate">{order.name}</h3>
                      <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                        {order.calories} CAL
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                       <Clock className="w-3.5 h-3.5" />
                       {order.date}
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <span className="text-sm font-semibold text-primary/80">
                      {order.status}
                    </span>
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border/50 hover:bg-primary hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming & Quick Stats Side Panel */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={item}
              className="glass rounded-[2rem] p-8 shadow-sm border border-border/50"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Queue</h2>
                </div>
                <Link to="/products" className="text-xs font-bold text-accent uppercase tracking-wider hover:underline">
                  Add more
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingMeals.map((meal, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="p-5 rounded-3xl bg-white border border-border/30 shadow-subtle relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 organic-shape -translate-y-12 translate-x-12 blur-xl transition-transform group-hover:scale-125"></div>
                    <h3 className="font-bold text-foreground mb-1 relative z-10">{meal.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 relative z-10">{meal.time}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest relative z-10">
                      <div className="flex items-center gap-1.5 text-orange-600">
                        <Flame className="w-3 h-3" />
                        <span>{meal.calories}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sky-600">
                        <Drumstick className="w-3 h-3" />
                        <span>{meal.protein}G</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium CTA Panel */}
            <motion.div
              variants={item}
              className="bg-primary rounded-[2rem] p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80"></div>
              {/* Abstract Patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000 delay-200"></div>
              
              <div className="relative z-10">
                <Target className="w-10 h-10 text-white/40 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Optimize your meal plan</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  Our AI nutritionist can refine your current plan based on your recent activity.
                </p>
                <Button className="w-full bg-white text-primary hover:bg-secondary rounded-[1.25rem] py-6 font-bold group-hover:gap-4 transition-all">
                  Refine My Plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
