import type React from "react";
import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";
import { Textarea } from "../../../components/ui/TextArea";
import { Checkbox } from "../../../components/ui/Checkbox";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputGlass =
    "bg-white/20 backdrop-blur-md text-[#f1f3ee] " +
    "placeholder:text-white/80 placeholder:opacity-100 " +
    "border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#e6c77c]/80 rounded-md";

  if (isSubmitted) {
    return (
      <Card className="relative isolate bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-2xl">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl" />
        <CardContent className="p-8 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#e6c77c]" />
          </div>
          <h3 className="text-xl font-semibold text-[#f1f3ee] mb-2">Message sent successfully!</h3>
          <p className="text-gray-300">Thank you for your message. We will reply shortly.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative isolate bg-gradient-to-br from-[#0d0f0d] via-[#1c2420] to-[#101311] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-2xl">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20 blur-2xl" />
      <div className="absolute inset-0 rounded-2xl
            bg-gradient-to-br from-[#e6c77c]/20 via-transparent to-[#ffdd95]/20
            blur-2xl" />
      <CardHeader className="pb-6 relative z-10">
        <CardTitle className="text-2xl font-bold text-[#f1f3ee]">Send us a message</CardTitle>
        <p className="text-gray-300">Fill out the form below and we’ll get back to you as soon as possible.</p>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-[#f1f3ee]">First Name *</Label>
              <Input id="firstName" placeholder="Your first name" required className={inputGlass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-[#f1f3ee]">Last Name *</Label>
              <Input id="lastName" placeholder="Your last name" required className={inputGlass} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#f1f3ee]">Email *</Label>
              <Input id="email" type="email" placeholder="your@email.com" required className={inputGlass} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-[#f1f3ee]">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (234) 567 890" className={inputGlass} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-[#f1f3ee]">Message *</Label>
            <Textarea
              id="message"
              placeholder="Describe your request in detail..."
              required
              rows={5}
              className={`${inputGlass} resize-none`} 
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="privacy" required className="mt-1 border-white/40 data-[state=checked]:bg-[#e6c77c]" />
            <Label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
              I agree that my personal data may be used to process my request in accordance with our privacy policy. *
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#e6c77c] via-[#d9a74a] to-[#ffdd95] hover:shadow-[0_0_25px_rgba(230,199,124,0.4)] text-[#202720] font-semibold py-3 h-auto rounded-md shadow-md"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#202720]/20 border-t-[#202720] rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
