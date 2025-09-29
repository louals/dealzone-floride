import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Map } from "lucide-react";

export function MapView() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-1/2 sticky top-24 h-[calc(100vh-8rem)]"
    >
      <Card className="h-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl">
        <div className="h-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6c77c]/15 via-transparent to-[#ffdd95]/15 blur-2xl" />
          <div className="text-center z-10">
            <div className="rounded-2xl p-8 border border-white/20 bg-white/10 backdrop-blur-xl">
              <Map className="h-16 w-16 text-[#e6c77c] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#f1f3ee] mb-2">
                Interactive Property Map
              </h3>
              <p className="text-gray-300 mb-4 max-w-sm">
                Explore property locations and neighborhood insights.
              </p>
              <Button className="bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720]">
                Coming soon
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}