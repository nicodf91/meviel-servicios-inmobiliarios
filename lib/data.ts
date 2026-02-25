import { Development, FaqItem, Property } from "@/lib/types";

export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "departamento-premium-nueva-cordoba",
    title: "Departamento premium de 2 dormitorios en Nueva Córdoba",
    operation: "Venta",
    type: "Departamento",
    zone: "Nueva Córdoba",
    address: "Bv. Chacabuco 980, Córdoba Capital",
    price: 165000,
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 95,
    garage: 1,
    featured: true,
    description:
      "Unidad de categoría con vista abierta, excelente luz natural y terminaciones de primera línea.",
    longDescription:
      "Departamento ideal para vivienda o renta premium en una de las zonas con mayor demanda de Córdoba. Cuenta con living comedor amplio, balcón corrido, cocina separada con mobiliario de diseño, dos dormitorios con placard y dos baños completos. Se encuentra en edificio con seguridad y amenities, con rápida conexión al centro y Ciudad Universitaria.",
    technicalDetails: [
      { label: "Estado", value: "Excelente" },
      { label: "Antigüedad", value: "6 años" },
      { label: "Expensas", value: "AR$ 145.000" },
      { label: "Orientación", value: "Noreste" },
      { label: "Piso", value: "10" },
      { label: "Apto crédito", value: "Sí" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Internet fibra",
      "Seguridad 24 hs",
      "SUM",
      "Pileta",
    ],
    features: [
      "Balcón",
      "Seguridad",
      "Pileta",
      "Cochera",
      "Apto crédito",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616594039964-3a6f3f4f7e3f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.420083,-64.182191",
  },
  {
    id: "prop-002",
    slug: "casa-jardin-cerro-las-rosas",
    title: "Casa con jardín y quincho en Cerro de las Rosas",
    operation: "Venta",
    type: "Casa",
    zone: "Cerro de las Rosas",
    address: "Av. Rafael Núñez 5200, Córdoba Capital",
    price: 320000,
    currency: "USD",
    bedrooms: 4,
    bathrooms: 3,
    areaM2: 280,
    garage: 2,
    featured: true,
    description:
      "Casa familiar sólida, con lote amplio, galería integrada y excelente entorno residencial.",
    longDescription:
      "Propiedad desarrollada en dos plantas sobre lote regular, ideal para familias que buscan amplitud y calidad constructiva. Dispone de espacios sociales integrados, cocina comedor diario, suite principal con vestidor, escritorio y jardín parquizado con quincho. Una oportunidad para vivir con confort y conservar valor patrimonial en una ubicación consolidada.",
    technicalDetails: [
      { label: "Estado", value: "Muy bueno" },
      { label: "Antigüedad", value: "12 años" },
      { label: "Terreno", value: "520 m2" },
      { label: "Cubiertos", value: "280 m2" },
      { label: "Orientación", value: "Este" },
      { label: "Escritura", value: "Inmediata" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Cloacas",
      "Internet fibra",
      "Alarma",
      "Riego por aspersión",
    ],
    features: [
      "Quincho",
      "Parque",
      "Suite",
      "Cochera doble",
      "Escritorio",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.356613,-64.243604",
  },
  {
    id: "prop-003",
    slug: "duplex-estrenar-docta",
    title: "Dúplex a estrenar en Docta con patio y cochera",
    operation: "Venta",
    type: "Dúplex",
    zone: "Docta",
    address: "Barrio Docta, Córdoba",
    price: 189000,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 3,
    areaM2: 176,
    garage: 2,
    isNew: true,
    description:
      "Diseño contemporáneo, distribución eficiente y materiales seleccionados para bajo mantenimiento.",
    longDescription:
      "Dúplex pensado para quienes valoran una estética moderna y una construcción técnicamente cuidada. Ofrece estar comedor con cocina integrada, toilette social, tres dormitorios en planta alta y patio propio. Incluye sistema de calefacción por radiadores, aberturas DVH y preinstalación de aire acondicionado.",
    technicalDetails: [
      { label: "Estado", value: "A estrenar" },
      { label: "Entrega", value: "Inmediata" },
      { label: "Terreno", value: "210 m2" },
      { label: "Cubiertos", value: "176 m2" },
      { label: "Aberturas", value: "Aluminio DVH" },
      { label: "Calefacción", value: "Radiadores" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Internet fibra",
      "Seguridad privada",
      "Calles pavimentadas",
    ],
    features: ["Patio", "Parrilla", "A estrenar", "Cochera doble", "Seguridad"],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5dc08b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.460291,-64.302911",
  },
  {
    id: "prop-004",
    slug: "local-comercial-centro-cordoba",
    title: "Local comercial en esquina estratégica del Centro",
    operation: "Alquiler",
    type: "Local",
    zone: "Centro",
    address: "Av. Colón 145, Córdoba Capital",
    price: 1350000,
    currency: "ARS",
    bedrooms: 0,
    bathrooms: 2,
    areaM2: 210,
    garage: 0,
    isNew: true,
    description:
      "Excelente visibilidad peatonal y vehicular para marcas que buscan alto flujo y posicionamiento.",
    longDescription:
      "Local en planta baja con vidriera a doble frente, depósito y oficinas de apoyo. Apto rubros gastronómicos y comerciales de alto tránsito. Se destaca por su ubicación estratégica en corredor consolidado, ideal para operaciones con proyección y escala.",
    technicalDetails: [
      { label: "Estado", value: "Reciclado" },
      { label: "Frente", value: "18 metros lineales" },
      { label: "Depósito", value: "Sí" },
      { label: "Contrato", value: "36 meses" },
      { label: "Ajuste", value: "Trimestral IPC" },
      { label: "Disponibilidad", value: "Inmediata" },
    ],
    services: [
      "Energía trifásica",
      "Agua corriente",
      "Internet fibra",
      "Sistema contra incendios",
    ],
    features: ["Esquina", "Vidriera amplia", "Depósito", "Alto tránsito"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.413327,-64.188289",
  },
  {
    id: "prop-005",
    slug: "terreno-country-la-cascada",
    title: "Terreno premium en Country La Cascada",
    operation: "Venta",
    type: "Terreno",
    zone: "La Cascada",
    address: "Country La Cascada, Zona Sur",
    price: 98000,
    currency: "USD",
    bedrooms: 0,
    bathrooms: 0,
    areaM2: 850,
    garage: 0,
    featured: true,
    description:
      "Lote plano con excelente orientación, apto para vivienda de alta gama o desarrollo de renta.",
    longDescription:
      "Terreno interno de gran metraje en urbanización consolidada, con infraestructura completa y control de acceso. Su relación frente/fondo permite múltiples tipologías de proyecto y una construcción eficiente. Opción ideal para inversores que priorizan ubicación y potencial de valorización.",
    technicalDetails: [
      { label: "Estado", value: "Listo para escriturar" },
      { label: "Frente", value: "21 metros" },
      { label: "Fondo", value: "40 metros" },
      { label: "FOS/FOT", value: "Según reglamento interno" },
      { label: "Pavimento", value: "Sí" },
      { label: "Seguridad", value: "24 hs" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Energía subterránea",
      "Seguridad 24 hs",
      "Club house",
    ],
    features: ["Lote interno", "Seguridad", "Listo para construir", "Club house"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.500676,-64.260418",
  },
  {
    id: "prop-006",
    slug: "departamento-alquiler-general-paz",
    title: "Departamento de 2 dormitorios en General Paz",
    operation: "Alquiler",
    type: "Departamento",
    zone: "General Paz",
    address: "Lima 1350, General Paz, Córdoba",
    price: 690000,
    currency: "ARS",
    bedrooms: 2,
    bathrooms: 1,
    areaM2: 74,
    garage: 1,
    description:
      "Unidad funcional, luminosa y lista para ingresar, con excelente conectividad al centro.",
    longDescription:
      "Departamento cómodo para familias o profesionales que buscan ubicación estratégica y servicios cercanos. Cuenta con living comedor, cocina separada, dos dormitorios con placard y balcón. Edificio con control de acceso y mantenimiento regular.",
    technicalDetails: [
      { label: "Estado", value: "Muy bueno" },
      { label: "Antigüedad", value: "9 años" },
      { label: "Expensas", value: "AR$ 94.000" },
      { label: "Contrato", value: "24 meses" },
      { label: "Ajuste", value: "Cuatrimestral IPC" },
      { label: "Disponibilidad", value: "Inmediata" },
    ],
    services: ["Agua corriente", "Gas natural", "Internet fibra", "Ascensor"],
    features: ["Balcón", "Cochera", "Placares completos"],
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752734-f8d8f47bd5d5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.415973,-64.170253",
  },
  {
    id: "prop-007",
    slug: "lote-barrio-cerrado-manantiales",
    title: "Lote en Manantiales con potencial de inversión",
    operation: "Venta",
    type: "Terreno",
    zone: "Manantiales",
    address: "Manantiales II, Córdoba",
    price: 76000,
    currency: "USD",
    bedrooms: 0,
    bathrooms: 0,
    areaM2: 640,
    garage: 0,
    isNew: true,
    description:
      "Excelente oportunidad para construir vivienda o posicionarse en una zona de crecimiento sostenido.",
    longDescription:
      "Lote ubicado en sector de alta demanda, con entorno residencial y acceso rápido a avenidas principales. Ideal para proyecto de vivienda familiar o estrategia de inversión con horizonte de mediano plazo. Se entrega con servicios operativos y documentación al día.",
    technicalDetails: [
      { label: "Estado", value: "Apto escritura" },
      { label: "Frente", value: "16 metros" },
      { label: "Fondo", value: "40 metros" },
      { label: "Pavimento", value: "Sí" },
      { label: "Seguridad", value: "Control de acceso" },
      { label: "Servicios", value: "Completos" },
    ],
    services: ["Agua corriente", "Gas natural", "Energía eléctrica", "Internet"],
    features: ["Listo para construir", "Barrio consolidado", "Buena orientación"],
    images: [
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.505341,-64.253223",
  },
  {
    id: "prop-008",
    slug: "casa-familiar-arguello",
    title: "Casa familiar en Argüello con patio y pileta",
    operation: "Venta",
    type: "Casa",
    zone: "Argüello",
    address: "Recta Martinoli 7800, Córdoba",
    price: 245000,
    currency: "USD",
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 210,
    garage: 2,
    description:
      "Casa funcional en entorno residencial, con ambientes amplios y espacio exterior disfrutable.",
    longDescription:
      "Propiedad en planta baja con diseño práctico para uso diario. Incluye living comedor conectado a galería, cocina con comedor diario, tres dormitorios y pileta. Apta para familias que priorizan vida barrial, accesibilidad y calidad de construcción.",
    technicalDetails: [
      { label: "Estado", value: "Muy bueno" },
      { label: "Antigüedad", value: "8 años" },
      { label: "Terreno", value: "430 m2" },
      { label: "Cubiertos", value: "210 m2" },
      { label: "Escritura", value: "Sí" },
      { label: "Apto crédito", value: "Sí" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Cloacas",
      "Internet fibra",
      "Alarma",
    ],
    features: ["Pileta", "Patio", "Cochera doble", "Parrilla", "Apto crédito"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.347963,-64.281367",
  },
  {
    id: "prop-009",
    slug: "departamento-vista-rio-alberdi",
    title: "Departamento con vista abierta en Alberdi",
    operation: "Venta",
    type: "Departamento",
    zone: "Alberdi",
    address: "Duarte Quirós 1500, Córdoba Capital",
    price: 128000,
    currency: "USD",
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 82,
    garage: 1,
    isNew: true,
    description:
      "Unidad moderna con amenities y excelente relación entre calidad, ubicación y precio.",
    longDescription:
      "Departamento con distribución equilibrada y detalles de categoría media-alta, ideal para primera vivienda o inversión de renta permanente. Edificio con amenities y seguridad. Se ubica en corredor de fuerte demanda por su cercanía al centro y principales universidades.",
    technicalDetails: [
      { label: "Estado", value: "Excelente" },
      { label: "Antigüedad", value: "4 años" },
      { label: "Expensas", value: "AR$ 112.000" },
      { label: "Piso", value: "8" },
      { label: "Orientación", value: "Norte" },
      { label: "Apto crédito", value: "Sí" },
    ],
    services: [
      "Agua corriente",
      "Gas natural",
      "Internet fibra",
      "Seguridad",
      "SUM",
    ],
    features: ["Balcón", "Cochera", "Seguridad", "Apto crédito"],
    images: [
      "https://images.unsplash.com/photo-1617104551722-3b2d513664c8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752734-f8d8f47bd5d5?auto=format&fit=crop&w=1600&q=80",
    ],
    mapQuery: "-31.405972,-64.203792",
  },
];

export const developments: Development[] = [
  {
    id: "dev-001",
    name: "Meviel Residence Norte",
    zone: "Zona Norte, Córdoba",
    stage: "En construcción",
    units: "42 unidades residenciales",
    summary:
      "Proyecto residencial con tipologías de 1 y 2 dormitorios, amenities y estándares constructivos de alta eficiencia.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "dev-002",
    name: "Terrazas del Sur by Meviel",
    zone: "Zona Sur, Córdoba",
    stage: "Próximo lanzamiento",
    units: "Complejo mixto con 60 unidades",
    summary:
      "Desarrollo mixto con unidades residenciales y espacio comercial, pensado para inversión patrimonial con proyección.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "dev-003",
    name: "Lotes Meviel Manantiales",
    zone: "Manantiales, Córdoba",
    stage: "En construcción",
    units: "38 lotes con infraestructura completa",
    summary:
      "Urbanización propia con calles consolidadas, servicios completos y trazado pensado para desarrollo familiar.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "dev-004",
    name: "Distrito Puentes",
    zone: "Córdoba Capital",
    stage: "Próximo lanzamiento",
    units: "Proyecto integral residencial",
    summary:
      "Concepto de barrio con diseño urbano, infraestructura moderna y respaldo técnico de Meviel desde su origen.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "¿Qué documentación necesito para vender una propiedad?",
    answer:
      "En general se solicita escritura, DNI titular, planos (si existen), impuestos y servicios al día. Analizamos cada caso para confirmar documentación adicional.",
  },
  {
    question: "¿Cómo se reserva una propiedad?",
    answer:
      "Se firma una reserva con propuesta formal y se deja una seña. Luego se coordina la etapa de boleto y revisión documental previa a la escritura.",
  },
  {
    question: "¿Cómo se calcula la comisión inmobiliaria?",
    answer:
      "La comisión se informa con transparencia al inicio de la operación y depende del tipo de inmueble, modalidad y alcance del servicio contratado.",
  },
  {
    question: "¿Realizan tasaciones para herencias o divisiones?",
    answer:
      "Sí. Trabajamos tasaciones con criterio técnico y respaldo documental para operaciones privadas, sucesiones, particiones y acuerdos entre partes.",
  },
  {
    question: "¿Cuánto tarda en venderse una propiedad?",
    answer:
      "Depende de ubicación, estado, precio de salida y estrategia comercial. Nuestro objetivo es reducir tiempos con posicionamiento correcto y difusión profesional.",
  },
  {
    question: "¿También trabajan alquileres?",
    answer:
      "Sí, gestionamos alquileres residenciales y comerciales con análisis de perfil, requisitos y acompañamiento contractual en cada etapa.",
  },
  {
    question: "¿Puedo comprar una propiedad con crédito hipotecario?",
    answer:
      "Sí, en inmuebles aptos crédito. Te acompañamos en la coordinación con entidad financiera y en la documentación necesaria para la operación.",
  },
  {
    question: "¿Qué incluye el servicio de comercialización?",
    answer:
      "Incluye tasación estratégica, producción audiovisual, publicación en portales y redes, gestión de consultas, visitas guiadas y negociación profesional.",
  },
  {
    question: "¿Trabajan con inversores para lotes y desarrollos?",
    answer:
      "Sí. Diseñamos búsquedas y propuestas para inversión inmobiliaria, lotes premium y desarrollos con análisis técnico de viabilidad.",
  },
  {
    question: "¿Cómo coordino una reunión de asesoramiento?",
    answer:
      "Podés hacerlo por WhatsApp o formulario de contacto. Respondemos en menos de 24 horas hábiles para agendar reunión o visita.",
  },
];

export const siteLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/desarrollos-propios", label: "Desarrollos propios" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/contacto", label: "Contacto" },
];

export function getFeaturedProperties(limit = 3) {
  return properties.filter((property) => property.featured).slice(0, limit);
}

export function getInvestmentLots(limit = 2) {
  return properties.filter((property) => property.type === "Terreno").slice(0, limit);
}

export function findPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getSimilarProperties(current: Property, limit = 3) {
  return properties
    .filter(
      (property) =>
        property.slug !== current.slug &&
        (property.zone === current.zone || property.type === current.type),
    )
    .slice(0, limit);
}
