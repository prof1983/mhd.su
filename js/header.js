var elements = document.getElementsByTagName('header');
if (typeof elements != "undefined" && elements.length > 0) {
	var sHeader = elements[0];

	// ---- logo ----

	var sHeaderLogo = document.createElement('span');
	sHeaderLogo.className = 's-header_logo';
	sHeaderLogo.id = 's-header_logo';
	sHeaderLogo.innerHTML = '<a href="/"><img src="/img/logo/48.png" class="s-header_logo__img"></a><span class="s-header_logo__name1"><a href="/">МХД</a></span>';
	sHeader.appendChild(sHeaderLogo);

	// ---- delimiter ----

	var sD1 = document.createElement('span');
	sD1.className = 's-header_delimiter';
	sD1.id = 's-header_delimiter';
	sHeader.appendChild(sD1);

	// ---- nav ----

	var sHeaderNav = document.createElement('ul');
	sHeaderNav.className = 's-header-menu';
	sHeaderNav.id = 's-header-menu';
	if (window.devicePixelRatio > 1) {
		sHeaderNav.innerHTML = '<a href="nav"><img class="s-header-menu-img" src="img/menu-icon.png"/></a>';
	} else {
		sHeaderNav.innerHTML = '<li><a href="/dashboard" class="s-header-menu-a">Обзор</a></li>'+
			'<li><span>•</span><a href="/account" class="s-header-menu-a">Аккаунт</a></li>'+
			'<li><span>•</span><a href="/projects" class="s-header-menu-a">Проекты</a></li>'+
			'<li><span>•</span><a href="/res" class="s-header-menu-a">Ресурсы</a></li>'+
			'<li><span>•</span><a href="/exchange" class="s-header-menu-a">Биржа</a></li>';
	}
	sHeader.appendChild(sHeaderNav);

	// -- tool --

	var sHeaderTool = document.createElement('nav');
	sHeaderTool.className = 's-header_tool';
	sHeaderTool.id = 's-header_tool';
	sHeader.appendChild(sHeaderTool);

	// -- lang --

	var sHeaderLang = document.createElement('div');
	sHeaderLang.className = 's-header_lang';
	sHeaderLang.id = 's-header_lang';
	sHeaderLang.innerHTML = '<a href="en" title="ru" class=""><img src="/img/flag/en.svg" class="s-flag-icon"></a>';
	sHeaderTool.appendChild(sHeaderLang);

	// ---- delimiter ----

	var sD2 = document.createElement('span');
	sD2.className = 's-header_delimiter';
	sHeaderTool.appendChild(sD2);

	// ---- balance ----

	var sHeaderBalance = document.createElement('div');
	sHeaderBalance.className = 's-header_balance';
	sHeaderBalance.id = 's-header_balance';
	sHeaderBalance.innerHTML = '<a href="/wallet" title="wallet" class="">$123' + "'" + '456</a>';
	sHeaderTool.appendChild(sHeaderBalance);
}
