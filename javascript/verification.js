function preveriKodo() {
	let koda = document.getElementById("verification-code");
	let napaka = document.getElementById("code-error");

	if (koda.value === "123456") {
		document.getElementById("verification-step").hidden = true;
		document.getElementById("verification-success").hidden = false;
		document.getElementById("success-title").focus();
		koda.value = "";
	} else {
		napaka.textContent = "Wrong code. Try 123456.";
		koda.setAttribute("aria-invalid", "true");
		koda.focus();
	}

	return false;
}

function pocistiNapako() {
	document.getElementById("code-error").textContent = "";
	document.getElementById("verification-code").removeAttribute("aria-invalid");
}
