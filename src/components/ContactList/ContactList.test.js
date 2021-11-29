import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import ContactList from './ContactList';
import { contactsMock } from '../../mocks/contactsMock';

describe('ContactList component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  const deleteContactClickMock = jest.fn();
  const props = {
    contactsData: contactsMock,
    onClick: deleteContactClickMock(),
  };

  useSelectorMock.mockReturnValue({ error: '' });
  useDispatchMock.mockReturnValue(jest.fn());
  const contactList = shallow(<ContactList {...props} />);

  it('should render with props', () => {
    expect(contactList.exists()).toBeTruthy();
  });

  it('delete contact button renders in each contact', () => {
    const contactListButton = contactList.find('button');
    expect(contactListButton).toHaveLength(3);
  });

  it('click on delete contact button', () => {
    const contactListButton = contactList.find('button').at(1);
    contactListButton.simulate('click');
    expect(deleteContactClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be empty without props', () => {
    const props = { contactsData: [] };
    contactList.setProps(props);
    const ul = contactList.find('ul');
    const li = ul.find('li');
    expect(li).toHaveLength(0);
  });
});
