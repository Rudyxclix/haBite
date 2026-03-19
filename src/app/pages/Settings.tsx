import { DashboardLayout } from "../components/DashboardLayout";
import { motion } from "motion/react";
import { Bell, Lock, CreditCard, Globe, Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences</p>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Notifications</h2>
              <p className="text-sm text-muted-foreground">Manage how you receive updates</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
              { key: "push", label: "Push Notifications", desc: "Get browser push notifications" },
              { key: "sms", label: "SMS Notifications", desc: "Receive text messages" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                <div>
                  <div className="font-medium text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    notifications[item.key as keyof typeof notifications] ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                    animate={{ left: notifications[item.key as keyof typeof notifications] ? 28 : 4 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              {theme === "light" ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Appearance</h2>
              <p className="text-sm text-muted-foreground">Customize how the app looks</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTheme("light")}
              className={`p-6 rounded-xl border-2 transition-all ${
                theme === "light" 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Sun className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="font-medium text-foreground">Light</div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTheme("dark")}
              className={`p-6 rounded-xl border-2 transition-all ${
                theme === "dark" 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Moon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="font-medium text-foreground">Dark</div>
            </motion.button>
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Security</h2>
              <p className="text-sm text-muted-foreground">Manage your password and security</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start rounded-xl h-auto p-4 border-2">
              <div className="text-left">
                <div className="font-medium text-foreground">Change Password</div>
                <div className="text-sm text-muted-foreground">Update your account password</div>
              </div>
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-xl h-auto p-4 border-2">
              <div className="text-left">
                <div className="font-medium text-foreground">Two-Factor Authentication</div>
                <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
              </div>
            </Button>
          </div>
        </motion.div>

        {/* Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Payment Methods</h2>
              <p className="text-sm text-muted-foreground">Manage your payment options</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border-2 border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                <div>
                  <div className="font-medium text-foreground">•••• 4242</div>
                  <div className="text-sm text-muted-foreground">Expires 12/26</div>
                </div>
              </div>
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Default</span>
            </div>
            <Button variant="outline" className="w-full rounded-xl border-2 border-dashed">
              + Add Payment Method
            </Button>
          </div>
        </motion.div>

        {/* Language & Region */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Language & Region</h2>
              <p className="text-sm text-muted-foreground">Set your preferred language and timezone</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Language</Label>
              <select className="w-full h-11 px-4 rounded-xl border-2 border-border focus:border-primary transition-colors">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Timezone</Label>
              <select className="w-full h-11 px-4 rounded-xl border-2 border-border focus:border-primary transition-colors">
                <option>PST (UTC-8)</option>
                <option>EST (UTC-5)</option>
                <option>GMT (UTC+0)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-red-50 rounded-2xl p-8 border border-red-200"
        >
          <h2 className="text-xl font-bold text-red-900 mb-2">Danger Zone</h2>
          <p className="text-sm text-red-700 mb-4">These actions are irreversible</p>
          <div className="space-y-3">
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100 rounded-xl">
              Deactivate Account
            </Button>
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100 rounded-xl">
              Delete Account Permanently
            </Button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
