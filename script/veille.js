const myFeeds = [
                "https://rss.app/feeds/kHtUfqEMbmakiKHB.xml", // Microsoft
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FTheHackersNews" // Cyber
            ];

            let currentSlide = 0;
            let totalSlides = 0;

            async function initJournal() {
                const slider = document.getElementById('carousel-slider');
                let allArticles = [];

                for (const url of myFeeds) {
                    try {
                        const response = await fetch(url.includes('rss2json') ? url : `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
                        const data = await response.json();
                        if (data.status === 'ok') {
                            allArticles = [...allArticles, ...data.items.slice(0, 4)];
                        }
                    } catch (e) { console.error("Erreur flux", e); }
                }

                // Mélanger les articles pour un effet journal varié
                allArticles.sort(() => Math.random() - 0.5);
                totalSlides = allArticles.length;

                slider.innerHTML = allArticles.map(item => {
                    // On cherche une image : soit 'enclosure', soit dans la description
                    let img = item.enclosure.link || item.thumbnail || 'https://via.placeholder.com/800x450?text=Actualit%C3%A9+Informatique';
                    
                    return `
                        <div class="slide">
                            <img src="${img}" alt="Image actu">
                            <div class="slide-content">
                                <span class="tag">Dernière Minute</span>
                                <h3>${item.title}</h3>
                                <p>${new Date(item.pubDate).toLocaleDateString()} - <a href="${item.link}" target="_blank" style="color:#fff; text-decoration:underline;">Lire l'article</a></p>
                            </div>
                        </div>
                    `;
                }).join('');

                // Lancer le défilement automatique
                setInterval(() => moveSlide(1), 5000);
            }

            function moveSlide(direction) {
                const slider = document.getElementById('carousel-slider');
                currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            }

            initJournal();