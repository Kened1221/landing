import { FC, ReactNode } from "react";

interface ButtonIProps {
  url: string;
  icon: ReactNode;
  label:
    | "Ingresar al SGD"
    | "Mesa de Partes"
    | "Seguimiento SGD"
    | "Portal Mesa de Partes";
  colorBg?: string;
  colorBorder?: string;
  colorText?: string;
}

const ButtonI: FC<ButtonIProps> = ({
  url,
  icon,
  label,
  colorBg = "bg-[#5e41de33] hover:bg-[#5e41de4d]",
  colorBorder = "border border-transparent",
  colorText = "text-[#5D41DE]",
}) => {
  const animationClasses: Record<string, string> = {
    "Ingresar al SGD": "group-hover:translate-x-2",
    "Mesa de Partes": "group-hover:-translate-y-1",
    "Seguimiento SGD": "group-hover:scale-120",
    "Portal Mesa de Partes":
      "group-hover:translate-x-1 group-hover:-translate-y-1",
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <button
        className={`group flex justify-center items-center px-3 py-2 sm:px-4 sm:py-3 gap-2 
                    w-full h-10 sm:h-14 
                    rounded-lg sm:rounded-xl cursor-pointer 
                    transition-colors ${colorBg} ${colorBorder}`}
      >
        {label === "Ingresar al SGD" ? (
          <>
            <span
              className={`${colorText} font-semibold tracking-wide text-sm sm:text-md leading-5`}
            >
              {label}
            </span>
            <span
              className={`${colorText} transition-transform duration-500 ${
                animationClasses[label] || ""
              }`}
            >
              {icon}
            </span>
          </>
        ) : (
          <>
            <span
              className={`${colorText}  transition-transform duration-500 ${
                animationClasses[label] || ""
              }`}
            >
              {icon}
            </span>
            <span
              className={`${colorText} font-semibold tracking-wide text-sm sm:text-md leading-5`}
            >
              {label}
            </span>
          </>
        )}
      </button>
    </a>
  );
};

export default ButtonI;
