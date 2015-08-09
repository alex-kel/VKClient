/**
 * Created by aydar on 07.08.15.
 */
function Item(name, displayName, iconClass){
    return {
        name: name,
        displayName: displayName,
        iconClass: iconClass,
        className: 'list-menu-item-' + name
    }
}

module.exports = [
    Item('news', 'News', 'flaticon-message30'),
    Item('feedback', 'Feedback', 'flaticon-speech-bubble34'),
    Item('messages', 'Messages', 'flaticon-email141'),
    Item('friends', 'Friends', 'flaticon-profile7'),
    Item('communities', 'Communities', 'flaticon-socialnetwork156'),
    Item('photos', 'Photos', 'flaticon-photo-camera5'),
    Item('settings', 'Settings', 'flaticon-settings20')
];