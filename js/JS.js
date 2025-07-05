//Navbar
  document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.custom-toggler');
    const menu = document.getElementById('navbarSupportedContent');

    toggler.addEventListener('click', function () {
      toggler.classList.toggle('active');
    });

    // Optional: remove 'active' when menu closed (outside click or link clicked)
    menu.addEventListener('hidden.bs.collapse', function () {
      toggler.classList.remove('active');
    });
  });

//Word Count    
  document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("message");
    const wordCountDisplay = document.getElementById("wordCount");
    const submitBtn = document.getElementById("submitBtn");
    const maxWords = 250;

    textarea.addEventListener("input", function () {
      let words = this.value.trim().split(/\s+/).filter(word => word.length > 0);

      if (words.length > maxWords) {
        words = words.slice(0, maxWords); // batasi jumlah kata
        this.value = words.join(" ");     // replace isi textarea
      }

      const wordCount = words.length;
      wordCountDisplay.textContent = `Words: ${wordCount} / ${maxWords}`;
      wordCountDisplay.style.color = (wordCount >= maxWords) ? "red" : "#ccc";
      submitBtn.disabled = (wordCount === 0);
    });
  });

