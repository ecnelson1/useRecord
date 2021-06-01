/**
 * @jest-environment jsdom
 */

import React from 'react';
import{ render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorContainer from './ColorContainer';



describe('ColorContainer', () => {
    it('renders an app that allows users to select a color to display', () => {
        render(<ColorContainer/>);
        
        const colorSelector = screen.getByLabelText('color-select');
        const display = screen.getByLabelText('color-display');

        fireEvent.change(colorSelector, {target: {value: '#197215'}});
        fireEvent.change(colorSelector, {target: {value: '#1742CA'}});

        return waitFor(() => {
            expect(display).toHaveStyle({'background-color': '#1742CA'})
        });
    });
    it('displays previous color after selecting undo', () => {
        render(<ColorContainer/>);

        const undo = screen.getByLabelText('undo');
        const colorSelector = screen.getByLabelText('color-select');
        const display = screen.getByLabelText('color-display');

        fireEvent.change(colorSelector, {target: {value: '#197215'}});
        fireEvent.change(colorSelector, {target: {value: '#1742CA'}});

        fireEvent.click(undo);

         return waitFor(() => {
            expect(display).toHaveStyle({'background-color': 'rgb(25, 114, 21)'})
        });
    });

    it('allows users to go forward to a previously selected color', () => {
        render(<ColorContainer/>);

        const undo = screen.getByLabelText('undo');
        const redo = screen.getByLabelText('redo');
        const colorSelector = screen.getByLabelText('color-select');
        const display = screen.getByLabelText('color-display');

        fireEvent.change(colorSelector, {target: {value: '#1742CA'}});
        fireEvent.change(colorSelector, {target: {value: '#197215'}});

        fireEvent.click(undo);
        fireEvent.click(redo);

         return waitFor(() => {
            expect(display).toHaveStyle({'background-color': 'rgb(25, 114, 21)'})
        });

    })

});
