
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AliceInvitation() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7f1e1] to-white overflow-hidden">
      {!opened ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md"
        >
          <h1 className="font-serif text-3xl mb-4">Follow the White Rabbit 🐇</h1>
          <p className="mb-6 italic text-gray-600">Click to fall down the rabbit hole</p>
          <button
            onClick={() => setOpened(true)}
            className="px-6 py-3 rounded-full bg-teal-700 text-white hover:scale-105 transition"
          >
            Enter Wonderland
          </button>
        </motion.div>
      ) : (
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg text-center relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute -top-6 -right-6 text-4xl"
          >
            ⏰
          </motion.div>

          <h2 className="font-serif text-4xl mb-2">Alice in Wonderland</h2>
          <p className="italic text-teal-700 mb-6">A curious and curiouser Celebration</p>

          <div className="space-y-3 text-lg">
            <p>🎂 <strong>Danica</strong> turns <strong>22</strong></p>
            <p>📅 Saturday, 22 March</p>
            <p>🕕 18:00 till late</p>
            <p>📍 Down the Rabbit Hole</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-rose-600 text-white rounded-full shadow-lg"
            onClick={() => alert("We're all mad here 🃏")}
          >
            RSVP
          </motion.button>

          <p className="mt-6 italic text-gray-500">“We're all mad here.”</p>
        </motion.section>
      )}
    </main>
  );
}
