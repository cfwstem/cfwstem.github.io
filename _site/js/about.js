// require(['domReady', 'list'], function(domReady, LIST) {
//     domReady( function() {
//         /* global List */
//         List = LIST;
//     })
// })

var options = {
  valueNames: [ 'firstname', 'lastname', 'department', 'year', 'position', 'email' ]
};

var userList = new List('users', options);