function openTab(evt, tab) {
  var i, x, tablinks;
  x = document.getElementsByClassName("table-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");

  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";

  if (evt.currentTarget.className !== "active") {
    evt.currentTarget.className += " active";
  }
}

const json = [
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "failed",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "failed",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "failed",
  },
  {
    timeStamp: "9/12/2022, 09:22 am",
    reference: "Q64724E2",
    customerName: "Victor Adebowale",
    alias: "Vicky",
    country: "Nigeria",
    verificationOfficer: "Adelakun Tobiloba",
    status: "verified",
  },
];

function populateTable(data) {
  let placeholder, out;
  placeholder = document.querySelector("#data-output");
  out = "";
  for (let d of data) {
    out += `
      <tr class='table-hover'>
      <td>${d.timeStamp}</td>
      <td>${d.reference}</td>
      <td>${d.customerName}</td>
      <td>${d.alias}</td>
      <td>${d.country}</td>
      <td>${d.verificationOfficer}</td>
      <td style='display: flex; justify-content: center;'>${
        d.status === "verified"
          ? "<div class='verified'><p>Verified</p></div>"
          : "<div class='failed'><p>Failed</p></div>"
      }</td>
      <td align='center'>
        <div style="width: 100%; display: flex; justify-content: center; cursor: pointer;">
          <img src='../../assets/png/chevronRight.png' style="width: 20px; object-fit: contain; pointerEvent: none;"  />
        </div>
      </td>
      </tr>
    `;
  }
  console.log(data.length, data);
  placeholder.innerHTML = out;
}

populateTable(json);
