$('.datepicker').pickadate({
min: true,
selectMonths: true,
selectYears: 2,
labelMonthNext: 'Nast.miesiąc',
labelMonthPrev: 'Poprz.miesiąc',
labelMonthSelect: 'Wybierz miesiąc',
labelYearSelect: 'Wybierz rok',
monthsFull: [ 'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień' ],
monthsShort: [ 'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru' ],
weekdaysFull: [ 'Niedziela', 'Poniedziałek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek', 'Sobota' ],
weekdaysShort: [ 'Nie', 'Pon', 'Wt', 'Śr', 'Cz', 'Pt', 'Sob' ],
weekdaysLetter: [ 'N', 'P', 'W', 'Ś', 'C', 'P', 'S' ],
today: 'Dziś',
clear: 'Wyczyść',
close: 'Zamknij',
format: 'dd/mm/yyyy'
});