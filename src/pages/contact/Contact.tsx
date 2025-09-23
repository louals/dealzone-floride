import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <section
      className="
        relative isolate min-h-screen
        bg-gradient-to-br  bg-[#f1f3ee]
        px-4 pt-28 md:pt-32 pb-24 md:pb-28
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(230,199,124,0.15),transparent_60%)]" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
