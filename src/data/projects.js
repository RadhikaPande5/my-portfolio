const projects = [
  {
    id: 1,
    title: "ExamGPT",
    subtitle: "RAG-Powered Exam Preparation Assistant",
    description:
      "An AI study assistant that answers questions from a student's own notes and previous-year question papers using Retrieval-Augmented Generation.",
    tech: [
      "Python",
      "Streamlit",
      "ChromaDB",
      "Google Gemini API",
      "Sentence-Transformers",
      "React",
    ],
    featured: true,
    longDescription:
      "ExamGPT is a team project focused on grounded exam preparation. The application uses a Retrieval-Augmented Generation pipeline to answer questions from uploaded study material and previous-year question papers instead of relying only on the model's general knowledge.",
    features: [
      "RAG pipeline for answers grounded in uploaded documents",
      "Page-level source citations with file name and page number",
      "Detection of topics repeated across multiple years of PYQs",
      "Helps students identify high-frequency, high-yield revision topics",
      "Main application deployed on Streamlit Community Cloud",
      "Dedicated React landing page deployed on Vercel",
    ],
    links: {
      live: "https://examgpt-99njfk32r-rachnasurjaye25-1237s-projects.vercel.app/",
      github: "https://github.com/RadhikaPande5/ExamGPT"
    },
  },
  {
    id: 2,
    title: "Password Manager",
    subtitle: "Local Credential Management",
    description:
      "A Python desktop application for local credential storage with encrypted JSON persistence, password generation and clipboard support.",
    tech: ["Python", "Tkinter", "JSON", "Encryption"],
    featured: false,
    longDescription:
      "A desktop password manager designed for local credential storage. It combines a Tkinter interface with encrypted JSON persistence, random password generation and clipboard-copy functionality.",
    features: [
      "Local credential storage",
      "Encrypted JSON persistence",
      "Random password generation",
      "Clipboard-copy functionality",
    ],
  },
  {
    id: 3,
    title: "Flashcard Language Learning App",
    subtitle: "Interactive Learning Tool",
    description:
      "A Python flashcard application that generates cards from CSV datasets and tracks learning progress with spaced-repetition logic.",
    tech: ["Python", "Pandas", "Tkinter", "CSV"],
    featured: false,
    longDescription:
      "An interactive language-learning application built with Python. Flashcards are generated from CSV datasets, while spaced-repetition logic and persistent progress tracking help structure revision.",
    features: [
      "Automated flashcard generation from CSV data",
      "Spaced-repetition logic",
      "Persistent progress tracking",
      "Interactive Tkinter interface",
    ],
  },
  {
    id: 4,
    title: "Blog Website",
    subtitle: "Full-Stack Web Application",
    description:
      "A Flask and Bootstrap blogging platform for creating and displaying posts.",
    tech: ["Flask", "Bootstrap", "HTML", "CSS"],
    featured: false,
    longDescription:
      "A full-stack blogging platform built with Flask and Bootstrap, focused on post creation and post display functionality.",
    features: [
      "Blog post creation",
      "Post display",
      "Flask backend",
      "Responsive Bootstrap interface",
    ],
  },
  {
    id: 5,
    title: "Smart Traffic Management System",
    subtitle: "Smart India Hackathon 2025",
    description:
      "A team project developed for SIH 2025 to address real-world urban mobility and traffic-management challenges.",
    tech: ["AI/ML", "Computer Vision", "IoT", "Team Project"],
    featured: false,
    longDescription:
      "A collaborative Smart India Hackathon 2025 project focused on addressing real-world urban mobility challenges through a Smart Traffic Management System.",
    features: [
      "Collaborative problem-solving in a hackathon environment",
      "Focused on real-world urban traffic challenges",
      "Designed as a Smart Traffic Management System",
    ],
  },
  {
    id: 6,
    title: "Python Project Collection",
    subtitle: "Practice through building",
    description:
      "A collection of Python projects including Snake, Pong, Quiz Application and Quote Generator.",
    tech: ["Python", "OOP", "Pandas", "APIs"],
    featured: false,
    longDescription:
      "A collection of smaller Python applications built while developing programming, object-oriented design, API integration, exception handling and data-manipulation skills.",
    features: [
      "Snake Game",
      "Pong Game",
      "Quiz Application",
      "Quote Generator",
      "OOP and exception handling practice",
      "API consumption and Pandas-based data manipulation",
    ],
  },
]

export default projects
