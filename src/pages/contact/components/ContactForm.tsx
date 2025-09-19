import type React from "react";
import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Input } from "../../../components/ui/Input";
import { Label } from "../../../components/ui/Label";
import { Textarea } from "../../../components/ui/Textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/Select";
import { Checkbox } from "../../../components/ui/ChackBox";
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

  if (isSubmitted) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm border border-[#d4b369]/20 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-[#d4b369]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#b38e4f]" />
          </div>
          <h3 className="text-xl font-semibold text-[#202720] mb-2">Message sent successfully!</h3>
          <p className="text-[#555a54]">Thank you for your message. We will reply shortly.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative bg-white/90 backdrop-blur-sm border border-[#d4b369]/20 shadow-xl rounded-2xl">
      {/* Decorative halos */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#b38e4f]/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#d4b369]/10 rounded-full blur-2xl pointer-events-none" />

      <CardHeader className="pb-6 relative z-10">
        <CardTitle className="text-2xl font-bold text-[#202720]">Send us a message</CardTitle>
        <p className="text-[#666e68]">Fill out the form below and we’ll get back to you as soon as possible.</p>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-[#202720]">
                First Name *
              </Label>
              <Input
                id="firstName"
                placeholder="Your first name"
                required
                className="bg-white border border-[#e5e5e5] focus:border-[#d4b369] focus:ring-[#d4b369]/20 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-[#202720]">
                Last Name *
              </Label>
              <Input
                id="lastName"
                placeholder="Your last name"
                required
                className="bg-white border border-[#e5e5e5] focus:border-[#d4b369] focus:ring-[#d4b369]/20 rounded-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#202720]">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white border border-[#e5e5e5] focus:border-[#d4b369] focus:ring-[#d4b369]/20 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-[#202720]">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (234) 567 890"
                className="bg-white border border-[#e5e5e5] focus:border-[#d4b369] focus:ring-[#d4b369]/20 rounded-md"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-[#202720]">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Describe your request in detail..."
              required
              rows={5}
              className="bg-white border border-[#e5e5e5] focus:border-[#d4b369] focus:ring-[#d4b369]/20 rounded-md resize-none"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="privacy" required className="mt-1" />
            <Label htmlFor="privacy" className="text-sm text-[#666e68] leading-relaxed">
              I agree that my personal data may be used to process my request in accordance with our privacy policy. *
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#b38e4f] to-[#d4b369] hover:from-[#b38e4f]/90 hover:to-[#d4b369]/90 text-white font-medium py-3 h-auto rounded-md shadow-md"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
