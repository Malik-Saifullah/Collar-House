$(document).ready(function () {
	/*=========================================
					modal-close
	=========================================*/
	$('.close').click(function () {
		$('.modal').hide();
		$('.modal-backdrop').hide();
	});
	$('#newOrder .btn-place-product').click(function () {
		$('body').css('padding-right', '17px');
		$('body').css('overflow-y', 'hidden');
		$('.new-order-modal-2').css('overflow-y', 'auto');
	});

	$('#newOrder2 .btn-place-order').click(function () {
		$('body').css('padding-right', '17px');
		$('body').css('overflow-y', 'hidden');
		$('.new-order-modal-3').css('overflow-y', 'auto');
	});

	$('#newOrder5 .btn').click(function () {
		$('body').removeAttr('style');
	});

	$('#newOrder .select-brand-box .new-order-card').click(function () {
		$('#newOrder .select-product-box').addClass('show');
	});

	$('#newOrder .select-product-box .new-order-card').click(function () {
		$('#newOrder .select-shape-box').addClass('show');
	});

	$('#newOrder .select-shape-box .new-order-card').click(function () {
		$('#newOrder .select-size-box').addClass('show');
	});

	$('#newOrder .select-size-box .new-order-size-card').click(function () {
		$('#newOrder .new-order-detail').addClass('show');
	});


	$('#newOrder .action-btn-box .btn-add-another-product').click(function () {
		$('#newOrder .add-another-product').removeClass('d-none');
	});

	$('#newOrder .new-select-brand-box .new-order-card').click(function () {
		$('#newOrder .new-select-product-box').addClass('show');
	});

	$('#newOrder .new-select-product-box .new-order-card').click(function () {
		$('#newOrder .new-select-shape-box').addClass('show');
	});

	$('#newOrder .new-select-shape-box .new-order-card').click(function () {
		$('#newOrder .new-select-size-box').addClass('show');
	});

	$('#newOrder .new-select-size-box .new-order-size-card').click(function () {
		$('#newOrder .new-order-detail-1').addClass('show');
	});


	/*=========================================
				payment tab toggle
	=========================================*/
	$('#newOrder4 .btnOnlineTransfer').click(function () {
		$('#newOrder4 #cash-in-hand').removeClass('show');
		$('#newOrder4 #credit').removeClass('show');
	});

	$('#newOrder4 .btnCashInHeand').click(function () {
		$('#newOrder4 #online-transfer-tab').removeClass('show');
		$('#newOrder4 #credit').removeClass('show');
	});

	$('#newOrder4 .btnCredit').click(function () {
		$('#newOrder4 #cash-in-hand').removeClass('show');
		$('#newOrder4 #online-transfer-tab').removeClass('show');
	});

	/*=========================================
				suggestion
	=========================================*/
	$(document).mouseup(function (e) {
		var container = new Array();
		container.push($('.customer-name-suggestions'));
		container.push($('.customer-phone-suggestions'));
		container.push($('.customer-referral-suggestions'));
		container.push($('.cashier-name-suggestions'));
		container.push($('.reciver-name-suggestions'));

		$.each(container, function (key, value) {
			if (!$(value).is(e.target) // if the target of the click isn't the container...
				&&
				$(value).has(e.target).length === 0) // ... nor a descendant of the container
			{
				$(value).hide();
				$('#newOrder3 .btn svg, #newOrder4 .btn svg').css('transform', 'rotate(0deg)');
			}
		});
	});

	$('.modal .search-suggestions li').click(function () {
		$('.modal .search-suggestions').hide();
	});


	$('#newOrder3 .customer-name').click(function () {
		$('#newOrder3 .customer-name-suggestions').show();
		$('#newOrder3 .customer-phone-suggestions').hide();
		$('#newOrder3 .btn-customer-phone svg').css('transform', 'rotate(0deg)');
		$('#newOrder3 .btn-customer-name svg').css('transform', 'rotate(180deg)');
	});
	$('#newOrder3 .btn-customer-name').click(function () {
		$('#newOrder3 .customer-name-suggestions').hide();
		$('#newOrder3 .btn-customer-phone svg').css('transform', 'rotate(0deg)');
		$('#newOrder3 .btn-customer-name svg').css('transform', 'rotate(0deg)');
	});


	$('#newOrder3 .customer-phone').click(function () {
		$('#newOrder3 .customer-name-suggestions').hide();
		$('#newOrder3 .customer-phone-suggestions').show();
		$('#newOrder3 .btn-customer-name svg').css('transform', 'rotate(0deg)');
		$('#newOrder3 .btn-customer-phone svg').css('transform', 'rotate(180deg)');
	});
	$('#newOrder3 .btn-customer-phone').click(function () {
		$('#newOrder3 .customer-phone-suggestions').hide();
		$('#newOrder3 .btn-customer-phone svg').css('transform', 'rotate(0deg)');
		$('#newOrder3 .btn-customer-name svg').css('transform', 'rotate(0deg)');
	});


	$('#newOrder3 .customer-referral').click(function () {
		$('#newOrder3 .customer-referral-suggestions').hide();
		$('#newOrder3 .customer-referral-suggestions').show();
		$('#newOrder3 .btn-customer-referral svg').css('transform', 'rotate(180deg)');
	});
	$('#newOrder3 .btn-customer-referral').click(function () {
		$('#newOrder3 .customer-referral-suggestions').hide();
		$('#newOrder3 .btn-customer-referral svg').css('transform', 'rotate(0deg)');
	});


	$('#newOrder4 .cashier-name').click(function () {
		$('#newOrder4 .cashier-name-suggestions').hide();
		$('#newOrder4 .cashier-name-suggestions').show();
		$('#newOrder4 .btn-cashier-name svg').css('transform', 'rotate(180deg)');
	});
	$('#newOrder4 .btn-cashier-name').click(function () {
		$('#newOrder4 .cashier-name-suggestions').hide();
		$('#newOrder4 .btn-cashier-name svg').css('transform', 'rotate(0deg)');
	});


	$('#newOrder4 .reciver-name').click(function () {
		$('#newOrder4 .reciver-name-suggestions').hide();
		$('#newOrder4 .reciver-name-suggestions').show();
		$('#newOrder4 .btn-reciver-name svg').css('transform', 'rotate(180deg)');
	});
	$('#newOrder4 .btn-reciver-name').click(function () {
		$('#newOrder4 .reciver-name-suggestions').hide();
		$('#newOrder4 .btn-reciver-name svg').css('transform', 'rotate(0deg)');
	});

	
	$('.calendar-field-box td').click(function () {
		$(this).toggleClass('active');
	});

	$('.calendar-field-box .calendar-footer .btn-calendar-cancel, .calendar-field-box .calendar-footer .btn-calendar-apply').click(function () {
		$('.calendar-field-box').hide();
	});


	/*=========================================
					card-slider
	=========================================*/
	const swiper = new Swiper('.swiper-container', {
		slidesPerView: "auto",
		keyboard: true,
		freeMode: true,
	});

	/*=========================================
			remove added product
	=========================================*/
	var closebtns = document.getElementsByClassName("product-delete");
	var i;

	for (i = 0; i < closebtns.length; i++) {
	closebtns[i].addEventListener("click", function() {
		this.parentElement.style.display = 'none';
	});
	}

	/*=========================================
					calendar-filter
	=========================================*/
	var swiper1 = new Swiper(".calendar-filter", {
		direction: "vertical",
		slidesPerView: "auto",
		mousewheel: true,
		keyboard: true,
	});// calendar
	$('.modal .btn-callender').click(function () {
		$('.calendar-field-box').toggle();
	});

	$('.customer-table-header .filter-by-date svg').click(function () {
		$('.calendar-field-box').toggle();
	});

	
	/*=========================================
					modal-close
	=========================================*/
	$('.close').click(function () {
		$('.modal').hide();
		$('.modal-backdrop').hide();
	});
	$('#newProduct .btn-place-product').click(function () {
		$('body').css('padding-right', '17px');
		$('body').css('overflow-y', 'hidden');
		$('.new-order-modal-2').css('overflow-y', 'auto');
	});

	$('#newProduct .select-brand-box .new-order-card').click(function () {
		$('#newProduct .select-product-box').addClass('show');
	});

	$('#newProduct .select-product-box .new-order-card').click(function () {
		$('#newProduct .select-shape-box').addClass('show');
	});

	$('#newProduct .select-shape-box .new-order-card').click(function () {
		$('#newProduct .select-size-box').addClass('show');
	});

	$('#newProduct .select-size-box .new-order-size-card').click(function () {
		$('#newProduct .new-order-detail').addClass('show');
	});


	$('#newProduct .action-btn-box .btn-add-another-product').click(function () {
		$('#newProduct .add-another-product').removeClass('d-none');
	});

	$('#newProduct .new-select-brand-box .new-order-card').click(function () {
		$('#newProduct .new-select-product-box').addClass('show');
	});

	$('#newProduct .new-select-product-box .new-order-card').click(function () {
		$('#newProduct .new-select-shape-box').addClass('show');
	});

	$('#newProduct .new-select-shape-box .new-order-card').click(function () {
		$('#newProduct .new-select-size-box').addClass('show');
	});

	$('#newProduct .new-select-size-box .new-order-size-card').click(function () {
		$('#newProduct .new-order-detail-1').addClass('show');
	});
});


/*=========================================
			profile-img-upload
=========================================*/
// add product img
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic').show();
				$('.profile-pic').attr('src', e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload").on('change', function () {
		readURL(this);
	});
	$(".upload-button").on('click', function () {
		$(".file-upload").click();
	});
});

// add product shape img
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic-1').show();
				$('.profile-pic-1').attr('src', e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload-1").on('change', function () {
		readURL(this);
	});
	$(".upload-button-1").on('click', function () {
		$(".file-upload-1").click();
	});
});

// add employee img
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic-2').show();
				$('.profile-pic-2').attr('src', e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload-2").on('change', function () {
		readURL(this);
	});
	$(".upload-button-2").on('click', function () {
		$(".file-upload-2").click();
	});
});

// add employee img
$(document).ready(function () {
	var readURL = function (input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.profile-pic-3').show();
				$('.profile-pic-3').attr('src', e.target.result);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	$(".file-upload-3").on('change', function () {
		readURL(this);
	});
	$(".upload-button-3").on('click', function () {
		$(".file-upload-3").click();
	});
});