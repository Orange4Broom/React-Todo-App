import Icon from '../Icon/Icon';

import '../ContentHead/ContentHead.css'

function ContentHead() {
    return (
        <div className="content-head">
            <input type="text" name="name-input" className="name-input" />
            <Icon name='plus' type='fas' className='add-button'/>
        </div>
    )
}

export default ContentHead;