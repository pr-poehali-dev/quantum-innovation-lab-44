import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const platforms = [
  { name: "Windows", icon: "Monitor" },
  { name: "macOS", icon: "Apple" },
  { name: "Linux", icon: "Terminal" },
  { name: "Android", icon: "Smartphone" },
  { name: "iOS", icon: "Tablet" },
]

const features = [
  { icon: "Zap", label: "Мгновенная доставка" },
  { icon: "RefreshCw", label: "Синхронизация" },
  { icon: "Users", label: "Групповые чаты" },
  { icon: "Paperclip", label: "Файлы и медиа" },
]

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      {id === 'hero' && (
        <motion.img
          src="https://cdn.poehali.dev/projects/06e70dd9-96c7-464f-8df5-3ab3f196752b/files/22631227-706a-4bb4-97e0-688f9f9b97dc.jpg"
          alt="Zip Chat"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.25 } : {}}
          transition={{ duration: 1 }}
        />
      )}

      {id === 'hero' && (
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#FF4D00] flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Zip Chat</span>
        </motion.div>
      )}

      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {id === 'platforms' && (
        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 text-sm font-medium hover:border-[#FF4D00]/60 hover:text-white transition-all cursor-pointer"
            >
              <Icon name={p.icon} size={16} className="text-[#FF4D00]" />
              {p.name}
            </motion.div>
          ))}
        </motion.div>
      )}

      {id === 'features' && (
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="flex flex-col items-start gap-2 p-4 rounded-2xl border border-white/10 bg-white/5"
            >
              <Icon name={f.icon} size={22} className="text-[#FF4D00]" />
              <span className="text-white/70 text-sm">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {id === 'security' && (
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#FF4D00]/40 bg-[#FF4D00]/10">
            <Icon name="ShieldCheck" size={18} className="text-[#FF4D00]" />
            <span className="text-white/80 text-sm font-medium">End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5">
            <Icon name="EyeOff" size={18} className="text-white/50" />
            <span className="text-white/60 text-sm font-medium">Без отслеживания</span>
          </div>
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-4 items-center"
        >
          <Button
            size="lg"
            className="bg-[#FF4D00] text-white hover:bg-[#e04400] border-0 transition-colors px-8 py-6 text-base font-semibold rounded-full"
          >
            <Icon name="Download" size={18} className="mr-2" />
            {buttonText}
          </Button>
          {id === 'hero' && (
            <span className="text-white/30 text-sm">Бесплатно · Без регистрации</span>
          )}
        </motion.div>
      )}
    </section>
  )
}