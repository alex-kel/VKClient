/**
 * Created by aydar on 07.08.15.
 */
function Item(name, displayName){
    return {
        name: name,
        displayName: displayName,
        className: name + 'item'
    }
}

module.exports = [
    Item('news', 'News'),
    Item('feedback', 'Feedback'),
    Item('messages', 'Messages'),
    Item('friends', 'Friends'),
    Item('communities', 'Communities'),
    Item('photos', 'Photos'),
    Item('settings', 'Settings')
];