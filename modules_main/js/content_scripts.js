// JavaScript Document

//functions writeWelcomeAccounts, writeWelcomeLoans, writeWelcomeCard and writeWelcomeRewards
//are used to write the summary account reports on the Welcome page
function getAccounttype()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("accounttype");
	return current[0];
}//end getAccounttype

function writeWelcomeAccounts(id)
{
	var account = getAccounttype();

	if(account == 'reporting')
		writeReporting(id);
	else
		writeAccountReporting(id);

}//end writeWelcomeAccounts
function writeWelcomeAccountsWidgets(id)
{
	var account = getAccounttype();

	if(account == 'reporting')
		writeReportingWidgets(id);
	else
		writeAccountReportingWidgets(id);

}//end writeWelcomeAccounts

function helpwriteContent(id,html)
{
	if(document.getElementById(id))
	{
	    document.getElementById(id).innerHTML = html;

	}//if
}//end helpwriteContent


function checkreporting()
{
	var largerep = showMenuItem('largereporting');
	var midrep = showMenuItem('midreporting');

	if(largerep !=1 && midrep !=1)
	{
		document.getElementById('depositheader').style.display = 'none';
		document.getElementById('accountcontent').style.display = 'none';
	}
}

function checkreportingwidget()
{
	var largerep = showMenuItem('largereporting');
	var midrep = showMenuItem('midreporting');

	if(largerep !=1 && midrep !=1)
	{
		document.getElementById('checkingacc').style.display = 'none';
		document.getElementById('accountcontent').style.display = 'none';
		document.getElementById('seperator').style.display = 'none';
		document.getElementById('saving_header').style.display = 'none';
		document.getElementById('savingcontent').style.display = 'none';
	}
}

function writeReporting(id)
{
	checkreporting();
	var str='';

	var testLarge=false;
	var testMid = false;
	var testRegDD = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}

	var rc= showMenuItem('regdd');
	if(rc == '1'){
	testRegDD = true;
	}

	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding="4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader">';
	str+='<th align="left" scope="col"><span class=\'dgSortLink\'>ABA/TRC<\/span><\/th>';
	str+='<th align="left" scope="col"><span class=\'dgSortLink\'>Account<BR>Number<\/span><\/th>';
	str += '<th align="left" scope="col" class=';
	str+='\'dgSortLink royal_grid_sorted\'>Description&nbsp;';

	str+='<\/th>';
	str+='<th align="right" scope="col">Balance<\/th><\/tr>';
	str+='<tr class="tableInnerHeader">';
	str+='<td colspan="4">';
	str+='Checking Accounts<\/td><\/tr>';
	str+='<tr class="dgItem1">';
	str+='<td align="left">';
	str+='081203790<\/td>';
	str+='<td align="left">';
	if(testLarge)
	str+='<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/account_activity.html">';
	str+='*4511<\/a><\/td>';
	str+='<td align="left">';
	str+='PRESTIGE OPERATING ACCOUNT<\/td>';
	str+='<td align="right">';
	if(testRegDD)
	{
	str+='<a href="javascript:openRegddModal(\'..\/splash_pages\/balance_checking.html\')" class="default">';
	str+='$173,474.72</a>';
	}
	else
	str+='$173,474.72';
	str+=' <\/td><\/tr>';
	str+='<tr class="dgItem0">';
	str+='<td align="left">';
	str+='081203790<\/td>';
	str+='<td align="left" class="inactive_link">';
	str+='*4512<\/td>';
	str+='<td align="left">';
	str+='PRESTIGE PAYROLL ACCOUNT<\/td>';
	str+='<td align="right">';
	str+='$26,628.11<\/td><\/tr>';
	str+='<\/table>';

	helpwriteContent(id,str)

}//end writeReporting

function writeReportingWidgets(id)
{
	checkreportingwidget();
	document.getElementById('saving_header').style.display = 'none';
	var str='';

	var testLarge=false;
	var testMid = false;
	var testRegDD = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}

	var rc= showMenuItem('regdd');
	if(rc == '1'){
	testRegDD = true;
	}

	str+='<table  cellspacing="0" cellpadding="0" border="0" width="100%" >';
	str+='<tr class="imp_balances" id="cont1" style="display:none;">';
	str+='<td >CONTROL DISB OPERATING ACCOUNT, <span class="inactive_link">*5337<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="cont2" style="display:none;">';
	str+='<td >CONTROL DISB PAYROLL ACCOUNT, <span class="inactive_link" >*5344<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="east1" style="display:none;">';
	str+='<td align="left" >EASTWOOD NATIONAL BANK CONSTR ACCT, <span class="inactive_link">*1359<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="mark1" style="display:none;">';
	str+='<td align="left" >MARK OR MARY SPENCER ACCOUNT, <span class="inactive_link">*9999<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="pres_disb1" style="display:none;">';
	str+='<td align="left" >PRESTIGE DISBURSING ACCOUNT, <span class="inactive_link">*2790<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="pres_oper1">';



	str+='<td align="left">';
	str+='PRESTIGE OPERATING ACCOUNT, ';
	if(testLarge)
	str+='<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/account_activity.html">';
	str+='*4511<\/a>';
	str+='<\/td><td align="right">';
	if(testRegDD)
	{
		var current = eval("regDD_calculations");
		if(current == 'yes')
		{

			str+='$173,474.72<br\/> <a href="javascript:openRegddModalWidgets(\'..\/splash_pages\/balance_checking_detail.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';

		}
		else
		{

			str+='$173,474.72<br\/> <a href="javascript:openRegddModalWidgetsPartial(\'..\/splash_pages\/balance_checking_partial.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
		}
	}
	else
	str+='$173,474.72<br\/> <span style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str+=' <\/td><\/tr>';

	str+='<tr class="imp_balances" id="pres_pay1">';


	str+='<td align="left" style="border-bottom:solid;border-bottom-width:1px; border-bottom-color:#aaa;">';
	str+='PRESTIGE PAYROLL ACCOUNT, <span class="inactive_link" >*4512<\/span><\/td>';
	str+='<td align="right" style="border-bottom:solid;border-bottom-width:1px; border-bottom-color:#aaa;">';
	if(testRegDD)
	{
	str+='$26,628.11<br\/> <span class="inactive_link" style="font-size:10px;">';
	str+='Available&nbsp;Balance</span>';
	}
	else
	str+='$26,628.11<br\/> <span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

	helpwriteContent(id,str)

}//end writeReportingWidgets

function writeAccountReporting(id)
{

	checkreporting();

	var str='';

	var testLarge=false;
	var testMid = false;
	var testRegDD = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}

	var rc= showMenuItem('regdd');
	if(rc == '1'){
	testRegDD = true;
	}

	str+='<span class="message_detail">';
	str+='<br><table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader"><th align="left" scope="col"><span class=\'dgSortLink\'>ABA/TRC<\/span><\/th>';
	str+='<th align="left" scope="col"><span class=\'dgSortLink\'>Account<BR>Number<\/span><\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="right" scope="col"> Balance<\/th><\/tr>';
	str+='<tr class="tableInnerHeader"><td colspan="4">Checking Accounts<\/td><\/tr>';
	str+='<tr class="dgItem0"><td align="left">081203790 <\/td>';
	str+='<td align="left" class="inactive_link">*4512<\/td>';
	str+='<td align="left">PRESTIGE PAYROLL ACCOUNT<\/td>';
	str+='<td align="right">';
	if(testRegDD)
	str+='<span class="inactive_link">$26,628.11</span>';
	else
	str+='$26,628.11';
	str+='<\/td><\/tr>';
	str+='<tr class="dgItem1"><td align="left">081203790<\/td>';
	str+='<td align="left">';
	if(testLarge)
	str+='<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/account_activity.html">';
	str+='*4511<\/a> <\/td>';
	str+='<td align="left">PRESTIGE OPERATING ACCOUNT<\/td>';
	str+='<td align="right">';
	if(testRegDD)
	str+='<a href="javascript:openRegddModal(\'..\/splash_pages\/balance_checking.html\')" class="default">$173,474.72</a>';
	else
	str+='$173,474.72';
	str+=' <\/td><\/tr>';
	str+='<tr class="dgItem0"><td align="left">550000576<\/td>';
	str+='<td align="left" class="inactive_link">*1359<\/td>';
	str+='<td align="left">EASTWOOD NATIONAL BANK CONSTR ACCT<\/td>';
	str+='<td align="right">';
	if(testRegDD)
	str+='<span class="inactive_link">$186,097.97</span>';
	else
	str+='$186,097.97'
	str+='<\/td><\/tr>';
	str+='<tr class="tableInnerHeader"><td colspan="4">';
	str+='Savings Accounts<\/td><\/tr>';
	str+='<tr class="dgItem0"><td align="left"> 081203790<\/td>';
	str+='<td align="left" class="inactive_link">*2470<\/td>';
	str+='<td align="left">PRESTIGE HEALTH ACCOUNT <\/td>';
	str+='<td align="right">';
	if(testRegDD)
	str+='<span class="inactive_link">$170,000.00</span>';
	else
	str+='$170,000.00';
	str+='<\/td><\/tr>';
	str+='<\/table>';
    if(showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') =='0' && showMenuItem('loan')=='0' && showMenuItem('investmentaccount')=='0' && showMenuItem('cdaccount') == '0')
	{

		str+='<table width="100%" cellspacing="0" cellpadding=';
		str+='"0" border="0" ';
		str+='<tr><td id="cell_button_area" width+95%">';
		str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
		str+='<\/div><\/td><\/tr><\/table>';
	}

	helpwriteContent(id,str)

}//end writeAccountReporting

function writeAccountReportingWidgets(id)
{

	checkreportingwidget();
	var str='';

	var testLarge=false;
	var testMid = false;
	var testRegDD = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}

	var rc= showMenuItem('regdd');
	if(rc == '1'){
	testRegDD = true;
	}


	str+='<table cellspacing="0" cellpadding=';
	str+='"0" border="0" width="100%" >';
	str+='<tr class="imp_balances" id="cont1" style="display:none;">';
	str+='<td width="65%">CONTROL DISB OPERATING ACCOUNT, <span class="inactive_link" >*5337<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="cont2" style="display:none;">';
	str+='<td >CONTROL DISB PAYROLL ACCOUNT, <span class="inactive_link" >*5344<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="east1">';
	str+='<td align="left" >EASTWOOD NATIONAL BANK CONSTR ACCT, <span  class="inactive_link">*1359<\/span><\/td>';
	str+='<td align="right" >';
	if(testRegDD)
	{
	str+='$186,097.97<br\/> <span class="inactive_link" style="font-size:10px;">';
	str+='Available&nbsp;Balance</span>';
	}
	else
	str+='$186,097.97<br\/> <span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="mark1" style="display:none;">';
	str+='<td>MARK OR MARY SPENCER ACCOUNT, <span class="inactive_link" >*9999<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="pres_disb1" style="display:none;">';
	str+='<td >PRESTIGE DISBURSING ACCOUNT, <span class="inactive_link" >*2790<\/span><\/td>';
	str+='<td align="right" >';
	str+='Data not available';
	str+='<\/td><\/tr>';
	str+='<tr class="imp_balances" id="pres_oper1">';
	str+='<td align="left">';
	str+='PRESTIGE OPERATING ACCOUNT, ';
	if(testLarge)
	str+=' <a class="default" href="..\/large_reporting\/account_activity_checking.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/account_activity.html">';
	str+='*4511<\/a><\/td>';
	str+='<td align="right">';
	if(testRegDD)
	{

	var current = eval("regDD_calculations");
		if(current == 'yes')
		{
			str+='$173,474.72<br\/> <a href="javascript:openRegddModalWidgets(\'..\/splash_pages\/balance_checking_detail.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
		}
		else
		{

			str+='$173,474.72 <br\/><a href="javascript:openRegddModalWidgetsPartial(\'..\/splash_pages\/balance_checking_partial.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
		}
	}
	else
	str+='$173,474.72<br\/> <span style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str+=' <\/td><\/tr>';

	str+='<tr class="imp_balances" id="pres_pay1">';
	str+='<td style="border-bottom:none;">PRESTIGE PAYROLL ACCOUNT, <span class="inactive_link" >*4512<\/span><\/td>';
	str+='<td align="right" style="border-bottom:none;">';
	if(testRegDD)
	{
	str+='$26,628.11<br\/> <span class="inactive_link" style="font-size:10px;">';
	str+='Available&nbsp;Balance</span>';
	}
	else
	str+='$26,628.11 <br\/><span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str+='<\/td><\/tr>';
	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';


	var str1 = '';
	str1+='<table cellspacing="0" cellpadding=';
	str1+='"0" border="0" width="100%" >';
	str1+='<tr class="imp_balances" id="contsav1">';
	str1+='<td align="left" style="border-bottom:none;">PRESTIGE HEALTH ACCOUNT, <span class="inactive_link" onclick="return false;">*2470<\/span> <\/td>';
	str1+='<td align="right" style="border-bottom:none;">';
	if(testRegDD)
	{
	str1+='$170,000.00 <br\/><span class="inactive_link" style="font-size:10px;">';
	str1+='Available&nbsp;Balance</span>';
	}
	else
	str1+='$170,000.00 <br\/><span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
	str1+='<\/td><\/tr>';
	str1+='<\/table>';
    str1+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';
	helpwriteContent(id,str)
	helpwriteContent('savingcontent',str1)

}//end writeAccountReportingWidgets

function writeWelcomeCDAccounts(id)
{
	var cdaccounts = showMenuItem('cdaccount');

	if(cdaccounts == '1')
		writeCDAccounts(id);

}//end writeWelcomeCDAccounts

function writeWelcomeCDAccountsWidgets(id)
{
	var cdaccounts = showMenuItem('cdaccount');

	if(cdaccounts == '1')
		writeCDAccountsWidgets(id);
	else
	{
		document.getElementById('cdaccount_header').style.display = 'none';
		document.getElementById('cdaccountcontent').style.display = 'none';
	}

}//end writeWelcomeCDAccounts

function writeCDAccounts(id)
{
	var str='';

	var testLarge=false;
	var testMid = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}
	str+='<br>';
	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader"><th align="left" scope="col" width="16%">ABA/TRC<\/th>';
	str+='<th align="left" scope="col" width="13%">Account<BR>Number<\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
	str+='<tr class="dgItem0"><td align="left">081203790<\/td>';
	str+='<td align="left" class="inactive_link">*4390<\/td>';
	str+='<td align="left">PRESTIGE CD2<\/td>';
	str+='<td align="right">$6,643.21<\/td><\/tr>';
	str+='<tr class="dgItem1"><td align="left">081203790<\/td>';
	str+='<td align="left">';
	if(testLarge)
	str+='<a class="default" href="..\/large_reporting\/account_activity_cd.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_cd.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/treport_report_cd.html">';
	str+='*4370<\/a> <\/td>';
	str+='<td align="left">PRESTIGE CD1<\/td>';
	str+='<td align="right">$150,000.00<\/td><\/tr>';
	str+='<\/table>';
	if(showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') =='0' && showMenuItem('loan')=='0' && showMenuItem('investmentaccount')=='0')
	{
		str+='<table width="100%" cellspacing="0" cellpadding=';
		str+='"0" border="0" ';
		str+='<tr><td id="cell_button_area" width+95%">';
		str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
		str+='<\/div><\/td><\/tr><\/table>';
	}

	helpwriteContent(id,str)

}//end writeCDAccounts

function writeCDAccountsWidgets(id)
{
	var str='';

	var testLarge=false;
	var testMid = false;
	var rc = showMenuItem('largereporting');
	if(rc == '1'){
	testLarge = true;
	}
	else
	{ rc = showMenuItem('midreporting');
	  if(rc == '1')
	  testMid = true;
	}

	str+='<table  width="100%" cellspacing="0" cellpadding=';
	str+='"0" border="0" >';

	str+='<tr class="imp_balances" id="contcd1">';


	str+='<td align="left" >PRESTIGE CD1, ';
	if(testLarge)
	str+='<a class="default" href="..\/large_reporting\/account_activity_cd.html">';
	else
	if(testMid)
	str+='<a class="default" href="..\/mid_reporting\/account_activity_cd.html">';
	else
	str+='<a class="default" href="..\/account_reporting\/treport_report_cd.html">';
	str+='*4370<\/a> <\/td>';
	str+='<td align="right" >$150,000.00<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
	str+='<tr class="imp_balances"  id="contcd2">';
	str+='<td align="left" style="border-bottom:none;">PRESTIGE CD2, <span class="inactive_link" >*4390<\/span> <\/td>';
	str+='<td align="right" style="border-bottom:none;">$6,643.21<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

	helpwriteContent(id,str)

}//end writeCDAccounts

function writeWelcomeInvestmentAccounts(id)
{
	var investmentAccounts = showMenuItem('investmentaccount');

	if(investmentAccounts == '1')
		writeInvestmentAccounts(id);


}//end writeWelcomeCDAccounts

function writeWelcomeInvestmentAccountsWidgets(id)
{
	var investmentAccounts = showMenuItem('investmentaccount');

	if(investmentAccounts == '1')
		writeInvestmentAccountsWidgets(id);
	else
	{
		document.getElementById('investment_header').style.display = 'none';
		document.getElementById('investmentcontent').style.display = 'none';
	}

}//end writeWelcomeCDAccountsWidgets

function writeInvestmentAccounts(id)
{
	var str='';
	str+='<br>';
	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader"><th align="left" scope="col" width="16%">ABA/TRC<\/th>';
	str+='<th align="left" scope="col" width="13%">Account<BR>Number<\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
	str+='<tr class="dgItem0"><td align="left">081203790<\/td>';
	str+='<td align="left"><a class="default" href="..\/investment_reporting\/investment_activity_report1.html">*1028<\/a><\/td>';
	str+='<td align="left">PRESTIGE INVESTMENT ACCOUNT<\/td>';
	str+='<td align="right">$250,000.00<\/td><\/tr>';
	str+='<tr class="dgItem1"><td align="left">081203790<\/td>';
	str+='<td align="left" class="inactive_link">';
	str+='*0740<\/td>';
	str+='<td align="left">PRESTIGE HIGH YIELD INVESTMENT FUND<\/td>';
	str+='<td align="right">$6,643.21<\/td><\/tr>';
	str+='<\/table>';
	if(showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') =='0' && showMenuItem('loan')=='0')
	{
		str+='<table width="100%" cellspacing="0" cellpadding=';
		str+='"0" border="0" ';
		str+='<tr><td id="cell_button_area" width+95%">';
		str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
		str+='<\/div><\/td><\/tr><\/table>';
	}

	helpwriteContent(id,str)

}//end writeInvestmentAccounts

function writeInvestmentAccountsWidgets(id)
{
	var str='';

	str+='<table  width="100%" cellspacing="0" cellpadding=';
	str+='"0" border="0" >';
	str+='<tr class="imp_balances" id="continv1">';
	str+='<td align="left" >PRESTIGE HIGH YIELD INVESTMENT FUND, <span class="inactive_link">*0740<\/span><\/td>';
	str+='<td align="right" >$6,643.21<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
	str+='<tr class="imp_balances" id="continv2">';
	str+='<td align="left" style="border-bottom:none;">PRESTIGE INVESTMENT ACCOUNT, <a class="default" href="..\/investment_reporting\/investment_activity_report1.html">*1028<\/a><\/td>';
	str+='<td align="right" style="border-bottom:none;">$250,000.00<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';

	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

	helpwriteContent(id,str)

}//end writeInvestmentsAccountsWidgets

function checkLoanHeader(id)
{
	var rc;
	var temp;

	rc = showMenuItem('loan');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}//end checkLoanHeader

function checkCDAccountHeader(id)
{
	var rc;
	var temp;

	rc = showMenuItem('cdaccount');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}

function checkInvestmentAccountHeader(id)
{
	var rc;
	var temp;

	rc = showMenuItem('investmentaccount');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}

function writeWelcomeLoans(id)
{
	var loans = showMenuItem('loan');

	if(loans == '1')
		writeLoans(id);


}//end writeWelcomeLoans


function writeWelcomeLoansWidgets(id)
{
	var loans = showMenuItem('loan');

	if(loans == '1')
		writeLoansWidgets(id);
	else
	{
		document.getElementById('loan_header').style.display = 'none';
		document.getElementById('loancontent').style.display = 'none';
	}

}//end writeWelcomeLoans


function writeLoans(id)
{

	var str='';
	str+='<br>';
	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader"><th align="left" scope="col"><span class=\'dgSortLink\'>ABA/TRC<\/span<\/th>';
	str+='<th align="left" scope="col"><span class=\'dgSortLink\'>Account<BR>Number<\/span><\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="left" colspan="3">Current<BR>Balance<\/th><\/tr>';
	str+='<tr class="dgItem0"><td align="left">770110000<\/td>';
	str+='<td align="left">*2013<\/td>';
	str+='<td align="left">PRESTIGE LOAN 3<\/td>';
	str+='<td align="left">$882,125.03<\/td>';
	str+='<td align="left" class="inactive_link">Note<BR>Summary<\/td>';
	str+='<td align="left" class="inactive_link">Commitment<BR>Summary<\/td><\/tr>';
	str+='<tr class="dgItem1"><td align="left">770110000<\/td>';
	str+='<td align="left">*0009<\/td>';
	str+='<td align="left">PRESTIGE LOAN 2<\/td>';
	str+='<td align="left">$45,747.70<\/td>';
	str+='<td align="left"><a class="default" href="..\/loan\/summary_note.html">Note<BR>Summary<\/a><\/td>';
	str+='<td align="left"><a class="default" href="..\/loan\/summary_commit.html">Commitment<BR>Summary<\/a><\/td><\/tr>';
	str+='<tr class="dgItem0"><td align="left">770110000<\/td>';
	str+='<td align="left">*0006<\/td>';
	str+='<td align="left">PRESTIGE LOAN 1<\/td>';
	str+='<td align="left">$179,512.50 <\/td>';
	str+='<td align="left" colspan="2" class="inactive_link">Note<BR>Summary<\/td><\/tr>';
	str+='<\/table><\/td><\/tr>';
	str+='<tr><td id="cell_button_area" width+95%">';
	str+='<\/td><\/tr>';
	if(showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') =='0' )
	{
	str+='<tr><td id="cell_button_area" width+95%">';
	str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
	str+='<\/div><\/td><\/tr>';
	}
	str+='<\/table>';

	helpwriteContent(id,str)

}//end writeLoans



function writeLoansWidgets(id)
{

	var str='';

	str+='<table  width="100%" cellspacing="0" cellpadding=';
	str+='"0" border="0" >';
	str+='<tr class="imp_balances" id="contloan1">';
	str+='<td align="left" >PRESTIGE LOAN 1, <span class="inactive_link">*0006<\/span><\/td>';
	str+='<td align="right" >$179,512.50<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span> <\/td><\/tr>';

	str+='<tr class="imp_balances" id="contloan2">';
	str+='<td align="left">PRESTIGE LOAN 2, <span class="inactive_link">*0009<\/span><\/td>';
	str+='<td align="right">$45,747.70<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
	str+='<tr class="imp_balances" id="contloan3">';
	str+='<td align="left"style="border-bottom:none;">PRESTIGE LOAN 3, <span class="inactive_link">*2013<\/span><\/td>';
	str+='<td align="right" style="border-bottom:none;">$882,125.03<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';
	helpwriteContent(id,str)

}//end writeLoansWidgets

function checkCardHeader(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('cardrpt');
	rc1 = showMenuItem('cardpay');
	if ((rc == '0') && (rc1 == '0')){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}//end checkCardHeader

function writeWelcomeCard(id)
{
	var cardrpt = showMenuItem('cardrpt');
	var cardpay = showMenuItem('cardpay');

	if((cardrpt == '1') || (cardpay == '1'))
		writeCard(id);


}//end writeWelcomeCard

function writeWelcomeCardWidgets(id)
{
	var cardrpt = showMenuItem('cardrpt');
	var cardpay = showMenuItem('cardpay');

	if((cardrpt == '1') || (cardpay == '1'))
		writeCardWidgets(id);
	else
	{
		document.getElementById('card_header').style.display = 'none';
		document.getElementById('cardcontent').style.display = 'none';
	}

}//end writeWelcomeCardWidgets

function writeCard(id)
{

	var str='';
	str+='<br>';
	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader"><th align="left" scope="col"><span class=\'dgSortLink\'>Account<BR>Number<\/span><\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="left">Current&nbsp;Balance<\/th><th align="left">Available Credit<\/th><\/tr>';
	str+='<tr class="dgItem0"><td align="left"><a href="..\/credit_card\/activity_report.html"';
	str+=' class="default">*1691<\/a><\/td>';
	str+='<td align="left">PRESTIGE CREDIT CARD ACCT<\/td>';
	str+='<td align="left" >$11,497.25 <\/td>';
	str+='<td align="left">20,000.00<\/td><\/tr>';
	str+='<\/table><\/td><\/tr>';
	if(showMenuItem('rewards') == '0')
	{
	str+='<tr><td id="cell_button_area" width+95%">';
	str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
	str+='<\/div><\/td><\/tr>';
	}
	str+='<\/table>';

	helpwriteContent(id,str)

}//end writeCard

function writeCardWidgets(id)
{

	var str='';

	str+='<table width="100%" cellspacing="0" cellpadding=';
	str+='"0" border="0" >';
	str+='<tr class="imp_balances" id="contcc1">';
	str+='<td align="left" style="border-bottom:none;">PRESTIGE CREDIT CARD ACCT, <a href="..\/credit_card\/activity_report.html"';
	str+=' class="default">*1691<\/a><\/td>';
	str+='<td align="right" style="border-bottom:none;">$11,497.25<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span> <\/td>';
	str+='<\/tr>';
	str+='<\/table>';
	str+='<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

	helpwriteContent(id,str)

}//end writeCardWidgets

function checkRewardsHeader(id)
{
	var rc;
	var temp;

	rc = showMenuItem('rewards');
	if ((rc == '0')){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}//end checkRewardsHeader

function writeWelcomeRewards(id)
{
	var rewards = showMenuItem('rewards');

	if(rewards == '1')
		writeRewards(id);

}//end writeWelcomeRewards

function writeRewards(id)
{

	var str='';

	str+='<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
	str+='"4" border="0" style="border-collapse:collapse;">';
	str+='<tr class="dgHeader">';
	str+='<th align="left" scope="col" width="55%"><span class=\'dgSortLink\'>Account Number<\/span><\/th>';
	str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
	str += 'Description&nbsp<\/th>';
	str+='<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
	str+='<tr class="dgItem0"><td colspan="3" class="message_detail"<\/td><b>Points2U Accounts<\/b><\/tr>';
	str+='<tr class="dgItem1">';
	str+='<td align="left" class="inactive_link">';
	str+='*3333<\/td>';
	str+='<td align="left">Corporate Debits Cards<\/td>';
	str+='<td align="right">12,843.00<\/td><\/tr>';
	str+='<tr class="dgItem0">';
	str+='<td align="left"><a class="default" href="#" onclick="window.open(\'../modules_main/Rewardpoints.html\');">*9999<\/a><\/td>';
	str+='<td align="left">Corporate Credit Card<\/td>';
	str+='<td align="right">52,371.00<\/td><\/tr>';
	str+='<\/table>';
	str+='<table width="100%" cellspacing="0" cellpadding=';
	str+='"0" border="0" ';
	str+='<tr><td id="cell_button_area" width+95%">';
	str+='<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
	str+='<\/div><\/td><\/tr><\/table>';

	helpwriteContent(id,str)

}//end writeCard

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//These functions write loan, ach, and wire navigation selections
//This function calls the showLoanItem function
//to determine if the payment selection should be displayed
function writeLoanPayNav(id)
{
	var str='';
	var pay = showLoanItem('payment');

	if (pay == '1'){
		str+='<ul class="leftContentListNav"><li><a href="..\/loan\/payment.html">Loan payment request<\/a><\/li><\/ul>';
		helpwriteContent(id,str);
	}//end if payment
}//end writeLoanPayNav

//This function calls the showLoanItem function
//to determine if the advance selection should be displayed
function writeLoanAdvNav(id)
{
	var str='';
	var adv = showLoanItem('advance');

	if (adv == '1'){
		str+='<ul class="leftContentListNav"><li><a href="..\/loan\/advance.html">Loan advance request<\/a><\/li><\/ul>';
		helpwriteContent(id,str);
	}//end if advance
}//end writeLoanAdvNav

//This function calls the showACHItem function
//to determine if the collection selection should be displayed
function writeAchNav(id)
{
	var str='';
	var func,rc1,rc2,rc3,rc4,rc5;

	if (id == 'payment'){
		rc1 = showACHItem('payment');
		rc2 = showACHItem('federal');
		rc3 = showACHItem('state');
		rc4 = showACHItem('child');
		rc5 = showACHItem('stp820');
		if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')){
			str+='<ul class="leftContentListNav"><li><a href="..\/ach\/send.html">Send money<\/a><\/li><\/ul>';
			helpwriteContent(id,str);
		}
	}//end payment nav

	if (id == 'collect'){
		rc1 = showACHItem('ctxcoll');
		rc2 = showACHItem('iatcoll');
		rc3 = showACHItem('ppdcoll');
		rc4 = showACHItem('collection');
		if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1')){
			str+='<ul class="leftContentListNav"><li><a href="..\/ach\/collect.html">Collect money<\/a><\/li><\/ul>';
			helpwriteContent(id,str);
		}
	}//end collect nav

	if (id == 'upload'){
		func = showACHItem('upload');
		if (func == '1'){
			str+='<ul class="leftContentListNav"><li><a href="..\/ach\/upload.html">ACH file upload<\/a><\/li>';
			str+='<li><a href="..\/ach\/upload_transmit.html">ACH file upload transmit<\/a><\/li>';
			str+='<li><a href="..\/ach\/upload_status.html">ACH file upload status<\/a><\/li>';
			str+='<li><a href="..\/ach\/upload_history.html">ACH file upload history<\/a><\/li><\/ul>';
			helpwriteContent(id,str);
		}
	}//end upload nav

}//end writeAchNav

//This function calls the showWireItem function
//to determine if the freeform selection should be displayed
function writeWireNav(id,flag)
{
	var str='';
	var func;

	if (id == 'freeform'){
		func = showWireItem('freeform');
		if (func == '1' && flag == '1'){
		    str += '<ul class="leftContentListNav"><li class="leftContentListNavSelected"><a  style ="font-weight:bold;" href="..\/wire\/free_form_entry_header.html">One time wire transfer entry<\/a><\/li><\/ul>';

    		helpwriteContent(id,str);
		}
		else if(func == '1' && flag != '1')
		{
    		str+='<ul class="leftContentListNav"><li><a href="..\/wire\/free_form_entry_header.html">One time wire transfer entry<\/a><\/li><\/ul>';
    		helpwriteContent(id,str);
		}
	}//end freeform nav

	if (id == 'repetitive'){
		func = showWireItem('repetitive');
		if (func == '1' && flag != '1'){
			str+='<ul class="leftContentListNav"><li><a href="..\/wire\/rep_entry.html">Template based wire transfer - single request<\/a><\/li><\/ul>';
    		helpwriteContent(id,str);
    	}
		else if (func == '1' && flag == '1'){
		    str += '<ul class="leftContentListNav"><li class="leftContentListNavSelected"><a style ="font-weight:bold;" href="..\/wire\/rep_entry.html">Template based wire transfer - single request<\/a><\/li><\/ul>';
    		helpwriteContent(id,str);
    	}
    }//end repetitive nav

    if (id == 'setup'){
		func = showWireItem('setup');
		if (func == '1' && flag != '1'){
			str+='<ul class="leftContentListNav"><li><a href="..\/wire\/setup.html">Wire transfer setup<\/a><\/li><\/ul>';
    		helpwriteContent(id,str);
    	}
		else if (func == '1' && flag == '1'){
		    str += '<ul class="leftContentListNav"><li class="leftContentListNavSelected"><a style ="font-weight:bold;" href="..\/wire\/setup.html">Wire transfer setup<\/a><\/li><\/ul>';
    		helpwriteContent(id,str);
    	}
    }//end setup nav

}//end writeWireNav

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//These functions are used within various services to determine
//if specific data should be displayed.
//
//This function calls the showLoanItem function to determine
//if the payment content should be displayed on transmit and history pages
function checkLoanPayment(id)
{
	var rc;
	var temp;

	rc = showLoanItem('payment');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkLoanPayment

//This function calls the showLoanItem function to determine
//if the advance content should be displayed on transmit and history pages
function checkLoanAdvance(id)
{
	var rc;
	var temp;

	rc = showLoanItem('advance');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkLoanAdvance

//This function calls the showWireItem function to determine
//if the repetitive wire content should be displayed on transmit and history pages
function checkWireRep(id)
{
	var rc;
	var temp;

	rc = showWireItem('repetitive');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkWireRep

//This function calls the showWireItem function to determine
//if the freeform wire content should be displayed on transmit and history pages
function checkWireFree(id)
{
	var rc;
	var temp;

	rc = showWireItem('freeform');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkWireFree

//This function calls the showWireItem function to determine
//the total amount that should be displayed on the wire transmit selection page
function writeWireTotal1(id)
{
	var rc1,rc2;
	var str='';

	rc1 = showWireItem('repetitive');
	rc2 = showWireItem('freeform');

	str+='<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
	str+='style="width:100%;border-collapse:collapse;">';
	str+='<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';


	if ((rc1 == '1')&& (rc2 == '1'))
	{
		str+='<td width="52%" colspan="5" align="right">Total:<\/td>';
		str+='<td align="left" width="48%" >$15,500.00<\/td>';
	}
	else
	{
		if (rc1 == '1')
		{
		str+='<td width="52%" colspan="5" align="right">Total:<\/td>';
			str+='<td align="left" width="48%">$15,000.00<\/td>';
		}
		else if(rc2 == '1')
		{
		str+='<td width="52%" colspan="5" align="right">Total:<\/td>';
			str+='<td align="left" width="48%" >$500.00<\/td>';
		}
	}

	str+='<td align="center" width="40">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
	str+='<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr><\/table>';
	helpwriteContent(id,str);

}//end writeWireTotal1

//This function calls the showWireItem function to determine
//the total amount that should be displayed on the wire transmit verify page
function writeWireTotal2(id)
{
	var rc1,rc2;
	var str='';

	rc1 = showWireItem('repetitive');
	rc2 = showWireItem('freeform');

	str+='<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
	str+='style="width:95%;border-collapse:collapse;">';
	str+='<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
	str+='<td width="45%" colspan="4" align="right">Total:<\/td>';

	if ((rc1 == '1')&& (rc2 == '1'))
		str+='<td align="left" width="50%" >$10,000.00<\/td>';
	else
		if (rc1 == '1')
			str+='<td align="left" width="50%" >$5,000.00<\/td>';
		else
			str+='<td align="left" width="50%" >$5,000.00<\/td>';

	str+='<td align="center" width="40">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
	str+='<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr><\/table>';
	helpwriteContent(id,str);

}//end writeWireTotal2


//This function calls the showMenuItem function to determine
//if the Express Transfer request should be displayed on the Scheduled Requests pages
function checkExpressReq(id)
{
	var rc;
	var temp;

	rc = showMenuItem('express');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkExpressReq

//This function calls the showMenuItem function to determine
//if the Funds Transfer request should be displayed on the Scheduled Requests pages
function checkFundsReq(id)
{
	var rc;
	var temp;

	rc = showMenuItem('funds');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkFundsReq

//This function calls the showMenuItem function to determine
//if the Wire request should be displayed on the Scheduled Requests pages
function checkWireReq(id)
{
	var rc;
	var rc1='0';
	var temp;

	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
	}
	if ((rc == '0') || (rc1 == '0')){
	   temp = document.getElementById(id);
	   temp.style.display = 'none';
		}
}//end checkWireReq

//This function calls the showMenuItem function to determine
//if the Book Transfer request should be displayed on the Scheduled Requests pages
function checkBookReq(id)
{
	var rc;
	var temp;

	rc = showMenuItem('book');
	if (rc == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
	}
}//end checkBookReq

//This function calls the showMenuItem function to determine
//if the first Loan Payment request should be displayed on the Scheduled Requests pages
function checkLoanReq(id)
{
	var rc;
	var rc1='0';
	var temp;

	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('payment');
	}
    if ((rc == '0') || (rc1 == '0')){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkLoanReq

//This function calls the showMenuItem function to determine
//if the Credit Card Payment request should be displayed on the Scheduled Requests pages
function checkCardReq(id)
{
	var rc;
	var temp;

	rc = showMenuItem('cardpay');
	if (rc == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkCardReq


//This function calls the showMenuItem function to determine
//if the ACH Payment or collection  should be displayed on the Scheduled Requests pages
function checkACHReq(id)
{
	var rc;
	var temp;

	rc = showMenuItem('ach');
	if (rc == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkACHReq

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for IAT Payment should be displayed on the Scheduled Requests pages
function checkIATPay(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('iat');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkIATPay

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for PPD Payment should be displayed on the Scheduled Requests pages
function checkPPDPay(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('payment');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkPPDPay

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for CCD Payment should be displayed on the Scheduled Requests pages
function checkCCDPay(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('ccdpay');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for CTX Collection should be displayed on the Scheduled Requests pages
function checkCTXColl(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('ctxcoll');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for CTX Payment should be displayed on the Scheduled Requests pages
function checkCTXPay(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('ctx');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for IAT Collection should be displayed on the Scheduled Requests pages
function checkIATColl(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('iatcoll');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkIATColl

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for CCD Collection should be displayed on the Scheduled Requests pages
function checkCCDColl(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('collection');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
}//end checkCCDColl

//This function calls the showMenuItem and showACHItem function to determine
//if the ACH request for PPD Collection should be displayed on the Scheduled Requests pages
function checkPPDColl(id)
{
	var rc,rc1;
	var temp;

	rc = showMenuItem('ach');
	rc1 = showACHItem('ppdcoll');
	if (rc == '0' || rc1 == '0'){
    	temp = document.getElementById(id);
    	temp.style.display = 'none';
	}
} //end checkPPDColl


function checkWebColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('webcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkWebColl

function checkTelColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('telcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';

    }
} //end checkTelColl


//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the reporting output selections
//This function calls the showMenuItem function
//to determine if the Quickbooks, Quicken or MS Money should be displayed
function writeOutputType(id)
{
	var str='';
	var out1 = showMenuItem('quickbooks');
	var out2 = showMenuItem('quicken');
	var out3 = showMenuItem('msmoney');

	if (id == 'tranrpt'){
		str+='<input id="screen" type="radio" name="output" checked /> &nbsp;<b>Screen<\/b> (HTML)<br>';
		str+='<input id="bai2" type="radio" name="output" \/> &nbsp;<b>BAI2<\/b> file (Creates a file that ';
		str+='can be imported into an account processing application)<br>';
		str+='<input id="csv" type="radio" name="output" \/> &nbsp;<b>CSV<\/b> file (Can be used by a spreadsheet program)<br>';
		if (out3 == '1'){
			str+='<input id="msmoney" type="radio" name="output" \/> &nbsp;<b>Microsoft Money®<\/b> file (Creates a file ';
			str+='that can be imported into MS Money 2000 or more recent versions)<br>';
		}
		if (out1 == '1'){
			str+='<input id="quickbook" type="radio" name="output" \/> &nbsp;<b>QuickBooks®<\/b> file (Creates a file ';
			str+='that can be imported into Quickbooks)<br>';
		}
		helpwriteContent(id,str);
	}//end if tranrpt

	if (id == 'tranrpt_down'){
		str+='Download this report as:&nbsp;';
		str+='<select><option selected="selected">BAI2 file<\/option><option>CSV file<\/option>';
		if (out3 == '1'){
			str+='<option>Microsoft Money® file<\/option>';
		}
		if (out1 == '1'){
			str+='<option>QuickBooks® file<\/option>';
		}
		str+='<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';
		helpwriteContent(id,str);
	}//end if tranrpt_down

	if (id == 'acctrpt'){
		str+='<input id="screen" type="radio" name="output" checked /> &nbsp;<b>Screen<\/b> (HTML)<br>';
		str+='<input id="bai2" type="radio" name="output" \/> &nbsp;<b>BAI2<\/b> file (Creates a file that ';
		str+='can be imported into an account processing application)<br>';
		str+='<input id="csv" type="radio" name="output" \/> &nbsp;<b>CSV<\/b> file (Can be used by a spreadsheet program)<br>';
		if (out3 == '1'){
			str+='<input id="msmoney" type="radio" name="output" \/> &nbsp;<b>Microsoft Money®<\/b> file (Creates a file ';
			str+='that can be imported into MS Money 2000 or more recent versions)<br>';
		}
		str+='<input id="qif" type="radio" name="output" \/> &nbsp;<b>QIF<\/b> file (Creates a file that can be imported  ';
		str+='into any application that can import a Quicken Interchange Formatted file)<br>';
		if (out1 == '1'){
			str+='<input id="quickbook" type="radio" name="output" \/> &nbsp;<b>QuickBooks®<\/b> file (Creates a file ';
			str+='that can be imported into Quickbooks)<br>';
		}
		if (out2 == '1'){
			str+='<input id="quicken" type="radio" name="output" \/> &nbsp;<b>Quicken®<\/b> file (Creates a file ';
			str+='that can be imported into Quicken 98 or more recent versions<br>';
		}
		helpwriteContent(id,str);
	}//end if acctrpt

	if (id == 'acctrpt_down'){
		str+='Download this report as:&nbsp;';
		str+='<select><option selected="selected">BAI2 file<\/option><option>CSV file<\/option>';
		if (out3 == '1'){
			str+='<option>Microsoft Money® file<\/option>';
		}
		str+='<option value="QIF">QIF file<\/option>';
		if (out1 == '1'){
			str+='<option>QuickBooks® file<\/option>';
		}
		if (out2 == '1'){
			str+='<option>Quicken® file<\/option>';
		}
		str+='<\/select>&nbsp;<input type="button" value="Go" title="Download Report" \/>&nbsp;';
		helpwriteContent(id,str);
	}//end if acctrpt_down
}//end writeOutputType

//This function calls the showACHItem function to determine
//if the ACH content should be displayed on the send money, transmit and history pages
function checkACHContent(id)
{
	var rc;
	var temp;

	if ((id == 'payreq') || (id == 'payreq2') || (id == 'payreq3') || (id == 'payreq4')){
		rc = showACHItem('payment');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
        if((id=='ccdreq') || (id == 'ccdreq1')){
	    rc=showACHItem('ccdpay')
	    if(rc == '0'){
	        temp = document.getElementById(id);
	        if(temp != null)
	        temp.style.display = 'none';
	    }
	}
	if((id=='ctxreq') || (id == 'ctxreq1')){
	    rc=showACHItem('ctx')
	    if(rc=='0'){
	        temp = document.getElementById(id);
	        if(temp != null)
	        temp.style.display = 'none';
	    }
	}
	if ((id == 'fedreq') || (id == 'fedreq2')){
		rc = showACHItem('federal');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'statereq') || (id == 'statereq2')){
		rc = showACHItem('state');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if (id == 'childreq'){
		rc = showACHItem('child');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if (id == 'stpreq'){
		rc = showACHItem('stp820');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if (id == 'iatpayreq'){
		rc = showACHItem('iat');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'collreq') || (id == 'collreq1') || (id == 'collreq2') || (id == 'collreq3') || (id == 'collreq4') || (id == 'collreq5')){
		rc = showACHItem('collection');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'iatreq') || (id == 'iatreq1')){
		rc = showACHItem('iatcoll');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'ppdreq') || (id == 'ppdreq1')) {
		rc = showACHItem('ppdcoll');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'ctxcoll') || (id == 'ctxcoll1')) {
		rc = showACHItem('ctxcoll');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'webcoll') || (id == 'webcoll1') || (id == 'webcoll2')) {
		rc = showACHItem('webcoll');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
	if ((id == 'telcoll') || (id == 'telcoll1') || (id == 'telcoll2')) {
		rc = showACHItem('telcoll');
		if (rc == '0'){
			temp = document.getElementById(id);
			if(temp != null)
			temp.style.display = 'none';
		}
	}
}//end checkACHContent

//This function writes the ACH account type selections
//This function calls the showACHItem function
//to determine if the account type should be displayed in the drop-down list
function writeACHAcctType(id)
{
	var str='';
	var type = showACHItem('ctx');

	str+='<select><option selected> <\/option><option>CCD (Corporate)<\/option>';
	str+='<option>CCD+ (Corporate with additional information)<\/option>';
    if (type == '1'){
    	str+='<option>CTX (Corporate Trade Exchange)<\/option>';
    }
   	str+='<option>PPD (Personal)<\/option><option>PPD+ (Personal with additional information)<\/option>';
   	str+='<\/select><br><span class="input_instructions">\(Type of accounts to be listed in the detail area, ';
   	str+='e.g. Corporate, Personal.\)<\/span>';
    helpwriteContent(id,str);
}//end writeACHAcctType

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the favorites selections
//This function calls the showMenuItem function
//to determine which functions should be displayed
function writeFavoritesSelect(id)
{
	var rc,rc1,rc2,rc3,rc4,rc5;
	var str='';

	str+='<select size="6">';
	rc = showMenuItem('account');
	if (rc == '1'){
		str+='<option>Quick balance account report<\/option><option>Summary report<\/option>';
		str+='<option>Account transaction search<\/option><option>Transaction report<\/option>';
		str+='<option>Combined report<\/option><option>Manage saved reports<\/option>';
	}
	rc = showMenuItem('reporting');
	if (rc == '1'){
		str+='<option>Quick balance report<\/option><option>Transaction search<\/option>';
		str+='<option>Account detail report<\/option>';
	}


	rc = showMenuItem('investmentreporting');
	if(rc == '1'){
	str+='<option>Investment activity report<\/option>';
	}

	rc = showMenuItem('loan');
	if (rc == '1'){
		str+='<option>Loan summary report<\/option><option>Loan activity report<\/option>';
	}
	rc = showMenuItem('cardrpt');
	if (rc == '1'){
		str+='<option>Credit card activity report<\/option>';
	}
	rc = showMenuItem('filedown');
	if (rc == '1'){
		str+='<option>Download report<\/option>';
	}
	rc = showMenuItem('statements');
	if (rc == '1'){
		str+='<option>Statement account selection<\/option>';
	}
	rc = showMenuItem('inwirerpt');
	if (rc == '1'){
	   	str+='<option>Incoming wire report<\/option>';
	}

	rc = showMenuItem('express');
	if (rc == '1'){
		str+='<option>Express transfer request<\/option><option>Express transfer transmit<\/option>';
		str+='<option>Express transfer history<\/option>';
	}
	rc = showMenuItem('book');
	if (rc == '1'){
		str+='<option>Book transfer<\/option><option>Book transfer transmit<\/option>';
		if(showMenuItem('multipleapprovals') == "1")
		str+='<option>Book transfer template approval<\/option>';
		str+='<option>Book transfer history<\/option>';
	}
	rc = showMenuItem('funds');
	if (rc == '1'){
		str+='<option>Funds transfer request<\/option><option>Funds transfer transmit<\/option>';
		str+='<option>Funds transfer history<\/option>';
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('payment');
		if (rc1 == '1'){
			str+='<option>Loan payment request<\/option>';
		}
		rc2 = showLoanItem('advance');
		if (rc2 == '1'){
			str+='<option>Loan advance request<\/option>';
		}
		if ((rc1 == '1') || (rc2 == '1')){
			str+='<option>Transmit loan<\/option><option>Loan history report<\/option>';
		}
	}
	rc = showMenuItem('bill');
	if (rc == '1'){
		str+='<option>Add bill payment<\/option><option>Change bill payment<\/option>';
		str+='<option>Delete bill payment<\/option><option>Bill payment history<\/option>';
	}
	rc = showMenuItem('billsetup');
	if (rc == '1'){
		str+='<option>Add bill payee<\/option><option>Change bill payee<\/option>';
		str+='<option>Delete bill payee<\/option>';
	}
	rc = showMenuItem('cardpay');
	if (rc == '1'){
		str+='<option>Credit card payment entry<\/option><option>Credit card payment transmit<\/option>';
		str+='<option>Credit card payment history<\/option>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('payment');
		rc2 = showACHItem('federal');
		rc3 = showACHItem('state');
		rc4 = showACHItem('child');
		rc5 = showACHItem('stp820');
		if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')){
			str+='<option>Send money<\/option>';
		}
		rc = showACHItem('collection');
		if (rc == '1'){
			str+='<option>Collect money<\/option>';
		}
		if ((rc == '1') || (rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')){
			str+='<option>ACH transmit<\/option><option>ACH history<\/option>';
		}
		rc = showACHItem('upload');
		if (rc == '1'){
			str+='<option>ACH file upload<\/option><option>ACH file upload transmit<\/option>';
			str+='<option>ACH file upload status<\/option><option>ACH file upload history<\/option>';
		}
	}
	rc = showMenuItem('fileup');
	if (rc == '1'){
		str+='<option>Upload file<\/option><option>Transmit file<\/option>';
		str+='<option>File upload audit report<\/option><option>File upload detail history report<\/option>';
		str+='<option>File upload summary history report<\/option>';
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('freeform');
		if (rc1 == '1'){
			str+='<option>One time wire transfer entry<\/option>';
		}
		rc2 = showWireItem('repetitive');
		if (rc2 == '1'){
			str+='<option>Template based wire transfer - single request<\/option>';
		}
		if ((rc1 == '1') || (rc2 == '1')){
		    str+='<option>Transmit wire<\/option>';
		}
		rc = showWireItem('setup');
		if (rc == '1'){
			str+='<option>Wire template setup<\/option>';
		}
		rc = showMenuItem('multipleapprovals');
		if(rc == '1')
		{
		    str+='<option>Wire transfer template approval<\/option>';
		}

		if ((rc1 == '1') || (rc2 == '1')){
			str+='<option>Wire history<\/option>';
		}

	}
	rc = showMenuItem('stop');
	if (rc == '1'){
		str+='<option>Stop payment request<\/option><option>Stop payment request<\/option>';
		str+='<option>Stop payment activity<\/option>';
	}
	rc = showMenuItem('achpospay');
	if (rc == '1'){
		str+='<option>ACH positive pay exceptions manager<\/option><option>ACH positive pay exceptions status<\/option>';
		str+='<option>ACH originator company maintenance<\/option>';
	}
	rc = showMenuItem('opositive');
	if (rc == '1'){
		str+='<option>Positive pay exceptions<\/option><option>Positive pay history<\/option>';
	}
	rc = showMenuItem('positive');
	if (rc == '1'){
	  if(showMenuItem('pospayexception') == '1')
	  {
		str+='<option>Positive pay exceptions manager<\/option>';
		}
		if(showMenuItem('pospayissue') == '1')
	   {
		str+='<option>Positive pay issue entry<\/option><option>Positive pay issue file import<\/option>';
		str+='<option>Positive pay update issue<\/option><option>Positive pay issue approval<\/option>';
		}
		str+='<option>Positive pay decisions report<\/option>';
		str+='<option>Positive pay outstanding issues report<\/option><option>Positive pay stale issues report<\/option>';
	    str+='<option>Positive pay outstanding issues report<\/option><option>Positive pay stale issues report<\/option>';
	}
	rc = showMenuItem('fullrecon');
	if (rc == '1'){
		str+='<option>Account recon issue manual entry<\/option><option>Account recon issue file import<\/option>';
		str+='<option>Account recon update issue<\/option><option>Account recon statement report<\/option>';
		str+='<option>Account recon activity report<\/option>';
	}
	rc = showMenuItem('partrecon');
	if (rc == '1'){
		str+='<option>Account recon statement report<\/option><option>Account recon activity report<\/option>';
	}
	rc = showMenuItem('deprecon');
	if (rc == '1'){
		str+='<option>Deposit recon statement report<\/option><option>Deposit recon activity report<\/option>';
	}
	rc = showMenuItem('chkreorder');
	if (rc == '1'){
		str+='<option>Order checks/deposit slips<\/option>';
	}
	rc = showMenuItem('capturerdc');
	if (rc == '1'){
		str+='<option>Remote deposit capture<\/option>';
	}
	str+='<option>View received mail and alerts<\/option><option>View sent mail<\/option>';
	str+='<option>Contact us<\/option><option>Download documents<\/option>';
	str+='<option>User administration<\/option><option>Account administration<\/option>';
	str+='<option>Approvals administration<\/option><option>Change password<\/option>';
	str+='<option>Personal preferences<\/option><option>Manage favorites<\/option>';
	str+='<option>View user activity report<\/option>';

	rc = showMenuItem('tokenapproval')
	if(rc == '1')
	{
	  str+='<option>Secure token setup<\/option>';
	}

	str+='<\/select>';

		helpwriteContent(id,str);

}//end writeFavoritesSelect

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for Approvals Administration
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeApprovalService(id)
{
	var rc,rc1,rc2;rc3 = false;
	var bkgrnd='0';
	var str='';
	var str1='';
	if( id == "approvetrans")
	{
	 rc3 = true;
	}
    if( rc3)
    {
    str1+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str1+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str1+='style="width:100%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str1+='<td style="width:35%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str1+='<\/td>';
	str1+='<td class="dgSortLink" align="center">Request Amount<\/td><td align="center">Approvals If Less or Equal<\/td>';
	str1+='<td align="center">Approvals If Greater<\/td><\/tr>';
	}
	else
	{
	str1+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str1+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str1+='style="width:100%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str1+='<td style="width:37%;" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str1+='<\/td>';
	str1+='<td align="center">Approvals Required<\/td>';
	}
	if(id == "approveupload")
	{
	  rc = showMenuItem('integratedpayables')
	  if( rc == '1' && !rc3)
	  {
	            str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Integrated Payables&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';
				str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			    str+='<\/tr>';
	   }

	   if(str != "")
	   {
	      str1+=str;
	      str1+='<\/table><\/td><\/tr><\/table>';
	   }
	   else
	   {
	     str1 ="";
	   }

	   helpwriteContent(id,str1);
	   return;
	}
	else
	{
	   if(id == "approveissues")
	   {
	     rc1 = showMenuItem('fullrecon');
	     rc = showMenuItem('pospayissue');
	     rc2 = showMenuItem('pospayexception');
	     rc3 = showMenuItem('revpospay');

	        if(rc1 == '1')
	        {
	         if (bkgrnd == '0')
	         {str+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	         else
	         {str+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	         str+='<td>Full Account Recon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';
			 str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			 str+='<\/tr>';
			}
		 if(showMenuItem('positive') == '1')
	     {
	        if(rc == '1')
	        {
	         if (bkgrnd == '0')
	         {str+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	         else
	         { str += '<tr class="dgItem1" style="white-space:nowrap;">'; bkgrnd = '0';  }
	         str+='<td>Positive Pay Issue Maintenance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';
			 str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			 str+='<\/tr>';
			}
        }

        if (showMenuItem('positive') == '1' && rc2 == '1') {

            if (bkgrnd == '0')
            { str += '<tr class="dgItem0" style="white-space:nowrap;">'; bkgrnd = '1'; }
            else
            { str += '<tr class="dgItem1" style="white-space:nowrap;">'; bkgrnd = '0'; }
            str += '<td>Positive Pay Exception Maintenance &nbsp;&nbsp;<\/td>';
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
	     if(str != "")
         {
           str1+=str;
           str1+='<\/table><\/td><\/tr><\/table>';
         }
         else
         {
           str1 ="";
         }

         helpwriteContent(id,str1);
         return;
	   }
	}
	rc = showMenuItem('admin');
	if( rc && !rc3)
	{
	if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Administration<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Administration<\/td>';bkgrnd = '0';}
				str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			    str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('upload');
		if (rc1 == '1' && rc3){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '0';}
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';

			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
		}
		rc1 = showMenuItem('achpospay');
		if (rc1 == '1' && rc3){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH Positive Pay <\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '0';}
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';

			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
		rc = showMenuItem('book');
		if (rc == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '0';}
				if(rc3)
					{
			str+='<td align="center">$ <input type="text" size="15" value="2,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
		rc =  showMenuItem('ach');
		if(rc == '1')
		{
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Collection (Corporate)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Collection (Corporate)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}

		rc1 = showACHItem('ccdpay');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Payment (Corporate)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Payment (Corporate)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}

		rc1 = showACHItem('ctxcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Collection (Corp Trade)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Collection (Corp Trade)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}

		rc1 = showACHItem('ctx');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Payment (Corp Trade)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Payment (Corp Trade)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}


	    rc1 = showACHItem('child');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="3,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('cardpay');
	if (rc == '1' && rc3){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '0';}
    	str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<\/tr>';
	}

	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		rc2 = showWireItem('freeform');
		if ((rc1 == '1') || (rc2 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '0';}
			if(rc3)
			{
			str+='<td align="center">$ <input type="text" size="15" value="10,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('express');
	if (rc == '1' && rc3){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '0';}
    	str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '0';}
			if(rc3)
			{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('funds');
	if (rc == '1' && rc3){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '0';}
    	str+='<td align="center">$ <input type="text" size="15" value="10,000.00" style="text-align:right" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Collection (International)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Collection (International)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			     str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			    }
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Payment (International)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Payment (International)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('loan');
	if (rc == '1' && rc3){
		rc1 = showLoanItem('payment');
		rc2 = showLoanItem('advance');
		if ((rc1 == '1') || (rc2 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '0';}
			str+='<td align="center">$ <input type="text" size="15" value="10,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('positive');
	rc2 = showMenuItem('pospayexception')
	if(rc == '1' && rc2 == '1' && rc3)
	{
	    if (bkgrnd == '0')
	    {str+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	    else
	    {str+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	    str+='<td>Positive Pay Exception Maintenance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';bkgrnd = '1';
		str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
		str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
		str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
		str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Collection (Personal)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Collection (Personal)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Payment (Personal)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Payment (Personal)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
    }
    rc  = showMenuItem('revpospay');
		if (rc == '1'){
		   if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Reverse Positive Pay<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Reverse Positive Pay<\/td>';bkgrnd = '0';}
      if (rc3) {

                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('stp820');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '0';}
			if(rc3)
			{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('state');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '0';}
			if(rc3)
			{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}

		rc1 = showACHItem('telcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>TEL Collection (Telephone)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>TEL Collection (Telephone)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
		rc1 = showACHItem('webcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>WEB Collection (Internet)<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>WEB Collection (Internet)<\/td>';bkgrnd = '0';}
				if(rc3)
				{
			str+='<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
			str+='<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
			}
			str+='<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
			str+='<\/tr>';
		}
	}

	if(str != "")
	{
	 str1+=str;
	 str1+='<\/table><\/td><\/tr><\/table>';
	}
	else
	{
	str1 ="";
	}

	helpwriteContent(id,str1);

}//end writeApprovalService

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//New function introduced in Kilimanjaro for multiple approvals
//This function writes the table of services for Assigned Services and Account Entitlements based on service.
//This function calls the showMenuItem function to determine which services should be displayed
function writeUserAssignedServices(id, name)
{
	var rc;

	rc = showMenuItem(id);
	if (rc != "1"){
	   document.getElementById(name).style.display = 'none';
	}
	else
	{
	   if((name == "positivepayexceptionreporting" || name == "positivepayissuereporting") && showMenuItem('positive') != '1')
	   {
	     document.getElementById(name).style.display = 'none';
	   }
	}

}
//end writeUserAssignedServices


//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for User Administration
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeUserAdminServices(id)
{
	var rc,rc1;
	var bkgrnd='0';
	var str='';

	str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td width="75%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td>';
	if (id == 'modify'){
		str+='<td align="center">Entitled<\/td>';}
	else if (id == 'delete'){
		str+='<td align="center">&nbsp;<\/td>';}
	else{
		str+='<td align="center">Details<\/td>';
		}
		str+='<\/tr>';

	rc = showMenuItem('account');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '0';}
    	if (id == 'modify'){
    		str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    	else{
    		if (id == 'delete'){
    			str+='<td align="center">&nbsp;<\/td>';}
    		else{
    			if ((id == 'copy') || (id == 'new2') || (id == 'new3')){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    			else{
    				if (id == 'new1'){
    					str+='<td align="center"><a href="..\/administration\/ar_acct_add.html" class="default">Add<\/a><\/td>';}
						else {
    					str+='<td align="center"><a href="..\/administration\/ar_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    			}
    		}
    	}
    	str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('upload');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    		    str+='<td align="center">&nbsp;<\/td>';}
			str+='<\/tr>';
		}
	}

	rc1 = showMenuItem('achpospay');
	if (rc1 == '1'){
		if (bkgrnd == '0'){
			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '1';}
		else{
			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '0';}
		if (id == 'modify'){
			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
		else{
    		if (id == 'delete'){
    			str+='<td align="center">&nbsp;<\/td>';}
    		else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td align="center"><a href="..\/administration\/ach_pos_pay_add.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/ach_pos_pay_modify.html" class="default">View/Change<\/a><\/td>';}
    			}
    		}
    	}
    	str+='<\/tr>';
	}

	rc = showMenuItem('billpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
    		if (id == 'delete'){
    			str+='<td align="center">&nbsp;<\/td>';}
    		else{
    			if ((id == 'copy') || (id == 'new2') || (id == 'new3')){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    			else{
    				if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    				else{
    					str+='<td align="center"><a href="..\/administration\/billpay_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    			}
    		}
    	}
    	str+='<\/tr>';
	}
	rc = showMenuItem('bill');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('book');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td align="center"><a href="..\/administration\/coll_acct_add.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/coll_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td class="inactive_link" align="center">Add<\/td>';}
    					else{
    						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
			}


		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}

	}

	rc = showMenuItem('chkreorder');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('child');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('cardpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('cardrpt');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('largereporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('deprecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('midreporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('express');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('filedown');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td align="center"><a href="..\/administration\/fd_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    		    }
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('fileup');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
  		    			str+='<td align="center"><a href="..\/administration\/up_acct_modify.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('fullrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
  		    			str+='<td align="center"><a href="..\/administration\/recon_acct_modify.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('funds');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iat');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iatcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('image');
	 if (rc == '1') {
		 if (bkgrnd == '0') {
			 str += '<tr class="dgItem0" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '1';
		 }
		 else {
			 str += '<tr class="dgItem1" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '0';
		 }
		 if (id == 'modify') {
			 str += '<td align="center"><input type="checkbox" checked \/><\/td>';
		 }
		 else {
			 if (id == 'delete') {
				 str += '<td align="center">&nbsp;<\/td>';
			 }
			 else {
				 if ((id == 'new1') || (id == 'new2') || (id == 'new3')) {
					 str += '<td class="inactive_link" align="center">Add<\/td>';
				 }
				 else {
					 str += '<td class="inactive_link" align="center">View/Change<\/td>';
				 }
			 }
		 }
		 str += '<\/tr>';
	 }
	rc = showMenuItem('inwirerpt');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('integratedpayables');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Integrated Payables<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Integrated Payables<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
	}

	rc = showMenuItem('loan');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('advance');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('payment');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('freeform');
		if (rc1 == '1'){
    		if (bkgrnd == '0'){
    			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '1';}
    		else{
    			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td class="inactive_link" align="center">Add<\/td>';}
    					else{
    						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
		}
	}
		rc1 = showACHItem('payment');
		if (rc1 == '1' && showMenuItem('ach') == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}

	rc = showMenuItem('partrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('opositive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('positive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
  					if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
	  					str+='<td class="inactive_link" align="center">Add<\/td>';}
	  				else{
  		    			str+='<td align="center"><a href="..\/administration\/pp_acct_modify.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc1 = showMenuItem('pospayexception');
	if (rc == '1' && rc1 == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
  					if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
	  					str+='<td class="inactive_link" align="center">Add<\/td>';}
	  				else{
  		    			str+='<td align="center"><a href="..\/administration\/ppexcepmain_acct_modify.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc1 = showMenuItem('pospayissue');
	if (rc == '1' && rc1 == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
  					if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
	  					str+='<td class="inactive_link" align="center">Add<\/td>';}
	  				else{
  		    			str+='<td align="center"><a href="..\/administration\/ppissmain_acct_modify.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('capturerdc');
	if (rc == '1' && (showMenuItem('commonentry') != '1' || (showMenuItem('commonentry') == '1' && !showCommonEntryService('externalservices')))){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('reporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
 }
 rc = showMenuItem('revpospay');
 if (rc == '1') {
     if (bkgrnd == '0') {
         str += '<tr class="dgItem0" style="white-space:nowrap;"><td>Reverse Positive Pay<\/td>'; bkgrnd = '1';
     }
     else {
         str += '<tr class="dgItem1" style="white-space:nowrap;"><td>Reverse Positive Pay<\/td>'; bkgrnd = '0';
     }
     if (id == 'modify') {
         str += '<td align="center"><input type="checkbox" checked \/><\/td>';
     }
     else {
         if (id == 'delete') {
             str += '<td align="center">&nbsp;<\/td>';
         }
         else {
             if ((id == 'new1') || (id == 'new2') || (id == 'new3')) {
                 str += '<td class="inactive_link" align="center">Add<\/td>';
             }
             else {
                 str += '<td class="inactive_link" align="center">View/Change<\/td>';
             }
         }
     }
     str += '<\/tr>';
 }
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('state');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
  			str+='<\/tr>';
		}
	}
	rc = showMenuItem('statements');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('stop');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}


	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('stp820');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('telcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td align="center"><a href="..\/administration\/tel_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('webcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td align="center"><a href="..\/administration\/web_acct_modify.html" class="default">View/Change<\/a><\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	str+='<\/table><\/td><\/tr><tr><td>&nbsp;<\/td><\/tr><\/table>';
	helpwriteContent(id,str);
}//end writeUserAdminServices

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for User Administration
//This function calls the showMenuItem function
//to determine which services should be displayed
function writePendingUserAdminServices(id)
{
	var rc,rc1;
	var bkgrnd='0';
	var str='';

	str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td>';
	if (id == 'modify'){
		str+='<td align="center">Entitled<\/td>';}
	else if (id == 'delete'){
		str+='<td align="center">&nbsp;<\/td>';}
	else{
		str+='<td align="center">Details<\/td><\/tr>';}

	rc = showMenuItem('account');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '0';}
    	if (id == 'modify'){
    		str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    	else{
    		if (id == 'delete'){
    			str+='<td align="center">&nbsp;<\/td>';}
    		else{
    			if ((id == 'copy') || (id == 'new2') || (id == 'new3')){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    			else{
    				if (id == 'new1'){
    					str+='<td align="center" class="inactive_link">Add<\/a><\/td>';}
						else {
    					str+='<td align="center" class="inactive_link">View/Change<\/td>';}
    			}
    		}
    	}
    	str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('upload');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    		    str+='<td align="center">&nbsp;<\/td>';}
			str+='<\/tr>';
		}
	}

	rc1 = showMenuItem('achpospay');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td align="center"><a href="..\/administration\/ach_pos_pay_custom.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/ach_pos_pay_modify_custom.html" class="default">View/Change<\/a><\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
			}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
						if ((id == 'new1')|| (id == 'new2')){
    						str+='<td align="center"><a href="..\/administration\/coll_acct_add_custom.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/coll_acct_modify_custom.html" class="default">View/Change<\/a><\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td class="inactive_link" align="center">Add<\/td>';}
    					else{
    						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
			}


		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}

	}
	rc = showMenuItem('billpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
    		if (id == 'delete'){
    			str+='<td align="center">&nbsp;<\/td>';}
    		else{
    			if ((id == 'copy') || (id == 'new2') || (id == 'new3')){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    			else{
    				if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    				else{
    					str+='<td align="center" class="inactive_link">View/Change<\/a><\/td>';}
    			}
    		}
    	}
    	str+='<\/tr>';
	}
	rc = showMenuItem('bill');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('book');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('chkreorder');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('child');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('cardpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('cardrpt');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('largereporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('deprecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('midreporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('express');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('filedown');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td align="center" class="inactive_link">View/Change<\/a><\/td>';}
    		    }
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('fileup');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
  		    			str+='<td align="center" class="inactive_link">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('fullrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
  		    			str+='<td align="center"class="inactive_link">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('funds');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iat');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iatcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	 rc = showMenuItem('image');
	 if (rc == '1') {
		 if (bkgrnd == '0') {
			 str += '<tr class="dgItem0" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '1';
		 }
		 else {
			 str += '<tr class="dgItem1" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '0';
		 }
		 if (id == 'modify') {
			 str += '<td align="center"><input type="checkbox" checked \/><\/td>';
		 }
		 else {
			 if (id == 'delete') {
				 str += '<td align="center">&nbsp;<\/td>';
			 }
			 else {
				 if ((id == 'new1') || (id == 'new2') || (id == 'new3')) {
					 str += '<td class="inactive_link" align="center">Add<\/td>';
				 }
				 else {
					 str += '<td class="inactive_link" align="center">View/Change<\/td>';
				 }
			 }
		 }
		 str += '<\/tr>';
	 }

	rc = showMenuItem('inwirerpt');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('integratedpayables');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Integrated Payables<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Integrated Payables<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
	}

	rc = showMenuItem('loan');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('advance');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('payment');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('freeform');
		if (rc1 == '1'){
    		if (bkgrnd == '0'){
    			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '1';}
    		else{
    			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			str+='<td align="center">&nbsp;<\/td>';}
    		str+='<\/tr>';
    	}
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
					if ((id == 'copy') || (id == 'new3')){
						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				else{
    					if ((id == 'new1')|| (id == 'new2')){
    						str+='<td class="inactive_link" align="center">Add<\/td>';}
    					else{
    						str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    				}
    			}
    		}
			str+='<\/tr>';
		}
	}
		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}

	rc = showMenuItem('partrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('opositive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('positive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
					if ((id == 'new1')|| (id == 'new2') || (id == 'new3')){
    						str+='<td align="center"><a href="..\/administration\/pos_pay_add_custom.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/pos_pay_modify_custom.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc1 = showMenuItem('pospayexception');
	if (rc1 == '1' && rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
					if ((id == 'new1')|| (id == 'new2') || (id == 'new3')){
    						str+='<td align="center"><a href="..\/administration\/pos_pay_exception_add_custom.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/pos_pay_exception_modify_custom.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc1 = showMenuItem('pospayissue');
	if (rc1 == '1' && rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
				if (id == 'copy'){
					str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  				else{
					if ((id == 'new1')|| (id == 'new2') || (id == 'new3')){
    						str+='<td align="center"><a href="..\/administration\/pos_pay_issue_add_custom.html" class="default">Add<\/a><\/td>';}
    					else{
    						str+='<td align="center"><a href="..\/administration\/pos_pay_issue_modify_custom.html" class="default">View/Change<\/a><\/td>';}
  		    	}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('capturerdc');
	if (rc == '1' && (showMenuItem('commonentry') != '1' || (showMenuItem('commonentry') == '1' && !showCommonEntryService('externalservices')))){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('reporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('state');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
  			str+='<\/tr>';
		}
	}
	rc = showMenuItem('statements');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}
	rc = showMenuItem('stop');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  			if (id == 'delete'){
  				str+='<td align="center">&nbsp;<\/td>';}
  			else{
  		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
  		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
  		    	else{
  		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
  		    }
  		}
    	str+='<\/tr>';
	}


	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('stp820');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td class="inactive_link" align="center">Add<\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
			str+='<\/tr>';
		}
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('telcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td align="center"><a href="..\/administration\/tel_acct_add_custom.html" class="default">Add<\/a><\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
  			str+='<\/tr>';
		}
	}

	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '0';}
  		if (id == 'modify'){
  			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
  		else{
  		    str+='<td align="center">&nbsp;<\/td>';}
  		str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('webcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '0';}
    		if (id == 'modify'){
    			str+='<td align="center"><input type="checkbox" checked \/><\/td>';}
    		else{
    			if (id == 'delete'){
    				str+='<td align="center">&nbsp;<\/td>';}
    			else{
    		    	if ((id == 'new1') || (id == 'new2') || (id == 'new3')){
    		    		str+='<td align="center"><a href="..\/administration\/web_acct_add_custom.html" class="default">Add<\/a><\/td>';}
    		    	else{
    		    		str+='<td class="inactive_link" align="center">View/Change<\/td>';}
    		    }
    		}
  			str+='<\/tr>';
		}
	}
	str+='<\/table><\/td><\/tr><tr><td>&nbsp;<\/td><\/tr><\/table>';
	helpwriteContent(id,str);
}//end writePendingUserAdminServices


//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for User Administration when more than one approval is required.
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeMultipleUserAdminServices(id)
{
	var rc,rc1;
	var bkgrnd='0';
	var str='';

	str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="90%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td><\/tr>';

	rc = showMenuItem('account');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Account Reporting<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('upload');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH File Upload<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('achpospay');
	if (rc == '1'){
		if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH Positive Pay<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
	}
	rc = showMenuItem('billpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('bill');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Payment<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('book');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Book Transfer<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Collection<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CCD Payment<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}

		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Collection<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>CTX Payment<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('chkreorder');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Check Reorder<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('child');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Child Support Payment<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('cardpay');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Payments<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('cardrpt');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Credit Card Reporting<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('largereporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Account Reporting<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('deprecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Recon<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('midreporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Deposit Reporting<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Domestic Wire<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
		}
	}
	rc = showMenuItem('express');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Express Transfer<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('federal');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Federal Tax<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('filedown');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Download<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('fileup');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>File Upload<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Foreign Currency International Wire<\/td>';bkgrnd = '0';}
  		str+='<\/tr>';
	}
	rc = showMenuItem('fullrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Full Account Recon<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('funds');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Funds Transfer<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iat');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Collection<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('iatcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>IAT Payment<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('image');
	if (rc == '1') {
		if (bkgrnd == '0') {
			str += '<tr class="dgItem0" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '1';
		}
		else {
			str += '<tr class="dgItem1" style="white-space:nowrap;"><td>Image Search<\/td>'; bkgrnd = '0';
		}
		str += '<\/tr>';
	}
	rc = showMenuItem('inwirerpt');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Incoming Wire Report<\/td>';bkgrnd = '0';}
  		str+='<\/tr>';
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('advance');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Advance<\/td>';bkgrnd = '0';}
    	}
	}
	rc = showMenuItem('loan');
	if (rc == '1'){
		rc1 = showLoanItem('payment');
		if (rc1 == '1'){
        	if (bkgrnd == '0'){
          		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '1';}
          	else{
          		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Loan Payment<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('freeform');
		if (rc1 == '1'){
    		if (bkgrnd == '0'){
    			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '1';}
    		else{
    			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>One Time Wire Transfer Entry<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
    	}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Collection<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}

		rc1 = showACHItem('payment');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>PPD Payment<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('partrecon');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Partial Account Recon<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('opositive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Pos Pay<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('positive');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc1 = showMenuItem('pospayexception');
	if (rc == '1' && rc1 == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Exception Maintenance<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc1 = showMenuItem('pospayissue');
	if (rc == '1' && rc1 == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Positive Pay Issue Maintenance<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('capturerdc');
	rc1 = showMenuItem('commonentry');
	if (rc == '1' && (rc1 != '1' || (rc1 == '1' && !showCommonEntryService('externalservices')))){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '0';}

    	str+='<\/tr>';
	}
	rc = showMenuItem('reporting');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Reporting<\/td>';bkgrnd = '0';}
    	str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('state');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>State Tax<\/td>';bkgrnd = '0';}
  			str+='<\/tr>';
		}
	}
	rc = showMenuItem('statements');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Statements<\/td>';bkgrnd = '0';}
  		str+='<\/tr>';
	}
	rc = showMenuItem('stop');
	if (rc == '1'){
    	if (bkgrnd == '0'){
    		str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '1';}
    	else{
    		str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Stop Payment<\/td>';bkgrnd = '0';}
  		str+='<\/tr>';
	}







	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('stp820');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>STP 820 Payment<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
		}
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('telcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>TEL Collection<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
		}
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
  		if (bkgrnd == '0'){
  			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '1';}
  		else{
  			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>USD International Wire<\/td>';bkgrnd = '0';}
  		str+='<\/tr>';
	}
	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('webcoll');
		if (rc1 == '1'){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>WEB Collection<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
		}
	}
	str+='<\/table><\/td><\/tr><tr><td>&nbsp;<\/td><\/tr><\/table>';
	helpwriteContent(id,str);

}//end writeMultipleUserAdminServices

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of user limits for User Administration
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeUserAdminLimits(id)
{
	var rc,rc1,rc2,rc3,rc4,rc5,rc6;
	var bkgrnd='0';
	var str='';

	str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td width="75%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td>';
	str+='<td align="center">Details<\/td><\/tr>';

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		rc2 = showACHItem('payment');
		rc3 = showACHItem('federal');
		rc4 = showACHItem('state');
		rc5 = showACHItem('child');
		rc6 = showACHItem('stp820');
		if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH<\/td>';bkgrnd = '0';}
    		if (id == 'view_limits'){
    			str+='<td align="center"><a href="..\/administration\/ach_limit_modify.html" class="default">View/Change<\/a><\/td>';}
			else if (id == 'custom_limits'){
				str+='<td align="center"><a href="..\/administration\/ach_limit_custom.html" class="default">View/Change<\/a><\/td>';}
    		else{
				str+='<td class="inactive_link" align="center">View/Change<\/td>';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('billpay');
	if (rc == '1') {
		if (bkgrnd == '0'){
			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '1';
		}
		else{
			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '0';
		}
		if (id == 'view_limits'){
			str+='<td align="center"><a href="..\/administration\/billpay_limit_modify.html" class="default">View/Change<\/a><\/td>';
		}
		else if (id == 'custom_limits'){
				str+='<td align="center"><a href="..\/administration\/billpay_limit_custom.html" class="default">View/Change<\/a><\/td>';}
		else{
			str+='<td class="inactive_link" align="center">View/Change<\/td>';
		}
		str+='<\/tr>'
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		rc2 = showWireItem('freeform');
		if ((rc1 == '1') || (rc2 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Wire<\/td>';bkgrnd = '0';}
    		if (id == 'view_limits'){
    			str+='<td align="center"><a href="..\/administration\/wire_limit_modify.html" class="default">View/Change<\/a><\/td>';}
			else if (id == 'custom_limits'){
				str+='<td align="center"><a href="..\/administration\/wire_limit_custom.html" class="default">View/Change<\/a><\/td>';}
			else{
				str+='<td class="inactive_link" align="center">View/Change<\/td>';}
			str+='<\/tr>';
		}
	}
	str+='<\/table><\/td><\/tr><\/table>';
	helpwriteContent(id,str);

}//end writeUserAdminLimits

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of user limits for User Administration when more than one approval is required.
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeMultipleUserAdminLimits(id)
{
	var rc,rc1,rc2,rc3,rc4,rc5,rc6;
	var bkgrnd='0';
	var str='';

	str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td width="75%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td><\/tr>';

	rc = showMenuItem('ach');
	if (rc == '1'){
		rc1 = showACHItem('collection');
		rc2 = showACHItem('payment');
		rc3 = showACHItem('federal');
		rc4 = showACHItem('state');
		rc5 = showACHItem('child');
		rc6 = showACHItem('stp820');
		if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>ACH<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>ACH<\/td>';bkgrnd = '0';}
			str+='<\/tr>';
		}
	}
	rc = showMenuItem('billpay');
	if (rc == '1') {
		if (bkgrnd == '0'){
			str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '1';
		}
		else{
			str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Bill Pay<\/td>';bkgrnd = '0';
		}
		str+='<\/tr>'
	}
	rc = showMenuItem('wiremain');
	if (rc == '1'){
		rc1 = showWireItem('repetitive');
		rc2 = showWireItem('freeform');
		if ((rc1 == '1') || (rc2 == '1')){
			if (bkgrnd == '0'){
				str+='<tr class="dgItem0" style="white-space:nowrap;"><td>Wire<\/td>';bkgrnd = '1';}
			else{
				str+='<tr class="dgItem1" style="white-space:nowrap;"><td>Wire<\/td>';bkgrnd = '0';}
    		str+='<\/tr>';
		}
	}
	str+='<\/table><\/td><\/tr><\/table>';
	helpwriteContent(id,str);

}//end writeUserAdminLimits


//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//functions writeContent...
//These functions will write the <table> tags in the main content area of the overview pages
//These functions call the showMenuItem function
//to determine if the content table should be displayed

function writeContentLarge(id)
{
	var rc;
	var str='';
	var testLarge = false;

	if (id == 'content_large'){
		rc = showMenuItem('largereporting');
		if (rc == '1'){
			testLarge = true;
		}
		if (testLarge){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Deposit Account Reporting<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Create a custom report from account summary and transaction data, or manage a saved report.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/large_reporting\/account_activity_search.html" class="default">';
			str+='Account activity<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/large_reporting\/cash_position_report_criteria.html" class="default">Cash position report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/large_reporting\/account_summary_criteria.html" class="default">';
			str+='Account summary<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/large_reporting\/manage_saved_reports.html" class="default">Manage saved reports</a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/large_reporting\/combined.html" class="default">';
			str+='Combined report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testAcct
	}//end content_acct
}// end writeContentAcct

function writeContentMid(id)
{
	var rc;
	var str='';
	var testMid = false;

	if (id == 'content_mid'){
		rc = showMenuItem('midreporting');
		if (rc == '1'){
			testMid = true;
		}
		if (testMid){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Deposit Reporting<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Create a custom report from account summary and transaction data.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/mid_reporting\/account_activity_search.html" class="default">';
			str+='Account activity<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/mid_reporting\/account_summary_criteria.html" class="default">Account summary<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testAcct
	}//end content_acct
}// end writeContentAcct

function writeContentAcct(id)
{
	var rc;
	var str='';
	var testAcct = false;

	if (id == 'content_acct'){
		rc = showMenuItem('account');
		if (rc == '1'){
			testAcct = true;
		}
		if (testAcct){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Deposit Account Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Create a custom report from account summary and transaction data, or manage a saved report.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/account_reporting\/quick.html" class="default">';
			str+='Quick balance account report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/account_reporting\/treport.html" class="default">Transaction report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/account_reporting\/summary.html" class="default">';
			str+='Summary report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/account_reporting\/combined.html" class="default">Combined report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/account_reporting\/tsearch.html" class="default">';
			str+='Account transaction search</a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/account_reporting\/manage_saved_reports.html" class="default">Manage saved reports<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testAcct
	}//end content_acct
}// end writeContentAcct

function writeContentRpt(id)
{
	var rc;
	var str='';
	var testRpt = false;

	if (id == 'content_rpt'){
		rc = showMenuItem('reporting');
		if (rc == '1'){
			testRpt = true;
		}
		if (testRpt){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Deposit Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Create a custom report from account summary and transaction data.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/reporting\/quick.html" class="default">';
			str+='Quick balance report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/reporting\/account.html" class="default">Account detail report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/reporting\/transaction.html" class="default">';
			str+='Transaction search<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testRpt
	}//end content_rpt
}// end writeContentRpt

function writeContentInv(id)
{
	var rc;
	var str='';
	var testInv= false;

	if (id == 'content_inv'){
		rc = showMenuItem('investmentreporting');
		if (rc == '1'){
			testInv = true;
		}
		if (testInv){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Investment Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View summary and detail information for a selected investment account.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/investment_reporting\/investment_activity_report_criteria.html" class="default">';
			str+='Investment activity report<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testInv
	}//end content_inv
}// end writeContentInv

function writeContentMicro(id)
{
	var rc;
	var str='';
	var testMicro = false;

	if (id == 'content_micro'){
		rc = showMenuItem('microreporting');
		if (rc == '1'){
			testMicro = true;
		}
		if (testMicro){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Account Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View summary and transactions for a selected deposit account.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="100%" nowrap>';
			str+='<a href="..\/account_reporting\/account_activity_search.html" class="default">Account activity<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testMicro
	}//end content_micro;
}//end writeContentMicro

function writeContentLoan(id)
{
	var rc;
	var str='';
	var testLoan = false;

	if (id == 'content_loan'){
		rc = showMenuItem('loan');
		if (rc == '1'){
			testLoan = true;
		}
		if (testLoan){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Loan Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View summary and detail information on the notes for a selected loan.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/loan\/summary.html" class="default">';
			str+='Loan summary report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/loan\/activity.html" class="default">Loan activity report<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testLoan
	}//end content_loan
}// end writeContentLoan

function writeContentCard(id)
{
	var rc;
	var str='';
	var testCard = false;

	if (id == 'content_card'){
		rc = showMenuItem('cardrpt');
		if (rc == '1'){
			testCard = true;
		}
		if (testCard){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Credit Card Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View credit card information and activity for a selected credit card.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/credit_card\/activity.html" class="default">';
			str+='Credit card activity report<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testCard
	}//end content_card
}// end writeContentCard

function writeContentDown(id)
{
	var rc;
	var str='';
	var testDown = false;

	if (id == 'content_down'){
		rc = showMenuItem('filedown');
		if (rc == '1'){
			testDown = true;
		}
		if (testDown){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Downloadable Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View, print or download a report.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/file_download\/download_file.html" class="default">';
			str+='Download report<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testDown
	}//end content_down
}// end writeContentDown

function writeContentStmt(id)
{
	var rc;
	var str='';
	var testStmt = false;

	if (id == 'content_stmt'){
		rc = showMenuItem('statements');
		if (rc == '1'){
			testStmt = true;
		}
		if (testStmt){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Statements and Documents<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View statements and documents for your accounts.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/statements\/statements.html" class="default">';
			str+='Statements and documents - account selection<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testStmt
	}//end content_stmt
}// end writeContentStmt

function writeContentWire(id)
{
	var rc;
	var str='';
	var testWire = false;

	if (id == 'content_wire'){
		rc = showMenuItem('inwirerpt');
		if (rc == '1'){
		   	testWire = true;
		}
		if (testWire){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Wire Reports<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View incoming wire information.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/wire\/incoming.html" class="default">';
			str+='Incoming wire report<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testWire
	}//end content_wire
}// end writeContentWire

function writeContentSchedule(id)
{
	var rc;
	var str='';
	var testSchd = false;

	if (id == 'content_schedule'){
		rc = showMenuItem('schedule');
		if (rc == '1'){
			testSchd = true;
		}

		if (testSchd){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Scheduled Requests<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View and manage scheduled requests.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/scheduled_requests\/next_scheduled_requests.html" class="default">';
			str+='Next Scheduled Requests<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td><\/tr>';
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testSchd
	}//end content_schedule
}//end writeContentSchedule

function writeContentExpress(id)
{
	var rc;
	var str='';
	var testExpr = false;

	if (id == 'content_express'){
		rc = showMenuItem('express');
		if (rc == '1'){
			testExpr = true;
		}
		if (testExpr){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Express Transfer<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Transfer money from one account to another account within your financial organization.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/express_transfer\/express_entry.html" class="default">';
			str+='Express transfer request<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/express_transfer\/express_history_select.html" class="default">Express transfer history<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/express_transfer\/express_transmit.html" class="default">';
			str+='Express transfer transmit<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td>';
			str+='<\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testExpr
	}//end content_express
}// end writeContentExpress

function writeContentBook(id)
{
	var rc;
	var str='';
	var testBook = false;

	if (id == 'content_book'){
		rc = showMenuItem('book');
		if (rc == '1'){
			testBook = true;
		}
		if (testBook){
		    rc=showMenuItem('multipleapprovals');
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Book Transfer<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Transfer money from one account to many accounts within your financial organization.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/book_transfer\/entry.html" class="default">';
			str+='Book transfer<\/a><\/td><td align="left" width="100%" nowrap>';
			if(rc == '1')
			{
			 str+='<a href="..\/book_transfer\/template_approval.html" class="default">Book transfer template approval<\/a>';
			}
			else
			{
			str+='<a href="..\/book_transfer\/history.html" class="default">Book transfer history<\/a>';
			}
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/book_transfer\/transmit.html" class="default">';
			str+='Book transfer transmit<\/a><\/td><td align="left" width="100%" nowrap>';
			if(rc == '1')
			{
			 str+='<a href="..\/book_transfer\/history.html" class="default">Book transfer history<\/a>';
			}
			else
			{
			 str+='&nbsp;';
			}
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testBook
	}//end content_book
}// end writeContentBook

function writeContentFunds(id)
{
	var rc;
	var str='';
	var testFunds = false;

	if (id == 'content_funds'){
		rc = showMenuItem('funds');
		if (rc == '1'){
			testFunds = true;
		}
		if (testFunds){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Funds Transfer<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Transfer money between an account within your financial organization and an external account.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/funds_transfer\/funds_entry.html" class="default">';
			str+='Funds transfer request<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/funds_transfer\/funds_history_select.html" class="default">Funds transfer history<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/funds_transfer\/funds_transmit.html" class="default">';
			str+='Funds transfer transmit<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;<\/td>';
			str+='<\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testFunds
	}//end content_funds
}// end writeContentFunds

function writeContentLoans(id)
{
	var rc,rc1,rc2;
	var str='';
	var testLoans = false;	var testPay = false;	var testAdv = false;

	if (id == 'content_loans'){
		rc = showMenuItem('loan');
		if (rc == '1'){
			rc1 = showLoanItem('payment');
			if (rc1 == '1'){
				testPay = true;
			}
			rc2 = showLoanItem('advance');
			if (rc2 == '1'){
				testAdv = true;
			}
			if ((testPay) || (testAdv)){
				testLoans = true;
			}//end Loan with either payment or advance
		}
		if (testLoans){
        	str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
        	str+='<td class="subheader" colspan="3" align="left">Loans<br>';
        	str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
        	str+='Manage loan transaction activities.';
        	str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    		if (testPay){
    			str+='<td align="left" width="30%" nowrap><a href="..\/loan\/payment.html" class="default">';
    			str+='Loan payment request<\/a><\/td><td align="left" width="100%" nowrap>';
    			if (testAdv){
    				str+='<a href="..\/loan\/transmit.html" class="default">Transmit loan<\/a>';
    				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				str+='<td align="left" width="30%" nowrap><a href="..\/loan\/advance.html" class="default">';
    				str+='Loan advance request<\/a><\/td><td align="left" width="100%" nowrap>';
    				str+='<a href="..\/loan\/history.html" class="default">Loan history report<\/a>';
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end loan with payment and advance
    			else{
    				str+='<a href="..\/loan\/history.html" class="default">Loan history report<\/a>';
    				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				str+='<td align="left" width="30%" nowrap><a href="..\/loan\/transmit.html" class="default">';
    				str+='Transmit loan<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;';
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end loan with payment, without advance
    		}
    		else{
    			str+='<td align="left" width="30%" nowrap><a href="..\/loan\/advance.html" class="default">';
    			str+='Loan advance request<\/a><\/td><td align="left" width="100%" nowrap>';
				str+='<a href="..\/loan\/history.html" class="default">Loan history report<\/a>';
  				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
  				str+='<td align="left" width="30%" nowrap><a href="..\/loan\/transmit.html" class="default">';
  				str+='Transmit loan<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;';
  				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
  			}//end loan with advance, without payment

			helpwriteContent(id,str);
			str='';
		}//end testLoans
	}//end content_loans
}// end writeContentLoans

function writeContentBpmnt(id)
{
	var rc;
	var str='';
	var testBpmnt = false;

	if (id == 'content_bpmnt'){
		rc = showMenuItem('bill');
		if (rc == '1'){
			testBpmnt = true;
		}
		if (testBpmnt){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Bill Payment<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage bill payment activites.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/bill_payment\/add_payment.html" class="default">';
			str+='Add bill payment<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/bill_payment_setup\/add_payee.html" class="default">Add bill payee<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/bill_payment\/change_payment.html" class="default">';
			str+='Change bill payment<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/bill_payment_setup\/change_payee.html" class="default">Change bill payee<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/bill_payment\/delete_payment.html" class="default">';
			str+='Delete bill payment</a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/bill_payment_setup\/delete_payee.html" class="default">Delete bill payee<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/bill_payment\/payment_history.html" class="default">';
			str+='Bill payment history</a><\/td><td align="left" width="100%" nowrap>&nbsp;';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testBpmnt
	}//end content_bpmnt
}// end writeContentBpmnt

function writeContentBpay(id)
{
	var rc;
	var str='';
	var testBpay = false;

	if (id == 'content_bpay'){
		rc = showMenuItem('billpay');
		if (rc == '1'){
			testBpay = true;
		}
		if (testBpay){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left"><a name="BP">Bill Pay</a><br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage bill payment activities.';
			str+='<\/span><\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testBpay
	}//end content_bpay
}// end writeContentBpay

function checkBillPay(id)
{
	var check;
	var temp;

	check = showMenuItem('billpay');
	if (check == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}//end checkBillPay

function writeContentCred(id)
{
	var rc;
	var str='';
	var testCred = false;

	if (id == 'content_cred'){
		rc = showMenuItem('cardpay');
		if (rc == '1'){
			testCred = true;
		}
		if (testCred){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Credit Cards<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Enter and approve credit card payments. View credit card payment history.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/credit_card\/entry.html" class="default">';
			str+='Credit card payment entry<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/credit_card\/history.html" class="default">Credit card payment history<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/credit_card\/transmit.html" class="default">';
			str+='Credit card payment transmit<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testCred
	}//end content_cred
}// end writeContentCred

function writeContentACH(id)
{
	var rc1,rc2,rc3,rc4,rc5,rc6,rc7;rc8=false;
	var str='';
	var testACH = false;	var testACHUp = false;
	if(showMenuItem('multipleapprovals'))
	{
	 rc8 = true;
	}
	if (id == 'content_ach'){
		rc1 = showMenuItem('ach');
		if (rc1 == '1'){
			rc1 = showACHItem('payment');
			rc2 = showACHItem('federal');
			rc3 = showACHItem('state');
			rc4 = showACHItem('child');
			rc5 = showACHItem('stp820');
			rc6 = showACHItem('collection');
			newrc1 = showACHItem('ctxcoll');
			newrc2 = showACHItem('collection');
			newrc3 = showACHItem('ppdcoll');
			newrc4 = showACHItem('iatcoll');
			if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1') || (newrc1 == '1') || (newrc2 == '1') || (newrc3 == '1') || (newrc4 == '1')){
				testACH = true;
			}//end both ACH and at least one type
			rc7 = showACHItem('upload');
			if (rc7 == '1'){
				testACHUp = true;
			}//end testACHUp
		}
		if ((testACH) && (testACHUp)){

		var link1='<a href="..\/ach\/send.html" class="default">Send money<\/a>';
		var link2='<a href="..\/ach\/collect.html" class="default">Collect money<\/a>';
		var link3='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a>';
		var link4='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
		var link5='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a>';
		var link6='<a href="..\/ach\/upload.html" class="default">ACH file upload<\/a>';
		var link7='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
		var link8='<a href="..\/ach\/transmit.html" class="default">ACH transmit<\/a>';
		var link9='<a href="..\/ach\/upload_status.html" class="default">ACH file upload status<\/a>';






  			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
  			str+='<td class="subheader" colspan="3" align="left">ACH<br>';
  			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
  			str+='Manage ACH activities.';
  			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')){
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/send.html" class="default">';
				str+='Send money<\/a><\/td><td align="left" width="100%" nowrap>';
				if ((newrc1 == '1') || (newrc2 == '1') || (newrc3 == '1') || (newrc4 == '1')){
					str+='<a href="..\/ach\/upload.html" class="default">ACH file upload<\/a>';
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/collect.html" class="default">';
					str+='Collect money<\/a><\/td><td align="left" width="100%" nowrap>';
					str+='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
					str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';
					str+='<a href="..\/ach\/upload_status.html" class="default">ACH file upload status<\/a>';
					str+='<\/td><\/tr>';
					str+='<tr><td width="15px" align="left" nowrap">&nbsp;<\/td>';

					//Begin checking for multipleapprovals
					if (rc8) {
						str+='<td align="left" width="30%" nowrap><a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a><\/td>';
						str+='<td align="left" width="100%" nowrap>';
						str+='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a><\/td><\/tr>';
						str+='<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
						str+='<td align="left" width="30%" nowrap><a href="..\/ach\/history.html" class="default">';
						str+='ACH history<\/a><\/td><td width="100%" nowrap>&nbsp;<\/td><\/tr>';
						str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
					}
					else {
						str+='<td align="left" width="30%" nowrap><a href="..\/ach\/history.html" class="default">';
						str+='ACH history<\/a><\/td>';
						str+='<td align="left" width="100%" nowrap>';
						str+='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a><\/td><\/tr>';
						str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
					}
					//End checking for multipleapprovals
				}//end ACH with send and collect

				else{
					//Begin checking for multipleapprovals
					if(rc8) {
					str+='<a href="..\/ach\/upload.html" class="default">';
					str+='ACH file upload<\/a><\/td><\/tr>';
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
					str+='ACH transmit<\/a><\/td><td align="left" nowrap>';
					str+='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap">&nbsp;<\/td>';
					str+='<td width="30%" align="left" nowrap">';
						str+='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a><\/td>';
						str+='<td align="left" nowrap><a href="..\/ach\/upload_status.html" class="default">ACH file upload status<\/a>';
						str+'<\/td><\/tr>';
						str+='<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
						str+='<td align="left" width="30%" nowrap><a href="..\/ach\/history.html" class="default">';
						str+='ACH history<\/a><\/td><td align="left" width="100%" nowrap>';
						str+='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a>';
						str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
					}
					else {
					    str+='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
					    str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				        str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
					    str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';
					    str+='<a href="..\/ach\/upload_status.html" class="default">ACH file upload status<\/a>';
					    str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap">&nbsp;<\/td>';
					    str+='<td width="30%" align="left" nowrap">';
						str+='<a href="..\/ach\/history.html" class="default">';
						str+='ACH history<\/a><\/td><td align="left" width="100%" nowrap>';
						str+='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a>';
						str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap">&nbsp;<\/td>';
					    str+='<td width="30%" align="left" nowrap">';
						str+='<a href="..\/ach\/upload.html" class="default">';
					    str+='ACH file upload<\/a>';
					    str+='<\/td><td width="100%" nowrap>&nbsp;<\/td><\/tr>';
						str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
					}
					//End checking for multipleapprovals
				}//end ACH with send but not collect
			}//end if send
			else{

				if (rc8){
				    str+='<td align="left" width="30%" nowrap><a href="..\/ach\/collect.html" class="default">';
				    str+='Collect money<\/a><\/td><td align="left" width="100%" nowrap>';
					str+='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/upload.html" class="default">';
    			    str+='ACH file upload<\/a><\/td><td align="left" width="100%" nowrap>';
    			    str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				    str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
				    str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';
				    str+='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
				    str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					}
				else {
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/collect.html" class="default">';
				str+='Collect money<\/a><\/td><td align="left" width="100%" nowrap>';
				str+='<a href="..\/ach\/upload_transmit.html" class="default">ACH file upload transmit<\/a>';
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
				str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';
				str+='<a href="..\/ach\/upload_status.html" class="default">ACH file upload status<\/a>';
    			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    			str+='<td align="left" width="30%" nowrap><a href="..\/ach\/history.html" class="default">';
    			str+='ACH history<\/a><\/td><td align="left" width="100%" nowrap>';
    			str+='<a href="..\/ach\/upload_history.html" class="default">ACH file upload history<\/a>';
    			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    			str+='<td align="left" width="30%" nowrap><a href="..\/ach\/upload.html" class="default">';
    			    str+='ACH file upload<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;';
					}
				//End checking for multipleapprovals

				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
			}//end ACH with collect but not send
		}//end testACH and testACHUp
		else
		if (testACH){//ACH without ACH file upload
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">ACH<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage ACH activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')){
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/send.html" class="default">';
				str+='Send money<\/a><\/td><td align="left" width="100%" nowrap>';
				if (rc6 == '1'){
					//Begin checking for multipleapprovals

					if ( rc8) {
						str+='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a>';
					}
					else {
						str+='<a href="..\/ach\/transmit.html" class="default">ACH transmit<\/a>';
					}
					//End checking for multipleapprovals
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/collect.html" class="default">';
					str+='Collect money<\/a><\/td><td align="left" width="100%" nowrap>';
					str+='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
					if(rc8)
					{
					str+='<tr><td width="15px" nowrap>&nbsp;<\/td><td width="30%" align="left" nowrap>';
					str+='<a href="..\/ach\/transmit.html" class="default">ACH transmit<\/a>';
					str+='<\/td><td align="left" width="100%" nowrap>&nbsp;';
					}
					str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
				}//end ACH with send and collect
				else{
			    	if(rc8)
				    {
				     str+='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a>';
				    }
				    else
				    {
					str+='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
				    }
					str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
					str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
					str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';

					//Begin checking for multipleapprovals
					if ( rc8) {
						str+='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
					}
					else {
						str+='&nbsp';
					}
					//End checking for multipleapprovals

					str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
				}//end ACH with send but not collect
			}//end if send
			else{
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/collect.html" class="default">';
				str+='Collect money<\/a><\/td><td align="left" width="100%" nowrap>';
				if(rc8)
				{
				 str+='<a href="..\/ach\/template_approval.html" class="default">ACH template approval<\/a>';
				}
				else
				{
				str+='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
				}
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				str+='<td align="left" width="30%" nowrap><a href="..\/ach\/transmit.html" class="default">';
				str+='ACH transmit<\/a><\/td><td align="left" width="100%" nowrap>';

				//Begin checking for multipleapprovals
					if ( rc8) {
						str+='<a href="..\/ach\/history.html" class="default">ACH history<\/a>';
					}
					else {
						str+='&nbsp';
					}
				//End checking for multipleapprovals

				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
			}//end ACH with collect but not send
		}//end testACH without testACHUp


if((rc1 != '1') && (rc2 != '1') && (rc3 != '1') && (rc4 != '1') && (rc5 != '1') && (testACH) && (testACHUp) )
{
	str='';
	str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">ACH<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage ACH activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap>' + link2 ;
			str+='<\/td><td align="left" width="100%" nowrap>';
			str+=link6;
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap>' + link8 ;
				str+='<\/td><td align="left" width="100%" nowrap>';
				str+= link7;
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap>' + link3 ;
				str+='<\/td><td align="left" width="100%" nowrap>';
				str+= link9;
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				str+='<td align="left" width="30%" nowrap>' + link4 ;
				str+='<\/td><td align="left" width="100%" nowrap>';
				str+= link5;
				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
}
			helpwriteContent(id,str);
			str='';
	}//end content_ach
}// end writeContentACH

function writeContentIntegrated(id)
{
	var rc,rc1,rc2;
	var str='';
	var testIntPay = false;	var testPay = false;	var testAdv = false;

	if (id == 'content_integrated'){
		rc = showMenuItem('integratedpayables');
		if(rc == '1')
		{
				testIntPay = true;
		}
		if (testIntPay)
		{
        	str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
        	str+='<td class="subheader" colspan="3" align="left">Integrated Payables<br>';
        	str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
        	str+='Manage the transfer of payment files and payments from your PC to the bank.';
        	str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    		str+='<td align="left" width="30%" nowrap><a href="..\/integrated_payables\/upload_select.html" class="default">';
    		str+='Payment file upload<\/a><\/td><td align="left" width="100%" nowrap>';
    		str+='<a href="..\/integrated_payables\/upload_history.html" class="default">Payment file upload history<\/a>';
    		str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    		str+='<td align="left" width="30%" nowrap><a href="..\/integrated_payables\/upload_transmit_select.html" class="default">';
    		str+='Payment file upload transmit<\/a><\/td><td align="left" width="100%" nowrap>';
    		str+='<a href="..\/integrated_payables\/inquiry_selection_criteria.html" class="default">Payment reporting<\/a>';
    		str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testIntPay
	}//end content_integrated
}// end writeContentIntegrated

function writeContentUp(id)
{
	var rc;
	var str='';
	var testUp = false;

	if (id == 'content_upload'){
		rc = showMenuItem('fileup');
		if (rc == '1'){
			testUp = true;
		}
		if (testUp){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">File Upload<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage the transfer of files from your PC to the bank.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/file_upload\/upload_file.html" class="default">';
			str+='Upload file<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/file_upload\/detail_history.html" class="default">File upload detail history report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/file_upload\/pending_files.html" class="default">';
			str+='Transmit file<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/file_upload\/summary_history.html" class="default">File upload summary history report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap>&nbsp;';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testUp
	}//end content_upload
}// end writeContentUp

function writeContentWires(id)
{
	var rc,rc1,rc2,rc3,rc4 = false;
	var str='';
	var testWires = false;	var testSetup = false;
	var str1 = '<a href="..\/wire\/template_approval.html" class="default">Wire transfer template approval<\/a>';
	if (id == 'content_wires'){
		rc = showMenuItem('wiremain');
		if(showMenuItem('multipleapprovals') == "1")
		rc4 = true;
		if (rc == '1'){
			rc1 = showWireItem('freeform');
			rc2 = showWireItem('repetitive');
			if ((rc1 == '1') || (rc2 == '1')){
				testWires = true;
			}//end wire with at least one type
			rc3 = showWireItem('setup');
			if (rc3 == '1'){
				testSetup = true;
			}//end testSetup
		}
		if ((testWires) && (testSetup)){
		   	str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Wire<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage wire transfer activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			if (rc1 == '1'){
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/free_form_entry_header.html" class="default">';
				str+='One time wire transfer entry<\/a><\/td><td align="left" width="100%" nowrap>';
				if(rc4 && rc2!= '1')
				{
				  str=str+str1;
			    }
				else
				{
				str+='<a href="..\/wire\/setup.html" class="default">Wire template setup<\/a>';
				}
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				if (rc2 == '1'){
    				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/rep_entry.html" class="default">';
    				str+='Template based wire transfer - single request</a><\/td><td align="left" width="100%" nowrap>';
    				if(rc4)
    				{
    				 str=str+str1;
    				}
    				else
    				{
    				str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				}
    				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">';
    				str+='Transmit wire<\/a><\/td><td align="left" width="100%" nowrap>';
    				if(rc4)
    				{
    				 str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				}
    				else
    				{
    				str+='&nbsp;';
    				}
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end wire with both rep and freeform
    			else{
    				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">';
    				str+='Transmit wire</a><\/td><td align="left" width="100%" nowrap>';
    				str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				if(rc4)
    				{
    				 str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				 str+='<td align="left" width="30%" nowrap><a href="..\/wire\/setup.html" class="default">Wire template setup<\/a>';
    				 str+='<td align="left" width="100%" nowrap>&nbsp;';
    				}
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end wire with freeform only
			}//end if freeform
			else{
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/rep_entry.html" class="default">';
				str+='Template based wire transfer - single request<\/a><\/td><td align="left" width="100%" nowrap>';
				if(rc4)
				{
				 str=str+str1;
				}
				else
				{
				str+='<a href="..\/wire\/setup.html" class="default">Wire template setup<\/a>';
				}
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">';
				str+='Transmit wire<\/a><\/td><td align="left" width="100%" nowrap>';
    			str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    			if(rc4)
    			{
    			 str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    			 str+='<td align="left" width="30%" nowrap><a href="..\/wire\/setup.html" class="default">Wire template setup<\/a>';
    			 str+='<td align="left" width="100%" nowrap>&nbsp;';
    			}
				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
			}//end wire with only rep
		}//end wire with setup
		else
		if (testWires){//wires without setup
		   	str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Wire<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Manage wire transfer activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			if (rc1 == '1'){
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/free_form_entry_header.html" class="default">';
				str+='One time wire transfer entry<\/a><\/td>';
				if (rc2 == '1'){
    				str+='<td align="left" width="100%" nowrap>';
    				if(rc4)
    				{
    				 str=str+str1;
    				}
    				else
    				{
    				str+='<a href="..\/wire\/transmit.html" class="default">Transmit wire<\/a>';
    				}
    				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/rep_entry.html" class="default">';
    				str+='Template based wire transfer - single request<\/a><\/td><td align="left" width="100%" nowrap>';
    				str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				if(rc4)
    				{
    				  str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    			      str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">Transmit wire<\/a>';
    			      str+='<td align="left" width="100%" nowrap>&nbsp;';
    				}
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end wire with both rep and freeform
    			else{
    				str+='<td align="left" width="100%" nowrap>';
    				if(rc4)
    				{
    				str=str+str1;
    				}
    				else
    				{
    				str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				}
    				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
    				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">';
    				str+='Transmit wire<\/a><\/td><td align="left" width="100%" nowrap>';
    				if(rc4)
    				{
    				 str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    				}
    				else
    				{
    				  str+='&nbsp;';
    				}
    				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    			}//end wire with freeform only
			}//end if freeform
 			else{
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/rep_entry.html" class="default">';
				str+='Template based wire transfer - single request<\/a><\/td><td align="left" width="100%" nowrap>';
				if(rc4)
				{
				str=str+str1;
				}
				else
				{
    			str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
    			}
				str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
				str+='<td align="left" width="30%" nowrap><a href="..\/wire\/transmit.html" class="default">';
				str+='Transmit wire<\/a><\/td><td align="left" width="100%" nowrap>';
				if(rc4)
				{
				 str+='<a href="..\/wire\/history.html" class="default">Wire history<\/a>';
				}
				else
				{
				 str+='&nbsp;';
				}
				str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
 			}//end wire with rep only
		}//end testWires without setup

        	helpwriteContent(id,str);
        	str='';
	}//end content_wires
}// end writeContentWires

function writeContentStop(id)
{
	var rc;
	var str='';
	var testStop = false;

	if (id == 'content_stop'){
		rc = showMenuItem('stop');
		if (rc == '1'){
			testStop = true;
		}
		if (testStop){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Stop Payment<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Request stop payments or view stop payment activity.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/stop_payment\/stoppay_request.html" class="default">';
			str+='Stop payment request<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/stop_payment\/history.html" class="default">Stop payment activity<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testStop
	}//end content_stop
}// end writeContentStop

function writeContentACHPP(id)
{
	var rc;
	var str='';
	var testACHPP = false;

	if (id == 'content_achpp'){
		rc = showMenuItem('achpospay');
		if (rc == '1'){
			testACHPP = true;
		}
		if (testACHPP){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">ACH Positive Pay<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Examine questionable ACH debit transactions online and determine (pay or reject).';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/ach_positive_pay\/exception_manager.html" class="default">';
			str+='ACH positive pay exceptions manager<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/ach_positive_pay\/exceptions_status_criteria.html" class="default">ACH positive pay exceptions status<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/ach_positive_pay\/originator_company_maintainance.html" class="default">';
			str+='ACH originator company maintenance<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='&nbsp;';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testACHPP
	}//end content_ACHpp
}// end writeContentACHPP

function writeContentPP(id)
{
	var rc;
	var str='';
	var testPP = false;

	if (id == 'content_pp'){
		rc = showMenuItem('opositive');
		if (rc == '1'){
			testPP = true;
		}
		if (testPP){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Pos Pay<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View exception reports and histories.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/positive_pay.old\/exceptions.html" class="default">';
			str+='Pos pay exceptions<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/positive_pay.old\/history.html" class="default">Pos pay history<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testPP
	}//end content_pp
}// end writeContentPP

function writeContentEnhPP(id)
{
	var rc,rc1,rc2,rc3;
	var str='';
	var testEnhPP = false;
	var testPPIss = false;
	var testPPExc = false;
	var testRevPP = false;


	if (id == 'content_enhpp'){
	    rc = showMenuItem('positive');
	    rc3 = showMenuItem('revpospay');
		if (rc == '1'){
			testEnhPP = true;
			rc1 = showMenuItem('pospayissue');
			rc2 = showMenuItem('pospayexception');
			if(rc1 == '1'){
				testPPIss = true;
			}
			if(rc2 == '1'){
				testPPExc = true;
			}

        }
        if (rc3 == '1') {
            testRevPP = true;
        }
        if (testEnhPP || testRevPP) {


            var count_columns = 1;
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Positive Pay<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Examine questionable checks online and determine check status (pay or reject).';
			str+='<\/span><\/td><\/tr>';


			if (testRevPP || (testEnhPP && testPPExc)) {
			    if (count_columns == '1') {
			        str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			        str += '<td align="left" width="40%" nowrap>';
			    }
			    else {
			        str += '<td align="left" width="60%" nowrap>';
			    }

            str += '<a href="..\/positive_pay\/except.html" class="default">';
            str += 'Positive pay exceptions manager<\/a><\/td>';
            count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }
            }

            if (testEnhPP || testRevPP) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="..\/positive_pay\/decision.html" class="default">';
                str += 'Positive pay decisions report<\/a></td>';

                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testEnhPP && testPPIss) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

        	str+='<a href="..\/positive_pay\/entry.html" class="default">';
        	str += 'Positive pay issue entry<\/a><\/td>';
             count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testEnhPP) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="..\/positive_pay\/outstand.html" class="default">';
                str += 'Positive pay outstanding issues report<\/a><\/td>';

                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testEnhPP && testPPIss) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

             str+='<a href="..\/positive_pay\/import.html" class="default">';
             str += 'Positive pay issue file import<\/a><\/td>';
                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testEnhPP) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="..\/positive_pay\/stale.html" class="default">';
                str += 'Positive pay stale issues report<\/a><\/td>';

                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testRevPP || (testEnhPP && testPPExc)) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="..\/positive_pay\/decision_import.html" class="default">';
                str+='Positive pay decision file import<\/a><\/td>';
                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }
            }

            if (testEnhPP) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="..\/positive_pay\/issue.html" class="default">';
                str += 'Positive pay issue status report<\/a><\/td>';


                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

            if (testEnhPP && testPPIss) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str+='<a href="../positive_pay/update.html" class="default">';
                str += 'Positive pay update issue</a></td>';
                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

           if (testRevPP || (testEnhPP && testPPExc)) {
               if (count_columns == '1') {
                   str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                   str += '<td align="left" width="40%" nowrap>';
               }
               else {
                   str += '<td align="left" width="60%" nowrap>';
               }

               str += '<a href="../positive_pay/decision_approval.html" class="default">Positive pay decision file approval<\/a><\/td>';

                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }
            }

            if (testEnhPP && testPPIss) {
                if (count_columns == '1') {
                    str += '<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
                    str += '<td align="left" width="40%" nowrap>';
                }
                else {
                    str += '<td align="left" width="60%" nowrap>';
                }

                str += '<a href="../positive_pay/issue_approval.html" class="default">';
                str += 'Positive pay issue approval</a></td>';
                count_columns++;
                if (count_columns > 2) {
                    count_columns = 1;
                    str += '<\/tr>';
                }

            }

			}
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';

	}//end content_enhpp
}// end writeContentEnhPP

function writeContentFAR(id)
{
	var rc;
	var str='';
	var testFAR = false;

	if (id == 'content_far'){
		rc = showMenuItem('fullrecon');
		if (rc == '1'){
			testFAR = true;
		}
		if (testFAR){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Full Account Reconciliation<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View account reconciliation reports for account balancing.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/acct_recon\/entry.html" class="default">';
			str+='Account recon issue manual entry<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/acct_recon\/issue_approval.html" class="default">Account recon issue approval<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/acct_recon\/import.html" class="default">';
			str+='Account recon issue file import<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/acct_recon\/full_statement.html" class="default">Account recon statement report<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/acct_recon\/update.html" class="default">';
			str+='Account recon update issue<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/acct_recon\/full_activity.html" class="default">Account recon activity report<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testFAR
	}//end content_far
}// end writeContentFAR

function writeContentPAR(id)
{
	var rc;
	var str='';
	var testPAR = false;

	if (id == 'content_par'){
		rc = showMenuItem('partrecon');
		if (rc == '1'){
			testPAR = true;
		}
		if (testPAR){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Partial Account Reconciliation<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View account reconciliation reports for account balancing.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/acct_recon\/part_statement.html" class="default">';
			str+='Account recon statement report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/acct_recon\/part_activity.html" class="default">Account recon activity report<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testPAR
	}//end content_par
}// end writeContentPAR

function writeContentDAR(id)
{
	var rc;
	var str='';
	var testDAR = false;

	if (id == 'content_dar'){
		rc = showMenuItem('deprecon');
		if (rc == '1'){
			testDAR = true;
		}
		if (testDAR){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Deposit Reconciliation<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View account reconciliation reports for account balancing.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/acct_recon\/dep_statement.html" class="default">';
			str+='Deposit recon statement report<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/acct_recon\/dep_activity.html" class="default">Deposit recon activity report<\/a>';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testDAR
	}//end content_dar
}// end writeContentDAR

function writeContentChk(id)
{
	var rc,rc1,rc2,rc3,rc4;
	var str='';
	var testChk = false;

	if (id == 'content_chk'){
		rc = showMenuItem('chkreorder');
		if (rc == '1'){
			rc1 = showMenuItem('account');
			rc2 = showMenuItem('reporting');
			rc3 = showMenuItem('largereporting');
			rc4 = showMenuItem('midreporting');
			if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1')){
				testChk = true;
			}
		}
		if (testChk){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Check Reorder<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Launch or link to the check vendor application to complete check and deposit slip orders.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="40%" nowrap><a href="..\/check_reorder\/reorder.html" class="default">';
			str+='Order checks/deposit slips<\/a><\/td><td align="left" width="100%" nowrap>&nbsp;';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testChk
	}//end content_chk
}// end writeContentChk






function writeContentIS(id) {
    var rc;
    var str = '';
    var testImageSearch = false;

    if (id == 'content_is') {
        rc = showMenuItem('image');
        if (rc == '1') {
            testImageSearch = true;
        }
        if (testImageSearch) {
            str += '<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
            str += '<td class="subheader" colspan="3" align="left">Image Search<br>';
            str += '<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
            str += 'View images of archived checks,deposit tickets, and deposited items.';

            str += '<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
            str += '<td align="left" width="40%" nowrap><a href="..\/image_search\/image_search_criteria.html" class="default">';
            str += 'Image search criteria<\/a><\/td><td align="left" width="100%" nowrap>';
            str += '<a href="..\/image_search\/arch_request.html" class="default">Image and archive requests<\/a>';
            str += '<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

            helpwriteContent(id, str);
            str = '';
        } //end testImageSearch
    } //end content_is
} // end writeContentIS



function writeContentRDC(id)
{
	var rc;
	var str='';
	var testRDC = false;

	if (id == 'content_rdc'){
		rc = showMenuItem('capturerdc');
		if (rc == '1'){
			testRDC = true;
		}
		if (testRDC){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left"><a name="RDC">Remote Deposit Capture</a><br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Access remote deposit capture system to deposit checks.';
			str+='<\/span><\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testRDC
	}//end content_rdc
}// end writeContentRDC

function checkRDC(id)
{
	var check;
	var temp;

	check = showMenuItem('capturerdc');
	if (check == '0'){
		temp = document.getElementById(id);
		temp.style.display = 'none';
		}
}//end checkRDC
function writepremiumlink(id,ismanage)
{
	var premium=false;
	var current = eval("record1");

	//iterate through the data from the text file and store into an array
	for(var i=0; i < record1.length; i++){

	if(record1[i] == 'premium')
	{

		if(ismanage)
		{

		str=document.getElementById(id).innerHTML;
		str=str.replace(/\<\/UL\>/gi,'');
		//alert(str);
		str+='<li class="leftContentListNavSelected"><a href="../customer_support/manage_alerts.html">Manage alerts</a></li></UL>';
		document.getElementById(id).innerHTML=str;
		}
		else
		{

			str=document.getElementById(id).innerHTML;
			str=str.replace(/\<\/UL\>/gi,'');
			str+='<li><a href="../customer_support/manage_alerts.html">Manage alerts</a></li></UL>';
			document.getElementById(id).innerHTML=str;
			if(id.substring(0,4)=='ins_')
			{
				document.getElementById('instruction').style.display='';
			}

		}
    }
	}
}
function writeContentComm(id)
{
	var rc;
	var str='';
	var testComm = false;
	var premium=false;
	var current = eval("record1");
	for(var i=0; i < record1.length; i++){

	if(record1[i] == 'premium')
	{
		premium=true;
	}
	}

	if (id == 'content_comm'){
	   	testComm = true;

		if (testComm){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Communications<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='View mail and alert messages, send a message, retrieve bank forms and documents, and manage alerts.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/received.html" class="default">';
			str+='View received mail and alerts<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/customer_support\/send_message.html" class="default">Contact us<\/a>';
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/sent.html" class="default">';
			str+='View sent mail<\/a><\/td><td align="left" width="100%" nowrap>';
			str+='<a href="..\/customer_support\/download.html" class="default">Download documents<\/a>';
			str+='<\/td><\/tr>';
			//alert('hi');

			str+='<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/manage_alerts.html" class="default">';
			str+='Manage alerts <\/a><\/td><td align="left" width="100%" nowrap>';
			str+='';
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
			}
			helpwriteContent(id,str);
			str='';
		}//end testComm
	}//end content_comm
// end writeContentComm

function writeContentCoAdmin(id)
{
	var rc;
	var str='';
	var testCoAdm = false;

	if (id == 'content_coadmin'){
		rc = showMenuItem('admin');
		if (rc == '1'){
			testCoAdm = true;
		}
		if (testCoAdm){
			rc=showMenuItem('multipleapprovals');
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Company Administration<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Perform company administration activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/administration\/user_admin.html" class="default">';
			str+='User administration<\/a><\/td><td align="left" width="100%" nowrap>';
			//if(rc == '1')
			//{
			 str+='<a href="..\/administration\/account_admin.html" class="default">';
			 str+='Account administration<\/a>';
			 str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			 str+='<td align="left" width="30%" nowrap>';
			 str+=' <a href="..\/administration\/user_admin_approval.html" class="default">User administration approval<\/a><\/td>';
			 str+='<td align="left" width="30%" nowrap><a href="..\/administration\/approvals_admin.html" class="default">';
             str+='Approvals administration<\/a><\/td><\/tr>';
		//	}
		//	else
		//	{
		//	 str+='<a href="..\/administration\/account_admin.html" class="default">';
		//	 str+='Account administration<\/a><\/td><\/tr>';
		//	 str+='<tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
		//	 str+='<td align="left" width="30%" nowrap>';
		//	 str+='<a href="..\/administration\/approvals_admin.html" class="default">';
		//	 str+='Approvals administration<\/a><\/td><\/tr>';
		//	}
			str+='<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testCoAdm
	}//end content_coadmin
}// end writeContentCoAdmin

function writeContentSeAdmin(id)
 {
    var rc;
	 var rc1;
	var str='';
	var testSeAdm = false;

	if(id== 'content_seadmin'){
	    rc = showMenuItem('positive');
		  rc1 = showMenuItem('fullrecon');
		if (rc == '1' || rc1 == '1'){
			testSeAdm = true;
		}
		if (testSeAdm){
		str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Service Administration<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Maintain company and account defaults for the services that your company uses.';
			str+='<\/span><\/td><\/tr><tr>';
			if(showMenuItem('fullrecon'))
							{
			str+='<td align="left" width="29%" nowrap><a href="..\/administration\/fullrecon_admin.html" class="default">';
			str+='Full account recon administration<\/a><\/td>';
							}
			if(showMenuItem('positive'))
							{
			str+='<td align="left" width="65%" nowrap><a href="..\/administration\/positive_admin.html" class="default">';
			str+='Positive pay administration<\/a><\/td>';
							}

            str += '<\/tr>';
            if (showMenuItem('revpospay')) {
                str += '<tr><td align="left" width="29%" nowrap><a href="..\/administration\/reversepospay_admin.html" class="default">';
            str += 'Reverse positive pay administration<\/a><\/td><\/tr>';
            }
        str += '<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			if( showMenuItem('admin'))
			{
			helpwriteContent(id,str);
			}
			str='';
		}//end testSeAdm
	}//end content_seadmin
}// end writeContentSeAdmin

function writeContentSelfAdmin(id)
{
	var rc,rc1;
	var str='';
	var testSelfAdm = false;
	rc1= HasTokenApproval();

	if (id == 'content_selfadmin'){
	   	testSelfAdm = true;

		if (testSelfAdm){
			str+='<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
			str+='<td class="subheader" colspan="3" align="left">Self Administration<br>';
			str+='<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
			str+='Perform self administrative activities.';
			str+='<\/span><\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/change_password.html" class="default">';
			str+='Change password<\/a><\/td><td align="left" width="100%" nowrap>';
			if(rc1)
			{
			 str+='<a href="..\/customer_support\/activity.html" class="default">View user activity report<\/a>';
			}
			else
			{
			str+='<a href="..\/customer_support\/favorites.html" class="default">Manage favorites<\/a>';
			}
			str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/personal_pref.html" class="default">';
			str+='Personal preferences<\/a><\/td><td align="left" width="100%" nowrap>';
			if(rc1)
			{
			 str+='<a href="..\/customer_support\/secure_token_setup.html" class="default">Secure token setup<\/a>';
			 str+='<\/td><\/tr><tr><td width="15px" align="left" nowrap>&nbsp;<\/td>';
			str+='<td align="left" width="30%" nowrap><a href="..\/customer_support\/favorites.html" class="default">Manage favorites<\/a>';
			 str+='<\/td><td width="100%" nowrap >&nbsp;';
			}
			else
			{
			str+='<a href="..\/customer_support\/activity.html" class="default">View user activity report<\/a>';
			}
			str+='<\/td><\/tr><tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';

			helpwriteContent(id,str);
			str='';
		}//end testSelfAdm
	}//end content_selfadmin
}// end writeContentSelfAdmin
//Function selects a particular value in a dropdown list
function SelectDropDownValue(id,Value)
{
	var myselect=document.getElementById(id);
	for (var i=0; i<myselect.options.length; i++)
	{
        if(myselect.options[i].value == Value)
	    {
		    myselect.options[i].selected = true;
		}
	}
}

//Function loads the dropdownlist for ACH Payment pages
//based on the availability of the services
function LoadDropDownValuesForPayment(id,str)
{
    var dropDownList =document.getElementById(id);
	if(showACHItem('ccdpay'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "CCD Payment (Corporate)";
	   optn.value = "CCD"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('child'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "Child Support Payment";
	   optn.value = "CHILD"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('ctx'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "CTX Payment (Corporate Trade Exchange)";
	   optn.value = "CTX"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('federal'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "Federal Tax";
	   optn.value = "FED"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('iat'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "IAT Payment (International)";
	   optn.value = "IAT"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('payment'))
	{
	    var optn=document.createElement("OPTION");
	    optn.text = "PPD Payment (Personal)";
	    optn.value = "PPD"+str;
	    dropDownList.options.add(optn);
	}
	if(showACHItem('state'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "State Tax";
	   optn.value = "STATE"+str;
	   dropDownList.options.add(optn);
	}
	if(showACHItem('stp820'))
	{
	   var optn=document.createElement("OPTION");
	   optn.text = "STP 820 Payment";
	   optn.value = "STP820"+str;
	   dropDownList.options.add(optn);
	}
}

function LoadDropDownValuesForPaymentFileDef(id, str) {
    var dropDownList = document.getElementById(id);
    if (showACHItem('ccdpay')) {
        var optn = document.createElement("OPTION");
        optn.text = "CCD Payment (Corporate)";
        optn.value = "CCD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('child')) {
        var optn = document.createElement("OPTION");
        optn.text = "Child Support Payment";
        optn.value = "CHILD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('ctx')) {
        var optn = document.createElement("OPTION");
        optn.text = "CTX Payment (Corporate Trade Exchange)";
        optn.value = "CTX" + str;
        dropDownList.options.add(optn);
    }

    if (showACHItem('iat')) {
        var optn = document.createElement("OPTION");
        optn.text = "IAT Payment (International)";
        optn.value = "IAT" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('payment')) {
        var optn = document.createElement("OPTION");
        optn.text = "PPD Payment (Personal)";
        optn.value = "PPD" + str;
        dropDownList.options.add(optn);
    }

}

//Function loads the dropdownlist for ACH collection pages
//based on the availability of the services
function LoadDropDownValuesForCollection(id,str)
{
    var dropDownList =document.getElementById(id);
    if(showACHItem('collection'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "CCD Collection (Corporate)";
	    optn.value = "CCD"+str;
	    dropDownList.options.add(optn);
    }
    if(showACHItem('ctxcoll'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "CTX Collection (Corporate Trade Exchange)";
	    optn.value = "CTX"+str;
	    dropDownList.options.add(optn);
    }
    if(showACHItem('iatcoll'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "IAT Collection (International)";
	    optn.value = "IAT"+str;
	    dropDownList.options.add(optn);
    }
    if(showACHItem('ppdcoll'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "PPD Collection (Personal)";
	    optn.value = "PPD"+str;
	    dropDownList.options.add(optn);
    }
	 if(showACHItem('telcoll'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "TEL Collection (Telephone)";
	    optn.value = "TEL"+str;
	    dropDownList.options.add(optn);
    }
	 if(showACHItem('webcoll'))
    {
        var optn=document.createElement("OPTION");
	    optn.text = "WEB Collection (Internet)";
	    optn.value = "WEB"+str;
	    dropDownList.options.add(optn);
    }

}

//Function loads the Side Menu for Positive Pay pages
//based on the availability of the services
function SetSideMenuContentForPositivePay(selectedPage,id)
{
    var rc, rc1, rc2, rc3;
    rc = showMenuItem('positive');
   rc1 = showMenuItem('pospayissue');
   rc2 = showMenuItem('pospayexception');
   rc3 = showMenuItem('revpospay');
   var temp = '<li>';
   var temp1 = '<li class="leftContentListNavSelected">';
   var str = '';

   if (rc3 == '1' || (rc == '1' && rc2 == '1')) {
       if (selectedPage == 'exception') str += temp1; else str += temp;
       str += '<a href="../positive_pay/except.html">Positive pay exceptions manager<\/a><\/li>';
   }

   if (rc == '1' && rc1 == '1') {
       if(selectedPage == 'issue')str += temp1;else str += temp;
       str += '<a href="../positive_pay/entry.html">Positive pay issue entry<\/a><\/li>';
   }
   if (rc == '1' && rc1 == '1') {
       if (selectedPage == 'import') str += temp1; else str += temp;
       str += '<a href="../positive_pay/import.html">Positive pay issue file import<\/a><\/li>';
   }
   if (rc3 == '1' || (rc == '1' && rc2 == '1')){
       if (selectedPage == 'decision_import') str += temp1; else str += temp;
       str += '<a href="../positive_pay/decision_import.html">Positive pay decision file import<\/a><\/li>';
   }
   if (rc == '1' && rc1 == '1') {
      if (selectedPage == 'update') str += temp1; else str += temp;
	  str += '<a href="../positive_pay/update.html">Positive pay update issue<\/a><\/li>';
   }
   if (rc == '1' && rc1 == '1') {
      if(selectedPage == 'approval')str += temp1;else str += temp;
	  str += '<a href="../positive_pay/issue_approval.html">Positive pay issue approval<\/a><\/li>';
   }
   if (rc == '1' || rc3 == '1') {
      if(selectedPage == 'decision')str += temp1;else str += temp;
	   str += '<a href="../positive_pay/decision.html">Positive pay decisions report<\/a><\/li>';
   }
   if (rc == '1' ) {
      if(selectedPage == 'oustanding')str += temp1;else str += temp;
	  str += '<a href="../positive_pay/outstand.html">Positive pay outstanding issues report<\/a><\/li>';
   }
   if (rc == '1' ) {
      if(selectedPage == 'stale')str += temp1;else str += temp;
	  str += '<a href="../positive_pay/stale.html">Positive pay stale issues report<\/a><\/li>';
   }
   if (rc == '1' ) {
      if(selectedPage == 'status')str += temp1;else str += temp;
	  str += '<a href="../positive_pay/issue.html">Positive pay issue status report<\/a><\/li>';
   }
   if (rc3 == '1' || (rc == '1' && rc2 == '1')) {
      if (selectedPage == 'decision_approval') str += temp1; else str += temp;
	  str += '<a href="../positive_pay/decision_approval.html">Positive pay decision file approval<\/a><\/li>';
   }

   helpwriteContent(id,str)
}

//Function loads the Side Menu for Full Account Reconciliation pages
//based on the availability of the services
function SetSideMenuContentForFullAccountReconciliation(selectedPage,id)
{
    var str ='';
    var temp = '<li>';
    var temp1 = '<li class="leftContentListNavSelected">';

    if(selectedPage == 'entry')str += temp1;else str += temp;
    str += '<a href="..\/acct_recon\/entry.html">Account recon issue manual entry<\/a>';
	str += '<\/li>';
	if(selectedPage == 'import')str += temp1;else str += temp;
	str += '<a href="..\/acct_recon\/import.html">Account recon issue file import<\/a>';
	str += '<\/li>';
	if(selectedPage == 'update')str += temp1;else str += temp;
	str += '<a href="..\/acct_recon\/update.html">Account recon update issue<\/a>';
	str += '<\/li>';
	if(selectedPage == 'approval')str += temp1;else str += temp;
	str += '<a href="..\/acct_recon\/issue_approval.html">Account recon issue approval<\/a>';
	str += ' <\/li>';
	if(selectedPage == 'statement')str += temp1;else str += temp;
	str += '<a href="..\/acct_recon\/full_statement.html">Account recon statement report<\/a>';
	str += ' <\/li>';
	if(selectedPage == 'activity')str += temp1;else str += temp;
	str += '<a href="..\/acct_recon\/full_activity.html">Account recon activity report<\/a>';
	str += '<\/li>';
	helpwriteContent(id,str);
}

//Function loads the Side Menu for Full Account Reconciliation pages
//based on the availability of the services
function SetSideMenuContentForACHPositivePay(selectedPage,id)
{
    var str ='';
    var temp = '<li>';
    var temp1 = '<li class="leftContentListNavSelected">';

    if(selectedPage == 'manager')str += temp1;else str += temp;
    str += '<a href="..\/ach_positive_pay\/exception_manager.html">ACH positive pay exceptions manager<\/a>';
	str += '<\/li>';
	if(selectedPage == 'status')str += temp1;else str += temp;
	str += '<a href="..\/ach_positive_pay\/exceptions_status_criteria.html">ACH positive pay exceptions status<\/a>';
	str += '<\/li>';
	if(selectedPage == 'maintain')str += temp1;else str += temp;
	str += '<a href="..\/ach_positive_pay\/originator_company_maintainance.html">ACH originator company maintenance<\/a>';
	str += '<\/li>';
	helpwriteContent(id,str);
}
function SetSideMenuContentForImageSearch(selectedPage, id) {
    var str = '';
    var temp = '<li>';
    var temp1 = '<li class="leftContentListNavSelected">';

    if (selectedPage == 'criteria') str += temp1; else str += temp;
    str += '<a href="..\/image_search\/image_search_criteria.html">Image Search Criteria<\/a>';
    str += '<\/li>';
    if (selectedPage == 'archive_request') str += temp1; else str += temp;
    str += '<a href="..\/image_search\/arch_request.html">Image and Archive Requests<\/a>';
    str += '<\/li>';


    helpwriteContent(id, str);
}

//This function will read from record6 of the modules.txt file
//the services that were selected to be present in the demo for Common Entry System.
//The values are stored in the var commonEntryServices, defined in modules_....html
function getCommonEntryServices()
{
	var current = eval("record6");

	//iterate through the data from the text file and store into an array
	for(var i=0; i < record6.length; i++){
		commonEntryServices[i] = current[i];
	}
}//end getCommonEntryServices

function showCommonEntryService(id)
{
	var check = false;
	getCommonEntryServices();
	for(var i=0; i < commonEntryServices.length; i++){
		if (commonEntryServices[i] == id){
	   		check = true;
	   		i = commonEntryServices.length;
		}//if
	}//for
	return check;
}//end showCommonEntryService

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the header for table of services for Service User IDs
//This function calls the showMenuItem function
//to determine whether the Common Entry Section need to be displayed or not
function writeServiceUserId(id,content)
{
    var rc,rc1;
    rc = showMenuItem('commonentry');
    rc1 = showCommonEntryService('externalservices');
    var str='';

    if(rc == '1' && rc1)
    {
        str+='<table cellspacing="4" cellpadding="0" width="90%"><tr>';
        str+='<td class="subheader" width="300" valign="bottom">Service User IDs<\/td>';
        str+='<\/tr><\/table>';
        if(content =='commonentry_copy' || content =='commonentry_delete')
        {
        str+='';
        }
        else
        {
        str+='<div style="padding:0px 0px 0px 0px;"><hr align="left" width="90%" \/><\/div>';
        str+='<table cellspacing="8" cellpadding="0" width="90%">';
        str+='<tr><td class="message_detail">';
        str+='To modify a user ID, click on a user ID.';
        if(showMenuItem('multipleapprovals')=='1')
        str+='If a user ID was not entered, one will be requested from the service when the final approval has been received.';
        str+='<br \/><br \/><\/td><\/tr><\/table>';
        }

        writeExternalServiceId(content);
        if(document.getElementById(content).innerHTML !='')
        {
        helpwriteContent(id,str);
        }
    }
}

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for User Administration
//This function calls the showMenuItem function
//to determine which services should be displayed
function writeExternalServiceId(id)
{
	var rc;
	var bkgrnd='0';
	var str='',str1='';

	rc = showMenuItem('capturerdc');
	if (rc == '1'){
		if (bkgrnd == '0'){
				str1+='<tr class="dgItem0" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '1';}
			else{
				str1+='<tr class="dgItem1" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>';bkgrnd = '0';}
				if(id=='commonentry_id')
				str1+='<td align="center"><a href="..\/administration\/external_user_id_edit.html" class="default">123UserId<\/a><\/td>';
				else
				if(id=='commonentry_copy' || id=='commonentry_delete')
				str1+='<td align="center">&nbsp;<\/td>';
				else
    		    str1+='<td class="inactive_link" align="center">123UserId<\/td>';
			str1+='<\/tr>';
		}
    if(str1 != '')
    {
    str+='<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
	str+='<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
	str+='style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
	str+='<td width="75%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
	str+='<\/td>';
	str+='<td align="center" width="25%">'
	if(id=='commonentry_copy' || id=='commonentry_delete')
	str+='&nbsp;';
	else
	str+='User ID';
	str+='<\/td><\/tr>';
	str+=str1;
	str+='<\/table><\/td><\/tr>';
	str+='<tr><td>&nbsp;<\/td><\/tr><\/table>';
	}
	helpwriteContent(id,str);

}//end writeExternalServiceId

//This function will read from record5 of the modules.txt file
//the account types that were selected to be present in the demo for Statements.
//The values are stored in the var statementAccounts, defined in modules_....html
function getStatementAccounts()
{
	var current = eval("record5");

	//iterate through the data from the text file and store into an array
	for(var i=0; i < record5.length; i++){
		statementAccounts[i] = current[i];
	}
}//end getStatementAccounts

function showStatementAccounts(id)
{
	var check = false;
	getStatementAccounts();
	for(var i=0; i < statementAccounts.length; i++){
		if (statementAccounts[i] == id){
	   		check = true;
	   		i = statementAccounts.length;
		}//if
	}//for
	return check;
}//end showStatementAccounts


function writeDeliveryOptions() {

    var current = eval("Statements_DeliveryOptions");
    var str = '<select>';
    //iterate through the data from the text file and store into an array
    for (var i = 0; i < Statements_DeliveryOptions.length; i++) {
        if (current[i] == 'Online')
            str += '<option selected="selected">' + current[i] + '<\/option>';
        else
            str += '<option>' + current[i] + '<\/option>';
    }
    str += '<\/select>';
    return str;
}


function WriteAccountsForStatements(id)
{
   var str1  = "";var bkgrnd = '0';var rc = false;
   var testChecking = false;var testSaving = false;var testLoan = false;var testAnalysis = false;

   testChecking = showStatementAccounts('checking');
   testAnalysis = showStatementAccounts('analysis');
   testLoan = showStatementAccounts('loan');
   testSaving = showStatementAccounts('saving');

   if(id == 'account_pref')
   {
    rc = true;
   }

   if(testAnalysis || testChecking || testLoan || testSaving)
   {
       str1+='<table class="dgGrid" cellspacing="0" cellpadding="4" border="0"';
       str1+='style="width:95%;border-collapse:collapse;">';
       str1+='<tr class="dgHeader" style="white-space:nowrap;">';
       if(!rc)
       str1+='<td width="5%">&nbsp;<\/td>';
       str1+='<td align="left" style="width:';
       if(rc)
       str1+='13';
       else
       str1+='20';
       str1+='%;"><span class="dgSortLink">';
       str1+='ABA';
       if(!rc)
       str1+='\/TRC';
       str1+='<\/span><\/td>';
       str1+='<td align="left" style="width:';
       if(rc)
       str1+='12';
       else
       str1+='15'
       str1+='%;" class="dgSortLink royal_grid_sorted">Account&nbsp;';
       str1+=' <\/td>';
       str1+='<td align="left" style="width:';
       if(rc)
       str1+='30';
       else
       str1+='40';
       str1+='%;"><span class="dgSortLink">Description<\/span> <\/td>';
       str1+='<td align="left" style="width:';
       if(rc)
       str1+='12';
       else
       str1+='15';
       str1+='%;"><span class="dgSortLink">';
       if(rc)
       str1+='Account';
       str1+='Type<\/span><\/td>';
       if(rc)
       {
       str1+='<td align="left" width="13%"><span class="dgSortLink">Document Type<\/span><\/td>';
       str1+='<td align="left"><span class="dgSortLink"><nobr>Delivery Preference<\/nobr><\/span><\/td>';
       }
       str1+='<\/tr>';

       if(testChecking)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">*4512<\/td>';
	     str1+='<td align="left">PRESTIGE PAYROLL ACCOUNT<\/td>';
	     str1+='<td>Checking<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio" checked="checked" id="checking"><\/td>';
	     str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">*4511<\/td>';
	     str1+='<td align="left">PRESTIGE OPERATING ACCOUNT<\/td>';
	     str1+='<td>Checking<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
       }

       if(testAnalysis && !rc)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     str1+='<td><input name="account_select" type="radio" id="analysis"><\/td>';
	     str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">*4511<\/td>';
	     str1+='<td align="left">PRESTIGE OPERATING ACCOUNT<\/td>';
	     str1+='<td>Analysis<\/td><\/tr>';
       }

       if(testSaving)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">*2470<\/td>';
	     str1+='<td align="left">PRESTIGE HEALTH ACCOUNT<\/td>';
	     str1+='<td>Savings<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
       }

       if(testLoan)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">770110000<\/td>';
	     str1+='<td align="left">*2013 - 00002<\/td>';
	     str1+='<td align="left">PRESTIGE LOAN 3<\/td>';
	     str1+='<td>Loan<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
       }

       if(testSaving)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">*0740<\/td>';
	     str1+='<td align="left">PRESTIGE HIGH YIELD<br> INVESTMENT FUND<\/td>';
	     str1+='<td>Savings<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
       }

       if(testLoan)
       {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">770110000<\/td>';
	     str1+='<td align="left">*0009 - 00001<\/td>';
	     str1+='<td align="left">PRESTIGE LOAN 2<\/td>';
	     str1+='<td>Loan<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     str1+='<\/tr>';
	     if(!rc)
	     {
	     if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
	     if(!rc)
	     str1+='<td><input name="account_select" type="radio"><\/td>';
	     str1+='<td align="left">770110000<\/td>';
	     str1+='<td align="left">*0006 - 12345<\/td>';
	     str1+='<td align="left">PRESTIGE LOAN 1<\/td>';
	     str1+='<td>Loan<\/td>';
	     if(rc)
	     {
	     str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
	     }
	     }
	     str1+='<\/tr>';
       }

       if(testAnalysis && rc)
       {
         if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
         str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">64 - *4575<\/td>';
	     str1+='<td align="left">Marketing Activities<\/td>';
	     str1+='<td>Checking<\/td>';
         str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
         if (bkgrnd == '0')
	     {str1+='<tr class="dgItem0" style="white-space:nowrap;">';bkgrnd = '1';}
	     else
	     {str1+='<tr class="dgItem1" style="white-space:nowrap;">';bkgrnd = '0';}
         str1+='<td align="left">081203790<\/td>';
	     str1+='<td align="left">406 - *8345<\/td>';
	     str1+='<td align="left">Sales Activities<\/td>';
	     str1+='<td>Checking<\/td>';
         str1+='<td align="left">Statement<\/td>';
	     str1+='<td>';
	     str1 += writeDeliveryOptions();
         str1+='<\/td>';
       }


      str1+='<\/table>';
  }

  helpwriteContent(id,str1);
}



//Function to change the class name of the grid dynamically
//Always call this function onload atlast after calling all other functions
//If there are any rows which will be removed or will be invisible by any action call this fuction at last in those functions also
function changeClassName(gridname) {

	//document.getElementById('mynew').className= 'dgItem0';
	var grid=document.getElementById(gridname);

var cname='dgItem0';

	for(var i=1;i<grid.rows.length; i++)
	{

	    if (grid.rows[i].style.display != 'none') {

				grid.rows[i].className = cname;

				if(cname=='dgItem0')
				cname='dgItem1';
				else
				cname='dgItem0';
				//var cells=grid.rows[i].getElementsByTagName("TD");
    			//	for (var j=0; j<cells.length; j++)
				//	{
    			//	  cells[j].setAttribute('className','dgGrid td');
				//	}
		}

	}

}
//function changeClassNameWidget(gridname)
//{
//	//document.getElementById('mynew').className= 'dgItem0';
//	var grid=document.getElementById(gridname);
//
//var cname='dgItem0widget';
//	for(var i=1;i<grid.rows.length; i++)
//	{
//
//	  if(grid.rows[i].getAttribute('style').display!='none')
//		{
//				grid.rows[i].setAttribute('className',cname);
//
//				if(cname=='dgItem0widget')
//				cname='dgItem1widget';
//				else
//				cname='dgItem0widget';
//				//var cells=grid.rows[i].getElementsByTagName("TD");
//    			//	for (var j=0; j<cells.length; j++)
//				//	{
//    			//	  cells[j].setAttribute('className','dgGrid td');
//				//	}
//		}
//
//	}
//}

//This function performs the same fuctionality as that of the above but we can provide the starting rownumber to this function from where we need to start the adding of class name
function changeClassName1(gridname,startingrow) {

	//document.getElementById('mynew').className= 'dgItem0';
	var grid=document.getElementById(gridname);

var cname='dgItem0';
	for(var i=startingrow;i<grid.rows.length; i++)
	{

	    if (grid.rows[i].style.display != 'none') {

				grid.rows[i].className = cname;

				if(cname=='dgItem0')
				cname='dgItem1';
				else
				cname='dgItem0';
				//var cells=grid.rows[i].getElementsByTagName("TD");
    			//	for (var j=0; j<cells.length; j++)
				//	{
    			//	  cells[j].setAttribute('className','dgGrid td');
				//	}
		}

	}
}

function changeClassNameWidget1(gridname,startingrow)
{
	//document.getElementById('mynew').className= 'dgItem0';
	var grid=document.getElementById(gridname);

var cname='dgItem0widget';
	for(var i=startingrow;i<grid.rows.length; i++)
	{

	    if (grid.rows[i].style.display != 'none')
		{
				grid.rows[i].className = cname;

				if(cname=='dgItem0widget')
				cname='dgItem1widget';
				else
				cname='dgItem0widget';
				//var cells=grid.rows[i].getElementsByTagName("TD");
    			//	for (var j=0; j<cells.length; j++)
				//	{
    			//	  cells[j].setAttribute('className','dgGrid td');
				//	}
		}

	}
}


function accountactivity_outputoptions(msid,quickid,bookid)
{
	var rc = showMenuItem('msmoney');
	var rc1 = showMenuItem('quickbooks');
	var rc2 = showMenuItem('quicken');

	if(rc != '1')
	{

		if(msid != '' && msid != null)
		{
			document.getElementById(msid).style.display = 'none';
		}

	}


	if(rc1 != '1')
	{

		if(quickid != '' && quickid != null)
		{
			document.getElementById(quickid).style.display = 'none';
		}

	}


	if(rc2 != '1')
	{

		if(bookid != '' && bookid != null)
		{
			document.getElementById(bookid).style.display = 'none';
		}

	}



}


function CheckServiceRecords()
{
	if(showACHItem('collection') != '1')
	{

		document.getElementById('ccdrow').style.display = 'none';
	}
	if(showACHItem('ppdcoll') != '1')
	{
		document.getElementById('ppdrow').style.display = 'none';
	}
	if(showACHItem('webcoll') != '1')
	{
		document.getElementById('webrow').style.display = 'none';
	}
	if(showACHItem('telcoll') != '1')
	{
		document.getElementById('telrow').style.display = 'none';
	}
}


// Pagination for Edit Large Templates
	function pagination(page)
		{
			document.getElementById('add_row').className = 'inactive_link';
			document.getElementById('add_row').style.cursor = 'text';

			document.getElementById('prev').style.textDecoration = 'underline';
			document.getElementById('prev').style.cursor = 'hand';
			document.getElementById('next').style.textDecoration = 'underline';
			document.getElementById('next').style.cursor = 'hand';
			document.getElementById('prev').onclick = '';
			document.getElementById('next').onclick = '';

			document.getElementById('bottom_prev').style.textDecoration = 'underline';
			document.getElementById('bottom_prev').style.cursor = 'hand';
			document.getElementById('bottom_next').style.textDecoration = 'underline';
			document.getElementById('bottom_next').style.cursor = 'hand';
			document.getElementById('bottom_prev').onclick = '';
			document.getElementById('bottom_next').onclick = '';

			document.getElementById('pg1').style.textDecoration = 'underline';
			document.getElementById('pg2').style.textDecoration = 'underline';
			document.getElementById('pg3').style.textDecoration = 'underline';
			document.getElementById('pg4').style.textDecoration = 'underline';
			document.getElementById('pg5').style.textDecoration = 'underline';

			document.getElementById('bottom_pg1').style.textDecoration = 'underline';
			document.getElementById('bottom_pg2').style.textDecoration = 'underline';
			document.getElementById('bottom_pg3').style.textDecoration = 'underline';
			document.getElementById('bottom_pg4').style.textDecoration = 'underline';
			document.getElementById('bottom_pg5').style.textDecoration = 'underline';
		if(page == 1)
		{
			document.getElementById('pg1').className = 'inactive_link';
			document.getElementById('pg1').style.textDecoration = 'none';
			document.getElementById('pg2').className = 'default';
			document.getElementById('pg3').className = 'default';
			document.getElementById('pg4').className = 'default';
			document.getElementById('pg5').className = 'default';
			document.getElementById('prev').className = 'inactive_link';
			document.getElementById('prev').style.textDecoration = 'none';
			document.getElementById('next').className = 'default';
			document.getElementById('prev').style.cursor = 'text';
			document.getElementById('add_row').className = 'default';
			document.getElementById('add_row').style.cursor = 'hand';

			var el=document.getElementById('next');
			el.onclick = new Function("Setpagination(2)");

			document.getElementById('bottom_pg1').className = 'inactive_link';
			document.getElementById('bottom_pg1').style.textDecoration = 'none';
			document.getElementById('bottom_pg2').className = 'default';
			document.getElementById('bottom_pg3').className = 'default';
			document.getElementById('bottom_pg4').className = 'default';
			document.getElementById('bottom_pg5').className = 'default';
			document.getElementById('bottom_prev').className = 'inactive_link';
			document.getElementById('bottom_prev').style.textDecoration = 'none';
			document.getElementById('bottom_next').className = 'default';
			document.getElementById('bottom_prev').style.cursor = 'text';

			var el=document.getElementById('bottom_next');
			el.onclick = new Function("Setpagination(2)");

			document.getElementById('startrow').innerHTML = '1';
			document.getElementById('endrow').innerHTML = '20';

			document.getElementById('page1').style.display = '';
			document.getElementById('page2').style.display = 'none';
			document.getElementById('page3').style.display = 'none';
			document.getElementById('page4').style.display = 'none';
			document.getElementById('page5').style.display = 'none';

		}
		if(page == 2)
		{
			document.getElementById('pg2').className = 'inactive_link';
			document.getElementById('pg2').style.textDecoration = 'none';
			document.getElementById('pg1').className = 'default';
			document.getElementById('pg3').className = 'default';
			document.getElementById('pg4').className = 'default';
			document.getElementById('pg5').className = 'default';
			document.getElementById('prev').className = 'default';
			document.getElementById('prev').onclick = "pagination('1')";
			document.getElementById('next').className = 'default';
			document.getElementById('next').onclick = "pagination('3')";


			var el = document.getElementById('next');
			el.onclick = new Function("Setpagination(3)");
			var el = document.getElementById('prev');
			el.onclick = new Function("Setpagination(1)");



			document.getElementById('bottom_pg2').className = 'inactive_link';
			document.getElementById('bottom_pg2').style.textDecoration = 'none';
			document.getElementById('bottom_pg1').className = 'default';
			document.getElementById('bottom_pg3').className = 'default';
			document.getElementById('bottom_pg4').className = 'default';
			document.getElementById('bottom_pg5').className = 'default';
			document.getElementById('bottom_prev').className = 'default';
			document.getElementById('bottom_prev').onclick = "pagination('1')";
			document.getElementById('bottom_next').className = 'default';
			document.getElementById('bottom_next').onclick = "pagination('3')";
			var el = document.getElementById('bottom_next');
			el.onclick = new Function("Setpagination(3)");
			var el = document.getElementById('bottom_prev');
			el.onclick = new Function("Setpagination(1)");

			document.getElementById('startrow').innerHTML = '21';
			document.getElementById('endrow').innerHTML = '40';


			document.getElementById('page2').style.display = '';
			document.getElementById('page1').style.display = 'none';
			document.getElementById('page3').style.display = 'none';
			document.getElementById('page4').style.display = 'none';
			document.getElementById('page5').style.display = 'none';

		}
		if(page == 3)
		{
			document.getElementById('pg3').className = 'inactive_link';
			document.getElementById('pg3').style.textDecoration = 'none';
			document.getElementById('pg1').className = 'default';
			document.getElementById('pg2').className = 'default';
			document.getElementById('pg4').className = 'default';
			document.getElementById('pg5').className = 'default';
			document.getElementById('prev').className = 'default';
			document.getElementById('prev').onclick = "pagination('2')";
			document.getElementById('next').className = 'default';
			document.getElementById('next').onclick = "pagination('4')";

			var el = document.getElementById('next');
			el.onclick = new Function("Setpagination(4)");
			var el = document.getElementById('prev');
			el.onclick = new Function("Setpagination(2)");

			document.getElementById('bottom_pg3').className = 'inactive_link';
			document.getElementById('bottom_pg3').style.textDecoration = 'none';
			document.getElementById('bottom_pg1').className = 'default';
			document.getElementById('bottom_pg2').className = 'default';
			document.getElementById('bottom_pg4').className = 'default';
			document.getElementById('bottom_pg5').className = 'default';
			document.getElementById('bottom_prev').className = 'default';
			document.getElementById('bottom_prev').onclick = "pagination('2')";
			document.getElementById('bottom_next').className = 'default';
			document.getElementById('bottom_next').onclick = "pagination('4')";

			var el = document.getElementById('bottom_next');
			el.onclick = new Function("Setpagination(4)");
			var el = document.getElementById('bottom_prev');
			el.onclick = new Function("Setpagination(2)");

			document.getElementById('startrow').innerHTML = '41';
			document.getElementById('endrow').innerHTML = '60';

			document.getElementById('page3').style.display = '';
			document.getElementById('page1').style.display = 'none';
			document.getElementById('page2').style.display = 'none';
			document.getElementById('page4').style.display = 'none';
			document.getElementById('page5').style.display = 'none';

		}
		if(page == 4)
		{
			document.getElementById('pg4').className = 'inactive_link';
			document.getElementById('pg4').style.textDecoration = 'none';
			document.getElementById('pg1').className = 'default';
			document.getElementById('pg2').className = 'default';
			document.getElementById('pg3').className = 'default';
			document.getElementById('pg5').className = 'default';
			document.getElementById('prev').className = 'default';
			document.getElementById('prev').onclick = "pagination('3')";
			document.getElementById('next').className = 'default';
			document.getElementById('next').onclick = "pagination('5')";

			var el = document.getElementById('next');
			el.onclick = new Function("Setpagination(5)");
			var el = document.getElementById('prev');
			el.onclick = new Function("Setpagination(3)");

			document.getElementById('bottom_pg4').className = 'inactive_link';
			document.getElementById('bottom_pg4').style.textDecoration = 'none';
			document.getElementById('bottom_pg1').className = 'default';
			document.getElementById('bottom_pg2').className = 'default';
			document.getElementById('bottom_pg3').className = 'default';
			document.getElementById('bottom_pg5').className = 'default';
			document.getElementById('bottom_prev').className = 'default';
			document.getElementById('bottom_prev').onclick = "pagination('3')";
			document.getElementById('bottom_next').className = 'default';
			document.getElementById('bottom_next').onclick = "pagination('5')";

			var el = document.getElementById('bottom_next');
			el.onclick = new Function("Setpagination(5)");
			var el = document.getElementById('bottom_prev');
			el.onclick = new Function("Setpagination(3)");


			document.getElementById('startrow').innerHTML = '61';
			document.getElementById('endrow').innerHTML = '80';

			document.getElementById('page4').style.display = '';
			document.getElementById('page1').style.display = 'none';
			document.getElementById('page2').style.display = 'none';
			document.getElementById('page3').style.display = 'none';
			document.getElementById('page5').style.display = 'none';

		}
		if(page == 5)
		{
			document.getElementById('pg5').className = 'inactive_link';
			document.getElementById('pg5').style.textDecoration = 'none';
			document.getElementById('pg1').className = 'default';
			document.getElementById('pg2').className = 'default';
			document.getElementById('pg3').className = 'default';
			document.getElementById('pg4').className = 'default';
			document.getElementById('prev').className = 'default';
			document.getElementById('prev').onclick = "pagination('4')";
			document.getElementById('next').className = 'inactive_link';
			document.getElementById('next').style.textDecoration = 'none';
			document.getElementById('next').style.cursor = 'text';

			var el = document.getElementById('prev');
			el.onclick = new Function("Setpagination(4)");

			document.getElementById('bottom_pg5').className = 'inactive_link';
			document.getElementById('bottom_pg5').style.textDecoration = 'none';
			document.getElementById('bottom_pg1').className = 'default';
			document.getElementById('bottom_pg2').className = 'default';
			document.getElementById('bottom_pg3').className = 'default';
			document.getElementById('bottom_pg4').className = 'default';
			document.getElementById('bottom_prev').className = 'default';
			document.getElementById('bottom_prev').onclick = "pagination('4')";
			document.getElementById('bottom_next').className = 'inactive_link';
			document.getElementById('bottom_next').style.textDecoration = 'none';
			document.getElementById('bottom_next').style.cursor = 'text';

			var el = document.getElementById('bottom_prev');
			el.onclick = new Function("Setpagination(4)");


			document.getElementById('startrow').innerHTML = '81';
			document.getElementById('endrow').innerHTML = '95';

			document.getElementById('page5').style.display = '';
			document.getElementById('page1').style.display = 'none';
			document.getElementById('page2').style.display = 'none';
			document.getElementById('page3').style.display = 'none';
			document.getElementById('page4').style.display = 'none';

		}
		}

		function Setpagination(page) {
        var newpage = 'pg' + page;
        document.getElementById(newpage).click();

		}


		function report_download()
		{
		    var check;

		    check = get_reportdownload('edi_report');

		    if (check == true) {
		        document.getElementById("edi").style.display = '';
		    }
			else
			    document.getElementById("edi").style.display = 'none';

			check = get_reportdownload('paid_file');
			if (check == true) {
			    document.getElementById("paid_file").style.display = '';
			}
			else
			    document.getElementById("paid_file").style.display = 'none';

			check = get_reportdownload('intpay997');
			if (check == true) {
			    if (document.getElementById('intpay997') != null)
			    document.getElementById("intpay997").style.display = '';
			}
			else
			    document.getElementById("intpay997").style.display = 'none';

			check = get_reportdownload('intpay824');
			if (check == true) {
			    if (document.getElementById('intpay824') != null)
			    document.getElementById("intpay824").style.display = '';
			}
			else
			    document.getElementById("intpay824").style.display = 'none';

			check = get_reportdownload('deposit_stmt');
			if (check == true) {
			    document.getElementById("dep_stmt").style.display = '';
			}
			else
			    document.getElementById("dep_stmt").style.display = 'none';

			check = get_reportdownload('corporate_report');
			if (check == true) {
			    document.getElementById("corporate_report").style.display = '';
			}
			else
			    document.getElementById("corporate_report").style.display = 'none';

			check = get_reportdownload('return_items_report');
			if (check == true) {
			    document.getElementById("return_items").style.display = '';
			}
			else
			    document.getElementById("return_items").style.display = 'none';
        }

        function get_reportdownload(name)
         {
            var check = false;
              var check_report = eval("Report_download ");

              for (var i = 0; i < check_report.length; i++)
                 {

                     if (check_report[i] == name)
                     {
                          check = true;
                     }


                  }

                  return check;



    }

function validateotw(){
					var aba = jQuery.trim($('#aba').val());
					var rac = jQuery.trim($('#rac').val());
					var bname = jQuery.trim($('#bname').val());
					var rname = jQuery.trim($('#rname').val());
					var ra1 = jQuery.trim($('#ra1').val());
					var ra2 = jQuery.trim($('#ra2').val());
					if(aba !="" || rac !="" || bname !="" ||  rname !="" ||  ra1 !="" ||  ra2 !="")
					{
						$('<tr><td class="frmerror" valign="bottom">To continue, please make the changes marked.</td></tr><tr><td>&nbsp;</td></tr>').insertBefore('#msgdetail');

					}

					if(aba=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Financial organization routing number is a required field.</td></tr>').insertBefore('#aba1');

					}
					if(rac=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient account is a required field.</td></tr>').insertBefore('#rac1');

					}
					if(bname=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Bank name is a required field.</td></tr>').insertBefore('#bname1');

					}
					if(rname=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Name is a required field.</td></tr>').insertBefore('#rname1');

					}
					if(ra1=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 1 is a required field.</td></tr>').insertBefore('#ra11');

					}
					if(ra2=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 2 is a required field.</td></tr>').insertBefore('#ra21');

					}

					if(aba !="" && rac !="" && bname !="" &&  rname !="" &&  ra1 !="" &&  ra2!="")
					{
						location.href=toLocation;
					}
			}



			function validateotw1(){
					var aba = jQuery.trim($('#aba').val());
					var rac = jQuery.trim($('#rac').val());
					var bname = jQuery.trim($('#bname').val());
					var rname = jQuery.trim($('#rname').val());
					var ra1 = jQuery.trim($('#ra1').val());
					var ra2 = jQuery.trim($('#ra2').val());
					if(aba !="" || rac !="" || bname !="" ||  rname !="" ||  ra1 !="" ||  ra2 !="")
					{
						$('<tr><td class="frmerror" valign="bottom">To continue, please make the changes marked.</td></tr><tr><td>&nbsp;</td></tr>').insertBefore('#msgdetail');

					}

					if(aba=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Financial organization routing number is a required field.</td></tr>').insertBefore('#aba1');

					}
					if(rac=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient account is a required field.</td></tr>').insertBefore('#rac1');

					}
					if(bname=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Bank name is a required field.</td></tr>').insertBefore('#bname1');

					}
					if(rname=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Name is a required field.</td></tr>').insertBefore('#rname1');

					}
					if(ra1=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 1 is a required field.</td></tr>').insertBefore('#ra11');

					}
					if(ra2=="")
					{
						$('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 2 is a required field.</td></tr>').insertBefore('#ra21');

					}

					if(aba !="" && rac !="" && bname !="" &&  rname !="" &&  ra1 !="" &&  ra2!="")
					{
						location.href=toLocation1;
					}
			}


function checkaccountbalanceservices()
{
	var midreporting = showMenuItem('midreporting');
	var largereporting = showMenuItem('largereporting');
	var investmentaccount = showMenuItem('investmentaccount');
	var cdaccount = showMenuItem('cdaccount');
	var loan = showMenuItem('loan');
	var cardrpt = showMenuItem('cardrpt');
	var cardpay = showMenuItem('cardpay');

	if((midreporting != '1') && (largereporting != '1') && (investmentaccount != '1') && (cdaccount != '1')&& (loan != '1')  && (cardrpt != '1') && (cardpay != '1'))
	{
		document.getElementById('drag_balances').style.display='none';
	}
}
