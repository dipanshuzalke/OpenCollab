import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const socket = io("http://localhost:3000");

function CommunityPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;
      console.log(userId);

      axios
        .get("http://localhost:3000/api/chatmessages")
        .then((res) => setMessages(res.data))
        .catch((err) => console.error(err));

      socket.on("chat message", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });

      axios
        .get(`http://localhost:3000/api/get-username/${userId}`)
        .then((response) => {
          setUsername(response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching username:", error);
        });
    }

    return () => socket.off("chat message");
  }, [token]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    socket.emit("chat message", {
      user: username,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-xl h-[90vh] flex flex-col">
        <h1 className="text-3xl font-bold text-center text-white py-4 border-b border-gray-700">
          Community Chat
        </h1>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className="p-2 bg-gray-700 rounded">
              <p>
                <span className="font-semibold text-blue-400">{m.user}:</span>{" "}
                <span className="text-gray-200">{m.message}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex border-t border-gray-700">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
