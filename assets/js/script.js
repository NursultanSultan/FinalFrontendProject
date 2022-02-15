window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        header.style.padding="10px 0";
        header.style.backgroundColor="#212529";
        headerLogo.style.width="140px";
    }else {
        header.style.padding="15px 0";
        
        header.style.backgroundColor="transparent";
        headerLogo.style.width="200px";
    }
})