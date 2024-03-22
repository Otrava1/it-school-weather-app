// Aici o sa avem logica pentru a ne extrage intr-un mod citibil data primita de la API (proprietatea dt de pe obiectul de la open weather API)

function getDayOfTheWeek (dateInUtc) {
    // Pentru ca data de la API este in UTC format, o sa o transform folosind obiectul Date din JS
    const date = new Date(dateInUtc * 1000);
    const dayIndex = date.getDay();
    let day;
    switch (dayIndex) {
        case 0:
            day ='Duminica';
            break;
        case 1:
            day = 'Luni';
            break;
        case 2:
            day = 'Marti';
            break;
        case 3:
            day = 'Miercuri';
            break;
        case 4:
             day = 'Joi';
             break;   
        case 5:
            day = 'Vineri';
            break;   
        case 6:
             day = 'Sambata';
             break;  
        default:
            // Aruncam o eroare daca indexul nu este valid
            throw new Error('Invalid day index');
    };
    // Returnam 
    return day;
};

function getHour (dateInUtc) {
    const date = new Date(dateInUtc * 1000);
    // Extragem ora folosind metoda getHours a obiectului Date
    // Daca ora este mai mica decat 10 o sa ii adaugam noi un 0 in fata
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    // Extragem minutele folosind o metoda de pe obiectul Date = getMinutes()
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    // Returnam ora sub formatul dorit
    return `${hours}:${minutes}`;
};