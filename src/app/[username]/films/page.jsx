'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import FilmsViewer from '@/components/Films/FilmsViewer';
import { API_ENDPOINTS, makeAuthenticatedRequest } from '@/lib/api';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const FilmsPage = () => {
    const { username } = useParams();
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadInitialFilms();
    }, []);

    const loadInitialFilms = async () => {
        try {
            setLoading(true);
            const response = await makeAuthenticatedRequest(
                `${API_ENDPOINTS.POSTS}?page=1&limit=10&type=video`,
                {
                    method: 'GET',
                }
            );

            if (response.ok) {
                const data = await response.json();
                setFilms(data.data?.posts || []);
            } else {
                setError('Failed to load films');
            }
        } catch (error) {
            console.error('Error loading films:', error);
            setError('Error loading films');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen bg-black flex items-center justify-center">
                <LoadingSpinner size="lg" color="white" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <p className="text-lg mb-4">{error}</p>
                    <button 
                        onClick={loadInitialFilms}
                        className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return <FilmsViewer initialFilms={films} username={username} />;
};

export default FilmsPage;
