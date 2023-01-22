const createJournalBtn = document.querySelector(".create-journal");
const journalHeaderText = [
  "DATE",
  "ACCOUNT NAME",
  "DOC REF.",
  "POST REF.",
  "DEBIT",
  "CREDIT",
];
createJournalBtn.addEventListener("click", function () {
  createJournalBtn.classList.add("hidden");

  // Generate table objects
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");

  // Generate 1 row to insert cells into
  const row = document.createElement("tr");

  // Generate i cells
  for (let i = 0; i < journalHeaderText.length; i++) {
    // Within each iteration, a cell is generated, then the cell text
    const cell = document.createElement("td");
    const cellText = document.createTextNode(journalHeaderText[i]);

    // Lastly, the cell text is put within the cell tags (td) and the cell is put ithin the row (tr)
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tableHeader.appendChild(row);
  table.appendChild(tableHeader);
  document.body.appendChild(table);

  table.setAttribute("border", "1");
});
