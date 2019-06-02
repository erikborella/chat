$(() => {
	$('#registerButton').click(() => {
		var username = $('#name').val();
		var password1 = $('#password').val();
		var password2 = $('#password2').val();

		if (!username && !password1 && password2) {
			M.toast({ html: 'Digite todos os campos' });
		} else if (password1 !== password2) {
			M.toast({ html: 'Senhas digitadas diferentes' })
		} else {
			$('#registerForm').submit();
		}
	})
})