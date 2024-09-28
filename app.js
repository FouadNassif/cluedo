const who = ["Green", "Mustard", "Peacock", "Plum", "Scarlet", "White"];
const what = ["Wrench", "Candlestick", "Dagger", "Pistol", "Lead Pipe", "Rope"];
const where = ["Bathroom", "Study", "Dining Room", "Games Room", "Garage", "Bedroom", "Living Room", "Kitchen", "Courtyard"];

let tableHTML = "<tr><td></td>";
for (let i = 0; i < 6; i++) {
    tableHTML += '<td><input type="text"></td>'
}

tableHTML += `
    </tr>
        <tr>
            <td>WHO?</td>
            <td colspan="6"></td>
        </tr>`

who.forEach((person, rowIndex) => {
    tableHTML += `<tr><td class="section-title">${person}</td>`;
    for (let i = 0; i < 7; i++) {
        tableHTML += `<td><button id="btn-who-${rowIndex}-${i}" onclick="cellAction(this.id)">O</button></td>`;
    }
    tableHTML += '</tr>';
});

tableHTML += `
    </tr>
        <tr>
            <td>What?</td>
            <td colspan="6"></td>
        </tr>`

what.forEach((item, rowIndex) => {
    tableHTML += `<tr><td class="section-title">${item}</td>`;
    for (let i = 0; i < 7; i++) {
        tableHTML += `<td><button id="btn-what-${rowIndex}-${i}" onclick="cellAction(this.id)">O</button></td>`;
    }
    tableHTML += '</tr>';
});

tableHTML += `
    </tr>
        <tr>
            <td colspan="6">Where?</td>
        </tr>`

where.forEach((place, rowIndex) => {
    tableHTML += `<tr><td class="section-title">${place}</td>`;
    for (let i = 0; i < 7; i++) {
        tableHTML += `<td><button id="btn-where-${rowIndex}-${i}" onclick="cellAction(this.id)">O</button></td>`;
    }
    tableHTML += '</tr>';
});
document.getElementById("table").innerHTML = tableHTML