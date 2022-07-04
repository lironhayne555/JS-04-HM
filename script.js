let suitNames=["Spade","Club","Hart","Diamond"];
for (var i=0;i<suitNames.length;i++)
{
    console.log(suitNames[i]);
    for(var x=1;x<=13;x++)
    {
        console.log(x+" "+suitNames[i]);
    }
}