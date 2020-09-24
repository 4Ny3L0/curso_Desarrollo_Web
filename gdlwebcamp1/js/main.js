(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    //Mapa Leaflet

    var map = L.map("mapa").setView([8.9936, -79.5201], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([8.9936, -79.5201])
      .addTo(map)
      .bindPopup("Lugar del Evento.<br> GDLWEBCAMP ")
      .openPopup();

    let regalo = document.getElementById("regalo");
    // campos datos de usuario

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");

    //   campo pases

    let pase_dia = document.getElementById("pase_dia");
    let pase_completo = document.getElementById("pase_completo");
    let pase_dos_dias = document.getElementById("pase_dos_dias");

    //   botones y div

    let calcular = document.getElementById("calcular");
    let divError = document.getElementById("error");
    let botonRegistro = document.getElementById("btnRegistro");
    let resultado = document.getElementById("lista-productos");
    let suma = document.getElementById("suma-total");

    //   extras
    let camisas = document.getElementById("camisa_evento");
    let etiquetas = document.getElementById("etiquetas");

    //eventos
    calcular.addEventListener("click", calcularMontos);
    pase_dia.addEventListener("blur", mostrarDias);
    pase_dos_dias.addEventListener("blur", mostrarDias);
    pase_completo.addEventListener("blur", mostrarDias);
    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarMail);

    //   Funciones
    //   calcular monto
    function calcularMontos(e) {
      e.preventDefault();
      if (regalo.value == "") {
        alert("Debes elegir un regalo");
        regalo.focus();
      } else {
        let boletoDia = parseInt(pase_dia.value, 10) || 0,
          boleto2Dias = parseInt(pase_dos_dias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

        let totalPagar =
          boletoDia * 30 +
          boleto2Dias * 45 +
          boletoCompleto * 50 +
          cantCamisas * 10 * 0.93 +
          cantEtiquetas * 2;
        let listadoProductos = [];

        if (boletoDia >= 1) {
          listadoProductos.push(`${boletoDia} Pases por dia`);
        }
        if (boleto2Dias >= 1) {
          listadoProductos.push(`${boleto2Dias} Pases por dos dias`);
        }
        if (boletoCompleto >= 1) {
          listadoProductos.push(`${boletoCompleto} Pases por dias`);
        }
        if (cantCamisas >= 1) {
          listadoProductos.push(`${cantCamisas} Camisas`);
        }
        if (cantEtiquetas >= 1) {
          listadoProductos.push(`${cantEtiquetas} Etiquetas`);
        }
        resultado.style.display = "block";
        resultado.innerHTML = "";
        for (let i = 0; i < listadoProductos.length; i++) {
          resultado.innerHTML += listadoProductos[i] + "<br/>";
        }
        suma.innerHTML = `$ ${totalPagar.toFixed(2)}`;
        // console.log(totalPagar, listadoProductos);
      }
    } //Fin calcular montos

    //Funcion mostrar dias

    function mostrarDias() {
      let boletoDia = parseInt(pase_dia.value, 10) || 0,
        boleto2Dias = parseInt(pase_dos_dias.value, 10) || 0,
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

      let diasElegidos = [];
      if (boletoDia > 0) {
        diasElegidos.push("viernes");
      }
      if (boleto2Dias > 0) {
        diasElegidos.push("viernes", "sabado");
      }
      if (boletoCompleto > 0) {
        diasElegidos.push("viernes", "sabado", "domingo");
      }

      console.log(diasElegidos.length);

      for (let i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
      }
      if (diasElegidos.length == 0) {
        document.getElementById("viernes").style.display = "none";
        document.getElementById("sabado").style.display = "none";
        document.getElementById("domingo").style.display = "none";
      } else if (diasElegidos.length == 2) {
        document.getElementById("domingo").style.display = "none";
      }
    } //Fin funcion mostrar dias

    //funcion validar campos
    function validarCampos() {
      if (this.value == "") {
        divError.style.display = "block";
        divError.innerHTML = "este campo es obligatorio";
        this.style.border = "1px solid red";
        divError.style.border = "1px solid red";
      } else {
        divError.style.display = "none";
        this.style.border = "1px solid #cccccc";
      }
    } //fin funcion validar campos

    //funcion validar Mail
    function validarMail() {
      if (this.value.indexOf("@") > -1) {
        divError.style.display = "none";
        this.style.border = "1px solid #cccccc";
      } else {
        divError.style.display = "block";
        divError.innerHTML = "No es un correo valido";
        this.style.border = "1px solid red";
        divError.style.border = "1px solid red";
      }
    }
  });
})();

$(function () {
  $(".programa-evento .info-curso:first").show();
  $(".menu-programa a:first").addClass("activo");
  $(".menu-programa a").on("click", function () {
    $(".menu-programa a").removeClass("activo");
    const enlace = $(this).attr("href");
    $(".ocultar").hide();
    $(this).addClass("activo");
    $(enlace).fadeIn(1000);

    return false;
  });

  // Animaciones para los numeros
  $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 1200);
  $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200);
  $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1200);
  $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1200);

  // Conteo Regresivo
  $(".cuenta-regresiva").countdown("2020/10/10 09:00:00", (event) => {
    $("#dias").html(event.strftime("%D"));
    $("#horas").html(event.strftime("%H"));
    $("#minutos").html(event.strftime("%M"));
    $("#segundos").html(event.strftime("%S"));
  });

  //Lettering

  $(".nombre-sitio").lettering();
});
