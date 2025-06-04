const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-4">
        I am a passionate developer with experience in modern web technologies.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>React & TypeScript</li>
          <li>Node.js</li>
          <li>Modern CSS (Tailwind)</li>
          <li>State Management (Redux)</li>
        </ul>
      </div>
    </div>
  );
};

export default About; 