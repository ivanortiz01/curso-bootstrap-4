$(function () {
    $("[data-toggle=tooltip]").tooltip();
    $("[data-toggle=popover]").popover();
    $(".carousel").carousel({
        interval: 2000
    });

    $("#contacto").on("show.bs.modal", function (e) {
        console.log("el modal se esta mostrando");

        $("#contactoBtn").removeClass("btn-outline-success");
        $("#contactoBtn").addClass("btn-primary");
        $("#contactoBtn").prop("disabled", true);
    });
    $("#contacto").on("shown.bs.modal", function (e) {
        console.log("el modal se mostró");
    });
    $("#contacto").on("hide.bs.modal", function (e) {
        console.log("el modal se oculta");
    });
    $("#contacto").on("hidden.bs.modal", function (e) {
        console.log("el modal se ocultó");
        $("#contactoBtn").prop("disabled", false);
    });
});