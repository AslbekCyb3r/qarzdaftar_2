function navigateToAdmin() {
        console.log('Navigating to admin page');

    window.location.replace('../adminlar/admin.html');
}

function navigateToClients() {
    console.log('Navigating to clients page');
    
    window.location.replace('../clientss/clients.html');
}


function navigateTodepts() {
    window.location.replace('../depts/depts.html');
}


function navigateTopayments() {
    window.location.replace('../payments/payments.html');
}



        const colors = ["#FFD700", "#FFF700", "#FFC300"];
        for (let i = 0; i < 20; i++) {
            const dollar = document.createElement('div');
            dollar.classList.add('dollar');
            dollar.style.left = `${Math.random() * 100}%`;
            dollar.style.animationDuration = `${3 + Math.random() * 5}s`;
            dollar.style.fontSize = `${20 + Math.random() * 20}px`;
            dollar.textContent = "$";
            dollar.style.color = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(dollar);
        }
