import { Locale } from './locale';

export const locale: Locale = {
  name: 'Polish',
  language: 'pl',
  items: [
    // General
    { source: 'Save', target: 'Zapisz' },
    { source: 'Create', target: 'Stwórz' },
    { source: 'Duplicating', target: 'duplikowanie' },
    { source: 'Duplicate', target: 'duplikuj' },
    { source: 'Mass Edit', target: 'Masowa edycja' },
    { source: 'Export', target: 'Eksportuj' },
    { source: 'Import', target: 'Importuj' },
    { source: 'Delete', target: 'Usuń' },

    // Fields
    { source: 'optional', target: 'opcjonalny' },
    { source: 'choose', target: 'wybierz' },
    { source: 'Clear value', target: 'Wyczyść wartość' },
    { source: 'loading...', target: 'ładowanie...' },
    { source: 'Nothing found', target: 'Nic nie znaleziono' },
    { source: 'Search...', target: 'Szukaj...' },
    { source: 'Enter at least {0} characters', target: 'Wpisz przynajmniej {0} znaków' },


    // List components
    { source: 'Filter', target: 'Filtruj' },
    { source: 'Filter by field', target: 'Filtruj według pola' },
    { source: 'Filter by...', target: 'Filtruj według...' },
    { source: 'Back', target: 'Wróć' },
    { source: 'Back to {0} fields', target: 'Wróć do {0} pól' },
    { source: 'Choose {0} from list', target: 'Wybierz {0} z listy' },
    { source: '{0} fields', target: '{0} pola' },
    { source: '{0} relationships', target: '{0} relacje' },
    { source: 'Aggregate {0}', target: 'Agreguj {0}' },
    { source: 'No fields to select', target: 'Brak pól do wyboru' },
    { source: 'Enter value...', target: 'Wpisz wartość...' },
    { source: 'Exclude', target: 'Wyklucz' },
    { source: 'Actions', target: 'Akcje' },
    { source: 'Search', target: 'Szukaj' },
    { source: 'Sort 1 → 9', target: 'Sortuj 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortuj 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortuj A → Z' },
    { source: 'Sort Z → A', target: 'Sortuj Z → A' },
    { source: 'Refresh automatically', target: 'Odśwież automatycznie' },
    { source: 'All', target: 'Wszystkie' },
    { source: 'Selected', target: 'Wybrane' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Niestety, nie znaleziono {0} pasujących do twojego zapytania'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Pobieramy {0}, proszę czekać...' },
    { source: 'Add filter', target: 'Dodaj filtr' },
    { source: 'Delete this filter', target: 'Usuń ten filtr' },
    { source: 'Toggle ordering', target: 'Przełącz sortowanie' },
    { source: 'Loading failed', target: 'Ładowanie nie powiodło się' },
    { source: 'Not configured', target: 'Nie skonfigurowano' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Niestety, ten komponent nie jest jeszcze skonfigurowany'
    },
    { source: 'records', target: 'rekordy' },
    { source: '{0} items', target: '{0} przedmioty' },


    // Menu
    { source: 'Users & Teams', target: 'Użytkownicy i zespoły' },
    { source: 'Billing', target: 'Rozliczenia' },
    { source: 'Billing & Plans', target: 'Rozliczenia i plany' },
    { source: 'API keys', target: 'Klucze API' },
    { source: 'Dark Mode', target: 'Tryb ciemny' },
    { source: 'Light Mode', target: 'Tryb jasny' },
    { source: 'Disable Staff', target: 'Wyłącz personel' },
    { source: 'Enable Staff', target: 'Włącz personel' },
    { source: 'Manage Templates', target: 'Zarządzaj szablonami' },
    { source: 'Logout', target: 'Wyloguj się' },
    { source: 'Activity Log', target: 'Dziennik aktywności' },
    { source: 'Collaborations', target: 'Współprace' },
    { source: 'Open Visual Builder', target: 'Otwórz konstruktor wizualny' },


   // Filters
    { source: 'equals', target: 'równa się' },
    { source: 'does not equal', target: 'nie równa się' },
    { source: '{0} equals {1}', target: '{0} równa się {1}' },
    { source: '{0} does not equal {1}', target: '{0} nie równa się {1}' },

    { source: 'contains', target: 'zawiera' },
    { source: 'does not contain', target: 'nie zawiera' },
    { source: '{0} contains {1}', target: '{0} zawiera {1}' },
    { source: '{0} not contains {1}', target: '{0} nie zawiera {1}' },

    { source: 'starts with', target: 'zaczyna się od' },
    { source: 'does not start with', target: 'nie zaczyna się od' },
    { source: '{0} starts with {1}', target: '{0} zaczyna się od {1}' },
    { source: '{0} does not start with {1}', target: '{0} nie zaczyna się od {1}' },

    { source: 'ends with', target: 'kończy się na' },
    { source: 'does not end with', target: 'nie kończy się na' },
    { source: '{0} ends with {1}', target: '{0} kończy się na {1}' },
    { source: '{0} does not end with {1}', target: '{0} nie kończy się na {1}' },

    { source: 'greater than', target: 'większy niż' },
    { source: 'is not greater than', target: 'nie jest większy niż' },
    { source: '{0} is greater than {1}', target: '{0} jest większy niż {1}' },
    { source: '{0} not greater than {1}', target: '{0} nie jest większy niż {1}' },

    { source: 'greater than or equals', target: 'większy lub równy' },
    { source: 'is not greater than or equals', target: 'nie jest większy ani równy' },
    { source: '{0} is greater than or equals {1}', target: '{0} jest większy lub równy {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nie jest większy ani równy {1}' },

    { source: 'less than', target: 'mniejszy niż' },
    { source: 'is not less than', target: 'nie jest mniejszy niż' },
    { source: '{0} is less than {1}', target: '{0} jest mniejszy niż {1}' },
    { source: '{0} is not less than {1}', target: '{0} nie jest mniejszy niż {1}' },

    { source: 'less than or equals', target: 'mniejszy lub równy' },
    { source: 'is not less than or equals', target: 'nie jest mniejszy ani równy' },
    { source: '{0} is less than or equals {1}', target: '{0} jest mniejszy lub równy {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nie jest mniejszy ani równy {1}' },

    { source: 'one of', target: 'jeden z' },
    { source: 'is one of', target: 'jest jednym z' },
    { source: 'is not one of', target: 'nie jest jednym z' },
    { source: '{0} is one of {1}', target: '{0} jest jednym z {1}' },
    { source: '{0} is not one of {1}', target: '{0} nie jest jednym z {1}' },

    { source: 'is null', target: 'jest nullem' },
    { source: 'is not null', target: 'nie jest nullem' },
    { source: '{0} is null', target: '{0} jest nullem' },
    { source: '{0} is not null', target: '{0} nie jest nullem' },

    { source: 'is future', target: 'jest przyszłością' },
    { source: 'in the future', target: 'w przyszłości' },
    { source: 'is not in the future', target: 'nie jest w przyszłości' },
    { source: '{0} is in the future', target: '{0} jest w przyszłości' },
    { source: '{0} is not in the future', target: '{0} nie jest w przyszłości' },

    { source: 'is past', target: 'jest przeszłością' },
    { source: 'in the past', target: 'w przeszłości' },
    { source: 'is not in the past', target: 'nie jest w przeszłości' },
    { source: '{0} is in the past', target: '{0} jest w przeszłości' },
    { source: '{0} is not in the past', target: '{0} nie jest w przeszłości' },

    { source: 'is Today', target: 'jest dzisiaj' },
    { source: 'today', target: 'dzisiaj' },
    { source: 'is not today', target: 'nie jest dzisiaj' },
    { source: '{0} is today', target: '{0} jest dzisiaj' },
    { source: '{0} is not today', target: '{0} nie jest dzisiaj' },

    { source: 'is Yesterday', target: 'było wczoraj' },
    { source: 'yesterday', target: 'wczoraj' },
    { source: 'is not yesterday', target: 'nie było wczoraj' },
    { source: '{0} is yesterday', target: '{0} było wczoraj' },
    { source: '{0} is not yesterday', target: '{0} nie było wczoraj' },

    { source: 'is Last Week', target: 'był w zeszłym tygodniu' },
    { source: 'last week', target: 'w zeszłym tygodniu' },
    { source: 'is not last week', target: 'nie był w zeszłym tygodniu' },
    { source: '{0} is last week', target: '{0} był w zeszłym tygodniu' },
    { source: '{0} is not last week', target: '{0} nie był w zeszłym tygodniu' },

    { source: 'is Last Month', target: 'był w zeszłym miesiącu' },
    { source: 'last month', target: 'w zeszłym miesiącu' },
    { source: 'is not last month', target: 'nie był w zeszłym miesiącu' },
    { source: '{0} is last month', target: '{0} był w zeszłym miesiącu' },
    { source: '{0} is not last month', target: '{0} nie był w zeszłym miesiącu' },


    { source: 'is Last Quarter', target: 'jest ostatnim kwartałem' },
    { source: 'last quarter', target: 'ostatni kwartał' },
    { source: 'is not last quarter', target: 'nie jest ostatnim kwartałem' },
    { source: '{0} is last quarter', target: '{0} jest ostatnim kwartałem' },
    { source: '{0} is not last quarter', target: '{0} nie jest ostatnim kwartałem' },

    { source: 'is Last Year', target: 'jest zeszłym rokiem' },
    { source: 'last year', target: 'zeszły rok' },
    { source: 'is not last year', target: 'nie jest zeszłym rokiem' },
    { source: '{0} is last year', target: '{0} jest zeszłym rokiem' },
    { source: '{0} is not last year', target: '{0} nie jest zeszłym rokiem' },

    { source: 'is Last X Days', target: 'jest z ostatnich X dni' },
    { source: 'last X days', target: 'ostatnie X dni' },
    { source: 'is not last X days', target: 'nie jest z ostatnich X dni' },
    { source: '{0} is last {1} days', target: '{0} jest z ostatnich {1} dni' },
    { source: '{0} is not last {1} days', target: '{0} nie jest z ostatnich {1} dni' },

    { source: 'is Current Week', target: 'jest bieżącym tygodniem' },
    { source: 'current week', target: 'bieżący tydzień' },
    { source: 'is not current week', target: 'nie jest bieżącym tygodniem' },
    { source: '{0} is current week', target: '{0} jest bieżącym tygodniem' },
    { source: '{0} is not current week', target: '{0} nie jest bieżącym tygodniem' },

    { source: 'is Current Month', target: 'jest bieżącym miesiącem' },
    { source: 'current month', target: 'bieżący miesiąc' },
    { source: 'is not current month', target: 'nie jest bieżącym miesiącem' },
    { source: '{0} is current month', target: '{0} jest bieżącym miesiącem' },
    { source: '{0} is not current month', target: '{0} nie jest bieżącym miesiącem' },

    { source: 'is Current Quarter', target: 'jest bieżącym kwartałem' },
    { source: 'current quarter', target: 'bieżący kwartał' },
    { source: 'is not current quarter', target: 'nie jest bieżącym kwartałem' },
    { source: '{0} is current quarter', target: '{0} jest bieżącym kwartałem' },
    { source: '{0} is not current quarter', target: '{0} nie jest bieżącym kwartałem' },

   { source: 'is Current Year', target: 'jest obecnym rokiem' },
    { source: 'current year', target: 'obecny rok' },
    { source: 'is not current year', target: 'nie jest obecnym rokiem' },
    { source: '{0} is current year', target: '{0} jest obecnym rokiem' },
    { source: '{0} is not current year', target: '{0} nie jest obecnym rokiem' },

    { source: 'is Previous Week', target: 'jest poprzednim tygodniem' },
    { source: 'previous week', target: 'poprzedni tydzień' },
    { source: 'is not previous week', target: 'nie jest poprzednim tygodniem' },
    { source: '{0} is previous week', target: '{0} jest poprzednim tygodniem' },
    { source: '{0} is not previous week', target: '{0} nie jest poprzednim tygodniem' },

    { source: 'is Previous Month', target: 'jest poprzednim miesiącem' },
    { source: 'previous month', target: 'poprzedni miesiąc' },
    { source: 'is not previous month', target: 'nie jest poprzednim miesiącem' },
    { source: '{0} is previous month', target: '{0} jest poprzednim miesiącem' },
    { source: '{0} is not previous month', target: '{0} nie jest poprzednim miesiącem' },

    { source: 'is Previous Quarter', target: 'jest poprzednim kwartałem' },
    { source: 'previous quarter', target: 'poprzedni kwartał' },
    { source: 'is not previous quarter', target: 'nie jest poprzednim kwartałem' },
    { source: '{0} is previous quarter', target: '{0} jest poprzednim kwartałem' },
    { source: '{0} is not previous quarter', target: '{0} nie jest poprzednim kwartałem' },

    { source: 'is Previous Year', target: 'jest poprzednim rokiem' },
    { source: 'previous year', target: 'poprzedni rok' },
    { source: 'is not previous year', target: 'nie jest poprzednim rokiem' },
    { source: '{0} is previous year', target: '{0} jest poprzednim rokiem' },
    { source: '{0} is not previous year', target: '{0} nie jest poprzednim rokiem' },

    { source: 'is Previous X Days', target: 'jest z poprzednich X dni' },
    { source: 'previous X days', target: 'poprzednie X dni' },
    { source: 'is not previous X days', target: 'nie jest z poprzednich X dni' },
    { source: '{0} is previous {1} days', target: '{0} jest z poprzednich {1} dni' },
    { source: '{0} is not previous {1} days', target: '{0} nie jest z poprzednich {1} dni' },

    { source: 'is empty', target: 'jest pusty' },
    { source: 'is not empty', target: 'nie jest pusty' },
    { source: '{0} is empty', target: '{0} jest pusty' },
    { source: '{0} is not empty', target: '{0} nie jest pusty' },

    { source: 'covered by', target: 'objęty przez' },
    { source: 'is not covered by', target: 'nie jest objęty przez' },
    { source: '{0} covered by {1}', target: '{0} objęty przez {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nie jest objęty przez {1}' },
  ]
};
