import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./store";
import { Provider } from "react-redux";

const data = require('./data.json')


describe('Test App', () => {
    test('Show Title', () => {
        render(<Provider store={store}><App/></Provider>)
        const title = screen.getByText(data.organization.name)
        expect(title).toBeInTheDocument()

    })
})

