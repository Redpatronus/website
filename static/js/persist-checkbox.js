document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".persist-checkbox").forEach(checkbox => {
        const checkboxId = checkbox.id;
        checkbox.checked = localStorage.getItem(checkboxId) === "true";

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkboxId, this.checked);
        });
    });
});