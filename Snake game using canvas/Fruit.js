function Fruit(){
    this.x;
    this.y;
    this.piclocation=function(){
    this.x=(Math.floor(Math.random()*row-1)+1)*scale;
    this.y=(Math.floor(Math.random()*col-1)+1)*scale;    
    }
    this.draw=function()
    {
        ctx.fillStyle='#2483C0';
        if(c==5)
        ctx.fillRect(this.x,this.y,13,13);
        else
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}