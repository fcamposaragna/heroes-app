import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom',()=>({

    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUsedNavigate
}))

describe('Pruebas en NavBar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan Carlos'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Juan Carlos') ).toBeTruthy();
        

    });

    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        
       const logoutBtn = screen.getByRole('button');
       fireEvent.click(logoutBtn);
       
       expect(contextValue.logout).toHaveBeenCalled();
       expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {"replace": true});

    });
});