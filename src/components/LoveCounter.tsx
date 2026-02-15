import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const startDate = new Date("2024-04-13T00:00:00");

/* ================= ANIMATED NUMBER ================= */

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const previous = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    animate(previous.current, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(v) {
        ref.current!.textContent = Math.floor(v).toString();
      },
    });

    previous.current = value;
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

/* ================= COMPONENT ================= */

const LoveCounter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-pink-200 to-pink-300 text-center">

      {/* HALO */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* TITULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
      >
        Nuestro tiempo juntos 💖
      </motion.h2>

      {/* CONTADORES */}
      <div className="relative z-10 mt-20 grid grid-cols-3 gap-10 max-w-xl mx-auto">

        {[
          { label: "Días", value: time.days },
          { label: "Horas", value: time.hours },
          { label: "Minutos", value: time.minutes },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative p-6 rounded-2xl bg-white/20 backdrop-blur-xl shadow-xl border border-white/30"
          >

            {/* NUMERO */}
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter value={item.value} />
            </div>

            {/* LABEL */}
            <p className="mt-2 text-sm tracking-widest uppercase text-pink-100">
              {item.label}
            </p>

            {/* LINEA FLOW */}
            <motion.div
              animate={{ backgroundPosition: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="mx-auto mt-4 h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg,transparent,white,transparent)",
                backgroundSize: "200% 100%",
              }}
            />
          </motion.div>
        ))}

      </div>

      {/* FADE BOTTOM */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-pink-300 to-transparent" />
    </section>
  );
};

export default LoveCounter;
