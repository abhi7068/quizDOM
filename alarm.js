var i = 0;
let alarm = {
	hour: "",
	minutes: "",
	info: ""                
};

function addAlarm() {         //to add alarm info//
  
  //i++;
  let hour = document.getElementById("hours").value;              //getting input values from user//
	let minutes = document.getElementById("minutes").value;
  let info = document.getElementById("info").value;

  let textHour = document.createTextNode(hour);                      //creating text-nodes //
	let textMinutes = document.createTextNode(minutes);
	let textInfo= document.createTextNode(info);                 
  let btn = document.createElement("button");
  btn.innerHTML = "remove";                                 //remove button for removing the alarm//
  let row = document.createElement("tr");           //creating rows//
  data1 = document.createElement("td");        //creating table data//
	data2 = document.createElement("td");           
	data3 = document.createElement("td");
  data4 = document.createElement("td");
  data1.appendChild(textHour);                            //appending the text node into the created td //
	data2.appendChild(textMinutes);
	data3.appendChild(textInfo);
	data4.appendChild(btn);
	row.appendChild(data1);                      //appending the td into the row//
	row.appendChild(data2);
	row.appendChild(data3);
  row.appendChild(data4);
  row.id = i;                            //row id to access the rows
	console.log(row);
	document.getElementById("new-table").appendChild(row);               //appending the row on table//
	btn.onclick = function() {                              //remove button function//
		var remove = document.getElementById(row.id);                        // accessing row id//
		document.getElementById("new-table").removeChild(remove);           //removing the row id on particlar row//
	};
}

function clearAlarm() {
	document.getElementById("hour").value = "";
	document.getElementById("minutes").value = "";
	document.getElementById("info").value = "";
}
    
  
  
  

 
  