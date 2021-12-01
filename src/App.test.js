import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import App from './App';
import { contactsMock } from './mocks/contactsMock';

describe('App', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  const mockStore = {
    contacts: {
      items: contactsMock,
      loader: false,
      error: '',
    },
  };

  useDispatchMock.mockReturnValue(jest.fn());
  useSelectorMock.mockImplementation(selector => selector(mockStore));
  const appComponent = shallow(<App />);

  it('ContactList renders in App if loader is false and error is empty', () => {
    expect(appComponent.find('ContactList').exists()).toBeTruthy();
  });

  it('h2 with loader renders if loader is true', () => {
    useSelectorMock.mockImplementation(selector =>
      selector({ contacts: { ...mockStore.contacts, loader: true } }),
    );
    const appComponent = shallow(<App />);
    expect(appComponent.find('.loader').exists()).toBeTruthy();
  });

  it('h2 with error renders if error is true', () => {
    useSelectorMock.mockImplementation(selector =>
      selector({ contacts: { ...mockStore.contacts, error: '404 Not found' } }),
    );
    const appComponent = shallow(<App />);
    expect(appComponent.find('.error').exists()).toBeTruthy();
  });
});
