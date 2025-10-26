// Nicht-lokalisierte Stammdaten – später einfach durch Sanity ersetzen
export type SiteData = {
  owner: string;
  praxis: string;
  street: string; // NBSP erlaubt
  city: string;
};

export const siteData = {
  owner: 'Tanja Schochow',
  praxis: 'Praxis Lebenswert',
  street: 'Wildenbruchstr.\u00A070', // \u00A0 = NBSP
  city: '12045 Berlin-Neukölln',
};
