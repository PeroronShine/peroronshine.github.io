var comments = [];
loadComments();

document.getElementById('submitbutton').onclick = function(){
	event.preventDefault();
	var CommentName = document.getElementById('CommentName');
	var CommentBody = document.getElementById('CommentBody');

	var comment = {
		name : CommentName.value,
		body : CommentBody.value,
		time : Math.floor(Date.now()/1000)
	}
	CommentName.value = '';
	CommentBody.value = '';
	comments.push(comment);
	saveComments();
	showComments();
}

function saveComments(){
	localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	showComments();
}

function showComments(){
	var commentField = document.getElementById('CommentField');
	var out = '';
	comments.forEach(function(item){
		out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
		out += `<p class="alert alert-primary">${item.name}</p>`;
		out += `<p class="alert alert-success">${item.body}</p>`;
	});
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months [a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	return time;
}
