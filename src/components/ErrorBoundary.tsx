import React from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

const ErrorBoundary: React.FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // Handle 404 and other route errors
        errorMessage = error.status === 404
            ? "This page seems to have vanished into the digital void."
            : `Error ${error.status}: ${error.statusText}`;
    } else if (error instanceof Error) {
        // Handle unexpected errors
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'An unknown error occurred';
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[--bg-color] text-center px-6">
            <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter mb-8">Oops!</h1>
            <p className="text-xl lg:text-2xl text-[--text-secondary] mb-12 max-w-lg">
                {errorMessage}
            </p>
            <Button
                onClick={() => navigate(ROUTES.HOME)}
                className="bg-[--text-primary] text-[--bg-color] hover:bg-[--text-secondary] text-lg px-8 py-6 rounded-none h-auto"
            >
                Return Home
            </Button>
        </div>
    );
};

export default ErrorBoundary;
