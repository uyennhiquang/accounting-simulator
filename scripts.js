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
  // createJournalBtn.classList.add("hidden");

  // Generate table objects
  const table = document.createElement("table");

  // Generate caption
  const tableCaption = document.createElement("caption");
  const tableCaptionText = document.createTextNode("General Journal");

  tableCaption.appendChild(tableCaptionText);
  table.appendChild(tableCaption);

  // Generate "Add Entry" row
  const rowAddEntry = document.createElement("tr");

  // Generate an <a> tag to make text clickable and executable, then create a text node to wrap inside <a> tags
  const clickableAddEntry = document.createElement("a");
  const textAddEntry = document.createTextNode("Add new entry");
  clickableAddEntry.href = "#";
  clickableAddEntry.setAttribute("onclick", "newEntry(); return false;");
  clickableAddEntry.setAttribute("id", "add-entry-click");
  clickableAddEntry.appendChild(textAddEntry);

  const cellAddEntry = document.createElement("td");
  cellAddEntry.appendChild(clickableAddEntry);
  rowAddEntry.appendChild(cellAddEntry);
  cellAddEntry.setAttribute("colspan", journalHeaderText.length);
  cellAddEntry.setAttribute("id", "add-entry-cell");

  // Generate header elements and row to insert cells into
  const tableHeader = document.createElement("thead");
  const rowHeader = document.createElement("tr");

  // Generate header cells
  for (const headerText of journalHeaderText) {
    // Within each iteration, a cell is generated, then the cell text
    const cell = document.createElement("td");
    const cellText = document.createTextNode(headerText);

    // Lastly, the cell text is put within the cell tags (td) and the cell is put within the row (tr)
    cell.appendChild(cellText);
    rowHeader.appendChild(cell);
  }
  tableHeader.appendChild(rowHeader);
  table.appendChild(tableHeader);
  table.appendChild(rowAddEntry);
  // document.body.appendChild(table);

  document.body.insertBefore(table, createJournalBtn);
  // table.setAttribute("border", "1");
});
