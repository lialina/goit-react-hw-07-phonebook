import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// const mockDispatch = jest.fn();
// const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

const deleteContactMock = jest.fn();
jest.mock('../../redux/actions.js', () => ({
  deleteContact: deleteContactMock,
}));

describe('ContactList', () => {
  it('deleteContact dispatch action', () => {
    expect(deleteContactMock).toHaveBeenCalled();
  });
});
