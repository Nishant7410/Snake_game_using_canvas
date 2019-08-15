var sign='X';
function printx(number)
{
 let fill= document.getElementById('r'+number);
    if(fill.innerHTML=="")
        {
    fill.innerHTML=sign;            
    winner();
    checksign();        
    document.getElementById('turn').innerHTML=sign+" ki turn h";        
        }
}
function checksign()
{
    if(sign=='X')
        sign='O';
    else
        sign='X';
}
function getno(no)
{
    return document.getElementById('r'+no).innerHTML;
}
function checkmove(a,b,c,m)
{
    if(getno(a)==m&&getno(b)==m&&getno(c)==m)
        return true;
    else
        return false;
}
function winner()
{
    if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)||checkmove(1,5,9,sign)||checkmove(3,5,7,sign))
        {
        document.getElementById('turn').innerHTML=sign+" winner";
            for(var i=1;i<=9;i++)
                document.getElementById('r'+i).innerHTML="";
            throw "end game";
        }
    else 
        {
            var c=0;
            for(var i=1;i<=9;i++)
                if(getno(i)!="")
                    c++;
            if(c==9)
                {
                  document.getElementById('turn').innerHTML="its a tie";
                    throw "its a tie";
                }
        }
}