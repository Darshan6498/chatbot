# Conversational Chatbot Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A full-stack chatbot application built with React.js and Node.js, submitted as part of the STAN Internship Challenge. This project lays the foundation for a sophisticated AI assistant capable of natural, human-like conversations.

The primary goal is to create a scalable and interactive chatbot. While the core conversational logic is in place, features like long-term memory are part of the future development roadmap.

## ✨ Core Features (Current)

-   **Human-like Interaction:** Generates natural, engaging, and diverse responses to user queries, avoiding robotic or repetitive replies.
-   **Consistent Persona:** Maintains a consistent identity and character across the conversation.
-   **Scalable Backend:** Built with a modular, API-first design in Node.js and Express.js, allowing for easy integration into any User-Generated Content (UGC) platform or third-party frontend.
-   **Modern UI:** A clean and responsive user interface built with React.js and styled with Tailwind CSS.

## 🚀 Roadmap: Future Enhancements

The next major development phase will focus on implementing persistent memory to create a truly personalized experience.

-   **🧠 Conversational Memory:** Store user details, key preferences, and chat history in MongoDB to enable context recall across multiple sessions.
-   **🎨 Personalization:** Leverage stored memory to bring up topics of interest (e.g., sports, anime) and tailor replies to the user's personality.
-   **🎭 Context-Aware Tone Adaptation:** Adapt the chatbot's tone (formal, casual, empathetic) based on the ongoing emotional context of the conversation.

## 🛠️ Tech Stack

-   **Frontend:** React.js, Tailwind CSS
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB (Atlas or local instance)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18.x or later)
-   npm or yarn
-   MongoDB instance (local or a free Atlas cluster)

### ⚙️ Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=8000
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```
    The backend server will be running on `http://localhost:8000`.

### 🖥️ Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Connect to the backend:**
    Ensure the frontend can communicate with your backend. In your React code (e.g., in an Axios instance or fetch calls), make sure requests are directed to `http://localhost:8000`.

4.  **Start the client:**
    ```bash
    npm run dev
    ```
    The React application will open in your browser, typically at `http://localhost:5173`.

## ✅ Test Cases

### Current Functionality
-   **✅ Natural Responses:** The chatbot avoids repetitive "hi/hello" replies and provides varied answers.
-   **✅ Identity Consistency:** Maintains a consistent persona across probing questions about its identity.
-   **✅ Hallucination Resistance:** Avoids fabricating false information when asked for facts.

### Planned for Future Releases (Pending Memory Implementation)
-   **⏳ Long-Term Memory Recall:** Remembers the user’s name and preferences across different sessions.
-   **⏳ Context-Aware Tone Adaptation:** Adapts its responses if the user expresses sadness, happiness, or is being casual.
-   **⏳ Personalization Over Time:** Brings up previously discussed topics to create a more personal connection.
-   **⏳ Memory Stability:** Correctly remembers user preferences even if the user temporarily contradicts them.

---
