export function Badge({ children, variant }) {
  const base = "inline-block px-2 py-1 rounded-full text-xs font-medium";
  const variants = {
    outline: "border border-gray-400 text-gray-700",
    secondary: "bg-gray-200 text-gray-800",
  };
  return <span className={`${base} ${variants[variant] || ""}`}>{children}</span>;
}
