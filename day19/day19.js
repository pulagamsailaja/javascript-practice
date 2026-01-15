const factPara = document.getElementById("fact");
const btn = document.getElementById("btn");

// Function to fetch cat fact
async function getCatFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        factPara.textContent = data.fact;
    } catch (error) {
        factPara.textContent = "Oops! Could not load fact.";
        console.error(error);
    }
}

// Event listener
btn.addEventListener("click", getCatFact);

// Optional: fetch a fact when page loads
window.addEventListener("load", getCatFact);
