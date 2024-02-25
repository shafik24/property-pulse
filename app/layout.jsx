import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "Rentals, Properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
