#Knockout Bootstrap 3 Tooltip custom binding

Custom binding for Bootstrap's Tooltip component (http://getbootstrap.com/javascript/#tooltips)

##Pre-requisites
1. jQuery 1.9+ (Bootstrap requires this)
2. Bootstrap with the tooltip compoenents
3. Knockout
4. Tooltip custom binding (this file)

Load these scripts into your HTML file in the following order:

    <script src="includes/js/jquery-1.9.1.min.js"></script>
    <script src="includes/js/bootstrap.min.js"></script>
    <script src="includes/js/knockout-3.0.0.js"></script>
    <script src="includes/js/knockout.bindings.bootstrap.tooltip.min.js"></script>

Don't forget the Bootstrap CSS file.

    <link rel="stylesheet" href="includes/css/bootstrap.min.css" media="screen" />

##How do I use it?
You add a binding to the HTML element you wish to add the tooltip for.  The options are pretty self explanatory.

###Data Binding
    data-bind="tooltip: {title: 'this is a title', placment: 'left'}"

You can add as many, or as few, of the Bootstrap Tooltip options as you want.  If you're not overriding a default option then don't bother including it.
