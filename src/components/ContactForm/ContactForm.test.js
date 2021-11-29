import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('ContactForm component', () => {
  const handleSubmitMock = jest.fn();
  const props = { onSubmit: handleSubmitMock };

  const contactFormComponent = shallow(<ContactForm {...props} />);
  const label = contactFormComponent.find('label');
  const input = label.find('input');

  it('should render with props', () => {
    expect(contactFormComponent.exists()).toBeTruthy();
  });

  it('contains label tag', () => {
    expect(label).toHaveLength(2);
  });

  it('contains input tag', () => {
    expect(input).toHaveLength(2);
  });

  it('form submit', () => {
    const contactFormElement = contactFormComponent.find('form');
    contactFormElement.simulate('submit', { preventDefault: () => {} });
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('click on button with type submit in form', () => {
    const formButtonElement = contactFormComponent.find('button');
    formButtonElement.simulate('click');
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
