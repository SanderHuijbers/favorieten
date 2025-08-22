// Helperfunctie om getallen netjes te formatteren
function formatNumber(num) {
    // Rond het getal eerst af op 2 decimalen om floating-point fouten te voorkomen
    const formattedNum = num.toFixed(2);
    
    // Controleer of de string eindigt op ".00"
    if (formattedNum.endsWith('.00')) {
        // Zo ja, retourneer het getal als geheel getal
        return formattedNum.slice(0, -3);
    } else {
        // Zo nee, retourneer het getal met 2 decimalen
        return formattedNum;
    }
}

function berekenPizzaDeeg() {
    // Stap 1: Lees de invoerwaarden
    const aantalPizzas = document.getElementById('aantalPizzas').value;
    const gewichtDeegbol = document.getElementById('gewichtDeegbol').value;
    // Zorg ervoor dat de waarden positieve nummers zijn
    if (aantalPizzas <= 0 || gewichtDeegbol <= 0) {
        alert("Voer positieve getallen in voor het aantal pizza's en het gewicht.");
        return;
    }
    // Stap 2: Voer de berekeningen uit
    const totaalDeeg = aantalPizzas * gewichtDeegbol;
    // Verhoudingen zoals we die eerder hebben vastgesteld
    const verhoudingBloemPoolish = 0.12;
    const verhoudingWaterPoolish = 0.12;
    const verhoudingGist = 0.0012;
    const verhoudingHoning = 0.0012;
    const verhoudingBloemTotaal = 0.62;
    const verhoudingWaterTotaal = 0.40;
    const verhoudingZout = 0.012;
    // Berekeningen voor de Poolish
    const bloemPoolish = totaalDeeg * verhoudingBloemPoolish;
    const waterPoolish = totaalDeeg * verhoudingWaterPoolish;
    const gistPoolish = totaalDeeg * verhoudingGist;
    const honingPoolish = totaalDeeg * verhoudingHoning;
    // Berekeningen voor het Hoofddeeg
    const bloemHoofddeeg = (totaalDeeg * verhoudingBloemTotaal) - bloemPoolish;
    const waterHoofddeeg = (totaalDeeg * verhoudingWaterTotaal) - waterPoolish;
    const zoutHoofddeeg = totaalDeeg * verhoudingZout;
    // Stap 3: Toon de resultaten in de HTML
    document.getElementById('bloemPoolish').textContent = formatNumber(bloemPoolish);
    document.getElementById('waterPoolish').textContent = formatNumber(waterPoolish);
    document.getElementById('gistPoolish').textContent = formatNumber(gistPoolish);
    document.getElementById('honingPoolish').textContent = formatNumber(honingPoolish);
    document.getElementById('bloemHoofddeeg').textContent = formatNumber(bloemHoofddeeg);
    document.getElementById('waterHoofddeeg').textContent = formatNumber(waterHoofddeeg);
    document.getElementById('zoutHoofddeeg').textContent = formatNumber(zoutHoofddeeg);
    
    // Nieuwe regels om het aantal en gewicht van de deegbollen te updaten
    document.getElementById('aantalDeegballenTekst').textContent = aantalPizzas;
    document.getElementById('gewichtDeegbolTekst').textContent = gewichtDeegbol;
}
// Voer de berekening uit bij het laden van de pagina met de standaardwaarden
window.onload = berekenPizzaDeeg;
