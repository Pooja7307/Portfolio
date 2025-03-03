function toggleMenu() {
    let nav = document.getElementById('navMenu');
    nav.classList.toggle('show-nav');
}
document.getElementById("resume-button").addEventListener("click", function(event) {
    event.preventDefault(); 

    
    let newTab = window.open("./assets/Resume-WebEngineer.pdf", "_blank");

    
    setTimeout(() => {
        let link = document.createElement("a");
        link.href = "./assets/Resume-WebEngineer.pdf"; // Resume file path
        link.download = "My_Resume.pdf"; // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000); // Delay to ensure new tab opens first
});

