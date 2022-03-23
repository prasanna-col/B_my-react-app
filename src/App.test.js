import { render, screen } from '@testing-library/react';
import App from './App';

import renderer from "react-test-renderer"

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const tree  = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
});

// test('Function testing',()=>{
//   const _component = renderer.create(<App />).getInstance() // getInstance is used to get the functions from app.js file
//   const tree = _component.dataFunction()
//   expect(tree).toBe(10)
// })
