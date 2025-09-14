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
          img(src='@/assets/curso/tema5/2.svg', alt='').imgpeqt3.imagehide
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
        img(src='@/assets/curso/tema5/4.svg', alt='').imgpeqt3.imagehide
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
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Fases del ciclo de servicio
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
    .row.justify-content-center
      .col-lg-8
        p.mb-3 El análisis detallado de cada fase del ciclo de servicio permite a las organizaciones adoptar un enfoque más estratégico en la gestión de la experiencia del cliente. Cada interacción, por pequeña que sea, tiene el potencial de reforzar la percepción positiva o generar insatisfacción, por lo que la coherencia en la calidad del servicio a lo largo de todas las etapas es indispensable.
        .d-flex.align-items-center.gap-3
          img(src='@/assets/curso/tema5/8.svg', alt='').imgpeqt3.imagehide
          p.mb-4.cajon.color-acento-contenido.p-4 La información de ubicación recopilada es interpretada y representada visualmente a través de mapas digitales interactivos, permitiendo que la posición del usuario o del objeto rastreado sea visualizada en tiempo real. Esta funcionalidad es ampliamente utilizada en sectores como el transporte, la logística, el comercio, el marketing digital y, de manera significativa, en el turismo.
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
          img(src='@/assets/curso/tema5/10.png', alt='').imageheight.mt-1
      .col-lg-8
        .d-flex.align-items-center.gap-3
          p.mb-2 La narrativa es la forma en que se cuenta la historia de un destino y tiene como propósito conectar emocionalmente al turista con el lugar que visita. Este relato fortalece la identidad patrimonial, cultural y natural del destino, a la vez que enriquece la experiencia del turista al permitirle aprender sobre la cultura local y crear recuerdos significativos e inolvidables.
          img(src='@/assets/curso/tema5/9.svg', alt='').imgpeqt3.imagehide
        p.mb-2.mt-4 La narrativa de un destino se transmite a través de un relato turístico, el cual debe ser directo, sencillo y vinculado a una experiencia concreta. Su objetivo es sorprender al visitante mediante datos originales y elementos distintivos del lugar. Este relato puede girar en torno a la historia de los antepasados, la descripción de un plato típico, la relevancia de un monumento, un sitio emblemático del destino o un personaje histórico de interés. De esta forma, se invita al turista a escapar momentáneamente de su rutina y sumergirse en otra realidad, donde su visión interior se fusiona con el entorno, generando valor, sentido y una conexión más profunda con la experiencia vivida.
    p.mb-3.mt-4 Cada destino turístico posee un relato, formal o informal, que puede ser contado de manera significativa y auténtica, logrando una conexión emocional con el visitante. Cuando dicho relato es coherente con los productos turísticos ofrecidos, se convierte en una herramienta clave para la definición, promoción y diferenciación de las experiencias turísticas en el territorio.
    .row.sistema
      .col-lg-12.col-md-12
        p.mb-4.titulo-sexto.color-acento-contenido #[strong Figura 1.] Sistema turístico 
        img(src='@/assets/curso/tema5/11.png', alt='')
    p.mb-4.mt-5 La narrativa, expresada como un relato turístico, reúne las siguientes características:
    .row
      .col-lg-4.col-md-5.coltema5
        img(src='@/assets/curso/tema5/12.png', alt='').mt-3.imagetema5
      .col-lg-8.col-md-7
        SlyderF.slyder2.circl-arrow.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/13.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Funcional
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Contribuye a reducir el nivel de desconocimiento sobre el destino, optimiza el tiempo de ubicación y desplazamiento, facilita la planificación de gastos durante el viaje y sugiere itinerarios y actividades específicas.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/14.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Comprensible
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Permite una fácil comprensión del destino, evitando contenidos complejos o excesivamente abstractos. Se centra en un mensaje principal, claro, simple e interesante.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/15.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Cercana
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Está dirigida directamente al lector, visitante o residente, utilizando un lenguaje dinámico, motivador y entretenido.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/16.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Tangible
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Invita al público a vivir una experiencia real, concreta y participativa.
          .tarjeta.tarjeta-btn.p-4
            img.mb-3(src='@/assets/curso/tema5/17.svg', alt='')
            .title.mb-4
              h4.text-center.mb-0 Emotiva
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p.text-center Se construye a partir de las prácticas culturales locales, generando una conexión emocional entre los habitantes del lugar y los visitantes.
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Tipos de narrativa
    p.mb-4.mt-5 En el turismo se pueden identificar diversos tipos de narrativa, entre los cuales se destacan los siguientes:
    
    TabsC.color-acento-botones
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
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/tema1/4.svg")
      h3.ps-3.pe-4.mb-0 Técnicas de narrativa
    .mb-5
    .row
      .row.mb-4
        .col-1
        .col-md-5.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/23.svg' alt='')
            .tarjeta.cajon-color-adicional-7
              .p-4
                p.mb-0.text-center Narrativa lineal, donde los acontecimientos se desarrollan en orden cronológico.
        .col-md-5.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/24.svg' alt='')
            .tarjeta.cajon-color-adicional-7
              .p-4
                p.mb-0.text-center Narrativa no lineal, en la que la historia se presenta de forma fragmentada o a través de diferentes líneas de tiempo.
        .col-1
    p.mb-4.mt-3 A continuación, se describen algunas de las técnicas más comunes utilizadas en la narrativa turística:
    .row.tabscolor
      .col-8
        TabsA.color-acento-botones
          .tarjeta.p-4(titulo="Storytelling")
            h4 Storytelling
            p Consiste en contar historias cautivadoras que conectan con las emociones del turista, generando una experiencia auténtica y significativa.
          .tarjeta.p-4(titulo="Narrativa visual")
            h4 Narrativa visual
            p Emplea imágenes, videos y otros recursos visuales para narrar historias y transmitir emociones de forma efectiva.
          .tarjeta.p-4(titulo="Narrativa sensorial")
            h4 Narrativa sensorial
            p Apela a los cinco sentidos (vista, oído, olfato, gusto y tacto) con el fin de crear una experiencia inmersiva, envolvente y memorable.
          .tarjeta.p-4(titulo="Narrativa histórica")
            h4 Narrativa histórica
            p Incorpora hechos y relatos del pasado para contextualizar el destino, fomentando el interés cultural y la comprensión del patrimonio.
          .tarjeta.p-4(titulo="Narrativa personalizada")
            h4 Narrativa personalizada
            p Adapta el relato a los intereses, motivaciones y características específicas de cada tipo de turista, permitiendo una conexión más directa y significativa con la experiencia.
      .col-4
        img(src='@/assets/curso/tema5/25.png', alt='').imagehide.imgajustada3
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
