import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Our team replies quickly",
    value: "info@dealzone.com",
    href: "mailto:info@dealzone.com",
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Come visit us",
    value: "11459 Mayfield Rd, STE 327, Cleveland OH 44106",
    href: "https://maps.google.com",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl bg-gradient-to-r from-[#b68f46] to-[#d4af37] bg-clip-text text-transparent">Multiple ways to reach us</h2>
        <p className="text-[#475569] leading-relaxed">
          Choose the communication method that works best for you. We are always available to answer your questions.
        </p>
      </div>

      <div className="grid gap-6 ">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;

          const content = (
            <Card className="group relative isolate transition-all duration-300 hover:-translate-y-1 !bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-[0_6px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
              {/* halo fin */}
              <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-[#e6c77c]/15 via-transparent to-[#ffdd95]/15 blur-xl" />
              <div className="absolute inset-0 rounded-2xl
            bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20
            blur-2xl" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="p-3 rounded-lg bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,199,124,0.35)] transition">
                    <Icon className="w-5 h-5 text-[#e6c77c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#f1f3ee] mb-1 mt-3">{method.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{method.description}</p>
                    <p className="font-medium text-[#e6c77c] group-hover:text-[#ffdd95] transition-colors truncate">
                      {method.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );

          return method.href ? (
            <a key={index} href={method.href} className="block">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
