!function(){var e,t,o;e=document.getElementById("八卦"),t=!1,o=[0,0],e&&(e.onmousedown=e=>{t=!0,o=[e.clientX,e.clientY]},document.onmousemove=n=>{if(!0===t){var l=n.clientX-o[0],s=n.clientY-o[1];if(e){console.log("div1.style.top"),console.log(e.style.top);var c=(parseInt(e.style.top)||0)+s,i=(parseInt(e.style.left)||0)+l;e.style.top=c+"px",e.style.left=i+"px",o[0]=n.clientX,o[1]=n.clientY}}},document.onmouseup=e=>{t=!1})}();
//# sourceMappingURL=index.8d1765a6.js.map
