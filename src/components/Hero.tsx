import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ================= TEXT ================= */

const textItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

/* ================= HEARTS FIXED ================= */

const hearts = [
  { x: "10vw", duration: 14 },
  { x: "25vw", duration: 18 },
  { x: "40vw", duration: 16 },
  { x: "55vw", duration: 20 },
  { x: "70vw", duration: 15 },
  { x: "85vw", duration: 19 },
  { x: "15vw", duration: 17 },
  { x: "35vw", duration: 21 },
  { x: "60vw", duration: 16 },
  { x: "78vw", duration: 22 },
];

/* ================= COMPONENT ================= */

const Hero = () => {
  const [open, setOpen] = useState<number | null>(null);

  const messages = [
    "Te amo más de lo que las palabras pueden explicar ❤️",
    "Gracias por hacer mis días más felices ✨",
    "Eres mi lugar seguro 💕",
    "Siempre contigo 🌸",
  ];

  return (
    <section className="relative w-full overflow-hidden">

      <div className="relative h-[115vh] w-full">

        {/* FONDO */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(120deg,#ffd1dc,#ffb6c1,#ffe4f2)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* CORAZONES */}
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl z-10 pointer-events-none"
            initial={{ x: heart.x, y: "120%", opacity: 0.4 }}
            animate={{ y: "-20%" }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            💗
          </motion.div>
        ))}

        {/* BOTONES */}
        <button onClick={() => setOpen(0)} className="absolute top-24 left-24 z-30 w-16 h-16 rounded-full bg-pink-400 text-2xl text-white shadow-xl">💗</button>
        <button onClick={() => setOpen(1)} className="absolute top-32 right-28 z-30 w-16 h-16 rounded-full bg-pink-400 text-2xl text-white shadow-xl">💖</button>
        <button onClick={() => setOpen(2)} className="absolute bottom-40 left-28 z-30 w-16 h-16 rounded-full bg-pink-400 text-2xl text-white shadow-xl">💕</button>
        <button onClick={() => setOpen(3)} className="absolute bottom-28 right-24 z-30 w-16 h-16 rounded-full bg-pink-400 text-2xl text-white shadow-xl">🌸</button>

        {/* TEXTO */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">

          <motion.div
            className="max-w-4xl"
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >

            <motion.h1
              variants={textItem}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl md:text-7xl font-bold tracking-wide text-white drop-shadow-[0_0_40px_rgba(255,105,180,0.8)]"
            >
              PARA MÍ
              <br />
              TÚ LO ERES TODO 💕
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mt-10 text-lg md:text-2xl tracking-widest text-pink-100"
            >
              Desde el 13 de abril de 2024
            </motion.p>

          </motion.div>

        </div>

        {/* CARD */}
        <AnimatePresence>
          {open !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-3xl p-10 max-w-md text-center shadow-2xl"
              >
                <p className="text-gray-700">{messages[open]}</p>

                <button
                  onClick={() => setOpen(null)}
                  className="mt-6 px-6 py-2 rounded-full bg-pink-400 text-white"
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};

export default Hero;
