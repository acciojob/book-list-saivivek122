//your JS code here. If required.
let title=document.getElementById("title");
let author=document.getElementById("author");
let isbn=document.getElementById("isbn");
let button=document.getElementById("submit")
let table=document.getElementById("book-list")


function getBookDetails(){
	if(title.value=="" ||author.value=="" ||isbn.value==""){
		return;
	}
	let tr=table.insertRow();
	let deleteButton=document.createElement("button");
	deleteButton.id="delete"
	deleteButton.textContent="delete";
	let td1=document.createElement("td");
	td1.className="tabledata"
	let td2=document.createElement("td");
	td2.className="tabledata"
	let td3=document.createElement("td")
	td3.className="tabledata";
	td1.textContent=title.value;
	td2.textContent=author.value;
	td3.textContent=isbn.value;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(deleteButton);
	title.value="";
	author.value="";
	isbn.value=""

	deleteButton.addEventListener("click",()=>{
		tr.remove();
	});

}




button.addEventListener("click",getBookDetails)
