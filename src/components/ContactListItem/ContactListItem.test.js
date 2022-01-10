import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import ContactListItem from './ContactListItem';
import { contactsMock } from '../../mocks/contactsMock';
// import { deleteContact, getContacts } from '../../redux/actions';
import axios from 'axios';

axios.delete = jest.fn();
axios.get = jest.fn();

describe('ContactListItem component', () => {
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  const deleteContactClickMock = jest.fn();
  const [contact] = contactsMock;
  const { id, name, number } = contact;

  const props = {
    id: id,
    name: name,
    number: number,
    onClick: () => deleteContactClickMock,
  };
  // console.log(props);

  useDispatchMock.mockReturnValue(jest.fn());
  const contactListItem = shallow(<ContactListItem {...props} />);
  // console.log(contactListItem.debug());
  // const contactListButton = contactListItem.find('button');

  it('should render with props', () => {
    expect(contactListItem.exists()).toBeTruthy();
  });

  it('delete contact button renders in each contact', () => {
    const contactListButton = contactListItem.find('button');
    expect(contactListButton).toHaveLength(1);
  });

  // it('click on delete contact button', () => {
  //   axios.delete.mockResolvedValue({ status: 200 });
  //   axios.get.mockResolvedValue({ data: contactsMock, status: 200 });
  //   const contactListButton = contactListItem.find('button');
  //   console.log(contactListButton.debug());
  //   contactListButton.simulate('click');
  //   expect(deleteContactClickMock).toHaveBeenCalledTimes(1);
  // });
});
