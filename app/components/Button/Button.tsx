interface ButtonProps {
  children: React.ReactNode | string;
  colorScheme?: "red" | "blue" | "gray";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ children, colorScheme, ...props }: ButtonProps) => {
  if (colorScheme === "gray") {
    return (
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
      >
        {children}
      </button>
    );
  }

  if (colorScheme === "red") {
    return (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
