document.addEventListener('DOMContentLoaded', () => {
  const accordeons = document.querySelectorAll(".accordeon");

  accordeons.forEach(accordeon => {
    myAccordeon(accordeon);
  });

  function myAccordeon(accordeon) {
    const accordeonItems = accordeon.children;
    for(item of accordeonItems) {
      item.classList.add("accordeon__item");
      item.setAttribute('aria-expanded', false);
      item.setAttribute('tabindex', 0);

      const itemControl = item.firstElementChild;
      itemControl.classList.add("accordeon__control");

      const itemPanel = itemControl.nextElementSibling;
      itemPanel.classList.add("accordeon__panel", "panel-closed");
      itemPanel.setAttribute('aria-hidden', true);
    }

    accordeon.querySelector('.accordeon__item').classList.add("accordeon-active");
    accordeon.setAttribute('aria-expanded', true);

    const firstPanel = accordeon.querySelector('.accordeon-active .accordeon__panel');
    firstPanel.classList.remove('panel-closed');
    firstPanel.setAttribute('aria-hidden', false);
    firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
    firstPanel.classList.add('panel-opened');

    function togglePanels(eventTarget){
      const activeAccordeonItem = accordeon.querySelector('.accordeon-active');
      if (activeAccordeonItem) {
        if (activeAccordeonItem === eventTarget.parentNode) {
          hideAccordeonItem(accordeon)
        } else {
          hideAccordeonItem(accordeon);
          showAccordeonItem(eventTarget)
        }
      } else {
        showAccordeonItem(eventTarget)
      }
    }

    accordeon.addEventListener('keydown', function(event) {
      const eventTab = event.target.parentNode;
      if (event.target.classList.contains('accordeon__control')) {
        if ((event.keyCode === 13) || (event.keyCode === 32)) {
          event.preventDefault();
          togglePanels(event.target)
        }
        if ((event.keyCode === 38) && (eventTab.previousElementSibling !== null)) {
          event.preventDefault();
          eventTab.previousElementSibling.firstElementChild.focus()
        }
        if ((event.keyCode === 40) && (eventTab.nextElementSibling !== null)) {
          event.preventDefault();
          eventTab.nextElementSibling.firstElementChild.focus()
        }
      }
    });

    accordeon.addEventListener('click', (event) => {
      if (event.target.classList.contains('accordeon__control')) {
        togglePanels(event.target)
      }
    });
  }

  function showAccordeonItem(accordeonControl) {
    accordeonControl.parentNode.classList.add('accordeon-active');
    accordeonControl.parentNode.setAttribute('aria-expanded', true);
    const panel = accordeonControl.nextElementSibling;
    panel.classList.remove('panel-closed');
    panel.setAttribute('aria-hidden', false);
    panel.classList.add('panel-opened');
    const scrollHeight = panel.scrollHeight;

    const heightFraction =  scrollHeight / 30;

    let currentHight = 0;
    let timer = setInterval(() => {
      currentHight = currentHight + heightFraction;
      panel.style.maxHeight = currentHight + "px";
        if (currentHight > scrollHeight) {
          clearInterval(timer);
        };
    }, 1);
  }

  function hideAccordeonItem(accordeon) {
    const activeHeader = accordeon.querySelector('.accordeon-active');
    if (activeHeader) {
      const activePanel = activeHeader.lastElementChild;
      activePanel.classList.remove('panel-opened');
      activePanel.classList.add('panel-closed');
      activeHeader.setAttribute('aria-expanded', false);
      activePanel.setAttribute('aria-hidden', true);
      activePanel.style.maxHeight = null;
      activeHeader.classList.remove('accordeon-active');
    }
  }

  let shouldWait = false;
  window.addEventListener('resize', () => {
    const openedPanels = document.querySelectorAll('.accordeon__panel.panel-opened');
    openedPanels.forEach(panel => {
      if(shouldWait) {
        return
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        shouldWait = true;
        setTimeout(() => {
          shouldWait = false
        }, 250);
      }      
    });
  });
})
