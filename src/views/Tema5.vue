<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ciclo de servicio
    .row.justify-content-center
      .col-lg-4.col-md-10
          img(src='@/assets/curso/tema5/1.png', alt='')
      .col-lg-8
        p.mb-3 El ciclo de servicio al cliente se refiere al conjunto de etapas que tienen lugar desde el momento en que un usuario acude a una organización para adquirir un producto o solicitar un servicio, hasta que finaliza su experiencia con la percepción de haber recibido una atención satisfactoria. Este proceso no solo implica la entrega del bien o la prestación del servicio, sino también todo el entorno relacional que lo acompaña, incluyendo aspectos como el trato recibido, el tiempo de espera, la claridad en la información ofrecida, la atención postventa y la resolución de inquietudes.
        .d-flex.align-items-center.gap-3
          p.mb-2 Si bien los productos o servicios deben cumplir con estándares mínimos de calidad, la satisfacción del cliente no depende únicamente de ello. Factores como la actitud del personal, la capacidad de respuesta ante solicitudes, la comunicación efectiva y la percepción de valor agregado influyen de manera decisiva en la experiencia del usuario. Por esta razón, las organizaciones deben establecer protocolos claros de atención, formar al personal en competencias relacionales y realizar mejoras continuas en función de los resultados obtenidos en cada ciclo de servicio.
          img(src='@/assets/curso/tema5/2.svg', alt='').imgpeq.imagehide
    .mb-5
    .row
      .col-lg-8
        .cajon.cajon-color-adicional-4.p-4
         p.mb-3 Un ciclo inicia cuando el cliente formula una necesidad o solicitud, y culmina cuando dicha necesidad ha sido resuelta de manera satisfactoria. A lo largo de este proceso se producen interacciones clave entre el cliente y la organización, denominadas “momentos de la verdad”. Estos momentos representan instancias decisivas en las que el cliente forma una impresión del servicio, positiva o negativa, dependiendo de cómo haya sido tratado. Una sola experiencia desfavorable en estos momentos puede impactar negativamente la percepción general del servicio y reducir la probabilidad de recompra o recomendación.
      .col-lg-4.col-md-10.mt-2
          img(src='@/assets/curso/tema5/3.png', alt='')
    .mb-4
    .row 
      .d-flex.align-items-center.gap-3.mb-3
        img(src='@/assets/curso/tema5/4.svg', alt='').imagenpeq.imagehide
        p.mb-2 Por ello, las empresas deben prestar especial atención a la forma en que se desarrollan los momentos de la verdad, reconociendo su relevancia estratégica en la fidelización del cliente. El análisis del ciclo de servicio permite identificar fortalezas y debilidades en la interacción organización-cliente, lo que facilita el diseño de estrategias de mejora continua, tanto en los procesos operativos como en la gestión de relaciones.
    .mb-4
    .row
      .bloque-texto-g.cajon-color-adicional-7.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Finalmente, es fundamental comprender que el ciclo del servicio no debe asumirse como un conjunto mecánico de tareas. Lo esencial es cómo el cliente experimenta cada interacción. Una experiencia positiva, consistente y empática incrementa significativamente la posibilidad de que el cliente vuelva a elegir la organización y recomiende sus servicios. En este sentido, el ciclo del servicio al cliente representa una herramienta clave para la competitividad y sostenibilidad empresarial.
    .mb-4

    .titulo5.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Fases del ciclo de servicio

    p.mb-3 Las fases del ciclo de servicio representan las etapas que conforman la experiencia integral del cliente, desde el primer contacto con una organización hasta después de haber recibido el producto o servicio. Estas fases son fundamentales para comprender, gestionar y optimizar la calidad del servicio prestado, permitiendo a las organizaciones identificar oportunidades de mejora, fortalecer la relación con el cliente y garantizar una experiencia satisfactoria y coherente en cada punto de contacto.
    p.mb-0 A continuación, se describen las principales fases del ciclo de servicio:
    .mb-5
    .row.acordeon
      .col-lg-3
        img(src="@/assets/curso/tema5/6.png", alt="")
      .col-lg-9.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Acceso al servicio")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Corresponde al primer punto de contacto entre el cliente y la organización. Incluye aspectos como la visibilidad de la empresa, facilidad de ubicación, canales de contacto disponibles, tiempos de espera y la impresión inicial del entorno físico o digital. Esta etapa es clave, ya que suele influir en la disposición del cliente para continuar con el proceso de adquisición.
                .mb-4
          .row.col-xl-11.m-auto(titulo="Entrada al sistema")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Se refiere al momento en que el cliente decide hacer uso del servicio. En esta etapa se incluyen acciones como el registro, la reserva, la compra, la consulta de información o la recepción de instrucciones. La claridad en la comunicación, la facilidad de navegación (en servicios digitales), la amabilidad del personal y la eficiencia operativa son aspectos determinantes en esta fase.
                  .mb-4
          .row.col-xl-11.m-auto(titulo="Consumo o utilización del servicio")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Es la etapa central, donde el cliente experimenta directamente el servicio contratado. Por ejemplo, degustar una comida en un restaurante, disfrutar de una excursión turística o alojarse en un hotel. La calidad del servicio, la atención personalizada, la disponibilidad de recursos y la respuesta a necesidades específicas influyen directamente en la percepción general del cliente.
                  .mb-4
          .row.col-xl-11.m-auto(titulo="Salida del sistema")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Esta fase comprende el momento en que el cliente concluye la experiencia, como el check-out en un alojamiento, la finalización de un recorrido o el cierre de una consulta. Es fundamental que este cierre sea ágil, claro y amable, ya que representa la última impresión directa que el cliente se llevará de la organización.
                  .mb-4
          .row.col-xl-11.m-auto(titulo="Posconsumo")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Se refiere a las acciones posteriores a la experiencia, incluyendo la evaluación del servicio recibido, la posibilidad de presentar reclamaciones o felicitaciones, la generación de comentarios o reseñas y la decisión de recomendar o volver a adquirir el servicio. Esta fase es esencial para retroalimentar a la organización, identificar áreas de mejora y consolidar la fidelización del cliente.
    .mb-4
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-3 El análisis detallado de cada fase del ciclo de servicio permite a las organizaciones adoptar un enfoque más estratégico en la gestión de la experiencia del cliente. Cada interacción, por pequeña que sea, tiene el potencial de reforzar la percepción positiva o generar insatisfacción, por lo que la coherencia en la calidad del servicio a lo largo de todas las etapas es indispensable.
        .bg9.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img.img-t.img-a(src='@/assets/curso/tema5/8.svg', alt='')
            .col-lg-10
              p.mb-0 Además, comprender el ciclo de servicio no solo contribuye a elevar los estándares de atención, sino que también favorece la diferenciación competitiva en sectores donde la oferta puede ser similar. Una experiencia bien gestionada, centrada en el cliente y orientada a la mejora continua, se traduce en mayor fidelización, posicionamiento favorable en el mercado y sostenibilidad organizacional.
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema5/7.png', alt='')
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Momentos de verdad y ciclo de servicios 
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=gS_bamwpuhM" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
    separador

    #t_5_1.titulo-segundo.color-acento-contenido.mb-5
      h2 5.1 Narrativa
    .row.justify-content-center
      .col-lg-4.col-md-10
          img(src='@/assets/curso/tema5/10.png', alt='').imageheight.mt-4
      .col-lg-8
        .d-flex.align-items-center.gap-3
          p.mb-2 La narrativa es la forma en que se cuenta la historia de un destino y tiene como propósito conectar emocionalmente al turista con el lugar que visita. Este relato fortalece la identidad patrimonial, cultural y natural del destino, a la vez que enriquece la experiencia del turista al permitirle aprender sobre la cultura local y crear recuerdos significativos e inolvidables.
          img(src='@/assets/curso/tema5/9.svg', alt='').imgpeqt3.imagehide.mt-3
        p.mb-2.mt-4 La narrativa de un destino se transmite a través de un relato turístico, el cual debe ser directo, sencillo y vinculado a una experiencia concreta. Su objetivo es sorprender al visitante mediante datos originales y elementos distintivos del lugar. Este relato puede girar en torno a la historia de los antepasados, la descripción de un plato típico, la relevancia de un monumento, un sitio emblemático del destino o un personaje histórico de interés. De esta forma, se invita al turista a escapar momentáneamente de su rutina y sumergirse en otra realidad, donde su visión interior se fusiona con el entorno, generando valor, sentido y una conexión más profunda con la experiencia vivida.
    p.mb-3.mt-4 Cada destino turístico posee un relato, formal o informal, que puede ser contado de manera significativa y auténtica, logrando una conexión emocional con el visitante. Cuando dicho relato es coherente con los productos turísticos ofrecidos, se convierte en una herramienta clave para la definición, promoción y diferenciación de las experiencias turísticas en el territorio.
    
    p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 3.] Relación relato y experiencia turística.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg10.p-4.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-9
              img.mb-4.mt-4(src='@/assets/curso/tema5/11.svg', alt='Diagrama que representa la relación entre los componentes turísticos y la construcción del relato en una experiencia.')
        figcaption.mb-5 #[b Fuente:] Instituto del patrimonio turístico (2016). 
          p.mb-0 Autores varios (2018 p.4), Relatos turísticos: Propuestas para incorporar el patrimonio cultural y natural en los servicios y rutas turísticas de Arica y Camarones. Ediciones Universidad Central de Chile. https://www.ucentral.cl/ucentral/site/docs/20200110/20200110142007/relatos_turisticos_arica.pdf
    p.mb-4 La narrativa, expresada como un relato turístico, reúne las siguientes características:
    
    .row.fndd.p-4.p-lg-5.p-md-3.mb-5(data-aos="fade-down")
      .col-lg-12
        
        .row.justify-content-center.align-items-end.mb-0(data-aos="fade-left")
          .col-lg-4.col-md-5.col-7
            img.img-t.d-none.d-lg-block.mva(src='@/assets/curso/tema5/12.png', alt='')
          .col-lg-8.mb-lg-0.mb-4
            SlyderF(columnas="col-lg-6 col-md-6 col-xl-6")
              .tarjeta.tarjeta-btn.p-4.tarjeta--slyder.b2
                img.mb-4.img-t.img-a(src='@/assets/curso/tema5/13.svg', alt='')
                .title.mb-4
                  .bg11.p-1
                    h4.text-center.mb-0 Funcional
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-12
                    p.text-center Contribuye a reducir el nivel de desconocimiento sobre el destino, optimiza el tiempo de ubicación y desplazamiento, facilita la planificación de gastos durante el viaje y sugiere itinerarios y actividades específicas.
              .tarjeta.tarjeta-btn.p-4.tarjeta--slyder.b2
                img.mb-4.img-t.img-a(src='@/assets/curso/tema5/14.svg', alt='')
                .title.mb-4
                  .bg11.p-1
                    h4.text-center.mb-0 Comprensible
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-12
                    p.text-center Permite una fácil comprensión del destino, evitando contenidos complejos o excesivamente abstractos. Se centra en un mensaje principal, claro, simple e interesante.
              .tarjeta.tarjeta-btn.p-4.tarjeta--slyder.b2
                img.mb-4.img-t.img-a(src='@/assets/curso/tema5/15.svg', alt='')
                .title.mb-4
                  .bg11.p-1
                    h4.text-center.mb-0 Cercana
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-12
                    p.text-center Está dirigida directamente al lector, visitante o residente, utilizando un lenguaje dinámico, motivador y entretenido.
              .tarjeta.tarjeta-btn.p-4.tarjeta--slyder.b2
                img.mb-4.img-t.img-a(src='@/assets/curso/tema5/16.svg', alt='')
                .title.mb-4
                  .bg11.p-1
                    h4.text-center.mb-0 Tangible
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-12
                    p.text-center Invita al público a vivir una experiencia real, concreta y participativa.
              .tarjeta.tarjeta-btn.p-4.tarjeta--slyder.b2
                img.mb-4.img-t.img-a(src='@/assets/curso/tema5/17.svg', alt='')
                .title.mb-4
                  .bg11.p-1
                    h4.text-center.mb-0 Emotiva
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-12
                    p.text-center Se construye a partir de las prácticas culturales locales, generando una conexión emocional entre los habitantes del lugar y los visitantes.
    
    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de narrativa
    
    p.mb-4.mt-5 En el turismo se pueden identificar diversos tipos de narrativa, entre los cuales se destacan los siguientes:
    
    TabsC.color-primario
      .py-3.py-md-4(titulo="Narrativa sostenible").cajon-color-adicional-5
        .row
          .col-1
          .col-md-5.mb-4.mb-md-0.mt-3.p-4
            p #[strong Narrativa sostenible:] se enfoca en minimizar el impacto negativo sobre el medio ambiente y las comunidades locales. Promueve el uso responsable de los recursos naturales, la conservación del patrimonio cultural y la generación de beneficios económicos para la población del destino.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5/18.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Narrativa de naturaleza").cajon-color-adicional-5
        .row
          .col-1
          .col-md-5.mb-4.mb-md-0.mt-3.p-4
            p #[strong Narrativa de naturaleza:] está basada en la exploración y apreciación de los entornos naturales. Los viajeros buscan conectar con la naturaleza, realizar actividades al aire libre, disfrutar de la fauna y flora local, y comprender la importancia de conservar los ecosistemas.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5/19.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Narrativa cultural").cajon-color-adicional-5
        .row
          .col-1
          .col-md-5.mb-4.mb-md-0.mt-3.p-4
            p #[strong Narrativa cultural:] se centra en la inmersión en la cultura local. Los turistas desean conocer las tradiciones, costumbres, arte y gastronomía de los destinos que visitan. Esta narrativa fomenta la interacción con la población local, el aprendizaje de su estilo de vida y la valoración del patrimonio cultural.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5/20.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Narrativa de experiencias").cajon-color-adicional-5
        .row
          .col-1
          .col-md-5.mb-4.mb-md-0.mt-1.p-4
            p #[strong Narrativa de experiencias:] se orienta a ofrecer vivencias únicas y memorables. Propone actividades que permiten a los visitantes participar activamente en la vida cotidiana de las comunidades, como aprender a cocinar platos típicos, colaborar en proyectos de conservación o involucrarse en procesos artesanales, por ejemplo: la elaboración de vasijas de arcilla, papel artesanal, o productos en fique, entre otros.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5/21.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Narrativa de bienestar").cajon-color-adicional-5
        .row
          .col-1
          .col-md-5.mb-4.mb-md-0.mt-3.p-4
            p #[strong Narrativa de bienestar:] está dirigida al cuidado integral del cuerpo y la mente. Los viajeros eligen destinos y servicios que ofrecen actividades como spa, yoga, meditación, terapias alternativas y alimentación saludable. Su propósito es promover el equilibrio, la relajación y el bienestar durante el viaje.
          .col-md-5
            figure
              img(src='@/assets/curso/tema5/22.png', alt='Texto que describa la imagen')
    .mb-5

    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Técnicas de narrativa

    p.mb-4 Las técnicas de narrativa hacen referencia a los métodos y estructuras utilizados para desarrollar y presentar una historia de forma coherente, atractiva y convincente. Estas técnicas integran elementos como la trama, los personajes, el conflicto, el punto de vista y la estructura narrativa.
    p.mb-3 La narrativa puede adoptar distintas formas, tales como:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta-avatar
          img.imaa.mb-0.my-2(src='@/assets/curso/tema5/23.svg' alt='')
          .tarjeta.cajon-color-adicional-7
            .p-0
              p.mb-3.ps-3.pe-3.text-center Narrativa lineal, donde los acontecimientos se desarrollan en orden cronológico.
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta-avatar
          img.imaa.mb-0.my-2(src='@/assets/curso/tema5/24.svg' alt='')
          .tarjeta.cajon-color-adicional-7
            .p-0
              p.mb-3.ps-3.pe-3.text-center Narrativa no lineal, en la que la historia se presenta de forma fragmentada o a través de diferentes líneas de tiempo.
  

    p.mb-4.mt-3 A continuación, se describen algunas de las técnicas más comunes utilizadas en la narrativa turística:
    
    .row.fondo33.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12

        .row
          .col-lg-8
            TabsA.color-acento-botones.mod
              .tarjeta.p-4.bg5(titulo="<em>Storytelling</em>")
                h4 Storytelling
                p Consiste en contar historias cautivadoras que conectan con las emociones del turista, generando una experiencia auténtica y significativa.
              .tarjeta.p-4.bg5(titulo="Narrativa visual")
                h4 Narrativa visual
                p Emplea imágenes, videos y otros recursos visuales para narrar historias y transmitir emociones de forma efectiva.
              .tarjeta.p-4.bg5(titulo="Narrativa sensorial")
                h4 Narrativa sensorial
                p Apela a los cinco sentidos (vista, oído, olfato, gusto y tacto) con el fin de crear una experiencia inmersiva, envolvente y memorable.
              .tarjeta.p-4.bg5(titulo="Narrativa histórica")
                h4 Narrativa histórica
                p Incorpora hechos y relatos del pasado para contextualizar el destino, fomentando el interés cultural y la comprensión del patrimonio.
              .tarjeta.p-4.bg5(titulo="Narrativa personalizada")
                h4 Narrativa personalizada
                p Adapta el relato a los intereses, motivaciones y características específicas de cada tipo de turista, permitiendo una conexión más directa y significativa con la experiencia.
          .col-lg-4
            img(src='@/assets/curso/tema5/25.png', alt='')
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Storytelling EJEMPLO de Johnnie Walker | El hombre que caminó alrededor del mundo (en español)
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pHBLg_T0la8" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play  
    separador

    #t_5_2.titulo-segundo.color-acento-contenido.mb-5
      h2 5.2 Itinerario

    .row.justify-content-center
      .col-lg-8
        p.mb-4 Un itinerario turístico es un documento en el que se describen cronológicamente las actividades que se llevarán a cabo durante un viaje determinado. Es una herramienta fundamental para la organización, ya que permite planificar con anticipación aspectos como:
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            img(src='@/assets/curso/tema5/26.png', alt='')
          .col-lg-8
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 ¿Qué se hará durante el viaje?
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Sitios a visitar.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Actividades a realizar.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0  Horarios asignados para cada actividad.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Duración estimada de cada experiencia.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Fechas de inicio y finalización del recorrido.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0 Tiempos de traslado entre destinos.
              li.d-flex.mb-1
                i.fas.fa-circle-check
                p.mb-0  Espacios destinados al descanso y a la alimentación.
        
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema5/27.png', alt='').tarjeta1
    p.mb-4.mt-3 Además, un itinerario turístico especifica los lugares de interés que deben ser visitados por los turistas. Puede adaptarse a distintas temáticas o enfoques; por ejemplo, un itinerario gastronómico incluirá los lugares donde se pueden degustar los platos típicos de la región.
    .mb-5

    .titulo3.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Elementos de un itinerario

    p.mb-4.mt-3 Los principales elementos que componen un itinerario turístico son:
    .row
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/28.svg' alt='')
          .tarjeta.cajon-color-adicional-8
            .p-4
              p a) Tiempo: incluye fechas, horarios y duración estimada de cada actividad.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/29.svg' alt='')
          .tarjeta.cajon-color-adicional-8
            .p-4.mb-5
              p b) Turistas: personas que realizan el recorrido..
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/30.svg' alt='')
          .tarjeta.cajon-color-adicional-8
            .p-4.mb-4
              p c) Camino: rutas o vías por las cuales se desarrolla el itinerario.
      .col-lg-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/31.svg' alt='')
          .tarjeta.cajon-color-adicional-8
            .p-4
              p d) Puntos de llegada: sitios de interés seleccionados para ser visitados.
    .mb-3

    .titulo1.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de itinerarios

    p.mb-5.mt-3 Existen diversos tipos de itinerarios turísticos, según la tipología de turismo que se desee realizar y la ubicación geográfica de los atractivos. A continuación, se describen los más comunes:  
    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p a) Itinerario turístico cultural 
              p Centrado en la visita a lugares con valor arquitectónico, artístico, histórico, gastronómico o folclórico. Busca fomentar el conocimiento y la apreciación del patrimonio cultural del destino.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/32.png')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p b) Itinerario turístico natural
              p Diseñado para mostrar los atractivos de zonas con alto valor ambiental y paisajístico. Incluye paradas en espacios como miradores, cumbres o reservas naturales, que permiten admirar y contemplar el entorno.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/33.png')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p c) Itinerario turístico personalizado
              p Adaptado a los intereses y motivaciones específicas de quien lo diseña. Por ejemplo, un chef argentino de renombre internacional puede crear un recorrido por diversos restaurantes de alta cocina en la ciudad de Buenos Aires, explicando el motivo de cada parada. Este tipo de itinerario responde a un enfoque temático, como el gastronómico, y tiene un alto componente personal.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/34.png')})`}")
    .mb-5
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu Manual para la generación de rutas e itinerarios turísticos
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pHBLg_T0la8" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
    separador

    #t_5_3.titulo-segundo.color-acento-contenido.mb-5
      h2 5.3 Testeo de la experiencia

    .row.justify-content-center
      .col-lg-8
        p.mb-3 Se refiere a los métodos y técnicas mediante los cuales se evalúa cómo los visitantes perciben y valoran las experiencias vividas en un destino turístico. Esta evaluación puede realizarse a través de encuestas, escalas estructuradas, entrevistas o pruebas específicas que permiten medir dimensiones como la satisfacción, la autenticidad, la conexión emocional y el carácter memorable de la experiencia.
        p.mb-4 Para desarrollar una experiencia turística de calidad, es fundamental medir y controlar los servicios ofrecidos al turista o visitante.
      .col-lg-4.col-md-10.mt-1
        img(src='@/assets/curso/tema5/35.png', alt='')
    p.mb-5.mt-3 El instrumento de verificación para la medición y control de la experiencia permite:
    .row
      .col-lg-4.col-md-5
        img(src='@/assets/curso/tema5/36.png', alt='').mt-4
      .col-lg-8.col-md-7
        SlyderF.slyder3.circl-arrow.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/37.svg', alt='')
            .title.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center #[strong Garantizar la calidad del servicio:] confirma que todos los elementos necesarios (infraestructura, personal, insumos, equipos, entre otros) cumplen con los estándares de calidad previamente establecidos.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/38.svg', alt='')
            .title.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center #[strong Asegurar el cumplimiento de requisitos:] verifica que los prestadores de servicios turísticos cumplen con las normativas legales, de seguridad, ambientales y de sostenibilidad antes de recibir a los visitantes.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/39.svg', alt='')
            .title.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center #[strong Identificar y prevenir fallas:] detecta posibles deficiencias o riesgos que puedan afectar negativamente la experiencia, permitiendo su corrección anticipada.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/40.svg', alt='')
            .title.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center #[strong Optimizar la experiencia turística:] al asegurar que todo esté en orden, se mejora la satisfacción del visitante, lo cual fortalece la percepción positiva del destino y fomenta la fidelización.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/41.svg', alt='')
            .title.mb-4
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center #[strong Evaluar la preparación operativa:] permite medir el nivel de alistamiento de los servicios (transporte, guías, alojamiento, actividades, etc.) antes del inicio, garantizando que el itinerario se desarrolle sin contratiempos.
      p.mb-5 El instrumento de verificación para la medición y control de la experiencia permite:
      .row.sistema
        .col-lg-12.col-md-12
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Tabla 1.] Tabla de verificación de experiencias turísticas
          img(src='@/assets/curso/tema5/43.png', alt='')
      .mb-5

      .titulo6.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Encuesta de satisfacción 

      .mb-3
      .row.justify-content-center
        .col-lg-8
          .d-flex.align-items-center.gap-3
            img(src='@/assets/curso/tema5/44.svg', alt='').imagenpeq.imagehide
            p.mb-2 La encuesta de satisfacción es un instrumento utilizado para medir el grado de satisfacción de los clientes y su nivel de compromiso con una marca, producto o servicio. Aplicar este tipo de encuesta permite conocer de manera directa las percepciones, opiniones y expectativas de los usuarios.
          p.mb-2.mt-2 Actualmente, existen múltiples métodos para aplicar encuestas, pero las encuestas en línea se han consolidado como una de las alternativas más eficaces, debido a su bajo costo, facilidad de aplicación y rapidez en la recolección de datos. Este tipo de encuestas también permite identificar clientes insatisfechos y tomar acciones correctivas oportunas, evitando la pérdida de fidelidad hacia el producto o servicio.
        .col-lg-4.col-md-10
            img(src='@/assets/curso/tema5/45.png', alt='').imageheight3
      .mb-4
      p.mb-5 Una encuesta de satisfacción bien estructurada debe incluir preguntas que evalúen aspectos clave como:
      .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.mb-5
            .d-flex.align-items-center.gap-3
              img(src='@/assets/curso/tema5/45.svg', alt='').imagenpeq.mb-3
              p La calidad en la prestación del servicio.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .d-flex.align-items-center.gap-3
              img(src='@/assets/curso/tema5/46.svg', alt='').imagenpeq
              p La experiencia del cliente durante la interacción.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .d-flex.align-items-center.gap-3
              img(src='@/assets/curso/tema5/47.svg', alt='').imagenpeq.mb-3
              p La percepción general de satisfacción.
      p.mb-5 Es recomendable aplicar la encuesta inmediatamente después de la experiencia del usuario, para obtener respuestas más precisas y relevantes. Entre las herramientas digitales disponibles para diseñar encuestas de satisfacción, se destacan:
      .row
        .col-md-3.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.cajon-color-adicional-8.p-5.sinborde
            .tarjeta-numerada__numero
              img(src='@/assets/curso/tema5/48.svg', alt='').imgenpeq
            p.text-center.mb-5 #[strong Google Forms:] plataforma gratuita y accesible para crear formularios personalizados.
        .col-md-3.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.cajon-color-adicional-8.p-5.sinborde
            .tarjeta-numerada__numero
              img(src='@/assets/curso/tema5/49.svg', alt='').imgenpeq
            p.text-center.mb-5 #[strong Typeform:] ofrece formularios interactivos y visualmente atractivos.
        .col-md-3.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.cajon-color-adicional-8.p-5.sinborde
            .tarjeta-numerada__numero
              img(src='@/assets/curso/tema5/50.svg', alt='').imgenpeq
            p.text-center.mb-5 #[strong SurveyMonkey:] permite mayor profundidad en el análisis estadístico de las respuestas.
        .col-md-3.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.cajon-color-adicional-8.p-5.sinborde
            .tarjeta-numerada__numero
              img(src='@/assets/curso/tema5/51.svg', alt='').imgenpeq
            p.text-center.mb-4 #[strong Microsoft Forms:] integrada con el ecosistema de Office, ideal para entornos educativos y corporativos.´
      .mb-5
      .row.col-5
        ul.lista-ul--color.lista-ul--separador
          li 
            i.lista-ul__vineta
            | #[strong Ejemplo de encuesta de satisfacción:]
            li.pb-2
      p.mb-5 Por favor, califique los siguientes aspectos del servicio recibido, utilizando una escala del 1 al 5:
      .row
        .cajon.cajon-color-adicional-9.col-4.imagehide.p-4
          p.text-center.fondop #[strong Escala de valoración:]
          ol.lista-ol--cuadro.listajustada
            li 
              .lista-ol--cuadro__vineta
                span 1=
              | Muy insatisfecho
            li 
              .lista-ol--cuadro__vineta
                span 2=
              | Insatisfecho
            li 
              .lista-ol--cuadro__vineta
                span 3=
              | Neutral
            li 
              .lista-ol--cuadro__vineta
                span 4=
              | Satisfecho
            li 
              .lista-ol--cuadro__vineta
                span 5=
              | Muy satisfecho
        .col-3
          img(src='@/assets/curso/tema5/52.png', alt='').imagehide.imgajustada3
        .col-5.p-2
          .d-flex.align-items-center.gap-3.mb-3
            img(src='@/assets/curso/tema5/53.svg', alt='').imagenpeq.imagehide
          p.mt-5 Este ejemplo describe cómo se estructuran los ítems en una encuesta de satisfacción dirigida a usuarios o clientes que han recibido un servicio. El objetivo es que los participantes del curso comprendan cómo se formulan las preguntas, cómo se aplica una escala de valoración y qué aspectos clave deben evaluarse. Cada ítem está diseñado para recoger información específica sobre la experiencia del usuario, lo que permite identificar fortalezas y oportunidades de mejora en la prestación del servicio.
      .mb-4
      .row
        .col-1
        .col-lg-4
          img(src='@/assets/curso/tema5/54.png', alt='').imgajustada
          ol.lista-ol--cuadro.mt-5.cajon-color-adicional-8.p-4
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Amabilidad y atención del personal.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Tiempo de respuesta o atención.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Claridad de la información recibida.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Calidad del servicio prestado.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Instalaciones o medios utilizados.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Satisfacción general con la experiencia.
        .col-lg-6
          p.mb-4.titulo-sexto.color-acento-contenido #[strong Tabla 1.] Tabla de verificación de experiencias turísticas
          img(src='@/assets/curso/tema5/55.png', alt='')
        .col-1
    .mb-4
    .tarjeta.acordeoncolor.p-4.mb-0
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.blu GUÍA DE EVALUACIÓN DE LA EXPERIENCIA DEL VISITANTE, metodología en Áreas Protegidas
              p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pHBLg_T0la8" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
</template>

<script>
export default {
  name: 'Tema5',
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
