import { AnimatePresence } from "framer-motion";
import { Animated } from "@/components/ui/animated";
import cancel from "@/assets/svg/cancel-icon.svg";

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  number: string;
}

const IndustryModal = ({
  isOpen,
  onClose,
  title,
  description,
  images,
  number,
}: IndustryModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <Animated
        variant="fadeIn"
        type="animate"
        duration={0.3}
        className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4 md:px-8"
        onClick={onClose}
      >
        <Animated
          variant="scale"
          type="animate"
          duration={0.3}
          className="bg-white rounded-2xl p-6 md:p-10 max-w-310 w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="flex items-start justify-between mb-4 md:mb-6 pb-2.5 border-b border-b-[#D6D6D6]">
            <div className="font-urbanist font-medium text-2xl md:text-[38px] flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <p className="text-accent-four text-sm md:text-[38px]">
                {number}.
              </p>
              <h2 id="modal-title" className="text-primary">
                {title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-accent-one hover:text-primary transition-colors cursor-pointer shrink-0 ml-4"
              aria-label="Close modal"
            >
              <img src={cancel} alt="" aria-hidden="true" />
            </button>
          </div>

          <p className="text-accent-one text-sm md:text-base mb-6 md:mb-10">
            {description}
          </p>

          <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0">
            <div className="flex gap-4 px-6 md:px-0">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square w-32 md:w-48 lg:w-52 bg-bg-light rounded-lg overflow-hidden shrink-0"
                >
                  {img && (
                    <img
                      src={img}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Animated>
      </Animated>
    </AnimatePresence>
  );
};

export default IndustryModal;
