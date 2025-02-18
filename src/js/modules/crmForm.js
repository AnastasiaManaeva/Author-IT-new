function crmForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.querySelector('.autor__go__work');
        const popup = document.getElementById('popup-form');
        const closeBtn = document.querySelector('.popup-close');

        button.addEventListener('click', function (e) {
            e.preventDefault(); 
            popup.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', function () {
            popup.classList.add('hidden');
        });

        window.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.classList.add('hidden');
            }
        });
    });
}

export default crmForm;