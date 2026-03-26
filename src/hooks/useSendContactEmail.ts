import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { useState } from "react";
import { toast } from "sonner";
import type { ContactFormData } from "@/schemas/contactUs";

export const useSendContactEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendContactEmail = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        data,
        EMAILJS_CONFIG.publicKey,
      );
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendContactEmail, isSubmitting };
};
