import styles from "./icon-card.module.css";

type IconCardProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  id: string;
  description: string;
};

export const IconCard = ({
  href,
  icon,
  label,
  id,
  description,
}: IconCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 sm:p-4 w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs hover:bg-gray-50 items-center sm:items-start ${styles[id]} transition duration-300`}
    >
      <div
        className={`text-2xl w-[40px] h-[40px] flex items-center justify-center rounded-lg shadow-sm ${styles.icon}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-800">{label}</span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </a>
  );
};
