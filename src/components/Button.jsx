export default function Button({
  type = "button",
  onClick,
  children,
  color = "green",
  size = "md",
  className = "",
}) {
  const baseStyles =
    "cursor-pointer font-medium text-sm rounded-md transition-colors flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "leading-4 px-4 py-3.5 gap-2",
  };

  const colorStyles = {
    green:
      "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white focus:ring-emerald-400",
    gray: "bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-700",
    violet:
      "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white focus:ring-violet-400",
    violetLight:
      "text-violet-600 bg-violet-50 hover:bg-violet-100 active:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400",
    red: "text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200",
  };

  const selectedColor = colorStyles[color] || colorStyles.emerald;
  const selectedSize = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${selectedSize} ${selectedColor} ${className}`}
    >
      {children}
    </button>
  );
}
