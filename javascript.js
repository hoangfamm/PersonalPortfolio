function sendEmail() {
    // Prevent form submission
    event.preventDefault();
  
    // Get the form data
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;
  
    // Compose the email parameters
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Send the email using EmailJS
    emailjs.send('service_i3d0tzj', 'template_mda5l4b', templateParams, 'hoangfamm')
      .then(function(response) {
        console.log('Email sent successfully', response.status, response.text);
        // Handle success: display a confirmation message or redirect to a thank-you page
      }, function(error) {
        console.error('Email send error', error);
        // Handle error: display an error message to the user
      });
  }

  function downloadFile() {
    // Replace 'file_url' with the actual URL of the file you want to download
    var fileUrl = 'Hoang_PhamCVS.pdf';
    
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Hoang_PhamCVS.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  