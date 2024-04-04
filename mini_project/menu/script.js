$(document).ready(function () {
    $('.btn-buy').click(function () {
        $('#quantity').val(''); 
        $('#address').val('');
        $('#note').val(''); 
    });

    $('#confirmPurchase').click(function () {
        var quantity = $('#quantity').val();
        var address = $('#address').val();
        var note = $('#note').val();

        $('#buyModal').modal('hide');

        alert('Pesanan Anda (' + quantity + ' item) telah berhasil dipesan ke alamat: ' + address + ' dengan catatan: ' + note);
    });
});