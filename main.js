// function showSection(section) {
//     document.getElementById('home-section').classList.add('hidden');
//     document.getElementById('search-section').classList.add('hidden');
    
//     if(section === 'home') document.getElementById('home-section').classList.remove('hidden');
//     if(section === 'search') document.getElementById('search-section').classList.remove('hidden');
// }

// async function askGemini() {
//     const uzbWord = document.getElementById('uzbWord').value;
//     const resultBox = document.getElementById('ai-response');
//     const mnemonicOutput = document.getElementById('mnemonicText');
//     const engWordOutput = document.getElementById('engWord');

//     if(!uzbWord) return alert("So'z kiriting!");

//     resultBox.classList.remove('hidden');
//     mnemonicOutput.innerText = "AI o'ylamoqda...";

//     // PROMPT logikasi:
//     // AI ga shunday buyruq beramiz: 
//     // "${uzbWord}" so'zini inglizchaga tarjima qil, talaffuzini yoz 
//     // va uni eslab qolish uchun o'zbekcha qiziqarli mnemonika yarat.

//     setTimeout(() => {
//         // Bu yerda Gemini API javobini kutamiz
//         // Hozircha misol:
//         engWordOutput.innerText = "Apple";
//         mnemonicOutput.innerHTML = `<b>Mnemonika:</b> "Olma" - Inglizcha "Apple". <b>Eslab qolish:</b> Olmani yeb turib "Epchil" (Apple) bo'lib ketdim!`;
//     }, 2000);
// }





        function changeScreen(screenId) {
            // Hamma ekranlarni yashirish
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));

            // Tanlangan ekranni ko'rsatish
            setTimeout(() => {
                document.getElementById(screenId).classList.add('active');
            }, 100);
        }
