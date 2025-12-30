"use client";

import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 glass"
    >
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Zenteq logo"
            width={36}
            height={36}
            priority
          />
          <div className="leading-tight">
            <span className="text-lg font-bold">Zenteq</span>
            <span className="block text-xs text-[var(--muted)]">
              DevOps & Cloud Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <a href="/services/aws-devops" className="hover:text-[var(--text)]">
            AWS DevOps
          </a>
          <a href="/services/ci-cd" className="hover:text-[var(--text)]">
            CI/CD
          </a>
          <a href="/services/cost-optimization" className="hover:text-[var(--text)]">
            Cost Optimization
          </a>
          <a href="/case-studies" className="hover:text-[var(--text)]">
            Case Studies
          </a>

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-[var(--border)] hover:bg-black/10 transition"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <a
            href="/contact"
            className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold text-sm"
          >
            Free Audit
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-[var(--border)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Menu Toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden glass px-6 py-6 space-y-4"
        >
          <a href="/services/aws-devops" onClick={() => setMenuOpen(false)}>
            AWS DevOps
          </a>
          <a href="/services/ci-cd" onClick={() => setMenuOpen(false)}>
            CI/CD
          </a>
          <a href="/services/cost-optimization" onClick={() => setMenuOpen(false)}>
            Cost Optimization
          </a>
          <a href="/case-studies" onClick={() => setMenuOpen(false)}>
            Case Studies
          </a>

          <a
            href="/contact"
            className="block w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold text-center"
          >
            Free DevOps Audit
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
