import { render, screen } from '@testing-library/react'
import AppBar from './AppBar'

describe('AppBar Component', () => {
    it('Should show the Resume button', () => {
        render(<AppBar />);

        const resumeButton = screen.getByText('Resume');

        expect(resumeButton).toBeInTheDocument();
    })
})