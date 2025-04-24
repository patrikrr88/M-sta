// Filtrování tabulky podle města
document.getElementById("filterTableInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#tableBody tr");
    rows.forEach(row => {
      const city = row.children[1].textContent.toLowerCase();
      row.style.display = city.includes(filter) ? "" : "none";
    });
  });
  
  // Uložení původních možností selectu
  const select = document.getElementById("citySelect");
  const originalOptions = Array.from(select.options);
  
  // Filtrování výběrového menu
  document.getElementById("filterSelectInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    select.innerHTML = "";
    originalOptions.forEach(option => {
      if (option.text.toLowerCase().includes(filter)) {
        select.appendChild(option.cloneNode(true));
      }
    });
  
    // Pokud filtr prázdný, obnovit všechny možnosti
    if (filter === "") {
      select.innerHTML = "";
      originalOptions.forEach(option => select.appendChild(option.cloneNode(true)));
    }
  });
  
  // Zpracování odeslání formuláře
  document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCity = select.value;
    alert("Vybrané město: " + selectedCity);
    console.log("Vybrané město:", selectedCity);
    document.getElementById("resultMsg").textContent = "Odesláno: " + selectedCity;
  });
  