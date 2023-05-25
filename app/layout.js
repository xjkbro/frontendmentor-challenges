import "./globals.css";

export const metadata = {
    title: "Jason's Challenges",
    description: "Frontend Mentor Challenges by Jason-Kyle De Lara",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
