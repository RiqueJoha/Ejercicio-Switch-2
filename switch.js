const selecOptionReserva = document.querySelector("select");
const ulOpcionesSeleccionadas = document.querySelector("ul");
const spanTitulOpciones = document.querySelector("#opciones-reserva span");
const divOpcionesReserva=document.querySelector("#opciones-reserva");

const OPC_1_CANT_DIAS = 1;
const OPC_2_CANT_DIAS = 3;
const OPC_3_CANT_DIAS = 7;

const OPC_1_DIA_INGRESO = "Lunes";
const OPC_2_DIA_INGRESO = "Miércoles";
const OPC_3_DIA_INGRESO = "Sábado";

const OPC_1_SERV_EXTRA = "Desayuno";
const OPC_2_SERV_EXTRA = "Desayuno y almuerzo";
const OPC_3_SERV_EXTRA = "Desayuno, almuerzo y cena";

const OPC_1 = 1;
const OPC_2 = 2;
const OPC_3 = 3;
const OPC_4 = 4;



let opcActual = OPC_1;


/**
 * Controla la generacion de la reserva
 */
function actualizarOpcion() {

    actualizarOpcSeleccionada();
    
    ActualizaOpcionesReserva();
}


/**
 * Actualiza la opción reserva a la correspondiente
 *
 */

function ActualizaOpcionesReserva() {
    switch (opcActual) {
        case OPC_1:
            actualizaInfo2();
            break;
        case OPC_2:
            actualizaInfo3();
            break;
        case OPC_3:
            actualizaInfo4();
            break;
        case OPC_4:
            InformaOpcionesTerminadas();
            break;
    }
    opcActual++;
}

/**
 * Actualiza la opcion de reserva a finalizado
 */

function InformaOpcionesTerminadas() {
    divOpcionesReserva.innerHTML=`<h2>Reserva Finalizada</h2>`;
}

/**
 *  * Actualiza la sección de reserva a la opción 4
 */
function actualizaInfo4() {
    spanTitulOpciones.innerHTML = "Seleccione servicio extra";
    selecOptionReserva.innerHTML =
        `<option value="${OPC_1_SERV_EXTRA}">${OPC_1_SERV_EXTRA}</option>
                        <option value="${OPC_2_SERV_EXTRA}">${OPC_2_SERV_EXTRA}</option>
                        <option value="${OPC_3_SERV_EXTRA}">${OPC_3_SERV_EXTRA}</option>`;
}

/**
 *  * Actualiza la sección de reserva a la opción 3
 */
function actualizaInfo3() {
    spanTitulOpciones.innerHTML = "Seleccione día de ingreso";
    selecOptionReserva.innerHTML =
        `<option value="Día de ingreso:${OPC_1_DIA_INGRESO}">${OPC_1_DIA_INGRESO}</option>
                        <option value="Día de ingreso:${OPC_2_DIA_INGRESO}">${OPC_2_DIA_INGRESO}</option>
                        <option value="Día de ingreso:${OPC_3_DIA_INGRESO}">${OPC_3_DIA_INGRESO}</option>`;
}

/**
 * Actualiza la sección de reserva a la opción 2
 */
function actualizaInfo2() {
    spanTitulOpciones.innerHTML = "Seleccione cantidad de días";
    selecOptionReserva.innerHTML =
                        `<option value="${OPC_1_CANT_DIAS} día">${OPC_1_CANT_DIAS}</option>
                        <option value="${OPC_2_CANT_DIAS} días">${OPC_2_CANT_DIAS}</option>
                        <option value="${OPC_3_CANT_DIAS} días">${OPC_3_CANT_DIAS}</option>
                        
                        `;
}

function actualizarOpcSeleccionada() {
    ulOpcionesSeleccionadas.innerHTML +=
        `<li>${selecOptionReserva.value}</li>`;
}

