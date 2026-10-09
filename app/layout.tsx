import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WorkspaceShell } from "@/components/layout/workspace-shell";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
default: "LinkForge AI — Forge a Stronger LinkedIn Presence",
template: "%s | LinkForge AI",
},
description:
"AI-powered tools to optimize your LinkedIn profile, create standout content, and build your professional brand.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> <body className="min-h-full"> <WorkspaceShell>{children}</WorkspaceShell> </body> </html>
);
}
