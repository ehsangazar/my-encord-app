interface ButtonProps {
  children: React.ReactNode | string;
  colorScheme?: "red" | "blue";
  onClick?: () => void;
}

const Button = ({ children, colorScheme, ...props }: ButtonProps) => {
  if (colorScheme === "red") {
    return (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
