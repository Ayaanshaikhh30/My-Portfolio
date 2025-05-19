import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://portfolio-backend-5-qav4.onrender.com/api/users",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      alert(response.data.message || "Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      let errorMsg = "Something went wrong!";
      if (error.response) {
        errorMsg = error.response.data.message || "Server error!";
      }
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-[900px] mx-auto rounded-xl shadow-2xl border border-gray-700 backdrop-blur-md bg-white/5 p-10">
        <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
          Let's Connect
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/30 border border-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black/30 border border-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-black/30 border border-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 font-bold py-4 rounded-xl text-white transition duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
