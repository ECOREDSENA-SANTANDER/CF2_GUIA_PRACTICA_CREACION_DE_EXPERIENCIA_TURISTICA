<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Diseñar experiencias turísticas implica integrar elementos como el destino, los atractivos, la seguridad, la normativa legal y las facilidades del entorno. Es esencial considerar la capacidad de carga turística, los límites de cambio aceptable y la sostenibilidad. También se incorpora el uso de herramientas de geolocalización para ubicar y organizar de forma eficiente los recursos y recorridos. 
    p La narrativa turística permite conectar emocionalmente al visitante con el territorio, y se incorpora en el itinerario para dar coherencia y sentido a cada actividad. Antes de su implementación, la experiencia debe ser testeada para asegurar su calidad, seguridad y satisfacción del turista, aportando así al desarrollo local y al turismo responsable. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
