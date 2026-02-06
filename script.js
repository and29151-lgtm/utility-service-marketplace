function selectCity(city) {
    localStorage.setItem("city", city);
    window.location.href = "index.html";
}

function bookService(serviceName) {
    localStorage.setItem("service", serviceName);
    window.location.href = "booking.html";
}

function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    const city = localStorage.getItem("city");
    const service = localStorage.getItem("service");

    alert(
        "Booking Confirmed!\n\n" +
        "Name: " + name +
        "\nPhone: " + phone +
        "\nCity: " + city +
        "\nService: " + service +
        "\nDate: " + date
    );

    window.location.href = "index.html";
}