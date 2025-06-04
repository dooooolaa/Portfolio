import React, { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen font-sans transition duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <header className="bg-teal-500 text-white p-6 text-center relative dark:bg-teal-700">
          <h1 className="text-4xl font-bold">Mohamed Adel Abdallah</h1>
          <p className="text-lg mt-2">20-year-old Cybersecurity Enthusiast | Ranked Top 20 Swimmers in Cairo - 2021</p>
          <p className="italic text-sm mt-1">Building, Learning, and Securing the Future</p>
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 bg-teal-700 text-white py-2 px-4 rounded-full dark:bg-teal-400 dark:text-gray-900"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <main className="max-w-5xl mx-auto py-12 px-6">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 dark:border-teal-300">About Me</h2>
            <p className="mt-4 text-lg">
              Passionate about cybersecurity and lifelong learning. I focus on developing technical and communication skills while contributing to real-world projects.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 dark:border-teal-300">Skills</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Cybersecurity Fundamentals", "Networking Basics", "Linux", "HTML", "CSS", "Java", "Problem Solving", "English & Arabic Communication"].map(skill => (
                <span key={skill} className="bg-teal-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition dark:bg-teal-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 dark:border-teal-300">Languages</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Arabic (Native)", "English (Professional)", "Spanish (A2)"].map(lang => (
                <span key={lang} className="bg-teal-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition dark:bg-teal-700">
                  {lang}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 dark:border-teal-300">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                { title: "Ashgal Shaqa", link: "https://ashgal-shaqa.codemz.com/", img: "images/ashgal.jpg" },
                { title: "Michael Phelps", link: "https://michael-phelps-by-adel.netlify.app/", img: "images/mich.jpg" },
                { title: "AL-Islam-Haya", link: "https://al-islam-haya.netlify.app/", img: "images/image.png" },
                { title: "MA Academy", link: "https://ma-academy.netlify.app/", img: "images/Black White Elegant Handwriting Initial MA Logo.png" },
              ].map(project => (
                <div key={project.title} className="text-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} alt={project.title} className="rounded-xl shadow-lg w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-105" />
                    <p className="mt-2 font-semibold">{project.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 dark:border-teal-300">Social Links</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { link: "https://github.com/dooooolaa", icon: "images/github-original-wordmark-icon-256x253-2l79vijg.png" },
                { link: "mailto:mohamedadelabdullah7@gmail.com", icon: "images/free-mail-icon-142-thumb.png" },
                { link: "https://api.whatsapp.com/send?phone=201144509350", icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
                { link: "https://www.facebook.com/share/1F9DdkXo2u/", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
                { link: "https://www.instagram.com/mo_adel.911?igsh=a3lweHRzbG44dDlq", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
                { link: "https://www.tiktok.com/@mo_adel.88?_t=ZS-8wWSQqXtZTe&_r=1", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
                { link: "https://t.me/+201144509350", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" },
              ].map(social => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-teal-300 dark:bg-teal-700 hover:scale-110 transform transition"
                >
                  <img src={social.icon} alt="Social" className="w-8 h-8" />
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center py-6 bg-teal-500 text-white dark:bg-teal-700">
          <p>&copy; 2025 Mohamed Adel. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
