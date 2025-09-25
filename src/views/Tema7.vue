<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de contingencia
    .row.justify-content-center
      .col-lg-4.col-md-10
          img(src='@/assets/curso/tema7/1.png', alt='')
      .col-lg-8
        p.mb-3 Un plan de contingencia es un conjunto de procedimientos e instrucciones especiales que una empresa turística debe definir y aplicar cuando, aun siendo posible desarrollar las actividades de manera habitual, surgen condiciones o riesgos externos que requieren medidas adicionales para garantizar el adecuado funcionamiento del servicio.
        p.mb-4.cajon.color-acento-contenido.p-4 El objetivo principal de estos planes es minimizar los riesgos, con el propósito fundamental de proteger la vida e integridad física de los turistas, excursionistas y del personal vinculado, contando con herramientas de actuación en caso de incidentes o accidentes. Este plan constituye un componente esencial para cualquier empresa operadora de turismo, ya que representa una garantía para el desarrollo seguro de todas las fases del itinerario
    p.mb-4.mt-5 #[strong Enfoque de gestión:] Ciclo PHVA
    .row
      .col-1
      .col-md-2.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.licolor.sinborde
            p.text-center Planificar
      .col-md-2.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.colortj.sinborde
            p.text-center Hacer
      .col-md-2.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.licolor.sinborde
            p.text-center Verificar
      .col-md-2.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.colortj.sinborde
            p.text-center Actuar
      .col-1
    p.mb-5.mt-4 Un plan de contingencia debe mantenerse vigente y operativo, incluso después de haberse presentado una eventualidad. Su elaboración incluye cuatro etapas:
    .row
      .row.mb-4
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema7/2.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                h4.text-center.cajon-color-adicional-6 Planificar
                p.mb-0.text-center Definir metas y cómo lograrlas.
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema7/3.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                h4.text-center.cajon-color-adicional-6 Hacer
                p.mb-0.text-center Ejecutar las acciones planificadas.
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema7/4.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                h4.text-center.cajon-color-adicional-6 Verificar
                p.mb-0.text-center Evaluar los resultados obtenidos.
        .col-md-3.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema7/5.svg' alt='')
            .tarjeta.cajon-color-adicional-11
              .p-4
                h4.text-center.cajon-color-adicional-6 Actuar
                p.mb-0.text-center Corregir desviaciones y mejorar.
    .mb-5
    .row.acordeon
      .col-lg-7.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Aspectos clave del plan de contingencia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul--color
                  li 
                    i.fas.fa-brain
                    | Debe ser operativo y detallado, describiendo con claridad las acciones a seguir.
                  li 
                    i.fas.fa-brain
                    | Debe asignar responsabilidades específicas y definir los perfiles del personal encargado de la atención de emergencias.
                  li 
                    i.fas.fa-brain
                    | Debe incorporar un plan de emergencia, con recursos materiales y humanos previamente organizados para actuar de forma inmediata ante cualquier incidente.
          .row.col-xl-11.m-auto(titulo="El Plan de Emergencia debe permitir")
            .row.justify-content-center.align-items-center
              .col-lg-12
               ul.lista-ul--color
                  li 
                    i.fas.fa-brain
                    | Localizar rápidamente la emergencia.
                  li 
                    i.fas.fa-brain
                    | Eliminar o mitigar sus efectos.
                  li 
                    i.fas.fa-brain
                    | Proteger la vida y el bienestar de los involucrados.
          .row.col-xl-11.m-auto(titulo="Objetivos generales del plan de contingencia")
            .row.justify-content-center.align-items-center
              .col-lg-12
               ul.lista-ul--color
                li 
                  i.fas.fa-brain
                  | Minimizar pérdidas humanas, materiales y económicas.
                li 
                  i.fas.fa-brain
                  | Establecer objetivos específicos, claros y alcanzables.
                li 
                  i.fas.fa-brain
                  | Coordinar y asignar responsabilidades efectivamente.
                li 
                  i.fas.fa-brain
                  | Activar acciones inmediatas y organizadas frente a la contingencia.
      .col-lg-5
        img(src="@/assets/curso/tema7/6.png", alt="")
    .mb-4
    .row.col-6
      ul.lista-ul--color.lista-ul--separador
        li 
          i.lista-ul__vineta
          | #[strong Ejemplo: Plan de contingencia para un recorrido en un parque natural ]
          li.pb-2
    p.mb-4 Este tipo de recorrido se realiza en áreas protegidas, donde se requiere un manejo especial del entorno y los recursos naturales renovables. En estos espacios, los riesgos pueden ser de origen natural (como crecientes súbitas de ríos) o asociados a accidentes, enfermedades o mordeduras/picaduras de animales.
    p.mb-5 Recomendaciones generales: 
    .row
      .col-4
        ol.lista-ol--cuadro.mt-3
          li 
            .lista-ol--cuadro__vineta
              span a
            | Usar ropa y calzado adecuados para la zona a visitar.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Portar y aplicar repelente contra mosquitos e insectos.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Mantener una adecuada hidratación.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Seguir siempre las instrucciones del guía. 
          li 
            .lista-ol--cuadro__vineta
              span e
            | Respetar las medidas de protección ambiental del lugar. 
          li 
            .lista-ol--cuadro__vineta
              span f
            | Llevar agua potable suficiente. 
      .col-4
        img(src="@/assets/curso/tema7/7.png", alt="")
      .col-4
        ol.lista-ol--cuadro.mt-3
          li 
            .lista-ol--cuadro__vineta
              span g
            | Contar con un botiquín de primeros auxilios completo y adecuado.
          li 
            .lista-ol--cuadro__vineta
              span h
            | Transitar únicamente por senderos autorizados.
          li 
            .lista-ol--cuadro__vineta
              span i
            | Conocer los riesgos potenciales del entorno natural.
          li 
            .lista-ol--cuadro__vineta
              span j
            | Tener a la mano una lista de hospitales o centros de atención médica cercanos. 
          li 
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
