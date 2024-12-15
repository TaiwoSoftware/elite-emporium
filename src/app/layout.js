import "./globals.css";
export const metadata = {
  title: "Elite-Emporium",
  description: "This website is an E-commerce wwebsite where users can purchase clothes bid the price of a product to a cheaper price than the price of a product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
