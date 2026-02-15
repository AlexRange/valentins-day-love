import { motion } from "framer-motion";
import { useState } from "react";

const FinalMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-48 overflow-hidden bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 text-white text-center px-6">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="relative max-w-3xl mx-auto"
      >

        {/* TITULO */}
        <motion.h2
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-6xl font-bold drop-shadow-xl"
        >
          Siempre tú 💖
        </motion.h2>

        {/* FRASE */}
        <p className="mt-10 text-xl md:text-2xl leading-relaxed text-pink-100">
          No importa cuántos caminos existan…  
          yo siempre voy a elegirte a ti.
        </p>

        {/* BOTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(true)}
          className="mt-16 w-24 h-24 rounded-full bg-white/30 backdrop-blur text-4xl shadow-xl"
        >
          💕
        </motion.button>

      </motion.div>

      {/* MODAL FINAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50"
        >

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 max-w-md text-center shadow-2xl text-gray-700"
          >

            <h3 className="text-2xl font-bold text-pink-500">
              Te amo para siempre ❤️
            </h3>

            <p className="mt-4">
              Gracias por ser mi hogar, mi paz y mi felicidad.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-2 rounded-full bg-pink-400 text-white"
            >
              Cerrar
            </button>

          </motion.div>

        </motion.div>
      )}

    </section>
  );
};

export default FinalMessage;
