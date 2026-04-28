import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { NotificationProvider } from './context/NotificationContext';
import './index.css';
import { savePostsToStorage } from './utils/localStorage';

store.subscribe(() => {
  savePostsToStorage(store.getState().posts.posts);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </Provider>
  </StrictMode>
);
