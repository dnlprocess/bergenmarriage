import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationTracker() {
    const location = useLocation();

    // Track page navigation
    useEffect(() => {
        // Page tracking code can be added here if needed
    }, [location]);

    return null;
}