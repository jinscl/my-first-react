import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import registerServiceWorker from './registerServiceWorker';
function showCircle(){
	var colors=["#393E4A","#E94F37","#1C89BF","#A1D363","#85FFC7","#297373","#FF8552","A40E4C"];
	{/*显示多个圆形*/}
	var renderData = [];
	for(var i=0;i<colors.length;i++){
		var ran = Math.floor(Math.random() * colors.length);
		renderData.push(<Circle key={i + colors[ran]} bgColor={colors[ran]}/>)
	}
	return renderData;
}
ReactDOM.render(
	<div>
		{showCircle()}
	</div>
	, document.getElementById('root')
);
registerServiceWorker();
