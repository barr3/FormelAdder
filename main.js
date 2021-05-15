"use strict";

var formulaHTML = `	<div class="formula", id="3">
	  
	  <h3>Medelhastighet</h3>
	  
	  <p class="latex">\[ v_m = \frac{\Delta s}{\Delta t}  \]</p>

	  <p class="latex explanation">\( v_m \) är medelhastigheten, \( \Delta s  \) är förändringen i sträcka ,  och \( \Delta t \) är förändringen i tid. </p>

	  <p class="smalltext">Vill du räkna ut en okänd variabel? Klicka på den okända variabeln nedan.</p>

	  <div class="varcontainer">
	    
	    <div class="helper" onclick="unknown(this)"> <p class="v">\(v_m\)</p> </div>

	    <div class="helper" onclick="unknown(this)"> <p class="s">\( \Delta s  \)</p> </div>

	    <div class="helper" onclick="unknown(this)"> <p class="t">\( \Delta t  \)</p> </div>

	  </div>
	  

	</div>

`
function submit() {
    console.log("hello world");
    var tempFormula = document.getElementById("title").value;
    var tempLatex = document.getElementById("latex").value;
    var tempVars = document.getElementById("var").value;
    var tempExp = document.getElementById("exp").value;
    console.log(tempFormula);
    console.log(tempLatex);
    console.log(tempVars);
    console.log(tempExp);
}



class Formula {
    constructor(formula, formulaLatex, formulaExp, variables) {
	this.formula = formula;
	this.formulaLatex = formulaLatex;
	this.formulaExp = formulaExp;
	this.variables = variables
	this.variablesHTML = "";
    }

    getVariablesHTML () {
	for (var i = 0; i < variables.length; i++) {
	    this.variablesHTML += '<div class="helper" onclick="unknown(this)"> <p class="'+ this.variables[i]+'">\('+this.variables[i] +'\)</p> </div>'
	}
    }
    
    createHTML(){
	console.log("html");

	this.formulaHTML = `	<div class="formula", id="` + this.formula + `">	 
	  <h3>`+ this.formula + `</h3>
	  
	  <p class="latex">` + this.formulaLatex + `</p>

	  <p class="latex explanation">`+ this.formulaExp  +`</p>

	  <p class="smalltext">Vill du räkna ut en okänd variabel? Klicka på den okända variabeln nedan.</p>

	  <div class="varcontainer">` +
	    
	this.variablesHTML

	+ `</div>
	  

	</div>

        `;
	
	
    }

    createJS(){
	console.log("js");
    }
    
}
