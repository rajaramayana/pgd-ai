import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<InsertInquiry>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    message: "",
  });

  const submitInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Thank you for your interest! We will contact you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        education: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.education || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    submitInquiryMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: ["Purbanchal University", "Computer Application Department", "Biratnagar, Nepal"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-XXX-XXXXXX", "+977-XXX-XXXXXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ai.diploma@pu.edu.np", "admissions@pu.edu.np"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 9:00 AM - 5:00 PM", "Saturday: Closed"],
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-16" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600" data-testid="contact-subtitle">
            Have questions? We're here to help you begin your AI journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="contact-info-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-academic-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900" data-testid={`contact-info-title-${index}`}>
                      {info.title}
                    </h4>
                    <div className="text-gray-600">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} data-testid={`contact-info-detail-${index}-${detailIndex}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="inquiry-form-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us Your Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="inquiry-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                  Educational Background
                </Label>
                <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                  <SelectTrigger data-testid="select-education">
                    <SelectValue placeholder="Select your degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bba">Bachelor of Business Administration (BBA)</SelectItem>
                    <SelectItem value="ba">Bachelor of Arts (BA)</SelectItem>
                    <SelectItem value="bcom">Bachelor of Commerce (B.Com)</SelectItem>
                    <SelectItem value="bsc">Bachelor of Science (B.Sc)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your interest in the AI diploma program..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-academic-blue hover:bg-blue-800 text-white px-8 py-3 font-semibold"
                disabled={submitInquiryMutation.isPending}
                data-testid="button-submit-inquiry"
              >
                {submitInquiryMutation.isPending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
