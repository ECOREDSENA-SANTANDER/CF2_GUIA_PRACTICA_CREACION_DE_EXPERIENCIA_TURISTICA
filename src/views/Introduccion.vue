<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.tipoturista
        .col-lg-1
          img(src='@/assets/curso/intro/1.svg', alt='').imagehide
        .col-lg-11
          p.mb-4 El turismo, como motor de desarrollo para las comunidades y los distintos territorios, no solo constituye una base fundamental para la economía local, sino que también impulsa la promoción de los bienes culturales, tanto tangibles como intangibles. Esta actividad favorece el fortalecimiento de la infraestructura, la organización de los oferentes, el crecimiento comunitario y la conservación de los recursos naturales y culturales.
    .mb-4
    .row.justify-content-center
      .col-lg-5.col-md-10.imagetema1
        img(src='@/assets/curso/intro/2.png', alt='')
      .cajon.col-lg-7.color-acento-contenido.p-3.p-md-4
        p.mb-4 Se caracteriza por su carácter incluyente, ya que permite la participación de todas las personas interesadas en formar parte del sector, promoviendo la creatividad en la oferta de actividades y servicios. Cada territorio posee una identidad única, reflejada en su cultura, tradiciones, paisajes, sitios históricos, festividades y gastronomía, lo cual permite generar experiencias memorables para quienes lo visitan. Esta dinámica favorece la organización comunitaria, orientada a ofrecer atención de calidad a los visitantes, y contribuye a mejorar la calidad de vida de las poblaciones locales a través de la generación de empleo, la activación del comercio, el fortalecimiento de la infraestructura, la educación y la preservación ambiental y cultural.
    .mb-5
    p.mb-4 Por tal razón, se presenta esta guía de apoyo, orientada a facilitar el conocimiento de los pasos esenciales para la elaboración de una experiencia turística, adaptable a cualquier territorio, con el propósito de estructurar propuestas que integren diversas actividades dentro de una experiencia completa y sostenible.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption

</template>

<script>
export default {
  name: 'Introduccion',
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
