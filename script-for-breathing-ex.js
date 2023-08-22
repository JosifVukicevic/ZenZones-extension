const bigCircle = document.querySelector('.big-circle');
        const smallCircle = document.querySelector('.small-circle');
        const instruction = document.querySelector('.instruction');

        let angle = 0;
        let interval;

        bigCircle.addEventListener('click', function() {
            if (interval) {
                clearInterval(interval);
                instruction.textContent = "Click to Start";
                return;
            }

            let phase = 0;
            let count = 4;

            instruction.textContent = `Breathe in ${count} seconds`;

            interval = setInterval(() => {
                angle += 18.95;
                let x = 135 * Math.cos(angle * Math.PI / 180);
                let y = 135 * Math.sin(angle * Math.PI / 180);
                smallCircle.style.transform = `translate(${x}px, ${y}px)`;

                count--;

                if (count < 0) {
                    phase++;
                    if (phase === 1) {
                        count = 7;
                        instruction.textContent = `Hold for ${count} seconds`;
                    } else if (phase === 2) {
                        count = 8;
                        instruction.textContent = `Breathe out ${count} seconds`;
                    } else {
                        clearInterval(interval);
                        instruction.textContent = "Click to Start";
                        return;
                    }
                } else {
                    if (phase === 0) {
                        instruction.textContent = `Breathe in ${count} seconds`;
                    } else if (phase === 1) {
                        instruction.textContent = `Hold for ${count} seconds`;
                    } else if (phase === 2) {
                        instruction.textContent = `Breathe out ${count} seconds`;
                    }
                }
            }, 1000);
        });