onmessage = (e) =>{

    const canvas = e.data.canvas;

    const ctx = canvas.getContext('2d');

   
    let flag = 0;
    
    class BackGround {

        
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.speed = 1;
            this.radius = 200;
            this.degree = -240;
            this.mx = 0;
            this.moveTrace = 750;
            this.triDeg = this.degree * Math.PI / 180;
            this.triDegp = (this.degree + 180) * Math.PI / 180;
            this.x = this.radius * Math.cos(this.triDeg);
            this.y = this.radius * Math.sin(this.triDeg);
            this.xp = this.radius * Math.cos(this.triDegp);
            this.yp = this.radius * Math.cos(this.triDegp);
            

            this.animate();

        }

        draw(){ 

            ctx.beginPath();
          //  ctx.strokeStyle ='black';
            ctx.fillStyle = '#C84B31';
            ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
            //ctx.stroke();
            ctx.fill();

            ctx.closePath();

            ctx.beginPath();

            ctx.fillStyle = 'skyblue';
            ctx.arc(this.xp , this.yp , this.radius,0 , 2*Math.PI);

            ctx.fill();
            ctx.closePath();
        }

        update(){
            if(!flag){
                this.mx += 0.01;
                this.degree += 2 - this.mx;
            }else{
                this.degree += 0.25;
            }
            this.triDeg = this.degree * Math.PI / 180;
            this.x = this.moveTrace * Math.cos(this.triDeg) + this.width/2;
            this.y = (this.moveTrace-250) * Math.sin(this.triDeg) + this.height/2;

            this.triDegp = (this.degree+180) * Math.PI / 180;
            this.xp = this.moveTrace * Math.cos(this.triDegp) + this.width/2;
            this.yp = (this.moveTrace-250) * Math.sin(this.triDegp) + this.height/2;
        }


        animate(){

            ctx.clearColor = 'black';
            ctx.clearRect(0,0,this.width,this.height);
            if(this.degree > -140){
                flag = 1;
            }
            this.draw();
            this.update();
            requestAnimationFrame(this.animate.bind(this));
        }
    }
    const bg = new BackGround(e.data.width , e.data.height);
 //   console.log(bg.width , bg.height);

}