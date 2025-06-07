// ==UserScript==
// @name         Controle volume code rousseau
// @version      1
// @description  Controler le volume sur le site du code rousseau.
// @author       Low
// @match        https://eleve.codesrousseau.fr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.background = '#2e2e2e';
    container.style.border = '1px solid #ccc';
    container.style.padding = '15px 20px';
    container.style.borderRadius = '50px';
    container.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.width = '300px';
  
    const minLabel = document.createElement('span');
    minLabel.textContent = '0%';
    minLabel.style.color = '#fff';
    minLabel.style.fontWeight = 'bold';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = '100';
    slider.style.flex = '1';
    slider.style.accentColor = '#aaa';


    const maxLabel = document.createElement('span');
    maxLabel.textContent = '100%';
    maxLabel.style.color = '#fff';
    maxLabel.style.fontWeight = 'bold';

    container.appendChild(minLabel);
    container.appendChild(slider);
    container.appendChild(maxLabel);
    document.body.appendChild(container);

    const setVolume = (value) => {
        const volume = value / 100;
        document.querySelectorAll('audio, video').forEach(el => {
            el.volume = volume;
        });
    };

    slider.addEventListener('input', (e) => {
        setVolume(e.target.value);
    });

    const observer = new MutationObserver(() => {
        setVolume(slider.value);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setVolume(slider.value);
})();
