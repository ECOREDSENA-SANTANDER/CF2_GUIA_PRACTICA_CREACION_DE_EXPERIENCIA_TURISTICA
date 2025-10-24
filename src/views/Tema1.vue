<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Experiencia turística
        
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img.d-none.d-lg-block(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg-7
          p.mb-4 La experiencia turística es el conjunto de emociones, percepciones, aprendizajes y sensaciones que experimenta una persona a lo largo de todo el proceso vinculado a una actividad turística. Esta experiencia no se limita únicamente al consumo del producto o servicio turístico, sino que abarca cada una de las etapas del viaje: desde la planificación inicial, la elección del destino, el desplazamiento, la estadía, la interacción con el entorno natural y social, hasta la vivencia cultural, el trato recibido por los anfitriones y, finalmente, la memoria emocional que perdura tras el regreso.
          .bg1.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10
                p.mb-0 El valor de este tipo de vivencias radica no solo en la calidad de los servicios ofrecidos, sino también en la capacidad del destino para generar vínculos emocionales, fomentar el descubrimiento de nuevas realidades y brindar momentos significativos que contribuyan al crecimiento personal del visitante.
              .col-lg-2
                img.d-none.d-lg-block(src='@/assets/curso/tema1/6.svg', alt='')
  
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="a) Características de la experiencia turística")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-4 Una experiencia turística se compone de elementos emocionales, sensoriales y cognitivos que varían significativamente entre personas. A continuación, se presentan sus principales características:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Subjetividad:] cada experiencia es única, ya que depende de los intereses, expectativas, motivaciones y emociones del visitante.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Memorabilidad:] se busca que la vivencia genere recuerdos significativos y duraderos, impactando emocionalmente al turista.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Interactividad:] implica la participación activa del turista con el entorno, la comunidad, los recursos y las actividades del destino.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Autenticidad:] se valora el contacto con expresiones genuinas de la cultura local, como costumbres, tradiciones, historias y formas de vida.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Multisensorialidad:] estimula diversos sentidos mediante el paisaje, la gastronomía, la música, el arte, los aromas y texturas del entorno.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0  #[strong Transformación personal:] puede generar aprendizajes, cambios de percepción, reflexión y crecimiento personal, enriqueciendo la visión del mundo del viajero.
            .row.col-xl-11.m-auto(titulo="b) Tipos de experiencias turísticas")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-4 Las experiencias turísticas pueden clasificarse según los intereses y motivaciones del visitante. Entre las más representativas se encuentran:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia cultural:] basada en el descubrimiento del patrimonio histórico, artístico, religioso y de las manifestaciones culturales locales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia natural:] orientada al contacto con la naturaleza, paisajes, flora, fauna y actividades al aire libre como senderismo, avistamiento o ecoturismo.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia gastronómica:] centrada en la degustación, exploración y aprendizaje de la cocina típica del lugar, incluyendo técnicas, ingredientes y costumbres alimentarias.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia religiosa o espiritual:] relacionada con la fe, el turismo de peregrinación, la visita a sitios sagrados y la participación en rituales o celebraciones religiosas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia de aventura:] involucra actividades de alto impacto físico o emocional que generan adrenalina, como deportes extremos, recorridos desafiantes o retos naturales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[strong Experiencia urbana:] se desarrolla en contextos metropolitanos e incluye visitas a museos, compras, vida nocturna, eventos culturales y arquitectura contemporánea.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-4 #[strong Experiencia rural o comunitaria:] permite la convivencia con comunidades rurales, promoviendo el intercambio cultural, la participación en labores tradicionales y el conocimiento de formas de vida autóctonas.
    
                  .tarjeta.color-adicional-1.p-3.mb-0
                    .row.justify-content-around.align-items-center
                      .col-lg-2.col-md-2.mb-lg-0.mb-4.mb-md-0
                        img.img-a.img-t(src="@/assets/curso/tema1/3.svg")
                      .col-lg-10.col-md-10
                        .row.justify-content-between.align-items-center
                          .col-md-12.col-lg-9
                            h4.mb-2 COLOMBIA A LA MESA | Ministerio de Comercio Industria y Turismo.
                            p.mb-4.mb-md-4.mb-lg-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente video.
                          .col-md.col-lg-3
                            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=-_Vp10Ixwtk&t=37s" target="_blank")
                              span Ir al sitio
                              i.fas.fa-circle-play
  

            .row.col-xl-11.m-auto(titulo="c) Actividades")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p.mb-4 Las actividades que realiza un turista en un destino visitado se convierten en experiencias, ya sean  positivas o negativas de acuerdo a la expectativa que el turista tenga de ese destino. Influyen factores como el servicio, las facilidades del destino, la seguridad, los tipos de atractivos, entre otros. 
                  p.mb-4 Dentro de un destino se pueden realizar diversas actividades como:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Visitas guiadas a sitios históricos o patrimoniales
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Participación en festividades religiosas o culturales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Recorridos naturales, senderismo o ecoturismo.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Talleres gastronómicos o catas de productos locales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Actividades de turismo comunitario como artesanías o faenas agrícolas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Asistencia a eventos artísticos, conciertos o ferias.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Meditación, retiros espirituales o peregrinaciones. 
      
      
      .titulo.mb-5.mt-lg-3(data-aos="fade-right")
        img(:src="require('@/assets/curso/tema5/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Pasos para la creación de una experiencia turística 
      
      p.mb-4 De acuerdo con el tipo de experiencia local que se desee desarrollar, se deben tener en cuenta los siguientes pasos:

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6.mb-4
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex 
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 Identificar las necesidades e intereses de los turistas y visitantes.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 Definir el tipo de experiencia que se desea ofrecer: cultural, gastronómica, agroturística, comunitaria, ecoturismo, entre otras.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 Establecer el lugar o los lugares donde se llevará a cabo la experiencia.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 Precisar la actividad principal que se realizará con el turista o visitante, así como la duración de la misma. Es fundamental verificar si la actividad está dirigida a todo tipo de público o a un segmento específico del mercado.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span e
              p.mb-0 Coordinar la experiencia con los diferentes actores involucrados, garantizando su participación activa.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span f
              p.mb-0 Diseñar el itinerario, en caso de contar con varias actividades. Se deben definir los tiempos para cada una y organizarlas secuencialmente desde la primera hasta la última. Es clave agrupar los lugares por cercanía, trazar una ruta lógica que evite retrocesos innecesarios, optimizando así el tiempo y evitando molestias para el turista.
        .col-lg-6
          ol.lista-ol--cuadro.lista-ol--separador
            li.d-flex 
              .lista-ol--cuadro__vineta
                span g
              p.mb-0 Asignar un nombre a la ruta una vez esté definido el itinerario completo, y proceder a su implementación.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span h
              p.mb-0 Preparar la narrativa que se presentará al turista, incluyendo elementos del lugar, su historia y la experiencia como tal.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span i
              p.mb-0 Brindar un servicio al cliente de calidad desde el inicio, asegurando atención constante. Una atención cálida y profesional permite que el visitante se sienta valorado, y la calidad en la prestación de los servicios favorece la fidelización.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span j
              p.mb-0 Al finalizar la experiencia, ofrecer un espacio para la compra de #[em souvenirs] o recuerdos turísticos.
            li.d-flex 
              .lista-ol--cuadro__vineta
                span k
              p.mb-lg-0.mb-4 Aplicar una encuesta de satisfacción al término de la experiencia, con el fin de evaluar la percepción del turista respecto a la calidad del servicio prestado por los diferentes actores.
      
      .tarjeta.color-adicional-1.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 MANUAL DE DISEÑO Experiencias Turísticas
                p.mb-0 Para fortalecer el tema anteriormente abordado, se invita a consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe
      

</template>

<script>
export default {
  name: 'Tema1',
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
