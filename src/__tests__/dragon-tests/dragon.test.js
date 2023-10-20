import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from '../../redux/dragons/dragonsSlice';
import Dragons, { ListDragon } from '../../pages/dragon';

const mockDragon = {
  id: '1',
  name: 'Dragon 1',
  description: 'desc1',
  flickr_images: ['image1'],
  reserved: false,
};

const store = configureStore({ reducer: { dragons: dragonsReducer } });

describe('<Dragons /> component', () => {
  /* it('displays dragon details', () => {
    render(
      <Provider store={store}>
        <ListDragon dragon={mockDragon} />
      </Provider>,
    );

    expect(screen.getByText(mockDragon.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockDragon.name)).toBeInTheDocument();
    expect(screen.getByTestId('dragonImage')).toHaveAttribute('src', mockDragon.flickr_images[0]);
  }); */

  it('handles reservation button click', () => {
    render(
      <Provider store={store}>
        <ListDragon dragon={mockDragon} />
      </Provider>,
    );

    const button = screen.getByTestId('reserve-button');
    fireEvent.click(button);
  });
});

describe('<Dragons /> container', () => {
  it('renders Dragons component', () => {
    const { container } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    expect(container.firstChild).toBeDefined();
  });
});
