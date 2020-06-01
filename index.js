import React from "react";
import ReactDOM from "react-dom";
var time=new Date(2020,5,5,14);
time=time.getHours();
var t="";
var heading={
    textAlign:"center",
    backgroundColor:"blue",
};
var text={

};
if(time=1&&time<12)
{
t="good morning";
text.color="green";
}else if(time>=12&&time<19)
{
t="good afternoon";
text.color="orange";
}
else  
{
    t="good night";
    text.color="brown";
}
ReactDOM.render(
<>
<h1 style={heading}>Hello sir,<span style={text}>{t}</span></h1>


</>,document.getElementById("root"));
