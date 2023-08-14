import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                {/* routes */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* Projects */}
                    <Route path='/projects' element={<ProjectPage />} />
                    {/* 404 not found */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;