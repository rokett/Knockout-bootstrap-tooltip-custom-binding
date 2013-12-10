/**
 * Custom Knockout binding handler for dealing with the Twitter Bootstrap tooltip component (http://getbootstrap.com/javascript/#tooltips)
 *
 * Usage
 * Add data-bind="tooltip: {title: 'this is a title'}" to the element you want to enable the tooltip for.
 * In this example we have added an optional title attribute which will be used for the tooltip options.
 * You can pass in any accepted Bootstrap option for the tooltip.  For example the following will set the placement to the left.
 * data-bind="tooltip: {title: 'this is a title', placment: 'left'}"
 *
 * Requires jQuery as Bootstrap requires jQuery for modals.
 */
ko.bindingHandlers.tooltip = {
    init: function(element, valueAccessor, allBindingsAccessor) {
        var options = ko.utils.unwrapObservable(valueAccessor());
        var defaultOptions = {};

        options = $.extend(true, {}, defaultOptions, options);

        $(element).tooltip(options);
    }
};
