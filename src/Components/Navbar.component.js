import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark  navbar-expand-lg'>
                <Link to='/' className='nav-link'>Exercise Tracker</Link>
                <Link to='/create' className='nav-link'>Create Exercise </Link>
                <Link to='/user' className='nav-link'>Create User</Link>
            </nav>
        </>
    );
}