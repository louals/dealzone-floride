import { ContactHero } from "./components/ContactHero"
import { ContactForm } from "./components/ContactForm"
import { ContactInfo } from "./components/ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
