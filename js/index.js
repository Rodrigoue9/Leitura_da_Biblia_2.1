document.addEventListener("DOMContentLoaded", function() {
    const ButtonSoundOn = document.querySelector('.sound-on');
    const ButtonSoundOff = document.querySelector('.sound-off');
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");

    // Define a propriedade loop para true para fazer a música de fundo repetir em um loop infinito
    bgAudio.loop = true;

    // Função para ligar o som
    function sound_on() {
        ButtonSoundOff.classList.remove('hide');
        ButtonSoundOn.classList.add('hide');
        bgAudio.play(); // Inicia a reprodução da música de fundo
    }

    // Função para desligar o som
    function sound_off() {
        ButtonSoundOff.classList.add('hide');
        ButtonSoundOn.classList.remove('hide');
        bgAudio.pause(); // Pausa a reprodução da música de fundo
    }

    // Adiciona um event listener para o botão de ligar o som
    ButtonSoundOn.addEventListener('click', sound_on);

    // Adiciona um event listener para o botão de desligar o som
    ButtonSoundOff.addEventListener('click', sound_off);
});