function claim() {
  let wallet = document.getElementById("wallet").value;

  if(wallet === "") {
    document.getElementById("msg").innerText = "Enter wallet address!";
    return;
  }

  let lastClaim = localStorage.getItem(wallet);

  let now = new Date().getTime();

  if(lastClaim && (now - lastClaim) < 3600000) {
    document.getElementById("msg").innerText = "⏳ Come back after 1 hour!";
  } else {
    localStorage.setItem(wallet, now);
    document.getElementById("msg").innerText = "✅ Reward claimed successfully!";
  }
}
