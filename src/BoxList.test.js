import React from 'react';
import {render, screen, fireEvent, act } from "@testing-library/react";
import BoxList from './BoxList';

it("should render BoxList without failure", function() {
  render(<BoxList />)
})

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot()
})

it("should add a new box", async function() {
  render(<BoxList />)
  const inputWidth = screen.getByPlaceholderText("Box Width");
  const inputHeight = screen.getByPlaceholderText("Box Height");
  const inputColor = screen.getByPlaceholderText("Box Color");
  const btn = screen.queryByText("Create 📦");

  expect(screen.queryByText('red')).not.toBeInTheDocument();

  await act(async () => {
    fireEvent.change(inputColor, {target: { value: 'red'}});
    fireEvent.change(inputWidth, {target: { value: '50px'}});
    fireEvent.change(inputHeight, {target: { value: '50px'}});
    fireEvent.click(btn);
  });
  

  expect(screen.getByDisplayValue('red')).toBeInTheDocument();
})