function sendEmail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        amount : document.getElementById("amount").value
    };

    const serviceId = "service_xlte2lp";
    const templateId = "template_nblig99";
    emailjs.send(serviceId, templateId, params).then(
        (res) => {
            document.getElementById("name").value ="" ;
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("amount").value = "";
            console.log(res);
            alert("Your message sent successfully")
        }
    );
}