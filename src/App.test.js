import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { contactsMock } from './consts/contactsMock';
import * as ReactReduxHooks from './redux/react-redux-hooks';
import App from './App';
import 'jsdom-global/register';

describe('App', () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    /* mocking store */
    store = configureStore([thunk])({
      contacts: contactsMock,
      isLoading: false,
      error: null,
    });

    /* mocking useEffect */
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect(); // 2 times
    mockUseEffect(); //

    /* mocking useSelector on our mock store */
    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation(store => store.getState());

    /* mocking useDispatch on our mock store  */
    jest
      .spyOn(ReactReduxHooks, 'useDispatch')
      .mockImplementation(() => store.dispatch);

    /* shallow rendering */
    // wrapper = shallow(<App store={store} />);

    wrapper = mount(<App store={store} />);

    describe('on mount', () => {
      it('mockUseEffect', () => {
        expect(mockUseEffect).toHaveBeenCalled();
      });
    });
  });
});

// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState)
//   }

//   return next(action)
// }

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn()
//   }
//   const next = jest.fn()

//   const invoke = action => thunk(store)(next)(action)

//   return { store, next, invoke }
// }

// test('passes through non-function action', () => {
//   const { next, invoke } = create()
//   const action = { type: 'TEST' }
//   invoke(action)
//   expect(next).toHaveBeenCalledWith(action)
// })

// test('calls the function', () => {
//   const { invoke } = create()
//   const fn = jest.fn()
//   invoke(fn)
//   expect(fn).toHaveBeenCalled()
// })

// test('passes dispatch and getState', () => {
//   const { store, invoke } = create()
//   invoke((dispatch, getState) => {
//     dispatch('TEST DISPATCH')
//     getState()
//   })
//   expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
//   expect(store.getState).toHaveBeenCalled()
// })
