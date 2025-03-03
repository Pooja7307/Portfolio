function toggleMenu() {
    let nav = document.getElementById('navMenu');
    nav.classList.toggle('show-nav');
}
document.getElementById("resume-button").addEventListener("click", function(event) {
    event.preventDefault(); 

    
    let newTab = window.open("./assets/PoojaGautam-WebEngineer-RSwc.pdf", "_blank");

    
    setTimeout(() => {
        let link = document.createElement("a");
        link.href = "./assets/PoojaGautam-WebEngineer-RSwc.pdf"; 
        link.download = "PoojaGautam-WebEngineer-RSwc.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000); 
});

