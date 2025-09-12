<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Destino turístico
    .row
      .col-1.col-md-1.imagehide.p-3
        img(src='@/assets/curso/tema2/1.svg', alt='').imagehide
      .col-11.col-md-11.p-2
        p Un destino turístico es un espacio geográfico donde se concentran recursos naturales, culturales y servicios que permiten el desarrollo de actividades turísticas. Puede contar o no con delimitaciones administrativas específicas, y constituye una unidad fundamental de análisis dentro del sector turístico. En este espacio, el visitante puede pernoctar, acceder a una oferta integrada de productos, servicios y experiencias a lo largo de la cadena de valor del turismo, tales como alojamiento, gastronomía, transporte, actividades recreativas, culturales o de naturaleza.
    .row
      .cajon.cajon-color-adicional-2.col-4.imagehide.p-4
        p El destino reúne diversos actores como autoridades locales, prestadores de servicios turísticos, comunidades anfitrionas y organizaciones privadas que interactúan para ofrecer una experiencia cohesionada al visitante. Además, puede conformar redes con otros destinos cercanos, articulándose como parte de un sistema turístico más amplio o una región turística.
      .col-3.p-2
        img(src='@/assets/curso/tema2/2.png', alt='').imagehide
      .col-5.p-2
        .d-flex.align-items-center.gap-3.mb-3
            img(src='@/assets/curso/tema2/3.svg', alt='').imagenpeq.imagehide
        p Más allá de su dimensión física, un destino posee también una dimensión simbólica e inmaterial, expresada en su identidad, imagen de marca y posicionamiento en el mercado, elementos que influyen directamente en su capacidad de atraer turistas y en su competitividad. La percepción que genera un destino a través de su reputación, autenticidad, accesibilidad, sostenibilidad y calidad de servicios es determinante para su éxito y sostenibilidad a largo plazo.
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Roberto Boullón LAS ACTIVIDADES TURÍSTICAS Y RECREACIONALES el hombre como protagonista.
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.academia.edu/40296889/R_oberto_r_Boull%C3%B3n_LAS_ACTIVIDADES_TUR%C3%8DSTICAS_Y_RECREACIONALES_El_hombre_como_protagonista" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
    .mb-5
    .row.sistema
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 1.] Santuario de Nuestra Señora del Rosario de las Lajas. Ipiales – Nariño.  
          img(src='@/assets/curso/tema2/4.png', alt='')
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 2.] Plaza Mayor de Villa de Leyva.
          img(src='@/assets/curso/tema2/5.png', alt='')
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Facilidades turísticas 
    .row
      .col-1.col-md-1.imagehide.p-3
        img(src='@/assets/curso/tema2/6.svg', alt='').imagehide
      .col-11.col-md-11.p-2
        p La experiencia turística comprende el involucramiento emocional de los turistas o visitantes con los productos y servicios que se ofrecen en un destino. Esta experiencia está estrechamente vinculada con la infraestructura disponible, por lo que resulta fundamental promover y fortalecer su mejora continua mediante la adopción de estándares de calidad. En este contexto, la implementación de facilidades turísticas se convierte en una labor esencial para el desarrollo competitivo del sector.
    .row
      .cajon.cajon-color-adicional-3.col-7.imagehide.p-4
        p Se entiende por facilidad turística todo elemento espacial (generalmente de carácter arquitectónico) que complementa y apoya la actividad turística. Su objetivo es dotar al destino de infraestructura social o física, así como de equipamiento adecuado (mobiliario, señalética, elementos informativos, entre otros), a lo largo de las distintas fases del desarrollo turístico: creación, perfeccionamiento y consolidación. Estas facilidades contribuyen a mejorar la experiencia del visitante, reducir el impacto ambiental y elevar la calidad de los servicios, posicionando al destino como un producto competitivo (Ministerio de Turismo MINTUR, 2014).
      .col-5.p-2
        img(src='@/assets/curso/tema2/7.png', alt='').imagehide
    .mb-5
    .row.acordeon
      .col-lg-1
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="a) Facilidades de observación y vigilancia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Miradores.
                .mb-4
                p.mb-0 Torres de avistamiento de aves.
                .mb-4
                p.mb-0 Torres de vigilancia (salvavidas).
          .row.col-xl-11.m-auto(titulo="b) Facilidades de recorrido y descanso")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 
                  .mb-4
                p.mb-0 Senderos (incluye puentes peatonales de luces menores).
                .mb-4
                p.mb-0 Campamentos turísticos.
                .mb-4
                p.mb-0 Refugios.
          .row.col-xl-11.m-auto(titulo="c) Facilidades de servicio y equipamiento")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Baterías sanitarias.
                .mb-4
                p.mb-0 Módulos de uso múltiple: duchas, vestidores, áreas de descanso, lavandería, bodega.
                .mb-4
                p.mb-0 Estacionamientos.
                .mb-4
                p.mb-0 Mobiliario turístico, compuesto por:
                .mb-4
                ol.lista-ol
                  li 
                    i.lista-ul__vineta
                    | 1) Estaciones de sombra y descanso.
                  li 
                    i.lista-ul__vineta
                    | 2) Bolardos.
                  li 
                    i.lista-ul__vineta
                    | 3) Bancas.
                  li 
                    i.lista-ul__vineta
                    | 4) Mesas.
                ol.lista-ol
                  li 
                    i.lista-ul__vineta
                    | 5) Basureros.
                  li 
                    i.lista-ul__vineta
                    | 6) Señalética turística.
                  li 
                    i.lista-ul__vineta
                    | 7) Señalización informativa.
          .row.col-xl-11.m-auto(titulo="d) Facilidades de apoyo a la gestión turística")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Centros de recepción y equipamiento para visitantes.
          .row.col-xl-11.m-auto(titulo="e) Condicionantes para la implementación de facilidades turísticas")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Existen diversos factores propios del destino que influyen en el diseño, ubicación e implementación de las facilidades turísticas, entre los cuales se destacan:
                .mb-4
                p.mb-0 #[strong Clima:] temperatura, precipitaciones y humedad.
                .mb-4
                p.mb-0 #[strong Terreno:] topografía, pendientes, calidad del suelo.
                .mb-4
                p.mb-0 #[strong Cielo:] nivel de nubosidad y exposición solar.
                .mb-4
                p.mb-0 #[strong Vistas:] visibilidad y calidad del paisaje.
                .mb-4
                p.mb-0 Estos factores, además de tener un impacto en la infraestructura, también contribuyen a definir la identidad cultural y las costumbres locales, elementos fundamentales para una adecuada planificación turística.
    .mb-5
    #t_2_1.titulo-segundo.color-acento-contenido.mb-5
      h2 2.1 Seguridad turística 
    
    .row
      .col-7
        p La seguridad turística es un componente esencial para el desarrollo sostenible del sector, ya que influye directamente en la percepción y satisfacción de los visitantes. Un entorno seguro no solo protege a los turistas, sino que también contribuye a la reputación y competitividad del destino. La seguridad turística abarca diversos aspectos, incluyendo la protección de los bienes y servicios turísticos, la prevención de riesgos y la gestión de emergencias.
        .cajon.cajon-color-adicional-4.p-4
          p Es fundamental que los destinos turísticos implementen estrategias integrales de seguridad que involucren a todos los actores del sector, desde las autoridades locales hasta los prestadores de servicios y las comunidades anfitrionas. Estas estrategias deben contemplar la capacitación del personal, la mejora de la infraestructura, la promoción de buenas prácticas y la colaboración con las fuerzas de seguridad pública.
      .col-5
        img(src='@/assets/curso/tema2/8.png', alt='').imagehide
    .mb-5
    .row
      .col-8
        LineaTiempoD.color-acento-contenido
          .row(numero="a)" titulo="Medidas comunes para garantizar la seguridad turística")
            .col-md-12.mb-4.mb-md-0
                p.mb-0 Presencia visible de fuerzas de seguridad en áreas turísticas.
                .mb-2
                p.mb-0 Iluminación adecuada en espacios públicos.
                .mb-2
                p.mb-0 Señalización clara y comprensible para visitantes.
                .mb-2
                p.mb-0 Supervisión constante en playas y zonas recreativas.
                .mb-2
                p.mb-0 Controles de acceso en sitios turísticos relevantes.
                .mb-2
                p.mb-0 Disponibilidad de servicios médicos de emergencia.
                .mb-2
                p.mb-0 Campañas de concienciación sobre seguridad turística.
                .mb-2
                p.mb-0 Prevención de robos, estafas y delitos comunes contra turistas.
                .mb-2
                p.mb-0 Supervisión especial en actividades de riesgo (aventura, deportes extremos).
                .mb-2
                p.mb-0 Promoción de números de emergencia visible y accesible para los visitantes.
                .mb-4
                p.mb-0 La seguridad turística está estrechamente ligada a la calidad del producto turístico, e involucra distintos aspectos como seguridad vial, alimentaria, jurídica y en los servicios turísticos. Su presencia genera confianza, mejora la reputación del destino y contribuye a la fidelización de los turistas.
          .row(numero="b)" titulo="Aplicación de la seguridad en la experiencia turística")
            .col-md-12.mb-4.mb-md-0
                p.mb-0 Durante la estadía en un destino, se protege al visitante a través de:
                .mb-4
                p.mb-0 Seguridad en la visita a los atractivos turísticos, incluyendo accesos adecuados, horarios recomendados y condiciones climáticas aptas.
                .mb-2
                p.mb-0 Aumento de la confianza y atracción de más visitantes hacia destinos seguros.
                .mb-2
                p.mb-0 Mejora en la calidad de la experiencia turística.
                .mb-2
                p.mb-0 Proyección de una imagen positiva del destino y de los operadores turísticos.
                .mb-2
                p.mb-0 Estímulo al desarrollo económico local.
                .mb-2
                p.mb-0 Atracción de inversión nacional e internacional.
          .row(numero="c)" titulo="Beneficios de implementar seguridad turística")
            .col-md-12.mb-4.mb-md-0
                p.mb-0 Prevención de incidentes que puedan poner en riesgo la vida o la salud de los visitantes.
                .mb-2
                p.mb-0 Protección de pertenencias y recursos económicos del turista.
                .mb-2
                p.mb-0 Seguridad en la oferta de servicios turísticos, asegurando que los prestadores estén legalmente constituidos, cuenten con Registro Nacional de Turismo (RNT), Registro Único Tributario (RUT), y estén inscritos en Cámara de Comercio.
                .mb-2
                p.mb-0 Seguridad en establecimientos de alojamiento y gastronomía, donde se deben cumplir las normas de higiene, protección al menor, atención adecuada y medidas de prevención sanitaria.
                .mb-2
                p.mb-0 Seguridad en el transporte turístico, con vehículos certificados y condiciones adecuadas para la protección de los pasajeros.
          .row(numero="d)" titulo="Tipos de seguridad turística")
            .col-md-12.mb-4.mb-md-0
                p.mb-0 Seguridad médica: garantiza la disponibilidad de atención médica oportuna mediante hospitales, clínicas, centros de salud, personal capacitado y servicios de emergencia (ambulancias, respuesta rápida).
                .mb-2
                p.mb-0 Seguridad contra el crimen: previene delitos como robos, estafas o vandalismo mediante patrullas, cámaras de vigilancia y presencia policial en zonas clave.
                .mb-2
                p.mb-0 Seguridad en el transporte: asegura que los medios de transporte cumplan con los estándares técnicos, legales y operativos que minimicen los riesgos de accidentes.
                .mb-2
                p.mb-0 Seguridad vial: incluye mantenimiento de vías, señalización adecuada, control del tráfico y normas de tránsito para proteger a conductores y peatones.
                .mb-2
                p.mb-0 Seguridad jurídica: garantiza que los derechos legales de los turistas sean respetados, y que tengan acceso a mecanismos de denuncia y asesoría legal en caso necesario.
                .mb-2
                p.mb-0 Seguridad alimentaria: se refiere al cumplimiento de normas de higiene, manipulación y conservación de alimentos y bebidas, evitando enfermedades de origen alimentario.
                .mb-2
                p.mb-0 Seguridad en actividades de ocio: abarca medidas de prevención y control en actividades recreativas o deportivas, mediante el uso de equipos adecuados, supervisión profesional y protocolos de seguridad específicos.
      .col-4
        img(src='@/assets/curso/tema2/9.png', alt='')
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Enfoque internacional 
    .row
      .col-7
        p La Organización Mundial del Turismo (OMT) promueve el reconocimiento del derecho fundamental de toda persona a viajar con seguridad. Esta perspectiva posiciona al turismo como una herramienta clave para la construcción de paz, el entendimiento intercultural y el desarrollo sostenible entre naciones.
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado. Toda persona tiene derecho a salir  de cualquier país, incluso del propio, y a regresar a su país. 
            i.fas.fa-quote-right
      .col-5
        img(src='@/assets/curso/tema2/11.png', alt='').imagehide
    .mb-5
    .row
      .cajon.cajon-color-adicional-2.col-5.imagehide.p-4
        p La Carta de Turismo y el Código del Turista de 1985 establece que es deber de las autoridades públicas garantizar la protección integral de los turistas y visitantes, así como la seguridad de sus bienes. Reconociendo la particular vulnerabilidad de los turistas extranjeros, se señala la importancia de prestar especial atención a sus necesidades específicas. Para ello, se promueve la creación de mecanismos adecuados de información, prevención, protección, seguros y asistencia, orientados a salvaguardar su integridad durante la estancia en el destino.
      .col-3.p-2
        img(src='@/assets/curso/tema2/12.png', alt='').imagehide.imgajustada
      .col-4.p-2
        p Asimismo, la carta hace un llamado a los turistas y visitantes a respetar las leyes, costumbres y valores de las comunidades receptoras. Se invita a evitar cualquier acto que pueda considerarse ilegal, ofensivo o perjudicial para la población local o el entorno, promoviendo así un comportamiento responsable. También se establece la prohibición de participar en actividades como el tráfico de drogas, armas, antigüedades, especies protegidas, o el uso y transporte de sustancias peligrosas o prohibidas por las reglamentaciones nacionales.
    
    p En conjunto, este instrumento normativo internacional busca consolidar un turismo seguro, respetuoso y sostenible, que proteja tanto al visitante como al destino, y que fomente relaciones armónicas y éticas entre los diferentes actores del sector.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mb-5
        h2 2.2 Reglamentación legal  
    
    .row.justify-content-center
      .col-lg-5.col-md-10.imagetema1
        img(src='@/assets/curso/tema2/13.png', alt='')
      .col-lg-7
        p.mb-4 La reglamentación legal de un destino turístico se refiere al conjunto de normas, leyes y disposiciones que regulan las actividades tanto de los prestadores de servicios turísticos como de los turistas, con el fin de garantizar la calidad, sostenibilidad, seguridad y legalidad de la oferta turística. Estas normas abarcan diversos aspectos fundamentales, entre ellos: el registro y control de prestadores de servicios, la protección del patrimonio cultural y natural, la promoción del turismo sostenible, la prevención del tráfico ilegal de fauna, flora y bienes culturales, y la garantía de condiciones seguras y accesibles para todos los visitantes.
        p.mb-4 Este marco legal busca fomentar un turismo responsable y ordenado, que contribuya al desarrollo social, económico y ambiental del territorio, promoviendo además la conservación del patrimonio y el respeto por las comunidades receptoras.
    .mb-3
    .row
      .col-5.p-2
        p Normativa vigente que regula y protege la actividad turística en Colombia :
        p #[strong Ley 2068 de 2020:] Ley General de Turismo la cual establece los principios y lineamientos generales de la actividad turística en el país.
        p #[strong Ley 2068 de 2020, artículo 52:] enfatiza el papel del turismo en el desarrollo social, económico y cultural.
        p #[strong Ley 99 de 1993, artículo 3:] introduce el principio de desarrollo sostenible como eje transversal de las actividades económicas, incluido el turismo.
        p #[strong Decreto 1836 de 2021:] regula el Registro Nacional de Turismo (RNT), obligatorio para los prestadores de servicios turísticos.
        p #[strong Decreto 1379 de 2021:] regula el ejercicio del guionaje turístico en Colombia, estableciendo requisitos y competencias para los guías.
      .col-3
        img(src='@/assets/curso/tema2/14.png', alt='').imagehide.imgajustada2
      .col-4.p-2
        p #[strong Normas Técnicas Colombianas (NTC):] establecen estándares de calidad para distintos servicios turísticos, como alojamiento, gastronomía, guianza, entre otros.
        p #[strong Resolución 0958 de 2010:] define criterios para la calidad turística en diferentes modalidades del sector.
        p #[strong Ley 2111 de 2021:] modifica el Código Penal en relación con los delitos ambientales, incluyendo afectaciones al entorno por actividades turísticas irresponsables.
        p #[strong Ley 1185 de 2008:] modifica la Ley General de Cultura (Ley 397 de 1997) e incluye medidas para prevenir el tráfico ilícito del patrimonio cultural.
        p #[strong Decreto 190 de 2022, capítulo 8, secciones I, II y III:] define disposiciones relacionadas con la identificación, promoción y protección de atractivos turísticos en el ordenamiento territorial.
    .mb-3
    p En conjunto, este instrumento normativo internacional busca consolidar un turismo seguro, respetuoso y sostenible, que proteja tanto al visitante como al destino, y que fomente relaciones armónicas y éticas entre los diferentes actores del sector.
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Ley 2068 de 2020.
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172558#:~:text=La%20actividad%20tur%C3%ADstica%2C%20conforme%20al,la%20identidad%20cultural%20de%20las" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Aspectos clave de la reglamentación legal en destinos turísticos
    p La reglamentación legal del turismo abarca un conjunto de medidas orientadas a regular la actividad turística, garantizar su calidad, sostenibilidad y seguridad, y asegurar el cumplimiento de los deberes tanto de los prestadores de servicios como de los visitantes. Entre sus principales componentes se encuentran:
    .mb-5
    .row.prinslyder.justify-content-center
        .tarjeta.p-4.mb-5.tema4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Registro Nacional de Turismo (RNT)]
                p Todos los prestadores de servicios turísticos como  establecimientos de alojamiento, gastronomía, transporte turístico, agencias de viajes y operadores turísticos deben estar inscritos en el RNT. Este registro garantiza la identificación, legalidad y cumplimiento de los requisitos mínimos establecidos por la normativa nacional.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema2/15.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Obligaciones de los prestadores de servicios turísticos]
                p Los prestadores deben operar conforme a las actividades declaradas en el Registro Único Tributario (RUT) y la Cámara de Comercio, cumpliendo con la normativa del sector, la legislación tributaria y las obligaciones con la seguridad social. Además, deben respetar la diversidad cultural, adoptar buenas prácticas y brindar información veraz, clara y actualizada a los turistas.
              .col-lg-4.imagehide
                figure
                 img(src='@/assets/curso/tema2/16.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Protección de los atractivos turísticos]
                p Los territorios deben contar con normas específicas para la conservación, uso responsable y promoción de sus recursos turísticos, incluyendo la gestión sostenible de áreas protegidas y la prevención de afectaciones ambientales o culturales.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema2/17.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Calidad turística]
                p Se establecen estándares de calidad con el fin de asegurar que los servicios prestados cumplan con los criterios exigidos en cuanto a infraestructura, atención al cliente, seguridad y sostenibilidad, fortaleciendo la experiencia del visitante.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema2/18.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Normas territoriales específicas]
                p Pueden existir regulaciones particulares según el destino o jurisdicción, orientadas a regular el ingreso, uso y disfrute de atractivos turísticos, parques naturales o áreas de especial protección.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema2/19.png', alt='')
            .row
              .col-lg-1
              .col-lg-6.justify-content-center
                p #[strong Control y sanciones]
                p Entidades como el Ministerio de Comercio, Industria y Turismo (MinCIT), la Superintendencia de Industria y Comercio, las Autoridades Turísticas Territoriales, la Policía de Turismo y otras instituciones competentes tienen la facultad de inspeccionar, vigilar y sancionar a los actores del sector que incumplan la normativa vigente.
              .col-lg-4.imagehide
                figure
                  img(src='@/assets/curso/tema2/20.png', alt='')
    .mb-5
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Importancia de la reglamentación legal en el turismo
    p Una adecuada reglamentación legal contribuye significativamente a:
    .mb-5
    .row.tabscolor
      .col-9
        TabsA.color-acento-botones
          .tarjeta.p-4(titulo="Garantizar la calidad de los servicios turísticos")
            h4 Garantizar la calidad de los servicios turísticos
            p Mejora la experiencia del visitante y fortalece la reputación  del destino.
          .tarjeta.p-4(titulo="Proteger el patrimonio cultural y natural")
            h4 Proteger el patrimonio cultural y natural
            p Asegura la conservación de los atractivos para las generaciones futuras.
          .tarjeta.p-4(titulo="Fomentar el turismo sostenible")
            h4 Fomentar el turismo sostenible
            p Minimiza los impactos negativos sobre el medio ambiente y las comunidades receptoras.
          .tarjeta.p-4(titulo="Impulsar el desarrollo económico")
            h4 Impulsar el desarrollo económico
            p El turismo, como motor de crecimiento, debe gestionarse bajo principios de responsabilidad y equidad.
          .tarjeta.p-4(titulo="Velar por la seguridad de los turistas")
            h4 Velar por la seguridad de los turistas
            p Incluye la protección física, la prevención de fraudes, y la disponibilidad de asistencia en situaciones de emergencia.
      .col-3
        img(src='@/assets/curso/tema2/21.png', alt='').imagehide.imgajustada3
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu ABECÉ DE LA LEY GENERAL DE TURISMO LEY 2068 DE 2020
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://colombiasigueadelante.mincit.gov.co/colombia_sigue_adelante/media/archivos/pdf/ABECE-febrero-2021-Ley-de-Turismo.pdf" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
