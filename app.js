//toggler
document.querySelector('.toggler-open').addEventListener('click', function(){
	document.querySelector('.toggler-open').classList.remove ("open");
	document.querySelector('.toggler-open').classList.add("hide");
	document.querySelector('.toggler-close').classList.remove ("hide");
	document.querySelector('.toggler-close').classList.add("open");
	document.getElementById('navCollapse').style.display = "flex";
});

document.querySelector('.toggler-close').addEventListener('click', function(){
	document.querySelector('.toggler-close').classList.remove ("open");
	document.querySelector('.toggler-close').classList.add("hide");
	document.querySelector('.toggler-open').classList.remove ("hide");
	document.querySelector('.toggler-open').classList.add("open");
	document.getElementById('navCollapse').style.display = "none";
});
