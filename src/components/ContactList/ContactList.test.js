import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import ContactList from './ContactList';

describe('ContactList component', () => {
  const props = {
    contactsData: [
      {
        id: '1',
        name: 'Gendalf',
        number: '355-78-19',
      },
    ],
  };

  const deleteContactClickMock = jest.fn();

  const component = shallow(
    <Provider store={store}>
      <ContactList {...props} />
    </Provider>,
  );

  it('should render with props', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should be empty without props', () => {
    const props = [];
    const component = shallow(
      <Provider store={store}>
        <ContactList {...props} />
      </Provider>,
    );
    const ul = component.find('ul');
    const li = ul.find('li');
    expect(li).toHaveLength(0);
  });

  it('click on delete contact button', () => {
    const li = shallow(
      <li>
        <button
          onClick={() => deleteContactClickMock(props.contactsData.id)}
        ></button>
      </li>,
    );
    li.find('button').simulate('click');
    expect(deleteContactClickMock).toHaveBeenCalled();
  });
});
