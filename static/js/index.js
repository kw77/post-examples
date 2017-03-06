function postJSON(){
    formData = new FormData(document.getElementById('form5'));
    var data = {};
    for(var pair of formData.entries()) {
        data[pair[0]] = pair[1]; 
    }
    
    window.superagent.post('/post-json').send(data).end(function(err, res){
        if(err){
            alert(err);
        } else {
            // all is well
        }
    });
}
