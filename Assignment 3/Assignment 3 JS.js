// Question 1

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
    
    for (var i = 0; i < library.length; i+=1) 
   {
    var p = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) 
    {
      console.log("Already read " + p);
    }
    else
    {
     console.log("You still need to read " + p);
    }
   }
  
// QUESTION 2:
// Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
// below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".

var driver=confirm("Are you greater 18 years old?");
if(driver)
{
    console.log("Drive safe");
}
else
{
    console.log("Not legal age to drive");
}

