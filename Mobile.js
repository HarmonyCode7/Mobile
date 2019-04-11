
/*THE GLOBAL FUNCTION*/
function autorun()
{
    let container = document.querySelector(".container");
    let svg1 = new svgCanvas({X: 0, Y: 0, width: 200, height: 100});
    let svg1Element = svg1.Draw();
    container.appendChild(svg1);
    MakeChildOf(container,svg1Element); 
    document.querySelector(".dynamic-svg").style.background = "red";
}


function MakeChildOf(parent,child)
{
     parent.appendChild(child);
}


function svgCanvas(viewbox)
{
     this.viewbox =
     {
          X: viewbox.X,
          Y: viewbox.Y,
          width: viewbox.width,
          height: viewbox.height          
     }
     
          
     this.Draw = function()
     {
         let ns = "http://www.w3.org/2000/svg";
         let svg = document.createElementNS(ns,"svg");
         svg.setAttributeNS(null,"viewBox",
         " "+this.viewbox.X+ " "+this.viewbox.Y+" "+
         this.viewbox.width+ " "+ this.viewbox.height
         );
        // document.write(this.viewbox.width);
         svg.setAttributeNS(null,"width",this.viewbox.width.toString());
         svg.setAttributeNS(null,"height",this.viewbox.height.toString());
         svg.setAttributeNS(null,"class","dynamic-svg");
        // document.write(svg);
         return svg;                        
     }     
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;


