let userLength;
$("#length").keyup(function () {

    userLength = $(this).val();
});
let pass = 'ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnobqrstuvwxyz0123456789!@#$%&*_-|><';
$('#randpass').on('click', function () {

    let passResult = " ";
    const passLength = pass.length;
    for (i = 0; i < userLength; i++) {
        passResult += pass.charAt(Math.floor(Math.random() * passLength));
    }
    $('#pass').text(passResult);

});