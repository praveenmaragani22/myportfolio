document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("service_ceiwclm", "template_89mf1k2", {
    name: this.querySelector("input[placeholder='Your Name']").value,
    email: this.querySelector("input[placeholder='Your Email']").value,
    subject: this.querySelector("input[placeholder='Subject']").value,
    message: this.querySelector("textarea").value,
  }).then(
    function(response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    },
    function(error) {
      alert("Failed to send message. Please try again.");
      console.log("FAILED...", error);
    }
  );

  this.reset();
});
