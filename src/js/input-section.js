import { createComponent } from './input-list-component.js';

/**
 * Create input-list component.
 *
 * @param {HTMLElement} componentElem
 *
 * @returns {HTMLElement}
 */

export function createComponent(componentElem) {
  const templateElem = componentElem.querySelector('.app-tmp-section');

  const inputListContainer = templateElem.parentElement;

  const createInputComponent = () => {
    const inputContainer =
      templateElem.content.cloneNode(true).firstElementChild;

    inputListContainer.addEventListener('click', (ev) => {
      if (ev.target.matches('.app-cmd-remove-number-input')) {
        inputContainer.remove();
      }
    });

    inputListContainer.append(inputContainer);
  };

  componentElem.addEventListener('click', (ev) => {
    if (ev.target.matches('.app-cmd-add-number-input')) {
      createInputComponent();
    }
  });

  createInputComponent();
}
