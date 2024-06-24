document.addEventListener("keydown", e => {
        e.preventDefault();
        if(
          e.key.toLowerCase() === "w"
          && e.ctrlKey
         
        ) {
          window.location.href = "/Vault/Vault/resources/app/Impero/index.html"
        }
      });