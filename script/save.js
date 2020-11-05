if (window.innerWidth > 768) {
                    popUp.style.display = "block";
                    popUpContent.style.opacity = "0";
                    let x = 0;
                    const timer = setInterval(() => {
                        x += 0.055;
                        popUpContent.style.opacity = `${x}`;
                        if (popUpContent.style.opacity >= "1.0") {
                            clearInterval(timer);
                        }
                    }, 50);
                } else {
                    popUp.style.display = "block";
                    popUpContent.style.opacity = "1.0";
                }