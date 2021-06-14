/*    Projekt 2 - Tvorba webových stránek (ITW), 2020/2021    */
/*    Autor:  Zuzana Kopčilová (xkopci02)                     */

window.addEventListener("showMenu", function(){title()});
window.addEventListener("hideMenu", function(){title()});
window.addEventListener("showEdu", function(){title()});
window.onscroll = function(){stickyMenu()};

//funkce rozbalí sendvičové menu na mobilních zařízeních
function showMenu()
{
    var x=document.getElementById("schovavaci");
    
    if ($(window).width() >= 992) //hodnota 992 je zde hranicí mezi mobilními zařízeními (telefony, tablety) a počítači/notebooky
    {
        return;
    }
    else
    {
        if (x.style.display == "block" )
        {
            x.style.display = "none";
        }
        else
        {
            x.style.display = "block";
        }
    }
}

//funkce přepíná mezi zobrazovanými kartami lokálního menu v sekci "Vzdělání"
function showEdu(x)
{
    var stud = document.getElementById("Stud");
    var certif = document.getElementById("Certif");
    var exper = document.getElementById("Exper");

    var edu1 = document.getElementById("edu1");
    var edu2 = document.getElementById("edu2");
    var edu3 = document.getElementById("edu3");

    if(x == 1)
    {
        stud.style.display = "block";
        certif.style.display = "none";
        exper.style.display = "none";

        edu1.style.backgroundColor = "#B39CD0";
        edu2.style.backgroundColor = "transparent";
        edu3.style.backgroundColor = "transparent";
    }

    if(x == 2)
    {
        stud.style.display = "none";
        certif.style.display = "block";
        exper.style.display = "none";

        edu1.style.backgroundColor = "transparent";
        edu2.style.backgroundColor = "#FF6F91";
        edu3.style.backgroundColor = "transparent";
    }

    if(x == 3)
    {
        stud.style.display = "none";
        certif.style.display = "none";
        exper.style.display = "block";

        edu1.style.backgroundColor = "transparent";
        edu2.style.backgroundColor = "transparent";
        edu3.style.backgroundColor = "#F9F871";
    }


}


function stickyMenu()
{
    var navbar = document.getElementById("menu");
    var sticky = navbar.offsetTop;

    if(window.pageYOffset > sticky)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }

    var small=document.getElementById("edu-menu");
    var small_loc=small.offsetTop;
    
}