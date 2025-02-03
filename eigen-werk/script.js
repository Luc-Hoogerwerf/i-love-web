function speelNoot() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const nootFrequentie = parseFloat(document.getElementById("noot").value);
    const sampleRate = audioContext.sampleRate;
    const bufferSize = Math.round(sampleRate / nootFrequentie);
    
    const buffer = audioContext.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);

    // ruis weg halen
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3000, audioContext.currentTime);

    const bufferSource = audioContext.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.loop = true;
    
    bufferSource.connect(filter);
    filter.connect(audioContext.destination);
    
    bufferSource.start();
    
    // tijd
    setTimeout(() => {
        bufferSource.stop();
    }, 1000);
}
