/* TourGO static/GitHub Pages notification cleanup.
   PHP pages used server-rendered empty alert containers. On GitHub Pages those
   containers have no message, so remove them until a real client-side message exists. */
(function () {
    function removeEmptyServerAlerts() {
        document.querySelectorAll('.php-message, .alerts-container .alert, body > .alert, main > .alert').forEach(function (el) {
            // An alert is meaningful if it contains actual text. Icons alone do not count.
            if (el.textContent.trim() === '') {
                el.remove();
            }
        });

        document.querySelectorAll('.alerts-container').forEach(function (container) {
            if (!container.querySelector('.alert')) {
                container.remove();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeEmptyServerAlerts);
    } else {
        removeEmptyServerAlerts();
    }
})();
