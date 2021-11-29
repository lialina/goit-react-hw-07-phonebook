import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import ContactList from './ContactList';
import { contactsMock } from '../../mocks/contactsMock';

describe('ContactList component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  const dispatchMock = jest.fn();
  const deleteContactClickMock = jest.fn();
  const props = { contactsData: contactsMock };
  const propsWithOnClick = {
    contactsData: contactsMock,
    onClick: () => deleteContactClickMock(props.contactsData.id),
  };

  it('should render with props', () => {
    useSelectorMock.mockReturnValue({ error: '' });
    useDispatchMock.mockReturnValue(dispatchMock);

    const component = shallow(<ContactList {...props} />);
    expect(component.exists()).toBeTruthy();
  });

  it('should be empty without props', () => {
    const props = { contactsData: [] };
    const component = shallow(<ContactList {...props} />);
    const ul = component.find('ul');
    const li = ul.find('li');
    expect(li).toHaveLength(0);
  });

  it('delete contact button renders in each contact', () => {
    const contactListComponent = shallow(<ContactList {...propsWithOnClick} />);
    const liButtonElement = contactListComponent.find('button');
    expect(liButtonElement).toHaveLength(3);
  });

  // Question - Received number of calls: 0 - async deleteContactClick testing
  it('click on delete contact button', () => {
    useSelectorMock.mockReturnValue({ error: '' });
    useDispatchMock.mockReturnValue(dispatchMock);

    const contactListComponent = shallow(<ContactList {...propsWithOnClick} />);
    const liButtonElement = contactListComponent.find('button').at(1);
    liButtonElement.simulate('click');
    expect(deleteContactClickMock).toHaveBeenCalledTimes(1);
  });
});
