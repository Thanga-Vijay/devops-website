"use client";
import { useState } from "react";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        message: form.message.value,
    };

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        alert("Something went wrong. Please try again.");
    }
    }


  return (
    <main className="py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Zenteq</h1>

        {success ? (
          <p className="text-green-400">
            ✅ Thank you! We’ll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl grid gap-6">
            <input name="name" required placeholder="Name" className="input" />
            <input name="email" required type="email" placeholder="Email" className="input" />
            <input name="company" placeholder="Company" className="input" />
            <textarea name="message" required rows="4" placeholder="Message" className="input" />
            <button
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
