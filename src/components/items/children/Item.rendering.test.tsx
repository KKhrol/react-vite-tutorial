import { render, screen } from '@testing-library/react';

import { ItemInterface } from '../../../models/items/Item.interface';
import { ItemComponent } from './Item.component';

describe('Item.component: rendering', () => {
  it('renders an Item text correctly', () => {
    const testId = 'unit-test-item';
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false,
    };
    // render component
    render(
      <ItemComponent
        testId={testId}
        model={model}
        onItemSelect={() => {}}
      />,
    );
    // get element reference by testid
    const liElement = screen.getByTestId(testId);
    // test
    expect(liElement).not.toBeNull();
    // get element children
    const { children } = liElement;
    expect(children).toHaveLength(2);
    expect(children.item(1)?.innerHTML).toContain('Unit test item 1');
  });

  it('renders an Item indicator correctly', () => {
    const testId = 'unit-test-item';
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 2',
      selected: false,
    };
    // render component
    render(
      <ItemComponent
        testId={testId}
        model={model}
        onItemSelect={() => {}}
      />,
    );
    // get element reference by testid
    const liElement = screen.getByTestId(testId);
    // test
    expect(liElement).not.toBeNull();
    // get element children
    const { children } = liElement;
    expect(children).toHaveLength(2);
    expect(children.item(0)?.innerHTML).toEqual('*');
  });

  it('has expected css class when selected is true', () => {
    const testId = 'unit-test-item';
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: true,
    };
    // render component
    render(
      <ItemComponent
        testId={testId}
        model={model}
        onItemSelect={() => {}}
      />,
    );
    // get element reference by testid
    const liElement = screen.getByTestId(testId);
    // test
    expect(liElement).not.toBeNull();
    // check that the element class attribute has the expected value
    expect(liElement.className).toContain('selected');
  });
  it('has expected css class when selected is false', () => {
    const testId = 'unit-test-item';
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: false,
    };
    // render component
    render(
      <ItemComponent
        testId={testId}
        model={model}
        onItemSelect={() => {}}
      />,
    );
    // get element reference by testid
    const liElement = screen.getByTestId(testId);
    // test
    expect(liElement).not.toBeNull();
    // check that the element class attribute does not contain 'selected'
    expect(liElement.className).not.toContain('selected');
  });
});
