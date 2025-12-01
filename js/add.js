export function createComponent(componentElem) {
  const templateElem = componentElem.querySelector('.app-tmp-section');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-number-component is not found');
  }

  const inputListContainer = templateElem.parentElement;

  if (inputListContainer === null) {
    throw new Error('Template .app-tmp-number-component does not have parent');
  }

  const createInputComponent = () => {
    const inputContainer =
      templateElem.content.cloneNode(true).firstElementChild;

    sectionContainer.addEventListener('click', (ev) => {
      if (ev.target?.matches('.app-cmd-remove-number-input') ?? false) {
        inputContainer.remove();
      }
    });
    createInputComponent();

    sectionListContainer.append(inputContainer);
  };

  container.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-add-number-input')) {
      createInputComponent();
    }
  });

  createInputComponent();
}