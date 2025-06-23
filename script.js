document.addEventListener('DOMContentLoaded', (event) => {
    // Ustaw datę i godzinę, do której odliczasz
    // Przykład: 1 stycznia 2026, godzina 00:00:00
    const countdownDate = new Date("Aug 16, 2025 15:00:00").getTime();
    // Aktualizuj odliczanie co sekundę
    const x = setInterval(function() {

        // Pobierz aktualną datę i godzinę
        const now = new Date().getTime();
         // Oblicz różnicę między datą docelową a bieżącą datą
        const distance = countdownDate - now;
        // Obliczenia dla dni, godzin, minut i sekund
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
         // Wyświetl wynik w elemencie o id "countdown"
        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            // Jeśli odliczanie się skończyło, wyświetl komunikat
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "WYDARZENIE ROZPOCZĘTE!";
        }
    }, 1000); // Odświeżaj co 1 sekundę (1000 milisekund)
});