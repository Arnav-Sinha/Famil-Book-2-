var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","Arnav.jpg","Shaarav.jpg","PAPA.jpg","Mom.PNG"];
var names = ["Family Book","Arnav Sinha", "Shaarav Sinha", "Vishal Sinha", "Tripti Sinha"];
var i = 0;
function update()
{
    i++;
    var family_array = 4
    if(i > family_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_image").src = updatedImage;
    document.getElementById("family_name").innerHTML = updatedName;
}
