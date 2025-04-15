import {NavLink, Link} from 'react-router'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink className={({isActive}) => 
                    isActive ? 'active' : ''} to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul>
        </div>
    )
}
export default Sidebar