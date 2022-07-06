import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Search } from '../../../src/heroes/pages/Search'

describe('Pruebas en <Search />', () => {

    test('Debe mostrarse correctamente con valores por defecto', () => { 
        
        const { container } =render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar a Batman y el input con el valor del query string', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')
        
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    });


})