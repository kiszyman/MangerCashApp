/*******************************************************************/
/***                                                             ***/
/***   Tokenizer.js - JavaScript String Tokenizer Function       ***/
/***                                                             ***/
/***   Version   : 0.1                                           ***/
/***   Date      : 01.09.2004                                    ***/
/***   Copyright : 2004 Adrian Zentner                           ***/
/***   Website   : http://www.adrian.zentner.name/               ***/
/***                                                             ***/
/***   This library is free software. It can be freely used as   ***/
/***   long as this this copyright notice is not removed.        ***/
/***                                                             ***/
/*******************************************************************/

String.prototype.tokenize = tokenize;

function tokenize()
  {
     var input     = "";
     var separator = " ";
     var trim      = "";
     var ignoreEmptyTokens = true;

     try {
       String(this.toLowerCase());
     }
     catch(e) {
       window.alert("Tokenizer Usage: string myTokens[] = myString.tokenize(string separator, string trim, boolean ignoreEmptyTokens);");
       return;
     }

     if(typeof(this) != "undefined")
       {
          input = String(this);
       }

     if(typeof(tokenize.arguments[0]) != "undefined")
       {
          separator = String(tokenize.arguments[0]);
       }

     if(typeof(tokenize.arguments[1]) != "undefined")
       {
          trim = String(tokenize.arguments[1]);
       }

     if(typeof(tokenize.arguments[2]) != "undefined")
       {
          if(!tokenize.arguments[2])
            ignoreEmptyTokens = false;
       }

     var start = 0;
     var end = 0;
     var token = new Array();
     for(var i=0; i<input.length+1; i++)
       {
          if(input.slice(start, i).indexOf(separator) != -1)
            {
               end = i - separator.length;
               token[token.length] = input.slice(start, end);
               start = i;
            }
          else
            {
               if(i == input.length)
                 token[token.length] = input.slice(start);
            }
       }

    if(trim)
      for(var i=0; i<token.length; i++)
        {
          while(token[i].slice(0, trim.length) == trim)
            token[i] = token[i].slice(trim.length);
          while(token[i].slice(token[i].length-trim.length) == trim)
            token[i] = token[i].slice(0, token[i].length-trim.length);
        }

    var finalToken = new Array();
    if(ignoreEmptyTokens)
      {
         for(var i=0; i<token.length; i++)
           if(token[i] != "")
             finalToken[finalToken.length] = token[i];
      }
    else
      {
         finalToken = token;
      }

     return finalToken;
  }
