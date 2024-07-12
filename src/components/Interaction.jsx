import React, { useEffect, useState } from "react";

export default function Interaction() {
  return (
    <nav className="w-full flex items-center justify-center gap-4 py-2 mt-2 text-xl">
      <Like />
      <Comment />
    </nav>
  );
}

function Like() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    if (!isLiked) {
      addLike();
    }
  };
  const addLike = async () => {
    try {
      const response = await fetch('/api/addLike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsLiked(true);
        setLikes((prevLikes) => prevLikes + 1);
      } else {
        console.error('Failed to add like:', await response.json());
      }
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };
  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await fetch(`/api/getLikes`);
        const data = await response.json();
        if (response.ok) {
          setLikes(data.likes);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error obteniendo likes:", error);
      }
    }
    fetchLikes();
  }, []);
  return (
    <article>
      <button onClick={handleLike}>
        {likes} <i className={`ri-thumb-up-${isLiked ? "fill" : "line"}`}></i>
      </button>
    </article>
  );
}

function Comment() {
  return (
    <article>
      <button>
        0 <i className="ri-chat-4-line"></i>
      </button>
    </article>
  );
}
