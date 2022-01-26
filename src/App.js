import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppRouter from './routers/AppRouter';
import { AuthProvider } from './context/auth';
import { PostProvider } from './context/post';

function App() {
  return (
    <div className='bg-black'>
      <Router>
        <AuthProvider>
          <PostProvider>
            <AppRouter />
          </PostProvider>
        </AuthProvider>
      </Router>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#d7dbdc',
            color: '#000',
          },
        }}
      />
    </div>
  );
}

export default App;