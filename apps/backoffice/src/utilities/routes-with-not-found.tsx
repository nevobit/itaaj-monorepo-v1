import NotFound from '@/screens/NotFound';
import { Routes, Route } from 'react-router-dom';

interface Props {
    children: React.ReactNode
}

const RoutesWithNotFound = ({children}: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesWithNotFound;