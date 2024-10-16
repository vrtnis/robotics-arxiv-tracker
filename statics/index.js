/* Expand/Collapse with TAB key */
var expanded = false;
document.onkeydown = function (e) {
    if (e.keyCode === 9) {
        expanded = !expanded;
        document.querySelectorAll("details").forEach(detail => detail.open = expanded);
        return false;
    }
};

/* Expand the "Robotics" section of the latest date by default */
document.addEventListener("DOMContentLoaded", function () {
    const dayContainers = document.querySelectorAll('.day-container');
    if (dayContainers.length > 0) {
        const latestContainer = dayContainers[0];
        const roboticsSection = Array.from(latestContainer.querySelectorAll('summary')).find(summary => summary.textContent.trim().startsWith('Robotics'));
        if (roboticsSection) {
            roboticsSection.parentElement.setAttribute('open', true);
        }
    }
});

/* Switch Theme */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("theme-icon").className = "ri-sun-line";
        localStorage.setItem('theme', 'light'); // add this
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("theme-icon").className = "ri-moon-line";
        localStorage.setItem('theme', 'dark'); // add this
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

const timestamp = document.getElementById("build-timestamp");
const timestamp_local = new Date(timestamp.getAttribute("datetime")).toLocaleString();

const badge = document.getElementById("build-timestamp-badge");
// badge.src = `https://img.shields.io/github/workflow/status/mlnlp-world/myarxiv/Update?=${timestamp_local}&style=for-the-badge`
