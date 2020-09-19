// JavaScript Document

//This function will read from record1 of the modules.txt file
//the menu options that were selected to be present in the demo.
//The values are stored in the var mainMenu, defined in modules_....html
function getMenu() {

    var current = eval("record1");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record1.length; i++) {
        mainMenu[i] = current[i];

    }
} //end getMenu

function showMenuItem(id) {
    var check = 0;

    for (var i = 0; i < mainMenu.length; i++) {
        if (mainMenu[i] == id) {
            check = 1;
            i = mainMenu.length;
        } //if
    } //for
    return check;
} //end showMenuItem

//This function will read from record2 of the modules.txt file
//the Loan options that were selected to be present in the demo.
//The values are stored in the var loanMenu, defined in modules_....html
function getLoanMenu() {

    var current = eval("record2");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record2.length; i++) {

        loanMenu[i] = current[i];

    }

} //end getLoanMenu

function showLoanItem(id) {
    var check = 0;

    for (var i = 0; i < loanMenu.length; i++) {
        if (loanMenu[i] == id) {
            check = 1;
            i = loanMenu.length;
        } //if
    } //for
    return check;
} //end showLoanItem

//This function will read from record3 of the modules.txt file
//the Wire options that were selected to be present in the demo.
//The values are stored in the var wireMenu, defined in modules_....html
function getWireMenu() {
    var current = eval("record3");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record3.length; i++) {
        wireMenu[i] = current[i];
    }
} //end getWireMenu

function showWireItem(id) {
    var check = 0;

    for (var i = 0; i < wireMenu.length; i++) {
        if (wireMenu[i] == id) {
            check = 1;
            i = wireMenu.length;
        } //if
    } //for
    return check;
} //end showWireItem

//This function will read from record4 of the modules.txt file
//the ACH options that were selected to be present in the demo.
//The values are stored in the var achMenu, defined in modules_....html
function getACHMenu() {
    var current = eval("record4");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record4.length; i++) {
        achMenu[i] = current[i];
    }
} //end getACHMenu

function showACHItem(id) {
    var check = 0;

    for (var i = 0; i < achMenu.length; i++) {
        if (achMenu[i] == id) {
            check = 1;
            i = achMenu.length;
        } //if
    } //for
    return check;
} //end showACHItem

function getReportDownloadMenu() {

    var current = eval("Report_download");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < Report_download.length; i++) {
        reportMenu[i] = current[i];
    }
}
function showReportDownloadItem(id) {

    var check = 0;

    for (var i = 0; i < reportMenu.length; i++) {

        if (reportMenu[i] == id) {
            check = 1;
            i = reportMenu.length;
        } //if
    } //for
    return check;
}
function getbackgroundimage() {
 var current = eval("Demo_background");
 if (current == 'yes')
     return true;
 else
     return;
}

//The below function is to be called onload of the pages which do not call Writemainmenu function onload of the body

function Demo_backgroundimage() {
    var background = false;
    background = getbackgroundimage();

    if (background == true) {
        document.body.style.background = 'url(../images/newimages/watermark-demo.gif)';

        if (document.getElementById('cell_content_content') != null) {
            document.getElementById('cell_content_content').id = 'cell_content_content_opacity';

        }
    }
}
//Start menu Section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//function writeMainMenu
//This function will write the <ul> tag in the menu tabs
//This function calls the get...Menu and showMenuItem functions
//to determine if the tab should be displayed
function writeMainMenu(id) {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var str = '';
    var testWireRpt = false; var testStmt = false; var testDown = false; var testCard = false;
    var testLoanRpt = false; var testRpt = false; var testAcct = false;
    var testExpr = false; var testBook = false; var testFunds = false; var testLoans = false;
    var testBpmnt = false; var testBpay = false; var testCred = false; var testACH = false;
    var testUp = false; var testWires = false; var testSchd = false;
    var testStop = false; var testPP = false; var testEnhPP = false; var testFAR = false;
    var testPAR = false; var testDAR = false; var testChk = false; var testRDC = false; var testImageSearch = false;
    var testMicro = false; var testIntegratedpayables = false; var testLarge = false; var testMid = false; var testAchPP = false;


    getMenu(); getLoanMenu(); getWireMenu(); getACHMenu();



        //Code for Background demo watermark
    Demo_backgroundimage();


    //Reporting Section #################################################################

    rc = showMenuItem('inwirerpt');
    if (rc == '1') {
        testWireRpt = true;

    }
    rc = showMenuItem('statements');
    if (rc == '1') {
        testStmt = true;

    }
    rc = showMenuItem('filedown');
    if (rc == '1') {
        testDown = true;

    }
    rc = showMenuItem('cardrpt');
    if (rc == '1') {
        testCard = true;

    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        testLoanRpt = true;

    }
    rc = showMenuItem('microreporting');
    if (rc == '1') {
        testMicro = true;

    }
    rc = showMenuItem('reporting');
    if (rc == '1') {
        testRpt = true;

    }
    rc = showMenuItem('account');
    if (rc == '1') {
        testAcct = true;

    }
    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;

    }
    rc = showMenuItem('midreporting');
    if (rc == '1') {
        testMid = true;

    }
    //End Reporting Section #################################################################

    //Transfers and Payments Section #################################################################
    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('repetitive');
        rc2 = showWireItem('freeform');
        if ((rc1 == '1') || (rc2 == '1')) {
            testWires = true;
            testSchd = true;
        } //end wire and at least one type
    }
    rc = showMenuItem('fileup');
    if (rc == '1') {
        testUp = true;
    }
    rc = showMenuItem('ach');

    if (rc == '1') {
        rc1 = showACHItem('payment');
        rc2 = showACHItem('federal');
        rc3 = showACHItem('state');
        rc4 = showACHItem('collection');
        rc5 = showACHItem('child');
        rc6 = showACHItem('stp820');
        rc7 = showACHItem('ppdcoll');
        rc8 = showACHItem('ccdpay');
        rc9 = showACHItem('iat');
        rc10 = showACHItem('iatcoll');
        rc11 = showACHItem('ctx');
        rc12 = showACHItem('ctxcoll');
        rc13 = showACHItem('webcoll');
        rc14 = showACHItem('telcoll');

        if ((rc == '1') && ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1') || (rc7 == '1') || (rc8 == '1') || (rc9 == '1') || (rc10 == '1') || (rc11 == '1') || (rc12 == '1') || (rc13 == '1') || (rc14 == '1'))) {
            testACH = true;
            testSchd = true;
        } //end both ACH and at least one type
    }
    rc = showMenuItem('cardpay');
    if (rc == '1') {
        testCred = true;
        testSchd = true;
    }
    rc = showMenuItem('billpay');
    if (rc == '1') {
        testBpay = true;
    }
    rc = showMenuItem('bill');
    if (rc == '1') {
        testBpmnt = true;
    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        rc1 = showLoanItem('payment');
        rc2 = showLoanItem('advance');
        if ((rc1 = '1') || (rc2 == '1')) {
            testLoans = true;
            testSchd = true;
        } //end both Loan and at least one type
    }
    rc = showMenuItem('funds');
    if (rc == '1') {
        testFunds = true;
    }
    rc = showMenuItem('book');
    if (rc == '1') {
        testBook = true;
        testSchd = true;
    }
    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
        testSchd = true;
    }
    rc = showMenuItem('integratedpayables')
    if (rc == '1') {
        testIntegratedpayables = true;
    }
    rc = showMenuItem('schedule');
    if (rc == '1') {
        testSchd = true;
    }

    //End Transfers and Payments Section #################################################################

    //Accout Services Section #################################################################
    rc = showMenuItem('chkreorder');
    if (rc == '1') {
        if ((testAcct) || (testRpt) || (testLarge) || (testMid)) {
            testChk = true;
        } //end Check Reorder requires one of the reporting modules
    }
    rc = showMenuItem('deprecon');
    if (rc == '1') {
        testDAR = true;
    }
    rc = showMenuItem('partrecon');
    if (rc == '1') {
        testPAR = true;
    }
    rc = showMenuItem('fullrecon');
    if (rc == '1') {
        testFAR = true;
    }
    rc = showMenuItem('positive');
    if (rc == '1') {
        testEnhPP = true;
    }

    rc = showMenuItem('achpospay');
    if (rc == '1') {
        testAchPP = true;
    }

    rc = showMenuItem('opositive');
    if (rc == '1') {
        testPP = true;
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
    }

    rc = showMenuItem('image');
    if (rc == '1') {
        testImageSearch = true;
    }

    //End Accout Services Section #################################################################

    //Administration Section #################################################################
    testSelfAdm = true;
    lastItem = "self_admin";

    testSeAdmin = (showMenuItem('admin') && (showMenuItem('positive') || showMenuItem('fullrecon')));

    rc = showMenuItem('admin');
    if (rc == '1') {
        testCoAdm = true;
        if (lastItem == '')
            lastItem = "admin";
    }
    testComm = true;
    if (lastItem == '')
        lastItem = "comm";

    //End Administration Section #################################################################

    str += '<div id="royal-nav">';
    str += '<ul class="sf-menu sf-beb sf-js-enabled sf-shadow">';

    // Check If  welcome Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if (id == 'welcome') {

        if (showMenuItem('dashboard') == "1")

            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_main_widgets.html">Welcome<\/a><\/li>';
        else
            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_main.html">Welcome<\/a><\/li>';


        if ((testLarge) || (testMid) || (testAcct) || (testRpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul">Reports<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeReportsSubContent(str);
            str += '<\/li>';
        }

        if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
				(testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul">Transfers and Payments<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeTransfersSubContent(str);
            str += '<\/li>';
        }
        if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (testRDC) || (testImageSearch)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul">Account Services<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAccountServicesSubContent(str);
            str += '<\/li>';
        }
        if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul">Administration<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAdministrationSubContent(str);
            str += '<\/li>';
        }

        helpwriteContent(id, str);
    }
    // End  welcome Tab  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // Check If  Reports Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if (id == 'menu_reports') {
        if (showMenuItem('dashboard') == "1")

            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main_widgets.html">Welcome<\/a><\/li>';
        else
            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main.html">Welcome<\/a><\/li>';

        if ((testLarge) || (testMid) || (testAcct) || (testRpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt)) {
            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul">Reports<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeReportsSubContent(str);
            str += '<\/li>';
        }

        if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
				(testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul">Transfers and Payments<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeTransfersSubContent(str);
            str += '<\/li>';
        }
        if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (testRDC) || (testImageSearch)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul">Account Services<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAccountServicesSubContent(str);
            str += '<\/li>';
        }
        if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul">Administration<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAdministrationSubContent(str);
            str += '<\/li>';
        }

        helpwriteContent(id, str);
    }
    // End  Reports Tab  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // Check If  Transfers and Payments Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if (id == 'menu_tranpay') {

        if (showMenuItem('dashboard') == "1")

            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main_widgets.html">Welcome<\/a><\/li>';
        else
            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main.html">Welcome<\/a><\/li>';

        if ((testLarge) || (testMid) || (testAcct) || (testRpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul">Reports<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeReportsSubContent(str);
            str += '<\/li>';
        }

        if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
				(testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul">Transfers and Payments<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeTransfersSubContent(str);
            str += '<\/li>';
        }
        if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (testRDC) || (testImageSearch)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul">Account Services<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAccountServicesSubContent(str);
            str += '<\/li>';
        }
        if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul">Administration<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAdministrationSubContent(str);
            str += '<\/li>';
        }
        helpwriteContent(id, str);
    }
    // End Transfers and Payments Tab  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // Check If  Account Services Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if (id == 'menu_acctserv') {
        if (showMenuItem('dashboard') == "1")

            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main_widgets.html">Welcome<\/a><\/li>';
        else
            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main.html">Welcome<\/a><\/li>';

        if ((testLarge) || (testMid) || (testAcct) || (testRpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul">Reports<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeReportsSubContent(str);
            str += '<\/li>';
        }

        if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
				(testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul">Transfers and Payments<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeTransfersSubContent(str);
            str += '<\/li>';
        }
        if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (testRDC) || (testImageSearch)) {

            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul">Account Services<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAccountServicesSubContent(str);
            str += '<\/li>';
        }
        if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul">Administration<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAdministrationSubContent(str);
            str += '<\/li>';
        }
        helpwriteContent(id, str);
    }
    // End Account Services Tab $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    // Check If  Administration Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    if (id == 'menu_admin') {
        if (showMenuItem('dashboard') == "1")

            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main_widgets.html">Welcome<\/a><\/li>';
        else
            str += '<li class="top-item-text"><a href="..\/modules_main\/modules_main.html">Welcome<\/a><\/li>';

        if ((testLarge) || (testMid) || (testAcct) || (testRpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul">Reports<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeReportsSubContent(str);
            str += '<\/li>';
        }

        if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
				(testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
            str += '<li class="top-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul">Transfers and Payments<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeTransfersSubContent(str);
            str += '<\/li>';
        }
        if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (testRDC) || (testImageSearch)) {

            str += '<li class="top-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul">Account Services<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAccountServicesSubContent(str);
            str += '<\/li>';
        }
        if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

            str += '<li class="top-item current-page-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul">Administration<span class="sf-sub-indicator"> »</span><\/a>';
            str += writeAdministrationSubContent(str);
            str += '<\/li>';
        }
        helpwriteContent(id, str);
    }
    // End Administration Tab  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



   //  $('#reports_ul').attr({ style: 'width: 55em' });



} //end writeMainMenu


// Functions to get the maximum number of columns in a menu tab div
function GetMaxColumns(max_columns, total_items, items_per_column) {
    if (max_columns <= 1 || (items_per_column > total_items))
        return 1;

    var calculatedColumns = parseInt(total_items / items_per_column);

    if (total_items > (items_per_column * calculatedColumns))
        calculatedColumns++;

    if (calculatedColumns < max_columns)
        return calculatedColumns;

    return max_columns;
}


// Writes  the  sub menu items for the Reports tab
function writeReportsSubContent() {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var str = '';
    var lastItem = '';
    var testWireRpt = false; var testinvRep = false; var testStmt = false; var testDown = false; var testCard = false;
    var testLoanRpt = false; var testRpt = false; var testAcct = false;
    var testMicro = false; var testLarge = false; var testMid = false;
    var count = 0; var servicecount = 0; var maxColumns = 3; var maxSubmenuitems = 10;
    var avgSubmenu = 0; var avgService = 0; var finalsubMenucount = 0; var addedItems = 0; var remainingItems = 0; var Submenucount = 0;
    var maxItemsadded = 0; var currentcolumn = 0;

    rc = showMenuItem('inwirerpt');
    if (rc == '1') {
        testWireRpt = true;
        Submenucount++;
        count += 2;
        if (lastItem == '')
            lastItem = "inwirerpt"
    }

    rc = showMenuItem('statements');
    if (rc == '1') {
        testStmt = true;
        Submenucount++;
        count += 2;

        if (lastItem == '')
            lastItem = "statements";
    }
    rc = showMenuItem('filedown');
    if (rc == '1') {
        testDown = true;
        Submenucount++;
        count += 2;

        if (lastItem == '')
            lastItem = "filedown";
    }
    rc = showMenuItem('cardrpt');
    if (rc == '1') {
        testCard = true;
        Submenucount++;
        count += 2;

        if (lastItem == '')
            lastItem = "cardrpt";
    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        testLoanRpt = true;
        Submenucount++;
        count += 3;

        if (lastItem == '')
            lastItem = "loan";
    }
    rc = showMenuItem('investmentreporting');
    if (rc == '1') {
        testinvRep = true;
        Submenucount++;
        count += 2;
        if (lastItem == '')
            lastItem = "investmentreporting";
    }
    rc = showMenuItem('reporting');
    if (rc == '1') {
        testRpt = true;
        Submenucount++;
        count += 4;

        if (lastItem == '')
            lastItem = "reporting";
    }
    rc = showMenuItem('account');
    if (rc == '1') {
        testAcct = true;
        Submenucount++;
        count += 7;

        if (lastItem == '')
            lastItem = "account";
    }
    rc = showMenuItem('microreporting');
    if (rc == '1') {

        testMicro = true;
        Submenucount++;
        count += 2;

        if (lastItem == '')
            lastItem = "microreporting";
    }
    rc = showMenuItem('midreporting');
    if (rc == 1) {
        testMid = true;
        Submenucount++;
        count += 3;

        if (lastItem == '')
            lastItem = "midreporting";
    }
    rc = showMenuItem('largereporting');
    if (rc == 1) {
        testLarge = true;
        Submenucount++;
        count += 6;

        if (lastItem == '')
            lastItem = "largereporting";
    }


    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);

    avgSubmenu = parseInt(count / maxColumns);


    var currentItemCount = 0;
    var currentCellIndex = 0;
    var maxItemPerColumn = 0;
    var totalProcessedCount = 0;
    var isSelected = false;

    str += '<ul class="sub-menu" id="reports_ul" >';

    str += '<li> <div style="background:url(../images/newimages/GradientImageDiv.png)  repeat-x scroll #c0c0c0;" class="royal-sub-menu-wrapper" id="reports_submenu_div">';
    str += '<table cellspacing="0" cellpadding="0" border="0" style="border-style: none; border-collapse: collapse;" >';
    str += '<tr><td valign="top" width="33%">';

    currentcolumn++;
    if (testLarge) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;

                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Deposit Account Reporting", "Account activity", "Account summary", "Combined report", "Cash position report", "Manage saved reports"];



        //            for (var menu in Elements_Array) {
        //                var str1 = Elements_Array[menu];

        //                if (str1.length > maxwidth)
        //                    maxwidth = str1.length;
        //            }

        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/large_reporting\/account_activity_search.html" >';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';" >' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/large_reporting\/account_summary_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/large_reporting\/combined.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/large_reporting\/cash_position_report_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/large_reporting\/manage_saved_reports.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';


        finalsubMenucount += 6;
        addedItems += 6;



    } //end testLarge
    if (testMid) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Deposit Reporting", "Account activity", "Account summary"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/mid_reporting\/account_activity_search.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/mid_reporting\/account_summary_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;



        //
    } //end testMid
    if (testMicro) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Account Reports", "Account activity"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/account_activity_search.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;



    } //end testMicro
    if (testAcct) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Deposit Account Reports", "Quick balance account report", "Summary report", "Account transaction search", "Transaction report", "Combined report", "Manage saved reports"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/quick.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/summary.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/tsearch.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/treport.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/combined.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';

        //count7
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/account_reporting\/manage_saved_reports.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';

        finalsubMenucount += 7;
        addedItems += 7;




    } //end testAcct
    if (testRpt) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Deposit Reports", "Quick balance report", "Transaction search", "Account detail report"];

        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/reporting\/quick.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/reporting\/transaction.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/reporting\/account.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        finalsubMenucount += 4;
        addedItems += 4;


    } //end testRpt

    if (testinvRep) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Investment Reports", "Investment activity report"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/investment_reporting\/investment_activity_report_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;

    } //end testinvRep
    if (testLoanRpt) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Loan Reports", "Loan summary report", "Loan activity report"];




        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/summary.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;



    } //end testLoanRpt
    if (testCard) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }


        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Credit Card Reports", "Credit card activity report"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/credit_card\/activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;



    } //end testCard
    if (testDown) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {

            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Downloadable Reports", "Download report"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/file_download\/download_file.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;




    } //end testDown
    if (testStmt) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Statements and Documents", "Statements and documents - account selection"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/statements\/statements.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;

        //
    } //end testStmt
    if (testWireRpt) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Wire Reports", "Incoming wire report"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/incoming.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;


    } //end testWireRpt



    str += '<\/td><\/tr><\/table><\/li><\/ul>';
    //
    //  var index = str.indexOf('id="reports_ul"');
    //   str = str.slice(0, index) + ' style="width:' +maxwidth +'em;" ' + str.slice(index);

    return str;

    //
}


// Writes  the  sub menu items for the Transfers and Payments tab
function writeTransfersSubContent() {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6, rc7, rc8, rc9, rc10, rc11, rc12, rc13, rc14, rc15;
    var str = '';
    var lastItem = '';
    var testIntPay = false;
    var testExpr = false; var testBook = false; var testFunds = false; var testLoans = false;
    var testBpmnt = false; var testBpay = false; var testCred = false; var testACH = false;
    var testUp = false; var testWires = false; var testSchd = false; testACHCollect = false; testACHSend = false; testACHFile = false;
    var count = 0; var servicecount = 0; var maxColumns = 3; var maxSubmenuitems = 10;
    var avgSubmenu = 0; var avgService = 0; var finalsubMenucount = 0; var addedItems = 0; var remainingItems = 0; var Submenucount = 0;
    var maxItemsadded = 0; var currentcolumn = 0;



    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('repetitive');
        rc2 = showWireItem('freeform');
        if ((rc1 == '1') || (rc2 == '1')) {
            testWires = true;
            Submenucount++;
            count += 5;
            if (rc1 == '1')
                count++;
            if (rc2 == '1')
                count++;

            if (lastItem == '')
                lastItem = "wiremain";
        } //end wire and at least one type
    }

    rc = showMenuItem('fileup');
    if (rc == '1') {
        testUp = true;
        Submenucount++;
        count += 5;
        if (lastItem == '')
            lastItem = "fileup";
    }

    rc = showMenuItem('integratedpayables')
    if (rc == '1') {
        testIntPay = true;
        Submenucount++;
        count += 5;
        if (lastItem == '')
            lastItem = "integratedpayables";
    }

    rc = showMenuItem('ach');
    if (rc == '1') {

        rc1 = showACHItem('payment');
        rc2 = showACHItem('federal');
        rc3 = showACHItem('state');
        rc4 = showACHItem('collection');
        rc5 = showACHItem('child');
        rc6 = showACHItem('stp820');
        rc7 = showACHItem('ppdcoll');
        rc8 = showACHItem('ccdpay');
        rc9 = showACHItem('iat');
        rc10 = showACHItem('iatcoll');
        rc11 = showACHItem('ctx');
        rc12 = showACHItem('ctxcoll');
        rc13 = showACHItem('webcoll');
        rc14 = showACHItem('telcoll');
        rc15 = showACHItem('upload');
        if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1') || (rc7 == '1') || (rc8 == '1') || (rc9 == '1') || (rc10 == '1') || (rc11 == '1') || (rc12 == '1') || (rc13 == '1') || (rc14 == '1') || (rc15 == '1')) {
            testACH = true;
            Submenucount++;
            count += 1;
            if (lastItem == '')
                lastItem = "ach";
        } //end both ACH and at least one type
        if ((rc4 == '1') || (rc7 == '1') || (rc10 == '1') || (r12 == '1') || (rc13 == '1') || (rc14 == '1')) {
            testACHCollect = true;
            count += 1;
        }
        if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc5 == '1') || (rc6 == '1') || (rc8 == '1') || (rc9 == '1') || (rc11 == '1')) {
            testACHSend = true;
            count += 1;
        }
        if (testACHCollect || testACHSend)
            count += 3;

        //below is to check if upload service is there in the record4
        if (rc15 == '1') {
            testACHFile = true;
            count += 4;
        }
    }

    rc = showMenuItem('cardpay');
    if (rc == '1') {
        testCred = true;
        Submenucount++;
        count += 4;
        if (lastItem == '')
            lastItem = "cardpay";
    }
    rc = showMenuItem('billpay');
    if (rc == '1') {
        testBpay = true;
        Submenucount++;
        count += 2;
        if (lastItem == '')
            lastItem = "billpay";
    }
    rc = showMenuItem('bill');
    if (rc == '1') {
        testBpmnt = true;
        Submenucount++;
        count += 8;
        if (lastItem == '')
            lastItem = "bill";
    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        rc1 = showLoanItem('payment');
        rc2 = showLoanItem('advance');
        if ((rc1 == '1') || (rc2 == '1')) {
            testLoans = true;
            Submenucount++;
            count += 3;
            if (rc1 == '1')
                count++;
            if (rc2 == '1')
                count++;
            if (lastItem == '')
                lastItem = "loan";
        } //end both Loan and at least one type
    }
    rc = showMenuItem('funds');
    if (rc == '1') {
        testFunds = true;
        Submenucount++;
        count += 4;
        if (lastItem == '')
            lastItem = "funds";
    }
    rc = showMenuItem('book');
    if (rc == '1') {
        testBook = true;
        Submenucount++;
        count += 5;
        if (lastItem == '')
            lastItem = "book";
    }
    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
        Submenucount++;
        count += 4;
        if (lastItem == '')
            lastItem = "express";
    }
    rc = showMenuItem('schedule');
    if (rc == '1') {
        testSchd = true;
        Submenucount++;
        count += 2;
        if (lastItem == '')
            lastItem = "schedule";
    }



    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);

    avgSubmenu = parseInt(count / maxColumns);


    var currentItemCount = 0;
    var currentCellIndex = 0;
    var maxItemPerColumn = 0;
    var totalProcessedCount = 0;
    var isSelected = false;
    //style="width:' + divwidth + '"
    str += '<ul class="sub-menu" id="transfers_ul" >';

    str += '<li> <div style="background:url(../images/newimages/GradientImageDiv.png)  repeat-x scroll #c0c0c0;" class="royal-sub-menu-wrapper" id="transfers_submenu_div">';
    str += '<table cellspacing="0" cellpadding="0" border="0" style="border-style: none; border-collapse: collapse;" >';
    str += '<tr><td valign="top" width="33%">';

    currentcolumn++;
    if (testSchd) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Scheduled Requests", "Next scheduled requests"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/scheduled_requests\/next_scheduled_requests.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;



    }
    if (testExpr) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Express Transfer", "Express transfer request", "Express transfer transmit", "Express transfer history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/express_transfer\/express_entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/express_transfer\/express_transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/express_transfer\/express_history_select.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        finalsubMenucount += 4;
        addedItems += 4;



    }

    if (testBook) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Book Transfer", "Book transfer", "Book transfer transmit", "Book transfer template approval", "Book transfer history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/book_transfer\/entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/book_transfer\/transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/book_transfer\/template_approval.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/book_transfer\/history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        finalsubMenucount += 5;
        addedItems += 5;



    }

    if (testFunds) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Funds Transfer", "Funds transfer request", "Funds transfer transmit", "Funds transfer history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/funds_transfer\/funds_entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/funds_transfer\/funds_transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/funds_transfer\/funds_history_select.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';



        finalsubMenucount += 4;
        addedItems += 4;



    }

    if (testLoans) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Loans", "Loan payment request", "Loan advance request", "Transmit loan", "Loan history report"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        if (showLoanItem('payment')) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/payment.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }
        //count3
        if (showLoanItem('advance')) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/advance.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }
        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/loan\/history.html">';
        str += '<span class="function-item-anchor">' + Elements_Array[4] + '</span></a></div>';


        //the count depends on services so only 3 common are added here
        finalsubMenucount += 3;
        addedItems += 3;



    }

    if (testBpmnt) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Bill Payment", "Add bill payment", "Change bill payment", "Delete bill payment", "Bill payment history", "Add bill payee", "Change bill payee", "Delete bill payee"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2

        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment\/add_payment.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';


        //count 3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment\/change_payment.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';


        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment\/delete_payment.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment\/payment_history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6

        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment_setup\/add_payee.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';

        //count7
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment_setup\/change_payee.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';

        //count8
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/bill_payment_setup\/delete_payee.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[7] + '</span></a></div>';



        finalsubMenucount += 8;
        addedItems += 8;



    }

    if (testBpay) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Bill Pay", "Billing center"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        var newstr = "javascript:openBillPay('../billpay/billpay.html')";
        str += '<div class="royal-sub-menu-item"><a target="_self" href="' + newstr + ' ">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;



    }


    if (testCred) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Credit Cards", "Credit card payment entry", "Credit card payment transmit", "Credit card payment history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/credit_card\/entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/credit_card\/transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/credit_card\/history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';



        finalsubMenucount += 4;
        addedItems += 4;



    }

    if (testACH) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["ACH", "Send money", "Collect money", "ACH transmit", "ACH template approval", "ACH history", "ACH file upload", "ACH file upload transmit", "ACH file upload status", "ACH file upload history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';
        finalsubMenucount++;
        addedItems++;

        //count2
        if (testACHSend) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/send.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }
        //count3
        if (testACHCollect) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/collect.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }
        //count4, count5 and count 6
        if (testACHCollect || testACHSend) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/transmit.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';


            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/template_approval.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/history.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';


            finalsubMenucount += 3;
            addedItems += 3;
        }

        //count7, count8, count9  and count10
        if (testACHFile) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/upload.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';


            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/upload_transmit.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[7] + '</span></a></div>';

            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/upload_status.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[8] + '</span></a></div>';


            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach\/upload_history.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[9] + '</span></a></div>';

            finalsubMenucount += 4;
            addedItems += 4;
        }


    }

    if (testIntPay) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Integrated Payables", "Payment file upload", "Payment file upload transmit", "Payment file upload history", "Payment reporting"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/integrated_payables\/upload_select.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/integrated_payables\/upload_transmit_select.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/integrated_payables\/upload_history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/integrated_payables\/inquiry_selection_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';



        finalsubMenucount += 5;
        addedItems += 5;



    }

    if (testUp) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["File Upload", "Upload file", "Transmit file", "File upload detail history report", "File upload summary history report"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/file_upload\/upload_file.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/file_upload\/pending_files.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/file_upload\/detail_history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/file_upload\/summary_history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        finalsubMenucount += 5;
        addedItems += 5;


    }


    if (testWires) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {

            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Wire", "One time wire transfer entry", "Template based wire transfer - single request", "Transmit wire", " Wire transfer setup", "Wire transfer template approval", "Wire history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';


        if (showWireItem('freeform') == '1') {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/free_form_entry_header.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }

        //count2

        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/rep_entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';



        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/transmit.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';


        if (showWireItem('repetitive') == '1') {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/setup.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';
            finalsubMenucount++;
            addedItems++;
        }

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/template_approval.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/wire\/history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';


        finalsubMenucount += 5;
        addedItems += 5;


    }



    str += '<\/td><\/tr><\/table><\/li><\/ul>';


    return str;

    //
}

// Writes  the  sub menu items for the Account services tab
function writeAccountServicesSubContent() {

    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var str = '';
    var lastItem = '';

    var testStop = false; var testPP = false; var testEnhPP = false; var testFAR = false;
    var testPAR = false; var testDAR = false; var testChk = false; var testRDC = false; var testImageSearch = false;
    var testRevPP = false; var testPPExc = false; var testPPIss = false;var testAchPP = false;

    var count = 0; var servicecount = 0; var maxColumns = 3; var maxSubmenuitems = 10;
    var avgSubmenu = 0; var avgService = 0; var finalsubMenucount = 0; var addedItems = 0; var remainingItems = 0; var Submenucount = 0;
    var maxItemsadded = 0; var currentcolumn = 0;

    rc = showMenuItem('capturerdc');
    if (rc == '1') {
        testRDC = true;
        Submenucount++;
        count += 2;
        if (lastItem == '')
            lastItem = "capturerdc";
    }

    rc = showMenuItem('image');
    if (rc == '1') {
        testImageSearch = true;
        Submenucount++;
        count += 3;
        if (lastItem == '')
            lastItem = "image";
    }


    rc = showMenuItem('chkreorder');
    if (rc == '1') {
        rc1 = showMenuItem('account');
        rc2 = showMenuItem('reporting');
        rc3 = showMenuItem('largereporting');
        rc4 = showMenuItem('midreporting');
        if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1')) {
            testChk = true;
            Submenucount++;
            count += 2;
            if (lastItem == '')
                lastItem = "chkreorder";
        } //both Check Reorder and one of the reporting services
    }
    rc = showMenuItem('deprecon');
    if (rc == '1') {
        testDAR = true;
        Submenucount++;
        count += 3;
        if (lastItem == '')
            lastItem = "deprecon";
    }
    rc = showMenuItem('partrecon');
    if (rc == '1') {
        testPAR = true;
        Submenucount++;
        count += 3;
        if (lastItem == '')
            lastItem = "partrecon";
    }
    rc = showMenuItem('fullrecon');
    if (rc == '1') {
        testFAR = true;
        Submenucount++;
        count += 7;
        if (lastItem == '')
            lastItem = "fullrecon";
    }
    rc = showMenuItem('positive');
    if (rc == '1') {
        testEnhPP = true;
        Submenucount++;
        count += 4;
        if (showMenuItem('pospayexception') || showMenuItem('revpospay')) {
            testPPExc = true;
            count += 3;
        }
        if (showMenuItem('pospayissue')) {

            testPPIss = true;
            count += 4;

        }
        if (lastItem == '')
            lastItem = "positive";
    }
    rc = showMenuItem('revpospay');
    if (rc == '1') {
        testRevPP = true;
        Submenucount++;
        if (!showMenuItem('positive') && !showMenuItem('pospayexception'))
            count += 4;
        else if (showMenuItem('positive') && !showMenuItem('pospayexception'))
            count += 3;
        if (lastItem == '')
            lastItem = "positive";
    }
    rc = showMenuItem('opositive');
    if (rc == '1') {
        testPP = true;
        Submenucount++;
        count += 3;
        if (lastItem == '')
            lastItem = "opositive";
    }
    rc = showMenuItem('achpospay');
    if (rc == '1') {
        testAchPP = true;
        Submenucount++;
        count += 4;
        if (lastItem == '')
            lastItem = "achpospay";
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
        Submenucount++;
        count += 3;
        if (lastItem == '')
            lastItem = "stop";
    }





    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);

    avgSubmenu = parseInt(count / maxColumns);
    var currentItemCount = 0;
    var currentCellIndex = 0;
    var maxItemPerColumn = 0;
    var totalProcessedCount = 0;
    var isSelected = false;
    //style="width:' + divwidth + '"
    str += '<ul class="sub-menu" id="acctserv_ul">';

    str += '<li> <div style="background:url(../images/newimages/GradientImageDiv.png)  repeat-x scroll #c0c0c0;" class="royal-sub-menu-wrapper" id="acctserv_submenu_div">';
    str += '<table cellspacing="0" cellpadding="0" border="0" style="border-style: none; border-collapse: collapse;" >';
    str += '<tr><td valign="top" width="33%">';

    currentcolumn++;
    if (testStop) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Stop Payment", "Stop payment request", "Stop payment activity"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/stop_payment\/stoppay_request.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/stop_payment\/history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;



    }
    if (testAchPP) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["ACH Positive Pay", "ACH positive pay exceptions manager", "ACH positive pay exceptions status", "ACH originator company maintenance"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach_positive_pay\/exception_manager.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach_positive_pay\/exceptions_status_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/ach_positive_pay\/originator_company_maintainance.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        finalsubMenucount += 4;
        addedItems += 4;



    }
    if (testPP) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Pos Pay", "Pos pay exceptions", "Pos pay history"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay.old\/exceptions.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay.old\/history.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;


    }
    if (testEnhPP || testRevPP) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Positive Pay", "Positive pay exceptions manager", "Positive pay issue entry", "Positive pay issue file import", "Positive pay decision file import", "Positive pay update issue", "Positive pay issue approval", "Positive pay decisions report", "Positive pay outstanding issues report", "Positive pay stale issues report", "Positive pay issue status report", "Positive pay decision file approval"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2 \
        if (testRevPP || (testEnhPP && testPPExc)) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/except.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';
        }
        //count3
        if (testEnhPP && testPPIss) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/entry.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';
        }
        //count4
        if (testEnhPP && testPPIss) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/import.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';
        }
        //count5
        if (testRevPP || (testEnhPP && testPPExc)) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/decision_import.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';
        }
        //count6
        if (testEnhPP && testPPIss) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/update.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';
        }
        //count7
        if (testEnhPP && testPPIss) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/issue_approval.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';
        }
        //count8
        if (testEnhPP || testRevPP) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/decision.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[7] + '</span></a></div>';
        }
        //count9
        if (testEnhPP) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/outstand.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[8] + '</span></a></div>';
        }
        //count10
        if (testEnhPP) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/stale.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[9] + '</span></a></div>';
        }
        //count11
        if (testEnhPP) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/issue.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[10] + '</span></a></div>';
        }
        //count12
        if (testRevPP || (testEnhPP && testPPExc)) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/positive_pay\/decision_approval.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[11] + '</span></a></div>';
        }
        if (testEnhPP || testRevPP) {
            finalsubMenucount += 1;
            addedItems += 1;
        }
        if (testEnhPP) {
            finalsubMenucount += 4;
            addedItems += 4;
        }
        if (testEnhPP && testPPIss) {
            finalsubMenucount += 4;
            addedItems += 4;
        }
        if (testEnhPP && testPPExc) {
            finalsubMenucount += 3;
            addedItems += 3;
        }


    }
    if (testFAR) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Full Account Reconciliation", "Account recon issue manual entry", "Account recon issue file import", "Account recon update issue", "Account recon issue approval", "Account recon statement report", "Account recon activity report"];

        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/entry.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/import.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/update.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/issue_approval.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/full_statement.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';

        //count7
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/full_activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[6] + '</span></a></div>';

        finalsubMenucount += 7;
        addedItems += 7;


    }

    if (testPAR) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Partial Account Reconciliation", "Account recon statement report", "Account recon activity report"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/part_statement.html">';
        str += '' + Elements_Array[1] + '</a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/part_activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;

    }
    if (testDAR) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Deposit Reconciliation", "Deposit recon statement report", "Deposit recon activity report"];




        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/dep_statement.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/acct_recon\/dep_activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;



    }
    if (testChk) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }


        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Check Reorder", "Order checks/deposit slips"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/check_reorder\/reorder.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;



    }

    if (testImageSearch) {
        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Image Search", "Image search criteria", "Image and archive requests"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/image_search\/image_search_criteria.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/image_search\/arch_request.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        finalsubMenucount += 3;
        addedItems += 3;

        //
    }

    if (testRDC) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {

            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Remote Deposit Capture", "Remote Deposit Capture"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        var newstr = "javascript:openRDC('../remote_deposit_capture/deposit.html')";
        str += '<div class="royal-sub-menu-item"><a target="_self" href="'+ newstr +'">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        finalsubMenucount += 2;
        addedItems += 2;


    }


    str += '<\/td><\/tr><\/table><\/li><\/ul>';

    return str;


}


// Writes  the  sub menu items for the Administration tab
function writeAdministrationSubContent() {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var str = '';
    var lastItem = '';
    var testComm = false; var testCoAdm = false; var testSelfAdm = false; var testSeAdmin = false;
    var count = 0; var servicecount = 0; var maxColumns = 3; var maxSubmenuitems = 10;
    var avgSubmenu = 0; var avgService = 0; var finalsubMenucount = 0; var addedItems = 0; var remainingItems = 0; var Submenucount = 0;
    var maxItemsadded = 0; var currentcolumn = 0;

    testSelfAdm = true;
    Submenucount++;
    count += 6;
    lastItem = "self_admin";


    testSeAdmin = (showMenuItem('admin') && (showMenuItem('positive') || showMenuItem('fullrecon') || showMenuItem('revpospay')));
    if (testSeAdmin) {

        Submenucount++;
        count += 1;
        if (showMenuItem('positive'))
            count++;
        if (showMenuItem('revpospay'))
            count++;
        if (showMenuItem('fullrecon'))
            count++;
    }

    rc = showMenuItem('admin');
    if (rc == '1') {
        testCoAdm = true;
        Submenucount++;
        count += 5;
        if (lastItem == '')
            lastItem = "admin";
    }
    testComm = true;
    Submenucount++;
    count += 6;
    if (lastItem == '')
        lastItem = "comm";

    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);

    avgSubmenu = parseInt(count / maxColumns);


    var currentItemCount = 0;
    var currentCellIndex = 0;
    var maxItemPerColumn = 0;
    var totalProcessedCount = 0;
    var isSelected = false;
    //style="width:' + divwidth + '"
    str += '<ul class="sub-menu" id="administration_ul" >';

    str += '<li> <div style="background:url(../images/newimages/GradientImageDiv.png) repeat-x scroll #c0c0c0;" class="royal-sub-menu-wrapper" id="administration_submenu_div">';
    str += '<table cellspacing="0" cellpadding="0" border="0" style="border-style: none; border-collapse: collapse;" >';
    str += '<tr><td valign="top" width="50%">';

    currentcolumn++;
    if (testComm) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Communications", "View received mail and alerts", "View sent mail", "Contact us", "Download documents", "Manage alerts"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/received.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/sent.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/send_message.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/download.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/manage_alerts.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';


        finalsubMenucount += 6;
        addedItems += 6;


    }
    if (testCoAdm) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Company Administration", "User administration", "User administration approval", "Account administration", "Approvals administration"];



        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/user_admin.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/user_admin_approval.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/account_admin.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/approvals_admin.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        finalsubMenucount += 5;
        addedItems += 5;


    }
    if (testSeAdmin) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Service Administration", "Full account recon administration", "Reverse positive pay administration", "Positive pay administration"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        if (showMenuItem('fullrecon')) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/fullrecon_admin.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';
            finalsubMenucount += 1;
            addedItems += 1;
        }

        //count3
        if (showMenuItem('revpospay')) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/reversepospay_admin.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';
            finalsubMenucount += 1;
            addedItems += 1;
        }

        //count4
        if (showMenuItem('positive')) {
            str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/administration\/positive_admin.html">';
            str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';
            finalsubMenucount += 1;
            addedItems += 1;
        }

        finalsubMenucount += 1;
        addedItems += 1;



    }
    if (testSelfAdm) {

        if (finalsubMenucount >= avgSubmenu && currentcolumn < (maxColumns)) {
            // Is this any column besides the first column?
            // If it is, see if the remaining items should be put here based on previous column items
            if (currentcolumn > 0 && maxColumns > 2) {
                remainingItems = count - addedItems;

                if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
                {
                    // Start a new column
                    if ((currentcolumn + 1) == maxColumns)
                        str += '<\/td><td valign="top" class="last-sub-menu">';
                    else
                    str += '<\/td><td valign="top">';
                    currentcolumn++;
                    finalsubMenucount = 0;
                }
            }
            else {
                // Start a new column
                if ((currentcolumn + 1) == maxColumns)
                    str += '<\/td><td valign="top" class="last-sub-menu">';
                else
                str += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }

        if (finalsubMenucount > 0)
            str += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

        if (finalsubMenucount > maxItemsadded)
            maxItemsadded = finalsubMenucount;

        var Elements_Array = ["Self Administration", "Change password", "Personal preferences", "Manage favorites", "View user activity report", "Secure token setup"];


        //count1
        str += '<div class="royal-sub-menu-header">' + Elements_Array[0] + '</div>';

        //count2
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/change_password.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[1] + '</span></a></div>';

        //count3
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/personal_pref.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[2] + '</span></a></div>';

        //count4
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/favorites.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[3] + '</span></a></div>';

        //count5
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/activity.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[4] + '</span></a></div>';

        //count6
        str += '<div class="royal-sub-menu-item"><a target="_self" href="..\/customer_support\/secure_token_setup.html">';
        str += '<span class="function-item-anchor" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[5] + '</span></a></div>';



        finalsubMenucount += 6;
        addedItems += 6;




    }



    str += '<\/td><\/tr><\/table><\/li><\/ul>';
    //
    //  var index = str.indexOf('id="reports_ul"');
    //   str = str.slice(0, index) + ' style="width:' +maxwidth +'em;" ' + str.slice(index);

    return str;

    //
}


//End Menu Section++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//function writeFavorites
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function
//to determine if the favorite should be displayed
function writeFavorites(id) {

    var rc;
    var str = '';
    var testExpr = false; var testStop = false;

    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
    }

    str += '<span class="leftContentListHeader">Favorites: (<a href="..\/customer_support\/favorites.html">Edit<\/a>)';
    str += '<\/span><ul class="leftContentList">';
    if (testExpr) {
        str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer entry<\/a><\/li>';
    }
    if (testStop) {
        str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
    }
    str += '<\/ul>';

    helpwriteContent(id, str);


}
//end writeFavorites
function writeFavoritesWidgets(id) {
    var rc;
    var str = '';
    var testExpr = false; var testStop = false;

    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
    }

    str = '<table cellspacing="0" cellpadding="4s" border="0"><tr>';
    if (testExpr) {
        str += '<td width="5%" valign="top">><\/td>';
        str += '<td width="48%" valign="top"> <a href="..\/express_transfer\/express_entry.html" style="text-decoration:none; color:#000;">Express transfer entry<\/a>';
    }
    str += '<\/td>';
    if (testStop) {
        str += '<td  width="5%" valign="top">><\/td>';
        str += '<td width="45% valign="top"><a href="..\/stop_payment\/stoppay_request.html" style="text-decoration:none; color:#000;">Stop payment request<\/a>';
    }
    str += '<\/td><\/tr><\/table>';

    if (!testExpr && !testStop) {
        str = '';
        document.getElementById('no_favorites').style.display = '';
    }

    helpwriteContent(id, str);
}
//end writeFavorites

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//function writeSavedReports
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function
//to determine if the saved reports should be displayed
function writeSavedReports(id) {
    var rc;
    var str1 = '', str = '';
    var testAcct = false;
    var testLarge = false;
    var testControlled = false;
    var testoperating_ach = false;
    var testoperating_checks = false;
    var testscheduled = false;

    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
    }
    rc = get_savedreports('controlled');

    if (rc == '1') {
        testControlled = true;
    }
    rc = get_savedreports('operating_ach');
    if (rc == '1') {
        testoperating_ach = true;
    }
    rc = get_savedreports('operating_checks');
    if (rc == '1') {
        testoperating_checks = true;
    }
    rc = get_savedreports('scheduled');
    if (rc == '1') {
        testscheduled = true;
    }

    if (testLarge && testControlled)
        str += '<li><a href="..\/large_reporting\/controlled.html">Controlled <br\/> Disbursement Report<\/a><\/li>';
    else if (testAcct && testControlled)
        str += '<li><a href="..\/account_reporting\/controlled.html">Controlled <br\/> Disbursement Report<\/a><\/li>';
    if (testLarge && testoperating_ach)
        str += '<li><a href="..\/large_reporting\/operating.html">Operating Account <br\/> ACH/WT Credits<\/a><\/li>';
    else if (testAcct && testoperating_ach)
        str += '<li><a href="..\/account_reporting\/operating.html">Operating Account <br\/> ACH/WT Credits<\/a><\/li>';
    if (testLarge && testoperating_checks)
        str += '<li><a href="..\/large_reporting\/operating_check.html">Operating Account <br\/> Checks Paid<\/a><\/li>';
    else if (testAcct && testoperating_checks)
        str += '<li><a href="..\/account_reporting\/operating_check.html">Operating Account <br\/> Checks Paid<\/a><\/li>';
    if (testLarge && testscheduled)
        str += '<li><a href="..\/large_reporting\/account_activity.html">Scheduled <br\/> Deposit Account Report<\/a><\/li>';
    else if (testAcct && testscheduled)
        str += '<li><a href="..\/account_reporting\/account_activity.html">Scheduled <br\/> Deposit Account Report<\/a><\/li>';
    str += '<\/ul>';

    if (testAcct || testLarge) {
        str1 += '<span class="leftContentListHeader">Saved Reports: ';
        if (testLarge)
            str1 += '(<a href="..\/large_reporting\/manage_saved_reports.html">Edit<\/a>)';
        else if (testAcct)
            str1 += '(<a href="..\/account_reporting\/manage_saved_reports.html">Edit<\/a>)';
        str1 += '<\/span><ul class="leftContentList">';
        str = str1 + str;
        helpwriteContent(id, str);
    } //end testAcct	and testLarge
} //end writeSavedReports
function writeSavedReportsWidgets(id) {
    var rc;
    var str1 = '', str = '';
    var testAcct = false;
    var testLarge = false;
    var testControlled = false;
    var testoperating_ach = false;
    var testoperating_checks = false;
    var testscheduled = false;


    var link1 = ' <a href="..\/large_reporting\/controlled.html" style="text-decoration:none; color:#000;" >Controlled  Disbursement Report<\/a>';
    var link2 = ' <a href="..\/account_reporting\/controlled.html" style="text-decoration:none; color:#000;" >Controlled  Disbursement Report<\/a>';
    var link3 = ' <a href="..\/large_reporting\/operating.html" style="text-decoration:none; color:#000;">Operating Account ACH/WT Credits<\/a>';
    var link4 = ' <a href="..\/account_reporting\/operating.html" style="text-decoration:none; color:#000;">Operating Account ACH/WT Credits<\/a>';
    var link5 = ' <a href="..\/large_reporting\/operating_check.html" style="text-decoration:none; color:#000;">Operating Account Checks Paid<\/a>';
    var link6 = ' <a href="..\/account_reporting\/operating_check.html" style="text-decoration:none; color:#000;">Operating Account Checks Paid<\/a>';
    var link7 = ' <a href="..\/large_reporting\/account_activity.html" style="text-decoration:none; color:#000;">Scheduled Deposit  Account Report<\/a>';
    var link8 = ' <a href="..\/account_reporting\/account_activity.html" style="text-decoration:none; color:#000;">Scheduled <br\/> Deposit Account Report<\/a>';
    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
    }
    rc = get_savedreports('controlled');

    if (rc == '1') {
        testControlled = true;
    }
    rc = get_savedreports('operating_ach');
    if (rc == '1') {
        testoperating_ach = true;
    }
    rc = get_savedreports('operating_checks');
    if (rc == '1') {
        testoperating_checks = true;
    }
    rc = get_savedreports('scheduled');
    if (rc == '1') {
        testscheduled = true;
    }
    str += '<table cellpadding="3" cellspacing="0"  ><tr>';
    //	for (p=0;p<4;p++)//loop through rows
    //{

    var cond = '';
    count = 0;
    if (testLarge && testControlled) {
        //	cond=testLarge && testControlled;
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link1 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    else if (testAcct && testControlled) {
        //	cond=testAcct && testControlled;
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link2 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    if (testLarge && testoperating_ach) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link3 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testoperating_ach) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link4 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }

    if (testLarge && testoperating_checks) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link5 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testoperating_checks) {
        str += '<td  valign="top" >><\/td>';
        str += '<td >' + link6 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    if (testLarge && testscheduled) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link7 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testscheduled) {
        str += '<td valign="top" >><\/td>';
        str += '<td >' + link8 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }

    if (testLarge && (!testscheduled && !testoperating_checks && !testoperating_ach && !testControlled)) {
        str = '';
        document.getElementById('hidden_saved').style.display = '';
    }

    str += '<\/table>';




    if ((testControlled || testoperating_checks || testoperating_ach || testscheduled) && testLarge) {
        document.getElementById('saved_reports_section').style.display = '';

        helpwriteContent(id, str);
    }
    else {
        document.getElementById('saved_reports_section').style.display = 'none';
    } //end testAcct	and testLarge
} //end writeSavedReports
function get_condition(cond) {
}
//This function will read from saved_reports record of the modules.txt file
function get_savedreports(id) {

    var current = eval("saved_reports");



    var check = 0;

    for (var i = 0; i < saved_reports.length; i++) {

        if (saved_reports[i] == id) {
            check = 1;
            i = saved_reports.length;
        }
    }
    return check;
}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//function writeQuickLinks
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function
//to determine if the QuickLink should be displayed
function writeQuickLinks(id) {
    var rc;
    var str = '';
    var testPPay = false; var testInvRep = false; var testStop = false; var testAcct = false; var testRpt = false;
    var testLoan = false; var testAdv = false; var testPay = false; var testWire = false;
    var testRep = false; var testFree = false; var testAdmin = false;
    var testUp = false; var testCC = false; var testLPay = false; var testSchd = false; testImageSearch = false;
    var testMicro = false; var testStatements = false; var testACHPPException = false; var testPPException = false;
    var testpremium = false; var testExpress = false; var testFunds = false; var testBook = false; var testACH = false;
    var testACHsend = false; var testACHcollect = false;

    if (id == 'q_acct_mid_large') {

        rc = showMenuItem('positive');
        if (rc == '1') { testPPay = true; }

        rc = showMenuItem('stop');
        if (rc == '1') { testStop = true; }

        rc = showMenuItem('statements');
        if (rc == '1') { testStatements = true; }

        rc = showMenuItem('image');
        if (rc == '1') { testImageSearch = true; }

        if (testPPay || testStop || testStatements || testImageSearch) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testPPay)
                str += '<li><a href="..\/positive_pay\/except.html">Positive pay <br/>exceptions manager<\/a><\/li>';
            if (testStop)
                str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment <br/>request<\/a><\/li>';
            if (testStatements)
                str += '<li><a href="..\/statements\/statements.html">Statements and <br/>documents - account <br/>selection<\/a><\/li>';
            if (testImageSearch)
                str += '<li><a href="..\/image_search\/image_search_criteria.html"> Image search<br/><\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end if
    } //end q_acct_mid_large

    if (id == 'q_wlc_schd') {
        rc = showMenuItem('schedule');
        if (rc == '1') {
            testSchd = true;
        }
        rc = showMenuItem('express');
        if (rc == '1') { testExpress = true; }

        rc = showMenuItem('funds');
        if (rc == '1') { testFunds = true; }

        rc = showMenuItem('book');
        if (rc == '1') { testBook = true; }

        rc = showMenuItem('loan');
        if (rc == '1') { testLoan = true; }

        rc = showLoanItem('payment');
        if (rc == '1') { testPay = true; }

        rc = showMenuItem('cardpay');
        if (rc == '1') { testCC = true; }

        rc = showMenuItem('ach');
        if (rc == '1') { testACH = true; }



        if (showACHItem('collection') == '1' || showACHItem('ppdcoll') == '1' || showACHItem('iatcoll') == '1' || showACHItem('ctxcoll') == '1' || showACHItem('webcoll') == '1' ||
        showACHItem('telcoll') == '1')
        { testACHcollect = true; }

        (showACHItem('payment') == '1' || showACHItem('ccdpay') == '1' || showACHItem('iat') == '1' || showACHItem('ctx') == '1' ||
        showACHItem('stp820') == '1' || showACHItem('federal') == '1' || showACHItem('state') == '1' || showACHItem('child') == '1')
        { testACHsend = true; }

        rc = showMenuItem('wiremain');
        if (rc == '1') { testWire = true; }

        rc = showWireItem('repetitive');
        if (rc == '1') { testRep = true; }

        rc = showWireItem('freeform');
        if (rc == '1') { testFree = true; }

        if (testSchd) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testExpress)
                str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer request<\/a><\/li>';
            if (testFunds)
                str += '<li><a href="..\/funds_transfer\/funds_entry.html">Funds transfer request<\/a><\/li>';
            if (testBook)
                str += '<li><a href="..\/book_transfer\/entry.html">Book transfer<\/a><\/li>';
            if (testLoan && testPay)
                str += '<li><a href="..\/loan\/payment.html">Loan payment request<\/a><\/li>';
            if (testCC)
                str += '<li><a href="..\/credit_card\/entry.html">Credit card payment entry<\/a><\/li>';
            if (testACH && testACHsend)
                str += '<li><a href="..\/ach\/send.html">Send money<\/a><\/li>';
            if (testACH && testACHcollect)
                str += '<li><a href="..\/ach\/collect.html">Collect money<\/a><\/li>';
            if (testWire && testFree)
                str += '<li><a href="..\/wire\/free_form_entry_header.html">One time wire entry<\/a><\/li>';
            if (testWire && testRep)
                str += '<li><a href="..\/wire\/rep_entry.html">Template based wire transfer - single request<\/a><\/li>';

            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testSchd
    } //end q_wlc_schd

    if (id == 'q_rep_invrep') {
        rc = showMenuItem('investmentreporting');
        if (rc == '1') {
            testInvRep = true;
        }

        if (testInvRep) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
            str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
            str += '<li><a href="..\/statements\/statements.html">Statement account selection<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testSchd
    }

    if ((id == 'q_acct_qbr') || (id == 'q_acct_sr') || (id == 'q_acct_cr') || (id == 'q_rpt_qbr')) {
        rc = showMenuItem('positive');
        if (rc == '1') {
            testPPay = true;
        }
        if (testPPay) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/positive_pay\/except.html">Positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_acct_qbr or q_acct_sr or q_acct_cr or q_rpt_qbr

    if ((id == 'q_acct_ts') || (id == 'q_acct_tr') || (id == 'q_rpt_ts') || (id == 'q_rpt_adr')) {
        rc = showMenuItem('positive');
        if (rc == '1') {
            testPPay = true;
        }
        rc = showMenuItem('stop');
        if (rc == '1') {
            testStop = true;
        }
        if ((testPPay) || (testStop)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testPPay) {
                str += '<li><a href="..\/positive_pay\/except.html">Ppositive pay exceptions manager<\/a><\/li>';
            }
            if (testStop) {
                str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_acct_ts or q_acct_tr or q_rpt_ts or q_rpt_adr

    if ((id == 'q_loan_sr') || (id == 'q_loan_ar')) {
        rc = showMenuItem('loan');
        if (rc == '1') {
            rc = showLoanItem('advance');
            if (rc == '1') {
                testAdv = true;
            }
            rc = showLoanItem('payment');
            if (rc == '1') {
                testLPay = true;
            }
            if ((testAdv) || (testLPay)) {
                testLoan = true;
            } //end loan and at least one type
        }
        if (testLoan) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testLPay) {
                str += '<li><a href="..\/loan\/payment.html">Loan payment request<\/a><\/li>';
            }
            if (testAdv) {
                str += '<li><a href="..\/loan\/advance.html">Loan advance request<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_sr or q_loan_ar

    if (id == 'q_stmt_sas') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        if ((testAcct) || (testRpt)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_stmt_sas

    if (id == 'q_cc_ccar') {
        rc = showMenuItem('cardpay');
        if (rc == '1') {
            testCC = true;
        }
        if (testCC) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testCC) {
                str += '<li><a href="..\/credit_card\/entry.html">Credit card payment entry<\/a><\/li>';
                str += '<li><a href="..\/credit_card\/transmit.html">Credit card payment transmit<\/a><\/li>';
                str += '<li><a href="..\/credit_card\/history.html">Credit card payment history<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_cc_ccar

    if (id == 'q_wire_iwr') {
        rc = showMenuItem('wiremain');
        if (rc == '1') {
            rc = showWireItem('repetitive');
            if (rc == '1') {
                testRep = true;
            }
            rc = showWireItem('freeform');
            if (rc == '1') {
                testFree = true;
            }
            if ((testRep) || (testFree)) {
                testWire = true;
            } //end wire and at least one type
        }
        if (testWire) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/wire\/history.html">Wire history<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_wire_iwr

    if (id == 'q_wire_h') {
        rc = showMenuItem('inwirerpt');
        if (rc == '1') {
            testWire = true;
        }
        if (testWire) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/wire\/incoming.html">Incoming wire report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_wire_h

    if (id == 'q_ach_afu') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        if ((testAcct) || (testRpt)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_ach_afu

    if ((id == 'q_et_ete') || (id == 'q_bt_bte') || (id == 'q_ft_fte') || (id == 'q_ach_sm') ||
		(id == 'q_ach_cm') || (id == 'q_ach_t') || (id == 'q_ach_h') || (id == 'q_wire_rwe') ||
		(id == 'q_wire_fwe') || (id == 'q_wire_t')) {

        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }

            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_et_ete or q_bt_bte or q_ft_fte or q_wire_rwe or q_wire_fwe or q_wire_t or all ach

    if ((id == 'q_et_ett') || (id == 'q_et_eth') || (id == 'q_bt_btt') || (id == 'q_bt_bth') ||
		(id == 'q_ft_ftt') || (id == 'q_ft_fth')) {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/account_report.html">Account detail report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_et_ett or q_et_eth or q_bt_btt or q_bt_bth or q_ft_ftt or q_ft_fth

    if (id == 'q_loan_lpr') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testLoan) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lpr

    if (id == 'q_loan_lar') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
        }
        if ((testAcct) || (testRpt) || (testLoan)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lar

    if (id == 'q_loan_lt') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testLoan) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lt

    if (id == 'q_loan_lh') {
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
        }
        if (testLoan) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lh

    if ((id == 'q_cc_ccpe') || (id == 'q_cc_ccpt') || (id == 'q_cc_ccph')) {
        rc = showMenuItem('cardrpt');
        if (rc == '1') {
            testCC = true;
        }
        if (testCC) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/credit_card\/activity.html">Credit card activity report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_cc_ccpe or q_cc_ccpt or q_cc_ccph

    if ((id == 'q_stop_scr') || (id == 'q_stop_mcr') || (id == 'q_stop_sph')) {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        if ((testAcct) || (testRpt)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/tsearch.html">Account transaction search<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/transaction.html">Transaction search<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_stop_scr or q_stop_mcr or q_stop_sph

    if (id == 'q_opos_e') {
        rc = showMenuItem('admin');
        if (rc == '1') {
            testAdmin = true;
        }
        rc = showMenuItem('fileup');
        if (rc == '1') {
            testUp = true;
        }
        if ((testAdmin) || (testUp)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAdmin) {
                str += '<li><a href="..\/customer_support\/send_message.html">Contact us<\/a><\/li>';
            }
            if (testUp) {
                str += '<li><a href="..\/file_upload\/upload_file.html">Upload file<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_opos_e

    if (id == 'q_ppay_dr') {
        rc = showMenuItem('stop');
        if (rc == '1') {
            testStop = true;
        }
        if (testStop) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_ppay_dr

    if (id == 'q_acct_act') {
        rc = showMenuItem('microreporting');
        if (rc == '1') {
            testMicro = true;
        }
        rc = showMenuItem('image');
        if (rc == '1') {
            testImageSearch = true;
        }
        if (testMicro) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/statements\/statements.html">Statement account selection<\/a><\/li>';
            str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer request<\/a><\/li>';
            if (testImageSearch)
                str += '<li><a href="..\/image_search\/image_search_criteria.html">Image search<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testMicro
    } //end q_acct_act

    if (id == 'q_ach_pp_exception') {
        rc = showMenuItem('positive');
        rc1 = showMenuItem('pospayexception');
        if (rc == '1' && rc1 == '1') {
            testPPException = true;
        }
        if (testPPException) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/positive_pay\/except.html">Positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testPPException
        else {
            document.getElementById(id).style.display = 'none';
        }
    } //end q_ach_pp_exception


    if (id == 'q_image_search') {
        rc = showMenuItem('image');

        if (rc == '1') {
            testImageSearch = true;
        }
        if (testImageSearch) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/account_reporting\/account_activity_search.html">Account activity<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testImageSearch
    } //end q_image_search

    if (id == 'q_pp_exception') {
        rc = showMenuItem('achpospay');
        if (rc == '1') {
            testACHPPException = true;
        }
        if (testACHPPException) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/ach_positive_pay\/exception_manager.html">ACH positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testACHPPException
        else {
            document.getElementById(id).style.display = 'none';
        }
    } //end q_pp_exception

    //Added By Ashwini on 10th May 2010
    if ((id == 'q_admin_administration') || (id == 'q_pp_issueapproval') || (id == 'q_recon_issueapproval') || (id == 'q_pp_decisionapproval')) {

        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage alerts<\/a><\/li>';
        str += '<\/ul>';

        helpwriteContent(id, str);

    } //end q_pp_administration
    if ((id == 'q_ach_sm')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_wire_t') || (id == 'q_wire_fwe') || (id == 'q_wire_rwe') || (id == 'q_wire_setup') || (id == 'q_wire_h')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_ach_t') || (id == 'q_ach_cm') || (id == 'q_ach_h') || (id == 'q_ach_afu')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_bt_btt') || (id == 'q_bt_bte') || (id == 'q_bt_bth')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_cc_ccpt') || (id == 'q_cc_ccpe') || (id == 'q_cc_ccph')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_loan_lt') || (id == 'q_loan_lpr') || (id == 'q_loan_lar') || (id == 'q_loan_lh')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_et_ett') || (id == 'q_et_ete') || (id == 'q_et_eth')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_ft_ftt') || (id == 'q_ft_fte') || (id == 'q_ft_fth')) {
        GetDivForQuickLinks(id);
    }


} //end writeQuickLinks


function GetDivForQuickLinks(id) {
    if (document.getElementById(id).innerHTML.indexOf('</UL>') > 0) {

        str = document.getElementById(id).innerHTML;
        str = str.replace('</UL>', '');
        str += '<li><a href="..\/consumer_support\/manage_alerts.html">Manage alerts<\/a><\/li></UL>';
        helpwriteContent(id, str);
    }

    else {
        var str = '';
        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage alerts<\/a><\/li>';
        str += '<\/ul>';
        helpwriteContent(id, str);
    }
}


// Function for left navigation on Service Administration pages

function testRecon(id, service) {
    var rc;
    rc = showMenuItem(service);
    if (rc != '1') {
        document.getElementById(id).style.display = 'none';
    }
}
