document.addEventListener('DOMContentLoaded', () => {
    const followGrad = document.getElementById('follow-gradient');
    const gradText = document.querySelector('#follow-gradient .grad-text');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    gradText.textContent = generateRandomString(20_000);

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    var rect = followGrad.getBoundingClientRect();


    document.addEventListener("mousemove", function (event) {
        rect = followGrad.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
        if (!isMoving) {
            isMoving = true;
            gradText.textContent = generateRandomString(10_000);

            requestAnimationFrame(updatePosition);
        }
    });

    function updatePosition() {
        const currentPosition = `${mouseX - (rect.width / 2)}px ${mouseY - (rect.height / 2)}px`;
        followGrad.style.maskPosition = currentPosition;
        followGrad.style.backgroundPosition = currentPosition;
        isMoving = false;
    }

    function generateRandomString(length) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
});
