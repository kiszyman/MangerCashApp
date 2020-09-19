// JavaScript Document

//Open help screen
function openHelp(pageName){
	helpLink = window.open(pageName , "HelpPage","width=640,height=480,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes");
	helpLink.focus();
}//

//Open Bill Pay help screen
function openBPHelp(pageName){
	helpLink = window.open(pageName , "Help_Page","width=400,height=400,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes");
	helpLink.focus();
}//

//Open Quick Page
function openQuick(pageName){
	helpLink = window.open(pageName , "DownloadPage","width=640,height=400,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes");
	helpLink.focus();
}//

//Open print friendly page
function openPrinterFriendly(url){
	var settings = "width=800,height=600,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes";
	pfLink = window.open(url, 'PrintPage', settings);
	pfLink.focus();
}//

//Open download page
function openDownload(downloadName){
	var settings = "width=441,height=322,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no";
	downloadLink = window.open(downloadName, "DownloadPage", settings);
	downloadLink.focus();
}//

//Open disclosure page
function openDisclosure(disclosureName){
	var settings = "width=450,height=400,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes";
	disclosureLink = window.open(disclosureName, "DisclosurePage", settings);
	disclosureLink.focus();
}//

//Open Check page
function openCheck(disclosureName){
	var settings = "width=800,height=399,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes";
	disclosureLink = window.open(disclosureName, "DisclosurePage", settings);
	disclosureLink.focus();
}//

//Open Deposit Ticket Image page
function openDTI(disclosureName){
	var settings = "width=800,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes";
	disclosureLink = window.open(disclosureName, "DisclosurePage", settings);
	disclosureLink.focus();
}//

//Open Print Friendly page
function openPrint(disclosureName){
	var settings = "width=850,height=600,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes";
	disclosureLink = window.open(disclosureName, "DisclosurePage", settings);
	disclosureLink.focus();
}//

//Function to check Token Transaction is present or not and returns true or false
function HasTokenApproval()
{
  var rc=false;
  if(showMenuItem('tokenapproval') == "1")
  {
     rc = true;
  }
  return rc;
}

//Function to check Splash Page Service is present or not and returns true or false
function HasSplashService()
{
 var rc=false;
 if(showMenuItem('splashpage') == "1")
  {
     rc = true;
  }
  return rc;
 }

//Function to check Multiple Approvals is present or not and set the visibilty based on it
function ShowVisibility(id)
{
 multipleApproavls = showMenuItem('multipleapprovals');
 if(multipleApproavls == "1")
 {
   document.getElementById(id).style.display = "block";
 }
 else
 {
   document.getElementById(id).style.display = "none";
 }
}

//Function to open splash pages
var modalWindow = {
        parent:"body",
        windowId:null,
        content:null,
        width:null,
        height:null,
        close:function()
        {
            $(".modal-window").remove();
           $(".modal-overlay").remove();
       },

       open:function()
       {
          var modal = "";
           modal += "<div id=\"pop\" class=\"modal-overlay\" ></div>";
           modal += "<div id=\"" + this.windowId + "\" class=\"modal-window\" style=\"width:" + this.width + "px; height:" + this.height + "px; margin-top:-" + (this.height / 2) + "px; margin-left:-" + (this.width / 2) + "px;\">";
           modal += this.content;
           modal += "</div>";
          $(this.parent).append(modal);
       }
   };

	var modalWindowWidget = {
        parent:"body",
        windowId:null,
        content:null,
        width:null,
        height:null,
        close:function()
        {
            $(".modal-window-widget").remove();
           $(".modal-overlay-widget").remove();
       },

       open:function()
       {
          var modal = "";
           modal += "<div id=\"pop\" class=\"modal-overlay-widget\" onclick=\"modalWindowWidget.close();\"></div>";
           modal += "<div id=\"" + this.windowId + "\" class=\"modal-window-widget\" style=\"width:" + this.width + "px; height:" + this.height + "px; margin-top:-" + (this.height / 2) + "px; margin-left:-" + (this.width / 2) + "px;\">";
           modal += this.content;
           modal += "</div>";
          $(this.parent).append(modal);
       }
   };


	var openMyModal = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 300;
		modalWindow.height = 500;
		modalWindow.content = "<iframe style='border:1px solid black'width='750' height='475' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

	var openMyModalSearch = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 300;
		modalWindow.height = 500;
		modalWindow.content = "<iframe style='border:1px solid black'width='750' height='550' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};
//Function to open Welc
var openMyModalAlertsWidgets = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 300;
		modalWindow.height = 500;
		modalWindow.content = "<iframe style='border:1px solid black'width='770' height='360' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};
var openMyWelcomeModal = function(source)
{
	modalWindow.windowId = "myModal";
	modalWindow.width = 500;
	modalWindow.height = 370;
	modalWindow.content = "<iframe style='border:1px solid black' width='790' height='315' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
	modalWindow.open();
};
var openMyWelcomeModalSplash = function(source)
{
	modalWindow.windowId = "myModal";
	modalWindow.width = 500;
	modalWindow.height = 370;
	modalWindow.content = "<iframe style='border:1px solid black' width='790' height='395' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
	modalWindow.open();
};

var openMyModalDiv = function (source) {

		modalWindowWidget.windowId = "myModal";

		var myX =window.event.clientX -130 ;
		var myY= window.event.clientY + 7 ;


		var str = '';
	str = "<div id='my'style='border:solid;border-width:1px; width:120px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
		str += "background:#FFF; ' >";
    str += "<a  href=\"javascript:document.getElementById('" + source + "').style.display = \'none\';modalWindowWidget.close();\" id='link_scheduled'  class='default_delete_widget' ";
    str += ">";
		str += "Delete this panel<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();

    $('#pop').bind('click', function () { modalWindowWidget.close(); });
	};
function myfunc(src) {
    document.getElementById(src).style.display = 'none';
}
	var openMyModalACHtemplatesDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";


		var de = document.documentElement;
        var b = document.body;
     	var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:180px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a href=\"../ach/template_approval.html\" id='link_scheduled'  class='default_delete_widget' ";
		str += ">";
		str += "ACH Template Approval<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
};

var openMyModalBooktemplatesDiv = function (source) {

    modalWindowWidget.windowId = "myModal";


    var de = document.documentElement;
    var b = document.body;
    var myY = window.event.clientY + 10;
    var myX = window.event.clientX - 20;
    var str = '';

    str = "<div id='my'style='border:solid;border-width:1px; width:200px; ";
    str += "height:30px;top:" + myY + "px;left:" + myX + "px;position:fixed; ";

    str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
    str += "background:#FFF; ' >";

    str += "<a href=\"../book_transfer/template_approval.html\" id='link_scheduled'  class='default_delete_widget'>";
    str += "Book Transfer Template Approval<\/a>			<\/div>";
    modalWindowWidget.content = str;

    modalWindowWidget.open();
    $('#pop').bind('click', function () { modalWindowWidget.close(); });
};

	var openMyModalWiretemplatesDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";


		var de = document.documentElement;
        var b = document.body;


		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:200px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_scheduled'  class='default_delete_widget' ";
		str += "href=\"../wire/template_approval.html\">";
		str += "Wire Transfer Template Approval<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};
	var openMyModalscheduledDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;
     	var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:200px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_scheduled'  class='default_delete_widget' ";
		str += "href=\"../scheduled_requests/next_scheduled_requests.html\">";
		str += "Next Scheduled Requests<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });

	};

	var openMyModalPaymentsDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";


		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:110px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../ach/transmit.html\">";
		str += "ACH Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../ach/history.html\">";
		str += "ACH History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


var openMyModalACHFileDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";


		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:170px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../ach/upload_transmit.html\">";
		str += "ACH File Upload Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../ach/upload_history.html\">";
		str += "ACH File Upload History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalPaymentFileDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:190px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";

		str += "href=\"../integrated_payables/upload_transmit_select.html\">";
		str += "Payment File Upload Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../integrated_payables/upload_history.html\">";
		str += "Payment File Upload History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


var openMyModalWireDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../wire/transmit.html\">";
		str += "Wire Transfer Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../wire/history.html\">";
		str += "Wire Transfer History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

	var openMyModalCreditCardDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:175px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget'";
		str += "href=\"../credit_card/transmit.html\">";
		str += "Credit Card Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget'";
		str += "href=\"../credit_card/history.html\">";
		str += "Credit Card Payment History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


var openMyModalLoanPayDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:100px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../loan/transmit.html\">";
		str += "Loan Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../loan/history.html\">";
		str += "Loan History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};
var openMyModalLoanAdvanceDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:100px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../loan/transmit.html\">";
		str += "Loan Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../loan/history.html\">";
		str += "Loan History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

	var openMyModalBookDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../book_transfer/transmit.html\">";
		str += "Book Transfer Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../book_transfer/history.html\">";
		str += "Book Transfer History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalExpressDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:170px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../express_transfer/express_transmit.html\">";
		str += "Express Transfer Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../express_transfer/express_history_select.html\">";
		str += "Express  Transfer History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


var openMyModalFundsDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../funds_transfer/funds_transmit.html\">";
		str += "Funds Transfer Transmit<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../funds_transfer/funds_history_select.html\">";
		str += "Funds Transfer History<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalNoTemplatesDiv = function(source)
	{
			var rc=showMenuItem('ach');
			var rc14 = showMenuItem('integratedpayables');
			var rc15 = showMenuItem('wiremain');
			var rc16 = showWireItem('repetitive');
			var rc17 = showWireItem('freeform');
			var rc22 = showMenuItem('book');
			var rc1=showACHItem('payment');
			var rc2=showACHItem('collection');
			var rc4=showACHItem('ppdcoll');
			var rc5=showACHItem('ccdpay');
			var rc11=showACHItem('ctx');
			var rc12=showACHItem('ctxcoll');
			var rc24 = showACHItem('webcoll');
			var rc25 = showACHItem('telcoll');
			modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'style='border:solid;border-width:1px; width:200px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; overflow-x:hidden; overflow-y: auto; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		if(rc == '1' && (rc1 == '1' || rc2 == '1' || rc4 == '1' || rc5 == '1' || rc11 == '1' || rc12 == '1' || rc24 == '1' || rc25 == '1'))
		{
		    str += "<a id='link_achpayments'  class='default_delete_widget' ";
			str += "href=\"../ach/template_approval.html\">";
		    str += "ACH Template Approval<\/a><br\/>			";
		}
		if(rc15 == '1' && (rc16 == '1' || rc17 == '1'))
		{
		    str += "<a id='link_achfile'  class='default_delete_widget'";
			str += "href=\"../wire/template_approval.html\">";
	    	str += "Wire Transfer Template Approval<\/a><br\/>			";
		}
		if(rc22 == '1')
		{
		    str += "<a id='link_paymentfile'  class='default_delete_widget'";
			str += "href=\"../book_transfer/template_approval.html\">";
	    	str += "Book Transfer Template Approval<\/a><br\/>			";
		}

		str += "		<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalNoApprovalDiv = function(source)
	{

			var rc=showMenuItem('ach');
			var rc13 = showACHItem('upload');
			var rc14 = showMenuItem('integratedpayables');
			var rc15 = showMenuItem('wiremain');
			var rc18 = showMenuItem('cardpay');
			var rc19 = showMenuItem('loan');
			var rc22 = showMenuItem('book');
			var rc23 = showMenuItem('express');
			var rc24 = showMenuItem('funds');

			modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'style='border:solid;border-width:1px; width:170px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; overflow-x:hidden; overflow-y: auto; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		if(rc == '1')
		{
		    str += "<a id='link_achpayments'  class='default_delete_widget' ";
			str += "href=\"../ach/transmit.html\">";
		    str += "ACH Transmit<\/a><br\/>			";
		}
		if(rc13 == '1' && rc == '1')
		{
		    str += "<a id='link_achfile'  class='default_delete_widget'";
			str += "href=\"../ach/upload_transmit.html\">";
	    	str += "ACH File Upload Transmit<\/a><br\/>			";
		}
		if(rc14 == '1')
		{
		    str += "<a id='link_paymentfile'  class='default_delete_widget' ";
			str += "href=\"../integrated_payables/upload_transmit_select.html\">";
		    str += "Payment File Upload Transmit<\/a><br\/>			";
		}
		if(rc15 == '1')
		{
		    str += "<a id='link_wire'  class='default_delete_widget' ";
		str += "href=\"../wire/transmit.html\">";
		str += "Wire Transfer Transmit<\/a><br\/>			";
		}
		if(rc18 == '1')
		{

		    str += "<a id='link_credit'  class='default_delete_widget'" ;
			str += "href=\"../credit_card/transmit.html\">";
		    str += "Credit Card Transmit<\/a><br\/>			";
		}
		if(rc19 == '1')
		{

		str += "<a id='link_loan'  class='default_delete_widget' ";
		str += "href=\"./loan/transmit.html\">";
		str += "Loan Transmit<\/a><br\/>			";
		}
		if(rc22 == '1')
		{

		str += "<a id='link_book'  class='default_delete_widget' ";
		str += "href=\"../book_transfer/transmit.html\">";
		str += "Book Transfer Transmit<\/a><br\/>			";
		}
		if(rc23 == '1')
		{

		    str += "<a id='link_express'  class='default_delete_widget' ";
			str += "href=\"../express_transfer/express_transmit.html\">";
	    	str += "Express Transfer Transmit<\/a><br\/>			";
		}
		if(rc24 == '1')
		{
		    str += "<a id='link_funds'  class='default_delete_widget' ";
			str += "href=\"../funds_transfer/funds_transmit.html\">";
	    	str += "Funds Transfer Transmit<\/a><br\/>			";
		}
		str += "		<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalCardDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'style='border:solid;border-width:1px; width:180px; ";
		str += "height:25px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../credit_card/activity.html\">";
		str += "Credit Card Activity Report<\/a><br\/>			";
				str += "	<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};
	var openMyModalLoanDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../loan/activity.html\">";
		str += "Loan Activity Report<\/a><br\/>			";
		str += "<a id='link_payments_history'  class='default_delete_widget' ";
		str += "href=\"../loan/summary.html\">";
		str += "Loan Summary Report <\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


var openMyModalInvestDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my' style='border:solid;border-width:1px; width:160px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:10px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../investment_reporting/investment_activity_report_criteria.html\">";
		str += "Investment Activity Report <\/a><br\/>			";
				str += "	<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

var openMyModalCDDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;
		var testLarge=false;
		var testMid = false;
		var linksearch = '';
		var linksummary = '';
		var rc = showMenuItem('largereporting');
		if(rc == '1'){
		testLarge = true;
		}
		else
		{ rc = showMenuItem('midreporting');
		  if(rc == '1')
	 	 testMid = true;
		}
			/*if(testLarge)
			{
			linksearch ="..\/large_reporting\/account_activity_search_cd.html";
			linksummary ="..\/large_reporting\/account_summary_criteria_cd.html";
			}
			else
			if(testMid)
			{
			linksearch ="..\/mid_reporting\/account_activity_search_cd.html";
			linksummary ="..\/mid_reporting\/account_summary_criteria_cd.html";
			}
			else
			{
			linksearch ="..\/account_reporting\/account_activity_search_cd.html";
			linksummary ="..\/account_reporting\/account_summary_criteria_cd.html";
			}*/

			if(testLarge)
			{
			linksearch ="..\/large_reporting\/account_activity_search.html";
			linksummary ="..\/large_reporting\/account_summary_criteria.html";
			}
			else
			if(testMid)
			{
			linksearch ="..\/mid_reporting\/account_activity_search.html";
			linksummary ="..\/mid_reporting\/account_summary_criteria.html";
			}
			else
			{
			linksearch ="..\/account_reporting\/account_activity_search.html";

			}


		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
		str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\" "+ linksearch +"\">";
		str += "Account Activity<\/a><br\/>			";
			if(testLarge || testMid)
		{
		    str += "<a id='link_payments_history'  class='default_delete_widget' ";
			str += "href=\"" + linksummary +"\">Account Summary <\/a>	";
		}
		str += "		<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });

	};

var openMyModalCheckingDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;
		var testLarge=false;
		var testMid = false;
		var linksearch = '';
		var linksummary = '';
		var rc = showMenuItem('largereporting');
		if(rc == '1'){
		testLarge = true;
		}
		else
		{ rc = showMenuItem('midreporting');
		  if(rc == '1')
	 	 testMid = true;
		}
			/*if(testLarge)
			{
			linksearch ="..\/large_reporting\/account_activity_search_checking_widget.html";
			linksummary ="..\/large_reporting\/account_summary_criteria_checking_widget.html";
			}
			else
			if(testMid)
			{
			linksearch ="..\/mid_reporting\/account_activity_search_checking_widget.html";
			linksummary ="..\/mid_reporting\/account_summary_criteria_checking_widget.html";
			}
			else
			{
			linksearch ="..\/account_reporting\/account_activity_search_checking_widget.html";

			}*/

			if(testLarge)
			{
			linksearch ="..\/large_reporting\/account_activity_search.html";
			linksummary ="..\/large_reporting\/account_summary_criteria.html";
			}
			else
			if(testMid)
			{
			linksearch ="..\/mid_reporting\/account_activity_search.html";
			linksummary ="..\/mid_reporting\/account_summary_criteria.html";
			}
			else
			{
			linksearch ="..\/account_reporting\/account_activity_search.html";

			}


		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
		str = "<div id='my'onclick='modalWindowWidget.close();'style='border:solid;border-width:1px; width:150px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"" + linksearch +"\">";
		str += "Account Activity<\/a><br\/>			";
		if(testLarge || testMid)
		{
		    str += "<a id='link_payments_history'  class='default_delete_widget' ";
			str += "href=\"" + linksummary +"\">Account Summary <\/a>";
		}
		str += "			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });

	};

	var openMyModalSavingDiv = function (source) {

	    modalWindowWidget.windowId = "myModal";


	    var de = document.documentElement;
	    var b = document.body;
	    var testLarge = false;
	    var testMid = false;
	    var linksearch = '';
	    var linksummary = '';
	    var rc = showMenuItem('largereporting');
	    if (rc == '1') {
	        testLarge = true;
	    }
	    else {
	        rc = showMenuItem('midreporting');
	        if (rc == '1')
	            testMid = true;
	    }


	    if (testLarge) {
	        linksearch = "..\/large_reporting\/account_activity_search.html";
	        linksummary = "..\/large_reporting\/account_summary_criteria.html";
	    }
	    else
	        if (testMid) {
	            linksearch = "..\/mid_reporting\/account_activity_search.html";
	            linksummary = "..\/mid_reporting\/account_summary_criteria.html";
	        }
	        else {
	            linksearch = "..\/account_reporting\/account_activity_search.html";

	        }


	    var myX = window.event.clientX - 20;
	    var myY = window.event.clientY + 10;

	    var str = '';
	    str = "<div id='my' style='border:solid;border-width:1px; width:150px; ";
	    str += "height:40px;top:" + myY + "px;left:" + myX + "px;position:fixed; ";
	    str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:15px;";
	    str += "background:#FFF; ' >";
	    str += "<a id='link_payments'  class='default_delete_widget' ";
	    str += "href=\"" + linksearch + "\">";
	    str += "Account Activity<\/a><br\/>			";
	    if (testLarge || testMid) {

	        str += "<a id='link_payments_history'  class='default_delete_widget' ";
	        str += "href=\"" + linksummary + "\">Account Summary <\/a>";
	    }
	    str += "			<\/div>";
	    modalWindowWidget.content = str;

	    modalWindowWidget.open();
	    $('#pop').bind('click', function () { modalWindowWidget.close(); });

	};

	var openMyModalUserProfileDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;

		var str = '';
	str = "<div id='my' style='border:solid;border-width:1px; width:180px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:10px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_payments'  class='default_delete_widget' ";
		str += "href=\"../administration/user_admin_approval.html\">";
		str += "User Administration Approval <\/a><br\/>			";
				str += "	<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};


	var openMyModalIssuesDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;
		var rc = showMenuItem('positive');
		var rc1 = showMenuItem('fullrecon');

		var str = '';
	str = "<div id='my' style='border:solid;border-width:1px; width:180px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:10px;";
		str += "background:#FFF; ' >";
			if(rc1 == '1')
		{
		    str += "<a id='link_payments1'  class='default_delete_widget' ";
			str += "href=\"../acct_recon/issue_approval.html\">";
	    	str += "Account Recon Issue Approval <\/a>			";
		}
		if(rc == '1')
		{
		    str += "<a id='link_payments'  class='default_delete_widget'";
			str += "href=\"../positive_pay/issue_approval.html\">";
	    	str += " Positive Pay Issue Approval <\/a><br\/>			";
		}

				str += "	<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

	var openMyModalIssueFilesDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

	//	var myX= window.event.x  ;
		var de = document.documentElement;
        var b = document.body;

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;
		var rc = showMenuItem('positive');
		var rc1 = showMenuItem('fullrecon');

		var str = '';
	str = "<div id='my' style='border:solid;border-width:1px; width:180px; ";
		str += "height:40px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:9px;padding-left:10px;";
		str += "background:#FFF; ' >";
			if(rc1 == '1')
		{
		    str += "<a id='link_payments1'  class='default_delete_widget' ";
			str += "href=\"../acct_recon/issue_approval.html\">";
	    	str += " Account Recon Issue Approval <\/a>			";
		}
		if(rc == '1')
		{
		    str += "<a id='link_payments'  class='default_delete_widget' ";
			str += "href=\"../positive_pay/issue_approval.html\">";
	    	str += " Positive Pay Issue Approval <\/a><br\/>			";
		}

				str += "	<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};

	var openMyModalExceptionsDiv = function(source)
	{

		modalWindowWidget.windowId = "myModal";

		var myX =window.event.clientX -20 ;
		var myY= window.event.clientY +10 ;


		var str = '';
	str = "<div id='my' style='border:solid;border-width:1px; width:135px; ";
		str += "height:30px;top:" + myY +"px;left:" + myX +"px;position:fixed; ";
		str += "font-weight:normal; border-color:#969696; z-index:1000;  padding-top:15px;padding-left:15px;";
		str += "background:#FFF; ' >";
		str += "<a id='link_scheduled'  class='default_delete_widget' ";
		str += "href=\"../positive_pay/except.html\">";
		str += "Exceptions Manager<\/a>			<\/div>";
		modalWindowWidget.content = str;

		modalWindowWidget.open();
		$('#pop').bind('click', function () { modalWindowWidget.close(); });
	};



var openMyTokenPopUp = function(source)
{
	    modalWindow.windowId = "myModal";
		modalWindow.width = 100;
		modalWindow.height = 400;
		modalWindow.content = "<iframe style='border:1px solid black' width='650' height='325' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
};

var openEditWire = function(source)
{
	    modalWindow.windowId = "myModal";
		modalWindow.width = 100;
		modalWindow.height = 400;
		modalWindow.content = "<iframe style='border:1px solid black' width='650' height='200' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
};


function EditWire()
{
    openEditWire('../splash_pages/edit_wire.html');
}

//Function to open Token Transaction PopUp
function NeedTokenApproval()
{
  if(HasTokenApproval())
  {
     openMyTokenPopUp('../splash_pages/secure_token.html');
  }
  else
  {
     ContinueToPage();
  }
}

//Function to open Token Transaction PopUp which navigates to next token screen
function NeedTokenApprovalWithNext()
{
  if(HasTokenApproval())
  {
     openMyTokenPopUp('../splash_pages/secure_token_exception.html');
  }
  else
  {
     ContinueToPage();
  }
}

//Open Manual Transaction Popup
var openManualTransactionModal = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 505;
		modalWindow.height = 510;
		modalWindow.content = "<iframe style='border:1px solid black'width='978' height='470' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

//Open Search Transaction Popup
var openSearchTransactionModal = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 513;
		modalWindow.height = 552;
		modalWindow.content = "<iframe style='border:1px solid black'width='980' height='507' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

var	openRegddModal = function(source)
   {
		modalWindow.windowId = "myModal";
		modalWindow.width = 500;
		modalWindow.height = 504;
		modalWindow.content = "<iframe style='border:1px solid black' width='650' height='508' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

	var	openRegddModalWidgets = function(source)
   {
		modalWindow.windowId = "myModal";
		modalWindow.width = 300;
		modalWindow.height = 644;
		modalWindow.content = "<iframe width='850' style='border:solid;border-width:1px;border-color:#aaa;' height='630' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

	var	openRegddModalWidgetsPartial = function(source)
   {
		modalWindow.windowId = "myModal";
		modalWindow.width = 200;
		modalWindow.height = 504;
		modalWindow.content = "<iframe width='640' style='border:solid;border-width:1px;border-color:#aaa;' height='390' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

	var	openEditAccounts = function(source)
   {
		modalWindow.windowId = "myModal";
		modalWindow.width = 200;
		modalWindow.height = 504;
		modalWindow.content = "<iframe width='640' style='border:solid;border-width:1px;border-color:#aaa;' height='390' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
	};

	//Open Search Transaction Popup
var openImageViewerModal = function(source)
	{
		modalWindow.windowId = "myModal";
		modalWindow.width = 300;
		modalWindow.height = 400;
		modalWindow.content = "<iframe style='border:1px solid black'width='800' height='340' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
		modalWindow.open();
};

var openImageViewerModalnew = function (source) {
    modalWindow.windowId = "myModal";
    modalWindow.width = 300;
    modalWindow.height =600;
    modalWindow.content = "<iframe style='border:1px solid black'width='800' height='640' frameborder='0'  scrolling='no' allowtransparency='true' src='" + source + "'>&lt/iframe>";
    modalWindow.open();
};

//Open Enhanced Bill Pay landing page
function openBillPay(pageName){
	var settings = "width=950,height=500,scrollbars=yes,location=yes,directories=no,status=no,menubar=yes,toolbar=yes,resizable=yes";
	disclosureLink = window.open(pageName, "EnhancedBillPay", settings);
	disclosureLink.focus();
}//


function openBillPayNotes(pageName){
	var settings = "width=490,height=300,scrollbars=yes,location=yes,directories=no,status=no,menubar=yes,toolbar=yes,resizable=yes";
	 window.open(pageName, "EnhancedBillPayNew", settings);
	//disclosureLink.focus();
}//
//Function used to find the last value of query string
function QueryStringValue()
{
    var qsParm = new Array();
	var query = window.location.search.substring(1);
	var parms = query.split('&');
    for (var i=0; i<parms.length; i++) {
    var pos = parms[i].indexOf('=');
     if (pos > 0)
     {
     var key = parms[i].substring(0,pos);
     var val = parms[i].substring(pos+1);
     qsParm[key] = val;

     }
     else
     {
     var key = 0;
     qsParm[key] = 0;
     }
     }
   return qsParm[key];

} //end

function QueryStringValue1()
{
    var qsParm = new Array();
	var query = window.location.search.substring(1);
	var parms = query.split('&');
   return parms;

} //end

//Open Remote Deposit Capture landing page
function openRDC(pageName){
    var settings = "width=950,height=500,scrollbars=yes,location=yes,directories=no,status=no,menubar=yes,toolbar=yes,resizable=yes";
	disclosureLink = window.open(pageName, "RemoteDepositCapture", settings);
	disclosureLink.focus();
}

//Used to display row of HTML if radiobutton is checked
function isCheckedExternalTransfer(menu){

	for(var c=0; c < currentMenuTokens.length; c++){
		currentMenu = document.getElementById(currentMenuTokens[c]);
		currentMenu.style.display="none";
	}

	var newMenuTokens = menu.tokenize(";", "", true);

	currentMenuTokens = newMenuTokens;

	for(var i=0; i<newMenuTokens.length; i++){
		newMenuDisplay = document.getElementById(newMenuTokens[i]);
		newMenuDisplay.style.display="";
	}

}//End isCheckedExternalTransfer Function

//Used to display row of HTML for Loan sub-menu
function isCheckedLoanSub(loanmenu){

	for(var c=0; c < currentLoanTokens.length; c++){
		currentLoanMenu = document.getElementById(currentLoanTokens[c]);
		currentLoanMenu.style.display="none";
	}

	var newLoanTokens = loanmenu.tokenize(";", "", true);

	currentLoanTokens = newLoanTokens;

	for(var i=0; i<newLoanTokens.length; i++){
		newLoanDisplay = document.getElementById(newLoanTokens[i]);
		newLoanDisplay.style.display="";
	}

}//End isCheckedLoanSub Function

//Function used in the navigation menu. Allows the sub navigation menu that is selected,
//to stay visiable when items contained in that sub menu are selected. The function checks the
//value appended to the url which corresponds to a specific sub menu, and displays that sub menu.
function continueDisplay(){

	if(location.search.substring(1) != '')
		isCheckedExternalTransfer(location.search.substring(1));
}// end continueDisplay function

//Function is used in specific tables that have a check all option, when the parent check box is
//checked the children will then be checked.
function checkUncheckAll(theElement) {
     var theForm = theElement.form, z = 0;
	 for(z=0; z<theForm.length;z++){
      if(theForm[z].type == 'checkbox' && theForm[z].name != 'chkParent'){
	  theForm[z].checked = theElement.checked;
	  }
    }
}//checkAll Function

//Function use in the funds transfer and express transfer to direct the client to different pages
//determined by if the "submit for processing check box is checked
function isProcess(isChecked){

	//local Variables
	var theObject = getElement(isChecked);

	if(theObject.checked)
		parent.location.href = nextPage(isChecked, theObject.checked);
	else
		parent.location.href = nextPage(isChecked, theObject.checked);

}//end isProcessFucntion

//helper function of "isProcess" use to determine the correct URL to link to.
function nextPage(theLocation, theValue){
	if(theLocation == "chkProcessFund"){
		if(theValue)
			return "funds_entry_submit_process.html?funds_transfer";
		else
			return "funds_entry_submit.html?funds_transfer";
	}//outer IF
	else{
		if(theValue)
			return "express_entry_submit_process.html?express_transfer";
		else
			return "express_entry_submit.html?express_transfer";
	}//outer Else

}//end nextPage function

//Function used to determine which page to link the user to in ACH:
//payment, child support, STP 820, federal tax or state tax
//depending on the selection.
function whichType(){

	//local Variables
	var selection;

	selection = getElement("SubModuleId");

	if(selection.value == "CCD")
		parent.location.href='template_add_ccdpay.html';
	if(selection.value == "CHILD")
		parent.location.href='template_add_child.html';
	if(selection.value == "CTX")
		parent.location.href='template_add_ctx.html';
	if(selection.value == "FED")
		parent.location.href='template_add_fed.html';
    if(selection.value == "IAT")
        parent.location.href='template_add_iat.html';
	if (selection.value == "PPD")
		parent.location.href='template_add_pay.html';
	if(selection.value == "STATE")
		parent.location.href='template_add_state.html';
	if(selection.value == "STP820")
		parent.location.href='template_add_stp.html';

	if(selection.value == "PPDONE")
		parent.location.href='one_pay.html';
	if(selection.value == "CCDONE")
		parent.location.href='one_ccdpay.html';
	if(selection.value == "CTXONE")
		parent.location.href='one_ctxpay.html';
	if(selection.value == "CHILDONE")
		parent.location.href='one_child.html';
	if(selection.value == "FEDONE")
		parent.location.href='one_fed.html';
	if(selection.value == "STATEONE")
		parent.location.href='one_state.html';
	if(selection.value == "STP820ONE")
		parent.location.href='one_stp.html';
    if(selection.value == "IATONE")
        parent.location.href='one_iat.html';

     if(selection.value == "ALLSEND")
        parent.location.href='send.html';
	 if(selection.value == "CCDSEND")
        parent.location.href='send_one_ccd.html';
	 if(selection.value == "CTXSEND")
        parent.location.href='send_one_ctx.html';
     if(selection.value == "PPDSEND")
		parent.location.href='send_one_pay.html';
	if(selection.value == "CHILDSEND")
		parent.location.href='send_one_child.html';
	if(selection.value == "FEDSEND")
		parent.location.href='send_one_fed.html';
	if(selection.value == "STATESEND")
		parent.location.href='send_one_state.html';
	if(selection.value == "STP820SEND")
		parent.location.href='send_one_stp.html';
    if(selection.value == "IATSEND")
        parent.location.href='send_one_iat.html';

	/** Added following section to switch between screens for ACH Collection and IAT Collection **/
	if(selection.value == "CCDCOL")
		parent.location.href='collect_1.html';
	else if(selection.value == "IATCOL")
		parent.location.href='collect_2.html';
	else if(selection.value == "ALLSER")
	    parent.location.href ='collect.html';
	else if(selection.value == "CTXCOL")
		parent.location.href='collect_3.html';
	else if(selection.value == "PPDCOL")
		parent.location.href='collect_4.html';
	else if(selection.value == "WEBCOL")
		parent.location.href='collect_5.html';
	else if(selection.value == "TELCOL")
		parent.location.href='collect_6.html';

	/** Added following section to switch screens based on request type for Collection - One Time Request flow **/
	/**Updating ACH Collection to CCD, PPD, CTX Collection**/
	if (selection.value == "CCDCol")
		parent.location.href='collect_one.html';
	if (selection.value == "CTXCol")
		parent.location.href='collect_one_ctx.html';
	if (selection.value == "IATCol")
		parent.location.href='collect_iat_one.html';
	if (selection.value == "PPDCol")
		parent.location.href='collect_ppd_one.html';
	if (selection.value == "WEBCol")
		parent.location.href='collect_web_one.html';
	if (selection.value == "TELCol")
		parent.location.href='collect_tel_one.html';

	/** Added following section to switch screens based on request type for Collection - Template flow **/
	/**Updating ACH Collection to CCD, PPD, CTX Collection**/
	if (selection.value == "CCDCollection")
		parent.location.href='template_ach_coll_add.html';
	if (selection.value == "CTXCollection")
		parent.location.href='template_coll_add_ctx.html';
	if (selection.value == "IATCollection")
		parent.location.href='template_iat_coll_add.html';
	if (selection.value == "PPDCollection")
		parent.location.href='template_ppd_coll_add.html';
	if (selection.value == "WEBCollection")
		parent.location.href='template_web_coll_add.html';
	if (selection.value == "TELCollection")
		parent.location.href='template_tel_coll_add.html';




}//which type function

//Function used to determine which page to link the user to in
//Full Account Recon Activity Report depending on the selection.
function whichReport(){

	if(document.getElementById("activity").checked)
		parent.location.href='full_activity_rpt.html';
	if(document.getElementById("outstand").checked)
		parent.location.href='full_outstand.html';
	if(document.getElementById("issue").checked)
		parent.location.href='full_issue.html';
	if(document.getElementById("void").checked)
		parent.location.href='full_void.html';
	if(document.getElementById("stale").checked)
		parent.location.href='full_stale.html';
	if(document.getElementById("correct").checked)
		parent.location.href='full_correct.html';
	if(document.getElementById("stop").checked)
		parent.location.href='full_stoppay.html';

}//which report function

//Function used to determine which page to link the user to in
//Partial Account Recon Activity Report depending on the selection.
function whichPartialReport(){

	if(document.getElementById("ptactivity").checked)
		parent.location.href='part_activity_rpt.html';
	if(document.getElementById("ptstop").checked)
		parent.location.href='part_stoppay.html';

}//which partial report function

//Function used to determine which page to link the user to in
//Deposit Recon Activity Report depending on the selection.
function whichDepositReport(){

	if(document.getElementById("depactivity").checked)
		parent.location.href='dep_activity_rpt.html';
	if(document.getElementById("depexcept").checked)
		parent.location.href='dep_except.html';

}//which deposit report function

function theMonthYearText(diff,which)
{
    //local variables
    var mydate=new Date();
	var year=mydate.getYear();
	var month=mydate.getMonth()+1;
	while(diff >11)
	{
	  year = year - 1;
	  diff=diff - 12;
	}
	month = month - diff;
	if(month <= 0)
	{
	 year = year -1;
	 month = month + 12;
	}
	if (month<10)
		month="0"+month;

	if(which == "month")
		document.write(month);
	if(which == "year")
		document.write(year);

	if(which == "full")
	document.write(month+"/"+theDateHelper(0).substr(2,2)+"/"+year);

	if(which == "futuredate")
	document.write(month+"/"+theDateHelper(-7).substr(2,2)+"/"+year);
}

function theDateText(diff)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year, monthText;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	switch (month) {
            case "01":  monthText = "January"; break;
            case "02":  monthText = "February"; break;
            case "03":  monthText = "March"; break;
            case "04":  monthText = "April"; break;
            case "05":  monthText = "May"; break;
            case "06":  monthText = "June"; break;
            case "07":  monthText = "July"; break;
            case "08":  monthText = "August"; break;
            case "09":  monthText = "September"; break;
            case "10": monthText = "October"; break;
            case "11": monthText = "November"; break;
            case "12": monthText = "December"; break;
            default: monthText = "";break;
        }//end switch

	document.write(monthText + " " + day + ", " + year);

}//end
function getdatealertswidget(diff)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year, monthText;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);
	document.write(month + '\/' + day);
}
function theMonthText(diff)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year, monthText;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	switch (month) {
            case "01":  monthText = "January"; break;
            case "02":  monthText = "February"; break;
            case "03":  monthText = "March"; break;
            case "04":  monthText = "April"; break;
            case "05":  monthText = "May"; break;
            case "06":  monthText = "June"; break;
            case "07":  monthText = "July"; break;
            case "08":  monthText = "August"; break;
            case "09":  monthText = "September"; break;
            case "10": monthText = "October"; break;
            case "11": monthText = "November"; break;
            case "12": monthText = "December"; break;
            default: monthText = "";break;
        }//end switch

	document.write(monthText);

}//end

function getPartialDate(diff)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year, monthText;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	switch (month) {
            case "01":  monthText = "january"; break;
            case "02":  monthText = "february"; break;
            case "03":  monthText = "march"; break;
            case "04":  monthText = "april"; break;
            case "05":  monthText = "may"; break;
            case "06":  monthText = "june"; break;
            case "07":  monthText = "july"; break;
            case "08":  monthText = "august"; break;
            case "09":  monthText = "september"; break;
            case "10": monthText = "october"; break;
            case "11": monthText = "november"; break;
            case "12": monthText = "december"; break;
            default: monthText = "";break;
        }//end switch

document.write(monthText + " " + day + ", " );
}

function theDateTextDetail(diff)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year, monthText,daytext;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	switch (month) {
            case "01":  monthText = "January"; break;
            case "02":  monthText = "February"; break;
            case "03":  monthText = "March"; break;
            case "04":  monthText = "April"; break;
            case "05":  monthText = "May"; break;
            case "06":  monthText = "June"; break;
            case "07":  monthText = "July"; break;
            case "08":  monthText = "August"; break;
            case "09":  monthText = "September"; break;
            case "10": monthText = "October"; break;
            case "11": monthText = "November"; break;
            case "12": monthText = "December"; break;
            default: monthText = "";break;
        }//end switch

		switch (day) {

            case "01":
			case "21":
			case "31":  daytext = day+ "st"; break;

            case "02":
			case "22":  daytext =day+ "nd"; break;

            case "03":
			case "23":  daytext = day+"rd"; break;

            case "04":
			case "05":
			case "06":
			case "07":
			case "08":
			case "09":
			case "10":
			case "11":
			case "12":
			case "13":
			case "14":
			case "15":
			case "16":
			case "17":
			case "18":
			case "19":
			case "20":
			case "24":
			case "25":
			case "26":
			case "27":
			case "28":
			case "29":
			case "30": daytext = day+"th"; break;
        }//end switch

	document.write(monthText + " " + daytext + ", " + year);

}//end

//function used to display the day, month and year,
//formatted together where needed. diff is equal to the number of days you are subtracting from
//the current date. diff cannot exceed 31 days. display format: (mm/dd/yyyy)
function theDate(diff){

	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	document.write(month +"/" +day+"/" +year);

}//end theDate
function theDatereturn(diff){

	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	return(month +"/" +day+"/" +year);

}//end theDate
//function used to display the day, month and year, without leading zeros in month and day
//formatted together where needed. diff is equal to the number of days you are subtracting from
//the current date. diff cannot exceed 31 days. display format: (mm/dd/yyyy)
function theDateNLZ(diff){

	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year;
	var mnlz, dnlz;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	mnlz=eval(month);
	dnlz=eval(day);

	document.write(mnlz +"/" +dnlz+"/" +year);

}//end theDateNLZ

//function used to separate the day, month and year so they can be displayed,
//individually were needed. diff is equal to the number of day you are subtracting from the
//the current date cannot exceed 31 days. which has to be either "month" "day" "year" each
//will ouput that specific value.
function theDateSub(diff,which)
{
	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	if(which == "month")
		document.write(month);
	if(which == "day")
		document.write(day);
	if(which == "year")
		document.write(year);

}//end theDateSub function

//function will move the date on day into the future and write that date
//to the html page. 'which' will either be 'month', 'day' or 'year and 'which' will be
//writen to the screen. If 'which' is NULL mm/dd/yyyy will be the format of the output
function theDateFuture(which)
{
	//localVariables
	var subDate = theDateHelper(0);
	var month, day, year;
	myArray = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //array of month lengths

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	day ++;

	if(myArray[month - 1] < day){
		if(month == 12){
			month = "01";
			year ++;
			day = 1;
		}//if
		else{
			day = 1;
			month ++;
		}//else
	}//if

	//format day
	if (day<10)
		day="0"+day;


	if(which == null){
		document.write(month +"/" +day+"/" +year);
	}//if
   if(which == "month")
		document.write(month);
	if(which == "day")
		document.write(day);
	if(which == "year")
		document.write(year);
}//end theDateFuture

//Helper Function to "theDate" and "theDateSub" Functions returns
//the current day minus a diff if entered
function theDateHelper(diff)
{
	//local variables
	var mydate=new Date();
	var year=mydate.getYear();
	var month=mydate.getMonth()+1;
	var day=mydate.getDate();
	var subValue = day - diff; //value that will be subracted from previous month if value is negative
	myArray = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //array of month lengths
          curDaysInMonth = myArray[month - 1];

	//format the year
	if (year < 1000)
		year+=1900;


	//We will be subtracting the value 'diff' from days.
	//But we need to determine if we need to go back a month
	if(subValue <= 0){

		//if month == 1 which is january we will move back to december
		//as well as move the year back one.
		if(month == 1){
			month = 12;
			year -= 1;
		}
		//if month isn't one just subtract a month
		else{
			month -= 1;
		}//else

		//find the day in the previous month, looks in the array creates with the month
		//lengths and adds subValue to that number. subValue is negative that is why we
		//are adding in this case.
		day = myArray[month - 1] + subValue;
	}//end if
	//if day - diff isn't less than or equal to zero just subtract.
          else if (subValue > curDaysInMonth)
          {
             //if month == 1 which is january we will move back to december
              //as well as move the year back one.
              if (month == 12) {
                  month = 1;
                  year += 1;
              }
              //if month isn't one just subtract a month
	else{
                  month += 1;
              } //else
              //find the day in the previous month, looks in the array creates with the month
              //lengths and adds subValue to that number. subValue is negative that is why we
              //are adding in this case.
              day = subValue - curDaysInMonth;

          } else
          {    day -= diff;
	}//else

	//format month and day
	if (month<10)
		month="0"+month;
	if (day<10)
		day="0"+day;

	//return the month day and year in string format
	return month.toString() + day.toString() + year.toString();

}//end theDateHelper

//function to calculate historical dates for loan activity that begins 6 months from the current date
//function will move the date by months into the past, the day will be 5 days from the current day
//'diff' is a number of months, 'which' will either be 'month', 'day' or 'year'
//and 'which' will be written to the screen. If 'which' is NULL, mm/dd/yyyy will be the format of the output
function theDatePast(diff,which)
{
	//localVariables
	var subDate = theDatePastHelper(diff);
	var month, day, year;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	if(which == "full"){
		document.write(month +"/" +day+"/" +year);
	}//if
    if(which == "month")
		document.write(month);
	if(which == "day")
		document.write(day);
	if(which == "year")
		document.write(year);
}//end theDatePast

//Helper Function to "theDatePast" Function
//Returns the current day minus a diff if entered
function theDatePastHelper(diff)
{
	//local variables
	var mydate=new Date();
	var year=mydate.getYear();
	var month=mydate.getMonth()+1;
	var today=mydate.getDate();
	var subValue = (month - diff);
	var subDate = theDateHelper(-5);
 	var subDay = subDate.substr(2,2);
	myArray = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //array of month lengths

	//format the year
	if (year < 1000)
		year+=1900;

	//get the month
   	if (subValue <= 0){
	    month = (subValue + 12);
		year-=1;
		}//end if
	else month = subValue;

	if (subDay > myArray[month-1])
		day = subDay - myArray[month-1];
	else
		day = eval(subDay);

	if (today <= day){
		month-=1;
	}//end if

	if (month == 0){
		month = 12;
		year-=1;
	}//end if

	//format month and day
	if (month<10)
		month="0"+month;
	if (day<10)
		day="0"+day;

	//return the month day and year in string format
	return month.toString() + day.toString() + year.toString();

}//end theDatePastHelper

//function to calculate the next payment date for loans, always one month in future of current date
//mm/dd/yyyy will be the format of the output
function theNextPayDate()
{
	//localVariables
	var subDate = theDateHelper(0);
	var month, day, year;
	myArray = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //array of month lengths

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	month ++;
	day ++;

	if(myArray[month-1] < day){
		if(month == 12){
			month = "01";
			year ++;
			day = 1;
		}//if
		else{
			day = 1;
			month ++;
		}//else
	}//if

	//format month
	if (month<10)
		month="0"+month;

	//format day
	if (day<10)
		day="0"+day;

	document.write(month +"/" +day+"/" +year);

}//end theNextPayDate

//function to calculate the date "which" number of weeks prior to today for Statement dates
//mm/dd/yyyy will be the format of the output
function sixWeeksAgo()
{
	//local variables
	var mydate=new Date();
	var year=mydate.getYear();
	var month=mydate.getMonth();
	var day=mydate.getDate();
 	var subDay=mydate.getDate()-42;

	//format the year
	if (year < 1000)
		year+=1900;

	if (day < subDay)
		month-=1;

	//get the month
   	if (month <= 0){
	    month += 12;
		year-=1;
		}//end if

	//format month and day
	if (month<10)
		month="0"+month;
	if (day<10)
		day="0"+day;

	document.write(month +"/" +day+"/" +year);

}//end sixWeeksAgo

//function to calculate the date one week out from today for Bill Pay due dates
//mm/dd/yyyy will be the format of the output
function inOneWeek()
{
	var AddDays = 7; //  How many days ahead of the current date

    TDate = new Date();
    TDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    TMonth = new Array('1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12');
    MonthDays = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');

    CurYear = TDate.getYear();
    if (CurYear < 2000)
        CurYear = CurYear + 1900;

    CurMonth = TDate.getMonth();
    CurDayOw = TDate.getDay();
    CurDay = TDate.getDate();
    month = TMonth[CurMonth];
    if (month == 'February')  {
        if (((CurYear % 4)==0) && ((CurYear % 100)!=0) || ((CurYear % 400)==0)) {
            MonthDays[1] = 29;
        }
        else {
            MonthDays[1] = 28;
        }
    }

    days = MonthDays[CurMonth];
    CurDay += AddDays;
    if (CurDay > days) {
        if (CurMonth == 11) {
            CurMonth = 0;
            month = TMonth[CurMonth];
            CurYear = CurYear + 1
        }
        else {
            month = TMonth[CurMonth+1];
        }
        CurDay = CurDay - days;
    }

    TheDate = month + "/";
    TheDate += CurDay + "/";
    if (CurYear<100) CurYear="19" + CurYear;
        TheDate += CurYear;

    document.write(TheDate);

}//end inOneWeek

//function to calculate the date two weeks out from today for Bill Pay due dates
//mm/dd/yyyy will be the format of the output
function inTwoWeeks()
{
	var AddDays = 14; //  How many days ahead of the current date

    TDate = new Date();
    TDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    TMonth = new Array('1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12');
    MonthDays = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');

    CurYear = TDate.getYear();
    if (CurYear < 2000)
        CurYear = CurYear + 1900;

    CurMonth = TDate.getMonth();
    CurDayOw = TDate.getDay();
    CurDay = TDate.getDate();
    month = TMonth[CurMonth];
    if (month == 'February')  {
        if (((CurYear % 4)==0) && ((CurYear % 100)!=0) || ((CurYear % 400)==0)) {
            MonthDays[1] = 29;
        }
        else {
            MonthDays[1] = 28;
        }
    }

    days = MonthDays[CurMonth];
    CurDay += AddDays;
    if (CurDay > days) {
        if (CurMonth == 11) {
            CurMonth = 0;
            month = TMonth[CurMonth];
            CurYear = CurYear + 1
        }
        else {
            month = TMonth[CurMonth+1];
        }
        CurDay = CurDay - days;
    }

    TheDate = month + "/";
    TheDate += CurDay + "/";
    if (CurYear<100) CurYear="19" + CurYear;
        TheDate += CurYear;

    document.write(TheDate);

}//end inTwoWeeks

//function to calculate the date three weeks out from today for Bill Pay due dates
//mm/dd/yyyy will be the format of the output
function inThreeWeeks()
{
	var AddDays = 21; //  How many days ahead of the current date

    TDate = new Date();
    TDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    TMonth = new Array('1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12');
    MonthDays = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');

    CurYear = TDate.getYear();
    if (CurYear < 2000)
        CurYear = CurYear + 1900;

    CurMonth = TDate.getMonth();
    CurDayOw = TDate.getDay();
    CurDay = TDate.getDate();
    month = TMonth[CurMonth];
    if (month == 'February')  {
        if (((CurYear % 4)==0) && ((CurYear % 100)!=0) || ((CurYear % 400)==0)) {
            MonthDays[1] = 29;
        }
        else {
            MonthDays[1] = 28;
        }
    }

    days = MonthDays[CurMonth];
    CurDay += AddDays;
    if (CurDay > days) {
        if (CurMonth == 11) {
            CurMonth = 0;
            month = TMonth[CurMonth];
            CurYear = CurYear + 1
        }
        else {
            month = TMonth[CurMonth+1];
        }
        CurDay = CurDay - days;
    }

    TheDate = month + "/";
    TheDate += CurDay + "/";
    if (CurYear<100) CurYear="19" + CurYear;
        TheDate += CurYear;

    document.write(TheDate);

}//end inThreeWeeks

//Get last year (yyyy)
function lastYear()
{
	var mydate = new Date();
	var year=mydate.getYear();

	year -= 1;
	document.write(year);

}//end lastYear

//Get last month (mm and yyyy)
function last1Month(which)
{
	var mydate = new Date();
	var month=mydate.getMonth()+1;
	var year=mydate.getYear();

	month -= 1;
	if (month == 0){
		month = "12";
		year --;
	}
    if (month<10)
		month="0"+month;
	if(which == "month")
		document.write(month);
	if(which == "year")
		document.write(year);

}//end last1Month

//Get last month (mm and yyyy)
function last2Month(which)
{
	var mydate = new Date();
	var month=mydate.getMonth()+1;
	var year=mydate.getYear();

	month -= 2;
	if (month == 0){
		month = "12";
		year --;
	}
    if (month < 0){
		month = "11";
		year --;
	}
	if (month<10)
		month="0"+month;
	if(which == "month")
		document.write(month);
	if(which == "year")
		document.write(year);

}//end last1Month

//Get next month (mm and yyyy)
function nextMonth(which)
{
	var mydate = new Date();
	var month=mydate.getMonth()+2;
	var year=mydate.getYear();

	if (month == 13){
		month = "01";
		year ++;
	}
    if (month<10)
		month="0"+parseInt(month);
	if(which == "month")
		document.write(month);
	if(which == "year")
		document.write(year);

}//end nextMonth

//Current Time function for only hours and minutes
function theCurrentTimeWithoutSeconds()
{
	var currtime = new Date();
	var hour=currtime.getHours();
	var min=currtime.getMinutes();
	var ampm;

	if (hour>11)
		ampm="pm";
	else
		ampm="am";

	if (hour>12)
		hour=hour-12;

	if (hour<10)
		hour="0"+hour;
	if (min<10)
		min="0"+min;

	document.write(hour + ":" + min + ampm);

}//end theCurrentTimeWithoutSeconds

//Current Time function
function theCurrentTime()
{
	var currtime = new Date();
	var hour=currtime.getHours();
	var min=currtime.getMinutes();
	var sec=currtime.getSeconds();

	if (hour>11)
		ampm="PM";
	else
		ampm="AM";

	if (hour>12)
		hour=hour-12;

	if (hour<10)
		hour="0"+hour;
	if (min<10)
		min="0"+min;
	if (sec<10)
		sec="0"+sec;

	document.write(hour + ":" + min + ":" + sec + " " + ampm);

} //end theCurrentTime

function thePastTime(hrs) {
    var currtime = new Date();
    var hour = currtime.getHours();
    var min = currtime.getMinutes();
    var sec = currtime.getSeconds();

    hour = hour - hrs;

    if (hour > 11)
        ampm = "PM";
    else
        ampm = "AM";

    if (hour > 12)
        hour = hour - 12;

    if (hour < 10)
        hour = "0" + hour;
    if (min < 10)
        min = "0" + min;
    if (sec < 10)
        sec = "0" + sec;

    document.write(hour + ":" + min + ":" + sec + " " + ampm);

} //end theCurrentTime

function theCurrentTime1(val)
{
	var currtime = new Date();
	var hour=currtime.getHours();
	var min=currtime.getMinutes();
	var sec=currtime.getSeconds();
	hour = hour + parseInt(val);
	if (hour>11)
		ampm="PM";
	else
		ampm="AM";

	if (hour>12)
		hour=hour-12;

	if (hour<10)
		hour="0"+hour;
	if (min<10)
		min="0"+min;
	if (sec<10)
		sec="0"+sec;

	document.write(hour + ":" + '00' + ":" + '00' + " " + ampm);

}//end theCurrentTime

//Helper Function used for compatibility between IE to FF browsers
function getElement(id)
{
	if (document.getelementbyid)
		return document.getelementbyid(id);
	else
		return eval('document.all.' + id);
}//end getElement

//displayRow Function
//Function takes a row "id" and displays that row or hides
//the row depending on the current state of the row
function displayRow(theRow)
{
	temp = getElement(theRow);

	if(temp.style.display == "")
		temp.style.display = 'none';
	else
		temp.style.display = "";

}//end displayRow

//function radioButtonRedirect
//This function take two variable, both of which are desination
//urls. The function will test on a bool value and redirect to
//the appropriate URL variable.
function radioButtonRedirect(nextURL, altURL)
{
	var testValueBool = false;
	var testValueTwoBool = false;
	var testValueThreeBool = false;
	var testValue,testValueTwo,testValueThree;

	//Determine if the quickbook radio button is checked
	if(document.getElementById("quickbook"))
	{
		testValueBool = true;
		testValue = document.getElementById("quickbook").checked;
	}
	//Determine if the quicken radio button is checked
	if(document.getElementById("quicken"))
	{
		testValueTwoBool = true;
		testValueTwo = document.getElementById("quicken").checked;
	}

	//Determine if the msmoney radio button is checked
	if(document.getElementById("msmoney"))
	{
		testValueThreeBool = true;
		testValueThree = document.getElementById("msmoney").checked;
	}

	//if one of the cased equal true redirect to the altURL
	if((testValue && testValueBool) || (testValueTwo && testValueTwoBool) || (testValueThree && testValueThreeBool))
		openDownload(altURL);
	else
		parent.location.href=nextURL;

}//end radioButtonRedirect

//function fundChange
//function that is used in Bill Pay to confirm the funding rules and direct the user to correct URL
//URL = the desination url
function fundChange(URL)
{
	//localVariables
	var confirmValue = false;

	//confirm statement
	confirmValue = confirm('Your new primary/default payment method/funding account will ONLY be used for setting up new payees. The current funding source for existing payees and scheduled payments will NOT change.');
	confirmLocation(confirmValue,URL); //call to the confirmLocation function

}//end function fundChange


/************************************************************************/
/************************************************************************/
/******** ACH FUNCTIONS **********/
//function sumDiff
//function that is used to compare two variables and direct the user to correct URL
//first = the id of the control input box should be id'ed as 'control'
//second = the id of the total input box should be id'ed as 'total'
//variance = the id of the variance input box shoulb be id'ed as 'variance'
//URL = the desination url
//account = the account name and number
//type = what type of account this is ach...ect
function sumDiff(first, second, variance, URL, account, type)
{
	//localVariables
	var firstValue = 0;
	var secondValue = 0;
	var varianceValue = 0;
	var confirmValue = false;
	var checkVariance = false;

	//check if the id's are valid and the the brower understands getElementById
	if( document.getElementById(first) && document.getElementById(second) && document.getElementById(variance))
	{
		firstValue = document.getElementById(first).value; //get the value of first
		secondValue = document.getElementById(second).value; //get the value of second
		varianceValue = document.getElementById(variance).value; //get the value of third

		//call to the isVariance function the function returns a boolean
		checkVariance = isVariance(firstValue,secondValue,varianceValue);

		//Test the value of the checkVariance variable which was set from the return from the isVariance function
		//If there is a variance between the total and control we will proceed inside the if statement, but if there
		//is not variance between the two or their was no control entered at all procee to the else statement
		if( checkVariance )
			{
				//variable used to hold the diff between first and second variable
				var theDiff = diff(firstValue,secondValue); //call to the diff function
				theDiff = theDiff.toFixed(2); //format 'theDiff' variable to allow only 2 decimal places

				//Confirm statement output to client informing them of difference in values
				confirmValue = confirmDiff(secondValue,firstValue,theDiff); //call to the confirmDiff statement

				//Uses return from confirmDiff function, if the client doesn't mind the values are different then we will
				//proceed as normal. If the client has made an error; return the to current page.
				if(confirmValue)
					{
						confirmValue = confirmStatement(secondValue, account, type); //call to the confirmStatement function
						confirmLocation(confirmValue,URL); //call to the confirmLocation function
					}//end if
				else
					{
						confirmLocation(confirmValue,URL); //call to the confirmLocation function
					}
			}//end if
		//If there is no variance proceed as normal
		else
			{
			confirmValue = confirmStatement(secondValue, account, type); //call to the confirmStatement function
			confirmLocation(confirmValue,URL); //call to the confirmLocation function
			}//else
	}//if
}//end function sum


//diff Function
//function takes two number variables and returns the absolute
//value between the two numbers.
function diff(firstValue, secondValue)
{
	//variable used to hold the diff between first and second variable
	var localDiff = 0;
	localDiff = Math.abs(firstValue - secondValue); //finds absolute value
	return localDiff;
}//end diff Function

//confirmDiff Function
//This function will be fired when there is a difference between the control and the total
//function takes three variables secondValue and firstValue are positive numbers(int or double),
//theDiff has to be the difference between those two numbers(positive number).
//the function will then return a confirm statement. This function will be
//used in the ACH module of the demo, and is a helper function of sumDiff function.
function confirmDiff(secondValue,firstValue,theDiff)
{
	//local variable
	var confirmValue = false;

	//confirm statement
	confirmValue = confirm('The total transfer amount of $' + secondValue + ' differs from the control total of $' + firstValue + ' by $' + theDiff + '. Do you wish to proceed with this transfer.');

	return confirmValue;
}//end confirmDiff()

//confirmStatement Function
//This function will be fired every time the submit is selected either after the confirmDiff
//is fired or in the case confirmDiff isn't fired at all this function will fire first.
//function takes three variables secondvalue is a positive number (int or double),
//account is the account in which the transaction will be acting on, and type
//is the type of transaction that will be taking place.
function confirmStatement(secondValue, account, type)
{
	//local variable
	var confirmValue = false;

	//confirm statement
	confirmValue = confirm('Please confirm the transfer of the amount of $' + secondValue + '\nvia ' + type + ' from account ' + account + ' ACCOUNT.');


	return confirmValue;
}//end confirmStatement


//confirmLocation Function
//Helper function which takes a boolean confirmValue and if true links to URL which is the
//second variable entered. If false return to the current page.
function confirmLocation(confirmValue,URL)
{
	if(confirmValue)
		return parent.location.href = URL; //link to the new page
	else
		return; //return to the current page
}//end confirmLocation

//updateTotal Function
//function takes one variable "number" number is the number
//of table rows that will be added together. Each added element must be
//named and id'ed "amount1", "amount2", "amount3"... and so on. The field
//where the total value will be stored must be named and id'ed "total". The
//field where the control will be stored will be called and id'ed "control".
//The field where the variance will be stored will be called and id'ed "variance".
function updateTotal(number)
{
	//local variables
	var totalValue = 0;
	var tempValue, tempId;
	var regExp = /[0-9]*\.[0-9]{2}/; //regular express to extract valid dollar amounts

	//for loop will loop through all the input boxes labels amount1, amount2, ... and so on.
	//the values of those input boxes will be added together and displayed in the input box
	//id'ed 'total'
	for(var x=1; x <= number; x++)
	{
		tempId = "amount" + x; //creates table ID(amount1,amount2,amount3...	)
		tempValue = document.getElementById(tempId).value.replace(/,/g,""); //returns element value w/out "," inserted
		tempValue = parseFloat(tempValue); //converts to a float
		tempValue = tempValue.toFixed(2); //formats the float to have only two decimal places

		//if statement to test the value 'tempValue' again the regular expression 'regExp'
		//to check if 'tempValue' is valid for currency.
		if(regExp.test(tempValue))
		{
			totalValue += parseFloat(tempValue); //parses to float and add to total
		}//if
		else
		{
			//alert the client that the number they have entered isn't a valid number, and then return from the function
			//leaving the 'total' value unchanged
			alert(document.getElementById(tempId).value + " is not a valid number.\nPlease enter a valid number.");
			return; //return out of the function
		}//else

	}//end for

	//sets element "total" value and formates it to 2 decimal places
	document.getElementById('total').value = totalValue.toFixed(2);
	fillVariance('control','total'); //call the fillVariance function to update the 'control' and 'variance' input boxes

}//end updateTotal Function


//fillVariance Function
//This function will find the variance if any between the control and total and place that value
//in the 'variable' input box.
//This function takes two variables. 'control' is the id of the input box used to store the
//conrol variable, and 'total' is the id of the input box used to store the total value.
function fillVariance(control, total)
{
	//local variables
	var variance = 0;
	var controlValue = 0;
	var totalValue = 0;

	//find and format 'control' value
	controlValue = document.getElementById(control).value.replace(/,/g,""); //returns element value w/out "," inserted
	controlValue = parseFloat(controlValue); //convert 'controlValue' to float

	//find and format 'total' value
	//'total' value will already be formatted from previous function so formatting
	//will not be necessary.
	totalValue = document.getElementById(total).value;

	//if controlValue is valid number
	if(!isNaN(controlValue))
	{
		//the value of 'control' will be changed to 'controlValue' formatted
		//to two decimal places.
		document.getElementById('control').value = controlValue.toFixed(2);
	}

	//find the difference, if any between controlValue and totalValue.
	//that value will be stored in the variable 'variance'
	variance = diff(controlValue,totalValue); //call the function diff

	//the variable 'variance' will be used to set the input box
	//with the id 'variance'. If the variable 'variance' is not
	//a number set the input box with the id 'variance' to 0.00
	//if the variable 'variance' is a valid number format it to
	//two decimal places and then set it as the value of the input
	//box with the id 'variance'
	if(isNaN(variance))
		document.getElementById('variance').value = "0.00";
	else
		document.getElementById('variance').value = variance.toFixed(2);

}//endfillVariance

//isVariance Function
//This function will return true is there is a variable in between the
//total and the control, and false if there is not.
//This function will take three variables firstValue is the value
//of the 'control' input box, secondValue is the value of the 'total'
//input box and varianceValue is the value of the 'variance' input box
function isVariance(firstValue,secondValue,varianceValue)
{
	firstValue = parseFloat(firstValue); //convert firstValue to float, secondValue and VarianceValue
													 //have been converted earlier and stored in the their respective
													 //input boxes

	//case the will have a false return value
	//meaning there is not a variance between control and total
	if(secondValue == firstValue.toFixed(2))
		return false;
	if(isNaN(firstValue))
		return false;
	if(secondValue == varianceValue)
		return false;
	if(isNaN(firstValue - secondValue))
		return false;

		//return true if there is a variance between control and total
		return true;

}//ed isVariance

/******  END ACH FUNCTIONS********************/
/************************************************************************/
/************************************************************************/
/************************************************************************/
function CheckApprovals(id,currentvalue)
{
			multipleApproavls = showMenuItem('multipleapprovals');
 if(multipleApproavls == "1")
 {

  document.getElementById(id).innerHTML = currentvalue + ' ';
 }
 else
 {
  document.getElementById(id).innerHTML = '1 ';

 }
}

function theDateReturn(diff){

	//local variables
	var subDate = theDateHelper(diff);
	var month, day, year;

	//dividing the substring created from theDate function
	month = subDate.substr(0,2);
	day = subDate.substr(2,2);
	year = subDate.substr(4,4);

	return (month +"/" +day+"/" +year);

}//end theDate


function changeBgImage (image , id) {
	//element = getDocumentByID(id);
	//element.style.background-image = url(image);
	document.getElementById(id).style.border="1px solid #CCCCCC";
	document.getElementById(id).style.backgroundImage = 'url('+image+')';
	document.getElementById(id).style.color = "#000";
}

function changeBgImage1 (image , id) {
	//element = getDocumentByID(id);
	//element.style.background-image = url(image);
	document.getElementById(id).style.border="1px solid #CCCCCC";
	document.getElementById(id).style.backgroundImage = 'url('+image+')';
	document.getElementById(id).style.color = "#464646";
}

function getqstring(variable)
	{

		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0; i<vars.length; i++)
		{
		var pair = vars[i].split("=");
		if (pair[0] == variable)
		{
		return pair[1];
		//alert ("hello");
		}
		}
	}

function getrequesttypedesc(val)
{
	var value;
	//alert(val);
	if(val=="CCDFileDef")
	{
		value="CCD Payment";
	}
	else if(val=="CHILDFileDef")
	{
		value="Child Support Payment";
	}
	else if(val=="CTXFileDef")
	{
		value="CTX Payment";
	}
	else if(val=="FEDFileDef")
	{
		value="Federal Tax";
	}
	else if(val=="IATFileDef")
	{
		value="IAT Payment";
	}
	else if(val=="PPDFileDef")
	{
		value="PPD Payment";
	}
	else if(val=="STATEFileDef")
	{
		value="State Tax";
	}
	else if(val=="STP820FileDef")
	{
		value="STP 820 Payment";
	}
	//alert(value);
	return value;
}

function getrequesttypedesccoll(val)
{
	var value;
	//alert(val);
	if(val=="CCDFileDef")
	{
		value="CCD Collection";
	}
	else if(val=="CTXFileDef")
	{
		value="CTX Collection";
	}
	else if(val=="IATFileDef")
	{
		value="IAT Collection";
	}
	else if(val=="PPDFileDef")
	{
		value="PPD Collection";
	}
	else if(val=="TELFileDef")
	{
		value="TEL Collection";
	}
	else if(val=="WEBFileDef")
	{
		value="WEB Collection";
	}

	//alert(value);
	return value;
}


function getquerystringvalues()
{
	var reqtype= getqstring('rval');
	var filetype= getqstring('filetype');

	//alert(reqtype);
	//alert(reqtype);alert(filetype);
	//var reqtypeval = getrequesttypedesc(reqtype);
	//document.getElementById('req_type').innerHTML = reqtypeval;
	//document.getElementById('file_type').innerHTML = filetype;
}

function writequerystringvalues()
{
	var reqtype= getqstring('rval');
	var filetype= getqstring('filetype');
	var reqtypeval = getrequesttypedesc(reqtype);
	document.getElementById('req_type').innerHTML = reqtypeval;
	document.getElementById('file_type').innerHTML = filetype;
}

function editdesc()
{
		var reqtype= getqstring('rval');
		var filetype= getqstring('filetype');
		toLocation = 'filedef_send_add.html?rval='+reqtype+'&filetype='+filetype+'';
	    location.href = toLocation;

}


function writequerystringvaluescoll()
{
	var reqtype= getqstring('rval');
	var filetype= getqstring('filetype');
	var reqtypeval = getrequesttypedesccoll(reqtype);
	document.getElementById('req_type').innerHTML = reqtypeval;
	document.getElementById('file_type').innerHTML = filetype;
}

function editdesccoll()
{
		var reqtype= getqstring('rval');
		var filetype= getqstring('filetype');
		toLocation = 'filedef_coll_add.html?rval='+reqtype+'&filetype='+filetype+'';
	    location.href = toLocation;

}
