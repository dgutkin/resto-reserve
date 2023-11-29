import { render, screen } from '@testing-library/react';
import App from './App';



beforeEach(() => {
  const RESTAURANTS = {data: {restaurants: {data: [{attributes: {Name: "Restaurant1", Rating: 5, Description: "A restaurant"}}]}}}
  jest.spyOn(global, 'fetch').mockResolvedValue(
    {json: jest.fn().mockResolvedValue(RESTAURANTS)}
)});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders users when API call succeeds', async () => {
  
  render(<App/>);

  expect(await screen.findByText('Restaurant1')).toBeInTheDocument();

});
