/* const firstNameField = document.querySelector('.group-firstName');

if (firstNameField) {
  const formGroup = document.createElement('div');
  formGroup.classList.add('form__group--name');

  const parentElement = firstNameField.parentElement;
  parentElement.insertBefore(formGroup, firstNameField);
  formGroup.appendChild(firstNameField);
}

const lastNameField = document.querySelector('.group-lastName');

if (lastNameField) {
  const formGroup = document.createElement('div');
  formGroup.classList.add('form__group--name');

  const parentElement = lastNameField.parentElement;
  parentElement.insertBefore(formGroup, lastNameField);
  formGroup.appendChild(lastNameField);
}
 */

// Get the elements to be wrapped
var firstNameGroup = document.querySelector('div.group-firstName');
var lastNameGroup = document.querySelector('div.group-lastName');

// Create the wrapper div
var wrapperDiv = document.createElement('div');
wrapperDiv.className = 'name--wrapper';

// Wrap the elements with the wrapper div
firstNameGroup.parentNode.insertBefore(wrapperDiv, firstNameGroup);
wrapperDiv.appendChild(firstNameGroup);
wrapperDiv.appendChild(lastNameGroup);

