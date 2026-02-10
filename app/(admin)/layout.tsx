
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Zebra Travel - Admin",
    description: "Painel Administrativo",
};

export default function AdminRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body>{children}</body>
        </html>
    );
}
