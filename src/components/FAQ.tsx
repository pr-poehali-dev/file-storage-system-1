import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Когда планируется сдача ЖК «Друг»?",
    answer:
      "Плановый срок сдачи объекта — IV квартал 2026 года. АльфаСтройИнвест имеет устойчивую репутацию застройщика, который не задерживает сдачу объектов. Актуальный ход строительства можно отслеживать в нашей группе ВКонтакте и в Телеграм-канале.",
  },
  {
    question: "Какие планировки доступны для покупки?",
    answer:
      "В ЖК «Друг» представлены студии от 28 м², однокомнатные квартиры от 42 м², двухкомнатные от 62 м² и трёхкомнатные от 85 м². Все квартиры сдаются с чистовой отделкой. Актуальное наличие уточняйте у менеджера — звоните или оставляйте заявку на сайте.",
  },
  {
    question: "Можно ли купить квартиру в ипотеку?",
    answer:
      "Да, мы работаем с ведущими банками: Сбер, ВТБ, Альфа-Банк, Дом.РФ и другими. Доступна семейная ипотека от 5,9%, военная ипотека, ипотека с господдержкой. Наши специалисты бесплатно помогут подобрать оптимальную программу и подать заявку онлайн.",
  },
  {
    question: "Где именно расположен жилой комплекс?",
    answer:
      "ЖК «Друг» расположен в Краснодаре. Рядом — школы, детские сады, супермаркеты и парковые зоны. Удобный выезд на КАД обеспечивает быстрый доступ к любой точке города. Точный адрес и схему проезда можно узнать у менеджера.",
  },
  {
    question: "Включена ли отделка в стоимость квартиры?",
    answer:
      "Да, все квартиры в ЖК «Друг» передаются с чистовой отделкой «под ключ»: стяжка пола, штукатурка и покраска стен, ламинат, сантехника, розетки и выключатели. Вы можете въезжать сразу после получения ключей.",
  },
  {
    question: "Как записаться на просмотр или получить консультацию?",
    answer:
      "Оставьте заявку на сайте или позвоните нам — менеджер свяжется с вами в течение 15 минут, ответит на все вопросы и запишет на показ шоурума или строящегося объекта в удобное для вас время.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы и ответы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
