// These styles apply to every route in the application
import './globals.css'
 
export const metadata = {
  title: "LIVECST",
  description: "Website Live Chat No. 1",
  authors: [
    { name: "M Ridwan A", url: "https://github.com/naikod" },
    { name: "Daniel Dhaniswara", url: "https://github.com/danieldd28" },
    { name: "Ibani Muhamad H", url: "https://github.com/BaniHillabi" },
  ],
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}