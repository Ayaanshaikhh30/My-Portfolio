  import React, { useEffect, useState } from "react";
  import axios from "axios";

  const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
      const fetchNames = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/users"); // Replace with your API
          const data = await response.json();
          setSuggestions(data.map((user) => user.name));
        } catch (error) {
          console.error("Error fetching names:", error);
        }
      };
      fetchNames();
    }, []);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/submit", formData, {
          headers: { "Content-Type": "application/json" },
        });
        alert(response.data.message || "Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error:", error);
        let errorMsg = "Failed to submit data. Please try again later.";
        if (error.response) {
          errorMsg = error.response.data.message || "Server error!";
        }
        alert(errorMsg);
      }
    };
    

    return (
      <div className="w-full bg-black text-white py-12" id="contact">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight bg-gradient-to-b from-orange-300 to-pink-700 text-transparent bg-clip-text mt-6">
            Contact Me
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto px-6 pt-6">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg flex flex-col space-y-4 border border-gray-700"
          >
            <input
              type="text"
              autoComplete="off"
              placeholder="Your Name"
              name="name"
              list="nameSuggestions"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <datalist id="nameSuggestions">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition cursor-pointer duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Contact;
