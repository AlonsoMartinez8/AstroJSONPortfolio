import React from "react";

export default function Interaction() {
  return (
    <nav className="w-full flex items-center justify-center gap-4 py-2 mt-2 text-xl">
      <Like />
      <Comment />
    </nav>
  );
}

function Like() {
  return (
    <article>
      <button>
        0 <i className="ri-thumb-up-line"></i>
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
