// The names and order follow the microscope picker in Beam Time v2.7.
const microscopes = [
  ['spectra', 'Spectre 900', 'The Boxed Aristocrat'],
  ['talos', 'Talus F250Z', 'The Workhorse'],
  ['krios', 'Kryos G7', 'The Ice Princess'],
  ['arm', 'JEN-ARN250F', 'The Cold-FEG Samurai'],
  ['j2100', 'JEN-2200Plus', 'Old Reliable'],
  ['hf5000', 'HF7000', 'Triple Eye'],
  ['nion', 'UberSTEM 200', 'The UHV Hermit'],
  ['tensor', 'Tenzor', 'The 4D Native']
];
let selected = 3;
function browseInstrument(step) {
  selected = (selected + step + microscopes.length) % microscopes.length;
  const [id, model, nickname] = microscopes[selected];
  document.getElementById('instrument').src = 'art/' + id + '.png';
  document.getElementById('model').textContent = model;
  document.getElementById('nickname').textContent = nickname;
  document.getElementById('serial').textContent = 'TEM ' + String(selected + 1).padStart(2, '0') + ' / 08';
}
document.getElementById('prev').addEventListener('click', () => browseInstrument(-1));
document.getElementById('next').addEventListener('click', () => browseInstrument(1));
