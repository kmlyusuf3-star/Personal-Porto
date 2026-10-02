// 1. INTERFACE: Kita mendefinisikan "Cetakan Baku" untuk kotak surat kita.
interface ContactMessage {
    name: string;
    email: string;
    message: string;
    date: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // A. Copot stiker 'active-link' dari semua menu
            navLinks.forEach(item => item.classList.remove('active-link'));
            
            // B. Tempelkan stiker 'active-link' ke menu yang baru saja diklik
            link.classList.add('active-link');
        });
    });
    
    // 2. TYPE CASTING: Memberitahu TypeScript bahwa ini adalah elemen formulir HTML
    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;

    if (contactForm) {
        contactForm.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            // Menspesifikasikan tipe input agar TS tidak bingung
            const nameInput = document.getElementById('senderName') as HTMLInputElement;
            const emailInput = document.getElementById('senderEmail') as HTMLInputElement;
            const messageInput = document.getElementById('senderMessage') as HTMLTextAreaElement;

            // 3. Menggunakan "Cetakan Baku"
            const newMessage: ContactMessage = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value,
                date: new Date().toLocaleString()
            };

            // Mengambil brankas (Local Storage)
            const existingData: string | null = localStorage.getItem('portfolio_messages');
            
            // Memastikan data ditarik dengan benar
            let storedMessages: ContactMessage[] = existingData ? JSON.parse(existingData) : [];

            storedMessages.push(newMessage);
            localStorage.setItem('portfolio_messages', JSON.stringify(storedMessages));

            alert(`Terima kasih ${newMessage.name}! Pesan Anda telah berhasil dikirim dengan sistem TypeScript.`);
            contactForm.reset();
        });
    }
});