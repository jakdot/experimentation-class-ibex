var shuffleSequence = seq("intro", "practice-before", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("filler"))));

var continueMessage = ["Click below to continue"];

var aj = "AcceptabilityJudgment";

var completionMessage = "[Thank you for your participation!]";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Please wait for the next item.",
                   errorMessage: "Wrong. Please wait for the next item." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(completely unacceptable)", rightComment: "(fully acceptable)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Click here to continue", html: { include: "example_intro.html" }}],

	      ["practice-before", "Message", {continueMessage: "Click here to continue" , html: "<blockquote><p><h2>Instructions</h2></p><p><blockquote>In this experiment, you'll read questions and judge whether the questions seem acceptable or unacceptable to you. An acceptable question would be a question that you can imagine a native speaker might ask, and you would not find anything odd about the way the question was asked. You'll grade the questions on a scale of 1-5: 1 = the sentence is completely unacceptable; 5 = the sentence is fully acceptable.<br>You will start with practice items.</blockquote></p><p><i>Click below to continue</i></p></blockquote>"}],
	      ["practice", aj, {s: {html: "<blockquote><p><i>This is the first practice item.</i></blockquote></p><blockquote><p> Does John like movies?</blockquote></p><blockquote><p><i>This is an example of a question that seems to be acceptable: you can imagine a native speaker could write or say it and you would most likely not doubt her ability to use English (provided she used the question in a relevant situation -- we abstract from that in the experiment). If you agree, you should signal that by clicking on the right part of the scale (most likely, 5). (Click to continue.)</i></p></blockquote>"}}],
	      ["practice", aj, {s: {html: "<blockquote><p><i>This is the second practice item.</i>:</p><p> Do John to like movies?</p><p><i>This is an example of an item that seems to be unacceptable: probably, no native speaker would use it and if she did, she would correct herself or recognize this is not the right way to use English. You should signal that by clicking on the left part of the scale (most likely, 1). (Click to continue.)</i></p></blockquote>"}}],


	      ["practiceover", "Message", {continueMessage: "Click to continue", html: ["div", ["p", "This is the end of practice session."]]}],

["filler-i1", aj, {s: "Every boy fell asleep."}]

];




























