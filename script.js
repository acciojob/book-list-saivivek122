//your JS code here. If required.
let tbody=document.getElementById("book-list");
let author=document.getElementById("author");
let isbn=document.getElementById("isbn");
let button=document.getElementById("submit")



function getBookDetails(){
	if(title.value=="" ||author.value=="" ||isbn.value==""){
		return;
	}
	let tr=tbody.insertRow(0);
	let deleteButton=document.createElement("button");
	deleteButton.className="delete"
	deleteButton.textContent="delete";
	let td1=tr.insertCell();
	td1.className="tabledata"
	let td2=tr.insertCell();
	td2.className="tabledata"
	let td3=tr.insertCell();
	td3.className="tabledata"
	let td4=tr.insertCell();
	td4.appendChild(deleteButton);
	td1.textContent=title.value;
	td2.textContent=author.value;
	td3.textContent=isbn.value;
	title.value="";
	author.value="";
	isbn.value=""

	deleteButton.addEventListener("click",()=>{
		tr.remove();
	});

}




button.addEventListener("click",getBookDetails)
