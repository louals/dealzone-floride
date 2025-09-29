import { MapPin, Bed, Bath, Square, Calendar, Heart, Star, TrendingUp, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Property {
  id: number;
  price: number;
  capRate: number;
  address: string;
  year: number;
  type: string;
  beds: number;
  baths: number;
  sqft: number;
  features: string[];
  images: string[];
  verified: boolean;
  imageCount: number;
}

export function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className="group"
    >
      <Card className="overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl hover:shadow-[0_10px_28px_rgba(0,0,0,0.55)] transition">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.address}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            {property.verified && (
              <Badge className="bg-white/20 text-[#ffdd95] border border-white/30 backdrop-blur">
                <Star className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
            <Badge className="bg-white/20 text-[#e6c77c] border border-white/30 backdrop-blur">
              <TrendingUp className="h-3 w-3 mr-1" />
              {property.capRate}% Cap
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-5">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#f1f3ee]">
              ${property.price.toLocaleString()}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-white/15 text-[#e6c77c] border border-white/25">
                {property.capRate}% Cap
              </Badge>
              <Badge className="bg-white/15 text-[#f1f3ee] border border-white/25">
                <Home className="h-3 w-3 mr-1" />
                {property.type}
              </Badge>
            </div>
          </div>

          <div className="flex items-center text-gray-300 mb-4">
            <MapPin className="h-4 w-4 mr-2 text-[#e6c77c]" />
            <span className="text-sm">{property.address}</span>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4 py-3 bg-white/10 rounded-lg px-3 border border-white/20">
            <div className="text-center">
              <Bed className="h-4 w-4 mx-auto text-[#e6c77c]" />
              <span className="text-sm font-semibold text-[#f1f3ee]">{property.beds}</span>
              <p className="text-[10px] text-gray-300">Beds</p>
            </div>
            <div className="text-center">
              <Bath className="h-4 w-4 mx-auto text-[#e6c77c]" />
              <span className="text-sm font-semibold text-[#f1f3ee]">{property.baths}</span>
              <p className="text-[10px] text-gray-300">Baths</p>
            </div>
            <div className="text-center">
              <Square className="h-4 w-4 mx-auto text-[#e6c77c]" />
              <span className="text-sm font-semibold text-[#f1f3ee]">{property.sqft}</span>
              <p className="text-[10px] text-gray-300">Sq Ft</p>
            </div>
            <div className="text-center">
              <Calendar className="h-4 w-4 mx-auto text-[#e6c77c]" />
              <span className="text-sm font-semibold text-[#f1f3ee]">{property.year}</span>
              <p className="text-[10px] text-gray-300">Built</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {property.features.map((f, idx) => (
              <Badge key={idx} className="bg-white/15 text-[#f1f3ee] border border-white/25">
                {f}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] text-[#202720] font-semibold shadow-md hover:shadow-xl text-sm">
              View Property Details
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-white/10 text-[#f1f3ee] hover:bg-white/20 px-4 py-2.5 text-sm"
            >
              Contact Agent
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
