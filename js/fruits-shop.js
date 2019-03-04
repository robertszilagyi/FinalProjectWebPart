var editId;

var API_URL =
{
LOGIN: 'http://localhost:8010/login',
CREATE: 'http://localhost:8010/product',
READ: 'http://localhost:8010/product',
UPDATE: 'http://localhost:8010/store/1',
DELETE: './api/delete.json'
};

window.Store =
{
getRow: function(item)
{
return `
            <div id="fruits" class="shop-items">
              <div class="shop-item">
                          <span class="shop-item-title">${item.productName}</span>
                                    <img class="shop-item-image" src=${item.imagePath}>
                                     <div class="shop-item-details">
                                         <span class="shop-item-price">${item.price}$</span>
                                         <button class="btn btn-primary shop-item-button" role="button">Add To Cart</button>
                                     </div>
                                     </div>
                                     </div>
                        `;
},

load: function()
{
console.log('loading...');
$.ajax({
url: API_URL.READ,
method: "GET"
}).done(function(items)
{
console.info('done: ',items);
Store.display(items);
});
},

getActionRow: function()
{
return`
`
},


//loggedUser: null,
//logOut: function(event)
//{
//$(".full-screen-container").hide();
//
//location.reload();
//},
//
//login: function(event)
//{
//var username = $(event.target).parents("#").find('input[name="username]').val(),
//pass = $(event.target).parents("#").find('input[name="password"]').val();
//
//$.ajax
//({
//
//url:API_URL.LOGIN,
//method: "GET",
//data: jQuery.param({username, userPass: pass}),
//contentType: '',
//}).done(function(response))
//{
//console.log("response from java", response);
//
//if (response)
//{
//$("#").hide();
//
//$("").addClass("");
//
//window. .loggedUser = username;
//
//window. .load();
//}
//else {
//$("#").hide();
//
//$().css({"display" : "block", "color": "red"});
//
//$(". [name='username']").val('');
//$(". [name='password'").val('');
//},
//
//load.function()
//{
//$.ajax({
//url: API_URL. + window.Store.loggedUser,
//method: "GET"
//}).done(function (){
//Store.display()}
//});
//},
//
//
//}
//}


//delete:function(id)
//{
//$.ajax(
//{
//url: API_URL.DELETE,
//method: "POST",
//data:
//{
//id: id
//}
//}).done(function (response)
//{
//if (response.success)
//{
//Store.load();
//}
//});
//},
//
//add:function(item)
//console.log(item);
//$.ajax({
//url: API_URL.CREATE,
//
//headers:
//{
//"Content-Type" : "application/json"
//},
//method: "POST",
//data: JSON.stringify(product, null, 2)
//}).done(function (response)
//{
//if (response.success)
//{
//Store.load();
//}
//});
//},
//
//save: function(item)
//{
//console.log(item);
//$.ajax({
//url: API_URL.UPDATE+product.id,
//method: "PUT",
//headers:
//{
//"Content-Type": "application/json"
//},
//data: JSON.stringify(product, null, 2)
//}).done ( function(response)
//{
//if (response.success)
//{
//editId = '';
//Store.load();
//}
//});
//},
//
//binEvent: function()
//
//{
//
//},
//


display: function(items)
{
window.persons = items;
var rows = '';

items.forEach(item => rows += Store.getRow(item));
$('#fruits').html(rows);

$(".shop-item-button").click(addToCartClicked);
}

};

Store.load();
