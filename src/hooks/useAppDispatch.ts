import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';

// Custom hook to use the typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
