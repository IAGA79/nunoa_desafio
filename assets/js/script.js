document.addEventListener('DOMContentLoaded', function() {
    const datos = document.getElementById('estadisticas');
    const dentalTableBody = document.getElementById('dental-table').querySelector('tbody');

    let radiologia = [
        {hora: "11:00", medico: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA"},
        {hora: "11:30", medico: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
        {hora: "15:00", medico: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
    ];

    let traumatologia = [
        {hora: "08:00", medico: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA"},
        {hora: "10:00", medico: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE"},
        {hora: "10:30", medico: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE"},
    ];

    let dental = [
        {hora: "08:00", medico: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
        {hora: "11:00", medico: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
        {hora: "11:30", medico: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
        {hora: "13:00", medico: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
        {hora: "13:30", medico: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
        {hora: "14:00", medico: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
    ];

    // Actualizando el DOM para mostrar las estadísticas
    estadisticas.innerHTML = `
        <h1>Estadísticas Centro Médico Ñuñoa</h1>
        <h4>Radiología</h4>
        <p>Primera Atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>
        <h4>Traumatología</h4>
        <p>Primera Atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>
        <h4>Dental</h4>
        <p>Primera Atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>
        <br>
    `;

   // Llenando la tabla de Dental
   let tableHTML = '';
   for (let i = 0; i < dental.length; i++) {
       tableHTML += `
           <tr>
               <td>${dental[i].hora}</td>
               <td>${dental[i].medico}</td>
               <td>${dental[i].paciente}</td>
               <td>${dental[i].prevision}</td>
           </tr>
       `;
   }
   dentalTableBody.innerHTML = tableHTML;
});

