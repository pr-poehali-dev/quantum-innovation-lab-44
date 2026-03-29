import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium tracking-widest uppercase">Доступно бесплатно</Badge>,
    title: "Чат без границ. Zip Chat.",
    content: "Молниеносный мессенджер для всех платформ. Один аккаунт — везде.",
    showButton: true,
    buttonText: 'Скачать бесплатно'
  },
  {
    id: 'platforms',
    title: 'Работает везде.',
    content: 'Windows, macOS, Linux, Android и iOS — Zip Chat всегда рядом, на любом устройстве.',
  },
  {
    id: 'features',
    title: 'Скорость — это всё.',
    content: 'Мгновенная доставка сообщений, сквозное шифрование и синхронизация между устройствами в реальном времени.',
  },
  {
    id: 'security',
    title: 'Ваши данные защищены.',
    content: 'End-to-end шифрование по умолчанию. Никаких серверов третьих сторон, никакой слежки. Только вы и ваши собеседники.',
  },
  {
    id: 'download',
    title: 'Начните прямо сейчас.',
    content: 'Zip Chat — бесплатно, без рекламы, без ограничений. Загрузите для своей платформы.',
    showButton: true,
    buttonText: 'Скачать Zip Chat'
  },
]
