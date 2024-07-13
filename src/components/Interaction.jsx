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
      const response = await fetch("/api/addLike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLiked(true);
        setLikes((prevLikes) => prevLikes + 1);
      } else {
        console.error("Failed to add like:", await response.json());
      }
    } catch (error) {
      console.error("Error adding like:", error);
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
    <article className="text-2xl">
      <button onClick={handleLike}>
        {likes}{" "}
        <i
          className={`ri-thumb-up-${isLiked ? "fill text-blue-700" : "line"}`}
        ></i>
      </button>
    </article>
  );
}

function Comment() {
  const [open, setOpen] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comentario !== "" && comentario !== null) {
      // Añadir comentario
      // getComentarios();
      // setComentario("");
    }
  };

  const getComentarios = async () => {
    try {
      const response = await fetch(`/api/getComentarios`);
      const data = await response.json();
      if (response.ok) {
        setComentarios(data.comentarios || []);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error obteniendo comentarios:", error);
    }
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <>
      <article className="text-2xl">
        <button onClick={() => setOpen(true)}>
          {comentarios.length} <i className="ri-chat-4-line"></i>
        </button>
      </article>
      {open && (
        <dialog
          open
          className="fixed top-0 w-full h-full bg-slate-900/20 backdrop-blur-sm z-40 grid place-content-center transition-all"
        >
          <main className="w-80 shadow-xl bg-gradient-to-tr from-slate-200 to-blue-700/50 rounded-xl">
            <header className="px-4 py-2 flex items-center justify-between">
              <h3>Comenta!</h3>
              <button onClick={() => setOpen(false)}>
                <i className="text-2xl ri-close-large-line"></i>
              </button>
            </header>
            <ul className="w-full h-72 px-4 py-2 bg-slate-200/50 overflow-y-scroll flex flex-col items-start justify-start gap-2">
              {comentarios.map((c, index) => (
                <li key={index}  className="px-2 py-1 bg-slate-200 rounded-br-xl text-sm">{c.comment}</li>
              ))}
            </ul>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-10 border-t-2"
            >
              <textarea
                className="resize-none focus:outline-none px-4 py-2 rounded-bl-xl bg-transparent text-sm col-span-8"
                name="comment"
                placeholder="Deja tu comentario"
                rows={1}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="text-center bg-blue-700 col-span-2 text-white rounded-br-xl"
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </main>
        </dialog>
      )}
    </>
  );
}
