// //your JS code here. If required.
// let tbody=document.getElementById("book-list");
// let author=document.getElementById("author");
// let isbn=document.getElementById("isbn");
// let button=document.getElementById("submit")



// function getBookDetails(){
// 	if(title.value=="" ||author.value=="" ||isbn.value==""){
// 		return;
// 	}
// 	let tr=tbody.insertRow(0);
// 	let deleteButton=document.createElement("button");
// 	deleteButton.className="delete"
// 	deleteButton.textContent="delete";
// 	let td1=tr.insertCell();
// 	td1.className="tabledata"
// 	let td2=tr.insertCell();
// 	td2.className="tabledata"
// 	let td3=tr.insertCell();
// 	td3.className="tabledata"
// 	let td4=tr.insertCell();
// 	td4.appendChild(deleteButton);
// 	td1.textContent=title.value;
// 	td2.textContent=author.value;
// 	td3.textContent=isbn.value;
// 	title.value="";
// 	author.value="";
// 	isbn.value=""

// 	deleteButton.addEventListener("click",()=>{
// 		tr.remove();
// 	});

// }




// button.addEventListener("click",getBookDetails)


let tbody = document.getElementById("book-list");
		let titleInput = document.getElementById("title");
		let authorInput = document.getElementById("author");
		let isbnInput = document.getElementById("isbn");
		let button = document.getElementById("submit");

		function getBookDetails() {
			// prevent adding empty rows
			if (titleInput.value.trim() === "" || authorInput.value.trim() === "" || isbnInput.value.trim() === "") {
				return;
			}

			// create row
			let tr = tbody.insertRow();

			let td1 = tr.insertCell();
			td1.textContent = titleInput.value;

			let td2 = tr.insertCell();
			td2.textContent = authorInput.value;

			let td3 = tr.insertCell();
			td3.textContent = isbnInput.value;

			let td4 = tr.insertCell();
			let deleteButton = document.createElement("button");
			deleteButton.className = "delete";
			deleteButton.textContent = "Clear";
			td4.appendChild(deleteButton);

			// clear form inputs
			titleInput.value = "";
			authorInput.value = "";
			isbnInput.value = "";

			// delete functionality
			deleteButton.addEventListener("click", () => {
				tr.remove();
			});
		}

		button.addEventListener("click", getBookDetails);
