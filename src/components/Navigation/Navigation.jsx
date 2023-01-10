import Icon from '../Icon/Icon';

import './Navigation.css'

function Navigation() {
    return (
        <>
            <nav id="navigation">
                <div id="navigation-wrap">
                    <div id="navigation-header">
                        <img src="/calendar.png" alt="calendar-image" height="38px" />
                        <h1 id="name-of-project"><span id="green-header">To</span>Do App</h1>
                    </div>
                    <a href="https://github.com/Orange4Broom" target="_blank" id='git-link'>
                        <Icon name='github' type='fab' />
                    </a>                    
                </div>
            </nav>
        </>
    )
}

export default Navigation;