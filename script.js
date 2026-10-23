// This function runs when the user clicks
// the "Create my PlanSetGo" button.
function createAdventure() {

  // Gets the option selected in the time dropdown
  const time = document.getElementById("time").value;

  // Gets the option selected in the interest dropdown
  const interest = document.getElementById("interest").value;

  // Gets the option selected in the budget dropdown
  const budget = document.getElementById("budget").value;

  // Finds the results section in the HTML
  // and inserts the recommendation content inside it.
  document.getElementById("results").innerHTML = `

    <!-- Recommendation card -->
    <div class="result-card">

      <h2>Your PlanSetGo adventure</h2>

      <!-- Displays the user's selected preferences -->
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Budget:</strong> ${budget}</p>

      <!-- Displays the suggested itinerary -->
      <h3>Your suggested plan</h3>
      <p>☕ Visit a local café</p>
      <p>🎨 Explore a nearby creative or cultural spot</p>
      <p>📸 Complete a photo challenge together</p>

      <!-- Displays people with similar interests -->
      <h3>People with similar plans</h3>

      <!-- First sample person -->
      <div class="person">
        <strong>Maya</strong>
        <p>Also interested in ${interest}</p>
        <button>Join Maya's plan</button>
      </div>

      <!-- Second sample person -->
      <div class="person">
        <strong>Jordan</strong>
        <p>Planning a similar ${time} adventure</p>
        <button>Connect with Jordan</button>
      </div>

    </div>
  `;
}

