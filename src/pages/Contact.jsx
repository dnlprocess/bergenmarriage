import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_contact: 'phone',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission delay
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_contact: 'phone',
        message: ''
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DDE8D8] to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2D5F3F] font-medium tracking-wide uppercase text-sm mb-3">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B3A2F] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            When you call, you speak directly to Dr. Gross. He'll be happy to spend time 
            with you, at no charge, sympathetically exploring your reasons for inquiring 
            about counseling.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone Office */}
            <a 
              href="tel:2018362737"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-[#DDE8D8] rounded-xl w-fit mb-4 group-hover:bg-[#2D5F3F] transition-colors">
                <Phone className="w-6 h-6 text-[#2D5F3F] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1B3A2F] mb-1">Office Phone</h3>
              <p className="text-lg text-[#2D5F3F] font-medium">(201) 836-2737</p>
              <p className="text-sm text-stone-500 mt-2">Best for scheduling</p>
            </a>

            {/* Phone Cell */}
            <a 
              href="tel:2012183112"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-[#DDE8D8] rounded-xl w-fit mb-4 group-hover:bg-[#2D5F3F] transition-colors">
                <Phone className="w-6 h-6 text-[#2D5F3F] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1B3A2F] mb-1">Cell Phone</h3>
              <p className="text-lg text-[#2D5F3F] font-medium">(201) 218-3112</p>
              <p className="text-sm text-stone-500 mt-2">Evenings & weekends</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:BergenMarriage1@gmail.com"
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-[#DDE8D8] rounded-xl w-fit mb-4 group-hover:bg-[#2D5F3F] transition-colors">
                <Mail className="w-6 h-6 text-[#2D5F3F] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1B3A2F] mb-1">Email</h3>
              <p className="text-[#2D5F3F] font-medium break-all">BergenMarriage1@gmail.com</p>
              <p className="text-sm text-stone-500 mt-2">Prompt reply</p>
            </a>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6">
              <div className="p-3 bg-[#DDE8D8] rounded-xl w-fit mb-4">
                <MapPin className="w-6 h-6 text-[#2D5F3F]" />
              </div>
              <h3 className="font-semibold text-[#1B3A2F] mb-1">Office Location</h3>
              <p className="text-stone-600">1299 Wellington Avenue</p>
              <p className="text-stone-600">Teaneck, NJ 07666</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-2xl text-[#1B3A2F] mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1B3A2F] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-stone-600">
                    Dr. Gross will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <Select 
                        value={formData.preferred_contact} 
                        onValueChange={(value) => setFormData({...formData, preferred_contact: value})}
                      >
                        <SelectTrigger className="rounded-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      className="rounded-lg resize-none"
                      placeholder="Tell us briefly about your situation and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2D5F3F] hover:bg-[#234A30] text-white rounded-full h-12"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-stone-500 text-center">
                    Your information is confidential and will not be shared.
                  </p>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              {/* Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#DDE8D8] rounded-lg">
                    <Clock className="w-5 h-5 text-[#2D5F3F]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1B3A2F]">Office Hours</h3>
                </div>
                <div className="space-y-3 text-stone-600">
                  <p>Daytime, Evening & Occasional Weekend Hours</p>
                  <p>Prompt Return of Calls</p>
                  <p className="font-medium text-[#2D5F3F]">
                    Same-Day Appointments for Crisis Situations
                  </p>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-[#DDE8D8]/50 rounded-2xl p-8">
                <h3 className="font-serif text-xl text-[#1B3A2F] mb-4">Insurance</h3>
                <p className="text-stone-600 mb-4">
                  PPO Insurance Plans Accepted
                </p>
                <p className="text-sm text-stone-500">
                  Please call to discuss your specific insurance coverage.
                </p>
              </div>

              {/* Session Types */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl text-[#1B3A2F] mb-4">Session Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D5F3F] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1B3A2F]">In-Person Sessions</p>
                      <p className="text-sm text-stone-500">At our Teaneck, NJ office</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2D5F3F] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1B3A2F]">Online Sessions</p>
                      <p className="text-sm text-stone-500">Secure video consultations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl text-[#1B3A2F] mb-2">Office Location</h2>
            <p className="text-stone-600">1299 Wellington Avenue, Teaneck, NJ 07666</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8447477477477!2d-74.0127!3d40.8832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6a3b3b3b3b3%3A0x0!2sTeaneck%2C%20NJ%2007666!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}