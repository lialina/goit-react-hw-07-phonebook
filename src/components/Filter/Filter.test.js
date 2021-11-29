import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter/Filter';

describe('Filter component', () => {
  const onChangeMock = jest.fn();

  const props = {
    value: 'aaa',
    onChange: onChangeMock,
  };

  const component = shallow(<Filter {...props} />);
  const label = component.find('label');
  const input = label.find('input');

  it('should render with props', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('contains label tag', () => {
    expect(label).toHaveLength(1);
  });

  it('contains input tag', () => {
    expect(input).toHaveLength(1);
  });

  describe('label tag', () => {
    it('label contains text', () => {
      expect(label.text()).toEqual('Find contacts by name');
    });
  });

  describe('input tag', () => {
    it('contains props', () => {
      expect(input.props().value).toEqual(props.value);
      expect(input.props().onChange).toEqual(props.onChange);
    });

    it('inputs type is text', () => {
      expect(input.props()).toHaveProperty('type', 'text');
    });

    it('input change', () => {
      input.simulate('change');
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
  });
});
