document.addEventListener("input", function (dogodek) {
	let polje = dogodek.target;

	if (polje.matches("input[maxlength]") && polje.maxLength >= 0) {
		let omejitev = Math.min(polje.maxLength, 30);

		if (polje.value.length > omejitev) {
			polje.value = polje.value.slice(0, omejitev);
		}
	}
});

let obvestilo = Swal.mixin({
	background: "#1f232c",
	color: "#eaecef",
	buttonsStyling: false,
	heightAuto: false,
	customClass: {
		popup: "school-alert",
		confirmButton: "alert-confirm"
	}
});

let opozoriloPrebrano = false;

try {
	opozoriloPrebrano = sessionStorage.getItem("school-notice-seen") === "1";
} catch {
	opozoriloPrebrano = window.name === "school-notice-seen";
}

if (!opozoriloPrebrano) {
	obvestilo.fire({
		icon: "info",
		title: "To je lažna stran",
		text: "To je stran za šolsko nalogo, ne prava Binance stran. Uporabi samo testne podatke. Vneseni podatki se ne pošiljajo ali shranjujejo.",
		confirmButtonText: "Nadaljuj",
		allowOutsideClick: false,
		allowEscapeKey: false
	}).then(function () {
		try {
			sessionStorage.setItem("school-notice-seen", "1");
		} catch {
			window.name = "school-notice-seen";
		}
	});
}

function prikaziAvtorje() {
	obvestilo.fire({
		title: "Prvi šolski projekt HTML in CSS",
		text: "Avtor: Tomaž Štefančič.",
		confirmButtonText: "Zapri"
	});
}

function prikaziTestnoKodo() {
	obvestilo.fire({
		icon: "info",
		title: "Testna koda: 123456",
		confirmButtonText: "V redu"
	});
}
