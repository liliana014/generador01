           function shorturl() {


       var url = "https://tw4.one/apilink/index.php";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.getElementById("url-box").value = xhr.responseText;
          }
        };
        xhr.send();
           var pass = document.getElementById("shortened-url");
            pass.select();
            document.execCommand("copy");
	  	    
            
          }
	    




       var url = "https://tw4.one/apilink/index.php";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.getElementById("url-box").value = xhr.responseText;
          }
        };
        xhr.send();
        
        
        $(document).ready(function() {

   	const url_prefix = window.location;	
            $('#shortner').submit((event) => {
                event.preventDefault();
                var settings = {
                    "url": "/api",
                    "method": "POST",
                    "data": JSON.stringify({
                        "url": $('#url-box').val(),
                        "key": $('#key-box').val() ? $('#key-box').val(): null
                    }),
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json"
                    }
                };
                $('#submit-button');
                $.ajax(settings)
                .done((response) => {
			    const cottorra =  document.querySelector("#cottorra").value + " " ;
                    $('#main2').html(`
                        <div class="columns is-desktop">
                            <div class="column is-full">
                                <div class="field">
                                    <div class="control">
                                        <input id="shortened-url" type="text" class="input is-success" value="${cottorra}${url_prefix}${response}" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `);
                    
                      document.getElementById("url-box").style.visibility = "hidden";
                })
                .fail((xhr, status, error) => {
                    errorAlert(xhr.responseText);
                    $("#submit-button");
                    
                });
            });
            $(".navbar-burger").click(function() {
                $(".navbar-burger, .navbar-menu").toggleClass("is-active");
            });
            function errorAlert(text) {
                $('#alert-message').text(text);
                $('#alert-modal').addClass('is-active');
            }
        });
        
        function copy_url() {
            var copyText = document.getElementById("shortened-url");
            copyText.select();
            copyText.setSelectionRange(0,
                99999);
            document.execCommand("copy");
            $("#copy-button").text("Copied")
        }
