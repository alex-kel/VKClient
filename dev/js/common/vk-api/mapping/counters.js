/**
 * Created by aydar on 09.08.15.
 */

var countersMap = {
    albums: 'Albums',
    videos: 'Videos',
    photos: 'Photos',
    friends: 'Friends',
    followers: 'Followers'
};

module.exports = function(counters){
    var result = [];
    for (var key in counters){
        if (!counters.hasOwnProperty(key) || !counters[key] || !countersMap[key]) continue;
        result.push({displayName: countersMap[key], value: counters[key]})
    }
    return result;
};