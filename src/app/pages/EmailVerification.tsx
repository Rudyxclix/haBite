import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function EmailVerification() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    // Simulate email verification API call
    const timer = setTimeout(() => {
      // Randomly succeed or fail for demo
      setStatus(Math.random() > 0.2 ? "success" : "error");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === "error" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, countdown]);

  const handleResend = () => {
    setStatus("loading");
    setCountdown(60);
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-primary/5 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="w-full max-w-md relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-border">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-2xl text-foreground">Habite</span>
          </Link>

          {/* Loading State */}
          {status === "loading" && (
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Verifying Your Email</h3>
                <p className="text-muted-foreground">
                  Please wait while we verify your email address...
                </p>
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {status === "success" && (
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Email Verified!</h3>
                <p className="text-muted-foreground">
                  Your email has been successfully verified. You can now access all features of your account.
                </p>
              </div>

              <div className="space-y-3">
                <Link to="/dashboard">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full h-11 rounded-xl border-2 hover:border-primary hover:text-primary">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {status === "error" && (
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <XCircle className="w-10 h-10 text-red-500" />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Verification Failed</h3>
                <p className="text-muted-foreground">
                  The verification link may have expired or is invalid. Please try again.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Resend available in:</span>
                  <span className="text-sm font-medium text-foreground">{countdown}s</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleResend}
                  disabled={countdown > 0}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : "Resend Verification Email"}
                </Button>
                <Link to="/login">
                  <Button variant="outline" className="w-full h-11 rounded-xl border-2 hover:border-primary hover:text-primary">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
