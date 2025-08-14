// //your JS code here. If required.
let tbody=document.getElementById("book-list");
let title=document.getElementById("title")
let author=document.getElementById("author");
let isbn=document.getElementById("isbn");
let button=document.getElementById("submit")



function getBookDetails(){
	if(title.value=="" ||author.value=="" ||isbn.value==""){
		return;
	}
	let tr=tbody.insertRow();
	
	let td1=tr.insertCell();
	td1.textContent=title.value;
	
	let td2=tr.insertCell();
	td2.textContent=author.value;
	
	let td3=tr.insertCell();
	td3.textContent=isbn.value;
	
	let td4=tr.insertCell();
	let deleteButton=document.createElement("button");
	deleteButton.className="delete"
	deleteButton.textContent="Clear";
	td4.appendChild(deleteButton);
	
	
	
	title.value="";
	author.value="";
	isbn.value=""

	deleteButton.addEventListener("click",()=>{
		tr.remove();
	});

}

button.addEventListener("click",getBookDetails)


