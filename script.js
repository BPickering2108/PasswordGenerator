document.addEventListener("DOMContentLoaded", function() {
    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("lengthValue");
    const useSymbols = document.getElementById("useSymbols");
    const useNumbers = document.getElementById("useNumbers");
    const passwordField = document.getElementById("password");
    const copyBtn = document.getElementById("copyBtn");
    const revealBtn = document.getElementById("revealBtn");
    const generateBtn = document.getElementById("generateBtn");

    // Update length display
    lengthSlider.addEventListener("input", function() {
        lengthValue.textContent = lengthSlider.value;
    });

    // Function to fetch password
    function generatePassword() {
        const length = lengthSlider.value;
        const symbols = useSymbols.checked;
        const numbers = useNumbers.checked;
        const excludeChars = document.getElementById("excludeChars").value;
    
        fetch(`/generate?length=${length}&use_symbols=${symbols}&use_numbers=${numbers}&exclude_chars=${encodeURIComponent(excludeChars)}`)
            .then(response => response.json())
            .then(data => {
                passwordField.value = "*".repeat(length);
                passwordField.dataset.password = data.password;
            })
            .catch(error => {
                console.error("Error fetching password:", error);
                passwordField.value = "Error generating password";
            });
    }
    

    // Attach event listener to generate button
    generateBtn.addEventListener("click", generatePassword);

    // Copy to clipboard
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(passwordField.dataset.password);
        alert("Password copied!");
    });

    // Reveal password
    revealBtn.addEventListener("click", function() {
        if (passwordField.value.startsWith("*")) {
            passwordField.value = passwordField.dataset.password;
            revealBtn.textContent = "Hide";
        } else {
            passwordField.value = "*".repeat(lengthSlider.value);
            revealBtn.textContent = "Reveal";
        }
    });
});