// JavaScript Document

//variables used for showMenuItem function
mainMenu = new Array();

//function getLogo
//This function will read the "logo" property from the
//properties.txt file and return the value
function getLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("logo");
	return current[0];
}

//function writeHeaderLogo
//This function will write the <img> tag to the header
//This function calls the getLogo function which returns the image
//to be used as the header image
function writeHeaderLogo()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getLogo();
	third = '" border="0" name="main_banner" title="Visit the Bank Home page" alt="Bank Logo" style="padding-left:13px;padding-top:3px;padding-bottom:3px;"\/>	';

	document.write(first + second + third);

} // end writerHeaderLogo


//function to load the CDS logo dynamically on Rewrdpoints.html
function writeRewardsLogo() {
    var first, second, third;

    first = '<img src="..\/images\/';
    second = getLogo();
    third = '" border="0" name="main_banner" \/>	';

    document.write(first + second + third);

} // end writerHeaderLogo

//function getBillPayLogo
//This function will read the "billpaylogo" property from the
//properties.txt file and return the value
function getBillPayLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("billpaylogo");
	return current[0];
}

//function writeBillPayLogo
//This function will write the <img> tag to the header
function writeBillPayLogo()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getBillPayLogo();
	third = '" name="main_banner" title="Visit the Bank Home Web Page" align="top" alt="Bank Logo" style="border-width:0px;border-style:None;"\/>	';

	document.write(first + second + third);

}// end writeBillPayLogo

//function getRDCLogo
//This function will read the "rdclogo" property from the
//properties.txt file and return the value
function getRDCLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("billpaylogo");
	return current[0];
}

//function writeRDCLogo
//This function will write the <img> tag to the header
function writeRDCLogo()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getRDCLogo();
	third = '" name="main_banner" title="Visit the Merchant Home Web Page" align="top" alt="Bank Logo" style="border-width:0px;border-style:None;"\/>	';

	document.write(first + second + third);

}// end writeBillPayLogo

//function getProductName
//This function will read the "product" property from the
//properties.txt file and return the value
function getProductName()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("product");
	return current[0];
}

//function writeProductName
//This function will write the product name to the header
//This function calls the getProductName function which returns the text
//to be used in the header
function writeProductName()
{
	var prodname;

 	prodname = getProductName();

	document.write(prodname);

}// end writerProductName

//function getBanner
//This function will read the "banner" property from the
//properties.txt file and return the value
function getBanner()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("banner");
	return current[0];
}

//function writeLeftBanner
//This function will write the <img> tag to the header
//This function calls the getBanner function which returns the image
//to be used as the header image
function writeLeftBanner()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getBanner();
	third = '" name="main_banner" align="top" alt="" style="border-width:0px;border-style:None;"\/>	';

	document.write(first + second + third);

}// end writerLeftBanner

//function getGraph0
//This function will read the "graph0" property from the
//properties.txt file and return the value
function getGraph0()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph0");
	return current[0];
}

//function writeGraph0
//This function will write the <img> tag
//This function calls the getGraph0 function which returns the image
//to be used as the first graphic image on the landing page (modules_main.html)
function writeGraph0()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getGraph0();
	third = '" name="graph_0" border = "0"\/>	';


	document.write(first + second + third);

}// end writeGraph0


//function getText0
//This function will read the "text0" property from the
//properties.txt file and return the value
function getText0()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text0");
	document.write(current);

}// end getText0


//function getGraph1
//This function will read the "graph1" property from the
//properties.txt file and return the value
function getGraph1()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph1");
	return current[0];
}

//function writeGraph1
//This function will write the <img> tag
//This function calls the getGraph1 function which returns the image
//to be used as the second graphic image on the landing page (modules_main.html)
function writeGraph1()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getGraph1();
	third = '" name="graph_1" border = "0"\/>	';


	document.write(first + second + third);

}// end writeGraph1


//function getText1
//This function will read the "text1" property from the
//properties.txt file and return the value
function getText1()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text1");
	document.write(current);

}// end getText1


//function getGraph2
//This function will read the "graph2" property from the
//properties.txt file and return the value
function getGraph2()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph2");
	return current[0];
}

//function writeGraph2
//This function will write the <img> tag
//This function calls the getGraph2 function which returns the image
//to be used as the third graphic image on the landing page (modules_main.html)
function writeGraph2()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getGraph2();
	third = '" name="graph_2" border = "0"\/>	';


	document.write(first + second + third);

}// end writeGraph2


//function getText2
//This function will read the "text0" property from the
//properties.txt file and return the value
function getText2()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text2");
	document.write(current);

}// end getText2


//function getGraph3
//This function will read the "graph0" property from the
//properties.txt file and return the value
function getGraph3()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph3");
	return current[0];
}

//function writeGraph3
//This function will write the <img> tag
//This function calls the getGraph3 function which returns the image
//to be used as the first graphic image on the landing page (modules_main.html)
function writeGraph3()
{
	var first,second,third;

	first = '<img src="..\/images\/';
	second = getGraph3();
	third = '" name="graph_3" border = "0"\/>	';


	document.write(first + second + third);

}// end writeGraph3


//function getText3
//This function will read the "text0" property from the
//properties.txt file and return the value
function getText3()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text3");
	document.write(current);

}// end getText3


//function getLogin
//This function will read the "loginpage" property from the
//properties.txt file in the /includes directory and return the value
function getLogin()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("loginpage");

	return current[0];
}

//function redirectSA
//This function will redirect the user
//to either the signup for SA page or main landing page
//this will be determined by the "loginpage" variable in the properites.txt file
//in the includes/.
function redirectSA()
{

	var temp = getLogin();
	if (temp == "../modules_main/modules_main.html")
	{
		redirectSplash();
	}
	else
	{
	window.location.href = temp;
	}
}//end write index

//function isRegistered
//This function will read the "isreg" property from the
//properties.txt file in the /includes directory and return the value
function isRegistered()
{
    //Read data from the text file properties.txt and store into an variable
	var current = eval("isreg");
	return current[0];
}//end isRegistered

//function signinReg
//This function will redirect the user
//to either the regular password, SA password w/Registered Computer or SA password w/Non-Registered Computer
//for BiB login this will be determined by the "isreg" variable in the properites.txt file
//in the includes/.
function signinReg()
{
	var temp = isRegistered();
	window.location.href = temp;
}//end signinReg

//function siginToken
//This function will redirect the user
//to the Set Up Secure Token page ie signin_active_token.html
//if token approval service is present for the user in modules.txt
//else it will call the function signinReg()
//To use this function we must include the js page menu_scripts.js and
//add the variable mainMenu=new Menu()
//in the page where we call this function
function siginToken()
{

    getMenu();
    if(showMenuItem('tokenapproval') == "1")
    {
        window.location.href = "signin_active_passcode.html";
    }
    else
    {
        signinReg();
    }
}

//function redirectSplash
//This function will redirect the user
//to the Welcome page with splash page ie modules_main_splash.html
//if splash page service is present for the user in modules.txt
//else it will call the function signinReg()
//To use this function we must include the js page menu_scripts.js and
//add the variable mainMenu=new Menu()
//in the page where we call this function
function redirectSplash()
{
    getMenu();
	if(showMenuItem('dashboard') == "1" && showMenuItem('splashpage') != "1" )
	{
		 window.location.href = "../modules_main/modules_main_widgets.html";
	}

	else	if(showMenuItem('dashboard') == "1" && showMenuItem('splashpage') == "1" )
	{
		 window.location.href = "../modules_main/modules_main_widgets_splash.html";
	}

	else   if(showMenuItem('dashboard') != "1" && showMenuItem('splashpage') == "1")
    {
        window.location.href = "../modules_main/modules_main_splash.html";
    }
    else
    {
        window.location.href = "../modules_main/modules_main.html";
    }
}
