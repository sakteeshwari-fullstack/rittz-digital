"use client";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus(result.message || "Message sent!");
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4 py-8 h-screen">
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row bg-[#1c1c1cd9] rounded-3xl overflow-hidden shadow-2xl overflow-y-auto">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/assets/contactus.jpg')" }}
        ></div>

        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-20"
        >
          <img src="/assets/x-square.svg" alt="Close" className="w-6 h-6" />
        </button>

        <div className="flex-1 p-6 md:p-8 text-white relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Talk To Us</h1>
          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-lg mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-gray-200 border-b border-gray-500 bg-transparent focus:outline-none py-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-lg mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-200 border-b border-gray-500 bg-transparent focus:outline-none py-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>


            {/* Phone Field Styled Like Others */}

            <div>
              <label className="block text-lg mb-1">Phone Number</label>
              <div className="relative w-full border-b border-gray-500 focus-within:border-white py-2">
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch
                  inputStyle={{
                    background: "transparent",
                    color: "white",
                    border: "none",
                    width: "100%",
                    fontSize: "16px",
                    outline: "none",
                    paddingLeft: "48px", // give space for flag
                  }}
                  buttonStyle={{
                    background: "transparent",
                    border: "none",
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "0",
                    width: "40px", // wider button
                    height: "30px", // taller button
                  }}
                  containerStyle={{
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    padding: 0,
                  }}
                  dropdownStyle={{
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
                    marginTop: "8px",
                    padding: "6px 0",
                    width: "1000%",
                    maxHeight: "280px",
                    overflowY: "auto",
                    fontSize: "15px",
                    zIndex: 9999,
                    border: "1px solid #333",
                  }}

                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>


            {/* Message Field */}
            <div>
              <label className="block text-lg mb-1">Let’s Talk! What’s on your mind?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-gray-200 border-b border-gray-500 bg-transparent focus:outline-none py-2"
                rows={3}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info & Submit Button */}
        <div className="flex-1 p-6 md:p-8 text-gray-200 flex flex-col justify-between gap-5 bg-[#1a1a1a7d] border-l border-gray-700 relative z-10">
          <div>
            <div className="flex items-start gap-4 mb-4">
              <img src="/assets/Group 1000001213.svg" alt="Email" />
              <div>
                <p className="text-pink-500 font-semibold">Email</p>
                <p className="text-sm md:text-base">info@rittzdigital.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img src="/assets/Group 1000001212.svg" alt="Office" />
              <div>
                <p className="text-pink-500 font-semibold">Registered office</p>
                <p className="text-sm md:text-base leading-relaxed">
                  11/32 A3, Cenotaph Road, Teynampet,<br />
                  Chennai - 600018<br />

                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/assets/Group 1000001209.svg" alt="Phone" />
              <div>
                <p className="text-pink-500 font-semibold">Contact Number</p>
                <p className="font-bold text-sm md:text-base">+91 - 9841057742</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <span className="font-medium text-sm md:text-base mr-3">Send your Message</span>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center transition hover:bg-pink-500 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-pink-400 hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-white text-black text-lg px-8 py-4 rounded-xl shadow-lg font-semibold">
            {status}
          </div>
        </div>
      )}
    </div>
  );
}
