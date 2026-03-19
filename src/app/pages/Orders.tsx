import { DashboardLayout } from "../components/DashboardLayout";
import { motion } from "motion/react";
import { Package, Clock, CheckCircle2, XCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

export default function Orders() {
  const orders = [
    {
      id: "ORD-001",
      date: "Mar 18, 2024",
      status: "Delivered",
      total: 39.93,
      items: [
        { name: "Protein Power Bowl", qty: 2, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
        { name: "Green Detox Bowl", qty: 1, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
      ],
    },
    {
      id: "ORD-002",
      date: "Mar 15, 2024",
      status: "In Transit",
      total: 27.98,
      items: [
        { name: "Mediterranean Feast", qty: 2, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" },
      ],
    },
    {
      id: "ORD-003",
      date: "Mar 12, 2024",
      status: "Delivered",
      total: 45.96,
      items: [
        { name: "Keto Buddha Bowl", qty: 3, image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400" },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered": return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "In Transit": return <Clock className="w-5 h-5 text-blue-600" />;
      case "Cancelled": return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <Package className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-700";
      case "In Transit": return "bg-blue-100 text-blue-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-foreground">Order History</h1>
          <p className="text-muted-foreground mt-2">View and track your orders</p>
        </motion.div>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-foreground">{order.id}</h3>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</div>
                  <p className="text-sm text-muted-foreground">{order.items.length} items</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.name}</div>
                      <div className="text-sm text-muted-foreground">Qty: {item.qty}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl border-2">
                  View Details
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl">
                  Reorder
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
