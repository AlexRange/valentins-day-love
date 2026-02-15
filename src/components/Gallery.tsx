import { motion } from "framer-motion";

const photos = [
  { src: "/images/1.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/2.jpg", className: "md:translate-y-20" },
  { src: "/images/3.jpg", className: "md:-translate-y-16" },

  { src: "/images/4.jpg", className: "md:row-span-2" },
  { src: "/images/5.jpg", className: "" },
  { src: "/images/6.jpg", className: "md:translate-y-12" },

  { src: "/images/7.jpg", className: "md:col-span-2 md:row-span-" },
  { src: "/images/8.jpg", className: "md:-translate-y-20" },
  { src: "/images/9.jpg", className: "md:-translate-y-16" },

  { src: "/images/10.jpg", className: "md:row-span-2" },
  { src: "/images/11.jpg", className: "md:translate-y-16" },
  { src: "/images/12.jpg", className: "" },

  { src: "/images/13.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/14.jpg", className: "" },
  { src: "/images/15.jpg", className: "md:-translate-y-12" },

  { src: "/images/16.jpg", className: "md:row-span-2" },
  { src: "/images/17.jpg", className: "" },
  { src: "/images/18.jpg", className: "md:translate-y-20" },

  { src: "/images/19.jpg", className: "md:col-span-2" },
  { src: "/images/20.jpg", className: "" },
  { src: "/images/21.jpg", className: "md:-translate-y-16" },

  { src: "/images/22.jpg", className: "md:row-span-2" },
  { src: "/images/23.jpg", className: "" },
  { src: "/images/24.jpg", className: "md:translate-y-12" },

  { src: "/images/25.jpg", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/26.jpg", className: "" },
  { src: "/images/27.jpg", className: "md:-translate-y-20" },

  { src: "/images/28.jpg", className: "md:row-span-2" },
  { src: "/images/29.jpg", className: "" },
  { src: "/images/30.jpg", className: "md:translate-y-16" },

  { src: "/images/31.jpg", className: "md:col-span-2" },
  { src: "/images/32.jpg", className: "" },
  { src: "/images/33.jpg", className: "md:-translate-y-12" },

  { src: "/images/34.jpg", className: "md:row-span-2" },
  { src: "/images/35.jpg", className: "" },
];

const Gallery = () => {
  return (
    <section className="relative py-32 bg-pink-100 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-4xl font-bold text-pink-500 mb-20"
      >
        Nuestros momentos 💞
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 auto-rows-[220px] gap-10 px-6">

        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: .7, delay: i * .05 }}
            whileHover={{ scale: 1.04 }}
            className={`relative overflow-hidden rounded-3xl shadow-xl ${photo.className}`}
          >
            <img
              src={photo.src}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-pink-400/10" />

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;
