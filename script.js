// Function to generate random stats
function getRandomStat(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to enter the world and generate random stats
function enterWorld() {
    const playerName = document.getElementById("playerName").value;
    const error = document.getElementById("error");
    const stats = document.getElementById("stats");

    if (playerName === "") {
        error.style.display = "block";
        stats.style.display = "none";
        return;
    }

    // Hide error if name is entered
    error.style.display = "none";

    // Show stats section
    stats.style.display = "block";

    // Set player name
    document.getElementById("name").innerText = "Name: " + playerName;

    // Randomly generate stats
    document.getElementById("level").innerText = getRandomStat(1, 1000);
    document.getElementById("race").innerText = ["Jawa", "Sunda", "Rohingya", "Manusia", "Anomali","GodAnomali"][getRandomStat(0, 5)];
    document.getElementById("guild").innerText = ["Tuma Evos", "PPQ HOSHI", "SONIC", "PSHT", "Buzzer Abah", "Rohingya", "Bocil Windah", "Ace Anthem Universe", "Lasun", "Suki"][getRandomStat(0, 9)];
    document.getElementById("role").innerText = ["Swordsman", "Archer", "Mage", "Paladin", "Thieft", "Maid"][getRandomStat(0, 5)];
    document.getElementById("titel").innerText = ["Lolicon", "Korupsi", "Milf Hunter", "Pemain Genshin(Gem bok3p)", "Geng suki", "Ketua Guild", "Pedo"][getRandomStat(0, 6)];
    document.getElementById("region").innerText = ["Konoha", "Land Of Dawn", "Kota Sunken", "Windy Plains"][getRandomStat(0, 3)];
    document.getElementById("strength").innerText = getRandomStat(3, 10000);
    document.getElementById("health").innerText = getRandomStat(1, 5000);
    document.getElementById("mana").innerText = getRandomStat(0, 1000);
    document.getElementById("agility").innerText = getRandomStat(1, 1000);
    
    // Assign rank randomly from F to SSS
    document.getElementById("rank").innerText = ["F", "E", "D", "C", "B", "A", "S", "SS", "SSS", "God", "Absolute"][getRandomStat(0, 10)];
}