// Datos del negocio que aparecen en las páginas legales. Se editan acá, en un solo lugar.
// Si un dato está vacío, esa línea no se muestra.
window.LEGAL = {
  titular: "Innova Nails",
  cuit: "",                                  // ← completar con el CUIT/CUIL de quien factura (ej. "20-12345678-9")
  domicilio: "Uriburu 228, Orán, Salta",
  whatsapp: "5493878213376",
  vuf: "https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
};
(function () {
  var L = window.LEGAL;
  document.querySelectorAll("[data-legal]").forEach(function (n) {
    var k = n.getAttribute("data-legal"), v = L[k] || "";
    if (k === "whatsapp" && v) { n.textContent = "+" + v.replace(/^(\d{2})(\d)(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3 $4-$5"); }
    else n.textContent = v;
    var fila = n.closest("[data-legal-fila]"); if (fila) fila.hidden = !v;
  });
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    if (L.whatsapp) a.href = "https://wa.me/" + L.whatsapp + "?text=" + encodeURIComponent(a.getAttribute("data-wa"));
    else a.hidden = true;
  });
  var pie = document.getElementById("pieLegal");
  if (pie) pie.innerHTML =
    '<div class="wrap"><nav aria-label="Información legal">' +
    '<a href="terminos.html">Términos y condiciones (contrato de adhesión – Ley 24.240)</a>' +
    '<a href="privacidad.html">Política de privacidad</a>' +
    '<a class="arrep" href="arrepentimiento.html">Botón de arrepentimiento</a>' +
    '<a class="arrep" href="arrepentimiento.html?tipo=baja">Botón de baja de servicio</a>' +
    '<a href="' + L.vuf + '" target="_blank" rel="noopener">Defensa de las y los Consumidores. Para reclamos, ingrese aquí</a>' +
    '</nav><div>© Innova Nails</div></div>';
})();
