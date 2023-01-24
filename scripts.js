"use strict";

const createJournalBtn = document.querySelector(".create-journal");
const journalHeaderText = [
  "DATE",
  "ACCOUNT NAME",
  "DOC REF.",
  "POST REF.",
  "DEBIT",
  "CREDIT",
];

// Generate table objects
const table = document.createElement("table");

// Function that generates a row taking an array and boolean value as inputs. It will return a row of cell of the given length and can include or not include the name of the elements inside the array.
const generateJournalSectionRow = function (array, iteration, textInclude) {
  const row = document.createElement("tr");
  for (let i = 0; i < iteration; i++) {
    // Within each iteration, a cell is generated, then the cell text
    const cell = document.createElement("td");
    const cellText = textInclude
      ? document.createTextNode(array[i])
      : document.createTextNode("Pizza");
    // Lastly, the cell text is put within the cell tags (td) and the cell is put within the row (tr)
    cell.appendChild(cellText);
    row.appendChild(cell);
    if (textInclude && array[i] === "DATE") cell.setAttribute("colspan", `2`);
    else if (!textInclude) cell.setAttribute("class", "entry");
  }
  return row;
};

const createNewEntry = function () {
  // Generate 1 entry (2 rows) above "Add Entry" row
  for (let i = 0; i < 2; i++) {
    const entryRow = generateJournalSectionRow(
      journalHeaderText,
      journalHeaderText.length + 1,
      false
    );

    table.appendChild(entryRow);
    table.insertBefore(entryRow, document.getElementById("add-entry-row"));
  }
};

createJournalBtn.addEventListener("click", function () {
  // createJournalBtn.classList.add("hidden");

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
  clickableAddEntry.setAttribute("onclick", "createNewEntry(); return false;");
  clickableAddEntry.setAttribute("id", "add-entry-click");
  clickableAddEntry.appendChild(textAddEntry);

  const cellAddEntry = document.createElement("td");
  cellAddEntry.appendChild(clickableAddEntry);
  rowAddEntry.appendChild(cellAddEntry);
  cellAddEntry.setAttribute("colspan", journalHeaderText.length + 1); // length + 1 due to DATE spanning 2 columns

  cellAddEntry.setAttribute("id", "add-entry-cell");
  rowAddEntry.setAttribute("id", "add-entry-row");

  // Generate header elements and row to insert cells into
  const tableHeader = document.createElement("thead");
  const rowHeader = generateJournalSectionRow(
    journalHeaderText,
    journalHeaderText.length,
    true
  );

  tableHeader.appendChild(rowHeader);
  table.appendChild(tableHeader);
  table.appendChild(rowAddEntry);

  document.body.insertBefore(table, createJournalBtn);
});
