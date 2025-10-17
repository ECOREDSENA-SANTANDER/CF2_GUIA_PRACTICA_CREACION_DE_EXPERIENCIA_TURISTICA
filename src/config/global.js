export default {
  global: {
    Name: 'Guía práctica en la creación de experiencia turística',
    Description:
      'El objetivo principal de este componente es brindar herramientas para la creación de experiencias turísticas, destacando elementos clave como el conocimiento del destino, las facilidades turísticas disponibles, los tipos de atractivos presentes en el territorio y las actividades que pueden desarrollarse en cada contexto. Asimismo, se abordará la aplicación de técnicas para el diseño del itinerario, la construcción de una narrativa coherente y la elaboración de un plan de contingencia que garantice la calidad y seguridad de la experiencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Experiencia turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Destino turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seguridad turística',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reglamentación legal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Atractivo turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Capacidad de carga turística y límites de cambio aceptable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa de sostenibilidad turística',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de geolocalización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ciclo de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Narrativa',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Itinerario',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Testeo de la experiencia',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ruta turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Técnicas de diseño',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Reglamentación legal  ',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). ABECÉ de la Ley General del Turismo. Ley 2068 de 2020.',
      tipo: 'Documento',
      link:
        'https://colombiasigueadelante.mincit.gov.co/colombia_sigue_adelante/media/archivos/pdf/ABECE-febrero-2021-Ley-de-Turismo.pdf ',
    },
    {
      tema: 'Experiencia turística ',
      referencia:
        'Servicio Nacional de Turismo. (s.f.). Manual de diseño experiencias turísticas.',
      tipo: 'Manual',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf ',
    },
    {
      tema: 'Itinerario',
      referencia:
        'Chicaiza, X. (2019). Manual generación de rutas e itinerarios turísticos. Ministerio de Turismo del Ecuador.',
      tipo: 'Manual',
      link:
        'https://servicios.turismo.gob.ec/wp-content/uploads/2023/04/Manual_generacion_rutas_itinerarios_sub2021_compressed.pdf ',
    },
    {
      tema: 'Técnicas de diseño',
      referencia:
        'Casals Iglesias, M. C., Espinosa Urriola, C., Errázuriz Contreras, M. J., Pfeiffer Espinoza, E. (2018). Relatos turísticos: propuestas para incorporar el patrimonio cultural y natural en las empresas turísticas en los servicios y rutas turísticas de Arica y Camarones. Ediciones Universidad Central de Chile.',
      tipo: 'Manual',
      link:
        'https://www.ucentral.cl/ucentral/site/docs/20200110/20200110142007/relatos_turisticos_arica.pdf ',
    },
    {
      tema: 'Testeo de la experiencia',
      referencia:
        'Agencia Parks Canada. (2017). Guía de evaluación de la experiencia del visitante. Metodología en áreas protegidas. Subsecretaría de Turismo. Ministerio de Economía, Fomento y Turismo. ',
      tipo: 'Guía',
      link:
        'https://www.subturismo.gob.cl/wp-content/uploads/2017/05/GUIA_EXPERIENCIA_VISITANTE_WEB.pdf ',
    },
    {
      tema: 'Destino turístico',
      referencia:
        'González Reverté, F. (s. f.). Destinos turísticos: Concepto y estructura. Universitat Oberta de Catalunya.',
      tipo: 'Documento',
      link:
        'https://openaccess.uoc.edu/server/api/core/bitstreams/62d50fc4-2bd9-469c-b569-aeec162c501c/content',
    },
  ],
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado:
        'Elemento natural, cultural o construido que motiva la visita de turistas.',
    },
    {
      termino: 'Ciclo de servicio',
      significado:
        'Conjunto de fases que conforman la atención al cliente durante la experiencia.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Lugar que ofrece condiciones para la realización de actividades turísticas.',
    },
    {
      termino: 'Encuesta de satisfacción',
      significado:
        'Instrumento que recoge la opinión del visitante sobre el servicio recibido.',
    },
    {
      termino: 'Experiencia turística',
      significado:
        'Vivencia significativa que el turista experimenta durante su viaje.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'Tecnología que permite ubicar geográficamente lugares y atractivos turísticos.',
    },
    {
      termino: 'Guía de turismo',
      significado:
        'Persona capacitada que orienta, informa y acompaña al turista.',
    },
    {
      termino: 'Itinerario',
      significado:
        'Secuencia organizada de actividades y recorridos turísticos.',
    },
    {
      termino: 'Narrativa',
      significado:
        'Relato que comunica el valor cultural o emocional de un destino o experiencia.',
    },
    {
      termino: 'Normativa',
      significado: 'Conjunto de reglas que regulan la actividad turística.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes culturales o naturales que tienen valor histórico o simbólico.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Estrategia para actuar ante imprevistos durante la experiencia turística.',
    },
    {
      termino: 'Ruta turística',
      significado:
        'Recorrido diseñado para visitar varios puntos de interés dentro de un territorio.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Principio que busca equilibrio entre lo ambiental, social y económico en el turismo.',
    },
    {
      termino: 'Turista',
      significado:
        'Persona que se desplaza temporalmente fuera de su entorno habitual por motivos de ocio u otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carvajal, M. (2019). La experiencia turística: Conceptualización y enfoques para su estudio. Revista Turismo y Sociedad, 24(1), 13–29.',
      link: '',
    },
    {
      referencia:
        'Ceupe. (s. f.-a). ¿Qué es un atractivo turístico? Tipos, ejemplo e importancia.',
      link: 'https://www.ceupe.com/blog/atractivo-turistico.html',
    },
    {
      referencia:
        'Ceupe. (s. f.-b). Itinerario de viaje: ¿Qué es y qué contiene?',
      link: 'https://www.ceupe.com/blog/itinerario-de-viaje.html',
    },
    {
      referencia:
        'Ceupe. (s. f.-c). Seguridad turística: Qué es, importancia y tipos.',
      link: 'https://www.ceupe.com/blog/seguridad-turistica.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020, diciembre 31). Ley 2068 de 2020: Por la cual se modifica la Ley general de turismo y se dictan otras disposiciones. Diario Oficial No. 51.522.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558',
    },
    {
      referencia:
        'Contreras Castañeda, E. D., Rubio-Sáenz, A. L., & Suárez-Parra, A. B. (2021). La medición de la calidad del servicio en destinos turísticos: Una revisión desde Colombia. Innovar, 31(81), 35–48.',
      link: 'https://doi.org/10.15446/innovar.v31n81.95571',
    },
    {
      referencia:
        'De la Cruz, J. (s. f.). Plan de contingencia: Recorrido en parque natural – área protegida. Scribd.',
      link:
        'https://es.scribd.com/document/413194150/Plan-de-Contingencia-Recorrido-Parque-Natural',
    },
    {
      referencia:
        'García López, R. (2022). El storytelling, clave en el marketing turístico. Marketing Turístico Digital.',
      link:
        'https://marketingturisticodigital.com/el-storytelling-clave-en-el-marketing-turistico',
    },
    {
      referencia:
        'Instituto Costarricense de Turismo [ICT]. (s. f.). Sostenibilidad turística CST.',
      link:
        'https://www.ict.go.cr/es/sostenibilidad/cst.html#:~:text=El%20desarrollo%20tur%C3%ADstico%20sostenible%20es,adem%C3%A1s%20contribuye%20al%20desarrollo%20nacional',
    },
    {
      referencia: 'Kevin. (s. f.). Qué es un itinerario turístico. Scribd.',
      link:
        'https://es.scribd.com/document/588681376/Que-Es-Un-Itinerario-Turistico',
    },
    {
      referencia:
        'Lovelock, C. H., & Wirtz, J. (2011). Marketing de servicios (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Mercadé, A. (2015). Las herramientas de geolocalización más utilizadas. Deusto.',
      link:
        'https://www.deustoformacion.com/blog/marketing-digital/herramientas-geolocalizacion-mas-utilizadas',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Normatividad turismo. ',
      link: 'https://www.mincit.gov.co/normatividad',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024, abril 2). Resolución 612 de 2024: Por la cual se adoptan los lineamientos para la sostenibilidad turística y se dictan otras disposiciones.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=156618',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo & Policía de Turismo. (2003). Seguridad turística: Reto competitivo de Colombia. Plan estratégico.',
      link:
        'https://www.mincit.gov.co/cmspages/getfile.aspx?guid=c46cb77e-c0e3-49f1-bc68-6b18d2b89054',
    },
    {
      referencia:
        'Ministerio de Turismo. (2020). Facilidades turísticas: introducción.',
      link:
        'https://servicios.turismo.gob.ec/wp-content/uploads/2023/04/11-06-2020-MANUAL-DE-FACILIDADES-TURISTICAS-INTRODUCCION_compressed.pdf',
    },
    {
      referencia:
        'Montagud Rubio, N. (2019). Ciclo de servicio al cliente: Cómo funciona, características y fases. Psicología y Mente.',
      link:
        'https://psicologiaymente.com/organizaciones/ciclo-servicio-cliente',
    },
    {
      referencia:
        'ONU Turismo. (s. f.-a). Desarrollo sostenible del turismo. UNWTO.',
      link: 'https://www.unwto.org/es/desarrollo-sostenible',
    },
    {
      referencia: 'ONU Turismo. (s. f.-b). Glosario de términos de turismo.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
    },
    {
      referencia:
        'Pine, B. J., & Gilmore, J. H. (1999). The experience economy: Work is theatre and every business a stage. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Playtur. (2023). La geolocalización, herramienta clave de la gamificación turística. LinkedIn.',
      link:
        'https://es.linkedin.com/pulse/la-geolocalizaci%C3%B3n-herramienta-clave-de-gamificaci%C3%B3n-tur%C3%ADstica',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2022, febrero 15). Decreto 190 de 2022: Por el cual se reglamenta el Capítulo 8 sobre atractivo turístico, Secciones I, II y III. Diario Oficial No. 51.994.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=177026',
    },
    {
      referencia:
        'QuestionPro. (s. f.). Encuesta de satisfacción. QuestionPro.',
      link: 'https://www.questionpro.com/es/encuesta-de-satisfaccion.html',
    },
    {
      referencia:
        'Rodríguez, C. I. (2015). E-Turismo aplicando Tecnologías de Geolocalización, Visitas Virtuales y Realidad Aumentada para Dispositivos Móviles. Revista Tecnológica, (8), 19–25.',
      link: 'https://core.ac.uk/download/pdf/80296688.pdf',
    },
    {
      referencia:
        'Scollo, J. (2023). La necesidad de una nueva narrativa para el turismo. Ladevi.',
      link:
        'https://colombia.ladevi.info/turismo/la-necesidad-una-nueva-narrativa-el-turismo-n52980',
    },
    {
      referencia:
        'Zorrilla, A. (2023). Técnicas de narrativa y visualización para investigar y comunicar nuestros descubrimientos. Campus Digital Idyd.',
      link:
        'https://campusidyd.com/tecnicas-de-la-narrativa-y-visualizacion-para-investigar',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta Temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
