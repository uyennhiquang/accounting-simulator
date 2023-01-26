"use strict";

// TODO:
// Give user the option to add a debit or credit entry
// Decide on the best input form for data filling and stylization.

const createJournalBtn = document.querySelector(".create-journal");

const journalHeaderText = [
  "DATE",
  "ACCOUNT NAME",
  "DOC REF.",
  "POST REF.",
  "DEBIT",
  "CREDIT",
];

// Each time a new journal is created: the table count increments; a new table variable is pushed into the table list
const tableLists = [];
let tableCount = 0;

// Function that generates a row taking an array and boolean value as inputs. It will return a row of cell of the given length and can include or not include the name of the elements inside the array
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

// This function takes an integer aka tableIndex and adds the row in the appropriate table. To do so, the function assigns the variable currentActiveTable with the table having the given tableIndex - 1 inside tableLists array.
const createNewEntry = function (tableIndex) {
  const currentActiveTable = tableLists[tableIndex - 1];

  const entryRow = generateJournalSectionRow(
    journalHeaderText,
    journalHeaderText.length + 1,
    false
  );

  currentActiveTable.appendChild(entryRow);
  currentActiveTable.insertBefore(
    entryRow,
    document.getElementById(`add-entry-row--${tableIndex}`)
  );
};

// This function generates a table and an element in the tableLists array that is a copy of the generated table.
createJournalBtn.addEventListener("click", function () {
  tableCount++;
  tableLists.push(`table--${tableCount}`);
  let thisTable = tableLists[tableCount - 1];

  thisTable = document.createElement("table");

  // Generate caption
  const tableCaption = document.createElement("caption");
  const tableCaptionText = document.createTextNode("General Journal");

  tableCaption.appendChild(tableCaptionText);
  thisTable.appendChild(tableCaption);

  // Generate "Add Entry" row
  const rowAddEntry = document.createElement("tr");

  // Generate an <a> tag to make text clickable and executable, then create a text node to wrap inside <a> tags
  const clickableAddEntry = document.createElement("a");
  const textAddEntry = document.createTextNode("Add new entry");

  clickableAddEntry.href = "#";
  clickableAddEntry.setAttribute("id", "add-entry-click");
  clickableAddEntry.setAttribute("class", `${tableCount}`);
  clickableAddEntry.setAttribute(
    "onclick",
    "createNewEntry(this.className); return false;"
  );

  clickableAddEntry.appendChild(textAddEntry);

  const cellAddEntry = document.createElement("td");
  cellAddEntry.appendChild(clickableAddEntry);
  rowAddEntry.appendChild(cellAddEntry);
  cellAddEntry.setAttribute("colspan", journalHeaderText.length + 1); // length + 1 due to DATE spanning 2 columns

  cellAddEntry.setAttribute("id", "add-entry-cell");
  rowAddEntry.setAttribute("id", `add-entry-row--${tableCount}`);

  // Generate header elements and row to insert cells into
  const tableHeader = document.createElement("thead");
  const rowHeader = generateJournalSectionRow(
    journalHeaderText,
    journalHeaderText.length,
    true
  );

  tableHeader.appendChild(rowHeader);
  thisTable.appendChild(tableHeader);
  thisTable.appendChild(rowAddEntry);

  document.body.insertBefore(thisTable, createJournalBtn);
  tableLists[tableCount - 1] = thisTable;
});
