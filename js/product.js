var product = {
  sendMail: function() {
    var template_params = {
      "myName": "deepak"
    }

    var service_id = "default_service";
    var template_id = "samplemail";
    emailjs.send(service_id, template_id, template_params);
  }
}
