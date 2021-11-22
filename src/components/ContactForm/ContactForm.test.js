import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('ContactForm component', () => {
  const props = {
    onSubmit: () => jest.fn(),
  };

  const handleSubmitMock = jest.fn();

  const component = shallow(<ContactForm {...props} />);
  const label = component.find('label');
  const input = label.find('input');

  it('should render with props', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('contains label tag', () => {
    expect(label).toHaveLength(2);
  });

  it('contains input tag', () => {
    expect(input).toHaveLength(2);
  });

  it('form submit', () => {
    const form = shallow(<form onSubmit={handleSubmitMock} />);
    form.simulate('submit');
    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it('click on button with type submit in form', () => {
    const form = shallow(
      <form onSubmit={handleSubmitMock}>
        <button type="submit"></button>
      </form>,
    );
    form.find('button').simulate('click');
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
