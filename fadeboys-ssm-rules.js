/* Load after RULES exists — Fade Boys / SSM Borang D */
(function () {
  if (typeof RULES === 'undefined' || !Array.isArray(RULES)) return;
  RULES.unshift(
    { test: /fade\s*boys|fadeboys|la0068592|202403134273/i, category: 'SSM_BorangD',
      folder: '05_Clients/Fade Boys Worldwide/01_Contracts & Agreements' },
    { test: /borang d|perakuan pendaftaran|akta pendaftaran perniagaan|ezbiz/i, category: 'SSM_BorangD',
      folder: '05_Clients/{CLIENT}/01_Contracts & Agreements' }
  );
})();
