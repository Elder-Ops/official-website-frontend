import { contactSchema, type ContactFormData } from "@/schemas/contactUs";
import { useState } from "react";
import Button from "@/components/ui/button";
import { useSendContactEmail } from "@/hooks/useSendContactEmail";

interface FormProps {
  variant?: "page" | "modal";
}

const Form = ({ variant = "modal" }: FormProps) => {
  const { sendContactEmail, isSubmitting } = useSendContactEmail();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    await sendContactEmail(result.data);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const baseInputClass = `w-full ${variant === "modal" ? "bg-[#F7F7F7] placeholder:text-[#C3C3C3]" : "bg-[#F6F6F6] placeholder:text-[#B8B8B8]"}  border-[0.5px] px-3 py-2 rounded-[5px] text-sm outline-none focus:border-primary text-primary  placeholder:font-medium`;
  const getInputClass = (hasError: boolean) =>
    `${baseInputClass} ${hasError ? "border-red-500" : "border-[#E5E5E5]"}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white space-y-4 flex flex-col h-full w-full border ${variant === "modal" ? "border-none" : "border-[#E3E3E3]"}  p-4 rounded-[20px] sm:space-y-6 md:p-8 shadow-[0px_2px_5px_0px_#00000005]`}
    >
      <div className="flex flex-col items-center xl:flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-[#374543] text-sm mb-2.5">
            First name
          </label>
          <input
            type="text"
            id="name"
            name="firstName"
            placeholder="Enter your first name..."
            value={formData.firstName}
            onChange={handleChange}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "name-error" : undefined}
            className={getInputClass(!!errors.firstName)}
          />
          {errors.firstName && (
            <p
              id="name-error"
              role="alert"
              className="text-red-500 text-xs mt-1"
            >
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-[#374543] text-sm mb-2.5">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            name="lastName"
            placeholder="Enter your last name..."
            value={formData.lastName}
            onChange={handleChange}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "name-error" : undefined}
            className={getInputClass(!!errors.lastName)}
          />
          {errors.lastName && (
            <p
              id="name-error"
              role="alert"
              className="text-red-500 text-xs mt-1"
            >
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-[#374543] text-sm mb-2.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address..."
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={getInputClass(!!errors.email)}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="text-red-500 text-xs mt-1"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-[#374543] text-sm mb-2.5">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${getInputClass(!!errors.message)} resize-none ${variant === "page" ? "h-55.5" : "h-49.75"}`}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-red-500 text-xs mt-1"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        variant={isSubmitting ? "button" : "glass-button"}
        type="submit"
        disabled={isSubmitting}
        className={`w-full mt-4 ${isSubmitting && "cursor-not-allowed bg-primary/60"} sm:mt-5.5 sm:w-37 mx-auto lg:mx-0 lg:ml-auto`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default Form;
