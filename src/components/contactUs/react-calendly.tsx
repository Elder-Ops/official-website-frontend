import { useState } from "react";
import { PopupModal } from "react-calendly";
import Button from "../ui/button";
import { useLocation } from "react-router";
import { useScrollDetection } from "@/hooks/useScrollDetection";

// type CalendlyScheduledPayload = {
//   event?: {
//     uri?: string;
//   };
//   invitee?: {
//     uri?: string;
//   };
//   name?: string;
//   email?: string;
// };

interface CalendlyCTAProp {
    shouldRenderOnMobile:boolean
}

const CalendlyCTA:React.FC<CalendlyCTAProp> = ({shouldRenderOnMobile=false}) => {
  const [open, setOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [sendingEmail, setSendingEmail] = useState(false);

    const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isScrolled = useScrollDetection(50);

//   const showWhiteBg = isScrolled;

//   useEffect(() => {
//     setMounted(true);

//     emailjs.init({
//       publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//     });
//   }, []);

//   const sendBookingNotification = async (
//     payload: CalendlyScheduledPayload
//   ) => {
//     // if (hasSentRef.current) return;

//     // hasSentRef.current = true;
//     setSendingEmail(true);

//     try {

//          await emailjs.send(
//         EMAILJS_CONFIG.serviceId,
//         EMAILJS_CONFIG.templateId,
//         {
//           official_email: "contact@elderops.net",
//           booked_by: payload?.name || "Unknown",
//           booked_email: payload?.email || "Unknown",
//           event_uri: payload?.event?.uri || "",
//           invitee_uri: payload?.invitee?.uri || "",
//           booked_at: new Date().toLocaleString(),
//         },
//         EMAILJS_CONFIG.publicKey,
//       );
      

//       console.log("Booking notification sent successfully");
//     } catch (error) {
//       console.error("Failed to send booking notification", error);
//     //   hasSentRef.current = false;
//     } finally {
//       setSendingEmail(false);
//       setOpen(false);
//     }
//   };

//   useCalendlyEventListener({
//     onEventScheduled: (e) => {
//       const payload = e.data?.payload as CalendlyScheduledPayload;
//       void sendBookingNotification(payload);
//     },
//   });

  const handleOpenModal = () => {
    // hasSentRef.current = false;
    setOpen(true);
  };

//   if (!mounted) return null;

  return (
    <div className="">
   

       <Button
       variant="button"
          onClick={handleOpenModal}
            className={` border   font-bold transition-transform duration-200  w-69.5 sm:w-fit  ${shouldRenderOnMobile ? "md:hidden inline-block mb-2 w-full !bg-white !text-primary" : "hidden md:inline-block"} ${!isScrolled && isHomePage ?"border-primary bg-primary btn-glass-effect text-white" : "border-primary !text-primary !bg-white   btn-glass-effect"} `} 
          >
         Book a Consultation
          </Button>

      <PopupModal
        url="https://calendly.com/contact-elderops"
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </div>
  );
};

export default CalendlyCTA;