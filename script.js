document.getElementById("tracking-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const trackingNumber = document.getElementById("tracking-number").value;
    const resultDiv = document.getElementById("tracking-result");
  
    // Mock Tracking Results
    if (trackingNumber === "12345") {
      resultDiv.textContent = "Package Status: Delivered (01/07/2025)";
    } else if (trackingNumber === "67890") {
      resultDiv.textContent = "Package Status: In Transit (Expected Delivery: 01/10/2025)";
    } else {
      resultDiv.textContent = "Tracking Number not found. Please check and try again.";
    }
  })