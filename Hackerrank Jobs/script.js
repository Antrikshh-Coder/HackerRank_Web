function goToJobDetails() {
  window.location.href = 'job-details.html';
}
<div class="card" onclick="window.location.href='card1.html'">
  <p class="company">Adeeba E-Services Private Limited</p>
  <p class="title">"Great Career Opportunity in Adeeba ."Inbound Tech Support</p>
  <p class="location">India</p>
</div>
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const isDark = localStorage.getItem("darkMode") === "true";

  // Apply saved theme
  if (isDark) {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", this.checked);
  });
});
function openLogin(type) {
  document.getElementById('loginModal').style.display = 'block';
  switchTab(type);
}

function switchTab(type) {
  const candidateTab = document.getElementById('candidateTab');
  const recruiterTab = document.getElementById('recruiterTab');
  const candidateForm = document.getElementById('candidateForm');
  const recruiterForm = document.getElementById('recruiterForm');

  if (type === 'candidate') {
    candidateTab.classList.add('active');
    recruiterTab.classList.remove('active');
    candidateForm.classList.remove('hidden');
    recruiterForm.classList.add('hidden');
    document.getElementById('loginTitle').innerText = 'Candidate Login';
  } else {
    recruiterTab.classList.add('active');
    candidateTab.classList.remove('active');
    recruiterForm.classList.remove('hidden');
    candidateForm.classList.add('hidden');
    document.getElementById('loginTitle').innerText = 'Recruiter Login';
  }
}
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});