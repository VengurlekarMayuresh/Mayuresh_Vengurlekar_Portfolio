import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactCard from "./contactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FollowMeCard from "./FollowMe";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7qwxx5r",
        "template_5zjlecn",
        form.current,
        "n-tUY5Nx5u-asV9G1"
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
<section className="bg-[#0D1117] py-20 px-6 text-white">
  <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

  <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center gap-8">

    {/* Left Column */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 bg-white/5 border border-cyan-400/20 backdrop-blur-md p-6 rounded-2xl">
      <ContactCard
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        title="Email"
        desc="mayuresh.vengurlekar19@gmail.com"
      />
      <ContactCard
        icon={<FontAwesomeIcon icon={faLocationDot} />}
        title="Location"
        desc="Mulund, Mumbai"
      />
      <ContactCard
        icon={<FontAwesomeIcon icon={faPhone} />}
        title="Phone"
        desc="8108735755"
      />
      <FollowMeCard />
    </div>

    {/* Right Column: Form */}
<div className="w-full lg:w-1/2 bg-white/5 border border-cyan-400/20 backdrop-blur-md p-6 rounded-2xl">
  <form
    ref={form}
    onSubmit={sendEmail}
    className="flex flex-col gap-4 text-sm text-white"
  >
    {/* Name */}
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="font-medium text-xl text-cyan-300">
        Your Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="John Doe"
        required
        className="bg-transparent border border-cyan-400/30 px-4 py-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="font-medium text-xl text-cyan-300">
        Your Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@email.com"
        required
        className="bg-transparent border border-cyan-400/30 px-4 py-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col gap-1">
      <label htmlFor="message" className="font-medium text-xl text-cyan-300">
        Your Message
      </label>
      <textarea
        name="message"
        id="message"
        rows="4"
        placeholder="Type your message here..."
        required
        className="bg-transparent border border-cyan-400/30 px-4 py-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="mt-2 bg-cyan-500 text-white py-4 px-4 rounded-lg font-semibold hover:bg-cyan-600 hover:shadow-cyan-400/30 hover:shadow-md transition-all duration-300 text-lg"
    >
      Send Message
    </button>

    {/* Status Message */}
    {status && (
      <p className="text-green-400 font-medium text-sm mt-2">{status}</p>
    )}
  </form>
</div>

  </div>
</section>



  );
}
