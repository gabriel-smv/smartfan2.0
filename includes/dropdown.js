// Prevent closing from click inside dropdown
    
document.querySelectorAll('.nav-dropdown').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})

document.querySelectorAll('.user-dropdown').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})

document.querySelectorAll('.fan-dropdown').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})

document.querySelectorAll('.navbar-mobile-dropdown').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})

document.querySelectorAll('.filter-list-dropdown').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})