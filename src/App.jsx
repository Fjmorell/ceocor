import './App.css'
import clinicLogo from './assets/LOGO 2020.jpg'
import smileHero from './assets/istockphoto-509464989-612x612.jpg'
import smileDesign from './assets/istockphoto-1209695811-612x612.jpg'
import smileImplant from './assets/istockphoto-2187774270-612x612.jpg'

const services = [
  {
    title: 'Odontología Integral',
    description:
      'Controles preventivos, limpiezas profundas y planes personalizados para toda la familia.'
  },
  {
    title: 'Implantes de Alta Precisión',
    description:
      'Planificación digital 3D para recuperar piezas dentales con resultados duraderos y estéticos.'
  },
  {
    title: 'Ortodoncia Estética',
    description:
      'Alineadores transparentes y brackets cerámicos que corrigen tu sonrisa sin sacrificar comodidad.'
  },
  {
    title: 'Urgencias 24/7',
    description:
      'Guardias odontológicas coordinadas para resolver traumatismos y dolores agudos en el día.'
  }
]

const specialties = [
  {
    title: 'Diagnóstico Digital',
    copy: 'Escáner intraoral, radiología 3D y fotografía clínica para planificar con precisión.'
  },
  {
    title: 'Odontopediatría',
    copy: 'Protocolos de adaptación y sedación consciente para que cada visita sea positiva.'
  },
  {
    title: 'Estética Facial',
    copy: 'Armonización con ácido hialurónico y diseño digital de sonrisa en una misma cita.'
  }
]

const testimonials = [
  {
    quote:
      'El equipo me explicó cada paso del tratamiento y en dos visitas recuperé la confianza para sonreír.',
    author: 'María González',
    role: 'Implantes guiados'
  },
  {
    quote:
      'Los alineadores invisibles fueron súper cómodos y el seguimiento virtual me ahorró muchas consultas.',
    author: 'Agustín Rivas',
    role: 'Ortodoncia estética'
  },
  {
    quote:
      'Llevé a mi hijo por una urgencia nocturna y nos recibieron en menos de una hora, con total calidez.',
    author: 'Patricia Romero',
    role: 'Guardia 24/7'
  }
]

const gallery = [
  {
    title: 'Recepción y bioseguridad',
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Boxes equipados',
    src: 'https://images.unsplash.com/photo-1504439904031-93ded9c8ddee?auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Tecnología digital',
    src: 'https://images.unsplash.com/photo-1629904853693-89e623a127bd?auto=format&fit=crop&w=800&q=60'
  }
]

const smileShowcase = [
  {
    title: 'Diseño digital de sonrisa',
    description: 'Simulaciones 3D para definir forma y tono dental antes de intervenir.',
    src: smileDesign
  },
  {
    title: 'Rehabilitaciones completas',
    description: 'Implantes inmediatos y coronas cerámicas con resultados naturales.',
    src: smileImplant
  },
  {
    title: 'Ortodoncia estética',
    description: 'Alineadores transparentes que respetan la armonía facial.',
    src: smileHero
  }
]

function App() {
  return (
    <div className="site">
      <header className="hero" id="inicio">
        <nav className="nav">
          <div className="nav-main">
            <div className="brand">
              <img
                src={clinicLogo}
                alt="Logo Centro Odontológico Corrientes"
                className="brand-logo"
                loading="lazy"
              />
              <div>
                <p className="brand-title">Centro Odontológico Corrientes</p>
                <p className="brand-subtitle">Clínica integral · especialistas en estética dental</p>
              </div>
            </div>
            <div className="nav-contact">
              <div className="info-item">
                <span className="icon-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M12 2C7.58 2 4 5.42 4 9.86c0 4.8 5.1 9.93 7.3 11.77.41.34 1 .34 1.41 0C14.9 19.79 20 14.66 20 9.86 20 5.42 16.42 2 12 2Zm0 11.12a3.07 3.07 0 1 1 3-3.07 3 3 0 0 1-3 3.07Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <span className="info-label">Visitanos en</span>
                  <strong>Mariano Moreno 2393 · Corrientes</strong>
                </div>
              </div>
              <span className="divider" aria-hidden="true" />
              <div className="info-item">
                <span className="icon-badge whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.391-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 5.419h-.004a8.7 8.7 0 0 1-4.355-1.174l-.312-.185-3.244.853.865-3.164-.203-.324a8.704 8.704 0 0 1-1.337-4.652c.001-4.816 3.918-8.734 8.736-8.734 2.335 0 4.52.91 6.167 2.558a8.671 8.671 0 0 1 2.566 6.168c-.003 4.815-3.92 8.733-8.739 8.734ZM20.52 3.484A11.815 11.815 0 0 0 11.839 0C5.317 0 .003 5.315 0 11.837A11.779 11.779 0 0 0 1.711 17.4L0 24l6.8-1.783a11.843 11.843 0 0 0 5.034 1.171h.005c6.522 0 11.838-5.315 11.84-11.837a11.768 11.768 0 0 0-3.459-8.067Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <span className="info-label">Turnos / Urgencias</span>
                  <strong>+54 379 475 9547</strong>
                </div>
              </div>
              <span className="divider" aria-hidden="true" />
              <div className="social-links" aria-label="Redes sociales">
                <a
                  className="social instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.773 1.153 4.92 4.92 0 0 1 1.153 1.773c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.902 4.902 0 0 1-1.153 1.773 4.918 4.918 0 0 1-1.773 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.94 4.94 0 0 1-2.926-2.926c-.163-.457-.349-1.257-.403-2.427C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.94 4.94 0 0 1 2.926-2.926c.457-.163 1.257-.349 2.427-.403 1.266-.058 1.646-.07 4.85-.07Zm0 1.62c-3.155 0-3.522.012-4.767.069-.99.045-1.523.21-1.879.349-.473.183-.81.4-1.165.755a3.319 3.319 0 0 0-.755 1.165c-.139.356-.304.889-.349 1.879-.057 1.245-.069 1.612-.069 4.767s.012 3.522.069 4.767c.045.99.21 1.523.349 1.879.183.473.4.81.755 1.165.355.355.692.572 1.165.755.356.139.889.304 1.879.349 1.245.057 1.612.069 4.767.069s3.522-.012 4.767-.069c.99-.045 1.523-.21 1.879-.349.473-.183.81-.4 1.165-.755.355-.355.572-.692.755-1.165.139-.356.304-.889.349-1.879.057-1.245.069-1.612.069-4.767s-.012-3.522-.069-4.767c-.045-.99-.21-1.523-.349-1.879a3.27 3.27 0 0 0-.755-1.165 3.266 3.266 0 0 0-1.165-.755c-.356-.139-.889-.304-1.879-.349-1.245-.057-1.612-.069-4.767-.069Zm0 3.514a5.723 5.723 0 1 1 0 11.446 5.723 5.723 0 0 1 0-11.446Zm0 1.62a4.103 4.103 0 1 0 0 8.206 4.103 4.103 0 0 0 0-8.206Zm5.834-2.1a1.336 1.336 0 1 1-2.672 0 1.336 1.336 0 0 1 2.672 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="social facebook"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="nav-links-row">
            <div className="nav-links">
              <a href="#servicios">Servicios</a>
              <a href="#especialidades">Especialidades</a>
              <a href="#equipo">Equipo</a>
              <a href="#contacto">Contacto</a>
            </div>
            <a className="cta ghost" href="tel:+543794759547">
              Urgencias 379 475 9547
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="pill">Salud y estética dental en un solo lugar</p>
            <h1>
              Sonrisas diseñadas con precisión clínica y calidez correntina.
            </h1>
            <p className="lead">
              Agenda online, tecnología digital 3D y un equipo interdisciplinario que acompaña cada
              etapa del tratamiento.
            </p>
            <div className="hero-actions">
              <a className="cta primary" href="#contacto">
                Reservar turno
              </a>
              <a className="cta secondary" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero-badges">
              <p>• Financiamiento hasta 12 cuotas</p>
              <p>• Convenios con obras sociales</p>
            </div>
          </div>
          <div className="hero-aside">
            <div className="hero-card">
              <p className="card-title">Guardia odontológica</p>
              <p className="card-description">
                Coordinamos turnos prioritarios las 24 horas. Enviá tu consulta por WhatsApp y
                recibí una respuesta en menos de 15 minutos.
              </p>
              <div className="card-contact">
                <p className="card-phone">+54 379 475 9547</p>
                <span>WhatsApp y llamadas</span>
              </div>
            </div>
            <figure className="smile-photo">
              <img src={smileHero} alt="Paciente mostrando una sonrisa saludable" loading="lazy" />
              <figcaption>Sonrisas reales tratadas con nuestros especialistas.</figcaption>
            </figure>
          </div>
        </div>
      </header>

      <section className="stats" aria-label="Indicadores clave">
        <div>
          <p className="stat-number">30+</p>
          <p className="stat-label">Años de experiencia</p>
        </div>
        <div>
          <p className="stat-number">4.9/5</p>
          <p className="stat-label">Satisfacción en Google</p>
        </div>
        <div>
          <p className="stat-number">12</p>
          <p className="stat-label">Boxes equipados</p>
        </div>
        <div>
          <p className="stat-number">7000+</p>
          <p className="stat-label">Pacientes activos</p>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="section-head">
          <p className="pill">Servicios destacados</p>
          <h2>Planificamos tratamientos integrales con tecnología digital.</h2>
          <p>
            Cada área está coordinada por especialistas certificados en implantes, ortodoncia,
            rehabilitación oral y estética facial. Trabajamos con diagnóstico digital para lograr
            resultados predecibles.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>Conocer más</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight" id="especialidades">
        <div className="highlight-text">
          <p className="pill">Especialidades</p>
          <h2>Protocolos seguros, equipamiento digital y equipos interdisciplinarios.</h2>
          <p>
            Diseño digital de sonrisa, planificación guiada por imagen y seguimiento remoto para
            acompañarte antes, durante y después del tratamiento.
          </p>
          <div className="checklist">
            <p>✔️ Radiología 3D y escáner intraoral</p>
            <p>✔️ Quirófano propio y sedación consciente</p>
            <p>✔️ Laboratorio protésico in house</p>
          </div>
        </div>
        <div className="specialties-list">
          {specialties.map((spec) => (
            <article key={spec.title}>
              <h3>{spec.title}</h3>
              <p>{spec.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="equipo">
        <div className="section-head">
          <p className="pill">Historias reales</p>
          <h2>Testimonios que respaldan nuestra calidad humana.</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author}>
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section smile-section">
        <div className="section-head">
          <p className="pill">Sonrisas felices</p>
          <h2>Casos clínicos fotografiados en la clínica.</h2>
          <p>Resultados documentados con consentimiento informado para inspirarte a dar el siguiente paso.</p>
        </div>
        <div className="smile-grid">
          {smileShowcase.map((item) => (
            <article key={item.title} className="smile-card">
              <img src={item.src} alt={item.title} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery">
        <div className="section-head">
          <p className="pill">Recorrido virtual</p>
          <h2>Instalaciones diseñadas para tu comodidad.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.title}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section contact" id="contacto">
        <div className="contact-info">
          <p className="pill">Contacto</p>
          <h2>Coordinemos tu próxima visita.</h2>
          <div className="info-block">
            <p className="info-title">Clínica central</p>
            <p>Mariano Moreno 2393 · Corrientes Capital</p>
            <p>Lunes a viernes de 8 a 21 h · Sábados de 9 a 13 h</p>
          </div>
          <div className="info-block">
            <p className="info-title">Turnos y urgencias</p>
            <a href="tel:+543794759547">+54 379 475 9547</a>
            <a href="mailto:turnos@ceocor.com">turnos@ceocor.com</a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Nombre y apellido
            <input type="text" placeholder="Ej. Laura Benítez" required />
          </label>
          <label>
            Teléfono / WhatsApp
            <input type="tel" placeholder="+54 9 ..." required />
          </label>
          <label>
            Servicio de interés
            <select required>
              <option value="">Seleccioná una opción</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Comentarios
            <textarea rows="4" placeholder="Contanos tu consulta"></textarea>
          </label>
          <button type="submit" className="cta primary">
            Enviar consulta
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} CEO Corrientes. Todos los derechos reservados.</p>
        <p>Mat. Prof. 1234 · Habilitación Ministerio de Salud Corrientes.</p>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/543794759547?text=Hola%20CEO%20Corrientes,%20quisiera%20un%20turno"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chatear por WhatsApp"
      >
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.391-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 5.419h-.004a8.7 8.7 0 0 1-4.355-1.174l-.312-.185-3.244.853.865-3.164-.203-.324a8.704 8.704 0 0 1-1.337-4.652c.001-4.816 3.918-8.734 8.736-8.734 2.335 0 4.52.91 6.167 2.558a8.671 8.671 0 0 1 2.566 6.168c-.003 4.815-3.92 8.733-8.739 8.734ZM20.52 3.484A11.815 11.815 0 0 0 11.839 0C5.317 0 .003 5.315 0 11.837A11.779 11.779 0 0 0 1.711 17.4L0 24l6.8-1.783a11.843 11.843 0 0 0 5.034 1.171h.005c6.522 0 11.838-5.315 11.84-11.837a11.768 11.768 0 0 0-3.459-8.067Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}

export default App
