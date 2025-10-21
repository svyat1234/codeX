document.addEventListener('DOMContentLoaded', () => {

    // SWIPERS

    if (document.querySelector('.swiper-tasks')) {
    const tasksSwiper = new Swiper('.swiper-tasks', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        // slidesPerGroup: 1,

        // If we need pagination
        pagination: {
            clickable: true,
            el: '.swiper-tasks .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-tasks .swiper-button-next',
            prevEl: '.swiper-tasks .swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-tasks .swiper-scrollbar',
        },

        breakpoints: {
            400: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5
            }
        }

    });
    }
    
    if (document.querySelector('.services__slider')) {
    const servicesSwiper = new Swiper('.services__slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        // slidesPerGroup: 1,

        // If we need pagination
        pagination: {
            clickable: true,
            el: '.services__slider .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.services__slider .swiper-button-next',
            prevEl: '.services__slider .swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.services__slider .swiper-scrollbar',
        },

        breakpoints: {
            400: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4
            }
        }

    });
    }

    if (document.querySelector('.swiper-projects')) {
    const projectsSwiper = new Swiper('.swiper-projects', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // slidesPerGroup: 1,

        thumbs: {
            swiper: {
                el: '.thumbnail-container',
                slidesPerView: 2,
                freeMode: true,
                watchSlidesProgress: true,
                spaceBetween: 15,
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }
            },
        },


    });
    }

    if (document.querySelector('.blogs__swiper')) {
    const blogsSwiper = new Swiper('.blogs__swiper', {
         // Optional parameters
         direction: 'horizontal',
         loop: true, // бесконечный слайдер
         slidesPerView: 2.5,
         spaceBetween: 50,
         // slidesPerGroup: 1,

         // Автоматический скролл
         autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },

         // If we need pagination
          pagination: {
             clickable: true,
             el: '.blogs__swiper .swiper-pagination',
          },

         // And if we need scrollbar
         scrollbar: {
             el: '.swiper-tasks .swiper-scrollbar',
         },
         speed: 800, // миллисекунды (например, 800 = 0.8 секунды)

    });
    }

    if (document.querySelector('.reviews-swiper')) {
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Интервал между автопрокрутками
            disableOnInteraction: false,
        },
        speed: 800,
        breakpoints: {
            1400: {
                slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1.5
            },
        },
    });
    }

    if (document.querySelector('.real-projects__swiper')) {
    const realProjectsSwiper = new Swiper('.real-projects__swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.real-projects__swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 16 },
            586: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            1400: { slidesPerView: 3, spaceBetween: 20 }
        }
    });
    }
    

    // CORPORATE-WEBSITE.HTML 

    // Параллакс изображения в первой секции

    function initParallaxImage(selector) {
        if (!document.querySelector(selector)) return;

        const parallaxImage = document.querySelector(selector);
        const maxOffset = 25;

        document.addEventListener('mousemove', (e) => {
            const rect = parallaxImage.getBoundingClientRect();

            const relativeX = e.clientX - rect.left;
            const relativeY = e.clientY - rect.top;

            const normalizedX = Math.min(Math.max(relativeX / rect.width, 0), 1);
            const normalizedY = Math.min(Math.max(relativeY / rect.height, 0), 1);

            const offsetX = (0.5 - normalizedX) * maxOffset * 2;
            const offsetY = (0.5 - normalizedY) * maxOffset * 2;

            gsap.to(parallaxImage, {
                duration: 0.5,
                x: offsetX,
                y: offsetY,
                ease: 'power2.out'
            });
        });
    }

    function explanationsCardsAnimation() {

        document.querySelectorAll('.explanations__card').forEach(card => {
            card.addEventListener('click', function() {
                // Закрываем все другие карточки
                document.querySelectorAll('.explanations__card').forEach(otherCard => {
                    if (otherCard !== this && otherCard.classList.contains('explanations__card_active')) {
                        otherCard.style.removeProperty('--dynamic-height');
                        otherCard.classList.remove('explanations__card_active');
                    }
                });

                // Открываем/закрываем текущую карточку
                if (this.classList.contains('explanations__card_active')) {
                    this.style.removeProperty('--dynamic-height');
                } else {
                    const contentHeight = this.scrollHeight;
                    this.style.setProperty('--dynamic-height', `${contentHeight}px`);
                }

                this.classList.toggle('explanations__card_active');
            });
        });
    }

    //  Можно вызывать функцию, передавая классы для других карточек. Либо, блок с карточками сделать универсальным везде, тогда не надо усложнять js

    function questionsAccordion() {
        const cards = document.querySelectorAll('.questions__card');
        const minHeight = 131;
        cards.forEach(card => {
            const textWrap = card.querySelector('.questions__card-text-wrap');
            // Сбросить начальное состояние
            if (card.classList.contains('questions__card--active')) {
                card.style.maxHeight = card.scrollHeight + 'px';
                textWrap.style.opacity = 1;
            } else {
                card.style.maxHeight = minHeight + 'px';
                textWrap.style.opacity = 0;
            }
            card.addEventListener('click', function() {
                const isActive = card.classList.contains('questions__card--active');
                // Закрыть все
                cards.forEach(c => {
                    c.classList.remove('questions__card--active');
                    const wrap = c.querySelector('.questions__card-text-wrap');
                    c.style.maxHeight = minHeight + 'px';
                    wrap.style.opacity = 0;
                });
                // Открыть текущую, если была закрыта
                if (!isActive) {
                    card.classList.add('questions__card--active');
                    requestAnimationFrame(() => {
                        card.style.maxHeight = card.scrollHeight + 'px';
                    });
                    textWrap.style.opacity = 1;
                }
            });
        });
        // Обновлять maxHeight при ресайзе (адаптивность)
        window.addEventListener('resize', () => {
            document.querySelectorAll('.questions__card--active').forEach(card => {
                card.style.maxHeight = card.scrollHeight + 'px';
            });
        });
    }

    function protectionAdvantagesAnimation() {
        if (!document.querySelector('.protection-advantages')) return;

        const cards = document.querySelectorAll('.protection-advantages__card');
        const items = document.querySelectorAll('.protection-advantages__content-item');

        cards.forEach((card, index) => {
            card.addEventListener('click', function() {
                // Убираем активные классы со всех карточек
                cards.forEach((c, i) => {
                    c.classList.remove('protection-advantages__card--active');
                    c.classList.remove('protection-advantages__card--active-next');
                    
                    // Добавляем --active-next к следующей карточке
                    if (i === index + 1) {
                        c.classList.add('protection-advantages__card--active-next');
                    }
                });

                // Добавляем активный класс к текущей карточке
                this.classList.add('protection-advantages__card--active');

                // Находим текущий активный айтем
                const currentActiveItem = document.querySelector('.protection-advantages__content-item--active');
                const nextItem = items[index];

                // Если это тот же айтем, ничего не делаем
                if (currentActiveItem === nextItem) return;

                // Анимация затемнения текущего айтема до 60%
                gsap.to(currentActiveItem, {
                    opacity: 0.6,
                    duration: 0.3,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        currentActiveItem.classList.remove('protection-advantages__content-item--active');
                        
                        // Подготовка нового айтема
                        gsap.set(nextItem, {
                            opacity: 0.6
                        });
                        
                        nextItem.classList.add('protection-advantages__content-item--active');
                        
                        // Анимация появления нового айтема
                        gsap.to(nextItem, {
                            opacity: 1,
                            duration: 0.3,
                            ease: 'power2.inOut'
                        });
                    }
                });
            });
        });
    }

    

    initParallaxImage('.corporate-promo__image')
    initParallaxImage('.protection-promo__image')
    explanationsCardsAnimation()
    questionsAccordion()
    protectionAdvantagesAnimation()

    // // АНИМАЦИЯ КАРТОЧЕК КЛИЕНТОВ
    // function animateClientsCards() {
    //     const wrap = document.querySelector('.clients__cards-wrap');
    //     if (!wrap) return;
    //     const columns = wrap.querySelectorAll('.clients__cards');
    //     if (columns.length < 2) return;
    //     const [leftCol, rightCol] = columns;

    //     // Настройки
    //     const speedLeft = 0.2; // px per frame
    //     const speedRight = 0.3; // px per frame (быстрее)

    //     // Для зацикливания: дублируем карточки
    //     function duplicateCards(col) {
    //         const cards = Array.from(col.children);
    //         cards.forEach(card => {
    //             const clone = card.cloneNode(true);
    //             clone.classList.add('clients__card--clone');
    //             col.appendChild(clone);
    //         });
    //     }
    //     duplicateCards(leftCol);
    //     duplicateCards(rightCol);

    //     let leftOffset = 0;
    //     let rightOffset = 0;
    //     const colHeight = leftCol.scrollHeight / 2; // высота одной "колонки" (до дублирования)

    //     function animate() {
    //         leftOffset += speedLeft;
    //         rightOffset += speedRight;

    //         if (leftOffset >= colHeight) leftOffset = 0;
    //         if (rightOffset >= colHeight) rightOffset = 0;

    //         leftCol.style.transform = `translateY(-${leftOffset}px)`;
    //         rightCol.style.transform = `translateY(-${rightOffset}px)`;

    //         requestAnimationFrame(animate);
    //     }
    //     animate();
    // }

    // animateClientsCards();

    function budgetRangeAnimation() {
        if (document.querySelector('.feedback__budget-input')) {
            const range = document.querySelector('.feedback__budget-input'),
                  sum = document.querySelector('.feedback__budget-sum'),
                  dot = document.querySelector('.feedback__budget-dot');

            const MIN_BUDGET = 100000; // Значение можно менять
            const MAX_BUDGET = 1000000; // Значение можно менять

            let currentAnimation = null;

            function formatBudget(value) {
                const safeValue = Math.max(MIN_BUDGET, Math.min(value, MAX_BUDGET));
                return 'от ' + new Intl.NumberFormat('ru-RU').format(safeValue) + ' ₽';
            }

            function getCorrectBudget() {
                // Новая формула для пересчета из процентов в реальный бюджет
                const percent = range.value; // 0-100
                return Math.round(MIN_BUDGET + (percent / 100) * (MAX_BUDGET - MIN_BUDGET));
            }

            function animateBudgetDisplay(startValue, endValue, duration = 400) {
                if (currentAnimation) {
                    cancelAnimationFrame(currentAnimation);
                }

                const startTime = performance.now();
                
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const currentValue = Math.round(startValue + (endValue - startValue) * progress);
                    
                    if (currentValue >= MIN_BUDGET && currentValue <= MAX_BUDGET) {
                        sum.textContent = formatBudget(currentValue);
                    }

                    if (progress < 1) {
                        currentAnimation = requestAnimationFrame(update);
                    } else {
                        currentAnimation = null;
                        sum.textContent = formatBudget(endValue);
                    }
                }

                currentAnimation = requestAnimationFrame(update);
            }

            const updateElementsPosition = () => {
                const value = parseFloat(range.value);
                const min = parseFloat(range.min); // 0
                const max = parseFloat(range.max); // 100
                const dotWidth = 17;

                const percent = (value - min) / (max - min);
                
                dot.style.left = `calc(${percent * 100}% - ${dotWidth / 2}px)`;
                sum.style.left = `calc(${percent * 100}% - ${dotWidth / 2}px)`;
            }

            // Установка начального значения
            sum.textContent = formatBudget(getCorrectBudget());

            range.addEventListener('input', () => {
                const newBudget = getCorrectBudget();
                const currentBudget = parseInt(sum.textContent.replace(/\D/g, ''), 10) || MIN_BUDGET;
                
                if (newBudget >= MIN_BUDGET && newBudget <= MAX_BUDGET) {
                    animateBudgetDisplay(currentBudget, newBudget);
                }
                updateElementsPosition();
            });

            // Инициализация начальной позиции
            updateElementsPosition();
        }
    }

    // Вызов функции
    budgetRangeAnimation();

})