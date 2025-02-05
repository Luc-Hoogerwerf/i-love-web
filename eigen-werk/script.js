// // Maak de reverb met de juiste manier in v15.x
const reverb = new Tone.Reverb(2);  // Je kunt hier de decay tijd instellen
reverb.toDestination();  // Stuur het naar de bestemming (je speakers)

// // Maak de synth en verbind deze met de reverb
const synth = new Tone.Synth().connect(reverb);

const notes = document.querySelectorAll('.note');
notes.forEach((n) => {
    n.addEventListener('click', () => {
        synth.triggerAttackRelease(n.getAttribute('data-note'), "8n");
    })
})

// // Functie om een noot af te spelen
function playNote(note) {
  
}
