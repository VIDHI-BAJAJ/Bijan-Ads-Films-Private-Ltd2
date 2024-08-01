document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
function submitForm() {
  const loginForm = document.getElementById("form-1");
  let budget = document.getElementById("website-slider-budget-input");
  let timeline = document.getElementById("website-slider-week-input");
  let name = document.getElementById("text-input-name");
  let email = document.getElementById("text-input-email");
  let phone = document.getElementById("text-input-phone");
  let company = document.getElementById("text-input-company-name");
  let companyUrl = document.getElementById("text-input-current-website-url");
  let additionalInfo = document.getElementById("text-input-additional-info");
  let alertBox = document.getElementById("alert-toast");
  //   let form = document.getElementById()
  if (
    budget.value == "" ||
    timeline.value == "" ||
    name.value == "" ||
    email.value == ""
  ) {
    // throw error
  } else {
    const formData = {
      budget: budget.value,
      timeline: timeline.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      companyUrl: companyUrl.value,
      additionalInfo: additionalInfo.value,
    };

    var data = {
      service_id: "service_3l03a29",
      template_id: "template_qc2ii4g",
      user_id: "FZDV8yjG3OApBsxuK",
      template_params: { ...formData },
    };

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        loginForm.reset();
        alertBox.style.display = "block";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 4000);
      })
      .fail(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  }
}
