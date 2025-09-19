import { Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/Card"

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
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Multiple ways to reach us</h2>
        <p className="text-muted-foreground leading-relaxed">
          Choose the communication method that works best for you. We are always available to answer your questions.
        </p>
      </div>

      <div className="grid gap-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          const content = (
            <Card className="group transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm rounded-xl border border-[#d4b369]/20 shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="p-3 rounded-lg bg-[#d4b369]/20 flex items-center justify-center group-hover:bg-[#d4b369]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#b38e4f]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#202720] mb-1">{method.title}</h3>
                    <p className="text-sm text-[#666e68] mb-2">{method.description}</p>
                    <p className="font-medium text-[#b38e4f] group-hover:text-[#d4b369] transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )

          return method.href ? (
            <a key={index} href={method.href} className="block">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          )
        })}
      </div>
    </div>
  )
}
