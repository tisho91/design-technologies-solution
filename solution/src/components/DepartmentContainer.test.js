import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "../App";


describe('Department Container', ()=>{

    test('should have departments dropdown options', ()=>{
        render(<Provider store={store}><App/></Provider>)
        expect(screen.getByText('Managers')).toBeInTheDocument()
        expect(screen.getByText('Operators')).toBeInTheDocument()
    })

})
