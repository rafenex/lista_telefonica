$('#btnAdd').hide();
$("#txtTel").keyup(function(){
    if (($('#txtNome').val().length > 2) && ($('#txtTel').val().length > 10))    
     $('#btnAdd').show();
});

$('#salvar').hide()

$('#btnAdd').click(function(e){
    e.preventDefault();
    $('#btnAdd').hide();
    var nomeContato = $('#txtNome').val();
    var telContato = $('#txtTel').val();
    $('#tabela tbody').prepend(`
        <tr>
            <td><span name='nomeContato'>${nomeContato}</span></td>
            <td><span name='telContato'>${telContato}</span></td>
            <td><button type="button" class="btn btn-danger btn-sm" id="btnExcluir">Excluir</button></td>
        </tr>
    `)   
        $('#salvar').show();
        $('#txtNome').val('');
        $('#txtTel').val('');
   

});

$("#tabela").on("click","#btnExcluir", function(e){
    $(this).closest('tr').remove();
});

$('#salvar').click(function(e){
    e.preventDefault();
    var item = new Object();
    var arrayContatos = new Array ();
    $('#tabela tbody tr').each(function(){
        arrayContatos.push({
            nomeContato: $(`span[name="nomeContato"]`, this).text(),
            telContato: $(`span[name="telContato"]`, this).text(),

        });
        $('#tabela tbody tr').remove()
        $('#salvar').hide()   
    });


    
    item.Contatos = arrayContatos;
    console.table(item);

    for(let i = 0; i < arrayContatos.length; i++){
    $('#tabela2 tbody').append(`
    
    <tr>
    <td>${arrayContatos[i].nomeContato}</td>
    <td>${arrayContatos[i].telContato}</td>  
    <td><button type="button" class="btn btn-danger btn-sm" id="btnExcluirArray">Excluir</button></td> 
    </tr>
    

    `
    
    )
    $("#tabela2").on("click","#btnExcluirArray", function(e){
        arrayContatos.splice(i,1)
        console.log(arrayContatos.length)
        $(this).closest('tr').remove();
 
    });   





       
        

}

 

});



