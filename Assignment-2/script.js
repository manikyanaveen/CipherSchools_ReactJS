function find()
{
    var store=document.getElementById("search").value;
    if(store===""||"all")
    {
        document.getElementById("alpha").style.display="block";
        document.getElementById("beta").style.display="block";
        document.getElementById("charlie").style.display="block";
    }
    if(store==="sweet")
    {
        document.getElementById("beta").style.display="none";
        document.getElementById("charlie").style.display="none";
    }
    if(store==="cupcake")
    {
        document.getElementById("alpha").style.display="none";
        document.getElementById("charlie").style.display="none";
    }
    if(store==="cake")
    {
        document.getElementById("alpha").style.display="none";
        document.getElementById("beta").style.display="none";
    }

}
function action1()
{
        document.getElementById("alpha").style.display="block";
        document.getElementById("beta").style.display="block";
        document.getElementById("charlie").style.display="block";
}

function action2()
{
    document.getElementById("alpha").style.display="block";
    document.getElementById("beta").style.display="none";
    document.getElementById("charlie").style.display="none";
}
function action3()
{
    document.getElementById("beta").style.display="block";
    document.getElementById("alpha").style.display="none";
     document.getElementById("charlie").style.display="none";
}
function action4()
{
    document.getElementById("charlie").style.display="block";
    document.getElementById("beta").style.display="none";
    document.getElementById("alpha").style.display="none";
}
function action5()
{
    document.getElementById("alpha").style.display="block";
    document.getElementById("beta").style.display="none";
    document.getElementById("charlie").style.display="none";
}
