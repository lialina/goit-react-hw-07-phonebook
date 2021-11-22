import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactList from './components/ContactList/ContactList';

describe('App', () => {
  it('ContactList renders in App if loader and error are false', () => {
    const props = {
      isLoader: false,
      isError: false,
      contactsData: [],
    };

    const contactListComponent = shallow(
      <Provider store={store}>
        <ContactList {...props} />
      </Provider>,
    );
    expect(contactListComponent.exists()).toBeTruthy();
  });

  it('h2 with loader renders if loader is true', () => {
    const contactListComponent = shallow(<h2 isLoader={true}>Loading...</h2>);
    expect(contactListComponent.exists()).toBeTruthy();
  });

  it('h2 with error renders if error is true', () => {
    const error = '404 Not found';
    const contactListComponent = shallow(<h2 isError={true}>{error}</h2>);
    expect(contactListComponent.exists()).toBeTruthy();
  });
});
