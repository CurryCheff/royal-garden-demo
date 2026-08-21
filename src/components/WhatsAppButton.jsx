import { whatsappUrl } from "../data/content";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton({ className = "", iconClassName = "h-4 w-4", children, onClick }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      <WhatsAppIcon className={iconClassName} />
      {children}
    </a>
  );
}
