    var canvas= document.querySelector('canvas'); // getting the canvas element into canvas variable
    canvas.width=window.innerWidth;// resizing canvas height to full width
    canvas.height=window.innerHeight; // resizing canvas height to full height
   



var c= canvas.getContext('2d');
var score =0 ;;
var cl=5;
var game=1;

          
           var x1=100;
           var y1=300;

            function upArrowPressed()
           {  if( y1-50>0)
                y1-=5;
               draw();
            }

            function downArrowPressed()
           { if(y1+50<innerHeight)
                y1+=5;
               draw();
            }

            function moveSelection(event) {                    
                switch (event.keyCode) {

                    case 38:
                        upArrowPressed();
                    break;

                    case 40:
                        downArrowPressed();
                    break;
                }
            };

        function gameLoop()
        {
            
            moveSelection();
            setTimeout("gameLoop()",5000);
        }

        

function draw ()
{
   c.clearRect(0,0,innerWidth,innerHeight);
    
c.beginPath();
c.arc(x1,y1,50,1.5*Math.PI,0.5*Math.PI);
c.lineWidth=5;
c.strokeStyle="black";
c.stroke();
    
c.beginPath();
c.moveTo(x1,y1-50);
c.lineTo(x1,y1+50);
c.lineWidth=2;
c.stroke();  

    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x1+75,y1);
    c.lineWidth=2;
    c.stroke();
    
    c.beginPath();
    c.moveTo(x1+65,y1+10);
    c.lineTo(x1+75,y1);
    c.lineWidth=2;
    c.stroke();
    
    c.beginPath();
    c.moveTo(x1+65,y1-10);
    c.lineTo(x1+75,y1);
    c.lineWidth=2;
    c.stroke();
    
    
    c.font = "30px Arial";
c.strokeText("SCORE:",10,50);
c.strokeText(score,150,50);
if(cl>=0)
    {
c.font = "30px Arial";
c.strokeText("ARROWS LEFT :",10,80);
c.strokeText(cl,300,80); }
    else 
        {
c.font = "30px Arial";
c.strokeText("GAME OVER !!! RESET TO PLAY AGAIN",300,300);
 }
   
}


 var y= Math.random()*innerHeight;
var dy = 1;




function animate()
{
    requestAnimationFrame(animate);
     c.clearRect(0,0,innerWidth,innerHeight);
    draw();
  
    
c.beginPath();
c.arc(1100,y,10,0,Math.PI*2,false);
c.lineWidth= 10;
c.strokeStyle="red";
c.stroke();

c.beginPath();
c.arc(1100,y,30,0,Math.PI*2,false);
c.lineWidth= 10;
c.strokeStyle="yellow";
c.stroke();

c.beginPath();
c.arc(1100,y,50,0,Math.PI*2,false);
c.lineWidth= 10;
c.strokeStyle="green";
c.stroke();
    
    
     
if(y+50 > innerHeight || y - 50 < 0)
    {
        dy= -1 * dy;
    }

   if(game==1)
   {y+=dy;}
    
}
 var x2=100;


function firearrow()
{ if(game==1){
    cl--;
    if(cl>=0)
        {
            shoot();
        }
    else
    {   
        draw1();
    }
}
}

function shoot()
{ 
     if(x2<1100 )
    {  requestAnimationFrame(shoot);
    c.beginPath();
    c.moveTo(x2,y1);
    c.lineTo(x2+75,y1);
    c.lineWidth=2;
    c.stroke(); 
     
     c.beginPath();
    c.moveTo(x2+65,y1+10);
    c.lineTo(x2+75,y1);
    c.lineWidth=2;
    c.stroke();
    
    c.beginPath();
    c.moveTo(x2+65,y1-10);
    c.lineTo(x2+75,y1);
    c.lineWidth=2;
    c.stroke();
     
    x2+=5; 
     
     
  }
     else
{   
     x2=100;
}
   
} 
 


function reset()
{
    cl=5;
    score=0;
}

function stop()
{
    game=0;
}

function start()
{
    game=1;
}
 animate();
  draw();
write();
