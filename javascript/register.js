function preveriRegisterKodo() {
	let koda = document.getElementById("register-code");

	if (koda.value !== "123456") {
		document.getElementById("register-code-error").textContent = "Wrong code. Try 123456.";
		koda.setAttribute("aria-invalid", "true");
		koda.focus();
		return false;
	}

	koda.value = "";
	window.location.href = "register-password.html";
	return false;
}

function preveriRegisterGeslo() {
	let geslo = document.getElementById("register-password");

	if (geslo.value !== "Binance67!") {
		document.getElementById("register-password-error").textContent = "Use the test password Binance67!";
		geslo.setAttribute("aria-invalid", "true");
		geslo.focus();
		return false;
	}

	geslo.value = "";
	geslo.type = "password";
	document.getElementById("show-password").checked = false;
	window.location.href = "register-referral.html";
	return false;
}

function pokaziGeslo() {
	document.getElementById("register-password").type = document.getElementById("show-password").checked ? "text" : "password";
}

function pocistiRegisterNapako(id) {
	document.getElementById(id + "-error").textContent = "";
	document.getElementById(id).removeAttribute("aria-invalid");
}

function koncajRegistracijo() {
	let referral = document.getElementById("referral");

	if (referral.value !== "" && referral.value !== "BINANCE2026") {
		document.getElementById("referral-error").textContent = "Use BINANCE2026 or choose Skip.";
		referral.setAttribute("aria-invalid", "true");
		referral.focus();
		return false;
	}

	for (let obrazec of document.querySelectorAll("form")) {
		obrazec.reset();
	}
	obvestilo.fire({
		icon: "success",
		title: "Registracija je uspešna",
		text: "Testna registracija je končana. Pravi račun ni bil ustvarjen.",
		confirmButtonText: "Končano"
	}).then(function () {
		window.location.href = "register-success.html";
	});
	return false;
}

function preskociReferral() {
	document.getElementById("referral").value = "";
	pocistiRegisterNapako("referral");
	koncajRegistracijo();
}
