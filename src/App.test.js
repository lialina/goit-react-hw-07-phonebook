import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import App from './App';
import { contactsMock } from './mocks/contactsMock';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('App', () => {
  const useSelectorMock = redux.useSelector;
  const useDispatchMock = redux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it('ContactList renders in App if loader is false and error is empty', () => {
    const mockStore = {
      contacts: {
        items: contactsMock,
        loader: false,
        error: '',
      },
    };

    useSelectorMock.mockImplementation(selector => selector(mockStore));
    const appComponent = shallow(<App />);
    expect(appComponent.find('ContactList').exists()).toBeTruthy();
  });

  it('h2 with loader renders if loader is true', () => {
    const mockStoreWithLoader = {
      contacts: {
        items: [],
        loader: true,
        error: '',
      },
    };

    useSelectorMock.mockImplementation(selector =>
      selector(mockStoreWithLoader),
    );
    const appComponent = shallow(<App />);
    expect(appComponent.find('.loader').exists()).toBeTruthy();
  });

  it('h2 with error renders if error is true', () => {
    const mockStoreWithError = {
      contacts: {
        items: [],
        loader: false,
        error: '404 Not found',
      },
    };

    useSelectorMock.mockImplementation(selector =>
      selector(mockStoreWithError),
    );
    const appComponent = shallow(<App />);
    expect(appComponent.find('.error').exists()).toBeTruthy();
  });
});
