import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[--bg-color] text-center px-6">
            <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter mb-8">404</h1>
            <p className="text-xl lg:text-2xl text-[--text-secondary] mb-12 max-w-lg">
                The page you are looking for does not exist or has been moved.
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

export default NotFound;
