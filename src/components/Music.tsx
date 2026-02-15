import { motion } from "framer-motion";

const Music = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-pink-200 to-pink-300 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* PLAYER */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center md:justify-start"
        >
          <iframe
            src="https://open.spotify.com/embed/playlist/4VwlABozeVKk9Y7GA3HCfQ"
            width="320"
            height="420"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-center md:text-left"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-8">
            Nuestra música 🎶
          </h2>

          <p className="text-lg md:text-xl text-pink-50 leading-relaxed">
            Cada canción aquí guarda un pedacito de nosotros…  
            momentos, risas, abrazos, miradas y silencios que solo tú y yo entendemos.
          </p>

          <p className="mt-6 text-pink-100 italic">
            Esta playlist no es solo música…  
            es mi forma de decirte todos los días cuánto te amo ❤️
          </p>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-10 inline-block px-8 py-3 rounded-full bg-white/20 backdrop-blur text-white tracking-wide"
          >
            Para ti, con amor 💕
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Music;
