if (window.location.href != "https://sis.rpi.edu/") {
	var body = document.body;

	// Remove all extra space between menu tabs
	var menuBackgroundOn = document.getElementsByClassName("bgtabon");
	var menuBackgroundOff = document.getElementsByClassName("bgtaboff");
	for (var i = menuBackgroundOff.length - 1; i >= 0; i--) {
		menuBackgroundOff[i].remove();
	}
	for (var i = menuBackgroundOn.length - 1; i >= 0; i--) {
		menuBackgroundOn[i].remove();
	}


    // Create the logo image and the link to rpi.edu
	var logoImg = document.createElement("img");
	logoImg.src = "https://www.rpi.edu/dept/cct/apps/web-branding/v2/header/meganav/img/RPIlogo_white.png";
    logoImg.id = "logoImg";
	var logoLink = document.createElement("a");
	logoLink.href = "https://rpi.edu";

	document.getElementsByClassName("pageheaderdiv1")[0].appendChild(logoImg);


	// Fix the issue that causes multiple highlighted tabs
	var tabon = document.getElementsByClassName("tabon");
	if (document.title == "Main Menu"
					|| window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=amenu.P_AcctInfoMnu"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskoacc.P_ViewAcct") {
	    tabon[0].classList.add('taboff');
	    tabon[0].classList.remove('tabon');
	} else if (document.title == "Personal Information Menu" || document.title == "Student Menu"
					|| window.location.href == "https://sis.rpi.edu/rss/ywemernot.P_Main"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkogad.P_SelectAtypUpdate"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkoemr.P_SelectEmrgContacts"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkvets.P_DispClass"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskflib.P_SelDefTerm"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskrsta.P_RegsStatusDisp"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AltPin"
					|| window.location.href == "https://sis.rpi.edu/rss/ybwskfina.P_FinancialAgreement"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_ChangeCrseOpt"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfcls.p_sel_crse_search"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfshd.P_CrseSchd"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfshd.P_CrseSchdDetl"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskgstu.P_StuInfo"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskogrd.P_ViewTermGrde"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskogrd.P_ViewGrde"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskotrn.P_ViewTran"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskotrn.P_ViewTermTran"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskwtrr.p_disp_transcript_request_type"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskwtrr.p_disp_status_of_order"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskocap.P_StuSelectCompl"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskgrad.p_disp_grad_term"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskgrad.P_StuSelectTerm?menu_choice=B"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskgrad.P_StuViewHolds"
					|| window.location.href == "https://sis.rpi.edu/rss/bwcklibs.P_StoreTerm"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AddDropCrse"
					|| window.location.href == "https://sis.rpi.edu/rss/bwckgens.p_proc_term_date" ) {
	    tabon[1].classList.add('taboff');
	    tabon[1].classList.remove('tabon');
	} else if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_ChangePin"
					|| window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_SecurityQuestion") {
		// "Change Pin" and "Change Security Question" has no highlighted tab, so we add a tabon
		var taboff = document.getElementsByClassName("taboff");
		taboff[0].classList.add('tabon');
		taboff[0].classList.remove('taboff');
	}

	// Dynamic top buttons, change colors upon hover
	var taboff = document.getElementsByClassName("taboff");
	for (var i = 0; i < taboff.length; i++) {
		taboff[i].onmouseout = function() {
			this.classList.add('taboff');
			this.classList.remove('tabon');
		}
		taboff[i].onmouseover = function() {
			this.classList.add('tabon');
			this.classList.remove('taboff');
		}
	}

	/*
	SEARCH BAR MODIFICATIONS
	*/
}
