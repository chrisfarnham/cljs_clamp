/*
gas.ext.js : closure-compiler externfile for Google Apps Script
# created: 2013/10/15 20:08:21
# tool: getGasExternFiles.js version 0.7.2

Copyright (c) 2013 Tsuyoshi Kodama

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/**
 * _Calendar Services
 */
var _Calendar = {};

/**
 * Class CalendarApp
 * @constructor
 */
_Calendar.CalendarApp = function() {};

/**
 * @type {_Calendar.Color}
 */
_Calendar.CalendarApp.prototype.Color;

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.CalendarApp.prototype.GuestStatus;

/**
 * @type {_Base.Month}
 */
_Calendar.CalendarApp.prototype.Month;

/**
 * @type {_Calendar.Visibility}
 */
_Calendar.CalendarApp.prototype.Visibility;

/**
 * @type {_Base.Weekday}
 */
_Calendar.CalendarApp.prototype.Weekday;

/**
 * @param {string} title
 * @param {Date} date
 * @param {Object=} options
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarApp.prototype.createAllDayEvent = function(title, date, options) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {_Calendar.EventRecurrence} recurrence
 * @param {Object=} options
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarApp.prototype.createAllDayEventSeries = function(title, startDate, recurrence, options) {};

/**
 * @param {string} name
 * @param {Object=} options
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.createCalendar = function(name, options) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object=} options
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarApp.prototype.createEvent = function(title, startTime, endTime, options) {};

/**
 * @param {string} description
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarApp.prototype.createEventFromDescription = function(description) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {_Calendar.EventRecurrence} recurrence
 * @param {Object=} options
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarApp.prototype.createEventSeries = function(title, startTime, endTime, recurrence, options) {};

/**
 * @return {Array.<_Calendar.Calendar>}
 */
_Calendar.CalendarApp.prototype.getAllCalendars = function() {};

/**
 * @return {Array.<_Calendar.Calendar>}
 */
_Calendar.CalendarApp.prototype.getAllOwnedCalendars = function() {};

/**
 * @param {string} id
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.getCalendarById = function(id) {};

/**
 * @param {string} name
 * @return {Array.<_Calendar.Calendar>}
 */
_Calendar.CalendarApp.prototype.getCalendarsByName = function(name) {};

/**
 * @return {string}
 */
_Calendar.CalendarApp.prototype.getColor = function() {};

/**
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.getDefaultCalendar = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarApp.prototype.getDescription = function() {};

/**
 * @param {string} iCalId
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarApp.prototype.getEventSeriesById = function(iCalId) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object=} options
 * @return {Array.<_Calendar.CalendarEvent>}
 */
_Calendar.CalendarApp.prototype.getEvents = function(startTime, endTime, options) {};

/**
 * @param {Date} date
 * @param {Object=} options
 * @return {Array.<_Calendar.CalendarEvent>}
 */
_Calendar.CalendarApp.prototype.getEventsForDay = function(date, options) {};

/**
 * @return {string}
 */
_Calendar.CalendarApp.prototype.getId = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarApp.prototype.getName = function() {};

/**
 * @param {string} id
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.getOwnedCalendarById = function(id) {};

/**
 * @param {string} name
 * @return {Array.<_Calendar.Calendar>}
 */
_Calendar.CalendarApp.prototype.getOwnedCalendarsByName = function(name) {};

/**
 * @return {string}
 */
_Calendar.CalendarApp.prototype.getTimeZone = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarApp.prototype.isHidden = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarApp.prototype.isMyPrimaryCalendar = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarApp.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarApp.prototype.isSelected = function() {};

/**
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.CalendarApp.prototype.newRecurrence = function() {};

/**
 * @param {string} color
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setColor = function(color) {};

/**
 * @param {string} description
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setDescription = function(description) {};

/**
 * @param {boolean} hidden
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setHidden = function(hidden) {};

/**
 * @param {string} name
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setName = function(name) {};

/**
 * @param {boolean} selected
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setSelected = function(selected) {};

/**
 * @param {string} timeZone
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.setTimeZone = function(timeZone) {};

/**
 * @param {string} id
 * @param {Object=} options
 * @return {_Calendar.Calendar}
 */
_Calendar.CalendarApp.prototype.subscribeToCalendar = function(id, options) {};


/**
 * @type {_Calendar.CalendarApp}
 */
var CalendarApp = new _Calendar.CalendarApp();

/**
 * Class Calendar
 * @constructor
 */
_Calendar.Calendar = function() {};

/**
 * @param {string} title
 * @param {Date} date
 * @param {Object=} options
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.Calendar.prototype.createAllDayEvent = function(title, date, options) {};

/**
 * @param {string} title
 * @param {Date} startDate
 * @param {_Calendar.EventRecurrence} recurrence
 * @param {Object=} options
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.Calendar.prototype.createAllDayEventSeries = function(title, startDate, recurrence, options) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object=} options
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.Calendar.prototype.createEvent = function(title, startTime, endTime, options) {};

/**
 * @param {string} description
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.Calendar.prototype.createEventFromDescription = function(description) {};

/**
 * @param {string} title
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {_Calendar.EventRecurrence} recurrence
 * @param {Object=} options
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.Calendar.prototype.createEventSeries = function(title, startTime, endTime, recurrence, options) {};

/**
 */
_Calendar.Calendar.prototype.deleteCalendar = function() {};

/**
 * @return {string}
 */
_Calendar.Calendar.prototype.getColor = function() {};

/**
 * @return {string}
 */
_Calendar.Calendar.prototype.getDescription = function() {};

/**
 * @param {string} iCalId
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.Calendar.prototype.getEventSeriesById = function(iCalId) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {Object=} options
 * @return {Array.<_Calendar.CalendarEvent>}
 */
_Calendar.Calendar.prototype.getEvents = function(startTime, endTime, options) {};

/**
 * @param {Date} date
 * @param {Object=} options
 * @return {Array.<_Calendar.CalendarEvent>}
 */
_Calendar.Calendar.prototype.getEventsForDay = function(date, options) {};

/**
 * @return {string}
 */
_Calendar.Calendar.prototype.getId = function() {};

/**
 * @return {string}
 */
_Calendar.Calendar.prototype.getName = function() {};

/**
 * @return {string}
 */
_Calendar.Calendar.prototype.getTimeZone = function() {};

/**
 * @return {boolean}
 */
_Calendar.Calendar.prototype.isHidden = function() {};

/**
 * @return {boolean}
 */
_Calendar.Calendar.prototype.isMyPrimaryCalendar = function() {};

/**
 * @return {boolean}
 */
_Calendar.Calendar.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
_Calendar.Calendar.prototype.isSelected = function() {};

/**
 * @param {string} color
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setColor = function(color) {};

/**
 * @param {string} description
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setDescription = function(description) {};

/**
 * @param {boolean} hidden
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setHidden = function(hidden) {};

/**
 * @param {string} name
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setName = function(name) {};

/**
 * @param {boolean} selected
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setSelected = function(selected) {};

/**
 * @param {string} timeZone
 * @return {_Calendar.Calendar}
 */
_Calendar.Calendar.prototype.setTimeZone = function(timeZone) {};

/**
 */
_Calendar.Calendar.prototype.unsubscribeFromCalendar = function() {};

/**
 * Class CalendarEvent
 * @constructor
 */
_Calendar.CalendarEvent = function() {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.addEmailReminder = function(minutesBefore) {};

/**
 * @param {string} email
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.addGuest = function(email) {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.addPopupReminder = function(minutesBefore) {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.addSmsReminder = function(minutesBefore) {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.anyoneCanAddSelf = function() {};

/**
 */
_Calendar.CalendarEvent.prototype.deleteEvent = function() {};

/**
 * @param {string} key
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.deleteTag = function(key) {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getAllDayEndDate = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getAllDayStartDate = function() {};

/**
 * @return {Array.<string>}
 */
_Calendar.CalendarEvent.prototype.getAllTagKeys = function() {};

/**
 * @return {Array.<string>}
 */
_Calendar.CalendarEvent.prototype.getCreators = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getDescription = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEvent.prototype.getEmailReminders = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getEndTime = function() {};

/**
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEvent.prototype.getEventSeries = function() {};

/**
 * @param {string} email
 * @return {_Calendar.EventGuest}
 */
_Calendar.CalendarEvent.prototype.getGuestByEmail = function(email) {};

/**
 * @param {boolean=} includeOwner
 * @return {Array.<_Calendar.EventGuest>}
 */
_Calendar.CalendarEvent.prototype.getGuestList = function(includeOwner) {};

/**
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getId = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getLocation = function() {};

/**
 * @return {_Calendar.GuestStatus}
 */
_Calendar.CalendarEvent.prototype.getMyStatus = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getOriginalCalendarId = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEvent.prototype.getPopupReminders = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEvent.prototype.getSmsReminders = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEvent.prototype.getStartTime = function() {};

/**
 * @param {string} key
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getTag = function(key) {};

/**
 * @return {string}
 */
_Calendar.CalendarEvent.prototype.getTitle = function() {};

/**
 * @return {_Calendar.Visibility}
 */
_Calendar.CalendarEvent.prototype.getVisibility = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.guestsCanInviteOthers = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.guestsCanModify = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.guestsCanSeeGuests = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.isAllDayEvent = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.isOwnedByMe = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEvent.prototype.isRecurringEvent = function() {};

/**
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.removeAllReminders = function() {};

/**
 * @param {string} email
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.removeGuest = function(email) {};

/**
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.resetRemindersToDefault = function() {};

/**
 * @param {Date} date
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setAllDayDate = function(date) {};

/**
 * @param {boolean} anyoneCanAddSelf
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf) {};

/**
 * @param {string} description
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setDescription = function(description) {};

/**
 * @param {boolean} guestsCanInviteOthers
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers) {};

/**
 * @param {boolean} guestsCanModify
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setGuestsCanModify = function(guestsCanModify) {};

/**
 * @param {boolean} guestsCanSeeGuests
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests) {};

/**
 * @param {string} location
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setLocation = function(location) {};

/**
 * @param {_Calendar.GuestStatus} status
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setMyStatus = function(status) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setTag = function(key, value) {};

/**
 * @param {Date} startTime
 * @param {Date} endTime
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setTime = function(startTime, endTime) {};

/**
 * @param {string} title
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setTitle = function(title) {};

/**
 * @param {_Calendar.Visibility} visibility
 * @return {_Calendar.CalendarEvent}
 */
_Calendar.CalendarEvent.prototype.setVisibility = function(visibility) {};

/**
 * Class CalendarEventSeries
 * @constructor
 */
_Calendar.CalendarEventSeries = function() {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.addEmailReminder = function(minutesBefore) {};

/**
 * @param {string} email
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.addGuest = function(email) {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.addPopupReminder = function(minutesBefore) {};

/**
 * @param {number} minutesBefore
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.addSmsReminder = function(minutesBefore) {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEventSeries.prototype.anyoneCanAddSelf = function() {};

/**
 */
_Calendar.CalendarEventSeries.prototype.deleteEventSeries = function() {};

/**
 * @param {string} key
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.deleteTag = function(key) {};

/**
 * @return {Array.<string>}
 */
_Calendar.CalendarEventSeries.prototype.getAllTagKeys = function() {};

/**
 * @return {Array.<string>}
 */
_Calendar.CalendarEventSeries.prototype.getCreators = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEventSeries.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getDescription = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEventSeries.prototype.getEmailReminders = function() {};

/**
 * @param {string} email
 * @return {_Calendar.EventGuest}
 */
_Calendar.CalendarEventSeries.prototype.getGuestByEmail = function(email) {};

/**
 * @param {boolean=} includeOwner
 * @return {Array.<_Calendar.EventGuest>}
 */
_Calendar.CalendarEventSeries.prototype.getGuestList = function(includeOwner) {};

/**
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getId = function() {};

/**
 * @return {Date}
 */
_Calendar.CalendarEventSeries.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getLocation = function() {};

/**
 * @return {_Calendar.GuestStatus}
 */
_Calendar.CalendarEventSeries.prototype.getMyStatus = function() {};

/**
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getOriginalCalendarId = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEventSeries.prototype.getPopupReminders = function() {};

/**
 * @return {Array.<number>}
 */
_Calendar.CalendarEventSeries.prototype.getSmsReminders = function() {};

/**
 * @param {string} key
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getTag = function(key) {};

/**
 * @return {string}
 */
_Calendar.CalendarEventSeries.prototype.getTitle = function() {};

/**
 * @return {_Calendar.Visibility}
 */
_Calendar.CalendarEventSeries.prototype.getVisibility = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEventSeries.prototype.guestsCanInviteOthers = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEventSeries.prototype.guestsCanModify = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEventSeries.prototype.guestsCanSeeGuests = function() {};

/**
 * @return {boolean}
 */
_Calendar.CalendarEventSeries.prototype.isOwnedByMe = function() {};

/**
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.removeAllReminders = function() {};

/**
 * @param {string} email
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.removeGuest = function(email) {};

/**
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.resetRemindersToDefault = function() {};

/**
 * @param {boolean} anyoneCanAddSelf
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf) {};

/**
 * @param {string} description
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setDescription = function(description) {};

/**
 * @param {boolean} guestsCanInviteOthers
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers) {};

/**
 * @param {boolean} guestsCanModify
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setGuestsCanModify = function(guestsCanModify) {};

/**
 * @param {boolean} guestsCanSeeGuests
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests) {};

/**
 * @param {string} location
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setLocation = function(location) {};

/**
 * @param {_Calendar.GuestStatus} status
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setMyStatus = function(status) {};

/**
 * @param {_Calendar.EventRecurrence} recurrence
 * @param {Date} arg2
 * @param {Date=} endTime
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setRecurrence = function(recurrence, arg2, endTime) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setTag = function(key, value) {};

/**
 * @param {string} title
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setTitle = function(title) {};

/**
 * @param {_Calendar.Visibility} visibility
 * @return {_Calendar.CalendarEventSeries}
 */
_Calendar.CalendarEventSeries.prototype.setVisibility = function(visibility) {};

/**
 * Class EventGuest
 * @constructor
 */
_Calendar.EventGuest = function() {};

/**
 * @return {number}
 */
_Calendar.EventGuest.prototype.getAdditionalGuests = function() {};

/**
 * @return {string}
 */
_Calendar.EventGuest.prototype.getEmail = function() {};

/**
 * @return {_Calendar.GuestStatus}
 */
_Calendar.EventGuest.prototype.getGuestStatus = function() {};

/**
 * @return {string}
 */
_Calendar.EventGuest.prototype.getName = function() {};

/**
 * Class EventRecurrence
 * @constructor
 */
_Calendar.EventRecurrence = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addDailyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addDailyRule = function() {};

/**
 * @param {Date} date
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.EventRecurrence.prototype.addDate = function(date) {};

/**
 * @param {Date} date
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.EventRecurrence.prototype.addDateExclusion = function(date) {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addMonthlyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addMonthlyRule = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addWeeklyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addWeeklyRule = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addYearlyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.EventRecurrence.prototype.addYearlyRule = function() {};

/**
 * @param {string} timeZone
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.EventRecurrence.prototype.setTimeZone = function(timeZone) {};

/**
 * Class RecurrenceRule
 * @constructor
 */
_Calendar.RecurrenceRule = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addDailyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addDailyRule = function() {};

/**
 * @param {Date} date
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.RecurrenceRule.prototype.addDate = function(date) {};

/**
 * @param {Date} date
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.RecurrenceRule.prototype.addDateExclusion = function(date) {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addMonthlyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addMonthlyRule = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addWeeklyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addWeeklyRule = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addYearlyExclusion = function() {};

/**
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.addYearlyRule = function() {};

/**
 * @param {number} interval
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.interval = function(interval) {};

/**
 * @param {_Base.Month} month
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyInMonth = function(month) {};

/**
 * @param {Array.<_Base.Month>} months
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyInMonths = function(months) {};

/**
 * @param {number} day
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnMonthDay = function(day) {};

/**
 * @param {Array.<number>} days
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnMonthDays = function(days) {};

/**
 * @param {number} week
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnWeek = function(week) {};

/**
 * @param {_Base.Weekday} day
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnWeekday = function(day) {};

/**
 * @param {Array.<_Base.Weekday>} days
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnWeekdays = function(days) {};

/**
 * @param {Array.<number>} weeks
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnWeeks = function(weeks) {};

/**
 * @param {number} day
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnYearDay = function(day) {};

/**
 * @param {Array.<number>} days
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.onlyOnYearDays = function(days) {};

/**
 * @param {string} timeZone
 * @return {_Calendar.EventRecurrence}
 */
_Calendar.RecurrenceRule.prototype.setTimeZone = function(timeZone) {};

/**
 * @param {number} times
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.times = function(times) {};

/**
 * @param {Date} endDate
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.until = function(endDate) {};

/**
 * @param {_Base.Weekday} day
 * @return {_Calendar.RecurrenceRule}
 */
_Calendar.RecurrenceRule.prototype.weekStartsOn = function(day) {};

/**
 * Enum Color
 * @constructor
 */
_Calendar.Color = function() {};

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.BLUE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.BROWN;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.CHARCOAL;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.CHESTNUT;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.GRAY;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.GREEN;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.INDIGO;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.LIME;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.MUSTARD;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.OLIVE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.ORANGE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.PINK;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.PLUM;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.PURPLE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.RED;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.RED_ORANGE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.SEA_BLUE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.SLATE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.TEAL;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.TURQOISE;

/**
 * @type {_Calendar.Color}
 */
_Calendar.Color.prototype.YELLOW;

/**
 * Enum GuestStatus
 * @constructor
 */
_Calendar.GuestStatus = function() {};

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.GuestStatus.prototype.INVITED;

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.GuestStatus.prototype.MAYBE;

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.GuestStatus.prototype.NO;

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.GuestStatus.prototype.OWNER;

/**
 * @type {_Calendar.GuestStatus}
 */
_Calendar.GuestStatus.prototype.YES;

/**
 * Enum Visibility
 * @constructor
 */
_Calendar.Visibility = function() {};

/**
 * @type {_Calendar.Visibility}
 */
_Calendar.Visibility.prototype.CONFIDENTIAL;

/**
 * @type {_Calendar.Visibility}
 */
_Calendar.Visibility.prototype.DEFAULT;

/**
 * @type {_Calendar.Visibility}
 */
_Calendar.Visibility.prototype.PRIVATE;

/**
 * @type {_Calendar.Visibility}
 */
_Calendar.Visibility.prototype.PUBLIC;


/**
 * _Contacts Services
 */
var _Contacts = {};

/**
 * Class ContactsApp
 * @constructor
 */
_Contacts.ContactsApp = function() {};

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ContactsApp.prototype.ExtendedField;

/**
 * @type {_Contacts.Field}
 */
_Contacts.ContactsApp.prototype.Field;

/**
 * @type {_Contacts.Gender}
 */
_Contacts.ContactsApp.prototype.Gender;

/**
 * @type {_Base.Month}
 */
_Contacts.ContactsApp.prototype.Month;

/**
 * @type {_Contacts.Priority}
 */
_Contacts.ContactsApp.prototype.Priority;

/**
 * @type {_Contacts.Sensitivity}
 */
_Contacts.ContactsApp.prototype.Sensitivity;

/**
 * @param {string} givenName
 * @param {string} familyName
 * @param {string} email
 * @return {_Contacts.Contact}
 */
_Contacts.ContactsApp.prototype.createContact = function(givenName, familyName, email) {};

/**
 * @param {string} name
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactsApp.prototype.createContactGroup = function(name) {};

/**
 * @param {_Contacts.Contact} contact
 */
_Contacts.ContactsApp.prototype.deleteContact = function(contact) {};

/**
 * @param {_Contacts.ContactGroup} group
 */
_Contacts.ContactsApp.prototype.deleteContactGroup = function(group) {};

/**
 * @param {string} emailAddress
 * @return {_Contacts.Contact}
 */
_Contacts.ContactsApp.prototype.getContact = function(emailAddress) {};

/**
 * @param {string} id
 * @return {_Contacts.Contact}
 */
_Contacts.ContactsApp.prototype.getContactById = function(id) {};

/**
 * @param {string} name
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactsApp.prototype.getContactGroup = function(name) {};

/**
 * @param {string} id
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactsApp.prototype.getContactGroupById = function(id) {};

/**
 * @return {Array.<_Contacts.ContactGroup>}
 */
_Contacts.ContactsApp.prototype.getContactGroups = function() {};

/**
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContacts = function() {};

/**
 * @param {string} query
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByAddress = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByCompany = function(query) {};

/**
 * @param {Object} query
 * @param {_Contacts.ExtendedField} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByCustomField = function(query, label) {};

/**
 * @param {_Base.Month} month
 * @param {number} day
 * @param {(_Contacts.Field|number|string)} arg3
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByDate = function(month, day, arg3, label) {};

/**
 * @param {string} query
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByEmailAddress = function(query, label) {};

/**
 * @param {_Contacts.ContactGroup} group
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByGroup = function(group) {};

/**
 * @param {string} query
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByIM = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByJobTitle = function(query) {};

/**
 * @param {string} query
 * @param {_Contacts.Field=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByName = function(query, label) {};

/**
 * @param {string} query
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByNotes = function(query) {};

/**
 * @param {string} query
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByPhone = function(query, label) {};

/**
 * @param {string} query
 * @param {(_Contacts.Field|string)=} label
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactsApp.prototype.getContactsByUrl = function(query, label) {};


/**
 * @type {_Contacts.ContactsApp}
 */
var ContactsApp = new _Contacts.ContactsApp();

/**
 * Class AddressField
 * @constructor
 */
_Contacts.AddressField = function() {};

/**
 */
_Contacts.AddressField.prototype.deleteAddressField = function() {};

/**
 * @return {string}
 */
_Contacts.AddressField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
_Contacts.AddressField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
_Contacts.AddressField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {_Contacts.AddressField}
 */
_Contacts.AddressField.prototype.setAddress = function(address) {};

/**
 * @return {_Contacts.AddressField}
 */
_Contacts.AddressField.prototype.setAsPrimary = function() {};

/**
 * @param {(_Contacts.Field|string)} arg1
 * @return {_Contacts.AddressField}
 */
_Contacts.AddressField.prototype.setLabel = function(arg1) {};

/**
 * Class CompanyField
 * @constructor
 */
_Contacts.CompanyField = function() {};

/**
 */
_Contacts.CompanyField.prototype.deleteCompanyField = function() {};

/**
 * @return {string}
 */
_Contacts.CompanyField.prototype.getCompanyName = function() {};

/**
 * @return {string}
 */
_Contacts.CompanyField.prototype.getJobTitle = function() {};

/**
 * @return {boolean}
 */
_Contacts.CompanyField.prototype.isPrimary = function() {};

/**
 * @return {_Contacts.CompanyField}
 */
_Contacts.CompanyField.prototype.setAsPrimary = function() {};

/**
 * @param {string} company
 * @return {_Contacts.CompanyField}
 */
_Contacts.CompanyField.prototype.setCompanyName = function(company) {};

/**
 * @param {string} title
 * @return {_Contacts.CompanyField}
 */
_Contacts.CompanyField.prototype.setJobTitle = function(title) {};

/**
 * Class Contact
 * @constructor
 */
_Contacts.Contact = function() {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {_Contacts.AddressField}
 */
_Contacts.Contact.prototype.addAddress = function(label, address) {};

/**
 * @param {string} company
 * @param {string} title
 * @return {_Contacts.CompanyField}
 */
_Contacts.Contact.prototype.addCompany = function(company, title) {};

/**
 * @param {Object} label
 * @param {Object} content
 * @return {_Contacts.CustomField}
 */
_Contacts.Contact.prototype.addCustomField = function(label, content) {};

/**
 * @param {Object} label
 * @param {_Base.Month} month
 * @param {number} day
 * @param {number} year
 * @return {_Contacts.DateField}
 */
_Contacts.Contact.prototype.addDate = function(label, month, day, year) {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {_Contacts.EmailField}
 */
_Contacts.Contact.prototype.addEmail = function(label, address) {};

/**
 * @param {Object} label
 * @param {string} address
 * @return {_Contacts.IMField}
 */
_Contacts.Contact.prototype.addIM = function(label, address) {};

/**
 * @param {Object} label
 * @param {string} number
 * @return {_Contacts.PhoneField}
 */
_Contacts.Contact.prototype.addPhone = function(label, number) {};

/**
 * @param {_Contacts.ContactGroup} group
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.addToGroup = function(group) {};

/**
 * @param {Object} label
 * @param {string} url
 * @return {_Contacts.UrlField}
 */
_Contacts.Contact.prototype.addUrl = function(label, url) {};

/**
 */
_Contacts.Contact.prototype.deleteContact = function() {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.AddressField>}
 */
_Contacts.Contact.prototype.getAddresses = function(label) {};

/**
 * @return {Array.<_Contacts.CompanyField>}
 */
_Contacts.Contact.prototype.getCompanies = function() {};

/**
 * @return {Array.<_Contacts.ContactGroup>}
 */
_Contacts.Contact.prototype.getContactGroups = function() {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.CustomField>}
 */
_Contacts.Contact.prototype.getCustomFields = function(label) {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.DateField>}
 */
_Contacts.Contact.prototype.getDates = function(label) {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.EmailField>}
 */
_Contacts.Contact.prototype.getEmails = function(label) {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getFamilyName = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getFullName = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getGivenName = function() {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.IMField>}
 */
_Contacts.Contact.prototype.getIMs = function(label) {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getId = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getInitials = function() {};

/**
 * @return {Date}
 */
_Contacts.Contact.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getMaidenName = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getMiddleName = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getNickname = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getNotes = function() {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.PhoneField>}
 */
_Contacts.Contact.prototype.getPhones = function(label) {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getPrefix = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getPrimaryEmail = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getShortName = function() {};

/**
 * @return {string}
 */
_Contacts.Contact.prototype.getSuffix = function() {};

/**
 * @param {Object=} label
 * @return {Array.<_Contacts.UrlField>}
 */
_Contacts.Contact.prototype.getUrls = function(label) {};

/**
 * @param {_Contacts.ContactGroup} group
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.removeFromGroup = function(group) {};

/**
 * @param {string} familyName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setFamilyName = function(familyName) {};

/**
 * @param {string} fullName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setFullName = function(fullName) {};

/**
 * @param {string} givenName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setGivenName = function(givenName) {};

/**
 * @param {string} initials
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setInitials = function(initials) {};

/**
 * @param {string} maidenName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setMaidenName = function(maidenName) {};

/**
 * @param {string} middleName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setMiddleName = function(middleName) {};

/**
 * @param {string} nickname
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setNickname = function(nickname) {};

/**
 * @param {string} notes
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setNotes = function(notes) {};

/**
 * @param {string} prefix
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setPrefix = function(prefix) {};

/**
 * @param {string} shortName
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setShortName = function(shortName) {};

/**
 * @param {string} suffix
 * @return {_Contacts.Contact}
 */
_Contacts.Contact.prototype.setSuffix = function(suffix) {};

/**
 * Class ContactGroup
 * @constructor
 */
_Contacts.ContactGroup = function() {};

/**
 * @param {_Contacts.Contact} contact
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactGroup.prototype.addContact = function(contact) {};

/**
 */
_Contacts.ContactGroup.prototype.deleteGroup = function() {};

/**
 * @return {Array.<_Contacts.Contact>}
 */
_Contacts.ContactGroup.prototype.getContacts = function() {};

/**
 * @return {string}
 */
_Contacts.ContactGroup.prototype.getId = function() {};

/**
 * @return {string}
 */
_Contacts.ContactGroup.prototype.getName = function() {};

/**
 * @return {boolean}
 */
_Contacts.ContactGroup.prototype.isSystemGroup = function() {};

/**
 * @param {_Contacts.Contact} contact
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactGroup.prototype.removeContact = function(contact) {};

/**
 * @param {string} name
 * @return {_Contacts.ContactGroup}
 */
_Contacts.ContactGroup.prototype.setName = function(name) {};

/**
 * Class CustomField
 * @constructor
 */
_Contacts.CustomField = function() {};

/**
 */
_Contacts.CustomField.prototype.deleteCustomField = function() {};

/**
 * @return {Object}
 */
_Contacts.CustomField.prototype.getLabel = function() {};

/**
 * @return {Object}
 */
_Contacts.CustomField.prototype.getValue = function() {};

/**
 * @param {(_Contacts.ExtendedField|string)} arg1
 * @return {_Contacts.CustomField}
 */
_Contacts.CustomField.prototype.setLabel = function(arg1) {};

/**
 * @param {Object} value
 * @return {_Contacts.CustomField}
 */
_Contacts.CustomField.prototype.setValue = function(value) {};

/**
 * Class DateField
 * @constructor
 */
_Contacts.DateField = function() {};

/**
 */
_Contacts.DateField.prototype.deleteDateField = function() {};

/**
 * @return {number}
 */
_Contacts.DateField.prototype.getDay = function() {};

/**
 * @return {Object}
 */
_Contacts.DateField.prototype.getLabel = function() {};

/**
 * @return {_Base.Month}
 */
_Contacts.DateField.prototype.getMonth = function() {};

/**
 * @return {number}
 */
_Contacts.DateField.prototype.getYear = function() {};

/**
 * @param {_Base.Month} month
 * @param {number} day
 * @param {number=} year
 * @return {_Contacts.DateField}
 */
_Contacts.DateField.prototype.setDate = function(month, day, year) {};

/**
 * @param {(_Contacts.Field|string)} label
 * @return {_Contacts.DateField}
 */
_Contacts.DateField.prototype.setLabel = function(label) {};

/**
 * Class EmailField
 * @constructor
 */
_Contacts.EmailField = function() {};

/**
 */
_Contacts.EmailField.prototype.deleteEmailField = function() {};

/**
 * @return {string}
 */
_Contacts.EmailField.prototype.getAddress = function() {};

/**
 * @return {string}
 */
_Contacts.EmailField.prototype.getDisplayName = function() {};

/**
 * @return {Object}
 */
_Contacts.EmailField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
_Contacts.EmailField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {_Contacts.EmailField}
 */
_Contacts.EmailField.prototype.setAddress = function(address) {};

/**
 * @return {_Contacts.EmailField}
 */
_Contacts.EmailField.prototype.setAsPrimary = function() {};

/**
 * @param {string} name
 * @return {_Contacts.EmailField}
 */
_Contacts.EmailField.prototype.setDisplayName = function(name) {};

/**
 * @param {(_Contacts.Field|string)} arg1
 * @return {_Contacts.EmailField}
 */
_Contacts.EmailField.prototype.setLabel = function(arg1) {};

/**
 * Class IMField
 * @constructor
 */
_Contacts.IMField = function() {};

/**
 */
_Contacts.IMField.prototype.deleteIMField = function() {};

/**
 * @return {string}
 */
_Contacts.IMField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
_Contacts.IMField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
_Contacts.IMField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {_Contacts.IMField}
 */
_Contacts.IMField.prototype.setAddress = function(address) {};

/**
 * @return {_Contacts.IMField}
 */
_Contacts.IMField.prototype.setAsPrimary = function() {};

/**
 * @param {(_Contacts.Field|string)} arg1
 * @return {_Contacts.IMField}
 */
_Contacts.IMField.prototype.setLabel = function(arg1) {};

/**
 * Class PhoneField
 * @constructor
 */
_Contacts.PhoneField = function() {};

/**
 */
_Contacts.PhoneField.prototype.deletePhoneField = function() {};

/**
 * @return {Object}
 */
_Contacts.PhoneField.prototype.getLabel = function() {};

/**
 * @return {string}
 */
_Contacts.PhoneField.prototype.getPhoneNumber = function() {};

/**
 * @return {boolean}
 */
_Contacts.PhoneField.prototype.isPrimary = function() {};

/**
 * @return {_Contacts.PhoneField}
 */
_Contacts.PhoneField.prototype.setAsPrimary = function() {};

/**
 * @param {(_Contacts.Field|string)} arg1
 * @return {_Contacts.PhoneField}
 */
_Contacts.PhoneField.prototype.setLabel = function(arg1) {};

/**
 * @param {string} number
 * @return {_Contacts.PhoneField}
 */
_Contacts.PhoneField.prototype.setPhoneNumber = function(number) {};

/**
 * Class UrlField
 * @constructor
 */
_Contacts.UrlField = function() {};

/**
 */
_Contacts.UrlField.prototype.deleteUrlField = function() {};

/**
 * @return {string}
 */
_Contacts.UrlField.prototype.getAddress = function() {};

/**
 * @return {Object}
 */
_Contacts.UrlField.prototype.getLabel = function() {};

/**
 * @return {boolean}
 */
_Contacts.UrlField.prototype.isPrimary = function() {};

/**
 * @param {string} address
 * @return {_Contacts.UrlField}
 */
_Contacts.UrlField.prototype.setAddress = function(address) {};

/**
 * @return {_Contacts.UrlField}
 */
_Contacts.UrlField.prototype.setAsPrimary = function() {};

/**
 * @param {(_Contacts.Field|string)} arg1
 * @return {_Contacts.UrlField}
 */
_Contacts.UrlField.prototype.setLabel = function(arg1) {};

/**
 * Enum ExtendedField
 * @constructor
 */
_Contacts.ExtendedField = function() {};

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.HOBBY;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.MILEAGE;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.LANGUAGE;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.GENDER;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.BILLING_INFORMATION;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.DIRECTORY_SERVER;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.SENSITIVITY;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.PRIORITY;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.HOME;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.WORK;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.USER;

/**
 * @type {_Contacts.ExtendedField}
 */
_Contacts.ExtendedField.prototype.OTHER;

/**
 * Enum Field
 * @constructor
 */
_Contacts.Field = function() {};

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.FULL_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.GIVEN_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.MIDDLE_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.FAMILY_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.MAIDEN_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.NICKNAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.SHORT_NAME;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.INITIALS;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.PREFIX;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.SUFFIX;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_EMAIL;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.WORK_EMAIL;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.BIRTHDAY;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.ANNIVERSARY;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_ADDRESS;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.WORK_ADDRESS;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.ASSISTANT_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.CALLBACK_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.MAIN_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.PAGER;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_FAX;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.WORK_FAX;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.WORK_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.MOBILE_PHONE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.GOOGLE_VOICE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.NOTES;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.GOOGLE_TALK;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.AIM;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.YAHOO;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.SKYPE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.QQ;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.MSN;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.ICQ;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.JABBER;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.BLOG;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.FTP;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.PROFILE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_PAGE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.WORK_WEBSITE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.HOME_WEBSITE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.JOB_TITLE;

/**
 * @type {_Contacts.Field}
 */
_Contacts.Field.prototype.COMPANY;

/**
 * Enum Gender
 * @constructor
 */
_Contacts.Gender = function() {};

/**
 * @type {_Contacts.Gender}
 */
_Contacts.Gender.prototype.MALE;

/**
 * @type {_Contacts.Gender}
 */
_Contacts.Gender.prototype.FEMALE;

/**
 * Enum Priority
 * @constructor
 */
_Contacts.Priority = function() {};

/**
 * @type {_Contacts.Priority}
 */
_Contacts.Priority.prototype.HIGH;

/**
 * @type {_Contacts.Priority}
 */
_Contacts.Priority.prototype.LOW;

/**
 * @type {_Contacts.Priority}
 */
_Contacts.Priority.prototype.NORMAL;

/**
 * Enum Sensitivity
 * @constructor
 */
_Contacts.Sensitivity = function() {};

/**
 * @type {_Contacts.Sensitivity}
 */
_Contacts.Sensitivity.prototype.CONFIDENTIAL;

/**
 * @type {_Contacts.Sensitivity}
 */
_Contacts.Sensitivity.prototype.NORMAL;

/**
 * @type {_Contacts.Sensitivity}
 */
_Contacts.Sensitivity.prototype.PERSONAL;

/**
 * @type {_Contacts.Sensitivity}
 */
_Contacts.Sensitivity.prototype.PRIVATE;


/**
 * _DocsList Services
 */
var _DocsList = {};

/**
 * Class DocsList
 * @constructor
 */
_DocsList.DocsList = function() {};

/**
 * @type {number}
 */
_DocsList.DocsList.prototype.DEFAULT_RESULT_SIZE;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.DocsList.prototype.FileType;

/**
 * @type {number}
 */
_DocsList.DocsList.prototype.MAX_RESULT_SIZE;

/**
 * @param {(_Base.BlobSource|string)} arg1
 * @param {string=} contents
 * @param {string=} mimeType
 * @return {_DocsList.File}
 */
_DocsList.DocsList.prototype.createFile = function(arg1, contents, mimeType) {};

/**
 * @param {string} name
 * @return {_DocsList.Folder}
 */
_DocsList.DocsList.prototype.createFolder = function(name) {};

/**
 * @param {string} query
 * @return {Array.<_DocsList.File>}
 */
_DocsList.DocsList.prototype.find = function(query) {};

/**
 * @param {string} query
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.DocsList.prototype.findForPaging = function(query, number, token) {};

/**
 * @return {Array.<_DocsList.File>}
 */
_DocsList.DocsList.prototype.getAllFiles = function() {};

/**
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.DocsList.prototype.getAllFilesForPaging = function(number, token) {};

/**
 * @return {Array.<_DocsList.Folder>}
 */
_DocsList.DocsList.prototype.getAllFolders = function() {};

/**
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FoldersResult}
 */
_DocsList.DocsList.prototype.getAllFoldersForPaging = function(number, token) {};

/**
 * @param {string} id
 * @return {_DocsList.File}
 */
_DocsList.DocsList.prototype.getFileById = function(id) {};

/**
 * @param {_DocsList.FileType} type
 * @return {Array.<_DocsList.File>}
 */
_DocsList.DocsList.prototype.getFilesByType = function(type) {};

/**
 * @param {_DocsList.FileType} type
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.DocsList.prototype.getFilesByTypeForPaging = function(type, number, token) {};

/**
 * @param {string} path
 * @return {_DocsList.Folder}
 */
_DocsList.DocsList.prototype.getFolder = function(path) {};

/**
 * @param {string} id
 * @return {_DocsList.Folder}
 */
_DocsList.DocsList.prototype.getFolderById = function(id) {};

/**
 * @return {_DocsList.Folder}
 */
_DocsList.DocsList.prototype.getRootFolder = function() {};


/**
 * @type {_DocsList.DocsList}
 */
var DocsList = new _DocsList.DocsList();

/**
 * Class File
 * @constructor
 */
_DocsList.File = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {_DocsList.Folder} parent
 */
_DocsList.File.prototype.addToFolder = function(parent) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} contents
 */
_DocsList.File.prototype.append = function(contents) {};

/**
 */
_DocsList.File.prototype.clear = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_DocsList.File.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_DocsList.File.prototype.getBlob = function() {};

/**
 * @return {string}
 */
_DocsList.File.prototype.getContentAsString = function() {};

/**
 * @return {Date}
 */
_DocsList.File.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_DocsList.File.prototype.getDescription = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_DocsList.File.prototype.getEditors = function() {};

/**
 * @return {_DocsList.FileType}
 */
_DocsList.File.prototype.getFileType = function() {};

/**
 * @return {string}
 */
_DocsList.File.prototype.getId = function() {};

/**
 * @return {Date}
 */
_DocsList.File.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_DocsList.File.prototype.getName = function() {};

/**
 * @return {_Base.User}
 */
_DocsList.File.prototype.getOwner = function() {};

/**
 * @return {Array.<_DocsList.Folder>}
 */
_DocsList.File.prototype.getParents = function() {};

/**
 * @return {number}
 */
_DocsList.File.prototype.getSize = function() {};

/**
 * @return {_Base.Blob}
 */
_DocsList.File.prototype.getThumbnail = function() {};

/**
 * @return {string}
 */
_DocsList.File.prototype.getUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_DocsList.File.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
_DocsList.File.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
_DocsList.File.prototype.isTrashed = function() {};

/**
 * @param {string=} newName
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.makeCopy = function(newName) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.removeEditor = function(arg1) {};

/**
 * @param {_DocsList.Folder} parent
 */
_DocsList.File.prototype.removeFromFolder = function(parent) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.File}
 */
_DocsList.File.prototype.removeViewer = function(arg1) {};

/**
 * @param {string} newName
 */
_DocsList.File.prototype.rename = function(newName) {};

/**
 * @param {string} contents
 */
_DocsList.File.prototype.replace = function(contents) {};

/**
 * @param {string} description
 */
_DocsList.File.prototype.setDescription = function(description) {};

/**
 * @param {boolean} starred
 */
_DocsList.File.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trash
 */
_DocsList.File.prototype.setTrashed = function(trash) {};

/**
 * Class FilesResult
 * @constructor
 */
_DocsList.FilesResult = function() {};

/**
 * @return {Array.<_DocsList.File>}
 */
_DocsList.FilesResult.prototype.getFiles = function() {};

/**
 * @return {_DocsList.Token}
 */
_DocsList.FilesResult.prototype.getToken = function() {};

/**
 * Class Folder
 * @constructor
 */
_DocsList.Folder = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {_DocsList.Folder} parent
 */
_DocsList.Folder.prototype.addToFolder = function(parent) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {(_Base.BlobSource|string)} arg1
 * @param {string=} contents
 * @param {string=} mimeType
 * @return {_DocsList.File}
 */
_DocsList.Folder.prototype.createFile = function(arg1, contents, mimeType) {};

/**
 * @param {string} name
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.createFolder = function(name) {};

/**
 * @param {string} query
 * @return {Array.<_DocsList.File>}
 */
_DocsList.Folder.prototype.find = function(query) {};

/**
 * @param {string} query
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.Folder.prototype.findForPaging = function(query, number, token) {};

/**
 * @return {Date}
 */
_DocsList.Folder.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_DocsList.Folder.prototype.getDescription = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_DocsList.Folder.prototype.getEditors = function() {};

/**
 * @return {Array.<_DocsList.File>}
 */
_DocsList.Folder.prototype.getFiles = function() {};

/**
 * @param {_DocsList.FileType} type
 * @return {Array.<_DocsList.File>}
 */
_DocsList.Folder.prototype.getFilesByType = function(type) {};

/**
 * @param {_DocsList.FileType} type
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.Folder.prototype.getFilesByTypeForPaging = function(type, number, token) {};

/**
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FilesResult}
 */
_DocsList.Folder.prototype.getFilesForPaging = function(number, token) {};

/**
 * @return {Array.<_DocsList.Folder>}
 */
_DocsList.Folder.prototype.getFolders = function() {};

/**
 * @param {number} number
 * @param {_DocsList.Token=} token
 * @return {_DocsList.FoldersResult}
 */
_DocsList.Folder.prototype.getFoldersForPaging = function(number, token) {};

/**
 * @return {string}
 */
_DocsList.Folder.prototype.getId = function() {};

/**
 * @return {Date}
 */
_DocsList.Folder.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_DocsList.Folder.prototype.getName = function() {};

/**
 * @return {_Base.User}
 */
_DocsList.Folder.prototype.getOwner = function() {};

/**
 * @return {Array.<_DocsList.Folder>}
 */
_DocsList.Folder.prototype.getParents = function() {};

/**
 * @return {number}
 */
_DocsList.Folder.prototype.getSize = function() {};

/**
 * @return {string}
 */
_DocsList.Folder.prototype.getUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_DocsList.Folder.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
_DocsList.Folder.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
_DocsList.Folder.prototype.isTrashed = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.removeEditor = function(arg1) {};

/**
 * @param {_DocsList.Folder} parent
 */
_DocsList.Folder.prototype.removeFromFolder = function(parent) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_DocsList.Folder}
 */
_DocsList.Folder.prototype.removeViewer = function(arg1) {};

/**
 * @param {string} newName
 */
_DocsList.Folder.prototype.rename = function(newName) {};

/**
 * @param {string} description
 */
_DocsList.Folder.prototype.setDescription = function(description) {};

/**
 * @param {boolean} starred
 */
_DocsList.Folder.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trash
 */
_DocsList.Folder.prototype.setTrashed = function(trash) {};

/**
 * Class FoldersResult
 * @constructor
 */
_DocsList.FoldersResult = function() {};

/**
 * @return {Array.<_DocsList.Folder>}
 */
_DocsList.FoldersResult.prototype.getFolders = function() {};

/**
 * @return {_DocsList.Token}
 */
_DocsList.FoldersResult.prototype.getToken = function() {};

/**
 * Class Token
 * @constructor
 */
_DocsList.Token = function() {};

/**
 * Enum FileType
 * @constructor
 */
_DocsList.FileType = function() {};

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.DOCUMENT;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.SPREADSHEET;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.PRESENTATION;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.DRAWING;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.FORM;

/**
 * @type {_DocsList.FileType}
 */
_DocsList.FileType.prototype.OTHER;


/**
 * _Document Services
 */
var _Document = {};

/**
 * Class DocumentApp
 * @constructor
 */
_Document.DocumentApp = function() {};

/**
 * @type {_Document.Attribute}
 */
_Document.DocumentApp.prototype.Attribute;

/**
 * @type {_Document.ElementType}
 */
_Document.DocumentApp.prototype.ElementType;

/**
 * @type {_Document.FontFamily}
 */
_Document.DocumentApp.prototype.FontFamily;

/**
 * @type {_Document.GlyphType}
 */
_Document.DocumentApp.prototype.GlyphType;

/**
 * @type {_Document.HorizontalAlignment}
 */
_Document.DocumentApp.prototype.HorizontalAlignment;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.DocumentApp.prototype.ParagraphHeading;

/**
 * @type {_Document.VerticalAlignment}
 */
_Document.DocumentApp.prototype.VerticalAlignment;

/**
 * @param {string} name
 * @return {_Document.Document}
 */
_Document.DocumentApp.prototype.create = function(name) {};

/**
 * @return {_Document.Document}
 */
_Document.DocumentApp.prototype.getActiveDocument = function() {};

/**
 * @return {_Base.Ui}
 */
_Document.DocumentApp.prototype.getUi = function() {};

/**
 * @param {string} id
 * @return {_Document.Document}
 */
_Document.DocumentApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {_Document.Document}
 */
_Document.DocumentApp.prototype.openByUrl = function(url) {};


/**
 * @type {_Document.DocumentApp}
 */
var DocumentApp = new _Document.DocumentApp();

/**
 * Class Body
 * @constructor
 */
_Document.Body = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.Body.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.Body.prototype.appendImage = function(image) {};

/**
 * @param {(_Document.ListItem|string)} arg1
 * @return {_Document.ListItem}
 */
_Document.Body.prototype.appendListItem = function(arg1) {};

/**
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.Body.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {(_Document.Paragraph|string)} arg1
 * @return {_Document.Paragraph}
 */
_Document.Body.prototype.appendParagraph = function(arg1) {};

/**
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg1
 * @return {_Document.Table}
 */
_Document.Body.prototype.appendTable = function(arg1) {};

/**
 * @return {_Document.Body}
 */
_Document.Body.prototype.clear = function() {};

/**
 * @return {_Document.Body}
 */
_Document.Body.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Body.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Body.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Body.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.Body.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.Body.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.Body.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<_Document.InlineImage>}
 */
_Document.Body.prototype.getImages = function() {};

/**
 * @return {Array.<_Document.ListItem>}
 */
_Document.Body.prototype.getListItems = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getMarginBottom = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getMarginLeft = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getMarginRight = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getMarginTop = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getNumChildren = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getPageHeight = function() {};

/**
 * @return {number}
 */
_Document.Body.prototype.getPageWidth = function() {};

/**
 * @return {Array.<_Document.Paragraph>}
 */
_Document.Body.prototype.getParagraphs = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Body.prototype.getParent = function() {};

/**
 * @return {Array.<_Document.Table>}
 */
_Document.Body.prototype.getTables = function() {};

/**
 * @return {string}
 */
_Document.Body.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Body.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.Body.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.Body.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {(_Document.ListItem|string)} arg2
 * @return {_Document.ListItem}
 */
_Document.Body.prototype.insertListItem = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.Body.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {(_Document.Paragraph|string)} arg2
 * @return {_Document.Paragraph}
 */
_Document.Body.prototype.insertParagraph = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg2
 * @return {_Document.Table}
 */
_Document.Body.prototype.insertTable = function(childIndex, arg2) {};

/**
 * @param {_Document.Element} child
 * @return {_Document.Body}
 */
_Document.Body.prototype.removeChild = function(child) {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.Body.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.Body}
 */
_Document.Body.prototype.setAttributes = function(attributes) {};

/**
 * @param {number} marginBottom
 * @return {_Document.Body}
 */
_Document.Body.prototype.setMarginBottom = function(marginBottom) {};

/**
 * @param {number} marginLeft
 * @return {_Document.Body}
 */
_Document.Body.prototype.setMarginLeft = function(marginLeft) {};

/**
 * @param {number} marginRight
 * @return {_Document.Body}
 */
_Document.Body.prototype.setMarginRight = function(marginRight) {};

/**
 * @param {number} marginTop
 * @return {_Document.Body}
 */
_Document.Body.prototype.setMarginTop = function(marginTop) {};

/**
 * @param {number} pageHeight
 * @return {_Document.Body}
 */
_Document.Body.prototype.setPageHeight = function(pageHeight) {};

/**
 * @param {number} pageWidth
 * @return {_Document.Body}
 */
_Document.Body.prototype.setPageWidth = function(pageWidth) {};

/**
 * @param {string} text
 * @return {_Document.Body}
 */
_Document.Body.prototype.setText = function(text) {};

/**
 * Class ContainerElement
 * @constructor
 */
_Document.ContainerElement = function() {};

/**
 * @return {_Document.Body}
 */
_Document.ContainerElement.prototype.asBody = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.ContainerElement.prototype.asEquation = function() {};

/**
 * @return {_Document.FooterSection}
 */
_Document.ContainerElement.prototype.asFooterSection = function() {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.ContainerElement.prototype.asFootnoteSection = function() {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.ContainerElement.prototype.asHeaderSection = function() {};

/**
 * @return {_Document.ListItem}
 */
_Document.ContainerElement.prototype.asListItem = function() {};

/**
 * @return {_Document.Paragraph}
 */
_Document.ContainerElement.prototype.asParagraph = function() {};

/**
 * @return {_Document.Table}
 */
_Document.ContainerElement.prototype.asTable = function() {};

/**
 * @return {_Document.TableCell}
 */
_Document.ContainerElement.prototype.asTableCell = function() {};

/**
 * @return {_Document.TableOfContents}
 */
_Document.ContainerElement.prototype.asTableOfContents = function() {};

/**
 * @return {_Document.TableRow}
 */
_Document.ContainerElement.prototype.asTableRow = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.clear = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.ContainerElement.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.ContainerElement.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.ContainerElement.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.ContainerElement.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.ContainerElement.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.ContainerElement.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.ContainerElement.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.ContainerElement.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.ContainerElement.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.ContainerElement.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.ContainerElement.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.ContainerElement.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.ContainerElement.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.merge = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.ContainerElement.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {_Document.ContainerElement}
 */
_Document.ContainerElement.prototype.setLinkUrl = function(url) {};

/**
 * Class Cursor
 * @constructor
 */
_Document.Cursor = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Cursor.prototype.getElement = function() {};

/**
 * @return {number}
 */
_Document.Cursor.prototype.getOffset = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Cursor.prototype.getSurroundingText = function() {};

/**
 * @return {number}
 */
_Document.Cursor.prototype.getSurroundingTextOffset = function() {};

/**
 * @param {_Base.BlobSource} image
 * @return {_Document.InlineImage}
 */
_Document.Cursor.prototype.insertInlineImage = function(image) {};

/**
 * @param {string} text
 * @return {_Document.Text}
 */
_Document.Cursor.prototype.insertText = function(text) {};

/**
 * Class Document
 * @constructor
 */
_Document.Document = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Document.Document}
 */
_Document.Document.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Document.Document}
 */
_Document.Document.prototype.addEditors = function(emailAddresses) {};

/**
 * @return {_Document.FooterSection}
 */
_Document.Document.prototype.addFooter = function() {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.Document.prototype.addHeader = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Document.Document}
 */
_Document.Document.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Document.Document}
 */
_Document.Document.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Document.Document.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Document.Document.prototype.getBlob = function() {};

/**
 * @return {_Document.Body}
 */
_Document.Document.prototype.getBody = function() {};

/**
 * @return {_Document.Cursor}
 */
_Document.Document.prototype.getCursor = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Document.Document.prototype.getEditors = function() {};

/**
 * @return {_Document.FooterSection}
 */
_Document.Document.prototype.getFooter = function() {};

/**
 * @return {Array.<_Document.Footnote>}
 */
_Document.Document.prototype.getFootnotes = function() {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.Document.prototype.getHeader = function() {};

/**
 * @return {string}
 */
_Document.Document.prototype.getId = function() {};

/**
 * @return {string}
 */
_Document.Document.prototype.getName = function() {};

/**
 * @return {_Document.Selection}
 */
_Document.Document.prototype.getSelection = function() {};

/**
 * @return {string}
 */
_Document.Document.prototype.getUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Document.Document.prototype.getViewers = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Document.Document}
 */
_Document.Document.prototype.removeEditor = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Document.Document}
 */
_Document.Document.prototype.removeViewer = function(arg1) {};

/**
 */
_Document.Document.prototype.saveAndClose = function() {};

/**
 * @param {string} name
 * @return {_Document.Document}
 */
_Document.Document.prototype.setName = function(name) {};

/**
 * Class Equation
 * @constructor
 */
_Document.Equation = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.clear = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Equation.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Equation.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Equation.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.Equation.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.Equation.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.Equation.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.Equation.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Equation.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.Equation.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Equation.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Equation.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.Equation.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Equation.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.Equation.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.merge = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.Equation.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {_Document.Equation}
 */
_Document.Equation.prototype.setLinkUrl = function(url) {};

/**
 * Class EquationFunction
 * @constructor
 */
_Document.EquationFunction = function() {};

/**
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.clear = function() {};

/**
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.EquationFunction.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.EquationFunction.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.EquationFunction.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.EquationFunction.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.EquationFunction.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.EquationFunction.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.EquationFunction.prototype.getCode = function() {};

/**
 * @return {string}
 */
_Document.EquationFunction.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationFunction.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.EquationFunction.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.EquationFunction.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationFunction.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.EquationFunction.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.EquationFunction.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.EquationFunction.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.merge = function() {};

/**
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.EquationFunction.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {_Document.EquationFunction}
 */
_Document.EquationFunction.prototype.setLinkUrl = function(url) {};

/**
 * Class EquationFunctionArgumentSeparator
 * @constructor
 */
_Document.EquationFunctionArgumentSeparator = function() {};

/**
 * @return {_Document.EquationFunctionArgumentSeparator}
 */
_Document.EquationFunctionArgumentSeparator.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.EquationFunctionArgumentSeparator.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationFunctionArgumentSeparator.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.EquationFunctionArgumentSeparator.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationFunctionArgumentSeparator.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.EquationFunctionArgumentSeparator.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.EquationFunctionArgumentSeparator.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.EquationFunctionArgumentSeparator}
 */
_Document.EquationFunctionArgumentSeparator.prototype.merge = function() {};

/**
 * @return {_Document.EquationFunctionArgumentSeparator}
 */
_Document.EquationFunctionArgumentSeparator.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.EquationFunctionArgumentSeparator}
 */
_Document.EquationFunctionArgumentSeparator.prototype.setAttributes = function(attributes) {};

/**
 * Class EquationSymbol
 * @constructor
 */
_Document.EquationSymbol = function() {};

/**
 * @return {_Document.EquationSymbol}
 */
_Document.EquationSymbol.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.EquationSymbol.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
_Document.EquationSymbol.prototype.getCode = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationSymbol.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.EquationSymbol.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.EquationSymbol.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.EquationSymbol.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.EquationSymbol.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.EquationSymbol}
 */
_Document.EquationSymbol.prototype.merge = function() {};

/**
 * @return {_Document.EquationSymbol}
 */
_Document.EquationSymbol.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.EquationSymbol}
 */
_Document.EquationSymbol.prototype.setAttributes = function(attributes) {};

/**
 * Class FooterSection
 * @constructor
 */
_Document.FooterSection = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.FooterSection.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.FooterSection.prototype.appendImage = function(image) {};

/**
 * @param {(_Document.ListItem|string)} arg1
 * @return {_Document.ListItem}
 */
_Document.FooterSection.prototype.appendListItem = function(arg1) {};

/**
 * @param {(_Document.Paragraph|string)} arg1
 * @return {_Document.Paragraph}
 */
_Document.FooterSection.prototype.appendParagraph = function(arg1) {};

/**
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg1
 * @return {_Document.Table}
 */
_Document.FooterSection.prototype.appendTable = function(arg1) {};

/**
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.clear = function() {};

/**
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.FooterSection.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.FooterSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.FooterSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.FooterSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.FooterSection.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.FooterSection.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<_Document.InlineImage>}
 */
_Document.FooterSection.prototype.getImages = function() {};

/**
 * @return {Array.<_Document.ListItem>}
 */
_Document.FooterSection.prototype.getListItems = function() {};

/**
 * @return {number}
 */
_Document.FooterSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<_Document.Paragraph>}
 */
_Document.FooterSection.prototype.getParagraphs = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.FooterSection.prototype.getParent = function() {};

/**
 * @return {Array.<_Document.Table>}
 */
_Document.FooterSection.prototype.getTables = function() {};

/**
 * @return {string}
 */
_Document.FooterSection.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.FooterSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.FooterSection.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.FooterSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {(_Document.ListItem|string)} arg2
 * @return {_Document.ListItem}
 */
_Document.FooterSection.prototype.insertListItem = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(_Document.Paragraph|string)} arg2
 * @return {_Document.Paragraph}
 */
_Document.FooterSection.prototype.insertParagraph = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg2
 * @return {_Document.Table}
 */
_Document.FooterSection.prototype.insertTable = function(childIndex, arg2) {};

/**
 * @param {_Document.Element} child
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.removeChild = function(child) {};

/**
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.FooterSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} text
 * @return {_Document.FooterSection}
 */
_Document.FooterSection.prototype.setText = function(text) {};

/**
 * Class Footnote
 * @constructor
 */
_Document.Footnote = function() {};

/**
 * @return {_Document.Footnote}
 */
_Document.Footnote.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.Footnote.prototype.getAttributes = function() {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.Footnote.prototype.getFootnoteContents = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Footnote.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Footnote.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Footnote.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Footnote.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.Footnote.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.Footnote}
 */
_Document.Footnote.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.Footnote}
 */
_Document.Footnote.prototype.setAttributes = function(attributes) {};

/**
 * Class FootnoteSection
 * @constructor
 */
_Document.FootnoteSection = function() {};

/**
 * @param {(_Document.Paragraph|string)} arg1
 * @return {_Document.Paragraph}
 */
_Document.FootnoteSection.prototype.appendParagraph = function(arg1) {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.clear = function() {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.FootnoteSection.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.FootnoteSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.FootnoteSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.FootnoteSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.FootnoteSection.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.FootnoteSection.prototype.getChildIndex = function(child) {};

/**
 * @return {_Document.Element}
 */
_Document.FootnoteSection.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.FootnoteSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<_Document.Paragraph>}
 */
_Document.FootnoteSection.prototype.getParagraphs = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.FootnoteSection.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.FootnoteSection.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.FootnoteSection.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.FootnoteSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @param {(_Document.Paragraph|string)} arg2
 * @return {_Document.Paragraph}
 */
_Document.FootnoteSection.prototype.insertParagraph = function(childIndex, arg2) {};

/**
 * @param {_Document.Element} child
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.removeChild = function(child) {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.FootnoteSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} text
 * @return {_Document.FootnoteSection}
 */
_Document.FootnoteSection.prototype.setText = function(text) {};

/**
 * Class HeaderSection
 * @constructor
 */
_Document.HeaderSection = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.HeaderSection.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.HeaderSection.prototype.appendImage = function(image) {};

/**
 * @param {(_Document.ListItem|string)} arg1
 * @return {_Document.ListItem}
 */
_Document.HeaderSection.prototype.appendListItem = function(arg1) {};

/**
 * @param {(_Document.Paragraph|string)} arg1
 * @return {_Document.Paragraph}
 */
_Document.HeaderSection.prototype.appendParagraph = function(arg1) {};

/**
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg1
 * @return {_Document.Table}
 */
_Document.HeaderSection.prototype.appendTable = function(arg1) {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.clear = function() {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.HeaderSection.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.HeaderSection.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.HeaderSection.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.HeaderSection.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.HeaderSection.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.HeaderSection.prototype.getChildIndex = function(child) {};

/**
 * @return {Array.<_Document.InlineImage>}
 */
_Document.HeaderSection.prototype.getImages = function() {};

/**
 * @return {Array.<_Document.ListItem>}
 */
_Document.HeaderSection.prototype.getListItems = function() {};

/**
 * @return {number}
 */
_Document.HeaderSection.prototype.getNumChildren = function() {};

/**
 * @return {Array.<_Document.Paragraph>}
 */
_Document.HeaderSection.prototype.getParagraphs = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.HeaderSection.prototype.getParent = function() {};

/**
 * @return {Array.<_Document.Table>}
 */
_Document.HeaderSection.prototype.getTables = function() {};

/**
 * @return {string}
 */
_Document.HeaderSection.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.HeaderSection.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.HeaderSection.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.HeaderSection.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {(_Document.ListItem|string)} arg2
 * @return {_Document.ListItem}
 */
_Document.HeaderSection.prototype.insertListItem = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(_Document.Paragraph|string)} arg2
 * @return {_Document.Paragraph}
 */
_Document.HeaderSection.prototype.insertParagraph = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg2
 * @return {_Document.Table}
 */
_Document.HeaderSection.prototype.insertTable = function(childIndex, arg2) {};

/**
 * @param {_Document.Element} child
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.removeChild = function(child) {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.HeaderSection.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} text
 * @return {_Document.HeaderSection}
 */
_Document.HeaderSection.prototype.setText = function(text) {};

/**
 * Class HorizontalRule
 * @constructor
 */
_Document.HorizontalRule = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.HorizontalRule.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.HorizontalRule.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.HorizontalRule.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.HorizontalRule.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.HorizontalRule.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.HorizontalRule.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.HorizontalRule.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.HorizontalRule.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.HorizontalRule}
 */
_Document.HorizontalRule.prototype.setAttributes = function(attributes) {};

/**
 * Class InlineDrawing
 * @constructor
 */
_Document.InlineDrawing = function() {};

/**
 * @return {_Document.InlineDrawing}
 */
_Document.InlineDrawing.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.InlineDrawing.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.InlineDrawing.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.InlineDrawing.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.InlineDrawing.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.InlineDrawing.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.InlineDrawing.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.InlineDrawing}
 */
_Document.InlineDrawing.prototype.merge = function() {};

/**
 * @return {_Document.InlineDrawing}
 */
_Document.InlineDrawing.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.InlineDrawing}
 */
_Document.InlineDrawing.prototype.setAttributes = function(attributes) {};

/**
 * Class InlineImage
 * @constructor
 */
_Document.InlineImage = function() {};

/**
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.copy = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Document.InlineImage.prototype.getAs = function(contentType) {};

/**
 * @return {Object}
 */
_Document.InlineImage.prototype.getAttributes = function() {};

/**
 * @return {_Base.Blob}
 */
_Document.InlineImage.prototype.getBlob = function() {};

/**
 * @return {number}
 */
_Document.InlineImage.prototype.getHeight = function() {};

/**
 * @return {string}
 */
_Document.InlineImage.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.InlineImage.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.InlineImage.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.InlineImage.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.InlineImage.prototype.getType = function() {};

/**
 * @return {number}
 */
_Document.InlineImage.prototype.getWidth = function() {};

/**
 * @return {boolean}
 */
_Document.InlineImage.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.merge = function() {};

/**
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.setAttributes = function(attributes) {};

/**
 * @param {number} height
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.setHeight = function(height) {};

/**
 * @param {string} url
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.setLinkUrl = function(url) {};

/**
 * @param {number} width
 * @return {_Document.InlineImage}
 */
_Document.InlineImage.prototype.setWidth = function(width) {};

/**
 * Class ListItem
 * @constructor
 */
_Document.ListItem = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.ListItem.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.ListItem.prototype.appendInlineImage = function(image) {};

/**
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.ListItem.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {(string|_Document.Text)} text
 * @return {_Document.Text}
 */
_Document.ListItem.prototype.appendText = function(text) {};

/**
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.clear = function() {};

/**
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.ListItem.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.ListItem.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.ListItem.prototype.findText = function(searchPattern, from) {};

/**
 * @return {_Document.HorizontalAlignment}
 */
_Document.ListItem.prototype.getAlignment = function() {};

/**
 * @return {Object}
 */
_Document.ListItem.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.ListItem.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.ListItem.prototype.getChildIndex = function(child) {};

/**
 * @return {_Document.GlyphType}
 */
_Document.ListItem.prototype.getGlyphType = function() {};

/**
 * @return {_Document.ParagraphHeading}
 */
_Document.ListItem.prototype.getHeading = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getIndentEnd = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getIndentFirstLine = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getIndentStart = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getLineSpacing = function() {};

/**
 * @return {string}
 */
_Document.ListItem.prototype.getLinkUrl = function() {};

/**
 * @return {string}
 */
_Document.ListItem.prototype.getListId = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getNestingLevel = function() {};

/**
 * @return {_Document.Element}
 */
_Document.ListItem.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.ListItem.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.ListItem.prototype.getPreviousSibling = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getSpacingAfter = function() {};

/**
 * @return {number}
 */
_Document.ListItem.prototype.getSpacingBefore = function() {};

/**
 * @return {string}
 */
_Document.ListItem.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.ListItem.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.ListItem.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.ListItem.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.ListItem.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {(string|_Document.Text)} text
 * @return {_Document.Text}
 */
_Document.ListItem.prototype.insertText = function(childIndex, text) {};

/**
 * @return {boolean}
 */
_Document.ListItem.prototype.isAtDocumentEnd = function() {};

/**
 * @return {boolean}
 */
_Document.ListItem.prototype.isLeftToRight = function() {};

/**
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.merge = function() {};

/**
 * @param {_Document.Element} child
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.removeChild = function(child) {};

/**
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.ListItem.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {_Document.HorizontalAlignment} alignment
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setAlignment = function(alignment) {};

/**
 * @param {Object} attributes
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setAttributes = function(attributes) {};

/**
 * @param {_Document.GlyphType} glyphType
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setGlyphType = function(glyphType) {};

/**
 * @param {_Document.ParagraphHeading} heading
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setHeading = function(heading) {};

/**
 * @param {number} indentEnd
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setIndentEnd = function(indentEnd) {};

/**
 * @param {number} indentFirstLine
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setIndentFirstLine = function(indentFirstLine) {};

/**
 * @param {number} indentStart
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setIndentStart = function(indentStart) {};

/**
 * @param {boolean} leftToRight
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setLeftToRight = function(leftToRight) {};

/**
 * @param {number} multiplier
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setLineSpacing = function(multiplier) {};

/**
 * @param {string} url
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setLinkUrl = function(url) {};

/**
 * @param {_Document.ListItem} listItem
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setListId = function(listItem) {};

/**
 * @param {number} nestingLevel
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setNestingLevel = function(nestingLevel) {};

/**
 * @param {number} spacingAfter
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setSpacingAfter = function(spacingAfter) {};

/**
 * @param {number} spacingBefore
 * @return {_Document.ListItem}
 */
_Document.ListItem.prototype.setSpacingBefore = function(spacingBefore) {};

/**
 * @param {string} text
 */
_Document.ListItem.prototype.setText = function(text) {};

/**
 * Class PageBreak
 * @constructor
 */
_Document.PageBreak = function() {};

/**
 * @return {_Document.PageBreak}
 */
_Document.PageBreak.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.PageBreak.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.PageBreak.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.PageBreak.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.PageBreak.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.PageBreak.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.PageBreak.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.PageBreak}
 */
_Document.PageBreak.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.PageBreak}
 */
_Document.PageBreak.prototype.setAttributes = function(attributes) {};

/**
 * Class Paragraph
 * @constructor
 */
_Document.Paragraph = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.Paragraph.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.Paragraph.prototype.appendInlineImage = function(image) {};

/**
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.Paragraph.prototype.appendPageBreak = function(pageBreak) {};

/**
 * @param {(string|_Document.Text)} text
 * @return {_Document.Text}
 */
_Document.Paragraph.prototype.appendText = function(text) {};

/**
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.clear = function() {};

/**
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Paragraph.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Paragraph.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Paragraph.prototype.findText = function(searchPattern, from) {};

/**
 * @return {_Document.HorizontalAlignment}
 */
_Document.Paragraph.prototype.getAlignment = function() {};

/**
 * @return {Object}
 */
_Document.Paragraph.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.Paragraph.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.Paragraph.prototype.getChildIndex = function(child) {};

/**
 * @return {_Document.ParagraphHeading}
 */
_Document.Paragraph.prototype.getHeading = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getIndentEnd = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getIndentFirstLine = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getIndentStart = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getLineSpacing = function() {};

/**
 * @return {string}
 */
_Document.Paragraph.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Paragraph.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Paragraph.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Paragraph.prototype.getPreviousSibling = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getSpacingAfter = function() {};

/**
 * @return {number}
 */
_Document.Paragraph.prototype.getSpacingBefore = function() {};

/**
 * @return {string}
 */
_Document.Paragraph.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Paragraph.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.Paragraph.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.Paragraph.prototype.insertInlineImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {_Document.PageBreak=} pageBreak
 * @return {_Document.PageBreak}
 */
_Document.Paragraph.prototype.insertPageBreak = function(childIndex, pageBreak) {};

/**
 * @param {number} childIndex
 * @param {(string|_Document.Text)} text
 * @return {_Document.Text}
 */
_Document.Paragraph.prototype.insertText = function(childIndex, text) {};

/**
 * @return {boolean}
 */
_Document.Paragraph.prototype.isAtDocumentEnd = function() {};

/**
 * @return {boolean}
 */
_Document.Paragraph.prototype.isLeftToRight = function() {};

/**
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.merge = function() {};

/**
 * @param {_Document.Element} child
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.removeChild = function(child) {};

/**
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.Paragraph.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {_Document.HorizontalAlignment} alignment
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setAlignment = function(alignment) {};

/**
 * @param {Object} attributes
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setAttributes = function(attributes) {};

/**
 * @param {_Document.ParagraphHeading} heading
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setHeading = function(heading) {};

/**
 * @param {number} indentEnd
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setIndentEnd = function(indentEnd) {};

/**
 * @param {number} indentFirstLine
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setIndentFirstLine = function(indentFirstLine) {};

/**
 * @param {number} indentStart
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setIndentStart = function(indentStart) {};

/**
 * @param {boolean} leftToRight
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setLeftToRight = function(leftToRight) {};

/**
 * @param {number} multiplier
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setLineSpacing = function(multiplier) {};

/**
 * @param {string} url
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setLinkUrl = function(url) {};

/**
 * @param {number} spacingAfter
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setSpacingAfter = function(spacingAfter) {};

/**
 * @param {number} spacingBefore
 * @return {_Document.Paragraph}
 */
_Document.Paragraph.prototype.setSpacingBefore = function(spacingBefore) {};

/**
 * @param {string} text
 */
_Document.Paragraph.prototype.setText = function(text) {};

/**
 * Class SearchResult
 * @constructor
 */
_Document.SearchResult = function() {};

/**
 * @return {_Document.Element}
 */
_Document.SearchResult.prototype.getElement = function() {};

/**
 * @return {number}
 */
_Document.SearchResult.prototype.getEndOffsetInclusive = function() {};

/**
 * @return {number}
 */
_Document.SearchResult.prototype.getStartOffset = function() {};

/**
 * @return {boolean}
 */
_Document.SearchResult.prototype.isPartial = function() {};

/**
 * Class SelectedElement
 * @constructor
 */
_Document.SelectedElement = function() {};

/**
 * @return {_Document.Element}
 */
_Document.SelectedElement.prototype.getElement = function() {};

/**
 * @return {number}
 */
_Document.SelectedElement.prototype.getEndOffsetInclusive = function() {};

/**
 * @return {number}
 */
_Document.SelectedElement.prototype.getStartOffset = function() {};

/**
 * @return {boolean}
 */
_Document.SelectedElement.prototype.isPartial = function() {};

/**
 * Class Selection
 * @constructor
 */
_Document.Selection = function() {};

/**
 * @return {Array.<_Document.SelectedElement>}
 */
_Document.Selection.prototype.getSelectedElements = function() {};

/**
 * Class Table
 * @constructor
 */
_Document.Table = function() {};

/**
 * @param {_Document.TableRow=} tableRow
 * @return {_Document.TableRow}
 */
_Document.Table.prototype.appendTableRow = function(tableRow) {};

/**
 * @return {_Document.Table}
 */
_Document.Table.prototype.clear = function() {};

/**
 * @return {_Document.Table}
 */
_Document.Table.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Table.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Table.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Table.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.Table.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
_Document.Table.prototype.getBorderColor = function() {};

/**
 * @return {number}
 */
_Document.Table.prototype.getBorderWidth = function() {};

/**
 * @param {number} rowIndex
 * @param {number} cellIndex
 * @return {_Document.TableCell}
 */
_Document.Table.prototype.getCell = function(rowIndex, cellIndex) {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.Table.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.Table.prototype.getChildIndex = function(child) {};

/**
 * @param {number} columnIndex
 * @return {number}
 */
_Document.Table.prototype.getColumnWidth = function(columnIndex) {};

/**
 * @return {string}
 */
_Document.Table.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Table.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.Table.prototype.getNumChildren = function() {};

/**
 * @return {number}
 */
_Document.Table.prototype.getNumRows = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Table.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Table.prototype.getPreviousSibling = function() {};

/**
 * @param {number} rowIndex
 * @return {_Document.TableRow}
 */
_Document.Table.prototype.getRow = function(rowIndex) {};

/**
 * @return {string}
 */
_Document.Table.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Table.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @param {_Document.TableRow=} tableRow
 * @return {_Document.TableRow}
 */
_Document.Table.prototype.insertTableRow = function(childIndex, tableRow) {};

/**
 * @return {boolean}
 */
_Document.Table.prototype.isAtDocumentEnd = function() {};

/**
 * @param {_Document.Element} child
 * @return {_Document.Table}
 */
_Document.Table.prototype.removeChild = function(child) {};

/**
 * @return {_Document.Table}
 */
_Document.Table.prototype.removeFromParent = function() {};

/**
 * @param {number} rowIndex
 * @return {_Document.TableRow}
 */
_Document.Table.prototype.removeRow = function(rowIndex) {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.Table.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.Table}
 */
_Document.Table.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} color
 * @return {_Document.Table}
 */
_Document.Table.prototype.setBorderColor = function(color) {};

/**
 * @param {number} width
 * @return {_Document.Table}
 */
_Document.Table.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} columnIndex
 * @param {number} width
 * @return {_Document.Table}
 */
_Document.Table.prototype.setColumnWidth = function(columnIndex, width) {};

/**
 * @param {string} url
 * @return {_Document.Table}
 */
_Document.Table.prototype.setLinkUrl = function(url) {};

/**
 * Class TableCell
 * @constructor
 */
_Document.TableCell = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.TableCell.prototype.appendHorizontalRule = function() {};

/**
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.TableCell.prototype.appendImage = function(image) {};

/**
 * @param {(_Document.ListItem|string)} arg1
 * @return {_Document.ListItem}
 */
_Document.TableCell.prototype.appendListItem = function(arg1) {};

/**
 * @param {(_Document.Paragraph|string)} arg1
 * @return {_Document.Paragraph}
 */
_Document.TableCell.prototype.appendParagraph = function(arg1) {};

/**
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg1
 * @return {_Document.Table}
 */
_Document.TableCell.prototype.appendTable = function(arg1) {};

/**
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.clear = function() {};

/**
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.TableCell.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableCell.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableCell.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.TableCell.prototype.getAttributes = function() {};

/**
 * @return {string}
 */
_Document.TableCell.prototype.getBackgroundColor = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.TableCell.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.TableCell.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.TableCell.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableCell.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getNumChildren = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getPaddingBottom = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getPaddingLeft = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getPaddingRight = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getPaddingTop = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.TableCell.prototype.getParent = function() {};

/**
 * @return {_Document.TableRow}
 */
_Document.TableCell.prototype.getParentRow = function() {};

/**
 * @return {_Document.Table}
 */
_Document.TableCell.prototype.getParentTable = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableCell.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.TableCell.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.TableCell.prototype.getType = function() {};

/**
 * @return {_Document.VerticalAlignment}
 */
_Document.TableCell.prototype.getVerticalAlignment = function() {};

/**
 * @return {number}
 */
_Document.TableCell.prototype.getWidth = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.HorizontalRule}
 */
_Document.TableCell.prototype.insertHorizontalRule = function(childIndex) {};

/**
 * @param {number} childIndex
 * @param {(_Base.BlobSource|_Document.InlineImage)} image
 * @return {_Document.InlineImage}
 */
_Document.TableCell.prototype.insertImage = function(childIndex, image) {};

/**
 * @param {number} childIndex
 * @param {(_Document.ListItem|string)} arg2
 * @return {_Document.ListItem}
 */
_Document.TableCell.prototype.insertListItem = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(_Document.Paragraph|string)} arg2
 * @return {_Document.Paragraph}
 */
_Document.TableCell.prototype.insertParagraph = function(childIndex, arg2) {};

/**
 * @param {number} childIndex
 * @param {(Array.<Array.<string>>|_Document.Table)=} arg2
 * @return {_Document.Table}
 */
_Document.TableCell.prototype.insertTable = function(childIndex, arg2) {};

/**
 * @return {boolean}
 */
_Document.TableCell.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.merge = function() {};

/**
 * @param {_Document.Element} child
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.removeChild = function(child) {};

/**
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.TableCell.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} color
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setBackgroundColor = function(color) {};

/**
 * @param {string} url
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setLinkUrl = function(url) {};

/**
 * @param {number} paddingBottom
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setPaddingBottom = function(paddingBottom) {};

/**
 * @param {number} paddingLeft
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setPaddingLeft = function(paddingLeft) {};

/**
 * @param {number} paddingTop
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setPaddingRight = function(paddingTop) {};

/**
 * @param {number} paddingTop
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setPaddingTop = function(paddingTop) {};

/**
 * @param {string} text
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setText = function(text) {};

/**
 * @param {_Document.VerticalAlignment} alignment
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setVerticalAlignment = function(alignment) {};

/**
 * @param {number} width
 * @return {_Document.TableCell}
 */
_Document.TableCell.prototype.setWidth = function(width) {};

/**
 * Class TableOfContents
 * @constructor
 */
_Document.TableOfContents = function() {};

/**
 * @return {_Document.TableOfContents}
 */
_Document.TableOfContents.prototype.clear = function() {};

/**
 * @return {_Document.TableOfContents}
 */
_Document.TableOfContents.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.TableOfContents.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableOfContents.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableOfContents.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.TableOfContents.prototype.getAttributes = function() {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.TableOfContents.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.TableOfContents.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.TableOfContents.prototype.getLinkUrl = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableOfContents.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.TableOfContents.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.TableOfContents.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableOfContents.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.TableOfContents.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.TableOfContents.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.TableOfContents.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.TableOfContents}
 */
_Document.TableOfContents.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.TableOfContents.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.TableOfContents}
 */
_Document.TableOfContents.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {_Document.TableOfContents}
 */
_Document.TableOfContents.prototype.setLinkUrl = function(url) {};

/**
 * Class TableRow
 * @constructor
 */
_Document.TableRow = function() {};

/**
 * @param {(string|_Document.TableCell)=} arg1
 * @return {_Document.TableCell}
 */
_Document.TableRow.prototype.appendTableCell = function(arg1) {};

/**
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.clear = function() {};

/**
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.copy = function() {};

/**
 * @return {_Document.Text}
 */
_Document.TableRow.prototype.editAsText = function() {};

/**
 * @param {_Document.ElementType} elementType
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableRow.prototype.findElement = function(elementType, from) {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.TableRow.prototype.findText = function(searchPattern, from) {};

/**
 * @return {Object}
 */
_Document.TableRow.prototype.getAttributes = function() {};

/**
 * @param {number} cellIndex
 * @return {_Document.TableCell}
 */
_Document.TableRow.prototype.getCell = function(cellIndex) {};

/**
 * @param {number} childIndex
 * @return {_Document.Element}
 */
_Document.TableRow.prototype.getChild = function(childIndex) {};

/**
 * @param {_Document.Element} child
 * @return {number}
 */
_Document.TableRow.prototype.getChildIndex = function(child) {};

/**
 * @return {string}
 */
_Document.TableRow.prototype.getLinkUrl = function() {};

/**
 * @return {number}
 */
_Document.TableRow.prototype.getMinimumHeight = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableRow.prototype.getNextSibling = function() {};

/**
 * @return {number}
 */
_Document.TableRow.prototype.getNumCells = function() {};

/**
 * @return {number}
 */
_Document.TableRow.prototype.getNumChildren = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.TableRow.prototype.getParent = function() {};

/**
 * @return {_Document.Table}
 */
_Document.TableRow.prototype.getParentTable = function() {};

/**
 * @return {_Document.Element}
 */
_Document.TableRow.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.TableRow.prototype.getText = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.TableRow.prototype.getType = function() {};

/**
 * @param {number} childIndex
 * @param {(string|_Document.TableCell)=} arg2
 * @return {_Document.TableCell}
 */
_Document.TableRow.prototype.insertTableCell = function(childIndex, arg2) {};

/**
 * @return {boolean}
 */
_Document.TableRow.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.merge = function() {};

/**
 * @param {number} cellIndex
 * @return {_Document.TableCell}
 */
_Document.TableRow.prototype.removeCell = function(cellIndex) {};

/**
 * @param {_Document.Element} child
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.removeChild = function(child) {};

/**
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.TableRow.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {Object} attributes
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.setAttributes = function(attributes) {};

/**
 * @param {string} url
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.setLinkUrl = function(url) {};

/**
 * @param {number} minHeight
 * @return {_Document.TableRow}
 */
_Document.TableRow.prototype.setMinimumHeight = function(minHeight) {};

/**
 * Class Text
 * @constructor
 */
_Document.Text = function() {};

/**
 * @param {string} text
 * @return {_Document.Text}
 */
_Document.Text.prototype.appendText = function(text) {};

/**
 * @return {_Document.Text}
 */
_Document.Text.prototype.copy = function() {};

/**
 * @param {number} startOffset
 * @param {number} endOffsetInclusive
 * @return {_Document.Text}
 */
_Document.Text.prototype.deleteText = function(startOffset, endOffsetInclusive) {};

/**
 * @return {_Document.Text}
 */
_Document.Text.prototype.editAsText = function() {};

/**
 * @param {string} searchPattern
 * @param {_Document.SearchResult=} from
 * @return {_Document.SearchResult}
 */
_Document.Text.prototype.findText = function(searchPattern, from) {};

/**
 * @param {number=} offset
 * @return {Object}
 */
_Document.Text.prototype.getAttributes = function(offset) {};

/**
 * @param {number=} offset
 * @return {string}
 */
_Document.Text.prototype.getBackgroundColor = function(offset) {};

/**
 * @param {number=} offset
 * @return {_Document.FontFamily}
 */
_Document.Text.prototype.getFontFamily = function(offset) {};

/**
 * @param {number=} offset
 * @return {number}
 */
_Document.Text.prototype.getFontSize = function(offset) {};

/**
 * @param {number=} offset
 * @return {string}
 */
_Document.Text.prototype.getForegroundColor = function(offset) {};

/**
 * @param {number=} offset
 * @return {string}
 */
_Document.Text.prototype.getLinkUrl = function(offset) {};

/**
 * @return {_Document.Element}
 */
_Document.Text.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Text.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Text.prototype.getPreviousSibling = function() {};

/**
 * @return {string}
 */
_Document.Text.prototype.getText = function() {};

/**
 * @return {Array.<number>}
 */
_Document.Text.prototype.getTextAttributeIndices = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Text.prototype.getType = function() {};

/**
 * @param {number} offset
 * @param {string} text
 * @return {_Document.Text}
 */
_Document.Text.prototype.insertText = function(offset, text) {};

/**
 * @return {boolean}
 */
_Document.Text.prototype.isAtDocumentEnd = function() {};

/**
 * @param {number=} offset
 * @return {boolean}
 */
_Document.Text.prototype.isBold = function(offset) {};

/**
 * @param {number=} offset
 * @return {boolean}
 */
_Document.Text.prototype.isItalic = function(offset) {};

/**
 * @param {number=} offset
 * @return {boolean}
 */
_Document.Text.prototype.isStrikethrough = function(offset) {};

/**
 * @param {number=} offset
 * @return {boolean}
 */
_Document.Text.prototype.isUnderline = function(offset) {};

/**
 * @return {_Document.Text}
 */
_Document.Text.prototype.merge = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Text.prototype.removeFromParent = function() {};

/**
 * @param {string} searchPattern
 * @param {string} replacement
 * @return {_Document.Element}
 */
_Document.Text.prototype.replaceText = function(searchPattern, replacement) {};

/**
 * @param {(number|Object)} arg1
 * @param {number=} endOffsetInclusive
 * @param {Object=} attributes
 * @return {_Document.Text}
 */
_Document.Text.prototype.setAttributes = function(arg1, endOffsetInclusive, attributes) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} endOffsetInclusive
 * @param {string=} color
 * @return {_Document.Text}
 */
_Document.Text.prototype.setBackgroundColor = function(arg1, endOffsetInclusive, color) {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} endOffsetInclusive
 * @param {boolean=} bold
 * @return {_Document.Text}
 */
_Document.Text.prototype.setBold = function(arg1, endOffsetInclusive, bold) {};

/**
 * @param {(_Document.FontFamily|number)} arg1
 * @param {number=} endOffsetInclusive
 * @param {_Document.FontFamily=} family
 * @return {_Document.Text}
 */
_Document.Text.prototype.setFontFamily = function(arg1, endOffsetInclusive, family) {};

/**
 * @param {number} arg1
 * @param {number=} endOffsetInclusive
 * @param {number=} size
 * @return {_Document.Text}
 */
_Document.Text.prototype.setFontSize = function(arg1, endOffsetInclusive, size) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} endOffsetInclusive
 * @param {string=} color
 * @return {_Document.Text}
 */
_Document.Text.prototype.setForegroundColor = function(arg1, endOffsetInclusive, color) {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} endOffsetInclusive
 * @param {boolean=} italic
 * @return {_Document.Text}
 */
_Document.Text.prototype.setItalic = function(arg1, endOffsetInclusive, italic) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} endOffsetInclusive
 * @param {string=} url
 * @return {_Document.Text}
 */
_Document.Text.prototype.setLinkUrl = function(arg1, endOffsetInclusive, url) {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} endOffsetInclusive
 * @param {boolean=} strikethrough
 * @return {_Document.Text}
 */
_Document.Text.prototype.setStrikethrough = function(arg1, endOffsetInclusive, strikethrough) {};

/**
 * @param {string} text
 * @return {_Document.Text}
 */
_Document.Text.prototype.setText = function(text) {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} endOffsetInclusive
 * @param {boolean=} underline
 * @return {_Document.Text}
 */
_Document.Text.prototype.setUnderline = function(arg1, endOffsetInclusive, underline) {};

/**
 * Class UnsupportedElement
 * @constructor
 */
_Document.UnsupportedElement = function() {};

/**
 * @return {_Document.UnsupportedElement}
 */
_Document.UnsupportedElement.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.UnsupportedElement.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.UnsupportedElement.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.UnsupportedElement.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.UnsupportedElement.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.UnsupportedElement.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.UnsupportedElement.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.UnsupportedElement}
 */
_Document.UnsupportedElement.prototype.merge = function() {};

/**
 * @return {_Document.UnsupportedElement}
 */
_Document.UnsupportedElement.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.UnsupportedElement}
 */
_Document.UnsupportedElement.prototype.setAttributes = function(attributes) {};

/**
 * Interface Element
 * @constructor
 */
_Document.Element = function() {};

/**
 * @return {_Document.Body}
 */
_Document.Element.prototype.asBody = function() {};

/**
 * @return {_Document.Equation}
 */
_Document.Element.prototype.asEquation = function() {};

/**
 * @return {_Document.EquationFunction}
 */
_Document.Element.prototype.asEquationFunction = function() {};

/**
 * @return {_Document.EquationFunctionArgumentSeparator}
 */
_Document.Element.prototype.asEquationFunctionArgumentSeparator = function() {};

/**
 * @return {_Document.EquationSymbol}
 */
_Document.Element.prototype.asEquationSymbol = function() {};

/**
 * @return {_Document.FooterSection}
 */
_Document.Element.prototype.asFooterSection = function() {};

/**
 * @return {_Document.Footnote}
 */
_Document.Element.prototype.asFootnote = function() {};

/**
 * @return {_Document.FootnoteSection}
 */
_Document.Element.prototype.asFootnoteSection = function() {};

/**
 * @return {_Document.HeaderSection}
 */
_Document.Element.prototype.asHeaderSection = function() {};

/**
 * @return {_Document.HorizontalRule}
 */
_Document.Element.prototype.asHorizontalRule = function() {};

/**
 * @return {_Document.InlineDrawing}
 */
_Document.Element.prototype.asInlineDrawing = function() {};

/**
 * @return {_Document.InlineImage}
 */
_Document.Element.prototype.asInlineImage = function() {};

/**
 * @return {_Document.ListItem}
 */
_Document.Element.prototype.asListItem = function() {};

/**
 * @return {_Document.PageBreak}
 */
_Document.Element.prototype.asPageBreak = function() {};

/**
 * @return {_Document.Paragraph}
 */
_Document.Element.prototype.asParagraph = function() {};

/**
 * @return {_Document.Table}
 */
_Document.Element.prototype.asTable = function() {};

/**
 * @return {_Document.TableCell}
 */
_Document.Element.prototype.asTableCell = function() {};

/**
 * @return {_Document.TableOfContents}
 */
_Document.Element.prototype.asTableOfContents = function() {};

/**
 * @return {_Document.TableRow}
 */
_Document.Element.prototype.asTableRow = function() {};

/**
 * @return {_Document.Text}
 */
_Document.Element.prototype.asText = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Element.prototype.copy = function() {};

/**
 * @return {Object}
 */
_Document.Element.prototype.getAttributes = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Element.prototype.getNextSibling = function() {};

/**
 * @return {_Document.ContainerElement}
 */
_Document.Element.prototype.getParent = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Element.prototype.getPreviousSibling = function() {};

/**
 * @return {_Document.ElementType}
 */
_Document.Element.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Document.Element.prototype.isAtDocumentEnd = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Element.prototype.merge = function() {};

/**
 * @return {_Document.Element}
 */
_Document.Element.prototype.removeFromParent = function() {};

/**
 * @param {Object} attributes
 * @return {_Document.Element}
 */
_Document.Element.prototype.setAttributes = function(attributes) {};

/**
 * Enum Attribute
 * @constructor
 */
_Document.Attribute = function() {};

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.BACKGROUND_COLOR;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.BOLD;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.BORDER_COLOR;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.BORDER_WIDTH;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.CODE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.FONT_FAMILY;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.FONT_SIZE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.FOREGROUND_COLOR;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.HEADING;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.HEIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.HORIZONTAL_ALIGNMENT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.INDENT_END;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.INDENT_FIRST_LINE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.INDENT_START;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.ITALIC;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.GLYPH_TYPE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.LEFT_TO_RIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.LINE_SPACING;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.LINK_URL;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.LIST_ID;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.MARGIN_BOTTOM;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.MARGIN_LEFT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.MARGIN_RIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.MARGIN_TOP;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.NESTING_LEVEL;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.MINIMUM_HEIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PADDING_BOTTOM;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PADDING_LEFT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PADDING_RIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PADDING_TOP;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PAGE_HEIGHT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.PAGE_WIDTH;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.SPACING_AFTER;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.SPACING_BEFORE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.STRIKETHROUGH;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.UNDERLINE;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.VERTICAL_ALIGNMENT;

/**
 * @type {_Document.Attribute}
 */
_Document.Attribute.prototype.WIDTH;

/**
 * Enum ElementType
 * @constructor
 */
_Document.ElementType = function() {};

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.BODY_SECTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.COMMENT_SECTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.DOCUMENT;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.EQUATION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.EQUATION_FUNCTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.EQUATION_FUNCTION_ARGUMENT_SEPARATOR;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.EQUATION_SYMBOL;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.FOOTER_SECTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.FOOTNOTE;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.FOOTNOTE_SECTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.HEADER_SECTION;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.HORIZONTAL_RULE;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.INLINE_DRAWING;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.INLINE_IMAGE;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.LIST_ITEM;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.PAGE_BREAK;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.PARAGRAPH;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.TABLE;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.TABLE_CELL;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.TABLE_OF_CONTENTS;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.TABLE_ROW;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.TEXT;

/**
 * @type {_Document.ElementType}
 */
_Document.ElementType.prototype.UNSUPPORTED;

/**
 * Enum FontFamily
 * @constructor
 */
_Document.FontFamily = function() {};

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.AMARANTH;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.ARIAL;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.ARIAL_BLACK;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.ARIAL_NARROW;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.ARVO;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.CALIBRI;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.CAMBRIA;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.COMIC_SANS_MS;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.CONSOLAS;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.CORSIVA;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.COURIER_NEW;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.DANCING_SCRIPT;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.DROID_SANS;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.DROID_SERIF;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.GARAMOND;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.GEORGIA;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.LOBSTER;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.MERRIWEATHER;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.PHILOSOPHER;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.QUATTROCENTO;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.SYNCOPATE;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.TAHOMA;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.TIMES_NEW_ROMAN;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.TREBUCHET_MS;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.UBUNTU;

/**
 * @type {_Document.FontFamily}
 */
_Document.FontFamily.prototype.VERDANA;

/**
 * Enum GlyphType
 * @constructor
 */
_Document.GlyphType = function() {};

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.BULLET;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.HOLLOW_BULLET;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.SQUARE_BULLET;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.NUMBER;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.LATIN_UPPER;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.LATIN_LOWER;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.ROMAN_UPPER;

/**
 * @type {_Document.GlyphType}
 */
_Document.GlyphType.prototype.ROMAN_LOWER;

/**
 * Enum HorizontalAlignment
 * @constructor
 */
_Document.HorizontalAlignment = function() {};

/**
 * @type {_Document.HorizontalAlignment}
 */
_Document.HorizontalAlignment.prototype.LEFT;

/**
 * @type {_Document.HorizontalAlignment}
 */
_Document.HorizontalAlignment.prototype.CENTER;

/**
 * @type {_Document.HorizontalAlignment}
 */
_Document.HorizontalAlignment.prototype.RIGHT;

/**
 * @type {_Document.HorizontalAlignment}
 */
_Document.HorizontalAlignment.prototype.JUSTIFY;

/**
 * Enum ParagraphHeading
 * @constructor
 */
_Document.ParagraphHeading = function() {};

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.NORMAL;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING1;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING2;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING3;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING4;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING5;

/**
 * @type {_Document.ParagraphHeading}
 */
_Document.ParagraphHeading.prototype.HEADING6;

/**
 * Enum VerticalAlignment
 * @constructor
 */
_Document.VerticalAlignment = function() {};

/**
 * @type {_Document.VerticalAlignment}
 */
_Document.VerticalAlignment.prototype.BOTTOM;

/**
 * @type {_Document.VerticalAlignment}
 */
_Document.VerticalAlignment.prototype.CENTER;

/**
 * @type {_Document.VerticalAlignment}
 */
_Document.VerticalAlignment.prototype.TOP;


/**
 * _Domain Services
 */
var _Domain = {};

/**
 * Class GroupsManager
 * @constructor
 */
_Domain.GroupsManager = function() {};

/**
 * @type {_Domain.PermissionLevel}
 */
_Domain.GroupsManager.prototype.PermissionLevel;

/**
 * @param {string} groupId
 * @param {string} name
 * @param {string=} description
 * @param {_Domain.PermissionLevel=} permissionLevel
 * @return {_Domain.DomainGroup}
 */
_Domain.GroupsManager.prototype.createGroup = function(groupId, name, description, permissionLevel) {};

/**
 * @param {string=} memberId
 * @return {Array.<_Domain.DomainGroup>}
 */
_Domain.GroupsManager.prototype.getAllGroups = function(memberId) {};

/**
 * @return {string}
 */
_Domain.GroupsManager.prototype.getDomain = function() {};

/**
 * @param {string} groupId
 * @return {_Domain.DomainGroup}
 */
_Domain.GroupsManager.prototype.getGroup = function(groupId) {};


/**
 * @type {_Domain.GroupsManager}
 */
var GroupsManager = new _Domain.GroupsManager();

/**
 * Class NicknameManager
 * @constructor
 */
_Domain.NicknameManager = function() {};

/**
 * @param {string} username
 * @param {string} nickname
 * @return {_Domain.DomainNickname}
 */
_Domain.NicknameManager.prototype.createNickname = function(username, nickname) {};

/**
 * @param {string=} username
 * @return {Array.<_Domain.DomainNickname>}
 */
_Domain.NicknameManager.prototype.getAllNicknames = function(username) {};

/**
 * @return {string}
 */
_Domain.NicknameManager.prototype.getDomain = function() {};

/**
 * @param {string} nickname
 * @return {_Domain.DomainNickname}
 */
_Domain.NicknameManager.prototype.getNickname = function(nickname) {};


/**
 * @type {_Domain.NicknameManager}
 */
var NicknameManager = new _Domain.NicknameManager();

/**
 * Class UserManager
 * @constructor
 */
_Domain.UserManager = function() {};

/**
 * @param {string} username
 * @param {string} givenName
 * @param {string} familyName
 * @param {string} password
 * @param {_Utilities.DigestAlgorithm=} passwordHashFunction
 * @return {_Domain.DomainUser}
 */
_Domain.UserManager.prototype.createUser = function(username, givenName, familyName, password, passwordHashFunction) {};

/**
 * @return {Array.<_Domain.DomainUser>}
 */
_Domain.UserManager.prototype.getAllUsers = function() {};

/**
 * @return {string}
 */
_Domain.UserManager.prototype.getDomain = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Domain.DomainUser}
 */
_Domain.UserManager.prototype.getUser = function(arg1) {};


/**
 * @type {_Domain.UserManager}
 */
var UserManager = new _Domain.UserManager();

/**
 * Class DomainGroup
 * @constructor
 */
_Domain.DomainGroup = function() {};

/**
 * @param {string} memberId
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.addMember = function(memberId) {};

/**
 * @param {string} ownerId
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.addOwner = function(ownerId) {};

/**
 */
_Domain.DomainGroup.prototype.deleteGroup = function() {};

/**
 * @return {Array.<string>}
 */
_Domain.DomainGroup.prototype.getAllMembers = function() {};

/**
 * @return {Array.<string>}
 */
_Domain.DomainGroup.prototype.getAllOwners = function() {};

/**
 * @return {string}
 */
_Domain.DomainGroup.prototype.getDescription = function() {};

/**
 * @return {string}
 */
_Domain.DomainGroup.prototype.getId = function() {};

/**
 * @return {string}
 */
_Domain.DomainGroup.prototype.getName = function() {};

/**
 * @return {_Domain.PermissionLevel}
 */
_Domain.DomainGroup.prototype.getPermissionLevel = function() {};

/**
 * @param {string} memberId
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.removeMember = function(memberId) {};

/**
 * @param {string} ownerId
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.removeOwner = function(ownerId) {};

/**
 * @param {string} description
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.setName = function(name) {};

/**
 * @param {_Domain.PermissionLevel} level
 * @return {_Domain.DomainGroup}
 */
_Domain.DomainGroup.prototype.setPermissionLevel = function(level) {};

/**
 * Class DomainNickname
 * @constructor
 */
_Domain.DomainNickname = function() {};

/**
 */
_Domain.DomainNickname.prototype.deleteNickname = function() {};

/**
 * @return {string}
 */
_Domain.DomainNickname.prototype.getNickname = function() {};

/**
 * @return {string}
 */
_Domain.DomainNickname.prototype.getUsername = function() {};

/**
 * Class DomainUser
 * @constructor
 */
_Domain.DomainUser = function() {};

/**
 */
_Domain.DomainUser.prototype.deleteUser = function() {};

/**
 * @return {boolean}
 */
_Domain.DomainUser.prototype.getAgreedToTerms = function() {};

/**
 * @return {boolean}
 */
_Domain.DomainUser.prototype.getChangePasswordAtNextLogin = function() {};

/**
 * @return {string}
 */
_Domain.DomainUser.prototype.getEmail = function() {};

/**
 * @return {string}
 */
_Domain.DomainUser.prototype.getFamilyName = function() {};

/**
 * @return {string}
 */
_Domain.DomainUser.prototype.getGivenName = function() {};

/**
 * @return {boolean}
 */
_Domain.DomainUser.prototype.getIsAdmin = function() {};

/**
 * @return {boolean}
 */
_Domain.DomainUser.prototype.getIsSuspended = function() {};

/**
 * @return {number}
 */
_Domain.DomainUser.prototype.getStorageQuota = function() {};

/**
 * @param {boolean} changePassword
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setChangePasswordAtNextLogin = function(changePassword) {};

/**
 * @param {string} name
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setFamilyName = function(name) {};

/**
 * @param {string} name
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setGivenName = function(name) {};

/**
 * @param {boolean} admin
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setIsAdmin = function(admin) {};

/**
 * @param {boolean} suspended
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setIsSuspended = function(suspended) {};

/**
 * @param {string} password
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setPassword = function(password) {};

/**
 * @param {string} username
 * @return {_Domain.DomainUser}
 */
_Domain.DomainUser.prototype.setUsername = function(username) {};

/**
 * Enum PermissionLevel
 * @constructor
 */
_Domain.PermissionLevel = function() {};

/**
 * @type {_Domain.PermissionLevel}
 */
_Domain.PermissionLevel.prototype.ANYONE;

/**
 * @type {_Domain.PermissionLevel}
 */
_Domain.PermissionLevel.prototype.DOMAIN;

/**
 * @type {_Domain.PermissionLevel}
 */
_Domain.PermissionLevel.prototype.MEMBER;

/**
 * @type {_Domain.PermissionLevel}
 */
_Domain.PermissionLevel.prototype.OWNER;


/**
 * _Drive Services
 */
var _Drive = {};

/**
 * Class DriveApp
 * @constructor
 */
_Drive.DriveApp = function() {};

/**
 * @type {_Drive.Access}
 */
_Drive.DriveApp.prototype.Access;

/**
 * @type {_Drive.Permission}
 */
_Drive.DriveApp.prototype.Permission;

/**
 * @param {_Drive.File} child
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.addFile = function(child) {};

/**
 * @param {_Drive.Folder} child
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.addFolder = function(child) {};

/**
 * @param {string} continuationToken
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.continueFileIterator = function(continuationToken) {};

/**
 * @param {string} continuationToken
 * @return {_Drive.FolderIterator}
 */
_Drive.DriveApp.prototype.continueFolderIterator = function(continuationToken) {};

/**
 * @param {(_Base.BlobSource|string)} arg1
 * @param {string=} content
 * @param {string=} mimeType
 * @return {_Drive.File}
 */
_Drive.DriveApp.prototype.createFile = function(arg1, content, mimeType) {};

/**
 * @param {string} name
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.createFolder = function(name) {};

/**
 * @param {string} id
 * @return {_Drive.File}
 */
_Drive.DriveApp.prototype.getFileById = function(id) {};

/**
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.getFiles = function() {};

/**
 * @param {string} name
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.getFilesByName = function(name) {};

/**
 * @param {string} mimeType
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.getFilesByType = function(mimeType) {};

/**
 * @param {string} id
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.getFolderById = function(id) {};

/**
 * @return {_Drive.FolderIterator}
 */
_Drive.DriveApp.prototype.getFolders = function() {};

/**
 * @param {string} name
 * @return {_Drive.FolderIterator}
 */
_Drive.DriveApp.prototype.getFoldersByName = function(name) {};

/**
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.getRootFolder = function() {};

/**
 * @return {number}
 */
_Drive.DriveApp.prototype.getStorageLimit = function() {};

/**
 * @return {number}
 */
_Drive.DriveApp.prototype.getStorageUsed = function() {};

/**
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.getTrashedFiles = function() {};

/**
 * @return {_Drive.FolderIterator}
 */
_Drive.DriveApp.prototype.getTrashedFolders = function() {};

/**
 * @param {_Drive.File} child
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.removeFile = function(child) {};

/**
 * @param {_Drive.Folder} child
 * @return {_Drive.Folder}
 */
_Drive.DriveApp.prototype.removeFolder = function(child) {};

/**
 * @param {string} params
 * @return {_Drive.FileIterator}
 */
_Drive.DriveApp.prototype.searchFiles = function(params) {};

/**
 * @param {string} params
 * @return {_Drive.FolderIterator}
 */
_Drive.DriveApp.prototype.searchFolders = function(params) {};


/**
 * @type {_Drive.DriveApp}
 */
var DriveApp = new _Drive.DriveApp();

/**
 * Class File
 * @constructor
 */
_Drive.File = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.addCommenter = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Drive.File}
 */
_Drive.File.prototype.addCommenters = function(emailAddresses) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Drive.File}
 */
_Drive.File.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Drive.File}
 */
_Drive.File.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Permission}
 */
_Drive.File.prototype.getAccess = function(arg1) {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Drive.File.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Drive.File.prototype.getBlob = function() {};

/**
 * @return {Date}
 */
_Drive.File.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getDescription = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getDownloadUrl = function() {};

/**
 * @return {Array.<_Drive.User>}
 */
_Drive.File.prototype.getEditors = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getId = function() {};

/**
 * @return {Date}
 */
_Drive.File.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getMimeType = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getName = function() {};

/**
 * @return {_Drive.User}
 */
_Drive.File.prototype.getOwner = function() {};

/**
 * @return {_Drive.FolderIterator}
 */
_Drive.File.prototype.getParents = function() {};

/**
 * @return {_Drive.Access}
 */
_Drive.File.prototype.getSharingAccess = function() {};

/**
 * @return {_Drive.Permission}
 */
_Drive.File.prototype.getSharingPermission = function() {};

/**
 * @return {number}
 */
_Drive.File.prototype.getSize = function() {};

/**
 * @return {_Base.Blob}
 */
_Drive.File.prototype.getThumbnail = function() {};

/**
 * @return {string}
 */
_Drive.File.prototype.getUrl = function() {};

/**
 * @return {Array.<_Drive.User>}
 */
_Drive.File.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
_Drive.File.prototype.isShareableByEditors = function() {};

/**
 * @return {boolean}
 */
_Drive.File.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
_Drive.File.prototype.isTrashed = function() {};

/**
 * @param {(_Drive.Folder|string)=} arg1
 * @param {_Drive.Folder=} destination
 * @return {_Drive.File}
 */
_Drive.File.prototype.makeCopy = function(arg1, destination) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.removeCommenter = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.removeEditor = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.removeViewer = function(arg1) {};

/**
 * @param {(string|_Base.User)} user
 * @return {_Drive.File}
 */
_Drive.File.prototype.revokePermissions = function(user) {};

/**
 * @param {string} content
 * @return {_Drive.File}
 */
_Drive.File.prototype.setContent = function(content) {};

/**
 * @param {string} description
 * @return {_Drive.File}
 */
_Drive.File.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {_Drive.File}
 */
_Drive.File.prototype.setName = function(name) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.File}
 */
_Drive.File.prototype.setOwner = function(arg1) {};

/**
 * @param {boolean} shareable
 * @return {_Drive.File}
 */
_Drive.File.prototype.setShareableByEditors = function(shareable) {};

/**
 * @param {_Drive.Access} accessType
 * @param {_Drive.Permission} permissionType
 * @return {_Drive.File}
 */
_Drive.File.prototype.setSharing = function(accessType, permissionType) {};

/**
 * @param {boolean} starred
 * @return {_Drive.File}
 */
_Drive.File.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trashed
 * @return {_Drive.File}
 */
_Drive.File.prototype.setTrashed = function(trashed) {};

/**
 * Class FileIterator
 * @constructor
 */
_Drive.FileIterator = function() {};

/**
 * @return {string}
 */
_Drive.FileIterator.prototype.getContinuationToken = function() {};

/**
 * @return {boolean}
 */
_Drive.FileIterator.prototype.hasNext = function() {};

/**
 * @return {_Drive.File}
 */
_Drive.FileIterator.prototype.next = function() {};

/**
 * Class Folder
 * @constructor
 */
_Drive.Folder = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {_Drive.File} child
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addFile = function(child) {};

/**
 * @param {_Drive.Folder} child
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addFolder = function(child) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {(_Base.BlobSource|string)} arg1
 * @param {string=} content
 * @param {string=} mimeType
 * @return {_Drive.File}
 */
_Drive.Folder.prototype.createFile = function(arg1, content, mimeType) {};

/**
 * @param {string} name
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.createFolder = function(name) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Permission}
 */
_Drive.Folder.prototype.getAccess = function(arg1) {};

/**
 * @return {Date}
 */
_Drive.Folder.prototype.getDateCreated = function() {};

/**
 * @return {string}
 */
_Drive.Folder.prototype.getDescription = function() {};

/**
 * @return {Array.<_Drive.User>}
 */
_Drive.Folder.prototype.getEditors = function() {};

/**
 * @return {_Drive.FileIterator}
 */
_Drive.Folder.prototype.getFiles = function() {};

/**
 * @param {string} name
 * @return {_Drive.FileIterator}
 */
_Drive.Folder.prototype.getFilesByName = function(name) {};

/**
 * @param {string} mimeType
 * @return {_Drive.FileIterator}
 */
_Drive.Folder.prototype.getFilesByType = function(mimeType) {};

/**
 * @return {_Drive.FolderIterator}
 */
_Drive.Folder.prototype.getFolders = function() {};

/**
 * @param {string} name
 * @return {_Drive.FolderIterator}
 */
_Drive.Folder.prototype.getFoldersByName = function(name) {};

/**
 * @return {string}
 */
_Drive.Folder.prototype.getId = function() {};

/**
 * @return {Date}
 */
_Drive.Folder.prototype.getLastUpdated = function() {};

/**
 * @return {string}
 */
_Drive.Folder.prototype.getName = function() {};

/**
 * @return {_Drive.User}
 */
_Drive.Folder.prototype.getOwner = function() {};

/**
 * @return {_Drive.FolderIterator}
 */
_Drive.Folder.prototype.getParents = function() {};

/**
 * @return {_Drive.Access}
 */
_Drive.Folder.prototype.getSharingAccess = function() {};

/**
 * @return {_Drive.Permission}
 */
_Drive.Folder.prototype.getSharingPermission = function() {};

/**
 * @return {number}
 */
_Drive.Folder.prototype.getSize = function() {};

/**
 * @return {string}
 */
_Drive.Folder.prototype.getUrl = function() {};

/**
 * @return {Array.<_Drive.User>}
 */
_Drive.Folder.prototype.getViewers = function() {};

/**
 * @return {boolean}
 */
_Drive.Folder.prototype.isShareableByEditors = function() {};

/**
 * @return {boolean}
 */
_Drive.Folder.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
_Drive.Folder.prototype.isTrashed = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.removeEditor = function(arg1) {};

/**
 * @param {_Drive.File} child
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.removeFile = function(child) {};

/**
 * @param {_Drive.Folder} child
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.removeFolder = function(child) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.removeViewer = function(arg1) {};

/**
 * @param {(string|_Base.User)} user
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.revokePermissions = function(user) {};

/**
 * @param {string} params
 * @return {_Drive.FileIterator}
 */
_Drive.Folder.prototype.searchFiles = function(params) {};

/**
 * @param {string} params
 * @return {_Drive.FolderIterator}
 */
_Drive.Folder.prototype.searchFolders = function(params) {};

/**
 * @param {string} description
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setDescription = function(description) {};

/**
 * @param {string} name
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setName = function(name) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setOwner = function(arg1) {};

/**
 * @param {boolean} shareable
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setShareableByEditors = function(shareable) {};

/**
 * @param {_Drive.Access} accessType
 * @param {_Drive.Permission} permissionType
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setSharing = function(accessType, permissionType) {};

/**
 * @param {boolean} starred
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setStarred = function(starred) {};

/**
 * @param {boolean} trashed
 * @return {_Drive.Folder}
 */
_Drive.Folder.prototype.setTrashed = function(trashed) {};

/**
 * Class FolderIterator
 * @constructor
 */
_Drive.FolderIterator = function() {};

/**
 * @return {string}
 */
_Drive.FolderIterator.prototype.getContinuationToken = function() {};

/**
 * @return {boolean}
 */
_Drive.FolderIterator.prototype.hasNext = function() {};

/**
 * @return {_Drive.Folder}
 */
_Drive.FolderIterator.prototype.next = function() {};

/**
 * Class User
 * @constructor
 */
_Drive.User = function() {};

/**
 * @return {string}
 */
_Drive.User.prototype.getDomain = function() {};

/**
 * @return {string}
 */
_Drive.User.prototype.getEmail = function() {};

/**
 * @return {string}
 */
_Drive.User.prototype.getName = function() {};

/**
 * @return {string}
 */
_Drive.User.prototype.getPhotoUrl = function() {};

/**
 * Enum Access
 * @constructor
 */
_Drive.Access = function() {};

/**
 * @type {_Drive.Access}
 */
_Drive.Access.prototype.ANYONE;

/**
 * @type {_Drive.Access}
 */
_Drive.Access.prototype.ANYONE_WITH_LINK;

/**
 * @type {_Drive.Access}
 */
_Drive.Access.prototype.DOMAIN;

/**
 * @type {_Drive.Access}
 */
_Drive.Access.prototype.DOMAIN_WITH_LINK;

/**
 * @type {_Drive.Access}
 */
_Drive.Access.prototype.PRIVATE;

/**
 * Enum Permission
 * @constructor
 */
_Drive.Permission = function() {};

/**
 * @type {_Drive.Permission}
 */
_Drive.Permission.prototype.VIEW;

/**
 * @type {_Drive.Permission}
 */
_Drive.Permission.prototype.EDIT;

/**
 * @type {_Drive.Permission}
 */
_Drive.Permission.prototype.COMMENT;

/**
 * @type {_Drive.Permission}
 */
_Drive.Permission.prototype.OWNER;

/**
 * @type {_Drive.Permission}
 */
_Drive.Permission.prototype.NONE;


/**
 * _Finance Services
 */
var _Finance = {};

/**
 * Class FinanceApp
 * @constructor
 */
_Finance.FinanceApp = function() {};

/**
 * @type {_Finance.Interval}
 */
_Finance.FinanceApp.prototype.Interval;

/**
 * @param {string} stockSymbol
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {_Finance.Interval} interval
 * @return {_Finance.HistoricalStockInfo}
 */
_Finance.FinanceApp.prototype.getHistoricalIntradayStockInfo = function(stockSymbol, startDate, endDate, interval) {};

/**
 * @param {string} stockSymbol
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {number} interval
 * @return {_Finance.HistoricalStockInfo}
 */
_Finance.FinanceApp.prototype.getHistoricalStockInfo = function(stockSymbol, startDate, endDate, interval) {};

/**
 * @param {string} stockSymbol
 * @return {_Finance.StockInfo}
 */
_Finance.FinanceApp.prototype.getStockInfo = function(stockSymbol) {};


/**
 * @type {_Finance.FinanceApp}
 */
var FinanceApp = new _Finance.FinanceApp();

/**
 * Class HistoricalStockInfo
 * @constructor
 */
_Finance.HistoricalStockInfo = function() {};

/**
 * @type {Date}
 */
_Finance.HistoricalStockInfo.prototype.endTime;

/**
 * @type {string}
 */
_Finance.HistoricalStockInfo.prototype.exchange;

/**
 * @type {number}
 */
_Finance.HistoricalStockInfo.prototype.interval;

/**
 * @type {string}
 */
_Finance.HistoricalStockInfo.prototype.name;

/**
 * @type {string}
 */
_Finance.HistoricalStockInfo.prototype.reutersInvestorsCode;

/**
 * @type {Date}
 */
_Finance.HistoricalStockInfo.prototype.startTime;

/**
 * @type {Array.<_Finance.StockInfoSnapshot>}
 */
_Finance.HistoricalStockInfo.prototype.stockInfo;

/**
 * @type {string}
 */
_Finance.HistoricalStockInfo.prototype.symbol;

/**
 * @type {Date}
 */
_Finance.HistoricalStockInfo.prototype.timeFetched;

/**
 * Class StockInfo
 * @constructor
 */
_Finance.StockInfo = function() {};

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.ask;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.average;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.beta;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.bid;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.capitalgain;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.change;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.changepct;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.closeyest;

/**
 * @type {string}
 */
_Finance.StockInfo.prototype.currency;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.datadelay;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.eps;

/**
 * @type {string}
 */
_Finance.StockInfo.prototype.exchange;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.expenseratio;

/**
 * @type {boolean}
 */
_Finance.StockInfo.prototype.has_mutual_fund_data;

/**
 * @type {boolean}
 */
_Finance.StockInfo.prototype.has_stock_data;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.high;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.high52;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.incomedividend;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.low;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.low52;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.marketcap;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.morningstarrating;

/**
 * @type {string}
 */
_Finance.StockInfo.prototype.name;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.nav;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.netassets;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.pe;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.price;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.priceopen;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.quote;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return1;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return13;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return156;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return260;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return4;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.return52;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.returnday;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.returnytd;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.shares;

/**
 * @type {string}
 */
_Finance.StockInfo.prototype.symbol;

/**
 * @type {string}
 */
_Finance.StockInfo.prototype.timezone;

/**
 * @type {Date}
 */
_Finance.StockInfo.prototype.tradetime;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.volume;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.volumeavg;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.volumedelay;

/**
 * @type {number}
 */
_Finance.StockInfo.prototype.yieldpct;

/**
 * Class StockInfoSnapshot
 * @constructor
 */
_Finance.StockInfoSnapshot = function() {};

/**
 * @type {number}
 */
_Finance.StockInfoSnapshot.prototype.close;

/**
 * @type {number}
 */
_Finance.StockInfoSnapshot.prototype.high;

/**
 * @type {number}
 */
_Finance.StockInfoSnapshot.prototype.low;

/**
 * @type {number}
 */
_Finance.StockInfoSnapshot.prototype.open;

/**
 * @type {Date}
 */
_Finance.StockInfoSnapshot.prototype.time;

/**
 * @type {number}
 */
_Finance.StockInfoSnapshot.prototype.volume;

/**
 * Enum Interval
 * @constructor
 */
_Finance.Interval = function() {};

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.ONE_MINUTE;

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.TWO_MINUTES;

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.FIVE_MINUTES;

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.FIFTEEN_MINUTES;

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.THIRTY_MINUTES;

/**
 * @type {_Finance.Interval}
 */
_Finance.Interval.prototype.SIXTY_MINUTES;


/**
 * _Forms Services
 */
var _Forms = {};

/**
 * Class FormApp
 * @constructor
 */
_Forms.FormApp = function() {};

/**
 * @type {_Forms.Alignment}
 */
_Forms.FormApp.prototype.Alignment;

/**
 * @type {_Forms.DestinationType}
 */
_Forms.FormApp.prototype.DestinationType;

/**
 * @type {_Forms.ItemType}
 */
_Forms.FormApp.prototype.ItemType;

/**
 * @type {_Forms.PageNavigationType}
 */
_Forms.FormApp.prototype.PageNavigationType;

/**
 * @param {string} title
 * @return {_Forms.Form}
 */
_Forms.FormApp.prototype.create = function(title) {};

/**
 * @return {_Forms.Form}
 */
_Forms.FormApp.prototype.getActiveForm = function() {};

/**
 * @return {_Base.Ui}
 */
_Forms.FormApp.prototype.getUi = function() {};

/**
 * @param {string} id
 * @return {_Forms.Form}
 */
_Forms.FormApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {_Forms.Form}
 */
_Forms.FormApp.prototype.openByUrl = function(url) {};


/**
 * @type {_Forms.FormApp}
 */
var FormApp = new _Forms.FormApp();

/**
 * Class CheckboxItem
 * @constructor
 */
_Forms.CheckboxItem = function() {};

/**
 * @param {string} value
 * @return {_Forms.Choice}
 */
_Forms.CheckboxItem.prototype.createChoice = function(value) {};

/**
 * @param {Array.<string>} responses
 * @return {_Forms.ItemResponse}
 */
_Forms.CheckboxItem.prototype.createResponse = function(responses) {};

/**
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.duplicate = function() {};

/**
 * @return {Array.<_Forms.Choice>}
 */
_Forms.CheckboxItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
_Forms.CheckboxItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.CheckboxItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.CheckboxItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.CheckboxItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.CheckboxItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.CheckboxItem.prototype.hasOtherOption = function() {};

/**
 * @return {boolean}
 */
_Forms.CheckboxItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<_Forms.Choice>} choices
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.CheckboxItem}
 */
_Forms.CheckboxItem.prototype.showOtherOption = function(enabled) {};

/**
 * Class Choice
 * @constructor
 */
_Forms.Choice = function() {};

/**
 * @return {_Forms.PageBreakItem}
 */
_Forms.Choice.prototype.getGotoPage = function() {};

/**
 * @return {_Forms.PageNavigationType}
 */
_Forms.Choice.prototype.getPageNavigationType = function() {};

/**
 * @return {string}
 */
_Forms.Choice.prototype.getValue = function() {};

/**
 * Class DateItem
 * @constructor
 */
_Forms.DateItem = function() {};

/**
 * @param {Date} response
 * @return {_Forms.ItemResponse}
 */
_Forms.DateItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.DateItem}
 */
_Forms.DateItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.DateItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.DateItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.DateItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.DateItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.DateItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.DateItem.prototype.includesYear = function() {};

/**
 * @return {boolean}
 */
_Forms.DateItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.DateItem}
 */
_Forms.DateItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enableYear
 * @return {_Forms.DateItem}
 */
_Forms.DateItem.prototype.setIncludesYear = function(enableYear) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.DateItem}
 */
_Forms.DateItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.DateItem}
 */
_Forms.DateItem.prototype.setTitle = function(title) {};

/**
 * Class DateTimeItem
 * @constructor
 */
_Forms.DateTimeItem = function() {};

/**
 * @param {Date} response
 * @return {_Forms.ItemResponse}
 */
_Forms.DateTimeItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.DateTimeItem}
 */
_Forms.DateTimeItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.DateTimeItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.DateTimeItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.DateTimeItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.DateTimeItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.DateTimeItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.DateTimeItem.prototype.includesYear = function() {};

/**
 * @return {boolean}
 */
_Forms.DateTimeItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.DateTimeItem}
 */
_Forms.DateTimeItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enableYear
 * @return {_Forms.DateTimeItem}
 */
_Forms.DateTimeItem.prototype.setIncludesYear = function(enableYear) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.DateTimeItem}
 */
_Forms.DateTimeItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.DateTimeItem}
 */
_Forms.DateTimeItem.prototype.setTitle = function(title) {};

/**
 * Class DurationItem
 * @constructor
 */
_Forms.DurationItem = function() {};

/**
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @return {_Forms.ItemResponse}
 */
_Forms.DurationItem.prototype.createResponse = function(hours, minutes, seconds) {};

/**
 * @return {_Forms.DurationItem}
 */
_Forms.DurationItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.DurationItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.DurationItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.DurationItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.DurationItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.DurationItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.DurationItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.DurationItem}
 */
_Forms.DurationItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.DurationItem}
 */
_Forms.DurationItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.DurationItem}
 */
_Forms.DurationItem.prototype.setTitle = function(title) {};

/**
 * Class Form
 * @constructor
 */
_Forms.Form = function() {};

/**
 * @return {_Forms.CheckboxItem}
 */
_Forms.Form.prototype.addCheckboxItem = function() {};

/**
 * @return {_Forms.DateItem}
 */
_Forms.Form.prototype.addDateItem = function() {};

/**
 * @return {_Forms.DateTimeItem}
 */
_Forms.Form.prototype.addDateTimeItem = function() {};

/**
 * @return {_Forms.DurationItem}
 */
_Forms.Form.prototype.addDurationItem = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.addEditors = function(emailAddresses) {};

/**
 * @return {_Forms.GridItem}
 */
_Forms.Form.prototype.addGridItem = function() {};

/**
 * @return {_Forms.ImageItem}
 */
_Forms.Form.prototype.addImageItem = function() {};

/**
 * @return {_Forms.ListItem}
 */
_Forms.Form.prototype.addListItem = function() {};

/**
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.Form.prototype.addMultipleChoiceItem = function() {};

/**
 * @return {_Forms.PageBreakItem}
 */
_Forms.Form.prototype.addPageBreakItem = function() {};

/**
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.Form.prototype.addParagraphTextItem = function() {};

/**
 * @return {_Forms.ScaleItem}
 */
_Forms.Form.prototype.addScaleItem = function() {};

/**
 * @return {_Forms.SectionHeaderItem}
 */
_Forms.Form.prototype.addSectionHeaderItem = function() {};

/**
 * @return {_Forms.TextItem}
 */
_Forms.Form.prototype.addTextItem = function() {};

/**
 * @return {_Forms.TimeItem}
 */
_Forms.Form.prototype.addTimeItem = function() {};

/**
 * @return {_Forms.VideoItem}
 */
_Forms.Form.prototype.addVideoItem = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.canEditResponse = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.collectsEmail = function() {};

/**
 * @return {_Forms.FormResponse}
 */
_Forms.Form.prototype.createResponse = function() {};

/**
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.deleteAllResponses = function() {};

/**
 * @param {(number|_Forms.Item)} arg1
 */
_Forms.Form.prototype.deleteItem = function(arg1) {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getConfirmationMessage = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getCustomClosedFormMessage = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getDescription = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getDestinationId = function() {};

/**
 * @return {_Forms.DestinationType}
 */
_Forms.Form.prototype.getDestinationType = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getEditUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Forms.Form.prototype.getEditors = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getId = function() {};

/**
 * @param {number} id
 * @return {_Forms.Item}
 */
_Forms.Form.prototype.getItemById = function(id) {};

/**
 * @param {_Forms.ItemType=} itemType
 * @return {Array.<_Forms.Item>}
 */
_Forms.Form.prototype.getItems = function(itemType) {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getPublishedUrl = function() {};

/**
 * @param {string} responseId
 * @return {_Forms.FormResponse}
 */
_Forms.Form.prototype.getResponse = function(responseId) {};

/**
 * @param {Date=} timestamp
 * @return {Array.<_Forms.FormResponse>}
 */
_Forms.Form.prototype.getResponses = function(timestamp) {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getSummaryUrl = function() {};

/**
 * @return {string}
 */
_Forms.Form.prototype.getTitle = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.hasProgressBar = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.hasRespondAgainLink = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.isAcceptingResponses = function() {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.isPublishingSummary = function() {};

/**
 * @param {(number|_Forms.Item)} arg1
 * @param {number} arg2
 * @return {_Forms.Item}
 */
_Forms.Form.prototype.moveItem = function(arg1, arg2) {};

/**
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.removeDestination = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.removeEditor = function(arg1) {};

/**
 * @return {boolean}
 */
_Forms.Form.prototype.requiresLogin = function() {};

/**
 * @param {boolean} enabled
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setAcceptingResponses = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setAllowResponseEdits = function(enabled) {};

/**
 * @param {boolean} collect
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setCollectEmail = function(collect) {};

/**
 * @param {string} message
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setConfirmationMessage = function(message) {};

/**
 * @param {string} message
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setCustomClosedFormMessage = function(message) {};

/**
 * @param {string} description
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setDescription = function(description) {};

/**
 * @param {_Forms.DestinationType} type
 * @param {string} id
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setDestination = function(type, id) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setProgressBar = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setPublishingSummary = function(enabled) {};

/**
 * @param {boolean} requireLogin
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setRequireLogin = function(requireLogin) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setShowLinkToRespondAgain = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.Form}
 */
_Forms.Form.prototype.setTitle = function(title) {};

/**
 * Class FormResponse
 * @constructor
 */
_Forms.FormResponse = function() {};

/**
 * @return {string}
 */
_Forms.FormResponse.prototype.getEditResponseUrl = function() {};

/**
 * @return {string}
 */
_Forms.FormResponse.prototype.getId = function() {};

/**
 * @return {Array.<_Forms.ItemResponse>}
 */
_Forms.FormResponse.prototype.getItemResponses = function() {};

/**
 * @return {string}
 */
_Forms.FormResponse.prototype.getRespondentEmail = function() {};

/**
 * @param {_Forms.Item} item
 * @return {_Forms.ItemResponse}
 */
_Forms.FormResponse.prototype.getResponseForItem = function(item) {};

/**
 * @return {Date}
 */
_Forms.FormResponse.prototype.getTimestamp = function() {};

/**
 * @return {_Forms.FormResponse}
 */
_Forms.FormResponse.prototype.submit = function() {};

/**
 * @return {string}
 */
_Forms.FormResponse.prototype.toPrefilledUrl = function() {};

/**
 * @param {_Forms.ItemResponse} response
 * @return {_Forms.FormResponse}
 */
_Forms.FormResponse.prototype.withItemResponse = function(response) {};

/**
 * Class GridItem
 * @constructor
 */
_Forms.GridItem = function() {};

/**
 * @param {Array.<string>} responses
 * @return {_Forms.ItemResponse}
 */
_Forms.GridItem.prototype.createResponse = function(responses) {};

/**
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.duplicate = function() {};

/**
 * @return {Array.<string>}
 */
_Forms.GridItem.prototype.getColumns = function() {};

/**
 * @return {string}
 */
_Forms.GridItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.GridItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.GridItem.prototype.getIndex = function() {};

/**
 * @return {Array.<string>}
 */
_Forms.GridItem.prototype.getRows = function() {};

/**
 * @return {string}
 */
_Forms.GridItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.GridItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.GridItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} columns
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.setColumns = function(columns) {};

/**
 * @param {string} text
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.setRequired = function(enabled) {};

/**
 * @param {Array.<string>} rows
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.setRows = function(rows) {};

/**
 * @param {string} title
 * @return {_Forms.GridItem}
 */
_Forms.GridItem.prototype.setTitle = function(title) {};

/**
 * Class ImageItem
 * @constructor
 */
_Forms.ImageItem = function() {};

/**
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.duplicate = function() {};

/**
 * @return {_Forms.Alignment}
 */
_Forms.ImageItem.prototype.getAlignment = function() {};

/**
 * @return {string}
 */
_Forms.ImageItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.ImageItem.prototype.getId = function() {};

/**
 * @return {_Base.Blob}
 */
_Forms.ImageItem.prototype.getImage = function() {};

/**
 * @return {number}
 */
_Forms.ImageItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.ImageItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.ImageItem.prototype.getType = function() {};

/**
 * @return {number}
 */
_Forms.ImageItem.prototype.getWidth = function() {};

/**
 * @param {_Forms.Alignment} alignment
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.setAlignment = function(alignment) {};

/**
 * @param {string} text
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.setHelpText = function(text) {};

/**
 * @param {_Base.BlobSource} image
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.setImage = function(image) {};

/**
 * @param {string} title
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {_Forms.ImageItem}
 */
_Forms.ImageItem.prototype.setWidth = function(width) {};

/**
 * Class Item
 * @constructor
 */
_Forms.Item = function() {};

/**
 * @return {_Forms.CheckboxItem}
 */
_Forms.Item.prototype.asCheckboxItem = function() {};

/**
 * @return {_Forms.DateItem}
 */
_Forms.Item.prototype.asDateItem = function() {};

/**
 * @return {_Forms.DateTimeItem}
 */
_Forms.Item.prototype.asDateTimeItem = function() {};

/**
 * @return {_Forms.DurationItem}
 */
_Forms.Item.prototype.asDurationItem = function() {};

/**
 * @return {_Forms.GridItem}
 */
_Forms.Item.prototype.asGridItem = function() {};

/**
 * @return {_Forms.ImageItem}
 */
_Forms.Item.prototype.asImageItem = function() {};

/**
 * @return {_Forms.ListItem}
 */
_Forms.Item.prototype.asListItem = function() {};

/**
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.Item.prototype.asMultipleChoiceItem = function() {};

/**
 * @return {_Forms.PageBreakItem}
 */
_Forms.Item.prototype.asPageBreakItem = function() {};

/**
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.Item.prototype.asParagraphTextItem = function() {};

/**
 * @return {_Forms.ScaleItem}
 */
_Forms.Item.prototype.asScaleItem = function() {};

/**
 * @return {_Forms.SectionHeaderItem}
 */
_Forms.Item.prototype.asSectionHeaderItem = function() {};

/**
 * @return {_Forms.TextItem}
 */
_Forms.Item.prototype.asTextItem = function() {};

/**
 * @return {_Forms.TimeItem}
 */
_Forms.Item.prototype.asTimeItem = function() {};

/**
 * @return {_Forms.VideoItem}
 */
_Forms.Item.prototype.asVideoItem = function() {};

/**
 * @return {_Forms.Item}
 */
_Forms.Item.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.Item.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.Item.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.Item.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.Item.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.Item.prototype.getType = function() {};

/**
 * @param {string} text
 * @return {_Forms.Item}
 */
_Forms.Item.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {_Forms.Item}
 */
_Forms.Item.prototype.setTitle = function(title) {};

/**
 * Class ItemResponse
 * @constructor
 */
_Forms.ItemResponse = function() {};

/**
 * @return {_Forms.Item}
 */
_Forms.ItemResponse.prototype.getItem = function() {};

/**
 * @return {Object}
 */
_Forms.ItemResponse.prototype.getResponse = function() {};

/**
 * Class ListItem
 * @constructor
 */
_Forms.ListItem = function() {};

/**
 * @param {string} value
 * @param {(_Forms.PageBreakItem|_Forms.PageNavigationType)=} arg2
 * @return {_Forms.Choice}
 */
_Forms.ListItem.prototype.createChoice = function(value, arg2) {};

/**
 * @param {string} response
 * @return {_Forms.ItemResponse}
 */
_Forms.ListItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.duplicate = function() {};

/**
 * @return {Array.<_Forms.Choice>}
 */
_Forms.ListItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
_Forms.ListItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.ListItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.ListItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.ListItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.ListItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.ListItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<_Forms.Choice>} choices
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.ListItem}
 */
_Forms.ListItem.prototype.setTitle = function(title) {};

/**
 * Class MultipleChoiceItem
 * @constructor
 */
_Forms.MultipleChoiceItem = function() {};

/**
 * @param {string} value
 * @param {(_Forms.PageBreakItem|_Forms.PageNavigationType)=} arg2
 * @return {_Forms.Choice}
 */
_Forms.MultipleChoiceItem.prototype.createChoice = function(value, arg2) {};

/**
 * @param {string} response
 * @return {_Forms.ItemResponse}
 */
_Forms.MultipleChoiceItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.duplicate = function() {};

/**
 * @return {Array.<_Forms.Choice>}
 */
_Forms.MultipleChoiceItem.prototype.getChoices = function() {};

/**
 * @return {string}
 */
_Forms.MultipleChoiceItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.MultipleChoiceItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.MultipleChoiceItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.MultipleChoiceItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.MultipleChoiceItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.MultipleChoiceItem.prototype.hasOtherOption = function() {};

/**
 * @return {boolean}
 */
_Forms.MultipleChoiceItem.prototype.isRequired = function() {};

/**
 * @param {Array.<string>} values
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.setChoiceValues = function(values) {};

/**
 * @param {Array.<_Forms.Choice>} choices
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.setChoices = function(choices) {};

/**
 * @param {string} text
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.MultipleChoiceItem}
 */
_Forms.MultipleChoiceItem.prototype.showOtherOption = function(enabled) {};

/**
 * Class PageBreakItem
 * @constructor
 */
_Forms.PageBreakItem = function() {};

/**
 * @return {_Forms.PageBreakItem}
 */
_Forms.PageBreakItem.prototype.duplicate = function() {};

/**
 * @return {_Forms.PageBreakItem}
 */
_Forms.PageBreakItem.prototype.getGoToPage = function() {};

/**
 * @return {string}
 */
_Forms.PageBreakItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.PageBreakItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.PageBreakItem.prototype.getIndex = function() {};

/**
 * @return {_Forms.PageNavigationType}
 */
_Forms.PageBreakItem.prototype.getPageNavigationType = function() {};

/**
 * @return {string}
 */
_Forms.PageBreakItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.PageBreakItem.prototype.getType = function() {};

/**
 * @param {(_Forms.PageBreakItem|_Forms.PageNavigationType)} arg1
 * @return {_Forms.PageBreakItem}
 */
_Forms.PageBreakItem.prototype.setGoToPage = function(arg1) {};

/**
 * @param {string} text
 * @return {_Forms.PageBreakItem}
 */
_Forms.PageBreakItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {_Forms.PageBreakItem}
 */
_Forms.PageBreakItem.prototype.setTitle = function(title) {};

/**
 * Class ParagraphTextItem
 * @constructor
 */
_Forms.ParagraphTextItem = function() {};

/**
 * @param {string} response
 * @return {_Forms.ItemResponse}
 */
_Forms.ParagraphTextItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.ParagraphTextItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.ParagraphTextItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.ParagraphTextItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.ParagraphTextItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.ParagraphTextItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.ParagraphTextItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.ParagraphTextItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.ParagraphTextItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.ParagraphTextItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.ParagraphTextItem}
 */
_Forms.ParagraphTextItem.prototype.setTitle = function(title) {};

/**
 * Class ScaleItem
 * @constructor
 */
_Forms.ScaleItem = function() {};

/**
 * @param {number} response
 * @return {_Forms.ItemResponse}
 */
_Forms.ScaleItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.ScaleItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.ScaleItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.ScaleItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.ScaleItem.prototype.getLeftLabel = function() {};

/**
 * @return {number}
 */
_Forms.ScaleItem.prototype.getLowerBound = function() {};

/**
 * @return {string}
 */
_Forms.ScaleItem.prototype.getRightLabel = function() {};

/**
 * @return {string}
 */
_Forms.ScaleItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.ScaleItem.prototype.getType = function() {};

/**
 * @return {number}
 */
_Forms.ScaleItem.prototype.getUpperBound = function() {};

/**
 * @return {boolean}
 */
_Forms.ScaleItem.prototype.isRequired = function() {};

/**
 * @param {number} lower
 * @param {number} upper
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.setBounds = function(lower, upper) {};

/**
 * @param {string} text
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} lower
 * @param {string} upper
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.setLabels = function(lower, upper) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.ScaleItem}
 */
_Forms.ScaleItem.prototype.setTitle = function(title) {};

/**
 * Class SectionHeaderItem
 * @constructor
 */
_Forms.SectionHeaderItem = function() {};

/**
 * @return {_Forms.SectionHeaderItem}
 */
_Forms.SectionHeaderItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.SectionHeaderItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.SectionHeaderItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.SectionHeaderItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.SectionHeaderItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.SectionHeaderItem.prototype.getType = function() {};

/**
 * @param {string} text
 * @return {_Forms.SectionHeaderItem}
 */
_Forms.SectionHeaderItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {_Forms.SectionHeaderItem}
 */
_Forms.SectionHeaderItem.prototype.setTitle = function(title) {};

/**
 * Class TextItem
 * @constructor
 */
_Forms.TextItem = function() {};

/**
 * @param {string} response
 * @return {_Forms.ItemResponse}
 */
_Forms.TextItem.prototype.createResponse = function(response) {};

/**
 * @return {_Forms.TextItem}
 */
_Forms.TextItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.TextItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.TextItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.TextItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.TextItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.TextItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.TextItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.TextItem}
 */
_Forms.TextItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.TextItem}
 */
_Forms.TextItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.TextItem}
 */
_Forms.TextItem.prototype.setTitle = function(title) {};

/**
 * Class TimeItem
 * @constructor
 */
_Forms.TimeItem = function() {};

/**
 * @param {number} hour
 * @param {number} minute
 * @return {_Forms.ItemResponse}
 */
_Forms.TimeItem.prototype.createResponse = function(hour, minute) {};

/**
 * @return {_Forms.TimeItem}
 */
_Forms.TimeItem.prototype.duplicate = function() {};

/**
 * @return {string}
 */
_Forms.TimeItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.TimeItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.TimeItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.TimeItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.TimeItem.prototype.getType = function() {};

/**
 * @return {boolean}
 */
_Forms.TimeItem.prototype.isRequired = function() {};

/**
 * @param {string} text
 * @return {_Forms.TimeItem}
 */
_Forms.TimeItem.prototype.setHelpText = function(text) {};

/**
 * @param {boolean} enabled
 * @return {_Forms.TimeItem}
 */
_Forms.TimeItem.prototype.setRequired = function(enabled) {};

/**
 * @param {string} title
 * @return {_Forms.TimeItem}
 */
_Forms.TimeItem.prototype.setTitle = function(title) {};

/**
 * Class VideoItem
 * @constructor
 */
_Forms.VideoItem = function() {};

/**
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.duplicate = function() {};

/**
 * @return {_Forms.Alignment}
 */
_Forms.VideoItem.prototype.getAlignment = function() {};

/**
 * @return {string}
 */
_Forms.VideoItem.prototype.getHelpText = function() {};

/**
 * @return {number}
 */
_Forms.VideoItem.prototype.getId = function() {};

/**
 * @return {number}
 */
_Forms.VideoItem.prototype.getIndex = function() {};

/**
 * @return {string}
 */
_Forms.VideoItem.prototype.getTitle = function() {};

/**
 * @return {_Forms.ItemType}
 */
_Forms.VideoItem.prototype.getType = function() {};

/**
 * @return {number}
 */
_Forms.VideoItem.prototype.getWidth = function() {};

/**
 * @param {_Forms.Alignment} alignment
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.setAlignment = function(alignment) {};

/**
 * @param {string} text
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.setHelpText = function(text) {};

/**
 * @param {string} title
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.setTitle = function(title) {};

/**
 * @param {string} youtubeUrl
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.setVideoUrl = function(youtubeUrl) {};

/**
 * @param {number} width
 * @return {_Forms.VideoItem}
 */
_Forms.VideoItem.prototype.setWidth = function(width) {};

/**
 * Enum Alignment
 * @constructor
 */
_Forms.Alignment = function() {};

/**
 * @type {_Forms.Alignment}
 */
_Forms.Alignment.prototype.LEFT;

/**
 * @type {_Forms.Alignment}
 */
_Forms.Alignment.prototype.CENTER;

/**
 * @type {_Forms.Alignment}
 */
_Forms.Alignment.prototype.RIGHT;

/**
 * Enum DestinationType
 * @constructor
 */
_Forms.DestinationType = function() {};

/**
 * @type {_Forms.DestinationType}
 */
_Forms.DestinationType.prototype.SPREADSHEET;

/**
 * Enum ItemType
 * @constructor
 */
_Forms.ItemType = function() {};

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.CHECKBOX;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.DATE;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.DATETIME;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.DURATION;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.GRID;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.IMAGE;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.LIST;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.MULTIPLE_CHOICE;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.PAGE_BREAK;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.PARAGRAPH_TEXT;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.SCALE;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.SECTION_HEADER;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.TEXT;

/**
 * @type {_Forms.ItemType}
 */
_Forms.ItemType.prototype.TIME;

/**
 * Enum PageNavigationType
 * @constructor
 */
_Forms.PageNavigationType = function() {};

/**
 * @type {_Forms.PageNavigationType}
 */
_Forms.PageNavigationType.prototype.CONTINUE;

/**
 * @type {_Forms.PageNavigationType}
 */
_Forms.PageNavigationType.prototype.GO_TO_PAGE;

/**
 * @type {_Forms.PageNavigationType}
 */
_Forms.PageNavigationType.prototype.RESTART;

/**
 * @type {_Forms.PageNavigationType}
 */
_Forms.PageNavigationType.prototype.SUBMIT;


/**
 * _Gmail Services
 */
var _Gmail = {};

/**
 * Class GmailApp
 * @constructor
 */
_Gmail.GmailApp = function() {};

/**
 * @param {string} name
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailApp.prototype.createLabel = function(name) {};

/**
 * @param {_Gmail.GmailLabel} label
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.deleteLabel = function(label) {};

/**
 * @return {Array.<string>}
 */
_Gmail.GmailApp.prototype.getAliases = function() {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getChatThreads = function(start, max) {};

/**
 * @return {Array.<_Gmail.GmailMessage>}
 */
_Gmail.GmailApp.prototype.getDraftMessages = function() {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getInboxThreads = function(start, max) {};

/**
 * @return {number}
 */
_Gmail.GmailApp.prototype.getInboxUnreadCount = function() {};

/**
 * @param {string} id
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailApp.prototype.getMessageById = function(id) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {Array.<_Gmail.GmailMessage>}
 */
_Gmail.GmailApp.prototype.getMessagesForThread = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {Array.<Array.<_Gmail.GmailMessage>>}
 */
_Gmail.GmailApp.prototype.getMessagesForThreads = function(threads) {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getPriorityInboxThreads = function(start, max) {};

/**
 * @return {number}
 */
_Gmail.GmailApp.prototype.getPriorityInboxUnreadCount = function() {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getSpamThreads = function(start, max) {};

/**
 * @return {number}
 */
_Gmail.GmailApp.prototype.getSpamUnreadCount = function() {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getStarredThreads = function(start, max) {};

/**
 * @return {number}
 */
_Gmail.GmailApp.prototype.getStarredUnreadCount = function() {};

/**
 * @param {string} id
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailApp.prototype.getThreadById = function(id) {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.getTrashThreads = function(start, max) {};

/**
 * @param {string} name
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailApp.prototype.getUserLabelByName = function(name) {};

/**
 * @return {Array.<_Gmail.GmailLabel>}
 */
_Gmail.GmailApp.prototype.getUserLabels = function() {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markMessageRead = function(message) {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markMessageUnread = function(message) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markMessagesRead = function(messages) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markMessagesUnread = function(messages) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadImportant = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadRead = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadUnimportant = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadUnread = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadsImportant = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadsRead = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadsUnimportant = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.markThreadsUnread = function(threads) {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveMessageToTrash = function(message) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveMessagesToTrash = function(messages) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadToArchive = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadToInbox = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadToSpam = function(thread) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadToTrash = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadsToArchive = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadsToInbox = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadsToSpam = function(threads) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.moveThreadsToTrash = function(threads) {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.refreshMessage = function(message) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.refreshMessages = function(messages) {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.refreshThread = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.refreshThreads = function(threads) {};

/**
 * @param {string} query
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailApp.prototype.search = function(query, start, max) {};

/**
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 * @param {Object=} options
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.sendEmail = function(recipient, subject, body, options) {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.starMessage = function(message) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.starMessages = function(messages) {};

/**
 * @param {_Gmail.GmailMessage} message
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.unstarMessage = function(message) {};

/**
 * @param {Array.<_Gmail.GmailMessage>} messages
 * @return {_Gmail.GmailApp}
 */
_Gmail.GmailApp.prototype.unstarMessages = function(messages) {};


/**
 * @type {_Gmail.GmailApp}
 */
var GmailApp = new _Gmail.GmailApp();

/**
 * Class GmailAttachment
 * @constructor
 */
_Gmail.GmailAttachment = function() {};

/**
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.copyBlob = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.getAs = function(contentType) {};

/**
 * @return {Array.<number>}
 */
_Gmail.GmailAttachment.prototype.getBytes = function() {};

/**
 * @return {string}
 */
_Gmail.GmailAttachment.prototype.getContentType = function() {};

/**
 * @param {string=} charset
 * @return {string}
 */
_Gmail.GmailAttachment.prototype.getDataAsString = function(charset) {};

/**
 * @return {string}
 */
_Gmail.GmailAttachment.prototype.getName = function() {};

/**
 * @return {number}
 */
_Gmail.GmailAttachment.prototype.getSize = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailAttachment.prototype.isGoogleType = function() {};

/**
 * @param {Array.<number>} data
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.setBytes = function(data) {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.setContentType = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.setContentTypeFromExtension = function() {};

/**
 * @param {string} string
 * @param {string=} charset
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.setDataFromString = function(string, charset) {};

/**
 * @param {string} name
 * @return {_Base.Blob}
 */
_Gmail.GmailAttachment.prototype.setName = function(name) {};

/**
 * Class GmailLabel
 * @constructor
 */
_Gmail.GmailLabel = function() {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailLabel.prototype.addToThread = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailLabel.prototype.addToThreads = function(threads) {};

/**
 */
_Gmail.GmailLabel.prototype.deleteLabel = function() {};

/**
 * @return {string}
 */
_Gmail.GmailLabel.prototype.getName = function() {};

/**
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Gmail.GmailThread>}
 */
_Gmail.GmailLabel.prototype.getThreads = function(start, max) {};

/**
 * @return {number}
 */
_Gmail.GmailLabel.prototype.getUnreadCount = function() {};

/**
 * @param {_Gmail.GmailThread} thread
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailLabel.prototype.removeFromThread = function(thread) {};

/**
 * @param {Array.<_Gmail.GmailThread>} threads
 * @return {_Gmail.GmailLabel}
 */
_Gmail.GmailLabel.prototype.removeFromThreads = function(threads) {};

/**
 * Class GmailMessage
 * @constructor
 */
_Gmail.GmailMessage = function() {};

/**
 * @param {string} recipient
 * @param {Object=} options
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.forward = function(recipient, options) {};

/**
 * @return {Array.<_Gmail.GmailAttachment>}
 */
_Gmail.GmailMessage.prototype.getAttachments = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getBcc = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getBody = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getCc = function() {};

/**
 * @return {Date}
 */
_Gmail.GmailMessage.prototype.getDate = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getFrom = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getId = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getPlainBody = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getRawContent = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getReplyTo = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getSubject = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailMessage.prototype.getThread = function() {};

/**
 * @return {string}
 */
_Gmail.GmailMessage.prototype.getTo = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isDraft = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isInChats = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isInInbox = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isInTrash = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isStarred = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailMessage.prototype.isUnread = function() {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.markRead = function() {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.markUnread = function() {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.moveToTrash = function() {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.refresh = function() {};

/**
 * @param {string} body
 * @param {Object=} options
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.reply = function(body, options) {};

/**
 * @param {string} body
 * @param {Object=} options
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.replyAll = function(body, options) {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.star = function() {};

/**
 * @return {_Gmail.GmailMessage}
 */
_Gmail.GmailMessage.prototype.unstar = function() {};

/**
 * Class GmailThread
 * @constructor
 */
_Gmail.GmailThread = function() {};

/**
 * @param {_Gmail.GmailLabel} label
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.addLabel = function(label) {};

/**
 * @return {string}
 */
_Gmail.GmailThread.prototype.getFirstMessageSubject = function() {};

/**
 * @return {string}
 */
_Gmail.GmailThread.prototype.getId = function() {};

/**
 * @return {Array.<_Gmail.GmailLabel>}
 */
_Gmail.GmailThread.prototype.getLabels = function() {};

/**
 * @return {Date}
 */
_Gmail.GmailThread.prototype.getLastMessageDate = function() {};

/**
 * @return {number}
 */
_Gmail.GmailThread.prototype.getMessageCount = function() {};

/**
 * @return {Array.<_Gmail.GmailMessage>}
 */
_Gmail.GmailThread.prototype.getMessages = function() {};

/**
 * @return {string}
 */
_Gmail.GmailThread.prototype.getPermalink = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.hasStarredMessages = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isImportant = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isInChats = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isInInbox = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isInSpam = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isInTrash = function() {};

/**
 * @return {boolean}
 */
_Gmail.GmailThread.prototype.isUnread = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.markImportant = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.markRead = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.markUnimportant = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.markUnread = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.moveToArchive = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.moveToInbox = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.moveToSpam = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.moveToTrash = function() {};

/**
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.refresh = function() {};

/**
 * @param {_Gmail.GmailLabel} label
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.removeLabel = function(label) {};

/**
 * @param {string} body
 * @param {Object=} options
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.reply = function(body, options) {};

/**
 * @param {string} body
 * @param {Object=} options
 * @return {_Gmail.GmailThread}
 */
_Gmail.GmailThread.prototype.replyAll = function(body, options) {};


/**
 * _Groups Services
 */
var _Groups = {};

/**
 * Class GroupsApp
 * @constructor
 */
_Groups.GroupsApp = function() {};

/**
 * @type {_Groups.Role}
 */
_Groups.GroupsApp.prototype.Role;

/**
 * @param {string} email
 * @return {_Groups.Group}
 */
_Groups.GroupsApp.prototype.getGroupByEmail = function(email) {};

/**
 * @return {Array.<_Groups.Group>}
 */
_Groups.GroupsApp.prototype.getGroups = function() {};


/**
 * @type {_Groups.GroupsApp}
 */
var GroupsApp = new _Groups.GroupsApp();

/**
 * Class Group
 * @constructor
 */
_Groups.Group = function() {};

/**
 * @return {string}
 */
_Groups.Group.prototype.getEmail = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Groups.Role}
 */
_Groups.Group.prototype.getRole = function(arg1) {};

/**
 * @return {Array.<_Base.User>}
 */
_Groups.Group.prototype.getUsers = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {boolean}
 */
_Groups.Group.prototype.hasUser = function(arg1) {};

/**
 * Enum Role
 * @constructor
 */
_Groups.Role = function() {};

/**
 * @type {_Groups.Role}
 */
_Groups.Role.prototype.OWNER;

/**
 * @type {_Groups.Role}
 */
_Groups.Role.prototype.MANAGER;

/**
 * @type {_Groups.Role}
 */
_Groups.Role.prototype.MEMBER;

/**
 * @type {_Groups.Role}
 */
_Groups.Role.prototype.INVITED;

/**
 * @type {_Groups.Role}
 */
_Groups.Role.prototype.PENDING;


/**
 * _Language Services
 */
var _Language = {};

/**
 * Class LanguageApp
 * @constructor
 */
_Language.LanguageApp = function() {};

/**
 * @return {string}
 */
_Language.LanguageApp.prototype.translate = function() {};


/**
 * @type {_Language.LanguageApp}
 */
var LanguageApp = new _Language.LanguageApp();


/**
 * _Maps Services
 */
var _Maps = {};

/**
 * Class Maps
 * @constructor
 */
_Maps.Maps = function() {};

/**
 * @type {_Maps.DirectionFinderEnums}
 */
_Maps.Maps.prototype.DirectionFinder;

/**
 * @type {_Maps.StaticMapEnums}
 */
_Maps.Maps.prototype.StaticMap;

/**
 * @param {string} polyline
 * @return {Array.<number>}
 */
_Maps.Maps.prototype.decodePolyline = function(polyline) {};

/**
 * @param {Array.<number>} points
 * @return {string}
 */
_Maps.Maps.prototype.encodePolyline = function(points) {};

/**
 * @return {_Maps.DirectionFinder}
 */
_Maps.Maps.prototype.newDirectionFinder = function() {};

/**
 * @return {_Maps.ElevationSampler}
 */
_Maps.Maps.prototype.newElevationSampler = function() {};

/**
 * @return {_Maps.Geocoder}
 */
_Maps.Maps.prototype.newGeocoder = function() {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.Maps.prototype.newStaticMap = function() {};

/**
 * @param {string} clientId
 * @param {string} signingKey
 */
_Maps.Maps.prototype.setAuthentication = function(clientId, signingKey) {};


/**
 * @type {_Maps.Maps}
 */
var Maps = new _Maps.Maps();

/**
 * Class DirectionFinder
 * @constructor
 */
_Maps.DirectionFinder = function() {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.addWaypoint = function(arg1, longitude) {};

/**
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.clearWaypoints = function() {};

/**
 * @return {Object}
 */
_Maps.DirectionFinder.prototype.getDirections = function() {};

/**
 * @param {boolean} useAlternatives
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setAlternatives = function(useAlternatives) {};

/**
 * @param {Date} time
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setArrive = function(time) {};

/**
 * @param {string} avoid
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setAvoid = function(avoid) {};

/**
 * @param {Date} time
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setDepart = function(time) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setDestination = function(arg1, longitude) {};

/**
 * @param {string} language
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setLanguage = function(language) {};

/**
 * @param {string} mode
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setMode = function(mode) {};

/**
 * @param {boolean} optimizeOrder
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setOptimizeWaypoints = function(optimizeOrder) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setOrigin = function(arg1, longitude) {};

/**
 * @param {string} region
 * @return {_Maps.DirectionFinder}
 */
_Maps.DirectionFinder.prototype.setRegion = function(region) {};

/**
 * Class ElevationSampler
 * @constructor
 */
_Maps.ElevationSampler = function() {};

/**
 * @param {number} latitude
 * @param {number} longitude
 * @return {Object}
 */
_Maps.ElevationSampler.prototype.sampleLocation = function(latitude, longitude) {};

/**
 * @param {(Array.<number>|string)} arg1
 * @return {Object}
 */
_Maps.ElevationSampler.prototype.sampleLocations = function(arg1) {};

/**
 * @param {(Array.<number>|string)} arg1
 * @param {number} numSamples
 * @return {Object}
 */
_Maps.ElevationSampler.prototype.samplePath = function(arg1, numSamples) {};

/**
 * Class Geocoder
 * @constructor
 */
_Maps.Geocoder = function() {};

/**
 * @param {string} address
 * @return {Object}
 */
_Maps.Geocoder.prototype.geocode = function(address) {};

/**
 * @param {number} arg1
 * @param {number} arg2
 * @param {number=} neLatitude
 * @param {number=} neLongitude
 * @return {Object}
 */
_Maps.Geocoder.prototype.reverseGeocode = function(arg1, arg2, neLatitude, neLongitude) {};

/**
 * @param {number} swLatitude
 * @param {number} swLongitude
 * @param {number} neLatitude
 * @param {number} neLongitude
 * @return {_Maps.Geocoder}
 */
_Maps.Geocoder.prototype.setBounds = function(swLatitude, swLongitude, neLatitude, neLongitude) {};

/**
 * @param {string} language
 * @return {_Maps.Geocoder}
 */
_Maps.Geocoder.prototype.setLanguage = function(language) {};

/**
 * @param {string} region
 * @return {_Maps.Geocoder}
 */
_Maps.Geocoder.prototype.setRegion = function(region) {};

/**
 * Class StaticMap
 * @constructor
 */
_Maps.StaticMap = function() {};

/**
 * @param {string} address
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.addAddress = function(address) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.addMarker = function(arg1, longitude) {};

/**
 * @param {(Array.<number>|string)} arg1
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.addPath = function(arg1) {};

/**
 * @param {number} latitude
 * @param {number} longitude
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.addPoint = function(latitude, longitude) {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.addVisible = function(arg1, longitude) {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.beginPath = function() {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.clearMarkers = function() {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.clearPaths = function() {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.clearVisibles = function() {};

/**
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.endPath = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Maps.StaticMap.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Maps.StaticMap.prototype.getBlob = function() {};

/**
 * @return {Array.<number>}
 */
_Maps.StaticMap.prototype.getMapImage = function() {};

/**
 * @return {string}
 */
_Maps.StaticMap.prototype.getMapUrl = function() {};

/**
 * @param {(number|string)} arg1
 * @param {number=} longitude
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setCenter = function(arg1, longitude) {};

/**
 * @param {string} imageUrl
 * @param {boolean} useShadow
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setCustomMarkerStyle = function(imageUrl, useShadow) {};

/**
 * @param {string} format
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setFormat = function(format) {};

/**
 * @param {string} language
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setLanguage = function(language) {};

/**
 * @param {string} mapType
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setMapType = function(mapType) {};

/**
 * @param {string} size
 * @param {string} color
 * @param {string} label
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setMarkerStyle = function(size, color, label) {};

/**
 * @param {boolean} useMobileTiles
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setMobile = function(useMobileTiles) {};

/**
 * @param {number} weight
 * @param {string} color
 * @param {string} fillColor
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setPathStyle = function(weight, color, fillColor) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setSize = function(width, height) {};

/**
 * @param {number} zoom
 * @return {_Maps.StaticMap}
 */
_Maps.StaticMap.prototype.setZoom = function(zoom) {};

/**
 * Enum Avoid
 * @constructor
 */
_Maps.Avoid = function() {};

/**
 * @type {_Maps.Avoid}
 */
_Maps.Avoid.prototype.TOLLS;

/**
 * @type {_Maps.Avoid}
 */
_Maps.Avoid.prototype.HIGHWAYS;

/**
 * Enum Color
 * @constructor
 */
_Maps.Color = function() {};

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.BLACK;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.BROWN;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.GREEN;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.PURPLE;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.YELLOW;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.BLUE;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.GRAY;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.ORANGE;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.RED;

/**
 * @type {_Maps.Color}
 */
_Maps.Color.prototype.WHITE;

/**
 * Enum DirectionFinderEnums
 * @constructor
 */
_Maps.DirectionFinderEnums = function() {};

/**
 * @type {_Maps.DirectionFinderEnums}
 */
_Maps.DirectionFinderEnums.prototype.Avoid;

/**
 * @type {_Maps.DirectionFinderEnums}
 */
_Maps.DirectionFinderEnums.prototype.Mode;

/**
 * Enum Format
 * @constructor
 */
_Maps.Format = function() {};

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.PNG;

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.PNG8;

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.PNG32;

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.GIF;

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.JPG;

/**
 * @type {_Maps.Format}
 */
_Maps.Format.prototype.JPG_BASELINE;

/**
 * Enum MarkerSize
 * @constructor
 */
_Maps.MarkerSize = function() {};

/**
 * @type {_Maps.MarkerSize}
 */
_Maps.MarkerSize.prototype.TINY;

/**
 * @type {_Maps.MarkerSize}
 */
_Maps.MarkerSize.prototype.MID;

/**
 * @type {_Maps.MarkerSize}
 */
_Maps.MarkerSize.prototype.SMALL;

/**
 * Enum Mode
 * @constructor
 */
_Maps.Mode = function() {};

/**
 * @type {_Maps.Mode}
 */
_Maps.Mode.prototype.DRIVING;

/**
 * @type {_Maps.Mode}
 */
_Maps.Mode.prototype.WALKING;

/**
 * @type {_Maps.Mode}
 */
_Maps.Mode.prototype.BICYCLING;

/**
 * Enum StaticMapEnums
 * @constructor
 */
_Maps.StaticMapEnums = function() {};

/**
 * @type {_Maps.StaticMapEnums}
 */
_Maps.StaticMapEnums.prototype.Color;

/**
 * @type {_Maps.StaticMapEnums}
 */
_Maps.StaticMapEnums.prototype.Format;

/**
 * @type {_Maps.StaticMapEnums}
 */
_Maps.StaticMapEnums.prototype.MarkerSize;

/**
 * @type {_Maps.StaticMapEnums}
 */
_Maps.StaticMapEnums.prototype.Type;

/**
 * Enum Type
 * @constructor
 */
_Maps.Type = function() {};

/**
 * @type {_Maps.Type}
 */
_Maps.Type.prototype.ROADMAP;

/**
 * @type {_Maps.Type}
 */
_Maps.Type.prototype.SATELLITE;

/**
 * @type {_Maps.Type}
 */
_Maps.Type.prototype.TERRAIN;

/**
 * @type {_Maps.Type}
 */
_Maps.Type.prototype.HYBRID;


/**
 * _Sites Services
 */
var _Sites = {};

/**
 * Class SitesApp
 * @constructor
 */
_Sites.SitesApp = function() {};

/**
 * @type {_Sites.AttachmentType}
 */
_Sites.SitesApp.prototype.AttachmentType;

/**
 * @type {_Sites.PageType}
 */
_Sites.SitesApp.prototype.PageType;

/**
 * @param {string} domain
 * @param {string} name
 * @param {string} title
 * @param {string} summary
 * @param {_Sites.Site} site
 * @return {_Sites.Site}
 */
_Sites.SitesApp.prototype.copySite = function(domain, name, title, summary, site) {};

/**
 * @param {string} domain
 * @param {string} name
 * @param {string} title
 * @param {string} summary
 * @return {_Sites.Site}
 */
_Sites.SitesApp.prototype.createSite = function(domain, name, title, summary) {};

/**
 * @return {_Sites.Page}
 */
_Sites.SitesApp.prototype.getActivePage = function() {};

/**
 * @return {_Sites.Site}
 */
_Sites.SitesApp.prototype.getActiveSite = function() {};

/**
 * @param {string} domain
 * @param {number=} start
 * @param {number=} max
 * @return {Array.<_Sites.Site>}
 */
_Sites.SitesApp.prototype.getAllSites = function(domain, start, max) {};

/**
 * @param {string} url
 * @return {_Sites.Page}
 */
_Sites.SitesApp.prototype.getPageByUrl = function(url) {};

/**
 * @param {string} arg1
 * @param {string=} name
 * @return {_Sites.Site}
 */
_Sites.SitesApp.prototype.getSite = function(arg1, name) {};

/**
 * @param {string} url
 * @return {_Sites.Site}
 */
_Sites.SitesApp.prototype.getSiteByUrl = function(url) {};

/**
 * @param {(number|string)=} arg1
 * @param {number=} arg2
 * @param {number=} max
 * @return {Array.<_Sites.Site>}
 */
_Sites.SitesApp.prototype.getSites = function(arg1, arg2, max) {};


/**
 * @type {_Sites.SitesApp}
 */
var SitesApp = new _Sites.SitesApp();

/**
 * Class Attachment
 * @constructor
 */
_Sites.Attachment = function() {};

/**
 */
_Sites.Attachment.prototype.deleteAttachment = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Sites.Attachment.prototype.getAs = function(contentType) {};

/**
 * @return {_Sites.AttachmentType}
 */
_Sites.Attachment.prototype.getAttachmentType = function() {};

/**
 * @return {_Base.Blob}
 */
_Sites.Attachment.prototype.getBlob = function() {};

/**
 * @return {string}
 */
_Sites.Attachment.prototype.getContentType = function() {};

/**
 * @return {Date}
 */
_Sites.Attachment.prototype.getDatePublished = function() {};

/**
 * @return {string}
 */
_Sites.Attachment.prototype.getDescription = function() {};

/**
 * @return {Date}
 */
_Sites.Attachment.prototype.getLastUpdated = function() {};

/**
 * @return {_Sites.Page}
 */
_Sites.Attachment.prototype.getParent = function() {};

/**
 * @return {string}
 */
_Sites.Attachment.prototype.getTitle = function() {};

/**
 * @return {string}
 */
_Sites.Attachment.prototype.getUrl = function() {};

/**
 * @param {string} contentType
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setContentType = function(contentType) {};

/**
 * @param {string} description
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setDescription = function(description) {};

/**
 * @param {_Base.BlobSource} blob
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setFrom = function(blob) {};

/**
 * @param {_Sites.Page} parent
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setParent = function(parent) {};

/**
 * @param {string} title
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setTitle = function(title) {};

/**
 * @param {string} url
 * @return {_Sites.Attachment}
 */
_Sites.Attachment.prototype.setUrl = function(url) {};

/**
 * Class Column
 * @constructor
 */
_Sites.Column = function() {};

/**
 */
_Sites.Column.prototype.deleteColumn = function() {};

/**
 * @return {string}
 */
_Sites.Column.prototype.getName = function() {};

/**
 * @return {_Sites.Page}
 */
_Sites.Column.prototype.getParent = function() {};

/**
 * @param {string} name
 * @return {_Sites.Column}
 */
_Sites.Column.prototype.setName = function(name) {};

/**
 * Class Comment
 * @constructor
 */
_Sites.Comment = function() {};

/**
 */
_Sites.Comment.prototype.deleteComment = function() {};

/**
 * @return {string}
 */
_Sites.Comment.prototype.getAuthorEmail = function() {};

/**
 * @return {string}
 */
_Sites.Comment.prototype.getAuthorName = function() {};

/**
 * @return {string}
 */
_Sites.Comment.prototype.getContent = function() {};

/**
 * @return {Date}
 */
_Sites.Comment.prototype.getDatePublished = function() {};

/**
 * @return {Date}
 */
_Sites.Comment.prototype.getLastUpdated = function() {};

/**
 * @return {_Sites.Page}
 */
_Sites.Comment.prototype.getParent = function() {};

/**
 * @param {string} content
 * @return {_Sites.Comment}
 */
_Sites.Comment.prototype.setContent = function(content) {};

/**
 * @param {_Sites.Page} parent
 * @return {_Sites.Comment}
 */
_Sites.Comment.prototype.setParent = function(parent) {};

/**
 * Class ListItem
 * @constructor
 */
_Sites.ListItem = function() {};

/**
 */
_Sites.ListItem.prototype.deleteListItem = function() {};

/**
 * @return {Date}
 */
_Sites.ListItem.prototype.getDatePublished = function() {};

/**
 * @return {Date}
 */
_Sites.ListItem.prototype.getLastUpdated = function() {};

/**
 * @return {_Sites.Page}
 */
_Sites.ListItem.prototype.getParent = function() {};

/**
 * @param {number} index
 * @return {string}
 */
_Sites.ListItem.prototype.getValueByIndex = function(index) {};

/**
 * @param {string} name
 * @return {string}
 */
_Sites.ListItem.prototype.getValueByName = function(name) {};

/**
 * @param {_Sites.Page} parent
 * @return {_Sites.ListItem}
 */
_Sites.ListItem.prototype.setParent = function(parent) {};

/**
 * @param {number} index
 * @param {string} value
 * @return {_Sites.ListItem}
 */
_Sites.ListItem.prototype.setValueByIndex = function(index, value) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {_Sites.ListItem}
 */
_Sites.ListItem.prototype.setValueByName = function(name, value) {};

/**
 * Class Page
 * @constructor
 */
_Sites.Page = function() {};

/**
 * @param {string} name
 * @return {_Sites.Column}
 */
_Sites.Page.prototype.addColumn = function(name) {};

/**
 * @param {string} content
 * @return {_Sites.Comment}
 */
_Sites.Page.prototype.addComment = function(content) {};

/**
 * @param {_Base.BlobSource} blob
 * @param {string=} description
 * @return {_Sites.Attachment}
 */
_Sites.Page.prototype.addHostedAttachment = function(blob, description) {};

/**
 * @param {Array.<string>} values
 * @return {_Sites.ListItem}
 */
_Sites.Page.prototype.addListItem = function(values) {};

/**
 * @param {string} title
 * @param {string} description
 * @param {string} url
 * @return {_Sites.Attachment}
 */
_Sites.Page.prototype.addWebAttachment = function(title, description, url) {};

/**
 * @param {string} title
 * @param {string} html
 * @param {boolean=} asDraft
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createAnnouncement = function(title, html, asDraft) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createAnnouncementsPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createFileCabinetPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @param {Array.<string>} columnNames
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createListPage = function(title, name, html, columnNames) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {_Sites.Page} template
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createPageFromTemplate = function(title, name, template) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.createWebPage = function(title, name, html) {};

/**
 */
_Sites.Page.prototype.deletePage = function() {};

/**
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Page.prototype.getAllDescendants = function(options) {};

/**
 * @param {Object=} optOptions
 * @return {Array.<_Sites.Page>}
 */
_Sites.Page.prototype.getAnnouncements = function(optOptions) {};

/**
 * @param {Object=} optOptions
 * @return {Array.<_Sites.Attachment>}
 */
_Sites.Page.prototype.getAttachments = function(optOptions) {};

/**
 * @return {Array.<string>}
 */
_Sites.Page.prototype.getAuthors = function() {};

/**
 * @param {string} name
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.getChildByName = function(name) {};

/**
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Page.prototype.getChildren = function(options) {};

/**
 * @return {Array.<_Sites.Column>}
 */
_Sites.Page.prototype.getColumns = function() {};

/**
 * @param {Object=} optOptions
 * @return {Array.<_Sites.Comment>}
 */
_Sites.Page.prototype.getComments = function(optOptions) {};

/**
 * @return {Date}
 */
_Sites.Page.prototype.getDatePublished = function() {};

/**
 * @return {string}
 */
_Sites.Page.prototype.getHtmlContent = function() {};

/**
 * @return {boolean}
 */
_Sites.Page.prototype.getIsDraft = function() {};

/**
 * @return {Date}
 */
_Sites.Page.prototype.getLastEdited = function() {};

/**
 * @return {Date}
 */
_Sites.Page.prototype.getLastUpdated = function() {};

/**
 * @param {Object=} optOptions
 * @return {Array.<_Sites.ListItem>}
 */
_Sites.Page.prototype.getListItems = function(optOptions) {};

/**
 * @return {string}
 */
_Sites.Page.prototype.getName = function() {};

/**
 * @return {_Sites.PageType}
 */
_Sites.Page.prototype.getPageType = function() {};

/**
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.getParent = function() {};

/**
 * @return {string}
 */
_Sites.Page.prototype.getTextContent = function() {};

/**
 * @return {string}
 */
_Sites.Page.prototype.getTitle = function() {};

/**
 * @return {string}
 */
_Sites.Page.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
_Sites.Page.prototype.isDeleted = function() {};

/**
 * @return {boolean}
 */
_Sites.Page.prototype.isTemplate = function() {};

/**
 * @param {string} name
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.publishAsTemplate = function(name) {};

/**
 * @param {string} query
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Page.prototype.search = function(query, options) {};

/**
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.setHtmlContent = function(html) {};

/**
 * @param {boolean} draft
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.setIsDraft = function(draft) {};

/**
 * @param {string} name
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.setName = function(name) {};

/**
 * @param {_Sites.Page} parent
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.setParent = function(parent) {};

/**
 * @param {string} title
 * @return {_Sites.Page}
 */
_Sites.Page.prototype.setTitle = function(title) {};

/**
 * Class Site
 * @constructor
 */
_Sites.Site = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.addOwner = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.createAnnouncementsPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.createFileCabinetPage = function(title, name, html) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @param {Array.<string>} columnNames
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.createListPage = function(title, name, html, columnNames) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {_Sites.Page} template
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.createPageFromTemplate = function(title, name, template) {};

/**
 * @param {string} title
 * @param {string} name
 * @param {string} html
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.createWebPage = function(title, name, html) {};

/**
 */
_Sites.Site.prototype.deleteSite = function() {};

/**
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Site.prototype.getAllDescendants = function(options) {};

/**
 * @param {string} name
 * @return {_Sites.Page}
 */
_Sites.Site.prototype.getChildByName = function(name) {};

/**
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Site.prototype.getChildren = function(options) {};

/**
 * @return {Array.<_Base.User>}
 */
_Sites.Site.prototype.getEditors = function() {};

/**
 * @return {string}
 */
_Sites.Site.prototype.getName = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Sites.Site.prototype.getOwners = function() {};

/**
 * @return {string}
 */
_Sites.Site.prototype.getSummary = function() {};

/**
 * @return {Array.<_Sites.Page>}
 */
_Sites.Site.prototype.getTemplates = function() {};

/**
 * @return {string}
 */
_Sites.Site.prototype.getTheme = function() {};

/**
 * @return {string}
 */
_Sites.Site.prototype.getTitle = function() {};

/**
 * @return {string}
 */
_Sites.Site.prototype.getUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Sites.Site.prototype.getViewers = function() {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.removeEditor = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.removeOwner = function(arg1) {};

/**
 * @param {(string|_Base.User)} arg1
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.removeViewer = function(arg1) {};

/**
 * @param {string} query
 * @param {Object=} options
 * @return {Array.<_Sites.Page>}
 */
_Sites.Site.prototype.search = function(query, options) {};

/**
 * @param {string} summary
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.setSummary = function(summary) {};

/**
 * @param {string} theme
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.setTheme = function(theme) {};

/**
 * @param {string} title
 * @return {_Sites.Site}
 */
_Sites.Site.prototype.setTitle = function(title) {};

/**
 * Enum AttachmentType
 * @constructor
 */
_Sites.AttachmentType = function() {};

/**
 * @type {_Sites.AttachmentType}
 */
_Sites.AttachmentType.prototype.WEB;

/**
 * @type {_Sites.AttachmentType}
 */
_Sites.AttachmentType.prototype.HOSTED;

/**
 * Enum PageType
 * @constructor
 */
_Sites.PageType = function() {};

/**
 * @type {_Sites.PageType}
 */
_Sites.PageType.prototype.WEB_PAGE;

/**
 * @type {_Sites.PageType}
 */
_Sites.PageType.prototype.LIST_PAGE;

/**
 * @type {_Sites.PageType}
 */
_Sites.PageType.prototype.ANNOUNCEMENT;

/**
 * @type {_Sites.PageType}
 */
_Sites.PageType.prototype.ANNOUNCEMENTS_PAGE;

/**
 * @type {_Sites.PageType}
 */
_Sites.PageType.prototype.FILE_CABINET_PAGE;


/**
 * _Spreadsheet Services
 */
var _Spreadsheet = {};

/**
 * Class SpreadsheetApp
 * @constructor
 */
_Spreadsheet.SpreadsheetApp = function() {};

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.SpreadsheetApp.prototype.DataValidationCriteria;

/**
 * @param {string} name
 * @param {number=} rows
 * @param {number=} columns
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.create = function(name, rows, columns) {};

/**
 */
_Spreadsheet.SpreadsheetApp.prototype.flush = function() {};

/**
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.getActive = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.SpreadsheetApp.prototype.getActiveRange = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.getActiveSheet = function() {};

/**
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.getActiveSpreadsheet = function() {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.SpreadsheetApp.prototype.newDataValidation = function() {};

/**
 * @param {_DocsList.File} file
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.open = function(file) {};

/**
 * @param {string} id
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.openById = function(id) {};

/**
 * @param {string} url
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.openByUrl = function(url) {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.SpreadsheetApp.prototype.setActiveRange = function(range) {};

/**
 * @param {_Spreadsheet.Sheet} sheet
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.SpreadsheetApp.prototype.setActiveSheet = function(sheet) {};

/**
 * @param {_Spreadsheet.Spreadsheet} newActiveSpreadsheet
 */
_Spreadsheet.SpreadsheetApp.prototype.setActiveSpreadsheet = function(newActiveSpreadsheet) {};


/**
 * @type {_Spreadsheet.SpreadsheetApp}
 */
var SpreadsheetApp = new _Spreadsheet.SpreadsheetApp();

/**
 * Class ContainerInfo
 * @constructor
 */
_Spreadsheet.ContainerInfo = function() {};

/**
 * @return {number}
 */
_Spreadsheet.ContainerInfo.prototype.getAnchorColumn = function() {};

/**
 * @return {number}
 */
_Spreadsheet.ContainerInfo.prototype.getAnchorRow = function() {};

/**
 * @return {number}
 */
_Spreadsheet.ContainerInfo.prototype.getOffsetX = function() {};

/**
 * @return {number}
 */
_Spreadsheet.ContainerInfo.prototype.getOffsetY = function() {};

/**
 * Class DataValidation
 * @constructor
 */
_Spreadsheet.DataValidation = function() {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidation.prototype.copy = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.DataValidation.prototype.getAllowInvalid = function() {};

/**
 * @return {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidation.prototype.getCriteriaType = function() {};

/**
 * @return {Array.<Object>}
 */
_Spreadsheet.DataValidation.prototype.getCriteriaValues = function() {};

/**
 * @return {string}
 */
_Spreadsheet.DataValidation.prototype.getHelpText = function() {};

/**
 * Class DataValidationBuilder
 * @constructor
 */
_Spreadsheet.DataValidationBuilder = function() {};

/**
 * @return {_Spreadsheet.DataValidation}
 */
_Spreadsheet.DataValidationBuilder.prototype.build = function() {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.copy = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.DataValidationBuilder.prototype.getAllowInvalid = function() {};

/**
 * @return {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationBuilder.prototype.getCriteriaType = function() {};

/**
 * @return {Array.<Object>}
 */
_Spreadsheet.DataValidationBuilder.prototype.getCriteriaValues = function() {};

/**
 * @return {string}
 */
_Spreadsheet.DataValidationBuilder.prototype.getHelpText = function() {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDate = function() {};

/**
 * @param {Date} date
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateAfter = function(date) {};

/**
 * @param {Date} date
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateBefore = function(date) {};

/**
 * @param {Date} start
 * @param {Date} end
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateBetween = function(start, end) {};

/**
 * @param {Date} date
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateEqualTo = function(date) {};

/**
 * @param {Date} start
 * @param {Date} end
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateNotBetween = function(start, end) {};

/**
 * @param {Date} date
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateOnOrAfter = function(date) {};

/**
 * @param {Date} date
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireDateOnOrBefore = function(date) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberBetween = function(start, end) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberEqualTo = function(number) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberGreaterThan = function(number) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberGreaterThanOrEqualTo = function(number) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberLessThan = function(number) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberLessThanOrEqualTo = function(number) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberNotBetween = function(start, end) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireNumberNotEqualTo = function(number) {};

/**
 * @param {string} text
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireTextContains = function(text) {};

/**
 * @param {string} text
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireTextDoesNotContain = function(text) {};

/**
 * @param {string} text
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireTextEqualTo = function(text) {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireTextIsEmail = function() {};

/**
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireTextIsUrl = function() {};

/**
 * @param {Array.<string>} values
 * @param {boolean=} showDropdown
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireValueInList = function(values, showDropdown) {};

/**
 * @param {_Spreadsheet.Range} range
 * @param {boolean=} showDropdown
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.requireValueInRange = function(range, showDropdown) {};

/**
 * @param {boolean} allowInvalidData
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.setAllowInvalid = function(allowInvalidData) {};

/**
 * @param {string} helpText
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.setHelpText = function(helpText) {};

/**
 * @param {_Spreadsheet.DataValidationCriteria} criteria
 * @param {Array.<Object>} args
 * @return {_Spreadsheet.DataValidationBuilder}
 */
_Spreadsheet.DataValidationBuilder.prototype.withCriteria = function(criteria, args) {};

/**
 * Class EmbeddedAreaChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedAreaChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedAreaChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedBarChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedBarChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.reverseDirection = function() {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedBarChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedChart
 * @constructor
 */
_Spreadsheet.EmbeddedChart = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Spreadsheet.EmbeddedChart.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Spreadsheet.EmbeddedChart.prototype.getBlob = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedChart.prototype.getContainerInfo = function() {};

/**
 * @return {string}
 */
_Spreadsheet.EmbeddedChart.prototype.getId = function() {};

/**
 * @return {_Charts.ChartOptions}
 */
_Spreadsheet.EmbeddedChart.prototype.getOptions = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedChart.prototype.getRanges = function() {};

/**
 * @return {string}
 */
_Spreadsheet.EmbeddedChart.prototype.getType = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChart.prototype.modify = function() {};

/**
 * @param {string} id
 * @return {_Charts.Chart}
 */
_Spreadsheet.EmbeddedChart.prototype.setId = function(id) {};

/**
 * Class EmbeddedChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * Class EmbeddedColumnChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedColumnChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedColumnChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedLineChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedLineChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.CurveStyle} style
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setCurveStyle = function(style) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedLineChartBuilder.prototype.useLogScale = function() {};

/**
 * Class EmbeddedPieChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedPieChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.removeRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.set3D = function() {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedPieChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * Class EmbeddedScatterChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedScatterChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {string} cssValue
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.Position} position
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {string} chartTitle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisLogScale = function() {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisRange = function(start, end) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisLogScale = function() {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisRange = function(start, end) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * Class EmbeddedTableChartBuilder
 * @constructor
 */
_Spreadsheet.EmbeddedTableChartBuilder = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.addRange = function(range) {};

/**
 * @return {_Spreadsheet.EmbeddedAreaChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asAreaChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedBarChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asBarChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedColumnChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asColumnChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedLineChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asLineChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedPieChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asPieChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedScatterChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asScatterChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.asTableChart = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChart}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.build = function() {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} startPage
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.enablePaging = function(arg1, startPage) {};

/**
 * @param {boolean} rtlEnabled
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.enableRtlTable = function(rtlEnabled) {};

/**
 * @param {boolean} enableSorting
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.enableSorting = function(enableSorting) {};

/**
 * @return {_Charts.ChartType}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.getChartType = function() {};

/**
 * @return {_Spreadsheet.ContainerInfo}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.getContainer = function() {};

/**
 * @return {Array.<_Spreadsheet.Range>}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.getRanges = function() {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.removeRange = function(range) {};

/**
 * @param {_Charts.ChartType} type
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setChartType = function(type) {};

/**
 * @param {number} number
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setFirstRowNumber = function(number) {};

/**
 * @param {number} column
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setInitialSortingAscending = function(column) {};

/**
 * @param {number} column
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setInitialSortingDescending = function(column) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} anchorRowPos
 * @param {number} anchorColPos
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY) {};

/**
 * @param {boolean} showRowNumber
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber) {};

/**
 * @param {boolean} alternate
 * @return {_Spreadsheet.EmbeddedTableChartBuilder}
 */
_Spreadsheet.EmbeddedTableChartBuilder.prototype.useAlternatingRowStyle = function(alternate) {};

/**
 * Class PageProtection
 * @constructor
 */
_Spreadsheet.PageProtection = function() {};

/**
 * @param {string} email
 */
_Spreadsheet.PageProtection.prototype.addUser = function(email) {};

/**
 * @return {Array.<string>}
 */
_Spreadsheet.PageProtection.prototype.getUsers = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.PageProtection.prototype.isProtected = function() {};

/**
 * @param {string} user
 */
_Spreadsheet.PageProtection.prototype.removeUser = function(user) {};

/**
 * @param {boolean} protection
 */
_Spreadsheet.PageProtection.prototype.setProtected = function(protection) {};

/**
 * Class Range
 * @constructor
 */
_Spreadsheet.Range = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.activate = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.breakApart = function() {};

/**
 * @param {Object=} options
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.clear = function(options) {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.clearContent = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.clearDataValidations = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.clearFormat = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.clearNote = function() {};

/**
 * @param {(number|_Spreadsheet.Sheet)} arg1
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
_Spreadsheet.Range.prototype.copyFormatToRange = function(arg1, column, columnEnd, row, rowEnd) {};

/**
 * @param {_Spreadsheet.Range} destination
 * @param {Object=} options
 */
_Spreadsheet.Range.prototype.copyTo = function(destination, options) {};

/**
 * @param {(number|_Spreadsheet.Sheet)} arg1
 * @param {number} column
 * @param {number} columnEnd
 * @param {number} row
 * @param {number} rowEnd
 */
_Spreadsheet.Range.prototype.copyValuesToRange = function(arg1, column, columnEnd, row, rowEnd) {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getA1Notation = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getBackground = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getBackgrounds = function() {};

/**
 * @param {number} row
 * @param {number} column
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.getCell = function(row, column) {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getColumn = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getDataSourceUrl = function() {};

/**
 * @param {boolean=} firstRowIsHeader
 * @return {_Charts.DataTable}
 */
_Spreadsheet.Range.prototype.getDataTable = function(firstRowIsHeader) {};

/**
 * @return {_Spreadsheet.DataValidation}
 */
_Spreadsheet.Range.prototype.getDataValidation = function() {};

/**
 * @return {Array.<Array.<_Spreadsheet.DataValidation>>}
 */
_Spreadsheet.Range.prototype.getDataValidations = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFontColor = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFontColors = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFontFamilies = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFontFamily = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFontLine = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFontLines = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getFontSize = function() {};

/**
 * @return {Array.<Array.<number>>}
 */
_Spreadsheet.Range.prototype.getFontSizes = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFontStyle = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFontStyles = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFontWeight = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFontWeights = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFormula = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getFormulaR1C1 = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFormulas = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getFormulasR1C1 = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getGridId = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getHeight = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getHorizontalAlignment = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getHorizontalAlignments = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getLastRow = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getNote = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getNotes = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getNumColumns = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getNumRows = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getNumberFormat = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getNumberFormats = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getRow = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getRowIndex = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Range.prototype.getSheet = function() {};

/**
 * @return {Object}
 */
_Spreadsheet.Range.prototype.getValue = function() {};

/**
 * @return {Array.<Array.<Object>>}
 */
_Spreadsheet.Range.prototype.getValues = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Range.prototype.getVerticalAlignment = function() {};

/**
 * @return {Array.<Array.<string>>}
 */
_Spreadsheet.Range.prototype.getVerticalAlignments = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Range.prototype.getWidth = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.Range.prototype.getWrap = function() {};

/**
 * @return {Array.<Array.<boolean>>}
 */
_Spreadsheet.Range.prototype.getWraps = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.Range.prototype.isBlank = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.merge = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.mergeAcross = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.mergeVertically = function() {};

/**
 * @param {_Spreadsheet.Range} target
 */
_Spreadsheet.Range.prototype.moveTo = function(target) {};

/**
 * @param {number} rowOffset
 * @param {number} columnOffset
 * @param {number=} numRows
 * @param {number=} numColumns
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.offset = function(rowOffset, columnOffset, numRows, numColumns) {};

/**
 * @param {string} color
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setBackground = function(color) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setBackgroundRGB = function(red, green, blue) {};

/**
 * @param {Array.<Array.<string>>} color
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setBackgrounds = function(color) {};

/**
 * @param {boolean} top
 * @param {boolean} left
 * @param {boolean} bottom
 * @param {boolean} right
 * @param {boolean} vertical
 * @param {boolean} horizontal
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setBorder = function(top, left, bottom, right, vertical, horizontal) {};

/**
 * @param {_Spreadsheet.DataValidation} rule
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setDataValidation = function(rule) {};

/**
 * @param {Array.<Array.<_Spreadsheet.DataValidation>>} rules
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setDataValidations = function(rules) {};

/**
 * @param {string} color
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontColor = function(color) {};

/**
 * @param {Array.<Array.<Object>>} colors
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontColors = function(colors) {};

/**
 * @param {Array.<Array.<Object>>} fontFamilies
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontFamilies = function(fontFamilies) {};

/**
 * @param {string} fontFamily
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontFamily = function(fontFamily) {};

/**
 * @param {string} fontLine
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontLine = function(fontLine) {};

/**
 * @param {Array.<Array.<Object>>} fontLines
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontLines = function(fontLines) {};

/**
 * @param {number} size
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontSize = function(size) {};

/**
 * @param {Array.<Array.<Object>>} sizes
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontSizes = function(sizes) {};

/**
 * @param {string} fontStyle
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontStyle = function(fontStyle) {};

/**
 * @param {Array.<Array.<Object>>} fontStyles
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontStyles = function(fontStyles) {};

/**
 * @param {string} fontWeight
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontWeight = function(fontWeight) {};

/**
 * @param {Array.<Array.<Object>>} fontWeights
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFontWeights = function(fontWeights) {};

/**
 * @param {string} formula
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFormula = function(formula) {};

/**
 * @param {string} formula
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFormulaR1C1 = function(formula) {};

/**
 * @param {Array.<Array.<Object>>} formulas
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFormulas = function(formulas) {};

/**
 * @param {Array.<Array.<Object>>} formulas
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setFormulasR1C1 = function(formulas) {};

/**
 * @param {string} alignment
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setHorizontalAlignment = function(alignment) {};

/**
 * @param {Array.<Array.<Object>>} alignments
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setHorizontalAlignments = function(alignments) {};

/**
 * @param {string} note
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setNote = function(note) {};

/**
 * @param {Array.<Array.<Object>>} notes
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setNotes = function(notes) {};

/**
 * @param {string} numberFormat
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setNumberFormat = function(numberFormat) {};

/**
 * @param {Array.<Array.<Object>>} numberFormats
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setNumberFormats = function(numberFormats) {};

/**
 * @param {Object} value
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setValue = function(value) {};

/**
 * @param {Array.<Array.<Object>>} values
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setValues = function(values) {};

/**
 * @param {string} alignment
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setVerticalAlignment = function(alignment) {};

/**
 * @param {Array.<Array.<Object>>} alignments
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setVerticalAlignments = function(alignments) {};

/**
 * @param {boolean} isWrapEnabled
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setWrap = function(isWrapEnabled) {};

/**
 * @param {Array.<Array.<Object>>} isWrapEnabled
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.setWraps = function(isWrapEnabled) {};

/**
 * @param {Object} sortSpecObj
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Range.prototype.sort = function(sortSpecObj) {};

/**
 * Class Sheet
 * @constructor
 */
_Spreadsheet.Sheet = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.activate = function() {};

/**
 * @param {Array.<Object>} rowContents
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.appendRow = function(rowContents) {};

/**
 * @param {number} columnPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.autoResizeColumn = function(columnPosition) {};

/**
 * @param {Object=} options
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.clear = function(options) {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.clearContents = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.clearFormats = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.clearNotes = function() {};

/**
 * @param {_Spreadsheet.Spreadsheet} spreadsheet
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.copyTo = function(spreadsheet) {};

/**
 * @param {number} columnPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.deleteColumn = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {number} howMany
 */
_Spreadsheet.Sheet.prototype.deleteColumns = function(columnPosition, howMany) {};

/**
 * @param {number} rowPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.deleteRow = function(rowPosition) {};

/**
 * @param {number} rowPosition
 * @param {number} howMany
 */
_Spreadsheet.Sheet.prototype.deleteRows = function(rowPosition, howMany) {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.getActiveCell = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.getActiveRange = function() {};

/**
 * @return {Array.<_Spreadsheet.EmbeddedChart>}
 */
_Spreadsheet.Sheet.prototype.getCharts = function() {};

/**
 * @param {number} columnPosition
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getColumnWidth = function(columnPosition) {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.getDataRange = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getFrozenColumns = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getFrozenRows = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getIndex = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getLastRow = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getMaxColumns = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getMaxRows = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Sheet.prototype.getName = function() {};

/**
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.Sheet.prototype.getParent = function() {};

/**
 * @param {(number|string)} arg1
 * @param {number=} column
 * @param {number=} numRows
 * @param {number=} numColumns
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.getRange = function(arg1, column, numRows, numColumns) {};

/**
 * @param {number} rowPosition
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getRowHeight = function(rowPosition) {};

/**
 * @return {number}
 */
_Spreadsheet.Sheet.prototype.getSheetId = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Sheet.prototype.getSheetName = function() {};

/**
 * @return {_Spreadsheet.PageProtection}
 */
_Spreadsheet.Sheet.prototype.getSheetProtection = function() {};

/**
 * @param {number} startRow
 * @param {number} startColumn
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Array.<Array.<Object>>}
 */
_Spreadsheet.Sheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns) {};

/**
 * @param {_Spreadsheet.Range} column
 */
_Spreadsheet.Sheet.prototype.hideColumn = function(column) {};

/**
 * @param {number} columnIndex
 * @param {number=} numColumns
 */
_Spreadsheet.Sheet.prototype.hideColumns = function(columnIndex, numColumns) {};

/**
 * @param {_Spreadsheet.Range} row
 */
_Spreadsheet.Sheet.prototype.hideRow = function(row) {};

/**
 * @param {number} rowIndex
 * @param {number=} numRows
 */
_Spreadsheet.Sheet.prototype.hideRows = function(rowIndex, numRows) {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.hideSheet = function() {};

/**
 * @param {_Spreadsheet.EmbeddedChart} chart
 */
_Spreadsheet.Sheet.prototype.insertChart = function(chart) {};

/**
 * @param {number} afterPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertColumnAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertColumnBefore = function(beforePosition) {};

/**
 * @param {number} columnIndex
 * @param {number=} numColumns
 */
_Spreadsheet.Sheet.prototype.insertColumns = function(columnIndex, numColumns) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertColumnsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertColumnsBefore = function(beforePosition, howMany) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 * @param {number=} offsetX
 * @param {number=} offsetY
 */
_Spreadsheet.Sheet.prototype.insertImage = function(url, column, row, offsetX, offsetY) {};

/**
 * @param {number} afterPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertRowAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertRowBefore = function(beforePosition) {};

/**
 * @param {number} rowIndex
 * @param {number=} numRows
 */
_Spreadsheet.Sheet.prototype.insertRows = function(rowIndex, numRows) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertRowsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.insertRowsBefore = function(beforePosition, howMany) {};

/**
 * @return {boolean}
 */
_Spreadsheet.Sheet.prototype.isSheetHidden = function() {};

/**
 * @return {_Spreadsheet.EmbeddedChartBuilder}
 */
_Spreadsheet.Sheet.prototype.newChart = function() {};

/**
 * @param {_Spreadsheet.EmbeddedChart} chart
 */
_Spreadsheet.Sheet.prototype.removeChart = function(chart) {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.setActiveRange = function(range) {};

/**
 * @param {(_Spreadsheet.Range|string)} arg1
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Sheet.prototype.setActiveSelection = function(arg1) {};

/**
 * @param {number} columnPosition
 * @param {number} width
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.setColumnWidth = function(columnPosition, width) {};

/**
 * @param {number} columns
 */
_Spreadsheet.Sheet.prototype.setFrozenColumns = function(columns) {};

/**
 * @param {number} rows
 */
_Spreadsheet.Sheet.prototype.setFrozenRows = function(rows) {};

/**
 * @param {string} name
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.setName = function(name) {};

/**
 * @param {number} rowPosition
 * @param {number} height
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.setRowHeight = function(rowPosition, height) {};

/**
 * @param {_Spreadsheet.PageProtection} permissions
 */
_Spreadsheet.Sheet.prototype.setSheetProtection = function(permissions) {};

/**
 * @param {number} columnIndex
 * @param {number=} numColumns
 */
_Spreadsheet.Sheet.prototype.showColumns = function(columnIndex, numColumns) {};

/**
 * @param {number} rowIndex
 * @param {number=} numRows
 */
_Spreadsheet.Sheet.prototype.showRows = function(rowIndex, numRows) {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.showSheet = function() {};

/**
 * @param {number} columnPosition
 * @param {boolean=} ascending
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Sheet.prototype.sort = function(columnPosition, ascending) {};

/**
 * @param {_Spreadsheet.Range} column
 */
_Spreadsheet.Sheet.prototype.unhideColumn = function(column) {};

/**
 * @param {_Spreadsheet.Range} row
 */
_Spreadsheet.Sheet.prototype.unhideRow = function(row) {};

/**
 * @param {_Spreadsheet.EmbeddedChart} chart
 */
_Spreadsheet.Sheet.prototype.updateChart = function(chart) {};

/**
 * Class Spreadsheet
 * @constructor
 */
_Spreadsheet.Spreadsheet = function() {};

/**
 * @param {(string|_Base.User)} arg1
 */
_Spreadsheet.Spreadsheet.prototype.addEditor = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 */
_Spreadsheet.Spreadsheet.prototype.addEditors = function(emailAddresses) {};

/**
 * @param {string} name
 * @param {Array.<Object>} subMenus
 */
_Spreadsheet.Spreadsheet.prototype.addMenu = function(name, subMenus) {};

/**
 * @param {(string|_Base.User)} arg1
 */
_Spreadsheet.Spreadsheet.prototype.addViewer = function(arg1) {};

/**
 * @param {Array.<string>} emailAddresses
 */
_Spreadsheet.Spreadsheet.prototype.addViewers = function(emailAddresses) {};

/**
 * @param {Array.<Object>} rowContents
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.appendRow = function(rowContents) {};

/**
 * @param {number} columnPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.autoResizeColumn = function(columnPosition) {};

/**
 * @param {string} name
 * @return {_Spreadsheet.Spreadsheet}
 */
_Spreadsheet.Spreadsheet.prototype.copy = function(name) {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.deleteActiveSheet = function() {};

/**
 * @param {number} columnPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.deleteColumn = function(columnPosition) {};

/**
 * @param {number} columnPosition
 * @param {number} howMany
 */
_Spreadsheet.Spreadsheet.prototype.deleteColumns = function(columnPosition, howMany) {};

/**
 * @param {number} rowPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.deleteRow = function(rowPosition) {};

/**
 * @param {number} rowPosition
 * @param {number} howMany
 */
_Spreadsheet.Spreadsheet.prototype.deleteRows = function(rowPosition, howMany) {};

/**
 * @param {_Spreadsheet.Sheet} sheet
 */
_Spreadsheet.Spreadsheet.prototype.deleteSheet = function(sheet) {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.duplicateActiveSheet = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.getActiveCell = function() {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.getActiveRange = function() {};

/**
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.getActiveSheet = function() {};

/**
 * @param {number} columnPosition
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getColumnWidth = function(columnPosition) {};

/**
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.getDataRange = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Spreadsheet.Spreadsheet.prototype.getEditors = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getFormUrl = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getFrozenColumns = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getFrozenRows = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getId = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getLastColumn = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getLastRow = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getName = function() {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getNumSheets = function() {};

/**
 * @return {_Base.User}
 */
_Spreadsheet.Spreadsheet.prototype.getOwner = function() {};

/**
 * @param {string} a1Notation
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.getRange = function(a1Notation) {};

/**
 * @param {string} name
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.getRangeByName = function(name) {};

/**
 * @param {number} rowPosition
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getRowHeight = function(rowPosition) {};

/**
 * @param {string} name
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.getSheetByName = function(name) {};

/**
 * @return {number}
 */
_Spreadsheet.Spreadsheet.prototype.getSheetId = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getSheetName = function() {};

/**
 * @return {_Spreadsheet.PageProtection}
 */
_Spreadsheet.Spreadsheet.prototype.getSheetProtection = function() {};

/**
 * @param {number} startRow
 * @param {number} startColumn
 * @param {number} numRows
 * @param {number} numColumns
 * @return {Array.<Array.<Object>>}
 */
_Spreadsheet.Spreadsheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns) {};

/**
 * @return {Array.<_Spreadsheet.Sheet>}
 */
_Spreadsheet.Spreadsheet.prototype.getSheets = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getSpreadsheetLocale = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getSpreadsheetTimeZone = function() {};

/**
 * @return {string}
 */
_Spreadsheet.Spreadsheet.prototype.getUrl = function() {};

/**
 * @return {Array.<_Base.User>}
 */
_Spreadsheet.Spreadsheet.prototype.getViewers = function() {};

/**
 * @param {_Spreadsheet.Range} column
 */
_Spreadsheet.Spreadsheet.prototype.hideColumn = function(column) {};

/**
 * @param {_Spreadsheet.Range} row
 */
_Spreadsheet.Spreadsheet.prototype.hideRow = function(row) {};

/**
 * @param {number} afterPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertColumnAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertColumnBefore = function(beforePosition) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertColumnsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertColumnsBefore = function(beforePosition, howMany) {};

/**
 * @param {string} url
 * @param {number} column
 * @param {number} row
 * @param {number=} offsetX
 * @param {number=} offsetY
 */
_Spreadsheet.Spreadsheet.prototype.insertImage = function(url, column, row, offsetX, offsetY) {};

/**
 * @param {number} afterPosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertRowAfter = function(afterPosition) {};

/**
 * @param {number} beforePosition
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertRowBefore = function(beforePosition) {};

/**
 * @param {number} afterPosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertRowsAfter = function(afterPosition, howMany) {};

/**
 * @param {number} beforePosition
 * @param {number} howMany
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertRowsBefore = function(beforePosition, howMany) {};

/**
 * @param {(number|Object|string)=} arg1
 * @param {(Object|number)=} arg2
 * @param {Object=} options
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.insertSheet = function(arg1, arg2, options) {};

/**
 * @return {boolean}
 */
_Spreadsheet.Spreadsheet.prototype.isAnonymousView = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.Spreadsheet.prototype.isAnonymousWrite = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.Spreadsheet.prototype.isReadable = function() {};

/**
 * @return {boolean}
 */
_Spreadsheet.Spreadsheet.prototype.isWritable = function() {};

/**
 * @param {number} pos
 */
_Spreadsheet.Spreadsheet.prototype.moveActiveSheet = function(pos) {};

/**
 * @param {(string|_Base.User)} arg1
 */
_Spreadsheet.Spreadsheet.prototype.removeEditor = function(arg1) {};

/**
 * @param {string} name
 */
_Spreadsheet.Spreadsheet.prototype.removeMenu = function(name) {};

/**
 * @param {string} name
 */
_Spreadsheet.Spreadsheet.prototype.removeNamedRange = function(name) {};

/**
 * @param {(string|_Base.User)} arg1
 */
_Spreadsheet.Spreadsheet.prototype.removeViewer = function(arg1) {};

/**
 * @param {string} newName
 */
_Spreadsheet.Spreadsheet.prototype.rename = function(newName) {};

/**
 * @param {string} newName
 */
_Spreadsheet.Spreadsheet.prototype.renameActiveSheet = function(newName) {};

/**
 * @param {_Spreadsheet.Range} range
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.setActiveRange = function(range) {};

/**
 * @param {(_Spreadsheet.Range|string)} arg1
 * @return {_Spreadsheet.Range}
 */
_Spreadsheet.Spreadsheet.prototype.setActiveSelection = function(arg1) {};

/**
 * @param {_Spreadsheet.Sheet} sheet
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.setActiveSheet = function(sheet) {};

/**
 * @param {boolean} anonymousReadAllowed
 * @param {boolean} anonymousWriteAllowed
 */
_Spreadsheet.Spreadsheet.prototype.setAnonymousAccess = function(anonymousReadAllowed, anonymousWriteAllowed) {};

/**
 * @param {number} columnPosition
 * @param {number} width
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.setColumnWidth = function(columnPosition, width) {};

/**
 * @param {number} columns
 */
_Spreadsheet.Spreadsheet.prototype.setFrozenColumns = function(columns) {};

/**
 * @param {number} rows
 */
_Spreadsheet.Spreadsheet.prototype.setFrozenRows = function(rows) {};

/**
 * @param {string} name
 * @param {_Spreadsheet.Range} range
 */
_Spreadsheet.Spreadsheet.prototype.setNamedRange = function(name, range) {};

/**
 * @param {number} rowPosition
 * @param {number} height
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.setRowHeight = function(rowPosition, height) {};

/**
 * @param {_Spreadsheet.PageProtection} permissions
 */
_Spreadsheet.Spreadsheet.prototype.setSheetProtection = function(permissions) {};

/**
 * @param {string} locale
 */
_Spreadsheet.Spreadsheet.prototype.setSpreadsheetLocale = function(locale) {};

/**
 * @param {string} timezone
 */
_Spreadsheet.Spreadsheet.prototype.setSpreadsheetTimeZone = function(timezone) {};

/**
 */
_Spreadsheet.Spreadsheet.prototype.show = function(userInterface) {};

/**
 * @param {number} columnPosition
 * @param {boolean=} ascending
 * @return {_Spreadsheet.Sheet}
 */
_Spreadsheet.Spreadsheet.prototype.sort = function(columnPosition, ascending) {};

/**
 * @param {string} msg
 * @param {string=} title
 * @param {number=} timeoutSeconds
 */
_Spreadsheet.Spreadsheet.prototype.toast = function(msg, title, timeoutSeconds) {};

/**
 * @param {_Spreadsheet.Range} column
 */
_Spreadsheet.Spreadsheet.prototype.unhideColumn = function(column) {};

/**
 * @param {_Spreadsheet.Range} row
 */
_Spreadsheet.Spreadsheet.prototype.unhideRow = function(row) {};

/**
 * @param {string} name
 * @param {Array.<Object>} subMenus
 */
_Spreadsheet.Spreadsheet.prototype.updateMenu = function(name, subMenus) {};

/**
 * Enum DataValidationCriteria
 * @constructor
 */
_Spreadsheet.DataValidationCriteria = function() {};

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_AFTER;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_BEFORE;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_BETWEEN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_IS_VALID_DATE;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_NOT_BETWEEN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_ON_OR_AFTER;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.DATE_ON_OR_BEFORE;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_BETWEEN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_GREATER_THAN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_GREATER_THAN_OR_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_LESS_THAN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_LESS_THAN_OR_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_NOT_BETWEEN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.NUMBER_NOT_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.TEXT_CONTAINS;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.TEXT_DOES_NOT_CONTAIN;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.TEXT_EQUAL_TO;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.TEXT_IS_VALID_EMAIL;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.TEXT_IS_VALID_URL;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.VALUE_IN_LIST;

/**
 * @type {_Spreadsheet.DataValidationCriteria}
 */
_Spreadsheet.DataValidationCriteria.prototype.VALUE_IN_RANGE;


/**
 * _Base Services
 */
var _Base = {};

/**
 * Class Browser
 * @constructor
 */
_Base.Browser = function() {};

/**
 * @type {_Base.ButtonSet}
 */
_Base.Browser.prototype.Buttons;

/**
 * @param {string} arg1
 * @param {(_Base.ButtonSet|string)=} arg2
 * @param {_Base.ButtonSet=} buttons
 * @return {string}
 */
_Base.Browser.prototype.inputBox = function(arg1, arg2, buttons) {};

/**
 * @param {string} arg1
 * @param {(_Base.ButtonSet|string)=} arg2
 * @param {_Base.ButtonSet=} buttons
 * @return {string}
 */
_Base.Browser.prototype.msgBox = function(arg1, arg2, buttons) {};


/**
 * @type {_Base.Browser}
 */
var Browser = new _Base.Browser();

/**
 * Class Logger
 * @constructor
 */
_Base.Logger = function() {};

/**
 */
_Base.Logger.prototype.clear = function() {};

/**
 * @return {string}
 */
_Base.Logger.prototype.getLog = function() {};

/**
 * @param {(Object|string)} arg1
 * @param {...Object} values
 * @return {_Base.Logger}
 */
_Base.Logger.prototype.log = function(arg1, values) {};


/**
 * @type {_Base.Logger}
 */
var Logger = new _Base.Logger();

/**
 * Enum MimeType
 * @constructor
 */
_Base.MimeType = function() {};

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_APPS_SCRIPT;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_DRAWINGS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_DOCS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_FORMS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_SHEETS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GOOGLE_SLIDES;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.FOLDER;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.BMP;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.GIF;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.JPEG;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.PNG;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.SVG;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.PDF;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.CSS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.CSV;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.HTML;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.JAVASCRIPT;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.PLAIN_TEXT;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.RTF;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.OPENDOCUMENT_GRAPHICS;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.OPENDOCUMENT_PRESENTATION;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.OPENDOCUMENT_SPREADSHEET;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.OPENDOCUMENT_TEXT;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_EXCEL;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_EXCEL_LEGACY;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_POWERPOINT;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_POWERPOINT_LEGACY;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_WORD;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.MICROSOFT_WORD_LEGACY;

/**
 * @type {_Base.MimeType}
 */
_Base.MimeType.prototype.ZIP;


/**
 * @type {_Base.MimeType}
 */
var MimeType = new _Base.MimeType();

/**
 * Class Session
 * @constructor
 */
_Base.Session = function() {};

/**
 * @return {_Base.User}
 */
_Base.Session.prototype.getActiveUser = function() {};

/**
 * @return {_Base.User}
 */
_Base.Session.prototype.getEffectiveUser = function() {};

/**
 * @return {string}
 */
_Base.Session.prototype.getTimeZone = function() {};


/**
 * @type {_Base.Session}
 */
var Session = new _Base.Session();

/**
 * Class Blob
 * @constructor
 */
_Base.Blob = function() {};

/**
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.copyBlob = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.getAs = function(contentType) {};

/**
 * @return {Array.<number>}
 */
_Base.Blob.prototype.getBytes = function() {};

/**
 * @return {string}
 */
_Base.Blob.prototype.getContentType = function() {};

/**
 * @param {string=} charset
 * @return {string}
 */
_Base.Blob.prototype.getDataAsString = function(charset) {};

/**
 * @return {string}
 */
_Base.Blob.prototype.getName = function() {};

/**
 * @return {boolean}
 */
_Base.Blob.prototype.isGoogleType = function() {};

/**
 * @param {Array.<number>} data
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.setBytes = function(data) {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.setContentType = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.setContentTypeFromExtension = function() {};

/**
 * @param {string} string
 * @param {string=} charset
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.setDataFromString = function(string, charset) {};

/**
 * @param {string} name
 * @return {_Base.Blob}
 */
_Base.Blob.prototype.setName = function(name) {};

/**
 * Class Menu
 * @constructor
 */
_Base.Menu = function() {};

/**
 * @param {string} caption
 * @param {string} function_
 * @return {_Base.Menu}
 */
_Base.Menu.prototype.addItem = function(caption, function_) {};

/**
 * @return {_Base.Menu}
 */
_Base.Menu.prototype.addSeparator = function() {};

/**
 * @param {_Base.Menu} menu
 * @return {_Base.Menu}
 */
_Base.Menu.prototype.addSubMenu = function(menu) {};

/**
 */
_Base.Menu.prototype.addToUi = function() {};

/**
 * Class PromptResponse
 * @constructor
 */
_Base.PromptResponse = function() {};

/**
 * @return {string}
 */
_Base.PromptResponse.prototype.getResponseText = function() {};

/**
 * @return {_Base.Button}
 */
_Base.PromptResponse.prototype.getSelectedButton = function() {};

/**
 * Class Ui
 * @constructor
 */
_Base.Ui = function() {};

/**
 * @type {_Base.Button}
 */
_Base.Ui.prototype.Button;

/**
 * @type {_Base.ButtonSet}
 */
_Base.Ui.prototype.ButtonSet;

/**
 * @param {string} arg1
 * @param {(_Base.ButtonSet|string)=} arg2
 * @param {_Base.ButtonSet=} buttons
 * @return {_Base.Button}
 */
_Base.Ui.prototype.alert = function(arg1, arg2, buttons) {};

/**
 * @param {string} caption
 * @return {_Base.Menu}
 */
_Base.Ui.prototype.createMenu = function(caption) {};

/**
 * @param {string} arg1
 * @param {(_Base.ButtonSet|string)=} arg2
 * @param {_Base.ButtonSet=} buttons
 * @return {_Base.PromptResponse}
 */
_Base.Ui.prototype.prompt = function(arg1, arg2, buttons) {};

/**
 * @param {Object} userInterface
 */
_Base.Ui.prototype.showDialog = function(userInterface) {};

/**
 */
_Base.Ui.prototype.showSidebar = function(userInterface) {};

/**
 * Class User
 * @constructor
 */
_Base.User = function() {};

/**
 * @return {string}
 */
_Base.User.prototype.getEmail = function() {};

/**
 * Interface BlobSource
 * @constructor
 */
_Base.BlobSource = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Base.BlobSource.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Base.BlobSource.prototype.getBlob = function() {};

/**
 * Enum Button
 * @constructor
 */
_Base.Button = function() {};

/**
 * @type {_Base.Button}
 */
_Base.Button.prototype.CLOSE;

/**
 * @type {_Base.Button}
 */
_Base.Button.prototype.OK;

/**
 * @type {_Base.Button}
 */
_Base.Button.prototype.CANCEL;

/**
 * @type {_Base.Button}
 */
_Base.Button.prototype.YES;

/**
 * @type {_Base.Button}
 */
_Base.Button.prototype.NO;

/**
 * Enum ButtonSet
 * @constructor
 */
_Base.ButtonSet = function() {};

/**
 * @type {_Base.ButtonSet}
 */
_Base.ButtonSet.prototype.OK;

/**
 * @type {_Base.ButtonSet}
 */
_Base.ButtonSet.prototype.OK_CANCEL;

/**
 * @type {_Base.ButtonSet}
 */
_Base.ButtonSet.prototype.YES_NO;

/**
 * @type {_Base.ButtonSet}
 */
_Base.ButtonSet.prototype.YES_NO_CANCEL;

/**
 * Enum Month
 * @constructor
 */
_Base.Month = function() {};

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.JANUARY;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.FEBRUARY;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.MARCH;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.APRIL;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.MAY;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.JUNE;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.JULY;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.AUGUST;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.SEPTEMBER;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.OCTOBER;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.NOVEMBER;

/**
 * @type {_Base.Month}
 */
_Base.Month.prototype.DECEMBER;

/**
 * Enum Weekday
 * @constructor
 */
_Base.Weekday = function() {};

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.SUNDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.MONDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.TUESDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.WEDNESDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.THURSDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.FRIDAY;

/**
 * @type {_Base.Weekday}
 */
_Base.Weekday.prototype.SATURDAY;


/**
 * _Cache Services
 */
var _Cache = {};

/**
 * Class CacheService
 * @constructor
 */
_Cache.CacheService = function() {};

/**
 * @return {_Cache.Cache}
 */
_Cache.CacheService.prototype.getPrivateCache = function() {};

/**
 * @return {_Cache.Cache}
 */
_Cache.CacheService.prototype.getPublicCache = function() {};


/**
 * @type {_Cache.CacheService}
 */
var CacheService = new _Cache.CacheService();

/**
 * Class Cache
 * @constructor
 */
_Cache.Cache = function() {};

/**
 * @param {string} key
 * @return {string}
 */
_Cache.Cache.prototype.get = function(key) {};

/**
 * @param {Array.<string>} keys
 * @return {Object}
 */
_Cache.Cache.prototype.getAll = function(keys) {};

/**
 * @param {string} key
 * @param {string} value
 * @param {number=} expirationInSeconds
 */
_Cache.Cache.prototype.put = function(key, value, expirationInSeconds) {};

/**
 * @param {Object} values
 * @param {number=} expirationInSeconds
 */
_Cache.Cache.prototype.putAll = function(values, expirationInSeconds) {};

/**
 * @param {string} key
 */
_Cache.Cache.prototype.remove = function(key) {};

/**
 * @param {Array.<string>} keys
 */
_Cache.Cache.prototype.removeAll = function(keys) {};


/**
 * _Charts Services
 */
var _Charts = {};

/**
 * Class Charts
 * @constructor
 */
_Charts.Charts = function() {};

/**
 * @type {_Charts.ChartType}
 */
_Charts.Charts.prototype.ChartType;

/**
 * @type {_Charts.ColumnType}
 */
_Charts.Charts.prototype.ColumnType;

/**
 * @type {_Charts.CurveStyle}
 */
_Charts.Charts.prototype.CurveStyle;

/**
 * @type {_Charts.MatchType}
 */
_Charts.Charts.prototype.MatchType;

/**
 * @type {_Charts.Orientation}
 */
_Charts.Charts.prototype.Orientation;

/**
 * @type {_Charts.PickerValuesLayout}
 */
_Charts.Charts.prototype.PickerValuesLayout;

/**
 * @type {_Charts.PointStyle}
 */
_Charts.Charts.prototype.PointStyle;

/**
 * @type {_Charts.Position}
 */
_Charts.Charts.prototype.Position;

/**
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.Charts.prototype.newAreaChart = function() {};

/**
 * @return {_Charts.BarChartBuilder}
 */
_Charts.Charts.prototype.newBarChart = function() {};

/**
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.Charts.prototype.newCategoryFilter = function() {};

/**
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.Charts.prototype.newColumnChart = function() {};

/**
 * @return {_Charts.DashboardPanelBuilder}
 */
_Charts.Charts.prototype.newDashboardPanel = function() {};

/**
 * @return {_Charts.DataTableBuilder}
 */
_Charts.Charts.prototype.newDataTable = function() {};

/**
 * @return {_Charts.DataViewDefinitionBuilder}
 */
_Charts.Charts.prototype.newDataViewDefinition = function() {};

/**
 * @return {_Charts.LineChartBuilder}
 */
_Charts.Charts.prototype.newLineChart = function() {};

/**
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.Charts.prototype.newNumberRangeFilter = function() {};

/**
 * @return {_Charts.PieChartBuilder}
 */
_Charts.Charts.prototype.newPieChart = function() {};

/**
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.Charts.prototype.newScatterChart = function() {};

/**
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.Charts.prototype.newStringFilter = function() {};

/**
 * @return {_Charts.TableChartBuilder}
 */
_Charts.Charts.prototype.newTableChart = function() {};

/**
 * @return {_Charts.TextStyleBuilder}
 */
_Charts.Charts.prototype.newTextStyle = function() {};


/**
 * @type {_Charts.Charts}
 */
var Charts = new _Charts.Charts();

/**
 * Class AreaChartBuilder
 * @constructor
 */
_Charts.AreaChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.AreaChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.AreaChartBuilder}
 */
_Charts.AreaChartBuilder.prototype.useLogScale = function() {};

/**
 * Class BarChartBuilder
 * @constructor
 */
_Charts.BarChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.BarChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.reverseDirection = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.BarChartBuilder}
 */
_Charts.BarChartBuilder.prototype.useLogScale = function() {};

/**
 * Class CategoryFilterBuilder
 * @constructor
 */
_Charts.CategoryFilterBuilder = function() {};

/**
 * @return {_Charts.Control}
 */
_Charts.CategoryFilterBuilder.prototype.build = function() {};

/**
 * @param {boolean} allowMultiple
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setAllowMultiple = function(allowMultiple) {};

/**
 * @param {boolean} allowNone
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setAllowNone = function(allowNone) {};

/**
 * @param {boolean} allowTyping
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setAllowTyping = function(allowTyping) {};

/**
 * @param {string} caption
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setCaption = function(caption) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {number} columnIndex
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {_Charts.Orientation} orientation
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {_Charts.PickerValuesLayout} layout
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setSelectedValuesLayout = function(layout) {};

/**
 * @param {boolean} sortValues
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setSortValues = function(sortValues) {};

/**
 * @param {Array.<string>} values
 * @return {_Charts.CategoryFilterBuilder}
 */
_Charts.CategoryFilterBuilder.prototype.setValues = function(values) {};

/**
 * Class Chart
 * @constructor
 */
_Charts.Chart = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_Charts.Chart.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_Charts.Chart.prototype.getBlob = function() {};

/**
 * @return {string}
 */
_Charts.Chart.prototype.getId = function() {};

/**
 * @return {_Charts.ChartOptions}
 */
_Charts.Chart.prototype.getOptions = function() {};

/**
 * @return {string}
 */
_Charts.Chart.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {_Charts.Chart}
 */
_Charts.Chart.prototype.setId = function(id) {};

/**
 * Class ChartOptions
 * @constructor
 */
_Charts.ChartOptions = function() {};

/**
 * @param {string} option
 * @return {Object}
 */
_Charts.ChartOptions.prototype.get = function(option) {};

/**
 * Class ColumnChartBuilder
 * @constructor
 */
_Charts.ColumnChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.ColumnChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setStacked = function() {};

/**
 * @param {string} chartTitle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.ColumnChartBuilder}
 */
_Charts.ColumnChartBuilder.prototype.useLogScale = function() {};

/**
 * Class Control
 * @constructor
 */
_Charts.Control = function() {};

/**
 * @return {string}
 */
_Charts.Control.prototype.getId = function() {};

/**
 * @return {string}
 */
_Charts.Control.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {_Charts.Control}
 */
_Charts.Control.prototype.setId = function(id) {};

/**
 * Class DashboardPanel
 * @constructor
 */
_Charts.DashboardPanel = function() {};

/**
 * @param {_Ui.Widget} widget
 * @return {_Charts.DashboardPanel}
 */
_Charts.DashboardPanel.prototype.add = function(widget) {};

/**
 * @return {string}
 */
_Charts.DashboardPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_Charts.DashboardPanel.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {_Charts.DashboardPanel}
 */
_Charts.DashboardPanel.prototype.setId = function(id) {};

/**
 * Class DashboardPanelBuilder
 * @constructor
 */
_Charts.DashboardPanelBuilder = function() {};

/**
 * @param {(_Charts.Control|Array.<_Charts.Control>)} arg1
 * @param {(_Charts.Chart|Array.<_Charts.Chart>)} arg2
 * @return {_Charts.DashboardPanelBuilder}
 */
_Charts.DashboardPanelBuilder.prototype.bind = function(arg1, arg2) {};

/**
 * @return {_Charts.DashboardPanel}
 */
_Charts.DashboardPanelBuilder.prototype.build = function() {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.DashboardPanelBuilder}
 */
_Charts.DashboardPanelBuilder.prototype.setDataTable = function(arg1) {};

/**
 * Class DataTable
 * @constructor
 */
_Charts.DataTable = function() {};

/**
 * Class DataTableBuilder
 * @constructor
 */
_Charts.DataTableBuilder = function() {};

/**
 * @param {_Charts.ColumnType} type
 * @param {string} label
 * @return {_Charts.DataTableBuilder}
 */
_Charts.DataTableBuilder.prototype.addColumn = function(type, label) {};

/**
 * @param {Array.<Object>} values
 * @return {_Charts.DataTableBuilder}
 */
_Charts.DataTableBuilder.prototype.addRow = function(values) {};

/**
 * @return {_Charts.DataTable}
 */
_Charts.DataTableBuilder.prototype.build = function() {};

/**
 * @param {number} row
 * @param {number} column
 * @param {Object} value
 * @return {_Charts.DataTableBuilder}
 */
_Charts.DataTableBuilder.prototype.setValue = function(row, column, value) {};

/**
 * Class DataViewDefinition
 * @constructor
 */
_Charts.DataViewDefinition = function() {};

/**
 * Class DataViewDefinitionBuilder
 * @constructor
 */
_Charts.DataViewDefinitionBuilder = function() {};

/**
 * @return {_Charts.DataViewDefinition}
 */
_Charts.DataViewDefinitionBuilder.prototype.build = function() {};

/**
 * @param {Array.<number>} columns
 * @return {_Charts.DataViewDefinitionBuilder}
 */
_Charts.DataViewDefinitionBuilder.prototype.setColumns = function(columns) {};

/**
 * Class LineChartBuilder
 * @constructor
 */
_Charts.LineChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.LineChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.reverseCategories = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {_Charts.CurveStyle} style
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setCurveStyle = function(style) {};

/**
 * @param {string} url
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setRange = function(start, end) {};

/**
 * @param {string} chartTitle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.LineChartBuilder}
 */
_Charts.LineChartBuilder.prototype.useLogScale = function() {};

/**
 * Class NumberRangeFilterBuilder
 * @constructor
 */
_Charts.NumberRangeFilterBuilder = function() {};

/**
 * @return {_Charts.Control}
 */
_Charts.NumberRangeFilterBuilder.prototype.build = function() {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {number} columnIndex
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {_Charts.Orientation} orientation
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {number} maxValue
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setMaxValue = function(maxValue) {};

/**
 * @param {number} minValue
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setMinValue = function(minValue) {};

/**
 * @param {_Charts.Orientation} orientation
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setOrientation = function(orientation) {};

/**
 * @param {boolean} showRangeValues
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setShowRangeValues = function(showRangeValues) {};

/**
 * @param {number} ticks
 * @return {_Charts.NumberRangeFilterBuilder}
 */
_Charts.NumberRangeFilterBuilder.prototype.setTicks = function(ticks) {};

/**
 * Class PieChartBuilder
 * @constructor
 */
_Charts.PieChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.PieChartBuilder.prototype.build = function() {};

/**
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.reverseCategories = function() {};

/**
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.set3D = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {string} chartTitle
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.PieChartBuilder}
 */
_Charts.PieChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * Class ScatterChartBuilder
 * @constructor
 */
_Charts.ScatterChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.ScatterChartBuilder.prototype.build = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setBackgroundColor = function(cssValue) {};

/**
 * @param {Array.<string>} cssValues
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setColors = function(cssValues) {};

/**
 * @param {string} url
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {_Charts.Position} position
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setLegendPosition = function(position) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {_Charts.PointStyle} style
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setPointStyle = function(style) {};

/**
 * @param {string} chartTitle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setTitle = function(chartTitle) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setXAxisLogScale = function() {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setXAxisRange = function(start, end) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setXAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle) {};

/**
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setYAxisLogScale = function() {};

/**
 * @param {number} start
 * @param {number} end
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setYAxisRange = function(start, end) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle) {};

/**
 * @param {string} title
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setYAxisTitle = function(title) {};

/**
 * @param {_Charts.TextStyle} textStyle
 * @return {_Charts.ScatterChartBuilder}
 */
_Charts.ScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle) {};

/**
 * Class StringFilterBuilder
 * @constructor
 */
_Charts.StringFilterBuilder = function() {};

/**
 * @return {_Charts.Control}
 */
_Charts.StringFilterBuilder.prototype.build = function() {};

/**
 * @param {boolean} caseSensitive
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setCaseSensitive = function(caseSensitive) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {number} columnIndex
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex) {};

/**
 * @param {string} columnLabel
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel) {};

/**
 * @param {string} label
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setLabel = function(label) {};

/**
 * @param {string} labelSeparator
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setLabelSeparator = function(labelSeparator) {};

/**
 * @param {_Charts.Orientation} orientation
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setLabelStacking = function(orientation) {};

/**
 * @param {_Charts.MatchType} matchType
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setMatchType = function(matchType) {};

/**
 * @param {boolean} realtimeTrigger
 * @return {_Charts.StringFilterBuilder}
 */
_Charts.StringFilterBuilder.prototype.setRealtimeTrigger = function(realtimeTrigger) {};

/**
 * Class TableChartBuilder
 * @constructor
 */
_Charts.TableChartBuilder = function() {};

/**
 * @return {_Charts.Chart}
 */
_Charts.TableChartBuilder.prototype.build = function() {};

/**
 * @param {(boolean|number)} arg1
 * @param {number=} startPage
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.enablePaging = function(arg1, startPage) {};

/**
 * @param {boolean} rtlEnabled
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.enableRtlTable = function(rtlEnabled) {};

/**
 * @param {boolean} enableSorting
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.enableSorting = function(enableSorting) {};

/**
 * @param {string} url
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setDataSourceUrl = function(url) {};

/**
 * @param {(_Charts.DataTableBuilder|_Charts.DataTableSource)} arg1
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setDataTable = function(arg1) {};

/**
 * @param {_Charts.DataViewDefinition} dataViewDefinition
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setDimensions = function(width, height) {};

/**
 * @param {number} number
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setFirstRowNumber = function(number) {};

/**
 * @param {number} column
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setInitialSortingAscending = function(column) {};

/**
 * @param {number} column
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setInitialSortingDescending = function(column) {};

/**
 * @param {string} option
 * @param {Object} value
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.setOption = function(option, value) {};

/**
 * @param {boolean} showRowNumber
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber) {};

/**
 * @param {boolean} alternate
 * @return {_Charts.TableChartBuilder}
 */
_Charts.TableChartBuilder.prototype.useAlternatingRowStyle = function(alternate) {};

/**
 * Class TextStyle
 * @constructor
 */
_Charts.TextStyle = function() {};

/**
 * @return {string}
 */
_Charts.TextStyle.prototype.getColor = function() {};

/**
 * @return {string}
 */
_Charts.TextStyle.prototype.getFontName = function() {};

/**
 * @return {number}
 */
_Charts.TextStyle.prototype.getFontSize = function() {};

/**
 * Class TextStyleBuilder
 * @constructor
 */
_Charts.TextStyleBuilder = function() {};

/**
 * @return {_Charts.TextStyle}
 */
_Charts.TextStyleBuilder.prototype.build = function() {};

/**
 * @param {string} cssValue
 * @return {_Charts.TextStyleBuilder}
 */
_Charts.TextStyleBuilder.prototype.setColor = function(cssValue) {};

/**
 * @param {string} fontName
 * @return {_Charts.TextStyleBuilder}
 */
_Charts.TextStyleBuilder.prototype.setFontName = function(fontName) {};

/**
 * @param {number} fontSize
 * @return {_Charts.TextStyleBuilder}
 */
_Charts.TextStyleBuilder.prototype.setFontSize = function(fontSize) {};

/**
 * Interface DataTableSource
 * @constructor
 */
_Charts.DataTableSource = function() {};

/**
 * @return {_Charts.DataTable}
 */
_Charts.DataTableSource.prototype.getDataTable = function() {};

/**
 * Enum ChartType
 * @constructor
 */
_Charts.ChartType = function() {};

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.AREA;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.BAR;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.COLUMN;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.LINE;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.PIE;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.SCATTER;

/**
 * @type {_Charts.ChartType}
 */
_Charts.ChartType.prototype.TABLE;

/**
 * Enum ColumnType
 * @constructor
 */
_Charts.ColumnType = function() {};

/**
 * @type {_Charts.ColumnType}
 */
_Charts.ColumnType.prototype.DATE;

/**
 * @type {_Charts.ColumnType}
 */
_Charts.ColumnType.prototype.NUMBER;

/**
 * @type {_Charts.ColumnType}
 */
_Charts.ColumnType.prototype.STRING;

/**
 * Enum CurveStyle
 * @constructor
 */
_Charts.CurveStyle = function() {};

/**
 * @type {_Charts.CurveStyle}
 */
_Charts.CurveStyle.prototype.NORMAL;

/**
 * @type {_Charts.CurveStyle}
 */
_Charts.CurveStyle.prototype.SMOOTH;

/**
 * Enum MatchType
 * @constructor
 */
_Charts.MatchType = function() {};

/**
 * @type {_Charts.MatchType}
 */
_Charts.MatchType.prototype.EXACT;

/**
 * @type {_Charts.MatchType}
 */
_Charts.MatchType.prototype.PREFIX;

/**
 * @type {_Charts.MatchType}
 */
_Charts.MatchType.prototype.ANY;

/**
 * @return {string}
 */
_Charts.MatchType.prototype.getName = function() {};

/**
 * Enum Orientation
 * @constructor
 */
_Charts.Orientation = function() {};

/**
 * @type {_Charts.Orientation}
 */
_Charts.Orientation.prototype.HORIZONTAL;

/**
 * @type {_Charts.Orientation}
 */
_Charts.Orientation.prototype.VERTICAL;

/**
 * Enum PickerValuesLayout
 * @constructor
 */
_Charts.PickerValuesLayout = function() {};

/**
 * @type {_Charts.PickerValuesLayout}
 */
_Charts.PickerValuesLayout.prototype.ASIDE;

/**
 * @type {_Charts.PickerValuesLayout}
 */
_Charts.PickerValuesLayout.prototype.BELOW;

/**
 * @type {_Charts.PickerValuesLayout}
 */
_Charts.PickerValuesLayout.prototype.BELOW_WRAPPING;

/**
 * @type {_Charts.PickerValuesLayout}
 */
_Charts.PickerValuesLayout.prototype.BELOW_STACKED;

/**
 * Enum PointStyle
 * @constructor
 */
_Charts.PointStyle = function() {};

/**
 * @type {_Charts.PointStyle}
 */
_Charts.PointStyle.prototype.NONE;

/**
 * @type {_Charts.PointStyle}
 */
_Charts.PointStyle.prototype.TINY;

/**
 * @type {_Charts.PointStyle}
 */
_Charts.PointStyle.prototype.MEDIUM;

/**
 * @type {_Charts.PointStyle}
 */
_Charts.PointStyle.prototype.LARGE;

/**
 * @type {_Charts.PointStyle}
 */
_Charts.PointStyle.prototype.HUGE;

/**
 * Enum Position
 * @constructor
 */
_Charts.Position = function() {};

/**
 * @type {_Charts.Position}
 */
_Charts.Position.prototype.TOP;

/**
 * @type {_Charts.Position}
 */
_Charts.Position.prototype.RIGHT;

/**
 * @type {_Charts.Position}
 */
_Charts.Position.prototype.BOTTOM;

/**
 * @type {_Charts.Position}
 */
_Charts.Position.prototype.NONE;


/**
 * _Content Services
 */
var _Content = {};

/**
 * Class ContentService
 * @constructor
 */
_Content.ContentService = function() {};

/**
 * @type {_Content.MimeType}
 */
_Content.ContentService.prototype.MimeType;

/**
 * @param {string=} content
 * @return {_Content.TextOutput}
 */
_Content.ContentService.prototype.createTextOutput = function(content) {};


/**
 * @type {_Content.ContentService}
 */
var ContentService = new _Content.ContentService();

/**
 * Class TextOutput
 * @constructor
 */
_Content.TextOutput = function() {};

/**
 * @param {string} addedContent
 * @return {_Content.TextOutput}
 */
_Content.TextOutput.prototype.append = function(addedContent) {};

/**
 * @return {_Content.TextOutput}
 */
_Content.TextOutput.prototype.clear = function() {};

/**
 * @param {string} filename
 * @return {_Content.TextOutput}
 */
_Content.TextOutput.prototype.downloadAsFile = function(filename) {};

/**
 * @return {string}
 */
_Content.TextOutput.prototype.getContent = function() {};

/**
 * @return {string}
 */
_Content.TextOutput.prototype.getFileName = function() {};

/**
 * @return {_Content.MimeType}
 */
_Content.TextOutput.prototype.getMimeType = function() {};

/**
 * @param {string} content
 * @return {_Content.TextOutput}
 */
_Content.TextOutput.prototype.setContent = function(content) {};

/**
 * @param {_Content.MimeType} mimeType
 * @return {_Content.TextOutput}
 */
_Content.TextOutput.prototype.setMimeType = function(mimeType) {};

/**
 * Enum MimeType
 * @constructor
 */
_Content.MimeType = function() {};

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.ATOM;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.CSV;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.ICAL;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.JAVASCRIPT;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.JSON;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.RSS;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.TEXT;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.VCARD;

/**
 * @type {_Content.MimeType}
 */
_Content.MimeType.prototype.XML;


/**
 * _HTML Services
 */
var _HTML = {};

/**
 * Class HtmlService
 * @constructor
 */
_HTML.HtmlService = function() {};

/**
 * @type {_HTML.SandboxMode}
 */
_HTML.HtmlService.prototype.SandboxMode;

/**
 * @param {(_Base.BlobSource|string)=} arg1
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlService.prototype.createHtmlOutput = function(arg1) {};

/**
 * @param {string} filename
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlService.prototype.createHtmlOutputFromFile = function(filename) {};

/**
 * @param {(_Base.BlobSource|string)} arg1
 * @return {_HTML.HtmlTemplate}
 */
_HTML.HtmlService.prototype.createTemplate = function(arg1) {};

/**
 * @param {string} filename
 * @return {_HTML.HtmlTemplate}
 */
_HTML.HtmlService.prototype.createTemplateFromFile = function(filename) {};


/**
 * @type {_HTML.HtmlService}
 */
var HtmlService = new _HTML.HtmlService();

/**
 * Class HtmlOutput
 * @constructor
 */
_HTML.HtmlOutput = function() {};

/**
 * @param {string} addedContent
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.append = function(addedContent) {};

/**
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.appendUntrusted = function(addedContent) {};

/**
 * @return {_HTML.HtmlTemplate}
 */
_HTML.HtmlOutput.prototype.asTemplate = function() {};

/**
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.clear = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_HTML.HtmlOutput.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_HTML.HtmlOutput.prototype.getBlob = function() {};

/**
 * @return {string}
 */
_HTML.HtmlOutput.prototype.getContent = function() {};

/**
 * @return {number}
 */
_HTML.HtmlOutput.prototype.getHeight = function() {};

/**
 * @return {string}
 */
_HTML.HtmlOutput.prototype.getTitle = function() {};

/**
 * @return {number}
 */
_HTML.HtmlOutput.prototype.getWidth = function() {};

/**
 * @param {string} content
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.setContent = function(content) {};

/**
 * @param {number} height
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.setHeight = function(height) {};

/**
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.setSandboxMode = function(mode) {};

/**
 * @param {string} title
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlOutput.prototype.setWidth = function(width) {};

/**
 * Class HtmlTemplate
 * @constructor
 */
_HTML.HtmlTemplate = function() {};

/**
 * @return {_HTML.HtmlOutput}
 */
_HTML.HtmlTemplate.prototype.evaluate = function() {};

/**
 * @return {string}
 */
_HTML.HtmlTemplate.prototype.getCode = function() {};

/**
 * @return {string}
 */
_HTML.HtmlTemplate.prototype.getCodeWithComments = function() {};

/**
 * @return {string}
 */
_HTML.HtmlTemplate.prototype.getRawContent = function() {};

/**
 * Enum SandboxMode
 * @constructor
 */
_HTML.SandboxMode = function() {};

/**
 * @type {_HTML.SandboxMode}
 */
_HTML.SandboxMode.prototype.EMULATED;

/**
 * @type {_HTML.SandboxMode}
 */
_HTML.SandboxMode.prototype.NATIVE;


/**
 * _Lock Services
 */
var _Lock = {};

/**
 * Class LockService
 * @constructor
 */
_Lock.LockService = function() {};

/**
 * @return {_Lock.Lock}
 */
_Lock.LockService.prototype.getPrivateLock = function() {};

/**
 * @return {_Lock.Lock}
 */
_Lock.LockService.prototype.getPublicLock = function() {};


/**
 * @type {_Lock.LockService}
 */
var LockService = new _Lock.LockService();

/**
 * Class Lock
 * @constructor
 */
_Lock.Lock = function() {};

/**
 * @return {boolean}
 */
_Lock.Lock.prototype.hasLock = function() {};

/**
 */
_Lock.Lock.prototype.releaseLock = function() {};

/**
 * @param {number} timeoutInMillis
 * @return {boolean}
 */
_Lock.Lock.prototype.tryLock = function(timeoutInMillis) {};

/**
 * @param {number} timeoutInMillis
 */
_Lock.Lock.prototype.waitLock = function(timeoutInMillis) {};


/**
 * _Mail Services
 */
var _Mail = {};

/**
 * Class MailApp
 * @constructor
 */
_Mail.MailApp = function() {};

/**
 * @return {number}
 */
_Mail.MailApp.prototype.getRemainingDailyQuota = function() {};

/**
 * @param {(Object|string)} arg1
 * @param {string=} arg2
 * @param {string=} arg3
 * @param {(Object|string)=} arg4
 */
_Mail.MailApp.prototype.sendEmail = function(arg1, arg2, arg3, arg4) {};


/**
 * @type {_Mail.MailApp}
 */
var MailApp = new _Mail.MailApp();


/**
 * _Properties Services
 */
var _Properties = {};

/**
 * Class ScriptProperties
 * @constructor
 */
_Properties.ScriptProperties = function() {};

/**
 * @return {_Properties.ScriptProperties}
 */
_Properties.ScriptProperties.prototype.deleteAllProperties = function() {};

/**
 * @param {string} key
 * @return {_Properties.ScriptProperties}
 */
_Properties.ScriptProperties.prototype.deleteProperty = function(key) {};

/**
 * @return {Array.<string>}
 */
_Properties.ScriptProperties.prototype.getKeys = function() {};

/**
 * @return {Object}
 */
_Properties.ScriptProperties.prototype.getProperties = function() {};

/**
 * @param {string} key
 * @return {string}
 */
_Properties.ScriptProperties.prototype.getProperty = function(key) {};

/**
 * @param {Object} properties
 * @param {boolean=} deleteAllOthers
 * @return {_Properties.ScriptProperties}
 */
_Properties.ScriptProperties.prototype.setProperties = function(properties, deleteAllOthers) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {_Properties.ScriptProperties}
 */
_Properties.ScriptProperties.prototype.setProperty = function(key, value) {};


/**
 * @type {_Properties.ScriptProperties}
 */
var ScriptProperties = new _Properties.ScriptProperties();

/**
 * Class UserProperties
 * @constructor
 */
_Properties.UserProperties = function() {};

/**
 * @return {_Properties.UserProperties}
 */
_Properties.UserProperties.prototype.deleteAllProperties = function() {};

/**
 * @param {string} key
 * @return {_Properties.UserProperties}
 */
_Properties.UserProperties.prototype.deleteProperty = function(key) {};

/**
 * @return {Array.<string>}
 */
_Properties.UserProperties.prototype.getKeys = function() {};

/**
 * @return {Object}
 */
_Properties.UserProperties.prototype.getProperties = function() {};

/**
 * @param {string} key
 * @return {string}
 */
_Properties.UserProperties.prototype.getProperty = function(key) {};

/**
 * @param {Object} properties
 * @param {boolean=} deleteAllOthers
 * @return {_Properties.UserProperties}
 */
_Properties.UserProperties.prototype.setProperties = function(properties, deleteAllOthers) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {_Properties.UserProperties}
 */
_Properties.UserProperties.prototype.setProperty = function(key, value) {};


/**
 * @type {_Properties.UserProperties}
 */
var UserProperties = new _Properties.UserProperties();


/**
 * _Script Services
 */
var _Script = {};

/**
 * Class ScriptApp
 * @constructor
 */
_Script.ScriptApp = function() {};

/**
 * @type {_Script.EventType}
 */
_Script.ScriptApp.prototype.EventType;

/**
 * @type {_Script.TriggerSource}
 */
_Script.ScriptApp.prototype.TriggerSource;

/**
 * @type {_Base.Weekday}
 */
_Script.ScriptApp.prototype.WeekDay;

/**
 * @param {_Script.Trigger} trigger
 */
_Script.ScriptApp.prototype.deleteTrigger = function(trigger) {};

/**
 * @return {Array.<_Script.Trigger>}
 */
_Script.ScriptApp.prototype.getProjectTriggers = function() {};

/**
 * @return {_Script.Service}
 */
_Script.ScriptApp.prototype.getService = function() {};

/**
 */
_Script.ScriptApp.prototype.invalidateAuth = function() {};

/**
 * @param {string} functionName
 * @return {_Script.TriggerBuilder}
 */
_Script.ScriptApp.prototype.newTrigger = function(functionName) {};


/**
 * @type {_Script.ScriptApp}
 */
var ScriptApp = new _Script.ScriptApp();

/**
 * Class ClockTriggerBuilder
 * @constructor
 */
_Script.ClockTriggerBuilder = function() {};

/**
 * @param {number} durationMilliseconds
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.after = function(durationMilliseconds) {};

/**
 * @param {Date} date
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.at = function(date) {};

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.atDate = function(year, month, day) {};

/**
 * @param {number} hour
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.atHour = function(hour) {};

/**
 * @return {_Script.Trigger}
 */
_Script.ClockTriggerBuilder.prototype.create = function() {};

/**
 * @param {number} n
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.everyDays = function(n) {};

/**
 * @param {number} n
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.everyHours = function(n) {};

/**
 * @param {number} n
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.everyMinutes = function(n) {};

/**
 * @param {number} n
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.everyWeeks = function(n) {};

/**
 * @param {string} timezone
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.inTimezone = function(timezone) {};

/**
 * @param {number} minute
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.nearMinute = function(minute) {};

/**
 * @param {number} day
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.onMonthDay = function(day) {};

/**
 * @param {_Base.Weekday} day
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.ClockTriggerBuilder.prototype.onWeekDay = function(day) {};

/**
 * Class FormTriggerBuilder
 * @constructor
 */
_Script.FormTriggerBuilder = function() {};

/**
 * @return {_Script.Trigger}
 */
_Script.FormTriggerBuilder.prototype.create = function() {};

/**
 * @return {_Script.FormTriggerBuilder}
 */
_Script.FormTriggerBuilder.prototype.onFormSubmit = function() {};

/**
 * @return {_Script.FormTriggerBuilder}
 */
_Script.FormTriggerBuilder.prototype.onOpen = function() {};

/**
 * Class Service
 * @constructor
 */
_Script.Service = function() {};

/**
 * @type {_Script.Service.Restriction}
 */
_Script.Service.prototype.Restriction;

/**
 */
_Script.Service.prototype.disable = function() {};

/**
 * @param {_Script.Service.Restriction} restriction
 */
_Script.Service.prototype.enable = function(restriction) {};

/**
 * @return {string}
 */
_Script.Service.prototype.getUrl = function() {};

/**
 * @return {boolean}
 */
_Script.Service.prototype.isEnabled = function() {};

/**
 * Class SpreadsheetTriggerBuilder
 * @constructor
 */
_Script.SpreadsheetTriggerBuilder = function() {};

/**
 * @return {_Script.Trigger}
 */
_Script.SpreadsheetTriggerBuilder.prototype.create = function() {};

/**
 * @return {_Script.SpreadsheetTriggerBuilder}
 */
_Script.SpreadsheetTriggerBuilder.prototype.onChange = function() {};

/**
 * @return {_Script.SpreadsheetTriggerBuilder}
 */
_Script.SpreadsheetTriggerBuilder.prototype.onEdit = function() {};

/**
 * @return {_Script.SpreadsheetTriggerBuilder}
 */
_Script.SpreadsheetTriggerBuilder.prototype.onFormSubmit = function() {};

/**
 * @return {_Script.SpreadsheetTriggerBuilder}
 */
_Script.SpreadsheetTriggerBuilder.prototype.onOpen = function() {};

/**
 * Class Trigger
 * @constructor
 */
_Script.Trigger = function() {};

/**
 * @return {_Script.EventType}
 */
_Script.Trigger.prototype.getEventType = function() {};

/**
 * @return {string}
 */
_Script.Trigger.prototype.getHandlerFunction = function() {};

/**
 * @return {_Script.TriggerSource}
 */
_Script.Trigger.prototype.getTriggerSource = function() {};

/**
 * @return {string}
 */
_Script.Trigger.prototype.getTriggerSourceId = function() {};

/**
 * @return {string}
 */
_Script.Trigger.prototype.getUniqueId = function() {};

/**
 * Class TriggerBuilder
 * @constructor
 */
_Script.TriggerBuilder = function() {};

/**
 * @param {(_Forms.Form|string)} arg1
 * @return {_Script.FormTriggerBuilder}
 */
_Script.TriggerBuilder.prototype.forForm = function(arg1) {};

/**
 * @param {(_Spreadsheet.Spreadsheet|string)} arg1
 * @return {_Script.SpreadsheetTriggerBuilder}
 */
_Script.TriggerBuilder.prototype.forSpreadsheet = function(arg1) {};

/**
 * @return {_Script.ClockTriggerBuilder}
 */
_Script.TriggerBuilder.prototype.timeBased = function() {};

/**
 * Enum EventType
 * @constructor
 */
_Script.EventType = function() {};

/**
 * @type {_Script.EventType}
 */
_Script.EventType.prototype.CLOCK;

/**
 * @type {_Script.EventType}
 */
_Script.EventType.prototype.ON_OPEN;

/**
 * @type {_Script.EventType}
 */
_Script.EventType.prototype.ON_EDIT;

/**
 * @type {_Script.EventType}
 */
_Script.EventType.prototype.ON_FORM_SUBMIT;

/**
 * Enum Service.Restriction
 * @constructor
 */
_Script.Service.Restriction = function() {};

/**
 * @type {_Script.Service.Restriction}
 */
_Script.Service.Restriction.prototype.MYSELF;

/**
 * @type {_Script.Service.Restriction}
 */
_Script.Service.Restriction.prototype.DOMAIN;

/**
 * @type {_Script.Service.Restriction}
 */
_Script.Service.Restriction.prototype.ALL;

/**
 * Enum TriggerSource
 * @constructor
 */
_Script.TriggerSource = function() {};

/**
 * @type {_Script.TriggerSource}
 */
_Script.TriggerSource.prototype.SPREADSHEETS;

/**
 * @type {_Script.TriggerSource}
 */
_Script.TriggerSource.prototype.CLOCK;

/**
 * @type {_Script.TriggerSource}
 */
_Script.TriggerSource.prototype.FORMS;


/**
 * _ScriptDB Services
 */
var _ScriptDB = {};

/**
 * Class ScriptDb
 * @constructor
 */
_ScriptDB.ScriptDb = function() {};

/**
 * @return {_ScriptDB.ScriptDbInstance}
 */
_ScriptDB.ScriptDb.prototype.getMyDb = function() {};


/**
 * @type {_ScriptDB.ScriptDb}
 */
var ScriptDb = new _ScriptDB.ScriptDb();

/**
 * Class MutationResult
 * @constructor
 */
_ScriptDB.MutationResult = function() {};

/**
 * @return {boolean}
 */
_ScriptDB.MutationResult.prototype.successful = function() {};

/**
 * Class QueryOperator
 * @constructor
 */
_ScriptDB.QueryOperator = function() {};

/**
 * Class ScriptDbInstance
 * @constructor
 */
_ScriptDB.ScriptDbInstance = function() {};

/**
 * @type {_ScriptDB.SortDirection}
 */
_ScriptDB.ScriptDbInstance.prototype.ASCENDING;

/**
 * @type {_ScriptDB.SortDirection}
 */
_ScriptDB.ScriptDbInstance.prototype.DESCENDING;

/**
 * @type {_ScriptDB.SortStrategy}
 */
_ScriptDB.ScriptDbInstance.prototype.LEXICAL;

/**
 * @type {_ScriptDB.SortStrategy}
 */
_ScriptDB.ScriptDbInstance.prototype.NUMERIC;

/**
 * @param {Array.<Object>} mutateResults
 * @return {boolean}
 */
_ScriptDB.ScriptDbInstance.prototype.allOk = function(mutateResults) {};

/**
 * @param {Array.<Object>} values
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.anyOf = function(values) {};

/**
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.anyValue = function() {};

/**
 * @param {Object} value1
 * @param {Object} value2
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.between = function(value1, value2) {};

/**
 * @param {Object} query
 * @return {number}
 */
_ScriptDB.ScriptDbInstance.prototype.count = function(query) {};

/**
 * @param {Object} value
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.greaterThan = function(value) {};

/**
 * @param {Object} value
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.greaterThanOrEqualTo = function(value) {};

/**
 * @param {Object} value
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.lessThan = function(value) {};

/**
 * @param {Object} value
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.lessThanOrEqualTo = function(value) {};

/**
 * @param {(string|Array.<string>)} arg1
 * @return {(_ScriptDB.ScriptDbMap|Array.<_ScriptDB.ScriptDbMap>)}
 */
_ScriptDB.ScriptDbInstance.prototype.load = function(arg1) {};

/**
 * @param {Object} value
 * @return {_ScriptDB.QueryOperator}
 */
_ScriptDB.ScriptDbInstance.prototype.not = function(value) {};

/**
 * @param {Object} query
 * @return {_ScriptDB.ScriptDbResult}
 */
_ScriptDB.ScriptDbInstance.prototype.query = function(query) {};

/**
 * @param {_ScriptDB.ScriptDbMap} item
 */
_ScriptDB.ScriptDbInstance.prototype.remove = function(item) {};

/**
 * @param {Array.<_ScriptDB.ScriptDbMap>} items
 * @param {boolean} atomic
 * @return {Array.<_ScriptDB.MutationResult>}
 */
_ScriptDB.ScriptDbInstance.prototype.removeBatch = function(items, atomic) {};

/**
 * @param {string} id
 */
_ScriptDB.ScriptDbInstance.prototype.removeById = function(id) {};

/**
 * @param {Array.<string>} ids
 * @param {boolean} atomic
 * @return {Array.<_ScriptDB.MutationResult>}
 */
_ScriptDB.ScriptDbInstance.prototype.removeByIdBatch = function(ids, atomic) {};

/**
 * @param {(Object|_ScriptDB.ScriptDbMap)} item
 * @return {_ScriptDB.ScriptDbMap}
 */
_ScriptDB.ScriptDbInstance.prototype.save = function(item) {};

/**
 * @param {Array.<Object>} items
 * @param {boolean} atomic
 * @return {Array.<Object>}
 */
_ScriptDB.ScriptDbInstance.prototype.saveBatch = function(items, atomic) {};

/**
 * Class ScriptDbMap
 * @constructor
 */
_ScriptDB.ScriptDbMap = function() {};

/**
 * @return {string}
 */
_ScriptDB.ScriptDbMap.prototype.getId = function() {};

/**
 * @return {string}
 */
_ScriptDB.ScriptDbMap.prototype.toJson = function() {};

/**
 * Class ScriptDbResult
 * @constructor
 */
_ScriptDB.ScriptDbResult = function() {};

/**
 * @return {number}
 */
_ScriptDB.ScriptDbResult.prototype.getSize = function() {};

/**
 * @return {boolean}
 */
_ScriptDB.ScriptDbResult.prototype.hasNext = function() {};

/**
 * @return {_ScriptDB.ScriptDbResult}
 */
_ScriptDB.ScriptDbResult.prototype.limit = function(number) {};

/**
 * @return {_ScriptDB.ScriptDbMap}
 */
_ScriptDB.ScriptDbResult.prototype.next = function() {};

/**
 * @param {number} pageNumber
 * @param {number} pageSize
 * @return {_ScriptDB.ScriptDbResult}
 */
_ScriptDB.ScriptDbResult.prototype.paginate = function(pageNumber, pageSize) {};

/**
 * @param {string=} fieldPath
 * @param {(_ScriptDB.SortDirection|_ScriptDB.SortStrategy)=} arg2
 * @param {_ScriptDB.SortStrategy=} strategy
 * @return {_ScriptDB.ScriptDbResult}
 */
_ScriptDB.ScriptDbResult.prototype.sortBy = function(fieldPath, arg2, strategy) {};

/**
 * @param {number} number
 * @return {_ScriptDB.ScriptDbResult}
 */
_ScriptDB.ScriptDbResult.prototype.startAt = function(number) {};

/**
 * Enum SortDirection
 * @constructor
 */
_ScriptDB.SortDirection = function() {};

/**
 * @type {_ScriptDB.SortDirection}
 */
_ScriptDB.SortDirection.prototype.DESCENDING;

/**
 * @type {_ScriptDB.SortDirection}
 */
_ScriptDB.SortDirection.prototype.ASCENDING;

/**
 * Enum SortStrategy
 * @constructor
 */
_ScriptDB.SortStrategy = function() {};

/**
 * @type {_ScriptDB.SortStrategy}
 */
_ScriptDB.SortStrategy.prototype.LEXICAL;

/**
 * @type {_ScriptDB.SortStrategy}
 */
_ScriptDB.SortStrategy.prototype.NUMERIC;


/**
 * _UI Services
 */
var _UI = {};

/**
 * Class UiApp
 * @constructor
 */
_UI.UiApp = function() {};

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.UiApp.prototype.DateTimeFormat;

/**
 * @type {_UI.FileType}
 */
_UI.UiApp.prototype.FileType;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.UiApp.prototype.HorizontalAlignment;

/**
 * @type {_UI.VerticalAlignment}
 */
_UI.UiApp.prototype.VerticalAlignment;

/**
 * @return {_UI.UiInstance}
 */
_UI.UiApp.prototype.createApplication = function() {};

/**
 * @return {_UI.UiInstance}
 */
_UI.UiApp.prototype.getActiveApplication = function() {};

/**
 * @return {string}
 */
_UI.UiApp.prototype.getUserAgent = function() {};


/**
 * @type {_UI.UiApp}
 */
var UiApp = new _UI.UiApp();

/**
 * Class AbsolutePanel
 * @constructor
 */
_UI.AbsolutePanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {number=} left
 * @param {number=} top
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.add = function(widget, left, top) {};

/**
 * @param {string} styleName
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.AbsolutePanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.AbsolutePanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.AbsolutePanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.remove = function(arg1) {};

/**
 * @param {string} height
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} left
 * @param {number} top
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setWidgetPosition = function(widget, left, top) {};

/**
 * @param {string} width
 * @return {_UI.AbsolutePanel}
 */
_UI.AbsolutePanel.prototype.setWidth = function(width) {};

/**
 * Class Anchor
 * @constructor
 */
_UI.Anchor = function() {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.Anchor.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Anchor.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Anchor.prototype.getType = function() {};

/**
 * @param {boolean} focus
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} href
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setHref = function(href) {};

/**
 * @param {string} id
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setTag = function(tag) {};

/**
 * @param {string} target
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setTarget = function(target) {};

/**
 * @param {string} text
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {_UI.Anchor}
 */
_UI.Anchor.prototype.setWordWrap = function(wordWrap) {};

/**
 * Class Button
 * @constructor
 */
_UI.Button = function() {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.Button}
 */
_UI.Button.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Button}
 */
_UI.Button.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Button}
 */
_UI.Button.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.Button.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Button.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Button.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.Button}
 */
_UI.Button.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.Button}
 */
_UI.Button.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.Button}
 */
_UI.Button.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.Button}
 */
_UI.Button.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.Button}
 */
_UI.Button.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Button}
 */
_UI.Button.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Button}
 */
_UI.Button.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Button}
 */
_UI.Button.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.Button}
 */
_UI.Button.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Button}
 */
_UI.Button.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Button}
 */
_UI.Button.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.Button}
 */
_UI.Button.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.Button}
 */
_UI.Button.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.Button}
 */
_UI.Button.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.Button}
 */
_UI.Button.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.Button}
 */
_UI.Button.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.Button}
 */
_UI.Button.prototype.setWidth = function(width) {};

/**
 * Class CaptionPanel
 * @constructor
 */
_UI.CaptionPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.CaptionPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.CaptionPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.CaptionPanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.CaptionPanel}
 */
_UI.CaptionPanel.prototype.setWidth = function(width) {};

/**
 * Class CheckBox
 * @constructor
 */
_UI.CheckBox = function() {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.CheckBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.CheckBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.CheckBox.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} formValue
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setFormValue = function(formValue) {};

/**
 * @param {string} html
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} value
 * @param {boolean=} fireEvents
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.CheckBox}
 */
_UI.CheckBox.prototype.setWidth = function(width) {};

/**
 * Class ClientHandler
 * @constructor
 */
_UI.ClientHandler = function() {};

/**
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.forEventSource = function() {};

/**
 * @param {...Object} widgets
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.forTargets = function(widgets) {};

/**
 * @return {string}
 */
_UI.ClientHandler.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ClientHandler.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ClientHandler.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setEnabled = function(enabled) {};

/**
 * @param {string} html
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setHTML = function(html) {};

/**
 * @param {string} id
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setId = function(id) {};

/**
 * @param {(number|string)} arg1
 * @param {(number|string)} arg2
 * @param {string=} attribute
 * @param {string=} value
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setStyleAttribute = function(arg1, arg2, attribute, value) {};

/**
 * @param {(number|Object)} arg1
 * @param {number=} column
 * @param {Object=} attributes
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setStyleAttributes = function(arg1, column, attributes) {};

/**
 * @param {string} tag
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setText = function(text) {};

/**
 * @param {boolean} value
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setValue = function(value) {};

/**
 * @param {boolean} visible
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.ClientHandler}
 */
_UI.ClientHandler.prototype.validateSum = function(widgets, sum) {};

/**
 * Class DateBox
 * @constructor
 */
_UI.DateBox = function() {};

/**
 * @param {string} styleName
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.DateBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DateBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DateBox.prototype.getType = function() {};

/**
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.hideDatePicker = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} fireEvents
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setFireEventsForInvalid = function(fireEvents) {};

/**
 * @param {boolean} focus
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setFocus = function(focus) {};

/**
 * @param {_UI.DateTimeFormat} dateTimeFormat
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setFormat = function(dateTimeFormat) {};

/**
 * @param {string} height
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setTitle = function(title) {};

/**
 * @param {Date} date
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setValue = function(date) {};

/**
 * @param {boolean} visible
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.setWidth = function(width) {};

/**
 * @return {_UI.DateBox}
 */
_UI.DateBox.prototype.showDatePicker = function() {};

/**
 * Class DatePicker
 * @constructor
 */
_UI.DatePicker = function() {};

/**
 * @param {string} styleName
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.DatePicker.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DatePicker.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DatePicker.prototype.getType = function() {};

/**
 * @param {Date} date
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setCurrentMonth = function(date) {};

/**
 * @param {string} height
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setTitle = function(title) {};

/**
 * @param {Date} date
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setValue = function(date) {};

/**
 * @param {boolean} visible
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.DatePicker}
 */
_UI.DatePicker.prototype.setWidth = function(width) {};

/**
 * Class DecoratedStackPanel
 * @constructor
 */
_UI.DecoratedStackPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {string=} text
 * @param {boolean=} asHtml
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.DecoratedStackPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DecoratedStackPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DecoratedStackPanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.remove = function(arg1) {};

/**
 * @param {string} height
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} index
 * @param {string} text
 * @param {boolean=} asHtml
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setStackText = function(index, text, asHtml) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.DecoratedStackPanel}
 */
_UI.DecoratedStackPanel.prototype.setWidth = function(width) {};

/**
 * Class DecoratedTabBar
 * @constructor
 */
_UI.DecoratedTabBar = function() {};

/**
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.addStyleName = function(styleName) {};

/**
 * @param {(string|_UI.Widget)} arg1
 * @param {boolean=} asHtml
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.addTab = function(arg1, asHtml) {};

/**
 * @return {string}
 */
_UI.DecoratedTabBar.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DecoratedTabBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DecoratedTabBar.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.selectTab = function(index) {};

/**
 * @param {string} height
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @param {boolean} enabled
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setTabEnabled = function(index, enabled) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setTabText = function(index, text) {};

/**
 * @param {string} tag
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.DecoratedTabBar}
 */
_UI.DecoratedTabBar.prototype.setWidth = function(width) {};

/**
 * Class DecoratedTabPanel
 * @constructor
 */
_UI.DecoratedTabPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {(string|_UI.Widget)=} arg2
 * @param {boolean=} asHtml
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.add = function(widget, arg2, asHtml) {};

/**
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.DecoratedTabPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DecoratedTabPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DecoratedTabPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.selectTab = function(index) {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {string} height
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.DecoratedTabPanel}
 */
_UI.DecoratedTabPanel.prototype.setWidth = function(width) {};

/**
 * Class DecoratorPanel
 * @constructor
 */
_UI.DecoratorPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.DecoratorPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DecoratorPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DecoratorPanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.DecoratorPanel}
 */
_UI.DecoratorPanel.prototype.setWidth = function(width) {};

/**
 * Class DialogBox
 * @constructor
 */
_UI.DialogBox = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.add = function(widget) {};

/**
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.addCloseHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.DialogBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DialogBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.DialogBox.prototype.getType = function() {};

/**
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.hide = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} enabled
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setAutoHideEnabled = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setGlassEnabled = function(enabled) {};

/**
 * @param {string} html
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setId = function(id) {};

/**
 * @param {boolean} modal
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setModal = function(modal) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} left
 * @param {number} top
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setPopupPosition = function(left, top) {};

/**
 * @param {boolean} previewing
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setPreviewingAllNativeEvents = function(previewing) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.setWidth = function(width) {};

/**
 * @return {_UI.DialogBox}
 */
_UI.DialogBox.prototype.show = function() {};

/**
 * Class DocsListDialog
 * @constructor
 */
_UI.DocsListDialog = function() {};

/**
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.addCloseHandler = function(handler) {};

/**
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {_UI.FileType} fileType
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.addView = function(fileType) {};

/**
 * @return {string}
 */
_UI.DocsListDialog.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.DocsListDialog.prototype.getType = function() {};

/**
 * @param {string} title
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.setDialogTitle = function(title) {};

/**
 * @param {number} height
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.setHeight = function(height) {};

/**
 * @param {_UI.FileType} fileType
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.setInitialView = function(fileType) {};

/**
 * @param {boolean} multiSelectEnabled
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.setMultiSelectEnabled = function(multiSelectEnabled) {};

/**
 * @param {number} width
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.setWidth = function(width) {};

/**
 * @return {_UI.DocsListDialog}
 */
_UI.DocsListDialog.prototype.showDocsPicker = function() {};

/**
 * Class FileUpload
 * @constructor
 */
_UI.FileUpload = function() {};

/**
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.addChangeHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.FileUpload.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.FileUpload.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.FileUpload.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setEnabled = function(enabled) {};

/**
 * @param {string} height
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.FileUpload}
 */
_UI.FileUpload.prototype.setWidth = function(width) {};

/**
 * Class FlexTable
 * @constructor
 */
_UI.FlexTable = function() {};

/**
 * @param {number} row
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.addCell = function(row) {};

/**
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.addClickHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.FlexTable.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.FlexTable.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.FlexTable.prototype.getType = function() {};

/**
 * @param {number} beforeRow
 * @param {number} beforeColumn
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.insertCell = function(beforeRow, beforeColumn) {};

/**
 * @param {number} beforeRow
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.insertRow = function(beforeRow) {};

/**
 * @param {number} row
 * @param {number} column
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.removeCell = function(row, column) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} num
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.removeCells = function(row, column, num) {};

/**
 * @param {number} row
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.removeRow = function(row) {};

/**
 * @param {number} width
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} padding
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setCellPadding = function(padding) {};

/**
 * @param {number} spacing
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setCellSpacing = function(spacing) {};

/**
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setColumnStyleAttribute = function(column, attribute, value) {};

/**
 * @param {number} column
 * @param {Object} attributes
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setColumnStyleAttributes = function(column, attributes) {};

/**
 * @param {string} height
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} row
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setRowStyleAttribute = function(row, attribute, value) {};

/**
 * @param {number} row
 * @param {Object} attributes
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setRowStyleAttributes = function(row, attributes) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setSize = function(width, height) {};

/**
 * @param {(number|string)} arg1
 * @param {(number|string)} arg2
 * @param {string=} attribute
 * @param {string=} value
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setStyleAttribute = function(arg1, arg2, attribute, value) {};

/**
 * @param {(number|Object)} arg1
 * @param {number=} column
 * @param {Object=} attributes
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setStyleAttributes = function(arg1, column, attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setTag = function(tag) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} text
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setText = function(row, column, text) {};

/**
 * @param {string} title
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setVisible = function(visible) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {_UI.Widget} widget
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setWidget = function(row, column, widget) {};

/**
 * @param {string} width
 * @return {_UI.FlexTable}
 */
_UI.FlexTable.prototype.setWidth = function(width) {};

/**
 * Class FlowPanel
 * @constructor
 */
_UI.FlowPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.FlowPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.FlowPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.FlowPanel.prototype.getType = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {number} beforeIndex
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.insert = function(widget, beforeIndex) {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.remove = function(arg1) {};

/**
 * @param {string} height
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.FlowPanel}
 */
_UI.FlowPanel.prototype.setWidth = function(width) {};

/**
 * Class FocusPanel
 * @constructor
 */
_UI.FocusPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.add = function(widget) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.FocusPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.FocusPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.FocusPanel.prototype.getType = function() {};

/**
 * @param {boolean} focus
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.FocusPanel}
 */
_UI.FocusPanel.prototype.setWidth = function(width) {};

/**
 * Class FormPanel
 * @constructor
 */
_UI.FormPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.addSubmitCompleteHandler = function(handler) {};

/**
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.addSubmitHandler = function(handler) {};

/**
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.FormPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.FormPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.FormPanel.prototype.getType = function() {};

/**
 * @param {string} action
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setAction = function(action) {};

/**
 * @param {string} encoding
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setEncoding = function(encoding) {};

/**
 * @param {string} height
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setId = function(id) {};

/**
 * @param {string} method
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setMethod = function(method) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.FormPanel}
 */
_UI.FormPanel.prototype.setWidth = function(width) {};

/**
 * Class Grid
 * @constructor
 */
_UI.Grid = function() {};

/**
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.addClickHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.Grid.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Grid.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Grid.prototype.getType = function() {};

/**
 * @param {number} rows
 * @param {number} columns
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.resize = function(rows, columns) {};

/**
 * @param {number} width
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setBorderWidth = function(width) {};

/**
 * @param {number} padding
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setCellPadding = function(padding) {};

/**
 * @param {number} spacing
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setCellSpacing = function(spacing) {};

/**
 * @param {number} column
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setColumnStyleAttribute = function(column, attribute, value) {};

/**
 * @param {number} column
 * @param {Object} attributes
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setColumnStyleAttributes = function(column, attributes) {};

/**
 * @param {string} height
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} row
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setRowStyleAttribute = function(row, attribute, value) {};

/**
 * @param {number} row
 * @param {Object} attributes
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setRowStyleAttributes = function(row, attributes) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setSize = function(width, height) {};

/**
 * @param {(number|string)} arg1
 * @param {(number|string)} arg2
 * @param {string=} attribute
 * @param {string=} value
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setStyleAttribute = function(arg1, arg2, attribute, value) {};

/**
 * @param {(number|Object)} arg1
 * @param {number=} column
 * @param {Object=} attributes
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setStyleAttributes = function(arg1, column, attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setTag = function(tag) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {string} text
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setText = function(row, column, text) {};

/**
 * @param {string} title
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setVisible = function(visible) {};

/**
 * @param {number} row
 * @param {number} column
 * @param {_UI.Widget} widget
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setWidget = function(row, column, widget) {};

/**
 * @param {string} width
 * @return {_UI.Grid}
 */
_UI.Grid.prototype.setWidth = function(width) {};

/**
 * Class HTML
 * @constructor
 */
_UI.HTML = function() {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.HTML.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.HTML.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.HTML.prototype.getType = function() {};

/**
 * @param {string} html
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {_UI.HTML}
 */
_UI.HTML.prototype.setWordWrap = function(wordWrap) {};

/**
 * Class Hidden
 * @constructor
 */
_UI.Hidden = function() {};

/**
 * @return {string}
 */
_UI.Hidden.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Hidden.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Hidden.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {_UI.Hidden}
 */
_UI.Hidden.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.Hidden}
 */
_UI.Hidden.prototype.setName = function(name) {};

/**
 * @param {Object} attributes
 * @return {_UI.Hidden}
 */
_UI.Hidden.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} tag
 * @return {_UI.Hidden}
 */
_UI.Hidden.prototype.setTag = function(tag) {};

/**
 * @param {string} value
 * @return {_UI.Hidden}
 */
_UI.Hidden.prototype.setValue = function(value) {};

/**
 * Class HorizontalPanel
 * @constructor
 */
_UI.HorizontalPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.HorizontalPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.HorizontalPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.HorizontalPanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.remove = function(arg1) {};

/**
 * @param {number} width
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setBorderWidth = function(width) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} height
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setCellHeight = function(widget, height) {};

/**
 * @param {_UI.Widget} widget
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setCellHorizontalAlignment = function(widget, horizontalAlignment) {};

/**
 * @param {_UI.Widget} widget
 * @param {_UI.VerticalAlignment} verticalAlignment
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setCellVerticalAlignment = function(widget, verticalAlignment) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} width
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setCellWidth = function(widget, width) {};

/**
 * @param {string} height
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} spacing
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setSpacing = function(spacing) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setTitle = function(title) {};

/**
 * @param {_UI.VerticalAlignment} verticalAlignment
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setVerticalAlignment = function(verticalAlignment) {};

/**
 * @param {boolean} visible
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.HorizontalPanel}
 */
_UI.HorizontalPanel.prototype.setWidth = function(width) {};

/**
 * Class Image
 * @constructor
 */
_UI.Image = function() {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addErrorHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addLoadHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.Image}
 */
_UI.Image.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Image}
 */
_UI.Image.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Image}
 */
_UI.Image.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.Image.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Image.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Image.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.Image}
 */
_UI.Image.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.Image}
 */
_UI.Image.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Image}
 */
_UI.Image.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Image}
 */
_UI.Image.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Image}
 */
_UI.Image.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.Image}
 */
_UI.Image.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Image}
 */
_UI.Image.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Image}
 */
_UI.Image.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.Image}
 */
_UI.Image.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.Image}
 */
_UI.Image.prototype.setTitle = function(title) {};

/**
 * @param {string} url
 * @return {_UI.Image}
 */
_UI.Image.prototype.setUrl = function(url) {};

/**
 * @param {string} url
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {_UI.Image}
 */
_UI.Image.prototype.setUrlAndVisibleRect = function(url, left, top, width, height) {};

/**
 * @param {boolean} visible
 * @return {_UI.Image}
 */
_UI.Image.prototype.setVisible = function(visible) {};

/**
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {_UI.Image}
 */
_UI.Image.prototype.setVisibleRect = function(left, top, width, height) {};

/**
 * @param {string} width
 * @return {_UI.Image}
 */
_UI.Image.prototype.setWidth = function(width) {};

/**
 * Class InlineLabel
 * @constructor
 */
_UI.InlineLabel = function() {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.InlineLabel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.InlineLabel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.InlineLabel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {_UI.InlineLabel}
 */
_UI.InlineLabel.prototype.setWordWrap = function(wordWrap) {};

/**
 * Class Label
 * @constructor
 */
_UI.Label = function() {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.Label}
 */
_UI.Label.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Label}
 */
_UI.Label.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Label}
 */
_UI.Label.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.Label.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Label.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Label.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.Label}
 */
_UI.Label.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.Label}
 */
_UI.Label.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {_UI.Label}
 */
_UI.Label.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Label}
 */
_UI.Label.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Label}
 */
_UI.Label.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Label}
 */
_UI.Label.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.Label}
 */
_UI.Label.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Label}
 */
_UI.Label.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Label}
 */
_UI.Label.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.Label}
 */
_UI.Label.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.Label}
 */
_UI.Label.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.Label}
 */
_UI.Label.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.Label}
 */
_UI.Label.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.Label}
 */
_UI.Label.prototype.setWidth = function(width) {};

/**
 * @param {boolean} wordWrap
 * @return {_UI.Label}
 */
_UI.Label.prototype.setWordWrap = function(wordWrap) {};

/**
 * Class ListBox
 * @constructor
 */
_UI.ListBox = function() {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addFocusHandler = function(handler) {};

/**
 * @param {string} text
 * @param {string=} value
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addItem = function(text, value) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.ListBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ListBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ListBox.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.removeItem = function(index) {};

/**
 * @param {boolean} enabled
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setId = function(id) {};

/**
 * @param {number} index
 * @param {boolean} selected
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setItemSelected = function(index, selected) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setItemText = function(index, text) {};

/**
 * @param {string} name
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} index
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setSelectedIndex = function(index) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setTitle = function(title) {};

/**
 * @param {number} index
 * @param {string} value
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setValue = function(index, value) {};

/**
 * @param {boolean} visible
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} count
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setVisibleItemCount = function(count) {};

/**
 * @param {string} width
 * @return {_UI.ListBox}
 */
_UI.ListBox.prototype.setWidth = function(width) {};

/**
 * Class MenuBar
 * @constructor
 */
_UI.MenuBar = function() {};

/**
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.addCloseHandler = function(handler) {};

/**
 * @param {(_Ui.MenuItem|string)} arg1
 * @param {(boolean|_UI.Handler|_Ui.MenuBar)=} arg2
 * @param {(_UI.Handler|_Ui.MenuBar)=} arg3
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.addItem = function(arg1, arg2, arg3) {};

/**
 * @param {_Ui.MenuItemSeparator=} separator
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.addSeparator = function(separator) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.MenuBar.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.MenuBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.MenuBar.prototype.getType = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} autoOpen
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setAutoOpen = function(autoOpen) {};

/**
 * @param {string} height
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.MenuBar}
 */
_UI.MenuBar.prototype.setWidth = function(width) {};

/**
 * Class MenuItem
 * @constructor
 */
_UI.MenuItem = function() {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.MenuItem.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.MenuItem.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.MenuItem.prototype.getType = function() {};

/**
 * @param {_UI.Handler} handler
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setCommand = function(handler) {};

/**
 * @param {string} html
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {_Ui.MenuBar} subMenu
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setSubMenu = function(subMenu) {};

/**
 * @param {string} tag
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.MenuItem}
 */
_UI.MenuItem.prototype.setWidth = function(width) {};

/**
 * Class MenuItemSeparator
 * @constructor
 */
_UI.MenuItemSeparator = function() {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.MenuItemSeparator.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.MenuItemSeparator.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.MenuItemSeparator.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.MenuItemSeparator}
 */
_UI.MenuItemSeparator.prototype.setWidth = function(width) {};

/**
 * Class PasswordTextBox
 * @constructor
 */
_UI.PasswordTextBox = function() {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.PasswordTextBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.PasswordTextBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.PasswordTextBox.prototype.getType = function() {};

/**
 * @param {number} position
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setId = function(id) {};

/**
 * @param {number} length
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setMaxLength = function(length) {};

/**
 * @param {string} name
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @param {boolean=} fireEvents
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} length
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setVisibleLength = function(length) {};

/**
 * @param {string} width
 * @return {_UI.PasswordTextBox}
 */
_UI.PasswordTextBox.prototype.setWidth = function(width) {};

/**
 * Class PopupPanel
 * @constructor
 */
_UI.PopupPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.add = function(widget) {};

/**
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.addCloseHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.PopupPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.PopupPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.PopupPanel.prototype.getType = function() {};

/**
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.hide = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} enabled
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setAutoHideEnabled = function(enabled) {};

/**
 * @param {boolean} enabled
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setGlassEnabled = function(enabled) {};

/**
 * @param {string} height
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setId = function(id) {};

/**
 * @param {boolean} modal
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setModal = function(modal) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} left
 * @param {number} top
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setPopupPosition = function(left, top) {};

/**
 * @param {boolean} previewing
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setPreviewingAllNativeEvents = function(previewing) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.setWidth = function(width) {};

/**
 * @return {_UI.PopupPanel}
 */
_UI.PopupPanel.prototype.show = function() {};

/**
 * Class PushButton
 * @constructor
 */
_UI.PushButton = function() {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.PushButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.PushButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.PushButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.PushButton}
 */
_UI.PushButton.prototype.setWidth = function(width) {};

/**
 * Class RadioButton
 * @constructor
 */
_UI.RadioButton = function() {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.RadioButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.RadioButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.RadioButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} formValue
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setFormValue = function(formValue) {};

/**
 * @param {string} html
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} value
 * @param {boolean=} fireEvents
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.RadioButton}
 */
_UI.RadioButton.prototype.setWidth = function(width) {};

/**
 * Class ResetButton
 * @constructor
 */
_UI.ResetButton = function() {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.ResetButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ResetButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ResetButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.ResetButton}
 */
_UI.ResetButton.prototype.setWidth = function(width) {};

/**
 * Class ScrollPanel
 * @constructor
 */
_UI.ScrollPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.add = function(widget) {};

/**
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.addScrollHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.ScrollPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ScrollPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ScrollPanel.prototype.getType = function() {};

/**
 * @param {boolean} alwaysShow
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setAlwaysShowScrollBars = function(alwaysShow) {};

/**
 * @param {string} height
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setHeight = function(height) {};

/**
 * @param {number} position
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setHorizontalScrollPosition = function(position) {};

/**
 * @param {string} id
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {number} position
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setScrollPosition = function(position) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.ScrollPanel}
 */
_UI.ScrollPanel.prototype.setWidth = function(width) {};

/**
 * Class ServerHandler
 * @constructor
 */
_UI.ServerHandler = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.addCallbackElement = function(widget) {};

/**
 * @return {string}
 */
_UI.ServerHandler.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ServerHandler.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ServerHandler.prototype.getType = function() {};

/**
 * @param {string} functionToInvoke
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.setCallbackFunction = function(functionToInvoke) {};

/**
 * @param {string} id
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.setId = function(id) {};

/**
 * @param {string} tag
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.setTag = function(tag) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.ServerHandler}
 */
_UI.ServerHandler.prototype.validateSum = function(widgets, sum) {};

/**
 * Class SimpleCheckBox
 * @constructor
 */
_UI.SimpleCheckBox = function() {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.SimpleCheckBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.SimpleCheckBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.SimpleCheckBox.prototype.getType = function() {};

/**
 * @param {boolean} checked
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setChecked = function(checked) {};

/**
 * @param {boolean} enabled
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.SimpleCheckBox}
 */
_UI.SimpleCheckBox.prototype.setWidth = function(width) {};

/**
 * Class SimplePanel
 * @constructor
 */
_UI.SimplePanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.SimplePanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.SimplePanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.SimplePanel.prototype.getType = function() {};

/**
 * @param {string} height
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.SimplePanel}
 */
_UI.SimplePanel.prototype.setWidth = function(width) {};

/**
 * Class SimpleRadioButton
 * @constructor
 */
_UI.SimpleRadioButton = function() {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.SimpleRadioButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.SimpleRadioButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.SimpleRadioButton.prototype.getType = function() {};

/**
 * @param {boolean} checked
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setChecked = function(checked) {};

/**
 * @param {boolean} enabled
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.SimpleRadioButton}
 */
_UI.SimpleRadioButton.prototype.setWidth = function(width) {};

/**
 * Class SplitLayoutPanel
 * @constructor
 */
_UI.SplitLayoutPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.add = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} width
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addEast = function(widget, width) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} height
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addNorth = function(widget, height) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} height
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addSouth = function(widget, height) {};

/**
 * @param {string} styleName
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addStyleName = function(styleName) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} width
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.addWest = function(widget, width) {};

/**
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.SplitLayoutPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.SplitLayoutPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.SplitLayoutPanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.remove = function(arg1) {};

/**
 * @param {string} height
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} minSize
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setWidgetMinSize = function(widget, minSize) {};

/**
 * @param {string} width
 * @return {_UI.SplitLayoutPanel}
 */
_UI.SplitLayoutPanel.prototype.setWidth = function(width) {};

/**
 * Class StackPanel
 * @constructor
 */
_UI.StackPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {string=} text
 * @param {boolean=} asHtml
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.add = function(widget, text, asHtml) {};

/**
 * @param {string} styleName
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.StackPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.StackPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.StackPanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.remove = function(arg1) {};

/**
 * @param {string} height
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} index
 * @param {string} text
 * @param {boolean=} asHtml
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setStackText = function(index, text, asHtml) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.StackPanel}
 */
_UI.StackPanel.prototype.setWidth = function(width) {};

/**
 * Class SubmitButton
 * @constructor
 */
_UI.SubmitButton = function() {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.SubmitButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.SubmitButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.SubmitButton.prototype.getType = function() {};

/**
 * @param {boolean} enabled
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.SubmitButton}
 */
_UI.SubmitButton.prototype.setWidth = function(width) {};

/**
 * Class TabBar
 * @constructor
 */
_UI.TabBar = function() {};

/**
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.addStyleName = function(styleName) {};

/**
 * @param {(string|_UI.Widget)} arg1
 * @param {boolean=} asHtml
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.addTab = function(arg1, asHtml) {};

/**
 * @return {string}
 */
_UI.TabBar.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.TabBar.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.TabBar.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.selectTab = function(index) {};

/**
 * @param {string} height
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @param {boolean} enabled
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setTabEnabled = function(index, enabled) {};

/**
 * @param {number} index
 * @param {string} text
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setTabText = function(index, text) {};

/**
 * @param {string} tag
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.TabBar}
 */
_UI.TabBar.prototype.setWidth = function(width) {};

/**
 * Class TabPanel
 * @constructor
 */
_UI.TabPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @param {(string|_UI.Widget)=} arg2
 * @param {boolean=} asHtml
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.add = function(widget, arg2, asHtml) {};

/**
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.TabPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.TabPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.TabPanel.prototype.getType = function() {};

/**
 * @param {number} index
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.selectTab = function(index) {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {string} height
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.TabPanel}
 */
_UI.TabPanel.prototype.setWidth = function(width) {};

/**
 * Class TextArea
 * @constructor
 */
_UI.TextArea = function() {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addChangeHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.TextArea.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.TextArea.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.TextArea.prototype.getType = function() {};

/**
 * @param {number} width
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setCharacterWidth = function(width) {};

/**
 * @param {number} position
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setId = function(id) {};

/**
 * @param {string} name
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @param {boolean=} fireEvents
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setVisible = function(visible) {};

/**
 * @param {number} lines
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setVisibleLines = function(lines) {};

/**
 * @param {string} width
 * @return {_UI.TextArea}
 */
_UI.TextArea.prototype.setWidth = function(width) {};

/**
 * Class TextBox
 * @constructor
 */
_UI.TextBox = function() {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addChangeHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.addValueChangeHandler = function(handler) {};

/**
 * @return {string}
 */
_UI.TextBox.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.TextBox.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.TextBox.prototype.getType = function() {};

/**
 * @param {number} position
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setCursorPos = function(position) {};

/**
 * @param {boolean} enabled
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setId = function(id) {};

/**
 * @param {number} length
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setMaxLength = function(length) {};

/**
 * @param {string} name
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setName = function(name) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} readOnly
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setReadOnly = function(readOnly) {};

/**
 * @param {number} position
 * @param {number} length
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setSelectionRange = function(position, length) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setTitle = function(title) {};

/**
 * @param {string} value
 * @param {boolean=} fireEvents
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setValue = function(value, fireEvents) {};

/**
 * @param {boolean} visible
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setVisible = function(visible) {};

/**
 * @param {number} length
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setVisibleLength = function(length) {};

/**
 * @param {string} width
 * @return {_UI.TextBox}
 */
_UI.TextBox.prototype.setWidth = function(width) {};

/**
 * Class ToggleButton
 * @constructor
 */
_UI.ToggleButton = function() {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addClickHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addFocusHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.addStyleName = function(styleName) {};

/**
 * @return {string}
 */
_UI.ToggleButton.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.ToggleButton.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.ToggleButton.prototype.getType = function() {};

/**
 * @param {boolean} down
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setDown = function(down) {};

/**
 * @param {boolean} enabled
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setEnabled = function(enabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setFocus = function(focus) {};

/**
 * @param {string} html
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.ToggleButton}
 */
_UI.ToggleButton.prototype.setWidth = function(width) {};

/**
 * Class Tree
 * @constructor
 */
_UI.Tree = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.add = function(widget) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addBlurHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addCloseHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addFocusHandler = function(handler) {};

/**
 * @param {(string|_Ui.TreeItem|_UI.Widget)} arg1
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addItem = function(arg1) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addKeyDownHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addKeyPressHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addKeyUpHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseDownHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseMoveHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseOutHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseOverHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseUpHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addMouseWheelHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addOpenHandler = function(handler) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addSelectionHandler = function(handler) {};

/**
 * @param {string} styleName
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.Tree.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Tree.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Tree.prototype.getType = function() {};

/**
 * @param {boolean} animationEnabled
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setAnimationEnabled = function(animationEnabled) {};

/**
 * @param {boolean} focus
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setFocus = function(focus) {};

/**
 * @param {string} height
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setPixelSize = function(width, height) {};

/**
 * @param {_Ui.TreeItem} item
 * @param {boolean=} fireEvents
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setSelectedItem = function(item, fireEvents) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setSize = function(width, height) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {number} index
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setTabIndex = function(index) {};

/**
 * @param {string} tag
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.Tree}
 */
_UI.Tree.prototype.setWidth = function(width) {};

/**
 * Class TreeItem
 * @constructor
 */
_UI.TreeItem = function() {};

/**
 * @param {(string|_Ui.TreeItem|_UI.Widget)} arg1
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.addItem = function(arg1) {};

/**
 * @param {string} styleName
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.TreeItem.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.TreeItem.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.TreeItem.prototype.getType = function() {};

/**
 * @param {string} html
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setHTML = function(html) {};

/**
 * @param {string} height
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setHeight = function(height) {};

/**
 * @param {string} id
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setPixelSize = function(width, height) {};

/**
 * @param {boolean} selected
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setSelected = function(selected) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setSize = function(width, height) {};

/**
 * @param {boolean} open
 * @param {boolean=} fireEvents
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setState = function(open, fireEvents) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setTag = function(tag) {};

/**
 * @param {string} text
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setText = function(text) {};

/**
 * @param {string} title
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setTitle = function(title) {};

/**
 * @param {boolean} visible
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setVisible = function(visible) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setWidget = function(widget) {};

/**
 * @param {string} width
 * @return {_UI.TreeItem}
 */
_UI.TreeItem.prototype.setWidth = function(width) {};

/**
 * Class UiInstance
 * @constructor
 */
_UI.UiInstance = function() {};

/**
 * @param {_UI.Widget} child
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.add = function(child) {};

/**
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.close = function() {};

/**
 * @return {_UI.AbsolutePanel}
 */
_UI.UiInstance.prototype.createAbsolutePanel = function() {};

/**
 * @param {string} text
 * @param {(boolean|string)} arg2
 * @param {string=} href
 * @return {_UI.Anchor}
 */
_UI.UiInstance.prototype.createAnchor = function(text, arg2, href) {};

/**
 * @param {string=} html
 * @param {_UI.Handler=} clickHandler
 * @return {_UI.Button}
 */
_UI.UiInstance.prototype.createButton = function(html, clickHandler) {};

/**
 * @param {string=} caption
 * @param {boolean=} asHtml
 * @return {_UI.CaptionPanel}
 */
_UI.UiInstance.prototype.createCaptionPanel = function(caption, asHtml) {};

/**
 * @param {string=} label
 * @param {boolean=} asHtml
 * @return {_UI.CheckBox}
 */
_UI.UiInstance.prototype.createCheckBox = function(label, asHtml) {};

/**
 * @return {_UI.ClientHandler}
 */
_UI.UiInstance.prototype.createClientHandler = function() {};

/**
 * @return {_UI.DateBox}
 */
_UI.UiInstance.prototype.createDateBox = function() {};

/**
 * @return {_UI.DatePicker}
 */
_UI.UiInstance.prototype.createDatePicker = function() {};

/**
 * @return {_UI.DecoratedStackPanel}
 */
_UI.UiInstance.prototype.createDecoratedStackPanel = function() {};

/**
 * @return {_UI.DecoratedTabBar}
 */
_UI.UiInstance.prototype.createDecoratedTabBar = function() {};

/**
 * @return {_UI.DecoratedTabPanel}
 */
_UI.UiInstance.prototype.createDecoratedTabPanel = function() {};

/**
 * @return {_UI.DecoratorPanel}
 */
_UI.UiInstance.prototype.createDecoratorPanel = function() {};

/**
 * @param {boolean=} autoHide
 * @param {boolean=} modal
 * @return {_UI.DialogBox}
 */
_UI.UiInstance.prototype.createDialogBox = function(autoHide, modal) {};

/**
 * @return {_UI.DocsListDialog}
 */
_UI.UiInstance.prototype.createDocsListDialog = function() {};

/**
 * @return {_UI.FileUpload}
 */
_UI.UiInstance.prototype.createFileUpload = function() {};

/**
 * @return {_UI.FlexTable}
 */
_UI.UiInstance.prototype.createFlexTable = function() {};

/**
 * @return {_UI.FlowPanel}
 */
_UI.UiInstance.prototype.createFlowPanel = function() {};

/**
 * @param {_UI.Widget=} child
 * @return {_UI.FocusPanel}
 */
_UI.UiInstance.prototype.createFocusPanel = function(child) {};

/**
 * @return {_UI.FormPanel}
 */
_UI.UiInstance.prototype.createFormPanel = function() {};

/**
 * @param {number=} rows
 * @param {number=} columns
 * @return {_UI.Grid}
 */
_UI.UiInstance.prototype.createGrid = function(rows, columns) {};

/**
 * @param {string=} html
 * @param {boolean=} wordWrap
 * @return {_UI.HTML}
 */
_UI.UiInstance.prototype.createHTML = function(html, wordWrap) {};

/**
 * @param {string=} name
 * @param {string=} value
 * @return {_UI.Hidden}
 */
_UI.UiInstance.prototype.createHidden = function(name, value) {};

/**
 * @return {_UI.HorizontalPanel}
 */
_UI.UiInstance.prototype.createHorizontalPanel = function() {};

/**
 * @param {string=} url
 * @param {number=} left
 * @param {number=} top
 * @param {number=} width
 * @param {number=} height
 * @return {_UI.Image}
 */
_UI.UiInstance.prototype.createImage = function(url, left, top, width, height) {};

/**
 * @param {string=} text
 * @return {_UI.InlineLabel}
 */
_UI.UiInstance.prototype.createInlineLabel = function(text) {};

/**
 * @param {string=} text
 * @param {boolean=} wordWrap
 * @return {_UI.Label}
 */
_UI.UiInstance.prototype.createLabel = function(text, wordWrap) {};

/**
 * @param {boolean=} isMultipleSelect
 * @return {_UI.ListBox}
 */
_UI.UiInstance.prototype.createListBox = function(isMultipleSelect) {};

/**
 * @param {boolean=} vertical
 * @return {_UI.MenuBar}
 */
_UI.UiInstance.prototype.createMenuBar = function(vertical) {};

/**
 * @param {string} text
 * @param {(boolean|_UI.Handler)} arg2
 * @param {_UI.Handler=} command
 * @return {_UI.MenuItem}
 */
_UI.UiInstance.prototype.createMenuItem = function(text, arg2, command) {};

/**
 * @return {_UI.MenuItemSeparator}
 */
_UI.UiInstance.prototype.createMenuItemSeparator = function() {};

/**
 * @return {_UI.PasswordTextBox}
 */
_UI.UiInstance.prototype.createPasswordTextBox = function() {};

/**
 * @param {boolean=} autoHide
 * @param {boolean=} modal
 * @return {_UI.PopupPanel}
 */
_UI.UiInstance.prototype.createPopupPanel = function(autoHide, modal) {};

/**
 * @param {string=} upText
 * @param {(_UI.Handler|string)=} arg2
 * @param {_UI.Handler=} clickHandler
 * @return {_UI.PushButton}
 */
_UI.UiInstance.prototype.createPushButton = function(upText, arg2, clickHandler) {};

/**
 * @param {string} name
 * @param {string=} label
 * @param {boolean=} asHtml
 * @return {_UI.RadioButton}
 */
_UI.UiInstance.prototype.createRadioButton = function(name, label, asHtml) {};

/**
 * @param {string=} html
 * @param {_UI.Handler=} clickHandler
 * @return {_UI.ResetButton}
 */
_UI.UiInstance.prototype.createResetButton = function(html, clickHandler) {};

/**
 * @param {_UI.Widget=} child
 * @return {_UI.ScrollPanel}
 */
_UI.UiInstance.prototype.createScrollPanel = function(child) {};

/**
 * @param {string=} functionName
 * @return {_UI.ServerHandler}
 */
_UI.UiInstance.prototype.createServerHandler = function(functionName) {};

/**
 * @return {_UI.SimpleCheckBox}
 */
_UI.UiInstance.prototype.createSimpleCheckBox = function() {};

/**
 * @return {_UI.SimplePanel}
 */
_UI.UiInstance.prototype.createSimplePanel = function() {};

/**
 * @param {string} name
 * @return {_UI.SimpleRadioButton}
 */
_UI.UiInstance.prototype.createSimpleRadioButton = function(name) {};

/**
 * @return {_UI.SplitLayoutPanel}
 */
_UI.UiInstance.prototype.createSplitLayoutPanel = function() {};

/**
 * @return {_UI.StackPanel}
 */
_UI.UiInstance.prototype.createStackPanel = function() {};

/**
 * @param {string=} html
 * @return {_UI.SubmitButton}
 */
_UI.UiInstance.prototype.createSubmitButton = function(html) {};

/**
 * @return {_UI.TabBar}
 */
_UI.UiInstance.prototype.createTabBar = function() {};

/**
 * @return {_UI.TabPanel}
 */
_UI.UiInstance.prototype.createTabPanel = function() {};

/**
 * @return {_UI.TextArea}
 */
_UI.UiInstance.prototype.createTextArea = function() {};

/**
 * @return {_UI.TextBox}
 */
_UI.UiInstance.prototype.createTextBox = function() {};

/**
 * @param {string=} upText
 * @param {(_UI.Handler|string)=} arg2
 * @return {_UI.ToggleButton}
 */
_UI.UiInstance.prototype.createToggleButton = function(upText, arg2) {};

/**
 * @return {_UI.Tree}
 */
_UI.UiInstance.prototype.createTree = function() {};

/**
 * @param {(string|_UI.Widget)=} arg1
 * @return {_UI.TreeItem}
 */
_UI.UiInstance.prototype.createTreeItem = function(arg1) {};

/**
 * @return {_UI.VerticalPanel}
 */
_UI.UiInstance.prototype.createVerticalPanel = function() {};

/**
 * @param {string} id
 * @return {_UI.Component}
 */
_UI.UiInstance.prototype.getElementById = function(id) {};

/**
 * @return {string}
 */
_UI.UiInstance.prototype.getId = function() {};

/**
 * @return {boolean}
 */
_UI.UiInstance.prototype.isStandardsMode = function() {};

/**
 * @param {string} componentName
 * @param {Object=} optAdvancedArgs
 * @return {_UI.Component}
 */
_UI.UiInstance.prototype.loadComponent = function(componentName, optAdvancedArgs) {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.remove = function(arg1) {};

/**
 * @param {number} height
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.setHeight = function(height) {};

/**
 * @param {boolean} standardsMode
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.setStandardsMode = function(standardsMode) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {string} title
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.setTitle = function(title) {};

/**
 * @param {number} width
 * @return {_UI.UiInstance}
 */
_UI.UiInstance.prototype.setWidth = function(width) {};

/**
 * Class VerticalPanel
 * @constructor
 */
_UI.VerticalPanel = function() {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.add = function(widget) {};

/**
 * @param {string} styleName
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.addStyleDependentName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.addStyleName = function(styleName) {};

/**
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.clear = function() {};

/**
 * @return {string}
 */
_UI.VerticalPanel.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.VerticalPanel.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.VerticalPanel.prototype.getType = function() {};

/**
 * @param {(number|_UI.Widget)} arg1
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.remove = function(arg1) {};

/**
 * @param {number} width
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setBorderWidth = function(width) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} height
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setCellHeight = function(widget, height) {};

/**
 * @param {_UI.Widget} widget
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setCellHorizontalAlignment = function(widget, horizontalAlignment) {};

/**
 * @param {_UI.Widget} widget
 * @param {_UI.VerticalAlignment} verticalAlignment
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setCellVerticalAlignment = function(widget, verticalAlignment) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} width
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setCellWidth = function(widget, width) {};

/**
 * @param {string} height
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setHeight = function(height) {};

/**
 * @param {_UI.HorizontalAlignment} horizontalAlignment
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setHorizontalAlignment = function(horizontalAlignment) {};

/**
 * @param {string} id
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setId = function(id) {};

/**
 * @param {number} width
 * @param {number} height
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setPixelSize = function(width, height) {};

/**
 * @param {string} width
 * @param {string} height
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setSize = function(width, height) {};

/**
 * @param {number} spacing
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setSpacing = function(spacing) {};

/**
 * @param {string} attribute
 * @param {string} value
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setStyleAttribute = function(attribute, value) {};

/**
 * @param {Object} attributes
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setStyleAttributes = function(attributes) {};

/**
 * @param {string} styleName
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setStyleName = function(styleName) {};

/**
 * @param {string} styleName
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setStylePrimaryName = function(styleName) {};

/**
 * @param {string} tag
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setTag = function(tag) {};

/**
 * @param {string} title
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setTitle = function(title) {};

/**
 * @param {_UI.VerticalAlignment} verticalAlignment
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setVerticalAlignment = function(verticalAlignment) {};

/**
 * @param {boolean} visible
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setVisible = function(visible) {};

/**
 * @param {string} width
 * @return {_UI.VerticalPanel}
 */
_UI.VerticalPanel.prototype.setWidth = function(width) {};

/**
 * Interface Component
 * @constructor
 */
_UI.Component = function() {};

/**
 * @return {string}
 */
_UI.Component.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Component.prototype.getType = function() {};

/**
 * Interface Handler
 * @constructor
 */
_UI.Handler = function() {};

/**
 * @return {string}
 */
_UI.Handler.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Handler.prototype.getTag = function() {};

/**
 * @return {string}
 */
_UI.Handler.prototype.getType = function() {};

/**
 * @param {string} id
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.setId = function(id) {};

/**
 * @param {string} tag
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.setTag = function(tag) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotEmail = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotInteger = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotLength = function(widget, min, max) {};

/**
 * @param {_UI.Widget} widget
 * @param {string} pattern
 * @param {string=} flags
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotMatches = function(widget, pattern, flags) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNotSum = function(widgets, sum) {};

/**
 * @param {_UI.Widget} widget
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateNumber = function(widget) {};

/**
 * @param {_UI.Widget} widget
 * @param {Array.<string>} options
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateOptions = function(widget, options) {};

/**
 * @param {_UI.Widget} widget
 * @param {number} min
 * @param {number} max
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateRange = function(widget, min, max) {};

/**
 * @param {Array.<_UI.Widget>} widgets
 * @param {number} sum
 * @return {_UI.Handler}
 */
_UI.Handler.prototype.validateSum = function(widgets, sum) {};

/**
 * Interface Widget
 * @constructor
 */
_UI.Widget = function() {};

/**
 * @return {string}
 */
_UI.Widget.prototype.getId = function() {};

/**
 * @return {string}
 */
_UI.Widget.prototype.getType = function() {};

/**
 * Enum DateTimeFormat
 * @constructor
 */
_UI.DateTimeFormat = function() {};

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.ISO_8601;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.RFC_2822;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_FULL;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_LONG;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_MEDIUM;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_SHORT;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.TIME_FULL;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.TIME_LONG;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.TIME_MEDIUM;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.TIME_SHORT;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_TIME_FULL;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_TIME_LONG;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_TIME_MEDIUM;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DATE_TIME_SHORT;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.HOUR_MINUTE;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.HOUR_MINUTE_SECOND;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.HOUR24_MINUTE;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.HOUR24_MINUTE_SECOND;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MINUTE_SECOND;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH_ABBR;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH_ABBR_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH_NUM_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.MONTH_WEEKDAY_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_ABBR;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_ABBR_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_NUM;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_NUM_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_MONTH_WEEKDAY_DAY;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_QUARTER;

/**
 * @type {_UI.DateTimeFormat}
 */
_UI.DateTimeFormat.prototype.YEAR_QUARTER_ABBR;

/**
 * Enum FileType
 * @constructor
 */
_UI.FileType = function() {};

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.ALL;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.ALL_DOCS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.DRAWINGS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.DOCUMENTS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.SPREADSHEETS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.FOLDERS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.RECENTLY_PICKED;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.PRESENTATIONS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.FORMS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.PHOTOS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.PHOTO_ALBUMS;

/**
 * @type {_UI.FileType}
 */
_UI.FileType.prototype.PDFS;

/**
 * Enum HorizontalAlignment
 * @constructor
 */
_UI.HorizontalAlignment = function() {};

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.LEFT;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.RIGHT;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.CENTER;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.DEFAULT;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.JUSTIFY;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.LOCALE_START;

/**
 * @type {_UI.HorizontalAlignment}
 */
_UI.HorizontalAlignment.prototype.LOCALE_END;

/**
 * Enum VerticalAlignment
 * @constructor
 */
_UI.VerticalAlignment = function() {};

/**
 * @type {_UI.VerticalAlignment}
 */
_UI.VerticalAlignment.prototype.TOP;

/**
 * @type {_UI.VerticalAlignment}
 */
_UI.VerticalAlignment.prototype.MIDDLE;

/**
 * @type {_UI.VerticalAlignment}
 */
_UI.VerticalAlignment.prototype.BOTTOM;


/**
 * _URL_Fetch Services
 */
var _URL_Fetch = {};

/**
 * Class UrlFetchApp
 * @constructor
 */
_URL_Fetch.UrlFetchApp = function() {};

/**
 * @param {string} serviceName
 * @return {_URL_Fetch.OAuthConfig}
 */
_URL_Fetch.UrlFetchApp.prototype.addOAuthService = function(serviceName) {};

/**
 * @param {string=} url
 * @return {_URL_Fetch.HTTPResponse}
 */
_URL_Fetch.UrlFetchApp.prototype.fetch = function(url) {};

/**
 * @param {string} url
 * @param {Object=} params
 * @return {Object}
 */
_URL_Fetch.UrlFetchApp.prototype.getRequest = function(url, params) {};

/**
 * @param {string} serviceName
 */
_URL_Fetch.UrlFetchApp.prototype.removeOAuthService = function(serviceName) {};


/**
 * @type {_URL_Fetch.UrlFetchApp}
 */
var UrlFetchApp = new _URL_Fetch.UrlFetchApp();

/**
 * Class HTTPResponse
 * @constructor
 */
_URL_Fetch.HTTPResponse = function() {};

/**
 * @return {Object}
 */
_URL_Fetch.HTTPResponse.prototype.getAllHeaders = function() {};

/**
 * @param {string} contentType
 * @return {_Base.Blob}
 */
_URL_Fetch.HTTPResponse.prototype.getAs = function(contentType) {};

/**
 * @return {_Base.Blob}
 */
_URL_Fetch.HTTPResponse.prototype.getBlob = function() {};

/**
 * @return {Array.<number>}
 */
_URL_Fetch.HTTPResponse.prototype.getContent = function() {};

/**
 * @param {string=} charset
 * @return {string}
 */
_URL_Fetch.HTTPResponse.prototype.getContentText = function(charset) {};

/**
 * @return {Object}
 */
_URL_Fetch.HTTPResponse.prototype.getHeaders = function() {};

/**
 * @return {number}
 */
_URL_Fetch.HTTPResponse.prototype.getResponseCode = function() {};

/**
 * Class OAuthConfig
 * @constructor
 */
_URL_Fetch.OAuthConfig = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getAccessTokenUrl = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getAuthorizationUrl = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getMethod = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getParamLocation = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getRequestTokenUrl = function() {};

/**
 * @return {string}
 */
_URL_Fetch.OAuthConfig.prototype.getServiceName = function() {};

/**
 * @param {string} url
 */
_URL_Fetch.OAuthConfig.prototype.setAccessTokenUrl = function(url) {};

/**
 * @param {string} url
 */
_URL_Fetch.OAuthConfig.prototype.setAuthorizationUrl = function(url) {};

/**
 * @param {string} consumerKey
 */
_URL_Fetch.OAuthConfig.prototype.setConsumerKey = function(consumerKey) {};

/**
 * @param {string} consumerSecret
 */
_URL_Fetch.OAuthConfig.prototype.setConsumerSecret = function(consumerSecret) {};

/**
 * @param {string} method
 */
_URL_Fetch.OAuthConfig.prototype.setMethod = function(method) {};

/**
 * @param {string} location
 */
_URL_Fetch.OAuthConfig.prototype.setParamLocation = function(location) {};

/**
 * @param {string} url
 */
_URL_Fetch.OAuthConfig.prototype.setRequestTokenUrl = function(url) {};


/**
 * _Utilities Services
 */
var _Utilities = {};

/**
 * Class Utilities
 * @constructor
 */
_Utilities.Utilities = function() {};

/**
 * @type {_Utilities.Charset}
 */
_Utilities.Utilities.prototype.Charset;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.Utilities.prototype.DigestAlgorithm;

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.Utilities.prototype.MacAlgorithm;

/**
 * @param {string} encoded
 * @param {_Utilities.Charset=} charset
 * @return {Array.<number>}
 */
_Utilities.Utilities.prototype.base64Decode = function(encoded, charset) {};

/**
 * @param {(Array.<number>|string)} data
 * @param {_Utilities.Charset=} charset
 * @return {string}
 */
_Utilities.Utilities.prototype.base64Encode = function(data, charset) {};

/**
 * @param {_Utilities.DigestAlgorithm} algorithm
 * @param {string} value
 * @param {_Utilities.Charset=} charset
 * @return {Array.<number>}
 */
_Utilities.Utilities.prototype.computeDigest = function(algorithm, value, charset) {};

/**
 * @param {string} value
 * @param {string} key
 * @param {_Utilities.Charset=} charset
 * @return {Array.<number>}
 */
_Utilities.Utilities.prototype.computeHmacSha256Signature = function(value, key, charset) {};

/**
 * @param {_Utilities.MacAlgorithm} algorithm
 * @param {string} value
 * @param {string} key
 * @param {_Utilities.Charset=} charset
 * @return {Array.<number>}
 */
_Utilities.Utilities.prototype.computeHmacSignature = function(algorithm, value, key, charset) {};

/**
 * @param {Date} date
 * @param {string} timeZone
 * @param {string} format
 * @return {string}
 */
_Utilities.Utilities.prototype.formatDate = function(date, timeZone, format) {};

/**
 * @param {string} template
 * @param {...Object} args
 * @return {string}
 */
_Utilities.Utilities.prototype.formatString = function(template, args) {};

/**
 * @param {string} jsonString
 * @return {Object}
 */
_Utilities.Utilities.prototype.jsonParse = function(jsonString) {};

/**
 * @param {Object} obj
 * @return {string}
 */
_Utilities.Utilities.prototype.jsonStringify = function(obj) {};

/**
 * @param {(Array.<number>|string)} data
 * @param {string=} contentType
 * @param {string=} name
 * @return {_Base.Blob}
 */
_Utilities.Utilities.prototype.newBlob = function(data, contentType, name) {};

/**
 * @param {string} csv
 * @param {string=} delimiter
 * @return {Array.<Array.<string>>}
 */
_Utilities.Utilities.prototype.parseCsv = function(csv, delimiter) {};

/**
 * @param {number} milliseconds
 */
_Utilities.Utilities.prototype.sleep = function(milliseconds) {};

/**
 * @param {_Base.BlobSource} blob
 * @return {Array.<_Base.Blob>}
 */
_Utilities.Utilities.prototype.unzip = function(blob) {};

/**
 * @param {Array.<_Base.BlobSource>} blobs
 * @param {string=} name
 * @return {_Base.Blob}
 */
_Utilities.Utilities.prototype.zip = function(blobs, name) {};


/**
 * @type {_Utilities.Utilities}
 */
var Utilities = new _Utilities.Utilities();

/**
 * Enum Charset
 * @constructor
 */
_Utilities.Charset = function() {};

/**
 * @type {_Utilities.Charset}
 */
_Utilities.Charset.prototype.US_ASCII;

/**
 * @type {_Utilities.Charset}
 */
_Utilities.Charset.prototype.UTF_8;

/**
 * Enum DigestAlgorithm
 * @constructor
 */
_Utilities.DigestAlgorithm = function() {};

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.MD2;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.MD5;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.SHA_1;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.SHA_256;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.SHA_384;

/**
 * @type {_Utilities.DigestAlgorithm}
 */
_Utilities.DigestAlgorithm.prototype.SHA_512;

/**
 * Enum MacAlgorithm
 * @constructor
 */
_Utilities.MacAlgorithm = function() {};

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.MacAlgorithm.prototype.HMAC_MD5;

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.MacAlgorithm.prototype.HMAC_SHA_1;

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.MacAlgorithm.prototype.HMAC_SHA_256;

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.MacAlgorithm.prototype.HMAC_SHA_384;

/**
 * @type {_Utilities.MacAlgorithm}
 */
_Utilities.MacAlgorithm.prototype.HMAC_SHA_512;


/**
 * _XML Services
 */
var _XML = {};

/**
 * Class XmlService
 * @constructor
 */
_XML.XmlService = function() {};

/**
 * @type {_XML.ContentType}
 */
_XML.XmlService.prototype.ContentTypes;

/**
 * @param {string} text
 * @return {_XML.Cdata}
 */
_XML.XmlService.prototype.createCdata = function(text) {};

/**
 * @param {string} text
 * @return {_XML.Comment}
 */
_XML.XmlService.prototype.createComment = function(text) {};

/**
 * @param {string} elementName
 * @param {string=} arg2
 * @param {string=} systemId
 * @return {_XML.DocType}
 */
_XML.XmlService.prototype.createDocType = function(elementName, arg2, systemId) {};

/**
 * @param {_XML.Element=} rootElement
 * @return {_XML.Document}
 */
_XML.XmlService.prototype.createDocument = function(rootElement) {};

/**
 * @param {string} name
 * @param {_XML.Namespace=} namespace
 * @return {_XML.Element}
 */
_XML.XmlService.prototype.createElement = function(name, namespace) {};

/**
 * @param {string} text
 * @return {_XML.Text}
 */
_XML.XmlService.prototype.createText = function(text) {};

/**
 * @return {_XML.Format}
 */
_XML.XmlService.prototype.getCompactFormat = function() {};

/**
 * @param {string} arg1
 * @param {string=} uri
 * @return {_XML.Namespace}
 */
_XML.XmlService.prototype.getNamespace = function(arg1, uri) {};

/**
 * @return {_XML.Namespace}
 */
_XML.XmlService.prototype.getNoNamespace = function() {};

/**
 * @return {_XML.Format}
 */
_XML.XmlService.prototype.getPrettyFormat = function() {};

/**
 * @return {_XML.Format}
 */
_XML.XmlService.prototype.getRawFormat = function() {};

/**
 * @return {_XML.Namespace}
 */
_XML.XmlService.prototype.getXmlNamespace = function() {};

/**
 * @param {string} xml
 * @return {_XML.Document}
 */
_XML.XmlService.prototype.parse = function(xml) {};


/**
 * @type {_XML.XmlService}
 */
var XmlService = new _XML.XmlService();

/**
 * Class Attribute
 * @constructor
 */
_XML.Attribute = function() {};

/**
 * @return {string}
 */
_XML.Attribute.prototype.getName = function() {};

/**
 * @return {_XML.Namespace}
 */
_XML.Attribute.prototype.getNamespace = function() {};

/**
 * @return {string}
 */
_XML.Attribute.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {_XML.Attribute}
 */
_XML.Attribute.prototype.setName = function(name) {};

/**
 * @param {_XML.Namespace} namespace
 * @return {_XML.Attribute}
 */
_XML.Attribute.prototype.setNamespace = function(namespace) {};

/**
 * @param {string} value
 * @return {_XML.Attribute}
 */
_XML.Attribute.prototype.setValue = function(value) {};

/**
 * Class Cdata
 * @constructor
 */
_XML.Cdata = function() {};

/**
 * @param {string} text
 * @return {_XML.Text}
 */
_XML.Cdata.prototype.append = function(text) {};

/**
 * @return {_XML.Content}
 */
_XML.Cdata.prototype.detach = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Cdata.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.Cdata.prototype.getText = function() {};

/**
 * @return {string}
 */
_XML.Cdata.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {_XML.Text}
 */
_XML.Cdata.prototype.setText = function(text) {};

/**
 * Class Comment
 * @constructor
 */
_XML.Comment = function() {};

/**
 * @return {_XML.Content}
 */
_XML.Comment.prototype.detach = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Comment.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.Comment.prototype.getText = function() {};

/**
 * @return {string}
 */
_XML.Comment.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {_XML.Comment}
 */
_XML.Comment.prototype.setText = function(text) {};

/**
 * Class DocType
 * @constructor
 */
_XML.DocType = function() {};

/**
 * @return {_XML.Content}
 */
_XML.DocType.prototype.detach = function() {};

/**
 * @return {string}
 */
_XML.DocType.prototype.getElementName = function() {};

/**
 * @return {string}
 */
_XML.DocType.prototype.getInternalSubset = function() {};

/**
 * @return {_XML.Element}
 */
_XML.DocType.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.DocType.prototype.getPublicId = function() {};

/**
 * @return {string}
 */
_XML.DocType.prototype.getSystemId = function() {};

/**
 * @return {string}
 */
_XML.DocType.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {_XML.DocType}
 */
_XML.DocType.prototype.setElementName = function(name) {};

/**
 * @param {string} data
 * @return {_XML.DocType}
 */
_XML.DocType.prototype.setInternalSubset = function(data) {};

/**
 * @param {string} id
 * @return {_XML.DocType}
 */
_XML.DocType.prototype.setPublicId = function(id) {};

/**
 * @param {string} id
 * @return {_XML.DocType}
 */
_XML.DocType.prototype.setSystemId = function(id) {};

/**
 * Class Document
 * @constructor
 */
_XML.Document = function() {};

/**
 * @param {(_XML.Content|number)} arg1
 * @param {_XML.Content=} content
 * @return {_XML.Document}
 */
_XML.Document.prototype.addContent = function(arg1, content) {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Document.prototype.cloneContent = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Document.prototype.detachRootElement = function() {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Document.prototype.getAllContent = function() {};

/**
 * @param {number} index
 * @return {_XML.Content}
 */
_XML.Document.prototype.getContent = function(index) {};

/**
 * @return {number}
 */
_XML.Document.prototype.getContentSize = function() {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Document.prototype.getDescendants = function() {};

/**
 * @return {_XML.DocType}
 */
_XML.Document.prototype.getDocType = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Document.prototype.getRootElement = function() {};

/**
 * @return {boolean}
 */
_XML.Document.prototype.hasRootElement = function() {};

/**
 * @param {(_XML.Content|number)=} arg1
 * @return {(Array.<_XML.Content>|boolean|_XML.Content)}
 */
_XML.Document.prototype.removeContent = function(arg1) {};

/**
 * @param {_XML.DocType} docType
 * @return {_XML.Document}
 */
_XML.Document.prototype.setDocType = function(docType) {};

/**
 * @param {_XML.Element} element
 * @return {_XML.Document}
 */
_XML.Document.prototype.setRootElement = function(element) {};

/**
 * Class Element
 * @constructor
 */
_XML.Element = function() {};

/**
 * @param {(_XML.Content|number)} arg1
 * @param {_XML.Content=} content
 * @return {_XML.Element}
 */
_XML.Element.prototype.addContent = function(arg1, content) {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Element.prototype.cloneContent = function() {};

/**
 * @return {_XML.Content}
 */
_XML.Element.prototype.detach = function() {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Element.prototype.getAllContent = function() {};

/**
 * @param {string} name
 * @param {_XML.Namespace=} namespace
 * @return {_XML.Attribute}
 */
_XML.Element.prototype.getAttribute = function(name, namespace) {};

/**
 * @return {Array.<_XML.Attribute>}
 */
_XML.Element.prototype.getAttributes = function() {};

/**
 * @param {string} name
 * @param {_XML.Namespace=} namespace
 * @return {_XML.Element}
 */
_XML.Element.prototype.getChild = function(name, namespace) {};

/**
 * @param {string} name
 * @param {_XML.Namespace=} namespace
 * @return {string}
 */
_XML.Element.prototype.getChildText = function(name, namespace) {};

/**
 * @param {string=} name
 * @param {_XML.Namespace=} namespace
 * @return {Array.<_XML.Element>}
 */
_XML.Element.prototype.getChildren = function(name, namespace) {};

/**
 * @param {number} index
 * @return {_XML.Content}
 */
_XML.Element.prototype.getContent = function(index) {};

/**
 * @return {number}
 */
_XML.Element.prototype.getContentSize = function() {};

/**
 * @return {Array.<_XML.Content>}
 */
_XML.Element.prototype.getDescendants = function() {};

/**
 * @return {_XML.Document}
 */
_XML.Element.prototype.getDocument = function() {};

/**
 * @return {string}
 */
_XML.Element.prototype.getName = function() {};

/**
 * @param {string=} prefix
 * @return {_XML.Namespace}
 */
_XML.Element.prototype.getNamespace = function(prefix) {};

/**
 * @return {_XML.Element}
 */
_XML.Element.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.Element.prototype.getQualifiedName = function() {};

/**
 * @return {string}
 */
_XML.Element.prototype.getText = function() {};

/**
 * @return {string}
 */
_XML.Element.prototype.getValue = function() {};

/**
 * @param {_XML.Element} other
 * @return {boolean}
 */
_XML.Element.prototype.isAncestorOf = function(other) {};

/**
 * @return {boolean}
 */
_XML.Element.prototype.isRootElement = function() {};

/**
 * @param {(_XML.Attribute|string)} arg1
 * @param {_XML.Namespace=} namespace
 * @return {boolean}
 */
_XML.Element.prototype.removeAttribute = function(arg1, namespace) {};

/**
 * @param {(_XML.Content|number)=} arg1
 * @return {(Array.<_XML.Content>|boolean|_XML.Content)}
 */
_XML.Element.prototype.removeContent = function(arg1) {};

/**
 * @param {(_XML.Attribute|string)} arg1
 * @param {string=} value
 * @param {_XML.Namespace=} namespace
 * @return {_XML.Element}
 */
_XML.Element.prototype.setAttribute = function(arg1, value, namespace) {};

/**
 * @param {string} name
 * @return {_XML.Element}
 */
_XML.Element.prototype.setName = function(name) {};

/**
 * @param {_XML.Namespace} namespace
 * @return {_XML.Element}
 */
_XML.Element.prototype.setNamespace = function(namespace) {};

/**
 * @param {string} text
 * @return {_XML.Element}
 */
_XML.Element.prototype.setText = function(text) {};

/**
 * Class EntityRef
 * @constructor
 */
_XML.EntityRef = function() {};

/**
 * @return {_XML.Content}
 */
_XML.EntityRef.prototype.detach = function() {};

/**
 * @return {string}
 */
_XML.EntityRef.prototype.getName = function() {};

/**
 * @return {_XML.Element}
 */
_XML.EntityRef.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.EntityRef.prototype.getPublicId = function() {};

/**
 * @return {string}
 */
_XML.EntityRef.prototype.getSystemId = function() {};

/**
 * @return {string}
 */
_XML.EntityRef.prototype.getValue = function() {};

/**
 * @param {string} name
 * @return {_XML.EntityRef}
 */
_XML.EntityRef.prototype.setName = function(name) {};

/**
 * @param {string} id
 * @return {_XML.EntityRef}
 */
_XML.EntityRef.prototype.setPublicId = function(id) {};

/**
 * @param {string} id
 * @return {_XML.EntityRef}
 */
_XML.EntityRef.prototype.setSystemId = function(id) {};

/**
 * Class Format
 * @constructor
 */
_XML.Format = function() {};

/**
 * @param {(_XML.Document|_XML.Element)} arg1
 * @return {string}
 */
_XML.Format.prototype.format = function(arg1) {};

/**
 * @param {string} encoding
 * @return {_XML.Format}
 */
_XML.Format.prototype.setEncoding = function(encoding) {};

/**
 * @param {string} indent
 * @return {_XML.Format}
 */
_XML.Format.prototype.setIndent = function(indent) {};

/**
 * @param {string} separator
 * @return {_XML.Format}
 */
_XML.Format.prototype.setLineSeparator = function(separator) {};

/**
 * @param {boolean} omitDeclaration
 * @return {_XML.Format}
 */
_XML.Format.prototype.setOmitDeclaration = function(omitDeclaration) {};

/**
 * @param {boolean} omitEncoding
 * @return {_XML.Format}
 */
_XML.Format.prototype.setOmitEncoding = function(omitEncoding) {};

/**
 * Class Namespace
 * @constructor
 */
_XML.Namespace = function() {};

/**
 * @return {string}
 */
_XML.Namespace.prototype.getPrefix = function() {};

/**
 * @return {string}
 */
_XML.Namespace.prototype.getURI = function() {};

/**
 * Class ProcessingInstruction
 * @constructor
 */
_XML.ProcessingInstruction = function() {};

/**
 * @return {_XML.Content}
 */
_XML.ProcessingInstruction.prototype.detach = function() {};

/**
 * @return {string}
 */
_XML.ProcessingInstruction.prototype.getData = function() {};

/**
 * @return {_XML.Element}
 */
_XML.ProcessingInstruction.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.ProcessingInstruction.prototype.getTarget = function() {};

/**
 * @return {string}
 */
_XML.ProcessingInstruction.prototype.getValue = function() {};

/**
 * Class Text
 * @constructor
 */
_XML.Text = function() {};

/**
 * @param {string} text
 * @return {_XML.Text}
 */
_XML.Text.prototype.append = function(text) {};

/**
 * @return {_XML.Content}
 */
_XML.Text.prototype.detach = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Text.prototype.getParentElement = function() {};

/**
 * @return {string}
 */
_XML.Text.prototype.getText = function() {};

/**
 * @return {string}
 */
_XML.Text.prototype.getValue = function() {};

/**
 * @param {string} text
 * @return {_XML.Text}
 */
_XML.Text.prototype.setText = function(text) {};

/**
 * Interface Content
 * @constructor
 */
_XML.Content = function() {};

/**
 * @return {_XML.Cdata}
 */
_XML.Content.prototype.asCdata = function() {};

/**
 * @return {_XML.Comment}
 */
_XML.Content.prototype.asComment = function() {};

/**
 * @return {_XML.DocType}
 */
_XML.Content.prototype.asDocType = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Content.prototype.asElement = function() {};

/**
 * @return {_XML.EntityRef}
 */
_XML.Content.prototype.asEntityRef = function() {};

/**
 * @return {_XML.ProcessingInstruction}
 */
_XML.Content.prototype.asProcessingInstruction = function() {};

/**
 * @return {_XML.Text}
 */
_XML.Content.prototype.asText = function() {};

/**
 * @return {_XML.Content}
 */
_XML.Content.prototype.detach = function() {};

/**
 * @return {_XML.Element}
 */
_XML.Content.prototype.getParentElement = function() {};

/**
 * @return {_XML.ContentType}
 */
_XML.Content.prototype.getType = function() {};

/**
 * @return {string}
 */
_XML.Content.prototype.getValue = function() {};

/**
 * Enum ContentType
 * @constructor
 */
_XML.ContentType = function() {};

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.CDATA;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.COMMENT;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.DOCTYPE;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.ELEMENT;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.ENTITYREF;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.PROCESSINGINSTRUCTION;

/**
 * @type {_XML.ContentType}
 */
_XML.ContentType.prototype.TEXT;
