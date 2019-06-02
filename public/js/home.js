$(() => {
	initFabToolbar();
	initSidenav();
});

function initFabToolbar() {
	let fabToolbar = $('.fixed-action-btn');	
	if (fabToolbar.length > 0) {
		$(fabToolbar).floatingActionButton({
			toolbarEnabled: true
		});
	}
}

function initSidenav() {
	let sidenav = $('.sidenav');
	if (sidenav.length > 0) {
		$(sidenav).sidenav();
	}
}