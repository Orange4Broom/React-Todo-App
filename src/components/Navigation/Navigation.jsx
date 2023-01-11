import Icon from '../Icon/Icon';

import './Navigation.css'

function Navigation() {
    return (
        <>
            <nav className="navigation">
                <div className="navigation-wrap">
                    <div className="navigation-header">
                        <img src="/calendar.png" alt="calendar-image" height="38px" />
                        <h1 className="name-of-project"><span className="green-header">To</span>Do App</h1>
                    </div>
                    <a href="https://github.com/Orange4Broom" target="_blank" className='git-link'>
                        <Icon name='github' type='fab' />
                    </a>                    
                </div>
            </nav>
        </>
    )
}

export default Navigation;