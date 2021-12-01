import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

describe('Container component', () => {
  const props = {
    children: [
      <h1 key="title-1">Phonebook</h1>,
      <ContactForm key="contact-form" />,
      <h2 key="title-2">Contacts</h2>,
      <Filter key="filter" />,
      <ContactList key="contact-list" />,
    ],
  };

  const component = shallow(<Container {...props}></Container>);

  it('should render with props', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should render with children props', () => {
    expect(component.children()).toHaveLength(props.children.length);
  });

  it('should render exact prop', () => {
    expect(component.find('h1').exists()).toBeTruthy();
    expect(component.find('ContactList').exists()).toBeTruthy();
    expect(component.find('h2').exists()).toBeTruthy();
    expect(component.find('Filter').exists()).toBeTruthy();
    expect(component.find('ContactList').exists()).toBeTruthy();
  });

  it('should be empty if no props in component', () => {
    const props = {
      children: [],
    };

    const component = shallow(<Container {...props}></Container>);
    expect(component.children()).toHaveLength(0);
  });
});
