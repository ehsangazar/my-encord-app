import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <div className="flex-1 h-full overflow-y-auto">
        <Header />
        <main className="h-full p-4 max-w-4xl mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
