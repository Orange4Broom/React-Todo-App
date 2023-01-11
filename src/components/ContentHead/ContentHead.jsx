import Icon from '../Icon/Icon';

import '../ContentHead/ContentHead.css'

function ContentHead() {
    return (
        <div id="content-head">
            <input type="text" name="name-input" id="name-input" />
            <Icon name='plus' type='fas' id='add-button'/>
        </div>
    )
}

export default ContentHead;