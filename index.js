"use strict";

import { NativeModules } from 'react-native';

const RNLocalytics = NativeModules.RNLocalytics;

const Localytics = {
    tagScreen : function(screenName) {
        return RNLocalytics.tagScreen(screenName);
    },
    tagEvent : function(eventName,props) {
        return RNLocalytics.tagEvent(eventName,props);
    }
}

module.exports = Localytics;
