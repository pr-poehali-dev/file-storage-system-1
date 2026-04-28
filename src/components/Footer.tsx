export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-medium tracking-tight">АльфаСтройИнвест</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              ЖК «Друг» — современный жилой комплекс в Краснодаре. Продуманные планировки, чистовая отделка и надёжный застройщик с 15-летним опытом.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Квартиры
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+78612000000" className="hover:text-foreground transition-colors">
                  +7 (861) 200-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@alfastroy-invest.ru" className="hover:text-foreground transition-colors">
                  info@alfastroy-invest.ru
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 АльфаСтройИнвест. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
