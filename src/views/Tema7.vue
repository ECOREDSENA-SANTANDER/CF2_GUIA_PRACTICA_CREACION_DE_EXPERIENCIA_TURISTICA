<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de contingencia

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-10
        img(src='@/assets/curso/tema7/1.png', alt='')
      .col-lg-8
        p.mb-3 Un plan de contingencia es un conjunto de procedimientos e instrucciones especiales que una empresa turística debe definir y aplicar cuando, aun siendo posible desarrollar las actividades de manera habitual, surgen condiciones o riesgos externos que requieren medidas adicionales para garantizar el adecuado funcionamiento del servicio.
        .bg9.p-4
          p.mb-0 El objetivo principal de estos planes es minimizar los riesgos, con el propósito fundamental de proteger la vida e integridad física de los turistas, excursionistas y del personal vinculado, contando con herramientas de actuación en caso de incidentes o accidentes. Este plan constituye un componente esencial para cualquier empresa operadora de turismo, ya que representa una garantía para el desarrollo seguro de todas las fases del itinerario
    
    p.mb-0 #[strong Enfoque de gestión:] Ciclo PHVA
    
       
    .row.fondo7.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
         
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3
                .bg14.p-2
                  p.mb-0.text-center Planificar
              .col-lg-3
                .bg15.p-2
                  p.mb-0.text-center Hacer
              .col-lg-3
                .bg14.p-2
                  p.mb-0.text-center Verificar
              .col-lg-3
                .bg15.p-2
                  p.mb-0.text-center Actuar

    p.mb-2 Un plan de contingencia debe mantenerse vigente y operativo, incluso después de haberse presentado una eventualidad. Su elaboración incluye cuatro etapas:
    
    .row
      .row.mb-4
        .col-lg-3.col-md-6.mb-4.mb-lg-0
          .tarjeta-avatar
            img.img-t.my-3(src='@/assets/curso/tema7/2.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                .bg11.p-1.mb-4.mx-lg-3
                  h4.text-center.mb-0.ps-3.pe-3 Planificar
                p.mb-0.text-center Definir metas y cómo lograrlas.
        .col-lg-3.col-md-6.mb-4.mb-lg-0
          .tarjeta-avatar
            img.img-t.my-3(src='@/assets/curso/tema7/3.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                .bg11.p-1.mb-4.mx-lg-3
                  h4.text-center.mb-0.ps-3.pe-3 Hacer
                p.mb-0.text-center Ejecutar las acciones planificadas.
        .col-lg-3.col-md-6.mb-4.mb-lg-0
          .tarjeta-avatar
            img.img-t.my-3(src='@/assets/curso/tema7/4.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                .bg11.p-1.mb-4.mx-lg-3
                  h4.text-center.mb-0.ps-3.pe-3 Verificar
                p.mb-0.text-center Evaluar los resultados obtenidos.
        .col-lg-3.col-md-6.mb-4.mb-lg-0
          .tarjeta-avatar
            img.img-t.my-3(src='@/assets/curso/tema7/5.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                .bg11.p-1.mb-4.mx-lg-3
                  h4.text-center.mb-0.ps-3.pe-3 Actuar
                p.mb-0.text-center Corregir desviaciones y mejorar.
    .mb-5
    .row.acordeon.mb-5
      .col-lg-7.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Aspectos clave del plan de contingencia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Debe ser operativo y detallado, describiendo con claridad las acciones a seguir.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Debe asignar responsabilidades específicas y definir los perfiles del personal encargado de la atención de emergencias.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Debe incorporar un plan de emergencia, con recursos materiales y humanos previamente organizados para actuar de forma inmediata ante cualquier incidente.
          .row.col-xl-11.m-auto(titulo="El Plan de Emergencia debe permitir")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Localizar rápidamente la emergencia.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Eliminar o mitigar sus efectos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Proteger la vida y el bienestar de los involucrados.
          .row.col-xl-11.m-auto(titulo="Objetivos generales del plan de contingencia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Minimizar pérdidas humanas, materiales y económicas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Establecer objetivos específicos, claros y alcanzables.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Coordinar y asignar responsabilidades efectivamente.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0  Activar acciones inmediatas y organizadas frente a la contingencia.
      .col-lg-5
        img(src="@/assets/curso/tema7/6.png", alt="")
    
    .ia.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema3/ia.png', alt='')
        h3.mb-0.mx-2 Ejemplo: Plan de contingencia para un recorrido en un parque natural

    p.mb-4 Este tipo de recorrido se realiza en áreas protegidas, donde se requiere un manejo especial del entorno y los recursos naturales renovables. En estos espacios, los riesgos pueden ser de origen natural (como crecientes súbitas de ríos) o asociados a accidentes, enfermedades o mordeduras/picaduras de animales.
    
    p.mb-4 Recomendaciones generales: 

    .row
      .col-4
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span a
            | Usar ropa y calzado adecuados para la zona a visitar.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span b
            | Portar y aplicar repelente contra mosquitos e insectos.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span c
            | Mantener una adecuada hidratación.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span d
            | Seguir siempre las instrucciones del guía. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span e
            | Respetar las medidas de protección ambiental del lugar. 
          li.d-flex 
            .lista-ol--cuadro__vineta
              span f
            | Llevar agua potable suficiente. 
      .col-4
        img(src="@/assets/curso/tema7/7.png", alt="")
      .col-4
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span g
            | Contar con un botiquín de primeros auxilios completo y adecuado.
          li.d-flex
            .lista-ol--cuadro__vineta
              span h
            | Transitar únicamente por senderos autorizados.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span i
            | Conocer los riesgos potenciales del entorno natural.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span j
            | Tener a la mano una lista de hospitales o centros de atención médica cercanos. 
          li.d-flex
            .lista-ol--cuadro__vineta
              span k
            | Asegurarse de que el guía conozca previamente el lugar y pueda garantizar la seguridad del grupo.
    .mb-5

    .titulo6.mb-lg-5.mb-4.mb-md-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Determinación del riesgo 

    p.mb-5 #[strong Tabla 2.] Contiene ejemplo de riesgo y posible plan de acción 
    img(src="@/assets/curso/tema7/8.png", alt="")
    .mb-5
    .row
      .bloque-texto-g.cajon-color-adicional-7.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema7/9.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La identificación de riesgos y la formulación de planes de acción específicos permiten anticipar situaciones que puedan afectar la integridad de los turistas y el desarrollo normal de la experiencia. Esta planificación preventiva es fundamental para garantizar la seguridad durante las actividades, minimizar impactos negativos y actuar de manera oportuna ante cualquier eventualidad. Incorporar estos protocolos dentro del diseño del itinerario refuerza la confianza del visitante, asegura la calidad del servicio y demuestra un compromiso real con el bienestar del grupo y la sostenibilidad de la operación turística.
</template>

<script>
export default {
  name: 'Tema6',
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
