import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};

const paragraphs = [
  "Mi amor,",

  "Quiero que sepas algo desde el fondo de mi corazón: tú eres lo más hermoso que me ha pasado en la vida.",

  "Nunca nadie me había hecho sentir lo que tú me haces sentir. Nunca había conocido un amor así, tan real, tan profundo, tan lleno de paz y felicidad. Desde que llegaste, todo cambió… mis días son más brillantes, mis pensamientos más bonitos y mi corazón más lleno.",

  "Me haces inmensamente feliz. Verte sonreír es el regalo más grande que puedo recibir. Amo tu sonrisa, amo tu forma de ser, amo cada pequeño detalle tuyo. Para mí, tú lo eres todo.",

  "Gracias por existir. Gracias por llegar a mi vida justo cuando más lo necesitaba. Eres el regalo más hermoso que Dios me dio, y todos los días le agradezco por haberte puesto en mi camino.",

  "Contigo he aprendido lo que es amar de verdad. Contigo quiero seguir enamorándome cada día más, crecer juntos, construir nuestros sueños, compartir nuestras locuras, nuestras risas, nuestros silencios y cada momento, grande o pequeño.",

  "Amo cada minuto a tu lado. Amo despertarme sabiendo que estás conmigo. Amo pensar en nuestro futuro. No puedo esperar para el día en que pueda llamarte mi esposa, para prometerte frente a Dios que te voy a cuidar, respetar y amar por el resto de mi vida.",

  "Eres lo más maravilloso de mi vida. Tú me motivas, me impulsas a ser mejor persona, a luchar por mis metas, a no rendirme. Gracias por creer en mí, por apoyarme y por amarme como lo haces.",

  "Quiero que siempre recuerdes esto: mi corazón es tuyo. Mis sueños son contigo. Mi felicidad está en ti.",

  "Te amo más de lo que las palabras pueden explicar… y prometo seguir amándote cada día más.",

  "Con todo mi amor ❤️",
];

const Letter = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-gradient-to-b from-pink-300 via-pink-200 to-pink-300 px-6">

      {/* glow suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="relative max-w-4xl mx-auto text-center text-white"
      >

        {/* TÍTULO */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-16 drop-shadow-lg"
        >
          Para el amor de mi vida 💌
        </motion.h2>

        {/* CARTA */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">

          {paragraphs.map((text, i) => (
            <motion.p key={i} variants={item}>
              {text}
            </motion.p>
          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Letter;
