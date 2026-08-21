import { useState } from "react";
import { brand, serviceOptions } from "../data/content";
import Reveal from "./Reveal";

const initialForm = { name: "", phone: "", service: "", details: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit handler — wire up to a real endpoint / CRM
    // once the client's lead-capture flow is confirmed.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-stone-100 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-600">
            Get Started
          </span>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Request Your Free Quote
          </h2>
          <p className="mt-5 max-w-md font-sans leading-relaxed text-stone-700">
            Tell us a little about your property and vision. A member of our design team will
            follow up within one business day.
          </p>

          <div className="mt-10 space-y-4 font-sans text-sm text-stone-700">
            <p>
              <span className="text-stone-500">Phone</span>
              <br />
              {brand.phone}
            </p>
            <p>
              <span className="text-stone-500">Email</span>
              <br />
              {brand.email}
            </p>
            <p>
              <span className="text-stone-500">Hours</span>
              <br />
              {brand.hours}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="name" className="font-sans text-xs uppercase tracking-wider text-stone-600">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-900 outline-none transition-colors focus:border-evergreen-700"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="phone" className="font-sans text-xs uppercase tracking-wider text-stone-600">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-900 outline-none transition-colors focus:border-evergreen-700"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="service" className="font-sans text-xs uppercase tracking-wider text-stone-600">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-900 outline-none transition-colors focus:border-evergreen-700"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="details" className="font-sans text-xs uppercase tracking-wider text-stone-600">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Tell us about your property and what you're hoping to achieve..."
                  className="resize-none rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 font-sans text-sm text-stone-900 outline-none transition-colors focus:border-evergreen-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-evergreen-800 px-8 py-4 font-sans text-sm uppercase tracking-wider text-stone-50 transition-colors duration-300 hover:bg-terracotta-600"
            >
              Submit Request
            </button>

            {submitted && (
              <p className="mt-4 text-center font-sans text-sm text-evergreen-700">
                Thank you — this is a demo form. Your message would be sent to our team here.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
