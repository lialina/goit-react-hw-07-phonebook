import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import ContactList from './ContactList';
import { contactsMock } from '../../mocks/contactsMock';

describe('ContactList component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');

  const props = {
    contactsData: contactsMock,
  };

  useSelectorMock.mockReturnValue({ error: '' });
  const contactList = shallow(<ContactList {...props} />);

  it('should render with props', () => {
    expect(contactList.exists()).toBeTruthy();
  });

  it('should be empty without props', () => {
    const props = { contactsData: [] };
    contactList.setProps(props);
    const ul = contactList.find('ul');
    const item = ul.find('ContactListItem');
    expect(item).toHaveLength(0);
  });
});
